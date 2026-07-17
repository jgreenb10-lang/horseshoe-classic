// ── Paste your Firebase project's config here ──────────────────────────────
// Get this from: Firebase console → Project settings → General →
// "Your apps" → the </> (Web) app → SDK setup and configuration.
// See README.md for the full step-by-step setup.

const firebaseConfig = {
  apiKey: "AIzaSyCvmTDS_2T1UtgrK5nCH2A7ylh5wbP7baU",
  authDomain: "horseshoe-classic.firebaseapp.com",
  databaseURL: "https://horseshoe-classic-default-rtdb.firebaseio.com",
  projectId: "horseshoe-classic",
  storageBucket: "horseshoe-classic.firebasestorage.app",
  messagingSenderId: "741076766887",
  appId: "1:741076766887:web:89ea4bf83c13e1f8b00b82"
};

// ── Admins ───────────────────────────────────────────────────────────────
// Anyone signed in with one of these email addresses gets the "Admin" tab,
// where they can edit any player's bio/handicap/home course/fun fact.
// Add as many as you want, comma-separated, in quotes.
const ADMIN_EMAILS = [
  "jgreenb10@gmail.com"
];
