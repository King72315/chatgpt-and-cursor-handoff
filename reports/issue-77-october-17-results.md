# Issue #77 — October 17, 2026 CT results check

Read-only. No application files, database writes, remints, or deployment.

## Access

The published hosted card was readable at `https://tennisedge-api-production.up.railway.app/api/tennisedge/mobile/v1`.

- Service: `tennisedge-hosted-mobile-v1`
- Slate: `2026-10-17` America/Chicago
- Phase: `OFFICIAL`
- Freeze: `7db7949a`
- Store: postgres
- Check time: 10/17/2026, 8:58:46 AM CT (`results.fetchedAtCT`)

This is the stored published slate, not a reconstructed card. The health payload does not expose a git SHA, so this report does not claim which commit is running.

## Winners

One board. Home, Results, and History show the same three frozen seats. The record below is counted once.

Original freeze seats, unchanged: #1 Ostapenko, #2 Swiatek, #3 Medvedev. No replacements. Frozen at 12:00:33 AM CT.

| Rank | Pick | Opponent | App status | App score | Grade |
| --- | --- | --- | --- | --- | --- |
| 1 | Jelena Ostapenko | Sonay Kartal | FINAL | 7-6(11) 7-6(7) | LOSS |
| 2 | Iga Swiatek | Maja Chwalinska | FINAL | 5-7 1-6 | LOSS |
| 3 | Daniil Medvedev | Rafael Jodar | FINAL | 6-3 6-4 | LOSS |

Decided Winner record: **0 wins, 3 losses, 0 void, 0 pending.**

History totals for this slate match that record. `DUPLICATE_WINNER_HISTORY_ROWS` is 0. The active Top 6 seat list is empty because all three matches are final.

At 8:53 AM CT, Swiatek was still `LIVE` at 5-7, 1-4. By 8:58:46 AM CT the same row was `FINAL_LOSS` at 5-7, 1-6. The settled grade is the later one.

## Independent scores

- Kartal def. Ostapenko, Wuhan semifinal, 7-6(11-9), 7-6(7-5). Tennis.com shows Kartal 7, 11, 7, 7 and Ostapenko 6, 9, 6, 5. ESPN and the WTA report the same match as 7-6(9), 7-6(5), which is the loser's tiebreak points. The app prints the winner's tiebreak points, 7-6(11) 7-6(7). Winner, two sets, and 26 games agree. https://www.tennis.com/tournaments/dongfeng-voyah-wuhan-open/matches/s-kartal-vs-j-ostapenko-2026-10-17
- Chwalinska def. Swiatek, Wuhan semifinal, 7-5 6-1. The point-by-point report shows a finished match, sets 5-7 and 1-6 from Swiatek's side. https://sportowefakty.wp.pl/tenis/relacja-na-zywo/183764/iga-swiatek-maja-chwalinska-live — TennisDB records the same result as 7-5 6-1. https://tennis-db.com/wta/matches/balldontlie_wta:18602391/iga-swiatek-vs-maja-chwalinska
- Jodar def. Medvedev, Shanghai semifinal, 6-3 6-4. ATP Tour: https://www.atptour.com/en/news/medvedev-jodar-shanghai-2026-saturday and https://www.atptour.com/en/news/shanghai-2026-results — Tennis.com: https://www.tennis.com/tournaments/rolex-shanghai-masters/matches/r-jodar-vs-d-medvedev-2026-10-17

The WTA scores page did not render a completed Swiatek row in the fetch used here. The point-by-point report and TennisDB agree with the app's final score.

## Value Winners

The active Value board and today's Home Value list are empty. The stored Value history for 2026-10-17 has two graded rows. They are the same Ostapenko and Medvedev matches, not two extra matches.

| Value rank | Pick | Opponent | Grade | Saved price | Opponent price |
| --- | --- | --- | --- | --- | --- |
| 1 | Jelena Ostapenko | Sonay Kartal | LOSS | 2.06 | 1.78 |
| 2 | Daniil Medvedev | Rafael Jodar | LOSS | 1.51 | 2.59 |

Value record: **0 wins, 2 losses, 0 void, 0 pending.** Swiatek was not a Value selection.

Ostapenko's 2.06 price is the underdog price. Medvedev's 1.51 price is shorter than Jodar's 2.59, so the stored Value row is a favorite. Both rows say `priceKind: prestart` and book `draftkings`.

## Downstream actuals already on the card

| Match | Aces | Break points won | Total games | Total sets |
| --- | --- | --- | --- | --- |
| Ostapenko | projected 4.1, actual empty | projected 4.6, actual empty | Over 21.5, actual 26, WIN | projected 2.4, actual 2, no grade |
| Swiatek | projected 3.7, actual empty | projected 5.0, actual empty | Over 19.5, actual 19, LOSS | projected 2.4, actual 2, no grade |
| Medvedev | projected 7.9, actual empty | projected 3.8, actual empty | Over 22.5, actual 19, LOSS | projected 2.4, actual 2, no grade |

Aces and break points won have no saved actual on any of the three rows. External box scores exist for the finished matches. They were not copied in as grades.

## Discrepancies, not repaired

1. While Swiatek was live, the results name row said `OVER CLINCHED` at 5-7, 1-4. That score is 17 games, and the frozen line is Over 19.5. The match finished 5-7, 1-6, 19 games, and the stored total-games grade is now LOSS.
2. The official results `grades` list and `header.tgStatuses` contain only Medvedev. History's total-games total is 0-1. The winner rows already carry Ostapenko as a total-games WIN and Swiatek as a total-games LOSS.
3. History's Winner screen for this check shows only 2026-10-17. The Results screen history still lists 2026-10-16 (1-2-0) and 2026-10-15 (3-6-1). Those earlier days are not part of today's 0-3.
4. Slip A and Slip B are still `NOT_STARTED`. History's two-man slips are 2 pending. All three Winner matches are final.
5. The Value board note says value cannot be calculated because no prematch moneyline was saved. The two Value history rows contain prestart DraftKings prices.
6. The Value rows store `winnerRank` 2 for Ostapenko and 4 for Medvedev. The Winner board ranks are 1 and 3.
7. The app's Ostapenko tiebreak text uses the winner's points. Tennis.com, ESPN, and the WTA use the loser's points for the same 11-9 and 7-5 tiebreaks.

## Count used in this report

Winners: 0-3-0, pending 0. Value Winners: 0-2-0, pending 0. The two Value losses are the Ostapenko and Medvedev matches already inside the Winner 0-3.
