# Issue #85 — ChurchEdge complete mobile implementation

Review trigger: handoff-review

## Work completed

- Continued existing `/mobile` Expo app (did not restart).
- Phase 1: standalone Android release APK with embedded `index.android.bundle` (no Metro).
- Phase 3: native member + leadership screens wired to ChurchEdge schema via anon Supabase client + RLS.
- Migration added: `20261018000000_mobile_admin_rls_fix.sql` (admin membership policies without JWT `church_id`).

## Tests and evidence

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | PASS |
| `gradlew assembleRelease -PreactNativeArchitectures=arm64-v8a` | PASS |
| APK path | `C:\Users\nicho\Projects\ChurchEdge\dist-android\ChurchEdge-1.1.0-standalone.apk` |
| Size / version | 36.67 MB · 1.1.0 · versionCode 2 · `com.churchedge.app` |
| Embedded JS bundle | PASS (`assets/index.android.bundle`) |
| Service-role secret in APK | PASS (absent) |
| Supabase DNS `nojdqklncbntgnbeojea.supabase.co` | FAIL (NXDOMAIN) |

## Blockers

Owner decision required before Phase 2 acceptance:

1. Restore the original Supabase project, **or**
2. Approve creating a **new free** Supabase project and applying all ChurchEdge migrations.

No paid resources purchased. No public APK/website published.

## Changes made

Application repo `King72315/churchedge` local workspace:

- `mobile/app/**` auth, member, admin routes
- `mobile/src/**` API, auth, domain, UI
- `mobile/android/app/build.gradle` bundle-in-APK + version bump
- `supabase/migrations/20261018000000_mobile_admin_rls_fix.sql`
- `docs/COMPLETE_MOBILE_REPORT.txt`

## Deployment status

Local test APK only. Capacitor remains legacy. TennisEdge unchanged by this work.

## Owner decision required

1. Supabase restore vs new project  
2. Optional public APK distribution approval  
3. Physical phone cold-launch after backend is live  

Assigned issue: https://github.com/King72315/chatgpt-and-cursor-handoff/issues/85  
Application repository: https://github.com/King72315/churchedge  
Cloud agent URL: none (local Cursor session)
