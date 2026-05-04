---
description: Multi-agent release audit — runs seo-auditor and perf-auditor in parallel.
---

Run two agents in parallel and merge their verdicts:

1. `seo-auditor` — full SEO + structured data sweep.
2. `perf-auditor` — bundle + lazy-route + asset weight sweep.

Spawn both with the Agent tool in a single message (parallel execution). Wait for both to return.

Merge the output as:

```
## Release Audit

### SEO
<seo-auditor verdict>

### Performance
<perf-auditor verdict>

### Combined verdict
<one of: GREEN — ship / YELLOW — minors only / RED — N blockers>
```

Do **not** apply fixes from this command. The audit produces a punch list; fixes are dispatched separately to `executor` or `designer`.
