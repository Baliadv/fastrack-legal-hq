Fastrack Legal Digital HQ — v15 (Frontend)
-------------------------------------------------
All features from v8–v14 consolidated, with backend support.

### Deploy frontend
- Upload the contents of this folder to Netlify/Vercel/Cloudflare Pages (static hosting).
- Ensure your backend is running (see Backend v1).

### Connect to backend
1) Open the app → Settings → **API Base URL**: set to your backend, e.g. `https://your-backend.example.com`
2) Create an Admin via the **Sign Up** (server mode). Login stores a JWT in browser storage.

### AI Settings (Groq)
- Endpoint defaults to `https://api.groq.com/openai/v1/chat/completions`
- Model defaults to `llama-3.1-70b-versatile`. Paste your API key.

### Offline
- Service worker enabled with versioned cache. Use the **Go Offline** button to clear and re-test.
