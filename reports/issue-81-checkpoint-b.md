# Issue #81 checkpoint B — IN PROGRESS

Local continuation after the cloud run on `bc-70eb1272-707f-49bf-aa19-03b30dfc06fc` stopped. That environment did not have `var/d0de-app`. This machine does.

Authentic source: `C:\Users\nicho\OneDrive\Desktop\TennisEdge\var\d0de-app`. It is a separate tree from the workspace checkout at `965acbd`, and `var/` is gitignored. Pre-edit copies and hashes are in `forensics/issue81-pre-repair-2026-10-17-ct`. Production postgres was not opened and was not written. Freeze `7db7949a` was not rewritten.

## What the local code now does

- A Winner name uses the Winner status. A total-games `OVER CLINCHED` label no longer becomes the Winner live status.
- An Over cannot clinch from a broker game count when the parsed score is still short of the frozen line. Seventeen games against Over 19.5 stays unclinched.
- A slip with no legs is `UNAVAILABLE` and is not counted as pending. Two finished Slip B legs grade `FINAL_LOSS`.
- History total-games totals include a winner-row grade only when that row has a saved market line, and they do not double-count a grade already stored.
- Results history uses the same October 16 cutoff as History. October 17 stays visible.
- Readable archive "Final match status" follows the Winner grade. A total-games `FINAL_WIN` no longer overwrites a Winner loss. A line of 0 prints as not saved. A missing ace or break-point actual on a finished match says `ACTUAL_NOT_SAVED`.
- Value history keeps a stored favorite row and marks it `FAVORITE`. The performance summary counts underdogs only and reports `auditFavorites`. The served Winner rank is linked to the official Winner rank, and the old value is kept as `storedWinnerRank`. A missing-price note is not shown when today's Value rows already have prices.

## Tests

`npx tsx scripts/issue81-grading-repair-v1.mjs` passed.
`npx tsx scripts/check-history-clear-window-v1.mjs` passed.
`node --check` passed for `server/mobileV1/httpServer.mjs` and `server/mobileV1/valueWinnerHostV1.mjs`.

## Lane checklist

| Lane | Status |
| --- | --- |
| Winners | Local display and archive status repaired. Production rows not rewritten. Not verified on the live API. |
| Value Winners | Local summary, price note, and rank link repaired. Stored favorite row is kept. Not deployed. |
| Aces | Missing actual stays null with an explicit reason. No provider actual was saved. Not verified. |
| Break Points Won | Same as Aces. Not verified. |
| Total Games | Local clinch guard and history merge repaired. Not verified on the live API. |
| Total Sets | No new grade was invented. Not verified. |
| Ranking | Served Value rank links to the official Winner rank. Top 6 admission was not re-proven. |
| Top 6 accuracy | Not started. No challenger was run, and no improvement is claimed. |

No known October 17 production misgrade is marked fixed. The live card still has the pre-repair data until a separate release is authorized.
