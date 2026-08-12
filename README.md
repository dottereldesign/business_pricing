# Jamie Wilson web studio

A static website for Jamie Wilson's independent web design and development studio.

- `index.html` — agency homepage
- `start-here.html` — 90-day launch plan and decision dashboard
- `services.html` — core, adjacent, recurring, and partner-led service catalogue
- `pricing.html` — pricing and scope
- `competitors.html` — Christchurch and New Zealand competitor comparison
- `budget.html` — annual studio budget, alternatives, and hosting comparison
- `setup.html` — New Zealand structure, registration, GST, privacy, and legal setup guide
- `accounting.html` — accounts, records, invoicing, software, and bookkeeping routines
- `tax.html` — current NZ tax explainer and individual income-tax estimator
- `projections.html` — adjustable 12-month revenue, profit, and tax model
- `advertising.html` — acquisition plan, channel matrix, and paid funnel calculator
- `sales.html` — pipeline, discovery, proposal, follow-up, and qualification playbook
- `operations.html` — delivery workflow, scope, QA, launch, and security playbook
- `names.html` — 4,351 registry-screened business-name prompts, 220 JW directions, and a searchable bank of 1,000 satisfying words
- `logos.html` — four-column gallery of individual JW logo explorations and intact presentation boards

All draft pages use the shared full-screen menu from `script.js`. Each draft link is followed by a working `(final)` holding page in the menu, ready for approved material to be promoted later. Interactive planning tools live in `business-tools.js`; generated names live in `names.js`, and the phonaesthetic inspiration bank lives in `sound-words.js`.

## Local preview

Open `index.html` directly or run any static server from the repository root, for example:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages through `.github/workflows/deploy-pages.yml`.
