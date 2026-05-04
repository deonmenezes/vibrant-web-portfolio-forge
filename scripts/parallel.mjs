#!/usr/bin/env node
// OMC-inspired parallel orchestrator. Fans out independent commands,
// streams output with lane prefixes, exits non-zero if any lane fails.
//
// Usage: node scripts/parallel.mjs <lane>=<cmd> [<lane>=<cmd> ...]
// Example: node scripts/parallel.mjs lint="npm run lint" tsc="npm run typecheck"

import { spawn } from "node:child_process";
import { performance } from "node:perf_hooks";

const RESET = "\x1b[0m";
const COLORS = ["\x1b[36m", "\x1b[33m", "\x1b[35m", "\x1b[32m", "\x1b[34m", "\x1b[31m"];

const lanes = process.argv.slice(2).map((arg, i) => {
  const eq = arg.indexOf("=");
  if (eq === -1) {
    console.error(`bad lane spec: ${arg} (expected name=cmd)`);
    process.exit(2);
  }
  return {
    name: arg.slice(0, eq),
    cmd: arg.slice(eq + 1),
    color: COLORS[i % COLORS.length],
  };
});

if (lanes.length === 0) {
  console.error("usage: parallel.mjs <name>=<cmd> [<name>=<cmd> ...]");
  process.exit(2);
}

const pad = Math.max(...lanes.map((l) => l.name.length));
const start = performance.now();

const run = (lane) =>
  new Promise((resolve) => {
    const tag = `${lane.color}[${lane.name.padEnd(pad)}]${RESET}`;
    const proc = spawn(lane.cmd, { shell: true, stdio: ["ignore", "pipe", "pipe"] });
    const ts = performance.now();

    const pipe = (stream, sink) => {
      let buf = "";
      stream.on("data", (chunk) => {
        buf += chunk.toString();
        let nl;
        while ((nl = buf.indexOf("\n")) !== -1) {
          sink.write(`${tag} ${buf.slice(0, nl)}\n`);
          buf = buf.slice(nl + 1);
        }
      });
      stream.on("end", () => {
        if (buf.length) sink.write(`${tag} ${buf}\n`);
      });
    };

    pipe(proc.stdout, process.stdout);
    pipe(proc.stderr, process.stderr);

    proc.on("close", (code) => {
      const elapsed = ((performance.now() - ts) / 1000).toFixed(2);
      resolve({ ...lane, code, elapsed });
    });
  });

const results = await Promise.all(lanes.map(run));
const total = ((performance.now() - start) / 1000).toFixed(2);

console.log("");
console.log("─".repeat(60));
for (const r of results) {
  const mark = r.code === 0 ? "\x1b[32m✓\x1b[0m" : "\x1b[31m✗\x1b[0m";
  console.log(`${mark} ${r.name.padEnd(pad)}  ${r.elapsed}s  (exit ${r.code})`);
}
console.log("─".repeat(60));
console.log(`wall time: ${total}s  (sequential would be ${results.reduce((s, r) => s + Number(r.elapsed), 0).toFixed(2)}s)`);

const failed = results.filter((r) => r.code !== 0);
if (failed.length) {
  console.error(`\n${failed.length} lane(s) failed: ${failed.map((f) => f.name).join(", ")}`);
  process.exit(1);
}
