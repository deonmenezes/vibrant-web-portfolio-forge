---
description: Run lint, typecheck, and build in parallel. Pass = ready to ship.
---

Run the parallel verifier:

```bash
npm run verify
```

If any lane fails, surface the failures grouped by lane (lint vs typecheck vs build). Do not attempt a fix in this command — report the failure and stop. The user runs `/ship` to know whether the branch is green; fixing comes from `executor` afterwards.

If the build passes, print:

- the largest 5 chunks from `dist/assets/`
- a one-line summary: `green: lint ✓ tsc ✓ build ✓ — top chunk: <name> <size>`
