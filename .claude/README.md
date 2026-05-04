# `.claude/` — Agent Harness

OMC-inspired multi-agent harness for this Vite + React + TS portfolio.

## What's here

```
.claude/
  settings.json         # permissions allowlist + env
  agents/
    executor.md         # implementer for new pages / components
    designer.md         # UI / Tailwind / motion specialist
    reviewer.md         # pre-merge code review (read-only verdict)
    seo-auditor.md      # SEO + structured-data audit
    perf-auditor.md     # bundle + runtime perf audit
  commands/
    ship.md             # /ship — lint ‖ tsc ‖ build, parallel
    audit.md            # /audit — SEO + perf agents in parallel
    new-page.md         # /new-page — scaffold a page + wire route
```

## Speed model

The harness pairs two parallelism dimensions:

1. **Build parallelism** — `npm run verify` runs lint + typecheck + build concurrently via `scripts/parallel.mjs`. Wall time = `max(lanes)`, not `sum(lanes)`.
2. **Agent parallelism** — `/audit` dispatches `seo-auditor` and `perf-auditor` in a single message so Claude Code runs them in parallel.

CI mirrors the same shape: a 3-way matrix in `.github/workflows/ci.yml`.

## Adding a new agent

1. Create `.claude/agents/<name>.md` with frontmatter `name`, `description`, `model`, `tools`.
2. Reference it from a slash command in `.claude/commands/` if you want a one-line invocation.
3. Add a row to the "When to delegate" table in the root `CLAUDE.md`.

## Adding a new slash command

Drop a markdown file in `.claude/commands/`. The frontmatter `description` shows up in the command picker; the body is the prompt. Use `$ARGUMENTS` to splice user input.

## Permissions

`settings.json` allowlists the dev loop (`npm run`, `vite`, `tsc`, `eslint`, `node scripts/*`, common read-only git). Adjust as the workflow grows. Never widen `Bash(git push *)` to force-push.
