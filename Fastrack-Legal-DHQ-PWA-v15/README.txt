Fastrack Legal Digital HQ — v10 (Rebuilt)
-------------------------------------------------
Includes:
- Research (GPT prompts)
- Evidence (PDF OCR) with per-page thumbnails, OCR all, search, export
- Bare Acts Navigator (sample acts + import pack + personal notes)
- Files Vault + Exhibit Index (CSV/PDF)

Usage:
1) Open index.html in Chrome/Edge.
2) Settings: add AI proxy endpoint or a test OpenAI key.
3) Evidence: load PDF and OCR.
4) Acts: search or import your own acts.json.


v11: Consolidated v9.2c + Research + Evidence OCR + Bare Acts. Service worker disabled while iterating.


v12: Auto-provisioned Auth
- auth.html with Login/Signup (Admin/Team/Client)
- First run: if no USERS in storage, shows Admin setup automatically
- index.html enforces auth and adds Logout
- Client role sees a limited UI (read-only/portal-style)
NOTE: This is browser-only demo auth. For production, connect to a backend auth provider.


v13: Tasks — Assignment, Acceptance & Updates
- Create tasks with title, assignee email, due date, priority, matter, estimate, instructions.
- Assignee can Accept/Decline; status flow: Assigned → Accepted → In Progress → Blocked/Completed.
- Comment on tasks; view audit log (history).
- Export/Import tasks as JSON.
- Role rules: Admin/Team can create & delete; Client is read-only and only sees tasks assigned to self.


v14: Ready-to-deploy PWA + nicer touches
- Per-task timers (start/stop, auto-bill to Billing log with ₹ rate)
- Mentions in comments (@email) with in-app notifications
- Task attachments (stored with task, listed on task rows)
- Billing log: CSV export/import, totals panel
- Production Service Worker re-enabled (offline-first)
- Netlify deploy kit: _redirects + netlify.toml
- "Go Offline" test button to clear cache and simulate offline
