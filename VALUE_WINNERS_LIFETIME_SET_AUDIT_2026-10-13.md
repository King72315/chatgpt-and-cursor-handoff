# Value Winners lifetime match and set audit

Read-only audit for handoff issue 22. No TennisEdge code, database, grade, freeze, or deployment was changed.

Checked 13 October 2026. Latest verified completed matches are the same America/Chicago date: Rolex Shanghai round of 16 (de Minaur def. Khachanov; Gea def. Mensik) and completed Wuhan matches including Putintseva def. Sonmez.

## Counting policy

Each committed frozen selection is counted once. The identity is the stored `valueFreezeId`. The source is the read-only archive `GET /api/tennisedge/mobile/v1/winners-archive` read on 13 October 2026. Slates through 10 October come from the committed value ledgers. Slates from 11 October through 13 October come from the readable value archive packets. `/today`, `/results`, `/history`, and `/value-winners` were not called.

Rows with `countsAsHistoricalBet: false` are reconstructed previews. None of the 47 committed rows are marked that way, and none were counted as reconstructions. The October 8 rotation pool, ranks 5 through 10, never entered the committed four and is not counted: Jakub Mensik, Brandon Nakashima, Francisco Cerundolo, Lorenzo Musetti, Arthur Gea, and Ben Shelton.

The original engine and the later underdog engine are separate. The original engine, first committed on 2 October 2026 and first frozen at `2026-10-02T11:02:22.928Z`, published the Winner model's predicted player when that side had a positive edge. The cap was 4. That player could be the market favorite or the market underdog. Those underdog-priced rows stay in the original era. They are not rewritten as the later underdog engine.

The true-underdog engine prices the market underdog on every scored match and rejects a sportsbook favorite. Its first frozen slate is 9 October 2026 at `2026-10-09T05:01:01.602Z`. Both of those selections are long underdogs, and both have a null Winner rank, which is the engine's mark that the Winner model did not pick them. The 9 October working-tree savepoint ABB10/9 already contains that rule. The last original-engine freeze is 8 October 2026 at `2026-10-08T08:43:49.557Z`.

The 10 October committed slate contains 9 selections. The nominal cap is 6. Four of those rows carry the 9 October freeze timestamp and were reseated onto 10 October. Ranks 7, 8, and 9 are past the cap. They are included in the primary figures because they are on the committed slate. A cap-6 sensitivity is given below. The 12 October package contains six committed rows whose stored ranks are 3, 6, 7, 8, 9, and 10. The missing ranks are not in that package and were not invented. The 13 October slate has three committed rows, two of them stored at rank 1. They are different matches.

Retired and canceled matches are outside the four outright denominators. A retirement is not given fictional remaining sets. Set counts use verified completed sets only.

These set figures describe match results. They are not a record of a Higher 0.5 Sets Won wager being offered, placed, or paid.

## Lifetime figures

Unique original published selections: **47**.

| Bucket | Count |
| --- | ---: |
| Completed outright win or loss | 40 |
| Retired | 2 |
| Canceled / void, no sets | 2 |
| Not completed at check time | 3 |
| Completed matches with a verified set score | 40 of 40 |

1. **Won the match outright: 17 of 40 (42.5%).**
2. **Among those wins, the opponent won at least one set: 6 of 17 (35.3%).** Exactly one set: 6 of 17. Straight-set wins: 11 of 17 (64.7%).
3. **Lost the match outright: 23 of 40 (57.5%).**
4. **Among those losses, the selected player won at least one set: 12 of 23 (52.2%).** Exactly one set: 12 of 23. Straight-set losses: 11 of 23 (47.8%).

Also:

- VW won and the opponent won at least one set: **6 of 17 wins**.
- VW lost and VW won at least one set: **12 of 23 losses**.
- VW won at least one set regardless of the match result: **29 of 40 (72.5%).**

No verified completed match in this ledger is best of five. Every "at least one set" case is exactly one set.

## Original engine and true-underdog engine

| Sample | Published | Retired | Void | Pending | Completed record | Opponent took a set in a VW win | VW took a set in a VW loss |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Original engine, 2–8 October | 21 | 2 | 0 | 0 | 10-9 (52.6% wins) | 2 of 10 (20.0%) | 7 of 9 (77.8%) |
| Original engine, favorite price only | 13 | 1 | 0 | 0 | 8-4 | 1 of 8 | 3 of 4 |
| Original engine, underdog price only | 8 | 1 | 0 | 0 | 2-5 | 1 of 2 | 4 of 5 |
| True-underdog engine, 9–13 October | 26 | 0 | 2 | 3 | 7-14 (33.3% wins) | 4 of 7 (57.1%) | 5 of 14 (35.7%) |
| All published selections | 47 | 2 | 2 | 3 | 17-23 | 6 of 17 | 12 of 23 |

If the three 10 October rows past rank 6 are left out (van de Zandschulp win in straight sets, Svajda loss in straight sets, Kudermetova loss in straight sets), the completed record is 16-21. The set conditions stay 6 of 16 wins and 12 of 21 losses.

## Stored grade versus verified result

Six stored outright grades disagree with the verified winner:

| Slate | Selection | Stored | Verified |
| --- | --- | --- | --- |
| 2026-10-09 | Camilo Ugo Carabelli | WIN | LOSS, won exactly one set |
| 2026-10-09 | Jan-Lennard Struff | WIN | LOSS, won exactly one set |
| 2026-10-10 | Adrian Mannarino | WIN | LOSS, won zero sets |
| 2026-10-10 | Mananchaya Sawangkaew vs Maya Joint | LOSS | WIN, opponent won exactly one set |
| 2026-10-10 | Polina Kudermetova | WIN | LOSS, won zero sets |
| 2026-10-12 | Mananchaya Sawangkaew vs Magdalena Frech | WIN | LOSS, won zero sets |

Nine selections were still ungraded and now have a verified completed result: Elina Svitolina, Pablo Carreno Busta, Ignacio Buse, Botic van de Zandschulp, Zachary Svajda, Cristina Bucsa, Zeynep Sonmez, Karen Khachanov, and Arthur Gea.

Nicolas Mejia is stored VOID. ATP records a retirement win, 6-4, 0-0 RET. Alex de Minaur vs Hubert Hurkacz is stored WIN on the incomplete score 6-4, 3-2. The public score is the same line with a retirement. Both stay in the retired bucket.

Ann Li vs Qinwen Zheng and Shuai Zhang vs Anna Kalinskaya are stored VOID. Public pages record both as canceled or withdrawn, with no sets. Those stored voids agree.

Several stored game strings are the first listed player's games, not the selected player's games. Where only the tiebreak count differs, the set winner used here is the official one. Those ties are Griekspoor (stored 7, official 4), Fery (stored 8 and 7, official 6 and 2), Blockx (stored 11, official 9), Kraus vs Linette (stored 7, official 3), Sawangkaew vs Joint (stored 7, official 3), and Starodubtseva (stored 7, official 2).

## Not counted

- October 8 rotation-pool rows that were never in the committed four.
- Reconstructed underdog boards. The corrected display is not the frozen betting ledger.
- Bublik vs Zverev, Davidovich Fokina vs Hurkacz, and Zhang vs Krueger. They were not verified complete.
- The two retirements and two cancellations, for the four outright figures.

## Row-level audit

Sets are completed sets won by the selected player, then by the opponent. Price is the frozen decimal price of the selection, then the opponent.

| CT slate | Rank | Era | Price side | Selected player | Opponent | Decimal price | Edge | Stored grade | Verified | Sets VW / opponent | Set condition | Freeze ID | Source |
| --- | ---: | --- | --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| 2026-10-02 | 1 | original | favorite | E. Mertens | K. Volynets | 1.83 / 2.07 | 0.184 | WIN | WIN | 2 / 1 | opponent 1+ set | `vw1:2026-10-02:2026-10-02|e|mertens|k|volynets` | AP China Open round of 64: Mertens def. Volynets 6-0, 4-6, 7-5. Stored score is Volynets's games and matches. |
| 2026-10-02 | 2 | original | underdog-priced | Lin Zhu | Donna Vekic | 2.65 / 1.53 | 0.146 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-02:2026-10-02|donna|vekic|lin|zhu` | AP China Open: Vekic def. Zhu 6-1, 4-6, 6-2. Stored set count Vekic 2, Zhu 1 matches. |
| 2026-10-02 | 3 | original | favorite | A. Li | A. Krueger | 1.76 / 2.18 | 0.140 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-02:2026-10-02|a|krueger|a|li` | AP China Open: Li def. Krueger 6-4, 6-2. Stored 4-6 2-6 is Krueger's games. |
| 2026-10-02 | 4 | original | underdog-priced | A. Tabilo | D. Shapovalov | 2.26 / 1.65 | 0.103 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-02:2026-10-02|a|tabilo|d|shapovalov` | Tokyo official score: Shapovalov def. Tabilo 7-5, 3-6, 6-4 (results.tennisdata.com and tennis.esp.br). |
| 2026-10-03 | 1 | original | underdog-priced | S. Kraus | D. Yastremska | 3.05 / 1.39 | 0.273 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-03:2026-10-03|d|yastremska|kraus|s` | Bild 4 Oct 2026 results board: Kraus 6-1 6-4 Yastremska. Stored named count Kraus 2, Yastremska 0 matches. |
| 2026-10-03 | 2 | original | favorite | D. Shnaider | E. Alexandrova | 1.60 / 2.36 | 0.017 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-03:2026-10-03|alexandrova|e|d|shnaider` | WTA official news: Alexandrova def. Shnaider 3-6, 6-4, 6-3. |
| 2026-10-04 | 1 | original | underdog-priced | Novak Djokovic | Alexander Zverev | 3.53 / 1.34 | 0.231 | WIN | WIN | 2 / 1 | opponent 1+ set | `vw1:2026-10-04:2026-10-04|alexander|zverev|djokovic|novak` | ATP official news, Beijing quarterfinal 4 Oct 2026: Djokovic def. Zverev 4-6, 6-4, 6-4. |
| 2026-10-04 | 2 | original | favorite | Elina Svitolina | Maria Sakkari | 1.36 / 3.21 | 0.160 | UNGRADED | WIN | 2 / 0 | straight sets | `vw1:2026-10-04:2026-10-04|elina|svitolina|maria|sakkari` | tennis-db and youaretennis China Open R32, 5 Oct 2026: Svitolina def. Sakkari 6-4, 7-5. Value slate was still ungraded. Winner-archive score 4-6 5-7 is Sakkari's games and matches. |
| 2026-10-04 | 3 | original | favorite | Daniil Medvedev | Francisco Cerundolo | 1.43 / 3.04 | 0.065 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-04:2026-10-04|cerundolo|francisco|daniil|medvedev` | ATP official news, Beijing 4 Oct 2026: Medvedev def. Cerundolo 7-6(4), 6-3. |
| 2026-10-05 | 1 | original | underdog-priced | Nicolas Mejia | Chun-Hsin Tseng | 2.54 / 1.51 | 0.298 | VOID | RETIRED | 1 / 0 | RETIRED | `vw1:2026-10-05:2026-10-05|chun|hsin|tseng|mejia|nicolas` | ATP Shanghai qualifying page: Mejia wins 6-4, 0-0 RET. One completed set. Not counted in the four outright figures. Stored grade VOID. |
| 2026-10-05 | 2 | original | favorite | Alex de Minaur | Hubert Hurkacz | 1.76 / 2.17 | 0.219 | WIN | RETIRED | 1 / 0 | RETIRED | `vw1:2026-10-05:2026-10-05|alex|de|minaur|hubert|hurkacz` | Tennistonic Beijing semifinal 5 Oct 2026: de Minaur def. Hurkacz 6-4, 3-2 ret. Stored score is the same incomplete line and stored grade is WIN. Counted as retired, not as an outright completed win. |
| 2026-10-05 | 3 | original | underdog-priced | Valentin Vacherot | Jiri Lehečka | 2.70 / 1.52 | 0.210 | LOSS | LOSS | 0 / 2 | straight sets | `vw1:2026-10-05:2026-10-05|jiri|lehecka|vacherot|valentin` | Japan Open official recap 5 Oct 2026: Lehecka def. Vacherot 6-4, 6-2. |
| 2026-10-05 | 4 | original | underdog-priced | Rio Noguchi | Alexandre Muller | 2.90 / 1.41 | 0.182 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-05:2026-10-05|alexandre|muller|noguchi|rio` | ATP Shanghai qualifying page: Muller def. Noguchi 6-3, 4-6, 6-1. |
| 2026-10-06 | 1 | original | favorite | I. Swiatek | I. Jovic | 1.51 / 2.72 | 0.037 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-06:2026-10-06|i|jovic|i|swiatek` | tennis-db and youaretennis China Open: Swiatek def. Jovic 6-1, 6-3. Stored 1-6 3-6 is Jovic's games. A Winner-lane file says VOID because that file has no saved score; the match result is a completed win. |
| 2026-10-07 | 1 | original | favorite | Mirra Andreeva | Ekaterina Alexandrova | 1.31 / 3.84 | 0.136 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-07:2026-10-07|alexandrova|ekaterina|andreeva|mirra` | WTA official news, Beijing quarterfinal 8 Oct 2026: Andreeva def. Alexandrova 7-6(4), 7-6(3). Stored 6-7 6-7 is Alexandrova's games. |
| 2026-10-07 | 2 | original | favorite | Tallon Griekspoor | Pavel Kotov | 1.45 / 2.90 | 0.135 | LOSS | LOSS | 0 / 2 | straight sets | `vw1:2026-10-07:2026-10-07|griekspoor|tallon|kotov|pavel` | ATP Shanghai round of 128: Kotov def. Griekspoor 6-4, 7-6(4). Stored tiebreak is (7). Set result is still a straight-sets loss. |
| 2026-10-07 | 3 | original | favorite | Matteo Arnaldi | Bernard Tomic | 1.47 / 2.81 | 0.051 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-07:2026-10-07|arnaldi|matteo|bernard|tomic` | ATP Shanghai round of 128: Arnaldi def. Tomic 6-3, 6-1. Stored 3-6 1-6 is Tomic's games. |
| 2026-10-08 | 1 | original | underdog-priced | Arthur Fery | Karen Khachanov | 3.36 / 1.33 | 0.283 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-08:2026-10-08|arthur|fery|karen|khachanov` | ATP Shanghai: Khachanov def. Fery 7-6(6), 6-7(5), 7-6(2). Stored tiebreaks are (8) and (7). Fery still won exactly one set. Oct 8 forensic copy had this match live at 7-6, 1-2; the published players are the same four. |
| 2026-10-08 | 2 | original | favorite | Frances Tiafoe | Yannick Hanfmann | 1.41 / 3.06 | 0.174 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-08:2026-10-08|frances|tiafoe|hanfmann|yannick` | ATP Shanghai: Tiafoe def. Hanfmann 6-4, 6-4. Stored 4-6 4-6 is Hanfmann's games. |
| 2026-10-08 | 3 | original | favorite | Flavio Cobolli | Adrian Mannarino | 1.48 / 2.78 | 0.171 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-08:2026-10-08|adrian|mannarino|cobolli|flavio` | ATP Shanghai: Mannarino def. Cobolli 6-1, 4-6, 6-3. |
| 2026-10-08 | 4 | original | favorite | Alexander Blockx | Quentin Halys | 1.73 / 2.20 | 0.119 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-08:2026-10-08|alexander|blockx|halys|quentin` | ATP Shanghai: Halys def. Blockx 4-6, 7-6(9), 6-4. Stored tiebreak is (11). Blockx won exactly one set. |
| 2026-10-09 | 1 | underdog | underdog | Camilo Ugo Carabelli | Felix Auger-Aliassime | 14.72 / 1.04 | 0.069 | WIN | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-09:2026-10-09|aliassime|auger|felix|camilo|carabelli|ugo` | ATP Shanghai: Auger-Aliassime def. Carabelli 4-6, 7-6(1), 7-5. Stored grade WIN disagrees. |
| 2026-10-09 | 2 | underdog | underdog | Jan-Lennard Struff | Daniil Medvedev | 5.93 / 1.15 | 0.116 | WIN | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-09:2026-10-09|daniil|medvedev|jan|lennard|struff` | ATP Shanghai: Medvedev def. Struff 4-6, 6-4, 6-3. Stored grade WIN and stored score 6-4 6-3 omit the opening set. |
| 2026-10-10 | 1 | underdog | underdog | Elise Mertens | Qinwen Zheng | 2.27 / 1.70 | 0.204 | LOSS | LOSS | 0 / 2 | straight sets | `vw1:2026-10-10:2026-10-10|elise|mertens|qinwen|zheng` | tennis-db and youaretennis Beijing semifinal 10 Oct 2026: Zheng def. Mertens 7-5, 6-2. |
| 2026-10-10 | 2 | underdog | underdog | Pablo Carreño Busta | Alejandro Tabilo | 2.50 / 1.58 | 0.149 | UNGRADED | WIN | 2 / 1 | opponent 1+ set | `vw1:2026-10-09:2026-10-09|alejandro|tabilo|busta|carreno|pablo` | ATP Shanghai: Carreno Busta def. Tabilo 4-6, 7-6(2), 6-4. Value slate was still ungraded. Entered the Oct 10 slate with the Oct 9 freeze timestamp. |
| 2026-10-10 | 3 | underdog | underdog | Adrian Mannarino | Karen Khachanov | 3.52 / 1.34 | 0.129 | WIN | LOSS | 0 / 2 | straight sets | `vw1:2026-10-10:2026-10-10|adrian|mannarino|karen|khachanov` | ATP Shanghai: Khachanov def. Mannarino 6-2, 6-4. Stored grade WIN disagrees with the stored score and with ATP. |
| 2026-10-10 | 4 | underdog | underdog | Mananchaya Sawangkaew | Maya Joint | 2.60 / 1.59 | 0.120 | LOSS | WIN | 2 / 1 | opponent 1+ set | `vw1:2026-10-10:2026-10-10|joint|maya|mananchaya|sawangkaew` | WTA Wuhan qualifying draw: Sawangkaew def. Joint 4-6, 6-2, 7-6(3). Stored grade LOSS disagrees. Stored tiebreak is (7). |
| 2026-10-10 | 5 | underdog | underdog | Ignacio Buse | Zizou Bergs | 2.51 / 1.57 | 0.107 | UNGRADED | LOSS | 0 / 2 | straight sets | `vw1:2026-10-09:2026-10-09|bergs|zizou|buse|ignacio` | ATP Shanghai: Bergs def. Buse 6-0, 6-3. Value slate was still ungraded. Entered Oct 10 with the Oct 9 freeze timestamp. |
| 2026-10-10 | 6 | underdog | underdog | Sinja Kraus | Magda Linette | 2.01 / 1.85 | 0.100 | WIN | WIN | 2 / 0 | straight sets | `vw1:2026-10-10:2026-10-10|kraus|sinja|linette|magda` | WTA Wuhan qualifying draw: Kraus def. Linette 7-6(3), 6-2. Stored tiebreak is (7). |
| 2026-10-10 | 7 | underdog | underdog | Botic Van de Zandschulp | Alex Michelsen | 2.57 / 1.55 | 0.085 | UNGRADED | WIN | 2 / 0 | straight sets | `vw1:2026-10-09:2026-10-09|alex|michelsen|botic|de|van|zandschulp` | ATP Shanghai: van de Zandschulp def. Michelsen 6-4, 6-4. Value slate was still ungraded. Value rank 7, past the nominal cap of 6. Oct 9 freeze timestamp. |
| 2026-10-10 | 8 | underdog | underdog | Zachary Svajda | Learner Tien | 3.59 / 1.32 | 0.054 | UNGRADED | LOSS | 0 / 2 | straight sets | `vw1:2026-10-09:2026-10-09|learner|tien|svajda|zachary` | ATP Shanghai: Tien def. Svajda 7-5, 7-5. Value slate was still ungraded. Value rank 8, past the nominal cap of 6. Oct 9 freeze timestamp. |
| 2026-10-10 | 9 | underdog | underdog | Polina Kudermetova | Katie Volynets | 3.45 / 1.40 | 0.068 | WIN | LOSS | 0 / 2 | straight sets | `vw1:2026-10-10:2026-10-10|katie|volynets|kudermetova|polina` | WTA Wuhan qualifying draw: Volynets def. Kudermetova 6-2, 6-1. Stored grade WIN disagrees with the stored score and with the draw. Value rank 9, past the nominal cap of 6. |
| 2026-10-11 | 1 | underdog | underdog | Cristina Bucsa | Dayana Yastremska | 2.17 / 1.70 | 0.394 | UNGRADED | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-11:2026-10-11|bucsa|cristina|dayana|yastremska` | ESPN Wuhan scoreboard, completed: Yastremska 6-4, 5-7, 6-3. Value slate was still ungraded. |
| 2026-10-11 | 2 | underdog | underdog | Rafael Jodar | Jiri Lehecka | 2.24 / 1.71 | 0.291 | WIN | WIN | 2 / 1 | opponent 1+ set | `vw1:2026-10-11:2026-10-11|jiri|lehecka|jodar|rafael` | ATP Shanghai round of 32: Jodar def. Lehecka 4-6, 7-6(2), 6-4. |
| 2026-10-11 | 3 | underdog | underdog | Donna Vekić | Maria Sakkari | 2.52 / 1.53 | 0.248 | LOSS | LOSS | 0 / 2 | straight sets | `vw1:2026-10-11:2026-10-11|donna|vekic|maria|sakkari` | ESPN Wuhan scoreboard and Tennis Tonic: Sakkari def. Vekic 6-4, 6-2. |
| 2026-10-11 | 4 | underdog | underdog | Leylah Fernandez | Ekaterina Alexandrova | 2.03 / 1.80 | 0.218 | WIN | WIN | 2 / 1 | opponent 1+ set | `vw1:2026-10-11:2026-10-11|alexandrova|ekaterina|fernandez|leylah` | WTA Wuhan draw, BBC, and ESPN: Fernandez def. Alexandrova 6-4, 3-6, 6-3. |
| 2026-10-11 | 5 | underdog | underdog | Anhelina Kalinina | Sonay Kartal | 2.72 / 1.47 | 0.176 | LOSS | LOSS | 0 / 2 | straight sets | `vw1:2026-10-11:2026-10-11|anhelina|kalinina|kartal|sonay` | ESPN Wuhan scoreboard and Tennis Tonic: Kartal def. Kalinina 7-5, 6-3. |
| 2026-10-11 | 6 | underdog | underdog | Ann Li | Qinwen Zheng | 3.03 / 1.39 | 0.170 | VOID | VOID | — | VOID | `vw1:2026-10-11:2026-10-11|ann|li|qinwen|zheng` | Tennis.com match page: Ann Li vs Qinwen Zheng, completed cancelled. No sets. Stored VOID agrees. |
| 2026-10-12 | 3 | underdog | underdog | Yuliia Starodubtseva | Caty McNally | 2.46 / 1.59 | 0.251 | LOSS | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-12:2026-10-12|caty|mcnally|starodubtseva|yuliia` | WTA Wuhan draw and BBC: McNally def. Starodubtseva 2-6, 7-6(2), 6-4. Stored tiebreak is (7). |
| 2026-10-12 | 6 | underdog | underdog | Shuai Zhang | Anna Kalinskaya | 3.19 / 1.39 | 0.084 | VOID | VOID | — | VOID | `vw1:2026-10-12:2026-10-12|anna|kalinskaya|shuai|zhang` | Tennis Tonic: Kalinskaya withdrew from Wuhan. Exa cancellation notice for 13 Oct 2026. No sets. Stored VOID agrees. |
| 2026-10-12 | 7 | underdog | underdog | Zeynep Sönmez | Yulia Putintseva | 2.01 / 1.86 | 0.075 | UNGRADED | LOSS | 1 / 2 | VW 1+ set | `vw1:2026-10-12:2026-10-12|putintseva|yulia|sonmez|zeynep` | WTA official news 13 Oct 2026: Putintseva def. Sonmez 6-7(1), 6-3, 7-5. Value slate was still ungraded. |
| 2026-10-12 | 8 | underdog | underdog | Karen Khachanov | Alex de Minaur | 2.24 / 1.71 | 0.042 | UNGRADED | LOSS | 0 / 2 | straight sets | `vw1:2026-10-12:2026-10-12|alex|de|minaur|karen|khachanov` | Rolex Shanghai Masters results, 13 Oct 2026: de Minaur def. Khachanov 6-3, 6-4. Value slate was still ungraded. |
| 2026-10-12 | 9 | underdog | underdog | Mananchaya Sawangkaew | Magdalena Frech | 2.31 / 1.68 | 0.027 | WIN | LOSS | 0 / 2 | straight sets | `vw1:2026-10-12:2026-10-12|frech|magdalena|mananchaya|sawangkaew` | WTA Wuhan draw, ESPN, and Tennis Tonic: Frech def. Sawangkaew 6-3, 7-6(5). Stored grade WIN disagrees. |
| 2026-10-12 | 10 | underdog | underdog | Arthur Gea | Jakub Menšik | 2.60 / 1.55 | 0.018 | UNGRADED | WIN | 2 / 0 | straight sets | `vw1:2026-10-12:2026-10-12|arthur|gea|jakub|mensik` | Rolex Shanghai Masters results, 13 Oct 2026: Gea def. Mensik 7-6(4), 6-4. Value slate was still ungraded. |
| 2026-10-13 | 1 | underdog | underdog | Alejandro Davidovich Fokina | Hubert Hurkacz | 1.96 / 1.94 | 0.253 | UNGRADED | PENDING | — | PENDING | `vw1:2026-10-13:2026-10-13|alejandro|davidovich|fokina|hubert|hurkacz` | Rolex Shanghai schedule: Hurkacz vs Davidovich Fokina not before 18:00 local on 13 Oct. Not on the completed results page. |
| 2026-10-13 | 1 | underdog | underdog | Shuai Zhang | Ashlyn Krueger | 2.31 / 1.68 | 0.316 | UNGRADED | PENDING | — | PENDING | `vw1:2026-10-13:2026-10-13|ashlyn|krueger|shuai|zhang` | ESPN Wuhan scoreboard: Zhang vs Krueger listed at 7:00 PM, not final. |
| 2026-10-13 | 2 | underdog | underdog | Alexander Bublik | Alexander Zverev | 3.38 / 1.37 | 0.086 | UNGRADED | PENDING | — | PENDING | `vw1:2026-10-13:2026-10-13|alexander|bublik|alexander|zverev` | Rolex Shanghai schedule: Zverev vs Bublik not before 18:00 local on 13 Oct. Not on the completed results page. |
