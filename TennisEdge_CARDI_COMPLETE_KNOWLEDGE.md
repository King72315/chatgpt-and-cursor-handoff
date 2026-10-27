# TennisEdge Complete Technical Knowledge Package for Cardi

**Audience:** Cardi (BetBrain HQ AI), permanent searchable reference.  
**Author of this package:** Mariah, read-only audit on 2026-10-23.  
**Subject tree:** `C:\Users\nicho\OneDrive\Desktop\TennisEdge`  
**Git:** `https://github.com/King72315/tennisedge.git`, branch `cursor/riri-workflow-definition-aee0`, HEAD `965acbd` (2026-10-12, “Rank Winner freezes only after verified CT eligibility”).  
**This audit did not** restart TennisEdge, call a sports provider, open the production database, change a formula, regrade a slate, or deploy.

Evidence labels used everywhere below:

- **PROVEN:** Read in this working tree, or stored as a frozen constant in that tree.
- **SUPPORTED:** A stored measurement or handoff record. Not re-counted and not re-run against a live service in this audit.
- **HYPOTHESIS:** An interpretation that the records do not settle.
- **UNAVAILABLE:** Cannot be established from files this audit was allowed to read.

Version labels used in section 9:

- **HISTORICAL:** Applied to slates before a later rule, and still required for those frozen cards.
- **IMPLEMENTED IN SOURCE:** Present and reachable in this working tree.
- **LAST APPROVED:** The rule the project constitution and production-contract constants name as the live rule for prospective slates.
- **DEPRECATED:** Left in the tree and forbidden to write the official number.
- **UNRESOLVED:** Source, a later handoff, and the last running image do not agree, and this audit did not open that image.

---

## 0. How Cardi should use this package

Read section 1 before treating any formula as something that is still running. The repository still contains the engines. Containment in the repository is not evidence that a service was still publishing on 2026-10-23.

When two rules conflict, use the version label in section 9. Do not blend a September 5 C3-only card with a September 21 reliability card. Do not apply Winner V2 temperature. Winner V2 has no temperature.

Worked numbers in section 6 that are marked **FORMULA DEMONSTRATION** use constants from the source and inputs chosen for the demonstration. They are not a replay of a named historical match. A full input-to-grade replay of one frozen slate was **UNAVAILABLE** in this audit because the production database was not opened and no single freeze packet was re-executed.

---

## 1. Operational status

**Instruction for Cardi:** TennisEdge is a discontinued product. Do not restart it, do not buy or call its sports feeds, and do not treat it as an active BetBrain application. This instruction comes from the assignment that requested this package.

**What the files show:**

| Fact | Evidence | Label |
| --- | --- | --- |
| Engines, phone contract, and hosted card server are still in the tree | `src/data`, `server/mobileV1`, Expo app | **PROVEN** that the code exists |
| Last handoff lines that name a TennisEdge API deployment stop on 2026-10-17 | Handoff status log: deployment `6d4cd4ef` under issue 81; earlier the same day `2c0c9b2c`, `27f01c66` | **SUPPORTED** |
| Issue 57, on 2026-10-15, recorded Railway service `tennisedge-api`, deployment `996a7cdc`, freeze `6b37e771`, health PASS, Winner model `tennisedge-winner-model-v2` | `forensics/pre-issue57-research-v1/REPORT-A.md` | **SUPPORTED**. The container was not re-read tonight |
| That same report says git HEAD `965acbd` was not the production image | REPORT-A.md | **SUPPORTED** |
| A dated shutdown commit, issue, or status file | Searched this tree and the handoff file for a shutdown statement | **UNAVAILABLE** |
| Whether the process was still listening on 2026-10-23 | No health check was performed | **UNAVAILABLE** |

After 2026-10-17 the handoff log in `RIRI_MARIAH_HANDOFF.md` records ChurchEdge work, not a new TennisEdge deployment. That is an absence of later deployment notes, not a proof of the minute the process stopped.

**Working tree versus HEAD.** On 2026-10-23 these formula files had no uncommitted diff against `965acbd`: Family D production stack, Challenger D replay, quality-aware weights, C3, Tennis Script Trust, reliability V1.1, Winner V2. These files did have uncommitted local edits this audit did not author:

- `src/data/winnerCountProjectionV1.ts` — 93 added lines. The count formulas in section 6.8 are the working tree.
- `src/data/valueWinnersV1/valueWinnerMathV1.ts` — a display type gained an optional `priceNote` field. The edge equation was not in that diff.
- `server/mobileV1/store.mjs` — 34 added lines. Key names cited below were read from the working tree.

Equality of this tree with deployment `6d4cd4ef` or `996a7cdc` is **UNRESOLVED**.

---

## 2. Glossary

| Term | Meaning in this project |
| --- | --- |
| Family D | Sole owner of official Total Games side, `pOver`, and `pUnder`. Marker `tennisedge-production-recovery-challenger-d-v1`. Stack `FAMILY_D_C3_FULL_SIGNAL_PRODUCTION_V2`. |
| FDE | Full-data distribution engine. Monte Carlo of games from two hold probabilities. One of three blend votes. |
| Shape | Empirical match-length distribution from completed scorelines. Second blend vote. |
| Market | No-vig probability of the quoted total. Third blend vote. |
| Shape 1.00 | Production shape multiplier. The dormant 1.25 candidate is not applied. |
| C3 | Ranking component. `evidenceConf` from data quality, agreement, uncertainty, and contradiction. Does not set the side. |
| Tennis Script Trust | Ranking score from 2026-09-06 through 2026-09-20. After 2026-09-21 it is stored and does not select Top Props. |
| Reliability V1.1 | `TENNIS_EDGE_TOP_PICK_RELIABILITY_V1_1`. Certification and Top Props order from 2026-09-21. |
| Top Props | User-facing name of the official Total Games board. Cap 6. Minimum official size 1. |
| Top 4 selector | Seat structure from 2026-09-07: full valid slate, cap 6, Slip A = #1+#4, Slip B = #2+#3. The name “Top 4” is historical. The cap is 6. |
| Slip A / Slip B | Two two-leg combinations of seats 1–4. Seats 5 and 6 are official and do not create Slip C. |
| Winner V1 | `tennisedge-match-winner-model-v1`. Structural logit, then temperature 1.55. Does not vote on totals. |
| Winner V2 | `tennisedge-winner-model-v2`. Six-feature logit, sigmoid, no temperature. New mints. |
| pWinner | Probability that the named player wins the match. |
| Value Winner | Edge of the frozen `pWinner` over the no-vig price of the market underdog. Cap 6. |
| CERTIFIED / BORDERLINE / UNCERTIFIED | Reliability publication classes. UNCERTIFIED never publishes. |
| Chicago date | `America/Chicago` calendar date that owns a slate. |
| Exact line | The sportsbook total. It is the grading threshold. The product does not substitute 21 or 37. |
| Freeze | The stored official card for a date. Later reads must not remint it. |
| Light board | Fewer than 8 valid Total Games matches. Triggers a second-provider completeness check. The check does not reject the slate. |
| VOID | Not a win and not a loss. Incomplete, retired, cancelled, or otherwise withheld. |
| PUSH | Completed games equal the frozen line. |
| The Lab | Separate copies of signals. Not the official pick. |
| Match Profile | Diagnostic from 2026-09-11. Zero decision authority. |

---

## 3. Timeline of major rules

Dates are America/Chicago slate dates unless noted. Source: constants in the files named in section 12.

| Date | Rule | Label |
| --- | --- | --- |
| 2026-08-15 cutoff | ATP/WTA hold priors estimated on stored Rapid counts before this date | **IMPLEMENTED IN SOURCE** |
| 2026-08-17 to 2026-08-18 | Forensic Family D board 17–11 | **PROVEN** as a stored constant, not regraded |
| 2026-08-29 | Winner V1 temperature frozen at 1.55 | **HISTORICAL** for V1 rows |
| Through 2026-09-04 | Issued Total Games boards stay identity | **HISTORICAL** |
| 2026-09-05 | Prospective Family D. C3 is the ranking owner for that day | **HISTORICAL** for that slate |
| 2026-09-06 | Tennis Script Trust becomes the ranking score. C3 stays inside it | **HISTORICAL** as selector; **IMPLEMENTED** as a component |
| 2026-09-07 | Top 4 full-slate selector. Cap later documented as 6. Slip A and Slip B | **LAST APPROVED** structure |
| 2026-09-11 | Match Profile diagnostic only | **LAST APPROVED** |
| 2026-09-18 | Extra 75–80 Winner band cool removed. V1 display is a single temperature | **HISTORICAL** V1 |
| 2026-09-21 | Reliability V1.1 selects Top Props. Trust becomes diagnostic. New Winner mints use fresh rank, saturation on the V1 path, and reliability-aware order where the row is not V2 | **LAST APPROVED** for Top Props. Winner order: see section 9 |
| 2026-10-12 | Git HEAD `965acbd` | **PROVEN** commit. Not the Oct 15 image (**SUPPORTED**) |
| 2026-10-15 | Issue 57 baseline export. Deployment `996a7cdc`, freeze `6b37e771` | **SUPPORTED** |
| 2026-10-17 | Last handoff deployment notes for the API (`6d4cd4ef` and earlier that day) | **SUPPORTED** |
| 2026-10-23 | This package. No service check | Shutdown instant **UNAVAILABLE** |

---

## 4. Architecture and storage

### 4.1 Components

| Component | Path | Responsibility |
| --- | --- | --- |
| Total Games probability | `src/data/distribution/challengerRecoveryEngineDV1.ts` | Official `pOver` |
| Hold math | `src/data/distribution/holdUnitContractV1.ts`, `challengerHoldEngineC2.ts` | SPW to hold, shrinkage |
| Monte Carlo | `src/data/distribution/totalGamesDistributionV1.ts`, `matchSimulationV1.ts` | FDE distribution |
| Shape | `src/data/distribution/matchShapeDistributionV1.ts` | Scoreline expected games and shape `pOver` |
| Blend | `src/data/distribution/componentAuthorityDV1.ts`, `sideNeutralEngineV1.ts` | Quality-aware log-odds blend |
| Extreme-rank nudge | `src/data/distribution/extremeRankOverrideResistanceV1.ts` | +0.02 `pOver` in one case |
| C3 | `src/data/familyDC3SelectionV1.ts` | `evidenceConf` |
| Confidence inputs to C3 | `src/data/confidenceRecoveryV1.ts` | Data quality, agreement, uncertainty, contradiction |
| Trust | `src/data/tennisScriptTrustV1.ts` | Ranking score |
| Reliability | `src/data/topPickReliabilityV1/` | Certification and Top Props order |
| Seat structure | `src/data/top4FullSlateProductionV1/` | Cap, slips, stamp |
| Winner mint | `src/data/matchWinnerLaneV1/independentWinnerEngineV1.ts` | Builds V2 probability |
| Winner rank | `src/data/matchWinnerLaneV1/winnerRankingV1.ts` | Board order |
| Value | `src/data/valueWinnersV1/valueWinnerMathV1.ts` | Underdog edge |
| Counts | `src/data/winnerCountProjectionV1.ts` | Expected aces and break points won |
| Grading | `src/data/gradingEngine.ts` | WIN, LOSS, PUSH, PENDING |
| Phone contract | `src/data/mobileOfficialCardV1/productionContractV1.ts` | What the phone is allowed to display |
| Hosted store | `server/mobileV1/store.mjs` | Postgres key-value card, results, archives |
| Phone UI | Expo app under the repo root | Reads the frozen card. Must not recompute Family D, ranking, Top Props, or Winner |

`src/data/mobileOfficialCardV1/hostedClientV1.ts` states that the hosted client never runs Family D, Winner, `rankingScore`, Top 4, or official grading.

### 4.2 Database

**PROVEN** from `server/mobileV1/store.mjs`: one table.

```text
tennisedge_kv (
  k TEXT PRIMARY KEY,
  v JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)
```

The connection string is an environment variable. It is not copied here.

Keys read in that file:

| Key | Payload |
| --- | --- |
| `card:YYYY-MM-DD` | Official slate card |
| `results:YYYY-MM-DD` | Graded results merge |
| `build:YYYY-MM-DD` | Build state |
| `archive:freeze:YYYY-MM-DD` | Freeze archive, including winners |
| `archive:grades:YYYY-MM-DD` | Grade packet |
| `winners-readable-archive:YYYY-MM-DD` | Phone-facing winner archive |
| `winners-readable-archive:index` | Archive index |
| `winners-readable-archive:identity-index` | Identity index, not a slate |
| `value-winner-readable-archive:YYYY-MM-DD` | Value archive |
| `value-winner-readable-archive:identity-index` | Value identity index |
| `live-identity:YYYY-MM-DD` | Live identity |
| `live-ledger:YYYY-MM-DD` | Live ledger |
| `live-health:YYYY-MM-DD` | Live health |
| `profile:YYYY-MM-DD` | Profile packet |

Issue 57 Report A inventory of one database export, **SUPPORTED**, not re-opened:

| Prefix | Rows in that export |
| --- | ---: |
| card / results / winners-readable-archive | 38 / 38 / 38 |
| value-winner | 14 |
| downstream-market | 482 |
| winner-count-projection | 1,042 |
| lab-copy1 / lab-copy2 | 2,214 / 1,230 |
| shadow | 2,572 |

The export hash and row count in that report: SHA-256 `4e7354005d57495d54a189a341a48f3a814ded9602515821c0568befd768631f`, 8,253 rows. This audit did not re-hash the file.

A normalized relational schema of picks, odds, and players is **UNAVAILABLE**. The official record is the JSON document under `card:`.

### 4.3 Identity

`src/data/canonicalMatchIdentityV1.ts` folds player names and keeps a small alias list. Winner ranking groups fixtures with `canonicalFixtureGroupsV1` on the player pair, commence time, and slate date, then keeps the row with more available V2 features and the newer history date (`winnerRankingV1.ts`, `candidateEvidenceV1`).

Top Props dedupe on `matchKey` inside `selectTopPicksV1`. The first row for a key is kept.

Value requires the quoted players to be the same canonical pair as the Winner row, the quote’s Chicago date to equal the slate date, and the quote to be before start when `requireStillPrematch` is set.

### 4.4 Providers named in source

No keys are recorded here.

| Provider | Role in this tree | Official use |
| --- | --- | --- |
| The Odds API (`api.the-odds-api.com`) | Totals and moneylines | Daily Total Games discovery, together with SportsGameOdds |
| SportsGameOdds | Totals, schedule, some moneylines | Totals may enter the candidate pool. SGO moneylines are not Winner V1 |
| API-Tennis (`api.api-tennis.com`) | Fixtures, surface, scores, serve stats | History and live status. A 64-hex key in the old Rapid env vars is treated as an API-Tennis key and is not sent to Rapid |
| Rapid | Older serve-stat payloads | Prior estimation used stored Rapid dumps. Not a second live owner |
| Sackmann CSVs | Historical matches and rankings | Archives. Tournament-Monday rank is not a match-time rank |
| SportsData, BallDontLie, API-Sports | Present in `src/data/providers/index.ts` | Not named by the constitution as the daily discovery pair |

Live match status may come only from an explicit provider status field plus an exact enum. The words Final, Finals, Semi-final, and Quarter-final must not become canonical FINAL. **PROVEN** as a project rule in `AGENTS.md` and the constitution.

### 4.5 Repositories

| Repo | Role |
| --- | --- |
| `https://github.com/King72315/tennisedge.git` | Application. This tree. Issue 57 said a sanitized push of the hybrid image was not made |
| `https://github.com/King72315/chatgpt-and-cursor-handoff` | RiRi / Mariah status. Not the prediction engine |

Other branches and the contents of `var/d0de-app` (named by Issue 57 and Issue 89 as the October running folder) were **not** fully re-diffed against this HEAD. That folder is outside the statement “this working tree equals production.”

### 4.6 What does not own the official number

Neutral 50/50, Clean R0, I0, D1, Strong Match, Risk V3, Risk V4, POST818 Shape 1.25, POST826 overlay, fixed-21, fixed-37, fat-edge ranking, line translation V1, history-accuracy stacks, and Match Profile are listed on `FAMILY_D_C3_FULL_SIGNAL_PRODUCTION_V2.notRestoredAsOwners`. History-accuracy stacks have `live: false` and `promoted: false`. Side-neutral shape weights exist and are not the production blend (`dShapeUsesChampionWeightsNotB`).

---

## 5. Prediction pipeline

Order for a prospective slate after 2026-09-21. Earlier dates stop at the ranking owner in section 3.

1. **Collect.** The Odds API and SportsGameOdds are queried together. America/Chicago assigns the slate date. SGO-only full-match singles totals may enter. Extra matches do not force extra Top Props. If the Odds key and SportsGameOdds are both missing, discovery records that neither is configured (`src/data/tennisApi.ts`). This audit did not call either feed.
2. **Identify.** Canonical names, alias fold, and fixture grouping. A duplicate pair does not become two official props (`selectTopPicksV1` skips a repeated `matchKey`).
3. **Attach history.** Prematch serve-count snapshots and same-format scorelines with a commence cutoff. Matches on or after the Winner history cutoff are dropped (`matchesBeforeWinnerCutoffV1`).
4. **Family D probability.** `replayRecoveryDFromFrozenV1`. Output `dPOver`, `dPUnder`, mathematical side, expected total from the seated probability. This is the only official Total Games probability.
5. **Extreme-rank overlay.** `EXTREME_RANK_OVERRIDE_RESISTANCE_V1` may add 0.02 to `pOver`. It is not a fourth vote. It can change the published probability. See section 6.1.4.
6. **C3 stamp.** `stampFamilyDC3OnPickV1` writes `evidenceConf` and restores the sealed `pOver`, `pUnder`, side, and line afterward.
7. **Trust stamp.** `scoreTennisScriptTrustV1` writes a ranking score. From 2026-09-21 it does not choose the published set.
8. **Reliability.** `scoreOuReliabilityV1` then `selectTopPicksV1`. Certification, then publish filter, then cap 6.
9. **Seat stamp.** Top 4 full-slate selector assigns ranks already chosen, Slip A, and Slip B. It does not retune the score.
10. **Winner mint,** independent of the total. `mintWinnerFromEventV1`. If rank or archive exists, `pWinner` is Winner V2. The total is not an input.
11. **Value.** Frozen `pWinner` plus one book’s two prices, schedule verified, underdog only, positive edge, cap 6. A committed Value slate is not reselected.
12. **Counts.** `projectWinnerCountsFromRowsV1` for the already frozen Winner. Display. Does not write `pWinner` or the total.
13. **Freeze.** Hosted store writes `card:YYYY-MM-DD`. Issued historical cards are restored to their original `pOver` and side (`restoreIssuedProbabilityIdentityV1`) through 2026-09-04.
14. **Phone.** Reads the frozen contract. Does not run the engines.
15. **Live.** Explicit provider status. Scores attach for display and later grading. Tournament-round words are not status.
16. **Grade.** `gradeTotalGamesPickDetailed`. Completed games versus frozen side and exact line. Retired or incomplete stays PENDING in that function. WIN and LOSS are the hit-rate inputs used by Issue 57. VOID and PENDING stay out.
17. **Preserve.** Results key, readable archives, and identity indexes. Reset and archive behavior is a separate lifecycle. This audit did not replay a reset.

**Light board.** If valid Total Games matches are fewer than 8, `lightBoardProviderCheckV1` runs a second-provider completeness check before Top Props. It does not filter the slate. A provider failure is not a light board and must not seal a short card.

**Dependency ownership**

| Number | Owner | Must not be overwritten by |
| --- | --- | --- |
| Total Games side and `pOver` | Family D, plus the extreme-rank nudge when it fires | C3, Trust, Reliability, Top 4, Winner, Value, Profile, Risk |
| `evidenceConf` | C3 | Trust may read it. Trust may not replace the formula |
| Top Props membership and order, from 2026-09-21 | Reliability V1.1 | Trust, Match Profile, Winner |
| Seats and slips | Top 4 selector | A one-seat board does not grow a second leg |
| `pWinner` | Winner V2 for new mints; V1 temperature for historical V1 rows | Value, counts, Family D |
| Value edge | Value math on a frozen `pWinner` | Does not write `pWinner` |
| Ace and break-point counts | Count projection | Does not write `pWinner`, rank, or Family D |

---

## 6. Formulas

Notation: `clamp01(x)` is `min(1, max(0, x))`. `logit(p) = ln(p / (1-p))` with `p` clipped to `[0.0001, 0.9999]` in the blend. `sigmoid(z) = 1 / (1 + exp(-z))`.

### 6.1 Family D Over/Under

**Function:** `replayRecoveryDFromFrozenV1`  
**File:** `src/data/distribution/challengerRecoveryEngineDV1.ts`  
**Effective:** Prospective slates after 2026-09-04. Shape multiplier 1.00. Trust probability overlay off.  
**Status:** **LAST APPROVED** probability owner. **IMPLEMENTED IN SOURCE.**

#### 6.1.1 Serve points to service-game hold

**Functions:** `gameHoldFromPointWinV1`, `shrinkHoldTowardPriorV1` in `holdUnitContractV1.ts`.  
**Pipeline:** `playerPipelineFromSnapshotC2` with mode `A_hold_space`.

Let `p` be serve-point win rate, clipped to `(1e-6, 1-1e-6)`, and `q = 1 - p`.

```text
beforeDeuce = p^4 * (1 + 4q + 10 q^2)
deuceMass   = 20 p^3 q^3
fromDeuce   = p^2 / (p^2 + q^2)
hold        = beforeDeuce + deuceMass * fromDeuce
```

Shrinkage, mode A, `k = 8`:

```text
if sample <= 0 or observation is missing:
  posterior = tour prior, weight = 0
else:
  weight = sample / (sample + 8)
  posterior = weight * observedHold + (1 - weight) * tourPrior
```

Tour priors (`empiricalHoldPriorsDV1.ts`), player-equalized, cutoff 2026-08-15, 88,568 service points:

| Tour | Players | Hold prior | SPW prior |
| --- | ---: | ---: | ---: |
| ATP | 98 | 0.7938 | 0.6391 |
| WTA | 97 | 0.6176 | 0.5503 |
| Unknown tour | 195 | 0.706 | not the shrinkage target when tour is known |

`k = 8` is marked provisional. The file says a method-of-moments estimate on the same sample is about 9.5 (WTA) and 9.8 (ATP). It was not fit to 2026-08-28.

If either player’s true hold is unavailable, both holds passed into FDE are null, samples are 0, and the path is prior-only. Missing is not stored as a fake 0.50 hold. The Monte Carlo then uses `priorHold`.

**Hold quality** (`holdEvidenceQualityDV1`):

```text
if either player unavailable:
  quality = 0, priorOnly = true
else:
  n = min(matchesA, matchesB)
  pts = min(pointsA, pointsB)
  quality = min(1, n/10)*0.7 + min(1, pts/400)*0.3
  if n < 3: quality *= 0.4
```

**FORMULA DEMONSTRATION, not a historical match.** SPW `p = 0.64`:

```text
hold = 0.812615
```

Observed hold 0.70, sample 10, ATP prior 0.7938:

```text
weight = 10/18 = 0.555556
posterior = 0.741689
```

#### 6.1.2 FDE probability

**Function:** `buildTotalGamesDistributionV1`, called from `runDistributionEngineV1` with `iterations: 8000` and `seed: 15` on the Family D path. The function default, if those arguments are omitted, is 25,000 iterations and seed `0x4fde0011`. Family D does not omit them.

```text
pOver_FDE = (count of simulated matches with games > line) / 8000
```

The line is the argument. Games equal to the line are not Over. Best-of-3 and best-of-5 are both legal. There is no substitution of 21 or 37.

A closed form of one simulated match is the set simulator in `matchSimulationV1.ts`. This package does not expand every point-state transition. The official definition of `pOver` is the fraction of iterations finishing strictly above the line. Re-running 8,000 paths for a sample match was not done. A numeric FDE example for a named match is **UNAVAILABLE**.

Expected total on the official packet is not the raw simulation mean after the blend. `consistentExpectedTotalFromProbabilityLawV1` places expected games from the seated `pOver`, the line, and `stdTotal`. The returned field is `etOwnership: "seated_pOver_location_family_v1"`.

#### 6.1.3 Shape probability

**Function:** `buildMatchShapeDistributionV1`  
**Weights:** `MATCH_SHAPE_BLEND_WEIGHTS_V2`  
**Seat:** `shapeEvidenceQualityDV1` using `SHAPE_QUALITY_FLOOR_DV1`.

Seat requires histories proven, at least 6 accepted matches combined, and at least 3 per player. Recency window is 56 days. Minimum quality to seat is 0.35. Same format only (BO3 or BO5). Incomplete, retired, walkover, and cancelled scorelines are rejected.

```text
wa = sampleA / (sampleA + sampleB)
wb = 1 - wa
expected = 0.5 * (wa*avgA + wb*avgB) + 0.5 * ((avgA+avgB)/2)
```

With `playerAvgWeight = 0.5`, that is the sample-weighted average of the two player means. If one sample is 0, that player’s average falls back to the line inside the function.

```text
if long labels > short labels: expected += 1.35
if short labels > long labels: expected += -1.55
expected += (decidingSetRate - 0.40) * 2.2
```

`decidingSetRate` defaults to 0.40 per player when missing, so a missing deciding rate adds 0.

Optional shorteners, only when the input is finite:

- Favorite closeout `c >= 0.25`: subtract `min(1.4, c * 2.2)`.
- Legacy resistance in `(0, 8.5]`: subtract 0.7.

Then:

```text
gap = expected - line
pSig = sigmoid(gap / 2.4)
pSig = clamp01(pSig + longMass*0.10 - shortMass*0.12)
```

`longMass` and `shortMass` are the average of the two players’ rates, clamped to `[0.05, 0.90]` and `[0.05, 0.85]`. Defaults if missing: long 0.35, short 0.25.

```text
if both empirical P(over the line) exist:
  pEmp = wa*pEmpA + wb*pEmpB
  pOver_shape = clamp01(0.55*pEmp + 0.45*pSig)
else if one exists:
  pOver_shape = clamp01(0.55*that + 0.45*pSig)
else:
  pOver_shape = clamp01(pSig)
```

`clamp01` in this file is `min(0.98, max(0.02, x))`, not `[0, 1]`.

If no scoreline sample exists at all, the function returns `pOver = 0.5` and reliability 0. Family D does not seat that as a proven Shape vote unless the BO5 fallback below fires.

**BO5 fallback** when Shape is unseated, best-of-5, and V2 stack is live: `bo5SetPathPOverV1`. Rank-gap buckets and historical total histograms are the constants in `bo5SetPathLengthPriorV1.ts`, fit on Grand Slam matches dated before 2026-08-30, `n = 717`. The fallback can seat Shape at a quality of at most 0.55. The exact histogram lookup is the function; this package does not reprint every total count. Those counts are in that file.

**Side-neutral weights** (`labelShiftLong = 1.45`, `labelShiftShort = -1.45`) are **DEPRECATED** as a production owner.

**FORMULA DEMONSTRATION.** `expected = 24`, `line = 22.5`, no empirical rate, and ignoring mass nudges:

```text
pSig = sigmoid(1.5 / 2.4) = 0.651355
```

#### 6.1.4 Quality-aware blend

**Function:** `qualityAwareWeightsDV1` then `blendQualityAwareDV1` / `blendAdaptiveLogitsV1`.  
**Starting weights:** `ADAPTIVE_LOGODDS_WEIGHTS_V2`.

```text
wF = 0.55 if holdQuality >= 0.55
   = 0.28 if holds exist but quality < 0.55
   = 0.08 if priorOnly
wF = wF * max(0.15, holdQuality or, if priorOnly, 0.15 else 0.40)

wS = 0 if Shape is not seated
   = 0.62 * shapeQuality if shapeQuality >= 0.55
   = 0.35 * shapeQuality otherwise
if priorOnly and wS > 0:
  wS = max(wS, 0.55 * shapeQuality)
  wF = 0.08

wM = 0.22 if market pOver is finite, else 0

if wS > 0 and |logit(pFDE) - logit(pShape)| > 0.5 and shapeQuality < 0.55:
  wS = wS * 0.5

renormalize wF, wS, wM to sum to 1
drop a component whose probability is null

z = wF*logit(pFDE) + wS*logit(pShape) + wM*logit(pMarket)
pOver = sigmoid(z)
pUnder = 1 - pOver
```

`complementPairV1` rounds the pair. Side is Over when `pOver > 0.5`, Under when `pOver < 0.5`, and no-call when equal (`scoreConfidenceRecoveryV1` and the canonical side helper).

Market quality is 1 when the price exists. It is not multiplied by a sample size. The market probability is the no-vig Over price of the quoted total. The same no-vig algebra as Value (section 6.6) applies to two outcome prices.

**Champion adaptive weights** (`championAdaptiveWeightsDV1`) skip the quality multiply and the conflict halving. Family D calls `qualityAwareWeightsDV1` unless `authorityMode` is `champion_adaptive`. Production recovery uses quality-aware. **PROVEN.**

#### 6.1.5 Extreme-rank nudge

**Object:** `EXTREME_RANK_OVERRIDE_RESISTANCE_V1`  
**File:** `extremeRankOverrideResistanceV1.ts`  
**Status:** `live: true`. **IMPLEMENTED IN SOURCE.** Not a fourth blend vote.

Fires only when all of these hold:

- Winner’s pick is the worse-ranked of the two players.
- Absolute rank gap is at least 100.
- Direction of the nudge is Over only.
- Rank is not the sentinel 900.
- A Sackmann rank older than 28 days does not fire.

```text
pOver_published = pOver_blend + 0.02
```

Arm name `ARM100_002`. It can move a probability across 0.50. Winner’s own `pWinner` is not changed.

#### 6.1.6 What Family D does with bad inputs

| Input | Behavior |
| --- | --- |
| No serve counts | Prior-only. FDE weight starts at 0.08. Shape can take the prior-only floor |
| No scorelines | Shape unseated, unless BO5 set-path fallback seats it |
| No market price | Market weight 0. The other weights renormalize |
| `pOver` exactly 0.5 | Top Props selector skips the row (`selectTopPicksV1`) |
| Missing line | Family D’s replay requires `line`. Top Props skips a null line. Trust, if called without a line, substitutes 21.5 (BO3) or 36.5 (BO5) for its own score only. That substitution is not the official threshold |
| Calibration map | Not installed. `FAMILY_D_CALIBRATION_LIMITATION_V1`: 17 scored frozen rows, minimum claimed at 30. Platt and Family E are off |

### 6.2 C3 evidence confidence

**Function:** `scoreFamilyDC3V1`  
**File:** `src/data/familyDC3SelectionV1.ts`  
**Effective as the selector:** 2026-09-05 only.  
**Effective as a component:** from 2026-09-06, inside Trust, and still computed afterward.  
**Status:** weights frozen. `retuneAllowed: false`. Does not include `pSelected`.

Inputs are in `[0, 1]`, from `scoreConfidenceRecoveryV1` when a C3 stamp is missing.

```text
raw = 0.40*dataQuality
    + 0.30*independentAgreement
    + 0.20*(1 - dataUncertainty)
    - 0.25*contradiction
evidenceConf = round1(100 * clamp01(raw))
```

Bins: HIGH if `evidenceConf >= 55`, LOW if `evidenceConf < 35`, otherwise MID.

`stampFamilyDC3OnPickV1` copies `pOver`, `pUnder`, side, and line from the pre-stamp pick back onto the result.

#### 6.2.1 How the four inputs are built

**Function:** `scoreConfidenceRecoveryV1` in `confidenceRecoveryV1.ts`. This score also emits its own `confidence` and a risk label. Risk does not flip the side. **PROVEN.**

```text
predictionStrength:
  pSel = max(pOver, 1-pOver)
  if pSel >= 0.62: clamp01(0.38 - (pSel-0.62)*1.15)
  else if pSel >= 0.55: 0.82
  else: clamp01((pSel-0.50)/0.05*0.55)

dataQuality starts at 0:
  +0.40 if Shape is seated
  +0.35 if not prior-only and hold is available
  +0.15 if recentMatchCount >= 8
  +0.10 if market pOver is finite
  then, if seatedSignalCount and seatedSignalMax exist:
    dataQuality = clamp01(dataQuality*0.75 + 0.25*(count/max))
  if priorOnly: dataQuality = min(dataQuality, 0.35)

FDE and empirical match length are one length seat, not two votes.
independentAgreement = (directional leans equal to the canonical side) / (directional leans)
contradiction        = (directional leans against the side) / (directional leans)
  both 0 when no directional lean exists

dataUncertainty starts at 0.25:
  +0.35 if priorOnly
  +0.15 if Shape is not seated
  +0.10 if fewer than 2 directional leans
```

The separate confidence number, not C3, is:

```text
confidence = round1(100 * clamp01(
  0.32*predictionStrength + 0.28*dataQuality + 0.22*independentAgreement
  - 0.18*uncertainty - 0.28*contradiction))
uncertainty = clamp01(dataUncertainty + (1-predictionStrength)*0.25)
```

Risk label, diagnostic: HIGH if the side is no-call, or `pSel >= 0.62`, or prior-only with strength under 0.45, or contradiction at least 0.67, or confidence under 40. LOW only if not prior-only, `pSel < 0.62`, confidence at least 55, data quality at least 0.55, and contradiction under 0.34. Otherwise MEDIUM. The HIGH band at `pSel >= 0.62` is named in the source as historical overconfidence, not a probability change.

**FORMULA DEMONSTRATION.** `dataQuality=0.8`, `independentAgreement=0.7`, `dataUncertainty=0.2`, `contradiction=0.1`:

```text
raw = 0.40*0.8 + 0.30*0.7 + 0.20*0.8 - 0.25*0.1 = 0.665
evidenceConf = 66.5
bin = HIGH
```

These four inputs were not taken from a stored match.

Stored C3 sample on the same constant object, not regraded: full board context 17–11; C3 Top 8 10–4; C3 Primary 6 8–3; previous Top 8 8–5; previous Primary 6 5–5.

### 6.3 Tennis Script Trust

**Function:** `scoreTennisScriptTrustV1`  
**File:** `src/data/tennisScriptTrustV1.ts`  
**Selector:** 2026-09-06 through 2026-09-20.  
**After 2026-09-21:** diagnostic ranking score. `familyDVote: false`.

```text
score = round1( 100 * sum(w_i * clamp01(x_i)) / sum(w_i) )
```

A component with a null value, a non-finite value, or a non-positive weight is omitted. It is not filled with 0. If every weight drops, the score is 0.

| Component `x` | Weight | Definition in this function |
| --- | ---: | --- |
| `c3Evidence` | 0.30 | `evidenceConf / 100` |
| `setCountCashPath` | 0.18 | For Over, probability the set path clears the line. For Under, one minus that |
| `lineEase` | 0.12 | `1 - extraSetDependence` |
| `shapeSourceQuality` | 0.12 | 1 scoreline, 0.4 BO5 fallback, 0.1 unseated |
| `closeoutScript` | 0.12 | Closeout helper from rank gap and extra-set dependence |
| `directionalConviction` | 0.10 | `1 - 0.65 * clamp01(1 - |pSelected-0.5|/0.15)` |
| `formatScriptFit` | 0.06 | Map from the script-dependency label |
| `fatigueWorkload` | 0.04 | Omitted when the fatigue helper returns null |
| `serveReturn` | 0.04 | Omitted when provider rates are absent |

BO3 path means used as typical scorelines, not as betting lines: 2–0 → 20.0 games (sigma 2.35); 2–1 → 27.8 (sigma 2.7).

Line regimes, used only inside Trust:

| Format | Line | Regime |
| --- | --- | --- |
| BO3 | ≤ 18.5 | BO3_VERY_LOW |
| BO3 | ≤ 20.5 | BO3_LOW |
| BO3 | ≤ 21.5 | BO3_MIDDLE_COINFLIP |
| BO3 | above 21.5 | BO3_HIGH |
| BO5 | ≤ 34.5 | BO5_LOW |
| BO5 | ≤ 37.5 | BO5_MODERATE |
| BO5 | ≤ 39.5 | BO5_EXTENSION_DEPENDENT |
| BO5 | above 39.5 | BO5_VERY_HIGH |

If `pick.line` and `pick.sportsbookLine` are both missing, this function uses 21.5 or 36.5 by format. That default is **IMPLEMENTED IN SOURCE** and is not the Family D threshold. Official Top Props already require a finite line before publish.

A full numerical Trust score needs set-path probabilities from the pick. No stored pick was passed through `scoreTennisScriptTrustV1` in this audit. A historical Trust example is **UNAVAILABLE**.

### 6.4 Reliability V1.1

**Score function:** `scoreOuReliabilityV1` in `reliabilityOuV1.ts`  
**Publish function:** `selectTopPicksV1` in `selectTopPropsV1.ts`  
**Completeness:** `assessOuCompletenessV1`  
**Families:** `inventoryOuEvidenceV11`  
**Effective:** slate date ≥ 2026-09-21, `TOP_PICK_RELIABILITY_OU_ACTIVE = true`  
**Status:** **LAST APPROVED** Top Props ranker. Does not write side or `pOver`.

#### 6.4.1 Completeness band

```text
HIGH   if holdSampleN >= 8 and (market or shape present) and both ranks present
MEDIUM if holdSampleN >= 1, or if market and shape are both present
LOW    otherwise
```

`holdSampleN` is the minimum of the two players’ hold samples when both exist.

#### 6.4.2 Evidence families

Families: `SERVE_RETURN`, `MARKET`, `PLAYER_STRENGTH`, `RECENT_FORM`, `H2H`, `FATIGUE`, `SCRIPT_DERIVED`.

`SCRIPT_DERIVED` is one family even if Shape, straight sets, closeout, cash path, and line ease all agree. If serve/return and script agree with the selected side, they are one length cluster: script is not a second supporting vote.

`independentNonScriptSupportCount` counts `SERVE_RETURN`, `MARKET`, `RECENT_FORM`, `H2H`, and `FATIGUE` leaning the selected side. Player strength is not in that list.

Rank dominance is an absolute rank gap of at least 15 (`RANK_DOMINANCE_GAP_V11`).

Concentration:

```text
CONCENTRATED if favorite-short thesis
             (selected Under, script leans Under, and rank dominance or at least 2 derived agrees)
             or script agrees and derived clones >= 3 and non-script support <= 1
DIVERSE      if non-script support >= 2 and not (length cluster and rank dominance)
MIXED        otherwise, including zero support
```

The score function can still force `CONCENTRATED` when the side is Under, script leans Under, and (extreme probability or rank dominance or derived agrees ≥ 2).

#### 6.4.3 Score

Start at 50. Then:

| Condition | Delta |
| --- | ---: |
| Completeness HIGH | +15 |
| Completeness MEDIUM | +5 |
| Completeness LOW | −10 |
| Each independent non-script support, maximum 3 | +8 each |
| Each independent oppose | −6 |
| ATP and BO5 and side Over | −12 |
| Extreme and concentration is not DIVERSE | −10 |
| Concentration CONCENTRATED | −12 |
| Concentration DIVERSE | +6 |
| Derived agrees ≥ 3 and non-script support ≤ 1 | −8 |

Extreme means `pSelected >= 0.65` or FDE confidence `>= 0.70`. FDE confidence is `max(fdePOver, 1-fdePOver)`. Extreme does not add points.

```text
score = clamp to [0, 100], one decimal
```

#### 6.4.4 Certification

```text
CERTIFIED if
  score >= 50
  and completeness is not LOW
  and concentration is not CONCENTRATED
  and independentNonScriptSupportCount >= 2
  and (not extreme, or concentration is DIVERSE)
  and (not ATP-BO5-Over, or (DIVERSE and HIGH completeness and non-script >= 2))

else BORDERLINE if score >= 35 and completeness is not LOW

else UNCERTIFIED
```

```text
rankingKey = certificationRank * 1000 + score
CERTIFIED = 2, BORDERLINE = 1, UNCERTIFIED = 0
```

#### 6.4.5 Publish and order

Skip a candidate when the side is not Over or Under, `pOver` is not finite, `pOver` is within `1e-9` of 0.5, or the line is missing.

Sort by `rankingKey` descending, then `pSelected` descending, then `matchKey` ascending.

Publish:

```text
CERTIFIED: yes
BORDERLINE: yes only if score >= 55 and concentration is not CONCENTRATED
UNCERTIFIED: no
published = first min(6, publishable)
```

Do not pad to 4 or 6. Zero publishable props is an unavailable board, not an empty official card that was filled. One publishable prop is an official one-prop board.

`pSelected` is `pOver` for an Over and `pUnder` for an Under.

The file comment states two research bands: official Top Props with `pSelected >= 65%` were 0–6, and September 2–3 FDE confidence `>= 70%` was 10–15. Those counts were not re-derived here. **SUPPORTED** as comments in `architecture.ts`, not as a ledger this audit totaled.

**FORMULA DEMONSTRATION.** HIGH completeness (+15), two non-script supports (+16), DIVERSE (+6), no penalties:

```text
score = 50+15+16+6 = 87
certification = CERTIFIED if the other gates hold
rankingKey = 2087
```

### 6.5 Winner V2

**Functions:** `winnerLogitBreakdownV2`, `winnerProbabilityV2` in `winnerModelV2.ts`  
**Mint:** `mintWinnerFromEventV1` sets `usedWinnerV2` when it builds features from rank or archive.  
**Fit:** 2025-01-01 through 2025-05-31. Chosen on 2025-06-01 through 2025-08-31.  
**Status:** **LAST APPROVED** for new mints in `HOSTED_PRODUCTION_CONFIG_V1`. **IMPLEMENTED IN SOURCE.**

Features, in order. Standardization constants `Z[i] = {m, sd}`:

| i | Name | Mean `m` | SD | Weight on standardized value |
| --- | --- | ---: | ---: | ---: |
| — | Intercept | — | — | −0.08924794024342998 |
| 0 | ranking | 0.08729378674587102 | 1.147035236427373 | 0.5890576109324159 |
| 1 | surface | 0.0019066748514773258 | 0.11913381572736227 | 0.34547235928871883 |
| 2 | form | −0.023135331302930152 | 0.33297358459356796 | 0.17045309416922788 |
| 3 | serveReturn | 0.0014675133689839564 | 0.1107471518401138 | −0.020925002133351998 |
| 4 | h2h | 0.003600668337510447 | 0.19082462192379848 | 0.3286949029942011 |
| 5 | rest | −0.011878247958426118 | 0.7099759057254781 | −0.0947628598233642 |

```text
for each feature:
  if value is null or not finite:
    z_i = 0, available = false
  else:
    z_i = (value - mean_i) / sd_i
  logit += weight_{i+1} * z_i
logit starts at the intercept
logit = clip(logit, -20, 20)
pPlayerAWin = sigmoid(logit)
pPlayerBWin = 1 - pPlayerAWin
```

There is no temperature, penalty, or post-sigmoid clamp other than the logit clip. A missing feature still yields a probability. That is **IMPLEMENTED** and is a known limitation (section 10).

**Ranking feature** (`winnerInputConsistencyV1.ts`): strength is `-ln(rank)`. Points are stored and do not change the feature. The model input is player A’s strength minus player B’s strength. A missing rank does not fall back to ranking points.

**Surface and form** are differences of profile scores. Surface blends surface-specific and overall rates with `sampleBlendV1`, `k = 8`: `w = nSurface / (nSurface + 8)`, then `w*surface + (1-w)*overall` when both exist. Form prefers the last 5 same-surface matches, then last 5, then last 10, and is an opponent-weighted win rate minus 0.5. Matches on or after the cutoff are excluded.

**Serve/return** (`trueMatchupDiffV2`):

```text
matchupHoldLogit(serverHold, returnerBreak, baselineHold)
  = sigmoid( logit(baselineHold)
             + logit(serverHold) - logit(baselineHold)
             - (logit(returnerBreak) - logit(1-baselineHold)) )
clipped to [0.04, 0.96]
feature = logitHold(A vs B's break) - logitHold(B vs A's break)
```

Baseline hold by tour and surface:

| Tour | Hard | Clay | Grass |
| --- | ---: | ---: | ---: |
| ATP | 0.80 | 0.76 | 0.82 |
| WTA | 0.72 | 0.70 | 0.74 |

Holds and breaks blend surface rows into all rows with `k = 8`. If the matchup cannot be built, the feature is null and contributes 0. A tour prior is allowed only inside that term when history is missing and a fallback hold was passed. `mintWinnerFromEventV1` calls `trueMatchupDiffV2` without those fallbacks, so a missing serve history makes the serve feature null.

**Head to head:** if meetings ≥ 2, `(winsA + 1) / (meetings + 2) - 0.5`. Otherwise null.

**Rest:** if both day-counts exist, `clip(restA - restB, -6, 6) / 6`. Otherwise null.

**Confidence labels for a V2 row:** stronger if `pWinner >= 0.70`, moderate if `>= 0.60`, else close. The old 0.55 display floor is stored and does not hide the pick.

**FORMULA DEMONSTRATION.** Every feature equal to its training mean, so every `z_i = 0`:

```text
logit = -0.08924794024342998
pPlayerAWin = 0.477703
```

One ranking standard deviation above its mean, every other feature at its mean or missing:

```text
logit = -0.08924794024342998 + 0.5890576109324159
pPlayerAWin = 0.622415
```

#### 6.5.1 Winner V1, historical

**Function:** `runMatchWinnerModelV1` in `matchupProfileV1/matchWinnerModelV1.ts`  
**Temperature:** `FROZEN_WINNER_CALIB_SPEC_V1`, mode `GLOBAL_TEMPERATURE`, `T = 1.55`, intercept 0, frozen 2026-08-29. The 75–80 extra cool was removed 2026-09-18.

Structural weights, before temperature: rank 0.55, surface ability 0.90, form 0.35, serve/return 0.85, head-to-head 0.25, rest 0.10. A missing pair contributes 0. `votesOnTotalGames: false`.

On the mint path, V1 is still constructed for quality and missing-reason text. If `usedWinnerV2` is true, the published probability is the V2 sigmoid, not the tempered V1 number. Saturation (`saturateWinnerModelProbabilityV1`) runs only when the slate is on or after 2026-09-21 **and** V2 was not used.

Issue 57: 94 decided rows still carried the older model, 61–33. **SUPPORTED.**

### 6.6 Value Winners

**Functions:** `noVigMarketV1`, `valueEdgeV1`, selection loop in `valueWinnerMathV1.ts`  
**Marker:** `tennisedge-top4-value-winners-v1`  
**Cap:** 6  
**Status:** **IMPLEMENTED IN SOURCE.** Does not write `pWinner` or Winner rank.

```text
rawSelected = 1 / decimalOddsSelected
rawOpponent = 1 / decimalOddsOpponent
marketProbability = rawSelected / (rawSelected + rawOpponent)
valueEdge = pWinner - marketProbability
```

Book preference order: Pinnacle, DraftKings, FanDuel, BetMGM, Caesars, PointsBet, Bet365.

Underdog test: the higher decimal price is the underdog. If the two decimals are equal, the match is skipped. The selected price must be strictly greater than the opponent price. The predicted Winner name is compared with that underdog; the edge is still the frozen probability of the player being priced. A favorite cannot qualify. A committed slate is not reselected.

Schedule: the quote’s verified Chicago date must equal the slate. Prematch proof on the quote type is `collected_before_start`. If `requireStillPrematch` is set, `now` must be before `startsAt`.

**FORMULA DEMONSTRATION.** `pWinner = 0.42`, underdog decimal 2.50, favorite decimal 1.60:

```text
rawUnderdog = 0.400000
rawFavorite = 0.625000
marketProbability = 0.400000 / 1.025000 = 0.390244
valueEdge = 0.029756
```

Positive edge is required for a selection. Stake, return, and profit fields exist on the selection type. Issue 57 did not publish ROI. ROI is **UNAVAILABLE**.

### 6.7 Winner ranking and Top 6 membership

**Function:** `rankMatchWinnerBoardV1`  
**File:** `winnerRankingV1.ts`

```text
same Chicago date only
group duplicate fixtures
keep the row with more available V2 terms, then the newer history date
drop unnamed, TOSSUP, and unavailable rows

if winnerModel == "tennisedge-winner-model-v2":
  rankingScore = pWinner
else if slate >= 2026-09-21:
  rankingScore = winner reliability rankingKey
else:
  rankingScore = (pWinner - 0.5) * clamp(reliability, 0.15, 1)
  default reliability if missing = 0.55

sort by rankingScore desc, then pWinner desc, then match name
```

**Winner reliability key** (`scoreWinnerReliabilityV1`), used for non-V2 rows on or after 2026-09-21:

```text
start 50
rank agrees with the pick: +18
rank disagrees: +0 (still eligible)
rank unknown: +0
fresh rank (within 7 days, or Rapid/current): +10
recent (8 to 28 days): +4
stale (older than 28): -10
missing rank: -6
sample >= 20: +6
sample < 8: -6
|serveReturn| >= 1.8 or |surface| >= 1.8: -8
score clamped to [0, 100]
rankingKey = score*10 + pWinner
```

**Hosted contract** `HOSTED_PRODUCTION_CONFIG_V1` says Winner ranking owner `RAW_PWINNER` and version `tennisedge-winner-v2-pwinner-ranking-v1`. **PROVEN.**

**Slate contract** `productionContractForSlateV1` names `tennisedge-winner-reliability-ranking-v1` when the slate is on or after 2026-09-21. **PROVEN** as a contract string.

**Rank function** returns raw `pWinner` for every row stamped V2, including those dates. **PROVEN.** The reliability key does not reorder a V2 row. Section 9 marks the contract string versus the sort as **UNRESOLVED** if a reader treats the contract string as the sort.

**Locked six** (`rollingTop6V1.ts`, marker `tennisedge-rolling-top6-v1`): the file header says the original six stay, a finished seat leaves the active board empty, and a later read does not promote the next rank. Provider calls added: 0. The word “rolling” in the marker is older than that lock. **IMPLEMENTED IN SOURCE** as a lock, despite the name.

**Display six** (`winnerTop6DisplayV1.ts`): time verification and eligibility run before the six are chosen. `fullSlateRank` stays the original rank. `pWinner` and grading stay unchanged. VOID, cancelled, walkover, and unavailable leave the current board. A started match stays on its original slate. An unstarted match follows the current Chicago date (`winnerScheduledOnSlateDayV1`).

Issue 81’s handoff says a later “Best 2” home was deployed from `var/d0de-app` on 2026-10-17. That home rule was not re-read in this HEAD as the phone’s only board. **UNRESOLVED** against the last deployment.

### 6.8 Ace and break-point projections

**Function:** `projectWinnerCountsFromRowsV1`  
**File:** `src/data/winnerCountProjectionV1.ts` (working tree; 93 lines differ from commit `965acbd`)  
**Status:** display beside a frozen Winner. **IMPLEMENTED IN SOURCE** in the working tree. Not an official probability. Does not read a betting line.

Minimum usable matches: 5. Window: last 20. A real zero is kept. A blank box score is skipped. Fewer than 5 leaves that projection null.

```text
hold rates clamped to [0.45, 0.95]
expected sets from hold-implied set win probability:
  BO3: 2 + 2 p q
  BO5: 3 p3 + 4 p4 + 5 p5
       with p3 = p^3+q^3, p4 = 3 p^3 q + 3 q^3 p, p5 = 6 p^2 q^2

ace rate = w * (aces/servicePoints) + (1-w) * prior
w = servicePoints / (servicePoints + 250)
priors: ATP 0.075, WTA 0.035, other 0.05

if same-surface ace samples >= 5:
  rate = 0.5 * rate + 0.5 * surfaceShrunkRate

opponent multiplier = 1
if opponent aces-allowed sample >= 200 return points and rate > 0:
  multiplier = clamp(allowedRate / prior, 0.7, 1.4)

points per service game = observed rate if >= 5 matches, else ATP 6.4, WTA 6.2, other 6.3

projectedAces = round1(rate * pointsPerGame * expectedServiceGames * multiplier)
```

```text
bpPerReturnGame = breakPointsWon / returnGames
scale = 1
if breaks sample >= 5 and break rate > 0.05:
  scale = clamp((1 - opponentHold) / breakRate, 0.6, 1.6)
projectedBreakPointsWon = round1(bpPerReturnGame * expectedReturnGames * scale)
```

The 0.863 and 0.909 scales named in the 2026-10-18 formula audit were in `var/d0de-app`, not in this function. They are **UNAVAILABLE** in this tree. Do not apply them to this equation.

A historical count example with five real matches was not executed. **UNAVAILABLE.**

### 6.9 Grading

**Function:** `gradeTotalGamesPickDetailed` in `gradingEngine.ts`.

```text
if the score is incomplete or retired: PENDING, note says grading withheld
if the line is missing or not finite: PENDING
if totalGames == line: PUSH
if side is Over:  WIN if totalGames > line, else LOSS
if side is Under: WIN if totalGames < line, else LOSS
```

Issue 57 hit rates use stored WIN versus LOSS only. VOID and PENDING are excluded. This audit did not regrade.

Winner grades are a separate result on the winner row (the named player won or did not). Value uses that outcome on the underdog. Count markets in Report A had no verified actuals on the projection rows at the first pass; Report B later joined 69. Those joins were not repeated.

### 6.10 Other calculations that can change a published number

| Calculation | Changes an official pick? | Note |
| --- | --- | --- |
| Extreme-rank +0.02 | Yes, `pOver`, when it fires | Section 6.1.5 |
| Quality-aware conflict halving | Yes, the blend | Section 6.1.4 |
| BO5 set-path Shape fallback | Yes, by seating Shape | Section 6.1.3 |
| V1 temperature 1.55 | Historical V1 `pWinner` only | Not applied to V2 |
| Reliability score | Membership and order only | Not `pOver` |
| Trust score | Order only before 2026-09-21 | Not `pOver` |
| Match Profile | No | Diagnostic |
| History-accuracy stacks | No | `live: false` |
| Lab copies | No | Separate store |

---

## 7. Official selection rules

### 7.1 Total Games / Top Props

| Rule | From | Behavior |
| --- | --- | --- |
| Side and probability | 2026-09-05 | Family D. Exact line. BO3 and BO5 both eligible |
| Board size | 2026-09-07 structure, reliability publish from 2026-09-21 | 1 to 6. No pad. No forced Over/Under balance. No forced BO3/BO5 balance |
| Old Top 8 and Primary 6 admission gates | Retired for live slates | `OLD_TOP8_ADMISSION_FILTER = false`, `OLD_PRIMARY6_ADMISSION_FILTER = false` |
| Slips | When four seats exist | A = 1 with 4. B = 2 with 3. Ranks 5 and 6 have no Slip C. One seat does not create a two-leg slip |
| UNCERTIFIED | 2026-09-21 | Never publishes |
| BORDERLINE | 2026-09-21 | Publishes only at score ≥ 55 and not CONCENTRATED |
| Short board | Valid matches under 8 | Second provider check, then the legitimate count. Provider failure does not seal a short card |
| Historical Top 4 cards | Before the six-cap promotion | Stay at their frozen size. Not backfilled to six |

### 7.2 Winners

- Full valid singles slate for that Chicago date. No forced eight.
- V2 order is raw `pWinner`.
- A pick below 0.55 is still shown.
- Do not pull another date to fill a short board.
- Winner cannot hide a Total Games pick and cannot write Family D.

### 7.3 Value Winners

- Underdog only, one book, both prices, collected before start, Chicago date matches.
- Positive edge.
- Cap 6.
- A sportsbook favorite cannot qualify.
- A committed slate is not reselected.
- Issue 70 deployed an underdog gate on 2026-10-17 as API `2c0c9b2c`. The source already contains the decimal-price underdog test. Whether that deployment matched this function byte for byte is **UNRESOLVED**.

### 7.4 Top 6 lock versus an older rolling idea

| Behavior | Where | Label |
| --- | --- | --- |
| Choose up to six before publish, by rank | Winner display and Value cap | **IMPLEMENTED IN SOURCE** |
| After lock, do not promote the next rank when a seat finishes | `rollingTop6V1.ts` header | **IMPLEMENTED IN SOURCE** |
| Home shows only a “Best 2” | Handoff 2026-10-17, `var/d0de-app` | **SUPPORTED** as a deployment note. **UNRESOLVED** in this HEAD |
| Public History cleared through 2026-10-16, shown as 0–0–0 | Handoff 2026-10-17 | **SUPPORTED**. Not re-queried |

### 7.5 Start times, reschedules, retirements

- Schedule verification must agree before a new Winner or Value lock. An existing lock can keep a row whose start is no longer event-verified (`rollingTop6V1.ts` type comment).
- Started matches stay on the original slate. Unstarted matches follow the current Chicago date.
- Same-day court delays: issue 18’s handoff says a verified Top 6 can keep them. The application change was a pull request, and the handoff said it was not deployed as of 2026-10-12. Later deploy status of that specific change is **UNRESOLVED**.
- Retired, walkover, cancelled, and incomplete scores: Total Games grader returns PENDING when the parser says the match is incomplete. Display treats VOID, CANCELLED, and WALKOVER as off the current board.
- A later verified WIN or LOSS replacing a sticky VOID was described in Issue 57 Report B as a local repair in `var/d0de-app`, not deployed then. This tree has no symbol `verifiedWinLossReplacesVoidV1`. **UNAVAILABLE** here. The live rows were not rewritten by that report.

### 7.6 Freezes

- `card:YYYY-MM-DD` is the official document.
- Through 2026-09-04, processed picks are forced back to the original `pOver`, side, and line.
- 2026-09-05 C3 and 2026-09-06 Trust observation cards stay identity.
- Reliability slates: `selectedCount` is the published CERTIFIED/BORDERLINE count, from 1 to `min(6, valid N)`. It is not padded.
- The phone must not recompute.

### 7.7 Results and History

- Grading uses the frozen side and the frozen line.
- Issue 57 definitions: hit rate is WIN/(WIN+LOSS). VOID, pending, and “other” are outside the rate. No profit figure was used.
- Readable-archive totals were smaller than a full-card recount on nine slate dates in that report. The report says the archive keeps a narrower set. That is not, by itself, proof the ledger was rewritten. **SUPPORTED.**

---

## 8. Historical performance

Two layers. Do not add them into one record.

**Layer A — frozen constants in source.** Not regraded on 2026-10-23. **PROVEN** as stored strings. The underlying match list was not opened.

| Sample | Record | Rate | Where stated |
| --- | --- | ---: | --- |
| Family D forensic board, 2026-08-17 and 2026-08-18 | 17–11 | 60.71% | `familyDProductionRestoreV1.ts`, `FORENSIC_BASELINE_R002_28G` |
| C3 exact Top 8 | 10–4 | 71.4% | `familyDC3SelectionV1.ts` `exactSample` |
| C3 exact Primary 6 | 8–3 | 72.7% | same |
| Earlier Top 8 on that note | 8–5 | 61.5% | same |
| Earlier Primary 6 | 5–5 | 50% | same |
| Canonical Top 4, all | 27–21 | 56.3% | `top4FullSlateProductionV1/architecture.ts` |
| Canonical Top 4, unseen | 21–7 | 75.0% | same. Unseen slate-average stored as 77.1% |
| Family D calibration rows | n = 17 | not a hit rate | `FAMILY_D_CALIBRATION_LIMITATION_V1`. Below the file’s own minimum of 30 |

**Layer B — Issue 57 Report A and Report B.** Measured on a database export that includes the 2026-10-15 card. Deployment noted as `996a7cdc`. This audit did not recompute the totals. **SUPPORTED.**

Definitions fixed before the totals were read: WIN versus LOSS only. VOID and pending excluded. No ROI.

### 8.1 Winners

425 decided picks: 269 wins, 156 losses, 63.3% (standard error 2.3 points in the report). Mean saved probability 67.1%. Brier 0.221. Log loss 0.636.

| Probability band | Decisions | Hit rate | Mean probability | Brier |
| --- | ---: | ---: | ---: | ---: |
| 0.50–0.55 | 79 | 53.2% | 52.1% | 0.249 |
| 0.55–0.60 | 63 | 52.4% | 57.2% | 0.251 |
| 0.60–0.65 | 60 | 46.7% | 62.6% | 0.275 |
| 0.65–0.70 | 64 | 65.6% | 67.3% | 0.227 |
| 0.70+ | 159 | 78.0% | 80.0% | 0.172 |

| Slice | Record | Hit rate | Brier | n |
| --- | --- | ---: | ---: | ---: |
| Ranks 1–6 | 117–36 | 76.5% | 0.176 | 153 |
| Outside ranks 1–6 | 152–120 | 55.9% | not restated as a separate Brier in the summary line; mean probability 62.1% | 272 |
| Model v2 rows | 208–123 | 62.8% | 0.218 | 331 |
| Older v1 rows | 61–33 | 64.9% | 0.229 | 94 |
| Before 2026-10-06 | 190–109 | 63.5% | 0.216 | 299 |
| 2026-10-06 onward | 79–47 | 62.7% | 0.233 | 126 |
| Saved label “close” | — | 52.8% | — | 125 |
| “moderate” | — | 61.0% | — | 146 |
| “stronger” | — | 75.5% | — | 139 |

Excluded from the 425: VOID 87, other 4, pending 1. Eleven VOID rows also had a completed set score and were not relabeled. Examples named in the report: Jović on September 16, Munar and Fils on September 28, Hunter on September 29.

Player-orientation check in that report: 0 mismatches above 2 points between `pWinner` and the picked player’s saved win probability.

Six Winner terms were present on 259 of 459 Lab winner copies. Head-to-head was available on 76 of those 259. Two hundred copies had no saved feature vector.

### 8.2 Value Winners

32 decided: 18–14, 56.3% (standard error 8.8 points). Mean probability 60.3%. Model Brier 0.280. Market-probability Brier on the same 32: 0.277.

All 32 had one book and both prices. None had the odds timestamp after the saved start. All 32 were stored with a positive edge. Before October 6: 6–5, Brier 0.201 (n = 11). From October 6: 12–9, Brier 0.322 (n = 21).

Report B: all 32 decided selections are on or after 2026-10-01, so a calibration training window was empty. **INCONCLUSIVE** in that report. ROI **UNAVAILABLE**.

12 of 44 Value selections that share a Winner match id differed from the Winner commence time by more than 15 minutes (Report A). Report B: 13 of 45 differ by more than 15 minutes. The two counts are both in the forensics file. They were not reconciled tonight. **SUPPORTED** as written, **UNRESOLVED** which count is the later one (Report B is later).

### 8.3 Total Games

Official graded board in Report A: 32 wins, 28 losses, 53.3%, n = 60. The grade row had no probability, so Brier is **UNAVAILABLE** for that board. Stored side and line agreed with `gamesPlayed` on every decided grade the report checked.

Projection versus verified games: 375 matches, MAE 5.43, RMSE 6.55, bias +0.68 (actual minus projected). Before October 6: MAE 5.62 (n = 265). From October 6: MAE 4.96 (n = 110).

Report B, train before 2026-10-01, test on and after: adding training bias of +0.95 games made test MAE worse, 5.14 to 5.30, on 196 test matches. A constant 23.1-game forecast (from a 64.4/35.6 set mix and training means 19.1 and 30.3) had test MAE 5.26 versus 5.14 for the stored projection. **FAIL** in that report.

After the match, two-set games were over-projected by about 3.7 and three-set games under-projected by about 7.3. That split uses the actual set count, so it is an error description, not a prematch model. Surface was missing on 369 of 375 projections.

This 32–28 board is not the same sample as canonical Top 4 27–21 or the August 17–18 board of 17–11.

### 8.4 Total sets

479 of 482 downstream packets stored the same forecast: 2.4 sets, 64.4% two sets, 35.6% three sets. Three packets had no projection.

Completed best-of-three matches with an actual of 2 or 3: 376. Third-set rate 37.9%.

A format-only walk-forward average failed (stored MAE 0.473 and Brier 0.232 versus challenger 0.475 and 0.236, n = 341). A `|pWinner-0.5|` strength model failed the predeclared bar (MAE 0.471 versus 0.465, Brier 0.235 versus 0.236, train 176, test 196).

This tree’s count module can compute expected sets from hold rates (section 6.8). A source line that assigns the constant 2.4 was not found under `src/data`. The constant is **SUPPORTED** as a stored output on that export. The producing function in the October image is **UNAVAILABLE** in this tree (`src/data/downstreamMatchMarketsV1` is not present).

### 8.5 Aces and break points won

Report A: MAE not computed. Verified actuals on the projection rows: 0. Lines stored on the downstream player markets: 0. Result in that report: **INCONCLUSIVE**.

Report B: 69 of 488 projections matched exactly one finished shadow fixture. None of the 69 are before 2026-10-01. Ace MAE 3.00, RMSE 4.36, bias +1.09. Break points won, scored as Break Points Converted, MAE 1.36, RMSE 1.68, bias −0.40. Break Points Saved was present and was not scored. 419 projections had no unique finished fixture. Missing actuals were not treated as zero.

### 8.6 Winner calibration test

Report B, 237 test picks from 2026-10-01 onward: frozen hit rate 61.6%, Brier 0.221, log loss 0.634. Platt-scaled probabilities: same hit rate, Brier 0.224, log loss 0.638. The 0.60–0.65 band inside the test was 9–22, 29.0%, n = 31. Equal-seat re-rank on 12 slates, 61 seats: frozen ranks 1–6 were 47–14 (77.1%). Highest calibrated probability at the same seat count was 49–12 (80.3%). The report rejected the change. **SUPPORTED.** Not installed.

### 8.7 What was not calculated in this audit

- No slate after 2026-10-15 was graded.
- No ROI, closing-line value, or average decimal odds.
- No unique-match count distinct from the decision counts above. The 425 is decided Winner rows, not proven unique humans or unique fixtures beyond that report’s own orientation check.
- The nine archive-versus-card date mismatches were not listed by date in the excerpt used here.
- Layer A and Layer B must not be summed.

---

## 9. Version authority

| Topic | Evidence | Label |
| --- | --- | --- |
| Family D owns Total Games side and `pOver` | Stack object, constitution, `replayRecoveryDFromFrozenV1` | **LAST APPROVED** and **IMPLEMENTED IN SOURCE** |
| Later product also publishes Winners and Value | Winner mint, Value math, hosted config | **IMPLEMENTED IN SOURCE**. They do not replace Family D |
| C3 as the only ranker | 2026-09-05 | **HISTORICAL** |
| Trust as the ranker | 2026-09-06 through 2026-09-20 | **HISTORICAL** |
| Trust as a stored score after that | `productionContractForSlateV1` switches `rankingOwner` on 2026-09-21 | **LAST APPROVED** |
| Reliability V1.1 selects Top Props | `usesTopPickReliabilityOuV1`, `selectTopPicksV1` | **LAST APPROVED** and **IMPLEMENTED IN SOURCE** |
| A newer selector after V1.1 | Not named in the constants. Handoff Best 2 is a display/history change, not a new probability | **UNRESOLVED** whether Best 2 changed ranking math. Probability owner was not retuned in the notes |
| Winner V1 + T = 1.55 | Frozen spec, historical rows 61–33 in Report A | **HISTORICAL** |
| Winner V2 raw sigmoid | `winnerProbabilityV2`, mint flag `usedWinnerV2` | **LAST APPROVED** for new mints |
| Phone contract still names V1 and T = 1.55 | `PRODUCTION_CONTRACT_V1` | **IMPLEMENTED** as a base object. `productionContractForSlateV1` does not replace `winnerModel` with V2. Hosted config does name V2. Treat the mint flag as the probability that was computed |
| Reliability ranking string on Winner from 2026-09-21 | Slate contract | **IMPLEMENTED** as a label |
| V2 sort key is `pWinner` | `scoreOf` in `winnerRankingV1.ts` | **IMPLEMENTED**. Overrides the reliability key for V2 rows |
| Marker name “rolling” Top 6 | `ROLLING_TOP6_V1` | **HISTORICAL** name |
| Locked six, no promotion after a seat finishes | File header of `rollingTop6V1.ts` | **IMPLEMENTED IN SOURCE** |
| Best 2 home, History 0–0–0 through 2026-10-16 | Handoff 2026-10-17, not this HEAD’s only phone path | **SUPPORTED** deployment note. **UNRESOLVED** as the code Cardi should execute from this tree |
| This git HEAD is the last production build | Report A says `965acbd` was not the 2026-10-15 image. Later deploys through 2026-10-17 are in the handoff | **UNRESOLVED**. Do not equate the tree with the last process |
| Code present but `live: false` | History-accuracy stacks, neutral owners, side-neutral weights | **DEPRECATED** as official writers |
| Directional calibration | Constitution: closed until the CEO reopens it. Report B Platt test failed | **LAST APPROVED** is “do not retune” |

---

## 10. Known problems and limitations

Confirmed means the source or a stored report states the defect. Suspected means the records point at it and do not close it. Proposed means a next test already written down, not an approved change.

### 10.1 Confirmed

| Issue | Evidence | Label |
| --- | --- | --- |
| Family D has no approved calibration map | n = 17, minimum 30, Platt not installed | **PROVEN** in source |
| Official Total Games board in the Oct 15 export is 32–28 | Report A | **SUPPORTED** |
| Winner band 0.60–0.65 hits below its probability | 46.7% on 60; 29.0% on the October test n = 31 | **SUPPORTED** |
| Platt scaling did not fix that band | Report B, Brier worse | **SUPPORTED**. Change not installed |
| Value does not beat the stored market price | Brier 0.280 versus 0.277, n = 32 | **SUPPORTED** |
| Games projection MAE about 5.4, and a bias correction failed | Reports A and B | **SUPPORTED** |
| Surface missing on 369 of 375 game projections | Report B | **SUPPORTED** |
| Total-sets packets were a constant 2.4 on that export, and both challengers failed | Reports A and B | **SUPPORTED** |
| Missing Winner features become z = 0 and still emit `pWinner` | `winnerLogitBreakdownV2` | **PROVEN** |
| Head-to-head often absent | 76 of 259 saved vectors | **SUPPORTED** |
| VOID can sit on a row that also has a score | 11 rows in Report A; 23 in Report B, of which 18 looked attached rather than replaced | **SUPPORTED** |
| Value and Winner clocks differ | 13 of 45 in Report B | **SUPPORTED** |
| Ace and break-point actuals were mostly unjoined | 69 of 488 | **SUPPORTED** |
| Rank sentinels and stale Sackmann ranks are explicitly distrusted by the extreme-rank rule | Sentinel 900, 28-day Sackmann freshness | **PROVEN** as a guard, not as a count of how often bad ranks were published |
| Two contracts disagree on Winner rank ownership | Hosted config versus slate contract versus `scoreOf` | **PROVEN** that the strings differ. Sort behavior is the `scoreOf` branch |
| This HEAD is not the October 15 image | Report A | **SUPPORTED** |

### 10.2 Suspected, not closed

| Issue | Why it is not confirmed |
| --- | --- |
| Sticky VOID is still the behavior of the last process | The repair lived in `var/d0de-app` and was not deployed in Report B. This tree does not contain that function. Whether a later deploy on 2026-10-17 included it was not checked |
| Best 2 replaced the six on the phone the product last shipped | Handoff says it was deployed. This HEAD still contains a six-seat display |
| The 32–28 Total Games board means Family D has no edge on every later slate | The sample is one export. Slates after 2026-10-15 were not graded here |
| Archive totals being smaller on nine dates means a rewritten ledger | The report itself says the archive is a narrower set |

### 10.3 Proposed earlier, and not approved

| Proposal | Result already recorded |
| --- | --- |
| Platt-scale Winner probabilities | Failed Report B |
| Add +0.95 games to the projection | Failed Report B |
| Format-only set average | Failed Report A |
| Matchup-strength set model | Failed Report B |
| Retune C3, Trust, or Family D weights | Forbidden by the constitution until a PROVEN claim and CEO approval |
| Install history-accuracy stacks as owners | Flags say not promoted |
| Use Break Points Saved as the actual for break points won | Report B refused that substitution |

A next measurement named in Report B, still not an approval to change a formula: join ace and break-point actuals from shadow finals on the neighboring date, and see whether a future results merge can replace VOID when a verified score exists without editing the saved archive.

---

## 11. Formula and variable dictionary

| Symbol | Meaning | Unit or range |
| --- | --- | --- |
| `pOver` | Probability games finish strictly above the line | (0, 1) |
| `pUnder` | `1 - pOver` on the Family D pair | (0, 1) |
| `pSelected` | Probability of the chosen side | (0.5, 1) for a published side |
| `pWinner` | Probability the named player wins | (0, 1) |
| `line` | Sportsbook total | games, usually a half point |
| `hold` | P(server wins the service game) | (0, 1) |
| `SPW` / `p` | P(server wins the point) | (0, 1) |
| `k` | Shrinkage pseudo-count | 8 for holds and for surface blend |
| `evidenceConf` | C3 score | 0 to 100, one decimal |
| `tennisScriptTrustScore` | Trust mix | 0 to 100, one decimal |
| `reliabilityScore` | V1.1 score | 0 to 100, one decimal |
| `rankingKey` | `class*1000 + score` for Top Props | CERTIFIED near 2000 |
| `valueEdge` | `pWinner - noVig` | signed probability |
| `wF`, `wS`, `wM` | Blend weights after renormalizing | sum to 1 |
| `T` | Winner V1 temperature | 1.55 historical only |
| `gap` | Shape expected games minus the line | games |
| `slateDate` | Chicago calendar date | `YYYY-MM-DD` |

---

## 12. Source-reference index

| Topic | File | Function or constant |
| --- | --- | --- |
| Live stack id | `src/data/distribution/familyDC3FullSignalProductionV2.ts` | `FAMILY_D_C3_FULL_SIGNAL_PRODUCTION_V2` |
| Shape 1.00, priors dates, forensic 17–11 | `src/data/distribution/familyDProductionRestoreV1.ts` | `FAMILY_D_PRODUCTION_RESTORE_V1` |
| Family D replay | `src/data/distribution/challengerRecoveryEngineDV1.ts` | `replayRecoveryDFromFrozenV1` |
| Hold equation | `src/data/distribution/holdUnitContractV1.ts` | `gameHoldFromPointWinV1`, `shrinkHoldTowardPriorV1` |
| Snapshot to hold | `src/data/distribution/challengerHoldEngineC2.ts` | `playerPipelineFromSnapshotC2` |
| Priors | `src/data/distribution/empiricalHoldPriorsDV1.ts` | `EMPIRICAL_GAME_HOLD_PRIORS_D_V1` |
| Monte Carlo | `src/data/distribution/totalGamesDistributionV1.ts` | `buildTotalGamesDistributionV1`, `cdfOver` |
| Shape | `src/data/distribution/matchShapeDistributionV1.ts` | `buildMatchShapeDistributionV1`, `MATCH_SHAPE_BLEND_WEIGHTS_V2` |
| Shape seat | `src/data/distribution/shapeDataContractDV1.ts` | `SHAPE_QUALITY_FLOOR_DV1` |
| BO5 fallback tables | `src/data/distribution/bo5SetPathLengthPriorV1.ts` | `BO5_SET_PATH_LENGTH_PRIOR_V1` |
| Blend weights | `src/data/distribution/adaptiveDistributionAuthorityV1.ts` | `ADAPTIVE_LOGODDS_WEIGHTS_V2` |
| Quality weights | `src/data/distribution/componentAuthorityDV1.ts` | `qualityAwareWeightsDV1` |
| Log-odds sum | `src/data/distribution/sideNeutralEngineV1.ts` | `blendAdaptiveLogitsV1` |
| +0.02 nudge | `src/data/distribution/extremeRankOverrideResistanceV1.ts` | `EXTREME_RANK_OVERRIDE_RESISTANCE_V1` |
| C3 | `src/data/familyDC3SelectionV1.ts` | `scoreFamilyDC3V1` |
| C3 inputs | `src/data/confidenceRecoveryV1.ts` | `scoreConfidenceRecoveryV1` |
| Trust | `src/data/tennisScriptTrustV1.ts` | `scoreTennisScriptTrustV1`, `mix`, `lineRegimeV1` |
| Reliability score | `src/data/topPickReliabilityV1/reliabilityOuV1.ts` | `scoreOuReliabilityV1` |
| Completeness | `src/data/topPickReliabilityV1/completenessV1.ts` | `assessOuCompletenessV1` |
| Families | `src/data/topPickReliabilityV1/evidenceFamiliesV11.ts` | `inventoryOuEvidenceV11` |
| Publish | `src/data/topPickReliabilityV1/selectTopPropsV1.ts` | `selectTopPicksV1` |
| Dates and floors | `src/data/topPickReliabilityV1/architecture.ts` | `TOP_PICK_RELIABILITY_EFFECTIVE_ON`, `BORDERLINE_PUBLISH_MIN_V11` |
| Slips and canonical 27–21 | `src/data/top4FullSlateProductionV1/architecture.ts` | `TOP4_FULL_SLATE_PRODUCTION_V1` |
| Winner V2 | `src/data/matchWinnerLaneV1/winnerModelV2.ts` | `winnerLogitBreakdownV2` |
| Rank feature | `src/data/matchWinnerLaneV1/winnerInputConsistencyV1.ts` | `winnerCanonicalRankingFeatureV2` |
| Serve logit | `src/data/distribution/matchupHoldLogitV1.ts` | `matchupHoldLogitV1` |
| Surface blend | `src/data/matchupProfileV1/mathV1.ts` | `sampleBlendV1` |
| Mint | `src/data/matchWinnerLaneV1/independentWinnerEngineV1.ts` | `mintWinnerFromEventV1` |
| Winner order | `src/data/matchWinnerLaneV1/winnerRankingV1.ts` | `rankMatchWinnerBoardV1`, `scoreOf` |
| V1 temperature | `src/data/matchWinnerLaneV1/winnerProbabilityCalibrationV1.ts` | `FROZEN_WINNER_CALIB_SPEC_V1` |
| Winner reliability | `src/data/matchWinnerLaneV1/winnerReliabilityV1.ts` | `scoreWinnerReliabilityV1` |
| Value | `src/data/valueWinnersV1/valueWinnerMathV1.ts` | `noVigMarketV1`, `valueEdgeV1` |
| Counts | `src/data/winnerCountProjectionV1.ts` | `projectWinnerCountsFromRowsV1` |
| Grade | `src/data/gradingEngine.ts` | `gradeTotalGamesPickDetailed` |
| Phone contract | `src/data/mobileOfficialCardV1/productionContractV1.ts` | `productionContractForSlateV1`, `HOSTED_PRODUCTION_CONFIG_V1` |
| Locked six | `src/data/mobileOfficialCardV1/rollingTop6V1.ts` | `ROLLING_TOP6_V1` |
| Display six | `src/data/mobileOfficialCardV1/winnerTop6DisplayV1.ts` | `winnerScheduledOnSlateDayV1` |
| Store | `server/mobileV1/store.mjs` | `tennisedge_kv`, `card:` |
| Performance export | `forensics/pre-issue57-research-v1/REPORT-A.md`, `REPORT-B.md` | Issue 57 baselines |
| Constitution | `AGENTS.md`, `.cursor/rules/tg-final-repair-constitution.mdc` | Ownership rules |

---

## 13. Unresolved questions

1. The minute TennisEdge stopped serving, and the last deployment id that was actually live at shutdown. **UNAVAILABLE.**
2. Byte identity of this tree with Railway `6d4cd4ef` or `996a7cdc`. **UNRESOLVED.**
3. Whether the 2026-10-17 Best 2 home replaced Top 6 in the last phone build. **UNRESOLVED.**
4. Whether the VOID-latch repair ever shipped. **UNAVAILABLE** in this tree.
5. Which of Report A’s “12 of 44” and Report B’s “13 of 45” clock mismatches is the intended count. Report B is the later write-up.
6. A named historical match with every Family D input, the three component probabilities, and the published `pOver`, re-executed here. **UNAVAILABLE.**
7. ROI and average odds. **UNAVAILABLE.**
8. Unique-fixture counts as distinct from decision-row counts. **UNAVAILABLE** beyond the report’s own n.
9. The function that wrote the constant 2.4 sets into the October downstream packets. **UNAVAILABLE** in `src/data`.
10. Whether uncommitted edits in `winnerCountProjectionV1.ts` and `store.mjs` were ever deployed. **UNRESOLVED.** They are local to this working tree.
11. Sackmann file freshness as of October 2026. Issue 89, about a different folder, said local ranking files stopped 2025-12-29 and match files ran into June 2026. That folder was not re-inventoried tonight. **SUPPORTED** only as that earlier audit.
12. Whether public ranking lists or a free odds file can replace the paid feeds. Issue 89 left that unverified. This audit did not fetch them.

---

## 14. Ten verification questions

Answers are for testing whether Cardi is using this package. Each answer names the source.

**1. Who sets official Total Games `pOver` on a slate dated 2026-09-22?**  
Family D, `replayRecoveryDFromFrozenV1`, then the extreme-rank nudge if it fires. Reliability may drop or order the prop. It does not change `pOver`. Source: `familyDC3FullSignalProductionV2.ts`, `reliabilityOuV1.ts` header, `extremeRankOverrideResistanceV1.ts`.

**2. What is the C3 equation?**  
`evidenceConf = 100 * clamp01(0.40*dataQuality + 0.30*independentAgreement + 0.20*(1-dataUncertainty) - 0.25*contradiction)`, one decimal. Source: `scoreFamilyDC3V1`.

**3. Does Winner V2 apply temperature 1.55?**  
No. Temperature 1.55 is Winner V1, frozen 2026-08-29. V2 is a sigmoid of the six-feature logit. Source: `winnerModelV2.ts`, `FROZEN_WINNER_CALIB_SPEC_V1`.

**4. What is `pPlayerAWin` if every V2 feature is null?**  
Every standardized value is 0, so the logit is the intercept −0.08924794024342998 and `pPlayerAWin` is 0.477703. Source: `winnerLogitBreakdownV2`. Demonstration calculated from those constants.

**5. When does a BORDERLINE Total Games prop publish?**  
Score at least 55 and concentration not CONCENTRATED. CERTIFIED publishes without that extra floor. UNCERTIFIED never publishes. Cap 6. Source: `isPublishableTopPickV11`, `BORDERLINE_PUBLISH_MIN_V11`.

**6. What are Slip A and Slip B?**  
Slip A is published ranks 1 and 4. Slip B is ranks 2 and 3. Ranks 5 and 6 do not make a third slip. Source: `TOP4_FULL_SLATE_PRODUCTION_V1.pairing`.

**7. How is a Value edge computed, and who may be selected?**  
`pWinner` minus the no-vig probability of the higher decimal price. Equal prices are skipped. A favorite is not eligible. Source: `valueEdgeV1`, `noVigMarketV1`, the underdog branch in `valueWinnerMathV1.ts`.

**8. When is a Total Games grade a PUSH?**  
The match is complete and total games equal the frozen line. Over wins only when games are strictly greater than the line. Retired or incomplete is PENDING in `gradeTotalGamesPickDetailed`.

**9. What is the canonical unseen Top 4 record, and what is the later official board record?**  
Unseen Top 4 is 21–7, 75.0%, a frozen constant. The Issue 57 official graded board is 32–28, 53.3%, n = 60, through the 2026-10-15 export. They are different samples. Sources: `architecture.ts` Top 4 constants, and REPORT-A.md.

**10. Was this git HEAD the production image on 2026-10-15?**  
No, according to Issue 57 Report A. HEAD `965acbd` was not that image. Deployment named there is `996a7cdc`. This audit did not re-check the container. Later handoff notes name API deployments on 2026-10-17. Equality with those images is unresolved.

---

## 15. Audit limits

- Read-only. No provider call, no database session, no regrade, no deploy, no formula edit.
- Formula text was read from the working tree on 2026-10-23. Core probability and ranking files matched commit `965acbd`. Count projection, a Value display field, and `store.mjs` had uncommitted edits.
- Performance numbers in section 8 Layer B are copied from `forensics/pre-issue57-research-v1/REPORT-A.md` and `REPORT-B.md`. They were not reproduced.
- The discontinued-product instruction is the assignment’s operating rule for Cardi. A shutdown timestamp was not found in the files searched.
- Do not ingest this package as permission to run TennisEdge.

**Package file:** `TennisEdge_CARDI_COMPLETE_KNOWLEDGE.md`  
**Ready for RiRi’s review before any ingestion into Cardi’s memory.**
