# Behind the Meter

An interactive research instrument comparing distributed energy strategies, customer types, technologies, business models, and capital markets — across five geographies and three time horizons.

Built for Third Sphere as a thinking tool, not a marketing site.

## What's in the tool

**Six sections:**

1. **Why people buy** — customer × buying-reason matrix that shifts with the time horizon
2. **Live technology ranking** — eight technologies scored against current slider conditions, ordered live
3. **Technology comparison** — same eight, expanded to cards with capex, lifespan, value stack, score, and portfolio attribution
4. **Business models** — five models scored against current slider conditions, with bottleneck flags, alongside a fifteen-year history of rooftop solar's evolution from cash → PPA → lease → loan
5. **Capital markets readiness** — which technologies have unlocked which layer of the capital stack, from venture equity to investment grade
6. **Wildcards** — five forces that could rewrite the economics: hyperscaler-funded flex, compute flexibility, insurance as buyer, the rate-basing fight, the data + AI moat

**Controls:**

- **Geography** (US / EU / LATAM / SA / India) — switching geography auto-resets sliders to that region's defaults
- **Horizon** (Now → 2027 / 2030 / 2035+) — shifts which buying reasons are emerging vs. established
- **Seven sliders** that recompute scores in real time:
  - Market conditions: peak / capacity pressure, resilience demand, electrification pace
  - Capital & trust: capital availability, customer trust, regulatory openness
  - Adjacent forces: insurance as buyer

## Scoring methodology

Each technology gets a score from 0 to 100 based on:

- **Geographic fit** (1–3) — fixed per region, multiplies the score (0.55× / 0.78× / 1.0×)
- **Demand pull** — how strongly the technology's primary and secondary drivers align with the customer reasons matrix for the current geography and horizon
- **Slider-weighted components** — flexibility weighted by peak pressure and regulatory openness; resilience weighted by resilience demand; capex-friendliness weighted inversely by capital availability (low-capex matters more when capital is scarce); install ease weighted by customer trust; margin potential always counts; electrification bonus for heat pumps and EVs; insurance bonus for leak sensors and smart panels
- **Horizon multiplier** — long-horizon view boosts technologies with high flexibility and resilience

Business models get scored against three slider thresholds (regulatory, capital depth, customer trust). The model identifies which threshold is the binding constraint as a "bottleneck."

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Deploying

### Option A: Vercel (easiest — one-click import)

1. Create the GitHub repo (see below)
2. Go to https://vercel.com/new
3. Import the repo. Vercel auto-detects Vite. Click Deploy.
4. Done. URL is `your-project.vercel.app`.

### Option B: Netlify Drop (no GitHub needed)

```bash
npm install
npm run build
# Drag the resulting dist/ folder onto https://app.netlify.com/drop
```

### Option C: GitHub Pages

1. Create the GitHub repo
2. In `vite.config.js`, set base to your repo name, e.g. `VITE_BASE=/btm-tool/ npm run build`
3. Deploy:
   ```bash
   npm run deploy
   ```
4. In repo settings → Pages, set source to the `gh-pages` branch
5. URL is `https://USERNAME.github.io/btm-tool/`

## Pushing to GitHub (first time)

```bash
cd btm-deploy
git init
git add .
git commit -m "Initial commit: BTM research instrument"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/btm-tool.git
git push -u origin main
```

## Sources

- Wood Mackenzie 2025 NA VPP Market Report
- DOE Liftoff: Virtual Power Plants 2025 Update
- Pew Charitable Trusts on rate design and DERs
- Latitude Media on hyperscaler BTM deals
- LBNL South Africa Water Heating DSM Study (2024)
- Plentify research on geyser load shapes

## Editing the data

All baseline numbers live at the top of `src/App.jsx`:

- `REASONS_MATRIX_BASE` — buying reasons by geography × customer type (mid-horizon baseline)
- `TECHNOLOGIES` — capex, lifespan, dispatchability, flexibility, resilience, install friction, margin potential, value stack, geographic fit, primary and secondary drivers
- `BUSINESS_MODELS` — descriptions plus required levels of regulatory openness, capital depth, customer trust
- `CAPITAL_MARKETS` — maturity of each capital stage for each technology
- `WILDCARDS` — five wildcard cards
- `GEO_DEFAULTS` — slider defaults per geography (the values the reset button restores)

Numbers reflect public data and informed estimates as of late 2025 / early 2026.
