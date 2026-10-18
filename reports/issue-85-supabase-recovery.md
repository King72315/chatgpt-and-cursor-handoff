# Issue #85 — ChurchEdge Supabase recovery

Review trigger: handoff-review

Assigned issue: #85
https://github.com/King72315/chatgpt-and-cursor-handoff/issues/85

Application repository: King72315/churchedge
Local workspace named by the assignment: `C:\Users\nicho\Projects\ChurchEdge`

Cloud agent: https://cursor.com/agents/bc-9c57be3d-725b-46be-80f3-12f75e775e6d

Acknowledgment: https://github.com/King72315/chatgpt-and-cursor-handoff/pull/87

## Work completed

The original ChurchEdge Supabase host was checked again. `nojdqklncbntgnbeojea.supabase.co` is NXDOMAIN, and HTTPS to that host does not resolve. This run did not delete, reset, or overwrite that project, and it did not change its identity.

A new free-tier project was not created. This workspace has no Supabase login, no Supabase CLI session, and no Supabase environment variables. Creating an account or a project from here would require a session that is not present. The run stopped there.

The four existing migration files were not opened. They are not in this workspace, so there is no reviewed SQL and no proposed apply order from the file text. Nothing was applied.

Real church signup, login, session, approval, and cross-church RLS were not tested. Those checks are blocked until a reachable backend and the ChurchEdge app source are both available.

## Tests and evidence

| Check | Result |
| --- | --- |
| `dig` A `nojdqklncbntgnbeojea.supabase.co` | NXDOMAIN (2026-10-18 UTC) |
| HTTPS `https://nojdqklncbntgnbeojea.supabase.co/rest/v1/` | Could not resolve host |
| `GET /repos/King72315/churchedge` | HTTP 404 |
| Name variants `ChurchEdge`, `church-edge`, `Church-Edge`, `church_edge` | HTTP 404 |
| Public repos for King72315 | `arkansas-pick3-auto-engine`, `betbrain-server`, `chatgpt-and-cursor-handoff` |
| Environment `handoff-and-tennisedge` (`e7fa4ade-c629-11f1-ac31-5e2d0494121f`) | Mounts handoff and `King72315/tennisedge` only |
| `C:\Users\nicho\Projects\ChurchEdge` | Not mounted |
| ChurchEdge directory or `20261018000000_mobile_admin_rls_fix.sql` on disk | Absent |
| Supabase environment variables, `~/.supabase`, supabase CLI login | Absent |
| Issue comment create | `Resource not accessible by integration` |

The previously reported migration filename `supabase/migrations/20261018000000_mobile_admin_rls_fix.sql` was not on disk, so its SQL was not re-read.

## Blockers

The application repository is not available to this cloud environment, and the local Windows workspace is not mounted. Dashboard recovery of the original project, free-tier project creation, and migration review all need that source plus a Supabase session on King's account.

No migration application plan can be confirmed from unread SQL. Applying unreviewed SQL was not authorized and was not done.

## Changes made

Handoff status only, in `RIRI_MARIAH_HANDOFF.md` and this report. No ChurchEdge application files were edited. No database, schema, or saved records were changed. TennisEdge was not modified.

## Deployment status

No public website deployment. No APK publishing. No new Supabase project. No migrations applied. Original project was left untouched.

## Owner decision required

Continue this recovery from the local ChurchEdge workspace, where the four migration files can be read before any SQL runs. A Supabase session on the existing account is required to try restoring `nojdqklncbntgnbeojea` or to create a free-tier project if restore is unavailable. Do not send service-role keys or the anon key in GitHub.

If the cloud environment should do this later, it needs `King72315/churchedge` mounted and a Supabase session that is not pasted into the repository. Until then, this cloud workspace should not create a project or apply migrations.
