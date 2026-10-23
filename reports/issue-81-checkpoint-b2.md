# Issue #81 checkpoint B2 — IN PROGRESS

The reviewable source is on the private branch `issue-81-verified-counts` in King72315/tennisedge, commit `377b42f5c7f5de9868367f1292a1ab62c3f0dc04`. The folder is `issue-81-review/`, with SHA256 hashes in `MANIFEST.json`. This public report does not include the application source. This session is local. There is no cloud-agent URL.

Freeze `7db7949a` was not rewritten. Production postgres was not opened and was not written. Nothing was deployed.

## Verified count readings

One `get_fixtures` call for 2026-10-17 America/Chicago returned 169 fixtures, 98 finished. The three published Winner matches resolved to one finished fixture each. Counts are the selected player's match-period values. They were not saved to the live card.

| Match | Event | Aces | Break points won |
| --- | --- | --- | --- |
| Jelena Ostapenko vs Sonay Kartal | 12171642 | 9 | 4 |
| Iga Swiatek vs Maja Chwalinska | 12171704 | 0 | 2 |
| Daniil Medvedev vs Rafael Jodar | 12171698 | 3 | 2 |

Swiatek's 0 aces is a verified zero from a present match row. A missing stat stays null. A match row is not added to its set rows. A set-only total is used only when the match row is absent and the set rows are complete. Two sources that disagree do not overwrite a saved verified count.

## Tests

From `var/d0de-app`:

- `npx tsx scripts/issue81-count-actuals-v1.mjs` passed.
- `npx tsx scripts/issue81-grading-repair-v1.mjs` passed.
- `npx tsx scripts/winner-admission-before-rank-v1.mjs` passed.
- `npx tsx scripts/check-lab-copy-v1.mjs` passed.
- `npx tsx scripts/issue81-accuracy-protocol-v1.mjs` printed `INCONCLUSIVE` because the test sample is 0 and the minimum is 100.
- `node --check` passed for the edited server files.

The count test covers verified zero, opponent rejection, ambiguous fixtures, period conflict, duplicate delivery, JSON reload, late fill, retirement void without a fabricated actual, archive and Lab reads, certified versus shadow totals, a source-supported zero line, and a started seat that keeps its rank when a higher new probability arrives.

## Lane checklist

| Lane | Status |
| --- | --- |
| Winners | Local status separation remains tested. Live rows were not rewritten. |
| Value Winners | Favorite rows stay auditable. Medvedev 1.51 versus 2.59 is FAVORITE. Ostapenko 2.06 versus 1.78 is UNDERDOG. |
| Aces | Provider readings exist for the three October 17 matches. They are not persisted on the live card. |
| Break Points Won | Same as Aces. |
| Total Games | Local grade and history repairs remain tested. Live reconciliation was not run against production rows. |
| Total Sets | A line-free projection keeps actual and error and does not get a win/loss. No new production grade. |
| Ranking | A started frozen seat keeps its rank. Ineligible rows stay unranked. October 17 was not restamped. |
| Top 6 accuracy | Protocol is fixed. Result is INCONCLUSIVE. No improvement is claimed. |

No known October 17 production misgrade is marked fixed.
