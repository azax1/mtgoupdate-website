mtgoupdate-website
===================

Static website for mtgoupdate.com, which provides information about tournaments held on Magic: The Gathering Online.

Prerequisites:
- Node.js (optional, for npm utilities) or Python 3 (recommended to serve locally)

Running locally (options):

Option A — using Python 3 (no extra install required):

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000/docs/ in your browser
```

Option B — using Node (with `npx http-server`):

```bash
# from the repository root
npx http-server -p 8000 -c-1
# then open http://localhost:8000/docs/ in your browser
```

Note: this repository contains a static site — the main content is inside the `docs/` folder.

Useful scripts:

- Format code with Prettier (already configured in `package.json`):

```bash
npm run format
```

Quick tips:
- If you prefer not to install anything, use the Python option (Python 3 is available on most macOS installs).
- To use a global Node server, install `http-server` globally: `npm install -g http-server`.
