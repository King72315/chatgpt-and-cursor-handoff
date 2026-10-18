# Issue #85 — Supabase recovery checkpoint

Review trigger: handoff-review

## Work completed
- Confirmed original project `nojdqklncbntgnbeojea.supabase.co` is NXDOMAIN (not recoverable).
- Reviewed migrations 1–5; documented in ChurchEdge `docs/SUPABASE_MIGRATION_REVIEW.txt`.
- Posted findings + proposed apply plan on Issue #85.
- No migrations applied yet (no free project credentials / access token on this machine).
- Old `.env.local` left intact (not deleted).

## Tests and evidence
- DNS NXDOMAIN for original host (nslookup 8.8.8.8).
- `npx supabase projects list` → AccessTokenRequiredError.
- Migration static review: no TRUNCATE/DELETE/DROP TABLE; #5 only DROP POLICY IF EXISTS.

## Blockers
Need King to (1) create FREE Supabase project in dashboard and supply public URL + anon key locally, or (2) set `SUPABASE_ACCESS_TOKEN` in this Cursor session so Mariah can create the free project and run `db push`.

## Changes made
- `docs/SUPABASE_MIGRATION_REVIEW.txt`
- `scripts/apply-migrations-when-ready.ps1`
- Issue #85 progress comment

## Deployment status
No backend live yet. No public APK/website. No paid upgrade.

## Owner decision required
Provide free-project public credentials (or session access token) to continue migration apply + auth verification.
