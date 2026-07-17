# The Horseshoe Classic

A yearly tradition tracker for a 4v4 golf tournament at Horseshoe Country Club, Door County, WI. Drafts, scorecards, chat, and bets all sync live for anyone with the link, and everything is archived by season so the record book keeps growing.

## Files

- `index.html` — the whole site
- `firebase-config.js` — your Firebase keys + the list of admin emails

## 1. Set up Firebase (~10 minutes)

### Create the project
1. Go to **console.firebase.google.com**, sign in, and click **Add project** (any name works, Analytics is optional).

### Turn on the database
2. In the sidebar: **Build → Realtime Database → Create Database**. Pick any region, choose **Start in test mode**.
   - Test mode opens the database to anyone with the URL for 30 days. To keep it working after that (and since this app doesn't use Firebase's own security rules to lock things down), open the **Rules** tab and set:
     ```json
     { "rules": { ".read": true, ".write": true } }
     ```
   - There's no per-user permission system here — anyone signed in can edit anything. That's fine for a trusted group of friends, just know it going in.

### Turn on sign-in
3. In the sidebar: **Build → Authentication → Get started**. Under **Sign-in method**, enable **Email/Password**.

### Get your config
4. **Project settings** (gear icon) → **Your apps** → click **</>** to register a web app → copy the `firebaseConfig` object it gives you.
5. Paste it into `firebase-config.js`, replacing the placeholder values.
6. In the same file, add your own email (and any other organizers') to `ADMIN_EMAILS` — that's what unlocks the **Admin** tab once you sign in with that address.

If you skip all of this, the site still opens and looks right, it just runs in a local-only demo mode — no sign-in, no syncing between people.

## 2. Put it on GitHub Pages

1. Create a new repo on GitHub.
2. Upload `index.html` and your filled-in `firebase-config.js` to the repo root.
3. **Settings → Pages** → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` → Save.
4. Your link will be `https://yourusername.github.io/your-repo-name/`.

## How it works

- **Year selector** (top right) — switches every tab to that season. Picking "+ Start new season…" creates a fresh year without touching past years' drafts or scorecards.
- **Sign in** — anyone can create an account with an email, password, and display name. That creates their player profile.
- **Draft** — add golfers (or "Import registered players" to pull in everyone with an account), then draft freely or flip on snake draft turns.
- **Scorecards** — one card per foursome. Each row can be linked to a registered player (feeds their career stats) and tagged to a team (feeds the live leaderboard).
- **Leaderboard tab** — an all-time career leaderboard computed from every round ever logged (rounds played, average vs. par, best round, championship count), plus a list of past champions.
- **Players tab** — everyone's bio, handicap, home course, fun fact, and career stats at a glance.
- **Draft Chat** — a live chat room scoped to the selected year, meant for draft day banter.
- **Bets** — log a friendly wager between two registered players, check it off once it's settled. Below the year's bet list is an all-time ledger netting out every unsettled bet across every season.
- **Admin tab** — visible only to emails in `ADMIN_EMAILS`. Pick any player and edit their bio, handicap, home course, and fun fact directly (handy for setting people up before they've signed in themselves).
