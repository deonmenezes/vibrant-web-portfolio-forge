---
description: Scaffold a new page (or service page) and wire it into the lazy-route table.
argument-hint: <PageName> [--service]
---

Scaffold a new page with the harness generator.

1. Take the user's argument as `$ARGUMENTS`.
2. Run:

   ```bash
   npm run scaffold:page -- $ARGUMENTS
   ```

3. The script writes the page file under `src/pages/` (or `src/pages/services/` if `--service`) and prints the exact `<Route>` line to add to `src/App.tsx`.
4. Apply that `<Route>` line via `Edit` on `src/App.tsx`. The route MUST use `React.lazy(() => import(...))` — the scaffold prints it that way; copy it verbatim.
5. Run `npm run verify:fast` to confirm lint + types still pass.
6. Report the new file path and route URL to the user.

Do not write the page contents yourself — the scaffold owns the template. If the user wants custom content, dispatch to `executor` after the scaffold step.
