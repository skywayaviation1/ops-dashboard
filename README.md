# Skyway Ops Platform — Admin Backend

Separate deployment from the crew app. Reads from the **same Firebase project and
`appusers` Firestore database** — no data duplication, everything stays in sync.

---

## Deploy in 5 steps

### 1. Create a new GitHub repo
Go to github.com/skywayaviation1 → New repository → name: `skyway-admin` → Public → Create

### 2. Upload all files
In the new repo, upload this entire folder's contents (maintaining folder structure):
- Drag-and-drop works for individual folders via GitHub web UI
- Or use the GitHub CLI: `gh repo clone` then copy files and push

### 3. Copy Firebase env vars
Copy your exact values from the crew app's Vercel environment variables:
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

### 4. Connect to Vercel
- Go to vercel.com/new
- Import `skywayaviation1/skyway-admin`
- Framework preset: **Vite**
- Add all 6 env vars above
- Deploy

### 5. Get your URL
Vercel will give you: `https://skyway-admin-[hash].vercel.app`
You can set a custom domain (e.g. `admin.skyway.aero`) in Vercel settings.

---

## What's in each module

| Module | URL | Data source |
|---|---|---|
| Command Center | `/` | `flights` + `pilots` (today + recent) |
| Fleet | `/fleet` | `flights` + `maintenanceReports` per tail |
| Pilots | `/pilots` | `pilots` + `dutyRecords` |
| Trips | `/trips` | `flights` (full log, sortable, filterable) |
| Reports | `/reports` | All collections → CSV export |
| Revenue | `/revenue` | `flights.charterRate` grouped by month + tail |
| Compliance | `/compliance` | `pilots` currency dates + `maintenanceReports` |
| Settings | `/settings` | Static config |

---

## Extending it

All data hooks are in `src/hooks/useData.js` — add a new `useXxx()` hook there,
import it in your page component. The pattern is always the same: `onSnapshot`
listener → local state → realtime updates with zero polling.

For new pages: create `src/pages/MyPage.jsx`, add the route in `src/App.jsx`,
add the nav link in `src/components/Layout.jsx`.
