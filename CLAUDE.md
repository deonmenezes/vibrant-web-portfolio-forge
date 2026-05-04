# vibrant-web-portfolio-forge — Agent Harness

Vite + React 18 + TypeScript + shadcn-ui portfolio for **Virelity.com**. This file is the contract every Claude Code agent reads first; it tells you *where things live* and *how to move fast here*.

## Stack

- Build: Vite 5 + `@vitejs/plugin-react-swc`
- UI: shadcn-ui (Radix primitives in `src/components/ui/`) + Tailwind + `framer-motion`
- 3D / motion: `@react-three/fiber`, `@react-three/drei`, `@splinetool/react-spline`, `lenis`
- Data: `@tanstack/react-query` (configured but not heavily used)
- Routing: `react-router-dom` v6
- Analytics: Vercel Analytics + Speed Insights, GA, Meta Pixel (in `index.html`)
- Forms: `react-hook-form` + `zod`
- Email/Sheets: `@emailjs/browser`, `@google/generative-ai`, custom Google Apps Script

## Layout

```
src/
  App.tsx              # router + lazy routes
  main.tsx             # bootstrap
  pages/               # 15 top-level pages
  pages/services/      # 10 service detail pages
  components/          # custom components
  components/ui/       # shadcn primitives — do not hand-edit
  components/custom/   # bespoke composites
  contexts/            # React context (BookingContext)
  hooks/               # use-mobile, use-toast, use-analytics
  lib/                 # analytics, googleSheetsService, utils
  data/                # static content
  vite-mocks/          # Vite shims (next/navigation for Vercel pkgs)
scripts/               # parallel.mjs, scaffold-page.mjs (harness)
.claude/agents/        # specialised agents
.claude/commands/      # slash commands
```

Path alias: `@/*` → `src/*`.

## Harness commands (run these — they fan out work)

| Command | What it does |
|---|---|
| `npm run verify` | lint ‖ typecheck ‖ build, in parallel, aggregated output |
| `npm run verify:fast` | lint ‖ typecheck (skip build) — pre-commit speed |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run scaffold:page -- <Name> [--service]` | Generate a new page from template |
| `npm run analyze` | Build with bundle visualizer (set `ANALYZE=1`) |
| `npm run clean` | Remove `dist/` and Vite cache |

Slash commands (from inside Claude Code): `/ship`, `/audit`, `/new-page`.

## Conventions

- **Lazy routes.** New routes go through `React.lazy(() => import(...))` in `src/App.tsx`. Don't break the lazy chain — a single eager import balloons the initial bundle.
- **No new lockfiles.** Three already exist (`package-lock.json`, `yarn.lock`, `bun.lockb`). Use `npm install` and only edit `package-lock.json`.
- **Tailwind first.** Inline styles only when Tailwind can't express the rule.
- **shadcn primitives are generated.** Files under `src/components/ui/` mirror the shadcn registry — extend them via wrappers in `src/components/`, don't fork the primitive.
- **SEO is load-bearing.** `index.html` and per-page `<Helmet>` blocks are part of the product. Any change to titles/meta needs an SEO sanity check (use `seo-auditor` agent).

## When to delegate

| Task | Agent |
|---|---|
| New page / feature implementation | `executor` |
| Visual / layout / Tailwind work | `designer` |
| Pre-merge review | `reviewer` |
| SEO / meta / structured data audit | `seo-auditor` |
| Bundle / runtime perf audit | `perf-auditor` |

Run multiple agents in parallel when the work is independent (e.g. `seo-auditor` + `perf-auditor` for a release readiness pass).

## Adding a service page

1. `npm run scaffold:page -- MyService --service`
2. Add a `<Route path="/services/my-service" element={<MyService />} />` line to `src/App.tsx` (the scaffold prints the exact line).
3. Add a card on `src/pages/Services.tsx`.
4. Run `npm run verify`.

## Build perf knobs already wired

- Manual chunks split `vendor`, `radix`, `three`, `motion` from app code (`vite.config.ts`).
- All routes are `React.lazy` — initial JS only loads the matched route.
- CI runs lint / typecheck / build as parallel jobs (`.github/workflows/ci.yml`).
