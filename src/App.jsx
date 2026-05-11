import React, { useState, useMemo } from 'react';

// ============================================================================
// DATA LAYER
// ============================================================================

const GEOGRAPHIES = {
  US: { label: 'United States', flag: '🇺🇸' },
  EU: { label: 'European Union', flag: '🇪🇺' },
  LATAM: { label: 'Latin America', flag: '🌎' },
  SA: { label: 'South Africa', flag: '🇿🇦' },
  IN: { label: 'India', flag: '🇮🇳' },
};

const HORIZONS = {
  near: { label: 'Now → 2027', sub: 'Near-term reality', shift: -1 },
  mid: { label: '2030', sub: 'Mid-decade outlook', shift: 0 },
  long: { label: '2035+', sub: 'Full transition', shift: 1 },
};

// Slider references — each slider gets a plain-language description plus
// current signal and forecast data anchored to credible public sources
// (IEA, DOE, BNEF, FERC, Wood Mackenzie, RMI, EIA). Surfaced in expandable panels.
const SLIDER_REFERENCES = {
  peak_pressure: {
    measures: 'How much grid stress is driving demand for flexible load. Higher = bigger gap between peak demand and reliable supply, which means flexibility (load shifting, battery dispatch, demand response) is more valuable.',
    current: 'US peak demand is rising for the first time in a decade — data centres, electrification, and onshoring are pushing it up while old coal and gas plants retire. DOE projects ~200 GW of new peak resource needs by 2030.',
    forecast: 'DOE Liftoff: tripling current VPP capacity to 80–160 GW by 2030 could cover 10–20% of peak load and save $10B annually. Brattle finds residential VPPs deliver peaking capacity at 40–60% lower net cost than gas peakers.',
    sources: [
      { label: 'DOE Liftoff: Virtual Power Plants (2024)', url: 'https://liftoff.energy.gov/vpp/' },
      { label: 'Brattle Group: Real Reliability', url: 'https://www.brattle.com/insights-events/publications/real-reliability/' },
      { label: 'NERC Long-Term Reliability Assessment', url: 'https://www.nerc.com/pa/RAPA/ra/Pages/default.aspx' },
    ],
  },
  resilience_demand: {
    measures: 'How much customers and grids are willing to pay for backup capacity and outage hardening. Driven by outage frequency, climate exposure, and insurance dynamics.',
    current: 'US average outage hours have roughly doubled since 2013 due to weather events. South Africa logged 250+ hours of Stage 4–6 load shedding in peak years. California, Texas, and the Northeast are seeing the strongest residential battery attach rates on new solar.',
    forecast: 'BNEF: global energy storage market grows at ~23% CAGR through 2030. Residential battery attach rates on new solar have crossed 25–30% in California post-NEM 3.0 — primarily resilience-driven, not bill-driven.',
    sources: [
      { label: 'EIA Annual Electric Power Industry Report', url: 'https://www.eia.gov/electricity/data/eia861/' },
      { label: 'BNEF Energy Storage Market Outlook', url: 'https://about.bnef.com/insights/clean-energy/energy-storage/' },
      { label: 'Wood Mackenzie US Energy Storage Monitor', url: 'https://www.woodmac.com/research/products/power-and-renewables/us-energy-storage-monitor/' },
    ],
  },
  electrification: {
    measures: 'Speed of the heating/transport electrification transition. Faster electrification = more flexible loads to manage (heat pumps, EVs, hot water) and more revenue surface for orchestration.',
    current: 'IEA: heat pumps outsold gas boilers in the US for the fourth year running in 2025. Germany flipped to heat pumps > gas boilers for the first time in 2025. Globally ~10% of building heating is heat-pump-based today (~100M households).',
    forecast: 'IEA WEO 2025: heat pumps could meet ~40% of space heating demand in the US and Japan by 2035, and double their share in the EU and China. EVs already 7%+ of US new car sales; BNEF projects 30%+ globally by 2030. DOE expects 20–90 GW of EV charging demand capacity additions by 2030.',
    sources: [
      { label: 'IEA World Energy Outlook 2025', url: 'https://www.iea.org/reports/world-energy-outlook-2025' },
      { label: 'IEA Renewables 2025', url: 'https://www.iea.org/reports/renewables-2025' },
      { label: 'BNEF Electric Vehicle Outlook', url: 'https://about.bnef.com/insights/clean-transport/electric-vehicle-outlook/' },
    ],
  },
  capital_depth: {
    measures: 'How readily distributed-asset cash flows can be financed through project finance, ABS, or growth equity. Deeper capital = lower cost of customer acquisition (no upfront capex from customer), longer contract tenors viable.',
    current: 'BNEF says 2025 will be a record-breaking year for energy storage despite tariff disruptions. DOE finalized a $3B partial loan guarantee for the first national-scale VPP project in 2023. Residential solar ABS spreads are 200–300bp over benchmarks. VPP-specific term sheets remain non-standardized.',
    forecast: 'BNEF: global energy storage market grows from current ~$30B to $90B+ by 2030. Renew Home (Google Nest + OhmConnect) targeting 50 GW residential VPP by 2030 — entry of patient capital. ABS for solar+storage and heat pumps emerging but not yet for water heaters or smart panels.',
    sources: [
      { label: 'BNEF Energy Transition Investment Trends', url: 'https://about.bnef.com/insights/finance/energy-transition-investment/' },
      { label: 'DOE Loan Programs Office', url: 'https://www.energy.gov/lpo/loan-programs-office' },
      { label: 'Lazard Levelized Cost of Storage (LCOS+)', url: 'https://www.lazard.com/research-insights/' },
    ],
  },
  customer_trust: {
    measures: 'How easily a vendor can reach and acquire end customers. Captures CAC, brand strength, installer channel quality, and whether customers will hand over control of an in-home asset.',
    current: 'Residential solar CAC has averaged $5k–7k+ since 2020 — the single largest cost component of an installed system. DOE Liftoff cites customer acquisition as the #1 barrier for residential DER deployment. Building-owner trust is the gating factor for multifamily decarb retrofits.',
    forecast: 'Wood Mackenzie expects channel consolidation: utility programs, retail (Costco, Amazon), and embedded OEM partnerships (HVAC contractors, builders) take share from door-to-door. Auto-enrollment with opt-out (DOE-recommended) could collapse CAC for utility-sponsored VPPs.',
    sources: [
      { label: 'Wood Mackenzie US Residential Solar Markets Report', url: 'https://www.woodmac.com/research/products/power-and-renewables/us-solar-market-insight/' },
      { label: 'DOE Liftoff: VPP Customer Enrollment', url: 'https://liftoff.energy.gov/vpp/' },
      { label: 'LBNL Tracking the Sun', url: 'https://emp.lbl.gov/tracking-the-sun' },
    ],
  },
  regulatory: {
    measures: 'How welcoming the rules are to distributed energy resources and aggregators — net metering structure, demand charge design, DR program access, wholesale market participation, and emissions mandates that drive demand.',
    current: 'FERC Order 2222 (2020) requires ISOs to allow DER aggregation in wholesale markets — implementation varies widely (CAISO, ISO-NE further along; MISO, SPP slower). NYC Local Law 97 began imposing building emissions caps in 2024 with stiff penalties. California NEM 3.0 cut residential solar export rates ~75%, killing the pure self-consumption play.',
    forecast: 'NYC LL97 ratchets through 2030 and 2040 — driving multifamily retrofit demand. EU Energy Performance of Buildings Directive (revised 2024) mandates phaseout of new fossil heating by 2040. Rate design risk remains the largest underwriting variable for any 15+ year BTM asset.',
    sources: [
      { label: 'FERC Order 2222', url: 'https://www.ferc.gov/news-events/news/explainer-order-no-2222-fact-sheet' },
      { label: 'NYC Local Law 97', url: 'https://www.nyc.gov/site/sustainability/our-programs/local-law-97.page' },
      { label: 'CPUC NEM 3.0 / Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering' },
    ],
  },
  insurance: {
    measures: 'Whether insurers are paying to harden homes and buildings against climate risk — through premium discounts, direct funding of mitigation equipment, or partnerships with hardware vendors. Creates a new (non-utility, non-customer) buyer of BTM assets.',
    current: 'State Farm and Allstate paused new homeowner policies in California citing wildfire risk. Hippo, Lemonade, and Travelers are piloting leak-sensor subsidies. Munich Re and Swiss Re are funding adaptation pilots. Florida and Louisiana property markets effectively rationed.',
    forecast: 'Swiss Re sustainability research models insured climate losses growing 5–7% per year through 2040. Expect insurer-funded resilience to expand from leak detection into batteries, smart panels, and grid-tied storage — particularly in fire/flood-exposed regions. Triple-net pairing of insurer + utility + vendor remains an open category.',
    sources: [
      { label: 'Swiss Re Institute — Natural Catastrophes', url: 'https://www.swissre.com/institute/research/topics-and-risk-dialogues/climate-and-natural-catastrophe-risk.html' },
      { label: 'Munich Re NatCatSERVICE', url: 'https://www.munichre.com/en/solutions/for-industry-clients/natcatservice.html' },
      { label: 'Insurance Information Institute Climate Reports', url: 'https://www.iii.org/' },
    ],
  },
};

const REASONS_MATRIX_BASE = {
  US: {
    consumer: { comfort: 2, capex: 2, resilience: 3, bills: 3, identity: 2 },
    building: { comfort: 2, capex: 3, resilience: 3, bills: 3, identity: 2 },
    utility: { comfort: 0, capex: 3, resilience: 3, bills: 3, identity: 0 },
  },
  EU: {
    consumer: { comfort: 3, capex: 2, resilience: 2, bills: 3, identity: 3 },
    building: { comfort: 3, capex: 3, resilience: 2, bills: 3, identity: 3 },
    utility: { comfort: 1, capex: 3, resilience: 2, bills: 3, identity: 2 },
  },
  LATAM: {
    consumer: { comfort: 2, capex: 2, resilience: 3, bills: 3, identity: 1 },
    building: { comfort: 2, capex: 2, resilience: 3, bills: 3, identity: 1 },
    utility: { comfort: 0, capex: 2, resilience: 3, bills: 2, identity: 1 },
  },
  SA: {
    consumer: { comfort: 2, capex: 2, resilience: 3, bills: 3, identity: 1 },
    building: { comfort: 2, capex: 3, resilience: 3, bills: 3, identity: 1 },
    utility: { comfort: 0, capex: 3, resilience: 3, bills: 3, identity: 1 },
  },
  IN: {
    consumer: { comfort: 3, capex: 2, resilience: 3, bills: 3, identity: 1 },
    building: { comfort: 3, capex: 2, resilience: 3, bills: 3, identity: 1 },
    utility: { comfort: 0, capex: 3, resilience: 2, bills: 3, identity: 1 },
  },
};

const HORIZON_GROW = ['resilience', 'identity'];

const REASON_LABELS = {
  comfort: { name: 'Comfort / UX', desc: 'Better thermal comfort, automation, peace of mind' },
  capex: { name: 'Avoided Capex', desc: 'Cheaper than the conventional alternative (geyser, AC, transformer)' },
  resilience: { name: 'Resilience', desc: 'Backup during outages, blackouts, load shedding, climate events' },
  bills: { name: 'Bill Reduction', desc: 'Lower energy costs via efficiency or arbitrage' },
  identity: { name: 'Identity / Climate', desc: 'Decarbonization, signaling, ESG' },
};

// Market scale — addressable base, current penetration, and 2030 projection per
// technology × geography. Order-of-magnitude estimates intended to indicate scale,
// not predict it precisely. Anchored to public sources (EIA, IEA, DOE Liftoff,
// BNEF, Wood Mackenzie, LBNL, ISO-NE, NYC LL97 data, NYSERDA, Plentify research).
const MARKET_SCALE = {
  water_heater: {
    headline: 'Largest leverage in markets with electric resistance heating + peak constraints',
    geos: {
      US: '~50M electric water heaters (EIA). <5% in any DR/VPP program today. 2030 flex potential: ~5–10 GW dispatchable if utility programs scale.',
      EU: '~30M, but Europe is shifting to heat-pump water heaters under EU ecodesign; flex value narrower outside cold-climate hot-water-only use.',
      LATAM: '~20M+ urban, mostly uncontrolled tank. Niche today outside Brazil and Chile pilots.',
      SA: '~6M electric geysers — 33% of residential consumption and 35% of evening peak (LBNL 2024 South Africa Water Heating DSM Study). Plentify targeting 1M+ devices by 2030. The canonical case.',
      IN: '~30M+ urban geysers, growing fast with middle-class formation. Peak-tariff dynamics rising; flex monetization still early.',
    },
    sources: [
      { label: 'LBNL South Africa Water Heating DSM Study (2024)', url: 'https://emp.lbl.gov/publications' },
      { label: 'EIA Residential Energy Consumption Survey', url: 'https://www.eia.gov/consumption/residential/' },
      { label: 'DOE Liftoff: VPP — water heater chapter', url: 'https://liftoff.energy.gov/vpp/' },
    ],
  },
  hybrid_electrification: {
    headline: 'Dense-urban multifamily with steam/gas heating + decarb mandates',
    geos: {
      US: 'NYC alone: ~1M multifamily units in ~50k buildings; 75% of NYC buildings use steam. LL97 directly covers ~50k properties >25k sq ft. Wider Northeast + Mid-Atlantic adds another ~3–5M units. Kelvin addressable market: tens of billions in retrofits by 2030.',
      EU: 'UK has ~10M radiator-heated homes (mostly gas combi); Germany ~25M, with central boilers. Hybrid retrofits emerging via utility programs and SAP/BREL incentives.',
      LATAM: 'Limited central steam/hydronic stock; AC-led market. Negligible near-term.',
      SA: 'Very limited steam infrastructure; gas heating uncommon outside industrial.',
      IN: 'Limited centralized heating outside cold-climate north (Punjab, J&K, parts of Himachal); negligible near-term opportunity.',
    },
    sources: [
      { label: 'NYC LL97 Building Emissions Law', url: 'https://www.nyc.gov/site/sustainability/our-programs/local-law-97.page' },
      { label: 'NYSERDA Multifamily Retrofit Programs', url: 'https://www.nyserda.ny.gov/' },
      { label: 'ACEEE Hybrid Heating Research', url: 'https://www.aceee.org/' },
    ],
  },
  commercial_heat: {
    headline: 'Propane displacement in restaurant + hospitality outdoor heating',
    geos: {
      US: '~700k restaurants (NRA); ~250k+ added outdoor dining post-COVID. Propane patio heater incumbents (~5M units installed); Focal addressable beachhead in coastal-climate hospitality. Energy footprint small per unit but high margin and brand-driven.',
      EU: 'Strong outdoor dining culture (Spain, Italy, France, UK); EU phase-out of patio gas heaters under discussion in several member states. Addressable ~500k+ venues.',
      LATAM: 'Seasonal use in high-altitude and southern-cone markets (Chile, Argentina, southern Brazil); niche but growing with hospitality recovery.',
      SA: 'Climate limits demand; some Cape Town / winter Highveld use. Small niche.',
      IN: 'Hill stations (Shimla, Manali) seasonal; otherwise climate doesn\u2019t require it.',
    },
    sources: [
      { label: 'National Restaurant Association State of the Industry', url: 'https://www.restaurant.org/' },
      { label: 'NYC Open Restaurants Program Data', url: 'https://www.nyc.gov/' },
      { label: 'EU Propane Phase-Out Discussions (Eurelectric)', url: 'https://www.eurelectric.org/' },
    ],
  },
  heat_pump: {
    headline: 'Mainstream in cold-climate developed economies; install capacity is the constraint',
    geos: {
      US: '~17M heat-pump-heated homes today (~20% of single-family). IEA WEO 2025: ~40% of US space heating from heat pumps by 2035, implying ~50M+ installed units. US sales fell ~13% in 2025 on refrigerant transition but still outsold gas furnaces for 4th straight year.',
      EU: '~25M cumulative installed; EU REPowerEU target of 60M by 2030. Germany flipped to HP > gas boilers for first time in 2025. Annual sales ~3M+.',
      LATAM: '~1M cumulative; mostly reversible AC in Chile, Brazil, Mexico used as HP. Growing but still niche for primary heating.',
      SA: '~150k installed; growing but small relative to geyser opportunity.',
      IN: '~30M+ reversible AC units (effectively HP capacity for cooling); heating use minor outside cold-climate north.',
    },
    sources: [
      { label: 'IEA World Energy Outlook 2025 — Heat Pumps', url: 'https://www.iea.org/reports/world-energy-outlook-2025' },
      { label: 'IEA The Future of Heat Pumps', url: 'https://www.iea.org/reports/the-future-of-heat-pumps' },
      { label: 'EHPA European Heat Pump Market Report', url: 'https://www.ehpa.org/data/market-data/' },
    ],
  },
  smart_thermostat: {
    headline: 'Incumbent VPP enrollment — 61% of US VPP deployments include thermostats',
    geos: {
      US: '~50M installed of ~85M HVAC-equipped homes; ~10M in active utility DR/VPP programs. Wood Mackenzie projects ~70M installed by 2030.',
      EU: '~15M; lower HVAC central penetration but smart-home growth strong, especially UK and Germany.',
      LATAM: 'Niche to urban affluent segment; ~1–2M installed.',
      SA: '~200–500k installed; underdeveloped market.',
      IN: 'Growing rapidly with split-AC adoption; ~3–5M smart-AC controllers installed.',
    },
    sources: [
      { label: 'Wood Mackenzie US Demand Response & VPP Market', url: 'https://www.woodmac.com/research/products/power-and-renewables/' },
      { label: 'DOE VPP Liftoff Report', url: 'https://liftoff.energy.gov/vpp/' },
    ],
  },
  battery: {
    headline: 'Highest flex per unit; economics dominated by rate design + resilience demand',
    geos: {
      US: '~700k residential systems installed (2024); BNEF projects ~1M+ added annually by 2027. Total residential capacity ~7 GW. ~3 GW commercial/industrial BTM.',
      EU: '~2M residential batteries; Germany ~1.5M alone. Italy, UK accelerating.',
      LATAM: 'Small (~100k residential); load-shedding-driven growth in Argentina, Mexico, parts of Brazil.',
      SA: '~150k+ residential battery installations during load-shedding peak (2023). Growing despite reduced load-shedding pressure.',
      IN: 'Small (<50k residential); commercial BTM growing for solar self-consumption.',
    },
    sources: [
      { label: 'BNEF Energy Storage Market Outlook', url: 'https://about.bnef.com/insights/clean-energy/energy-storage/' },
      { label: 'Wood Mackenzie US Energy Storage Monitor', url: 'https://www.woodmac.com/research/products/power-and-renewables/us-energy-storage-monitor/' },
      { label: 'SolarPower Europe Battery Storage Outlook', url: 'https://www.solarpowereurope.org/' },
    ],
  },
  leak_thermal: {
    headline: 'Loss-prevention play with insurance-funded growth potential',
    geos: {
      US: '~150M home insurance policies; <10M leak sensors installed. Commercial refrigeration ~4M asset-locations addressable (Glacier Grid territory).',
      EU: '~70M insured properties; growing leak-detection adoption, especially UK and Nordics.',
      LATAM: 'Commercial cold-chain primary opportunity; consumer adoption still light.',
      SA: 'Small but growing; insurance-funded resilience expanding.',
      IN: 'Commercial cold-chain large opportunity (vaccine + food supply chains); consumer adoption nascent.',
    },
    sources: [
      { label: 'Swiss Re Institute Climate Risk Reports', url: 'https://www.swissre.com/institute/' },
      { label: 'Insurance Information Institute', url: 'https://www.iii.org/' },
      { label: 'IEA Cold Chain Energy Demand', url: 'https://www.iea.org/' },
    ],
  },
  aggregation: {
    headline: 'The orchestration layer; capital following deployment',
    geos: {
      US: '30–60 GW VPP capacity today (DOE Liftoff). 2030 target: 80–160 GW (10–20% of peak). Renew Home alone targeting 50 GW residential VPP.',
      EU: 'Statkraft VPP 10 GW; Next Kraftwerke 10 GW; significant growth via Germany, UK, France market reforms.',
      LATAM: 'Limited near-term aggregation; some pilots in Brazil and Chile.',
      SA: 'Small but growing; Plentify-led aggregation pilots; no formal wholesale DR market yet.',
      IN: 'Early-stage; ~1 GW DR capacity. Wholesale market reforms expected mid-decade.',
    },
    sources: [
      { label: 'DOE Liftoff: VPP', url: 'https://liftoff.energy.gov/vpp/' },
      { label: 'Wood Mackenzie North America VPP Market Outlook', url: 'https://www.woodmac.com/' },
      { label: 'FERC Order 2222 Implementation Tracker', url: 'https://www.ferc.gov/' },
    ],
  },
  ev: {
    headline: 'Largest single load addition — but mobility-constrained dispatchability',
    geos: {
      US: '~4M EVs on road; DOE projects 20–90 GW of EV demand capacity additions by 2030. EV batteries: 300–540 GWh aggregate by 2030. V2G mainstreaming 2026–2028.',
      EU: '~12M EVs; Europe leads V2G regulatory push (UK G99, ISO 15118-20 deployment). 30–50 GW EV flex by 2030.',
      LATAM: '~500k EVs; small but growing 50%+ annually in Brazil/Mexico.',
      SA: '~30k EVs; minor near-term BTM contribution.',
      IN: '~5M EVs (mostly 2W/3W); different flex shape — small but numerous batteries, swap-based ecosystem.',
    },
    sources: [
      { label: 'BNEF Electric Vehicle Outlook', url: 'https://about.bnef.com/insights/clean-transport/electric-vehicle-outlook/' },
      { label: 'DOE Liftoff: VPP — EV chapter', url: 'https://liftoff.energy.gov/vpp/' },
      { label: 'IEA Global EV Outlook', url: 'https://www.iea.org/reports/global-ev-outlook-2025' },
    ],
  },
  smart_panel: {
    headline: 'The home OS — unlocks heat pump + EV + battery without service upgrade',
    geos: {
      US: '~130M residential service panels; smart-panel installed base <1M but growing fast under IRA + electrification mandates. SPAN, Lumin, others scaling.',
      EU: 'Lower addressable (panel-constraint problem less acute; service amperage already higher).',
      LATAM: 'Niche; emerging.',
      SA: 'Limited; service-amperage similar to EU.',
      IN: 'Limited central-panel architecture; smart-meter-led approach more common.',
    },
    sources: [
      { label: 'RMI Smart Panel Market Brief', url: 'https://rmi.org/' },
      { label: 'DOE Building Technologies Office', url: 'https://www.energy.gov/eere/buildings/' },
    ],
  },
};

// Adoption timeline — % penetration of addressable base, by tech × geography.
// Anchor years 2020 / 2025 / 2030 / 2035. Numbers are best-estimate trajectories,
// not forecasts. Anchored to IEA WEO 2025, DOE Liftoff (VPP), BNEF, EHPA market reports,
// REPowerEU targets, and the MARKET_SCALE prose above. Embeds two macro forces:
//   1. AI/datacenter capacity crunch — boosts aggregation/VPP and battery in markets
//      with active wholesale + hyperscaler co-funding (US strongest, then EU).
//   2. EU summer cooling surge — bumps EU heat pump (heating + cooling), smart
//      thermostat (managing AC load), and battery (PV self-consumption in heatwaves).
const ADOPTION_TIMELINE_YEARS = [2020, 2025, 2030, 2035];
const ADOPTION_TIMELINE = {
  water_heater: {
    unit: '% of electric water heaters controlled',
    US: [1, 4, 16, 40],
    EU: [3, 10, 23, 40],
    LATAM: [1, 2.5, 10, 25],
    SA: [0.5, 2.5, 17, 42],
    IN: [0.5, 1.7, 7, 20],
  },
  hybrid_electrification: {
    unit: '% of addressable steam/gas multifamily',
    US: [0, 0.2, 4, 20],
    EU: [0, 0.2, 1.2, 8],
    LATAM: [0, 0, 0.2, 1],
    SA: [0, 0, 0.2, 0.5],
    IN: [0, 0, 0.2, 0.5],
  },
  heat_pump: {
    unit: '% of homes with heat pump as primary heat',
    US: [18, 21, 32, 45],
    EU: [16, 23, 45, 65],
    LATAM: [0.5, 1, 3, 8],
    SA: [0.5, 1, 3, 7],
    IN: [5, 8, 17, 34],
  },
  commercial_heat: {
    unit: '% of restaurant outdoor heating that is electric',
    US: [0, 0.2, 3, 12],
    EU: [0, 1, 10, 30],
    LATAM: [0, 0.2, 1, 3],
    SA: [0, 0, 0.2, 0.5],
    IN: [0, 0, 0.2, 0.5],
  },
  smart_thermostat: {
    unit: '% of HVAC-equipped homes with smart thermostat',
    US: [35, 59, 78, 90],
    EU: [8, 17, 35, 60],
    LATAM: [1, 3, 8, 16],
    SA: [3, 6, 18, 35],
    IN: [2, 5, 15, 30],
  },
  battery: {
    unit: '% of single-family homes with stationary battery',
    US: [0.4, 0.9, 5, 13],
    EU: [1, 3, 11, 22],
    LATAM: [0.1, 0.3, 1.2, 3],
    SA: [1, 3, 8, 16],
    IN: [0.01, 0.1, 0.5, 1.5],
  },
  leak_thermal: {
    unit: '% of insured properties with leak/asset sensors',
    US: [3, 7, 20, 40],
    EU: [3, 7, 18, 38],
    LATAM: [0.5, 1, 4, 10],
    SA: [1, 2, 8, 18],
    IN: [0.3, 0.5, 2, 5],
  },
  aggregation: {
    unit: '% of peak addressable via VPP / DER aggregation',
    US: [3, 5, 14, 24],
    EU: [5, 8, 15, 24],
    LATAM: [1, 2, 5, 13],
    SA: [0.5, 1, 7, 18],
    IN: [0.2, 0.5, 5, 15],
  },
  ev: {
    unit: '% of light-duty fleet that is electric',
    US: [1, 4, 18, 38],
    EU: [5, 12, 30, 50],
    LATAM: [0.1, 0.5, 4, 15],
    SA: [0.1, 0.3, 3, 12],
    IN: [0.5, 2, 12, 35],
  },
  smart_panel: {
    unit: '% of homes with smart electrical panel',
    US: [0.1, 0.8, 4, 12],
    EU: [0.05, 0.1, 0.5, 1.5],
    LATAM: [0, 0.05, 0.3, 1],
    SA: [0, 0.05, 0.3, 1],
    IN: [0, 0.05, 0.5, 2],
  },
};

const TECHNOLOGIES = [
  {
    id: 'water_heater',
    name: 'Smart Electric Water Heater',
    icon: '♨',
    capex_score: 5,
    capex_usd: '$50–300 (retrofit)',
    lifespan: '10–15y',
    dispatchability: 5,
    flexibility: 5,
    resilience: 1,
    install_friction: 1,
    margin_potential: 4,
    value_stack: ['DR/DSM', 'TOU shift', 'Avoided geyser replacement', 'Hot-water-as-service'],
    portfolio: 'Plentify (HotBot, SA leader)',
    note: 'Highest leverage in markets with electric resistance heating + peak constraints. SA is the canonical case — 33% of residential consumption, 35% of peak.',
    geo_fit: { US: 2, EU: 1, LATAM: 2, SA: 3, IN: 2 },
    primary_driver: ['bills', 'capex'],
    secondary_driver: ['resilience'],
  },
  {
    id: 'hybrid_electrification',
    name: 'Hybrid Electrification (Dual Fuel)',
    icon: '◑',
    capex_score: 4,
    capex_usd: '$2k–8k/unit (subscription available)',
    lifespan: '15–20y',
    dispatchability: 4,
    flexibility: 4,
    resilience: 4,
    install_friction: 2,
    margin_potential: 4,
    value_stack: ['Decarb mandate compliance (LL97)', 'Gas avoidance during mild weather', 'DR/DSM', 'Comfort (AC included)', 'Avoided full retrofit capex'],
    portfolio: 'Kelvin (NYC multifamily — Cozy + Adaptive Electrification)',
    note: 'Keeps the existing gas boiler/furnace for cold-snap reliability but offloads shoulder seasons and cooling to in-unit heat pumps. Smart controls switch fuel based on temperature, price, and emissions. NYSERDA-verified 25.5% heating savings on Kelvin\u2019s Cozy alone; Kelvin\u2019s Hybrid Electrification platform delivers ~80% of full-electrification decarb at ~10% of the capex. Solves the dense-urban multifamily case where full HP retrofit is impractical (no roof space, panel constraints, tenant disruption).',
    geo_fit: { US: 3, EU: 2, LATAM: 1, SA: 1, IN: 1 },
    primary_driver: ['capex', 'comfort'],
    secondary_driver: ['bills', 'identity', 'resilience'],
  },
  {
    id: 'heat_pump',
    name: 'Heat Pump (Full Electric)',
    icon: '◐',
    capex_score: 1,
    capex_usd: '$8k–18k installed',
    lifespan: '15–20y',
    dispatchability: 3,
    flexibility: 3,
    resilience: 2,
    install_friction: 5,
    margin_potential: 3,
    value_stack: ['DR/DSM', 'Efficiency', 'Decarb mandate', 'Comfort premium'],
    portfolio: 'Gradient (window-unit form factor for dense multifamily)',
    note: 'Heat pumps outsold gas furnaces in the US for the 4th year running in 2025 (IEA). IEA projects ~40% of US space heating demand met by heat pumps by 2035. Install capacity is the bottleneck, not technology — window-unit and retrofit-friendly form factors unlock dense urban + multifamily.',
    geo_fit: { US: 3, EU: 3, LATAM: 1, SA: 1, IN: 2 },
    primary_driver: ['comfort', 'identity'],
    secondary_driver: ['bills', 'capex'],
  },
  {
    id: 'commercial_heat',
    name: 'Commercial / Outdoor Electric Heat',
    icon: '☀',
    capex_score: 4,
    capex_usd: '$500–2,000/heater',
    lifespan: '10–15y',
    dispatchability: 2,
    flexibility: 2,
    resilience: 0,
    install_friction: 1,
    margin_potential: 4,
    value_stack: ['Propane displacement', 'Patio season extension', 'Avoided fossil logistics', 'Energy savings (vs propane)', 'Hospitality comfort / UX', 'Pairs with battery for flex + demand-charge avoidance'],
    portfolio: 'Focal (plug-in electric heaters for restaurants & outdoor dining)',
    note: 'Not a grid-services play on its own — a commercial-appliance electrification play. Plug-and-play 120V outlets, no gas line/hardwiring/permits, up to 80% energy savings vs propane. Targets the ~700k US restaurant market and outdoor dining boom. The natural pairing is a battery: heaters at scale will hit 120V circuit limits and trigger commercial demand charges, and propane wins on outages today. A battery solves all three — charge off-peak, discharge during peak, ride out outages — and converts the system from a comfort load into a dispatchable flex asset. Solar + storage analogue: the heater is the load, the battery is the orchestration.',
    geo_fit: { US: 3, EU: 3, LATAM: 2, SA: 1, IN: 1 },
    primary_driver: ['capex', 'bills'],
    secondary_driver: ['comfort', 'identity'],
  },
  {
    id: 'smart_thermostat',
    name: 'Smart Thermostat / HVAC Controls',
    icon: '◷',
    capex_score: 5,
    capex_usd: '$100–400',
    lifespan: '8–12y',
    dispatchability: 4,
    flexibility: 4,
    resilience: 1,
    install_friction: 1,
    margin_potential: 3,
    value_stack: ['DR/DSM', 'Efficiency', 'Comfort'],
    portfolio: 'Flair (vent-level zoning)',
    note: 'Incumbent VPP technology — 61% of deployments still include thermostats. Zoning and per-room control is the next wave.',
    geo_fit: { US: 3, EU: 2, LATAM: 1, SA: 1, IN: 2 },
    primary_driver: ['comfort', 'bills'],
    secondary_driver: ['identity'],
  },
  {
    id: 'battery',
    name: 'Stationary Battery (Home/SMB)',
    icon: '▮',
    capex_score: 1,
    capex_usd: '$10k–25k installed',
    lifespan: '10–15y',
    dispatchability: 5,
    flexibility: 5,
    resilience: 5,
    install_friction: 4,
    margin_potential: 4,
    value_stack: ['Resilience', 'TOU arbitrage', 'DR', 'Wholesale (where allowed)', 'Solar self-consumption'],
    portfolio: '—',
    note: 'Most flexible asset, highest capex. Economics dominated by rate design and stacking rules.',
    geo_fit: { US: 3, EU: 2, LATAM: 2, SA: 3, IN: 2 },
    primary_driver: ['resilience', 'bills'],
    secondary_driver: ['identity'],
  },
  {
    id: 'leak_thermal',
    name: 'Leak / Cold-Chain / Asset Sensors',
    icon: '◈',
    capex_score: 4,
    capex_usd: '$50–500/site',
    lifespan: '7–10y',
    dispatchability: 0,
    flexibility: 0,
    resilience: 2,
    install_friction: 2,
    margin_potential: 5,
    value_stack: ['Insurance discount', 'Avoided loss', 'Compliance', 'Predictive maintenance'],
    portfolio: 'Glacier Grid (commercial refrigeration)',
    note: 'Not a flexibility play — a loss-prevention play. Insurance + spoilage + downtime drive ROI. Different capital market story.',
    geo_fit: { US: 3, EU: 3, LATAM: 2, SA: 2, IN: 2 },
    primary_driver: ['capex', 'resilience'],
    secondary_driver: [],
  },
  {
    id: 'aggregation',
    name: 'Aggregation / VPP Software',
    icon: '◆',
    capex_score: 5,
    capex_usd: 'Software',
    lifespan: 'Recurring',
    dispatchability: null,
    flexibility: 5,
    resilience: 2,
    install_friction: 1,
    margin_potential: 5,
    value_stack: ['Capacity', 'Ancillary services', 'Wholesale', 'Distribution deferral'],
    portfolio: '—',
    note: 'The missing middle. Dispatch rights, customer relationship, and data ownership are the three contested layers. No TS portfolio company in this layer today; the closest adjacency is per-asset orchestration baked into Plentify, Kelvin, and Flair stacks rather than cross-portfolio aggregation.',
    geo_fit: { US: 3, EU: 2, LATAM: 1, SA: 1, IN: 1 },
    primary_driver: ['bills', 'capex'],
    secondary_driver: ['resilience', 'identity'],
  },
  {
    id: 'ev',
    name: 'EV / V2G / Managed Charging',
    icon: '◐',
    capex_score: 3,
    capex_usd: '$0 (incremental)',
    lifespan: '10–15y',
    dispatchability: 4,
    flexibility: 4,
    resilience: 3,
    install_friction: 3,
    margin_potential: 3,
    value_stack: ['Managed charging', 'V2G (emerging)', 'Capacity', 'Energy arbitrage'],
    portfolio: '—',
    note: 'DOE projects 20–90 GW of EV demand capacity additions by 2030. Mobility constraint limits dispatchability vs. stationary.',
    geo_fit: { US: 3, EU: 3, LATAM: 1, SA: 1, IN: 2 },
    primary_driver: ['bills', 'identity'],
    secondary_driver: ['resilience'],
  },
  {
    id: 'smart_panel',
    name: 'Smart Electrical Panel',
    icon: '▤',
    capex_score: 3,
    capex_usd: '$2k–4k',
    lifespan: '20–30y',
    dispatchability: 2,
    flexibility: 3,
    resilience: 3,
    install_friction: 4,
    margin_potential: 3,
    value_stack: ['Avoided service upgrade', 'Load orchestration', 'Resilience', 'Insurance'],
    portfolio: '—',
    note: 'The "operating system" of the home. Unlocks heat pump + EV + battery without panel upgrade — solves a real install bottleneck.',
    geo_fit: { US: 3, EU: 1, LATAM: 1, SA: 1, IN: 1 },
    primary_driver: ['capex', 'resilience'],
    secondary_driver: ['comfort'],
  },
];

const BUSINESS_MODELS = [
  {
    id: 'free',
    name: 'Free / Subsidized',
    desc: 'Utility or aggregator pays for installation in exchange for dispatch rights.',
    solar_analog: 'Rare for solar — closest is community solar subscriptions.',
    works_when: 'Asset has high grid value, customer has low willingness-to-pay, regulator allows rate-basing.',
    capital: 'Utility ratebase or aggregator project finance.',
    examples: 'SA HotBot pilots, US utility thermostat giveaways, NYCHA Gradient deployments.',
    requires: { regulatory: 3, capital_depth: 2, customer_trust: 1 },
  },
  {
    id: 'shared_savings',
    name: 'Shared Savings / Performance',
    desc: 'Customer pays nothing upfront; vendor takes share of savings or DR revenue.',
    solar_analog: 'PPA model (2010–2018 peak).',
    works_when: 'Stackable revenue streams, long contract tenor, creditworthy off-taker.',
    capital: 'Project finance + tax equity (where applicable).',
    examples: 'Gradient Temperature-as-a-Service direction, commercial demand response.',
    requires: { regulatory: 3, capital_depth: 4, customer_trust: 3 },
  },
  {
    id: 'lease',
    name: 'Lease / Subscription',
    desc: 'Fixed monthly fee, vendor owns and maintains asset.',
    solar_analog: 'Solar lease (2012–2019 dominant).',
    works_when: 'Customer wants outcome not asset, residual value is predictable.',
    capital: 'Asset-backed securities + warehouse facilities.',
    examples: 'Sunrun for solar+storage, emerging for heat pumps and HVAC.',
    requires: { regulatory: 2, capital_depth: 5, customer_trust: 4 },
  },
  {
    id: 'loan',
    name: 'Loan / Financed Purchase',
    desc: 'Customer owns asset, finances over 5–25 years.',
    solar_analog: 'Solar loan (2019 onward — overtook leases).',
    works_when: 'Customer values ownership, tax credits flow to homeowner, equipment lasts.',
    capital: 'Consumer lending markets, ABS securitization.',
    examples: 'Most US residential solar today, heat pump financing via IRA.',
    requires: { regulatory: 2, capital_depth: 4, customer_trust: 5 },
  },
  {
    id: 'cash',
    name: 'Cash Purchase',
    desc: 'Customer buys outright.',
    solar_analog: 'Pre-2010 solar; affluent / commercial today.',
    works_when: 'Short payback, premium product, customer trusts brand.',
    capital: 'None required.',
    examples: 'Smart thermostats, smart panels, premium heat pumps in EU.',
    requires: { regulatory: 1, capital_depth: 1, customer_trust: 5 },
  },
];

const CAPITAL_MARKETS = [
  { stage: 'Venture Equity', cost_pct: 'N/A (dilution)', techs: { water_heater: 'mature', hybrid_electrification: 'mature', heat_pump: 'mature', commercial_heat: 'mature', smart_thermostat: 'mature', battery: 'mature', leak_thermal: 'mature', aggregation: 'mature', ev: 'mature', smart_panel: 'mature' } },
  { stage: 'Growth / Expansion', cost_pct: '15–25%', techs: { water_heater: 'emerging', hybrid_electrification: 'emerging', heat_pump: 'mature', commercial_heat: 'emerging', smart_thermostat: 'mature', battery: 'mature', leak_thermal: 'emerging', aggregation: 'mature', ev: 'mature', smart_panel: 'emerging' } },
  { stage: 'Venture Debt', cost_pct: '12–18%', techs: { water_heater: 'emerging', hybrid_electrification: 'emerging', heat_pump: 'emerging', commercial_heat: 'limited', smart_thermostat: 'mature', battery: 'mature', leak_thermal: 'limited', aggregation: 'emerging', ev: 'mature', smart_panel: 'limited' } },
  { stage: 'Project Finance', cost_pct: '8–12%', techs: { water_heater: 'limited', hybrid_electrification: 'emerging', heat_pump: 'emerging', commercial_heat: 'none', smart_thermostat: 'limited', battery: 'mature', leak_thermal: 'none', aggregation: 'emerging', ev: 'emerging', smart_panel: 'none' } },
  { stage: 'ABS / Securitization', cost_pct: '5–8%', techs: { water_heater: 'none', hybrid_electrification: 'limited', heat_pump: 'limited', commercial_heat: 'none', smart_thermostat: 'none', battery: 'emerging', leak_thermal: 'none', aggregation: 'none', ev: 'emerging', smart_panel: 'none' } },
  { stage: 'Investment Grade', cost_pct: '4–6%', techs: { water_heater: 'none', hybrid_electrification: 'none', heat_pump: 'none', commercial_heat: 'none', smart_thermostat: 'none', battery: 'limited', leak_thermal: 'none', aggregation: 'none', ev: 'limited', smart_panel: 'none' } },
];

const WILDCARDS = [
  {
    id: 'gpu',
    title: 'AI / Data Center Capacity Crunch',
    hook: 'AI is the new peaker — and it can\u2019t wait for transmission',
    body: 'IEA Energy and AI: global data center electricity consumption doubles from 415 TWh (2024) to 945 TWh by 2030. US accounts for ~half that growth — 183 TWh now to 426 TWh by 2030, a 133% jump. DOE estimates 50 GW of the 100 GW new peak capacity needed by 2030 is data-center-driven. BNEF puts US data center peak demand at ~106 GW by 2035. Globally ~2,500 GW of projects are stalled in interconnection queues; new transmission takes 7+ years. Brookfield + Bloom committed $5B for 1 GW of behind-the-meter at AI factories; Aligned + PGE deployed 31 MW battery as a grid-upgrade substitute. An advanced server rack will draw the load of 65 households by 2027.',
    implication: 'Two effects on the BTM thesis. (1) Hyperscalers become a new, deep-pocketed off-taker for VPP capacity — Plentify and Kelvin can route flexible capacity to hyperscaler-funded programs alongside utility programs, with better economics than ratebased DR. (2) The locational concentration of AI load (data center clusters in NoVa, Phoenix, central Ohio) is sucking peak capacity out of nearby residential markets — making residential flex worth more in those nodes specifically. Aggregation and battery curves in the timeline reflect this pull.',
    timeframe: 'Already happening. Capacity crunch intensifies through 2028.',
  },
  {
    id: 'compute_flex',
    title: 'Compute Flexibility (Workload Shifting)',
    hook: 'Software is cheaper than batteries',
    body: 'Emerald AI demonstrated 25% peak reduction at a data center via GPU workload orchestration. Software flexibility deploys in weeks, not years, with no permitting. Two parallel BTM stories: (1) classic distributed flex (your portfolio), (2) hyperscale internal flex.',
    implication: 'Compute flex competes with BTM batteries on the margin for grid services, and creates demand for orchestration platforms — an open category in our portfolio, currently filled by per-asset dispatch software inside Plentify, Kelvin, and Flair rather than a cross-asset aggregator.',
    timeframe: 'Now → 2027 for early adopters; 2030 for mainstream.',
  },
  {
    id: 'insurance',
    title: 'Insurance-Funded Resilience',
    hook: 'Insurers as capital partners',
    body: 'Climate disasters have made hardening cheaper than payouts. Insurers are starting to fund batteries, leak detection, smart panels, and HVAC monitoring as loss-prevention investments. Fundamentally different capital structure than energy markets.',
    implication: "Glacier Grid territory. Adds a third revenue axis (energy + grid services + loss prevention) that doesn't depend on rate design or DR programs.",
    timeframe: 'Emerging now in CA, FL, TX, AU. Mainstream by 2030.',
  },
  {
    id: 'ratebase_fight',
    title: 'The Rate-Basing Fight',
    hook: 'Who owns the asset matters more than what it does',
    body: 'Wood Mackenzie: a majority of VPP aggregators oppose utilities rate-basing DERs (the "Distributed Capacity Procurement" model). The fight is whether ratepayers fund DERs (utility-owned, rate-based) or whether private capital + customers do (third-party-owned).',
    implication: 'Existential for third-party DER aggregators. Determines whether the next decade of DER capital flows through utility ratebase or through private project finance — and which side of that line our hardware portfolio companies (Plentify, Kelvin, Gradient, Flair) end up selling into.',
    timeframe: 'Active regulatory fight 2026–2028.',
  },
  {
    id: 'data_moat',
    title: 'The Data + AI Layer',
    hook: 'Hardware is a wedge; data is the moat',
    body: 'Across Plentify, Kelvin, Flair, Glacier Grid: the long-term value is in the optimization layer running on top of the hardware — load shapes, occupancy, weather, prices, prediction. This is where defensibility, gross margin, and platform extension live.',
    implication: 'Treat "device intelligence" as a separate axis from physical hardware. Companies that own both the device and the dispatch layer have the strongest position.',
    timeframe: 'Compounds over time. Today is the cheapest the moat will ever be.',
  },
  {
    id: 'hybrid_equilibrium',
    title: 'Hybrid Heating as Permanent Grid Infrastructure',
    hook: 'Load switching isn\u2019t the bridge \u2014 it\u2019s the destination',
    body: 'Two structural forces lock in hybrid heating as the equilibrium, not a transition step. (1) Customer side: gas furnaces last 15\u201320 years, boilers 15\u201330. Median US owner-occupied home is 42 years old. Even if heat pumps had 100% of new sales — and they only just edged ahead of gas furnaces — the installed gas base turns over on a multi-decade cycle, and the economic case for forcing premature replacement is weak (capex gap $10\u201315k per unit; marginal carbon abated drops sharply beyond ~80% electrification). (2) Grid side: ISO-NE\u2019s 2050 Transmission Study models a winter peak of ~51 GW under full electrification and explicitly assumes "the grid is 100% electrified for most of the year, with only the coldest days using some stored fuels for heating." The system planner\u2019s realistic scenario is hybrid. Building a grid to serve full-electric heating on the coldest 50 hours of the year is uneconomic compared to leaving gas in place for those hours.',
    implication: 'Kelvin\u2019s "keep the boiler, electrify what makes sense" isn\u2019t a compromise framing — it\u2019s the operating model the grid is being built around. The durable value moves to the orchestration layer: when to run gas vs. electric per building, per hour, per emissions intensity, per price signal. The dispatch layer is where defensibility lives. Suggests a longer runway than the "replace everything" decarb thesis implies, and reframes hybrid platforms as critical grid infrastructure rather than transitional tech.',
    timeframe: 'Structural through 2050+.',
  },
  {
    id: 'eu_cooling',
    title: 'EU Summer Cooling Surge',
    hook: 'Buildings designed for cold need to handle 40\u00b0C',
    body: 'Europe is warming twice as fast as the global average. The 2025 heatwaves drove daily power demand up 14% in Spain, 9% in France, 6% in Germany; electricity price spreads exceeded \u20ac400/MWh; Italy hit outages. France\u2019s evening peak ran +25% vs off-season. EU residential AC penetration is still ~20% (vs ~90% US), and just 19% in Germany, 18\u201326% in France — but the IEA projects EU AC units more than doubling to 275M by 2050. Europe AC market is on track from $25B (2024) to $43B (2033). Most northern/western EU housing was designed to retain heat, making it ill-suited for hot summers — meaning cooling demand grows on top of unchanged heating loads, not as a substitute.',
    implication: 'Heat pumps win twice: they meet the REPowerEU heating target (60M units by 2030) AND replace the AC purchase, vs. installing both. The timeline reflects EU heat pump going 23%\u219245%\u219265% by 2035 — a steeper curve than US because cooling demand is pulling forward what was already a decarb-mandate trajectory. Knock-on effects: smart thermostats become essential for managing dual-peaking grids, batteries pair with PV for solar self-consumption during heatwaves (Ember notes EU solar generated record 45 TWh in June 2025), and Kelvin\u2019s hybrid model has a bigger EU TAM than the heating-only frame suggested.',
    timeframe: 'Inflection now. Compounding through 2035.',
  },
];

const ROOFTOP_SOLAR_HISTORY = [
  { era: '2006–2010', dominant: 'Cash', why: 'Federal ITC + early adopters; expensive but premium customers.' },
  { era: '2010–2014', dominant: 'PPA / Lease', why: 'SolarCity et al. unlocked $0-down via tax equity.' },
  { era: '2014–2019', dominant: 'Lease (peak)', why: 'ABS market opened; lease became default.' },
  { era: '2019–present', dominant: 'Loan', why: 'IRA + customer preference for ownership shifted ~70% to loan.' },
  { era: '2025+', dominant: 'TBD', why: 'NEM 3.0 stranding risk + battery attachment changing economics again.' },
];

const GEO_DEFAULTS = {
  US: { regulatory: 60, capital_depth: 85, customer_trust: 65, peak_pressure: 60, resilience_demand: 60, electrification: 55, insurance: 55 },
  EU: { regulatory: 75, capital_depth: 70, customer_trust: 70, peak_pressure: 50, resilience_demand: 40, electrification: 75, insurance: 50 },
  LATAM: { regulatory: 35, capital_depth: 35, customer_trust: 40, peak_pressure: 65, resilience_demand: 80, electrification: 30, insurance: 25 },
  SA: { regulatory: 40, capital_depth: 30, customer_trust: 50, peak_pressure: 90, resilience_demand: 95, electrification: 25, insurance: 20 },
  IN: { regulatory: 45, capital_depth: 50, customer_trust: 45, peak_pressure: 80, resilience_demand: 75, electrification: 40, insurance: 30 },
};

// ============================================================================
// SCORING ENGINE
// ============================================================================

function adjustReasonsForHorizon(baseRow, horizon) {
  const shift = HORIZONS[horizon].shift;
  const out = { ...baseRow };
  Object.keys(out).forEach((k) => {
    if (HORIZON_GROW.includes(k)) {
      out[k] = Math.max(0, Math.min(3, out[k] + shift));
    }
  });
  return out;
}

function scoreTech(tech, geo, horizon, sliders) {
  const geoFit = tech.geo_fit[geo];
  const reasons = REASONS_MATRIX_BASE[geo];
  const horizonShift = HORIZONS[horizon].shift;

  let demandPull = 0;
  ['consumer', 'building', 'utility'].forEach((c) => {
    const adjusted = adjustReasonsForHorizon(reasons[c], horizon);
    tech.primary_driver.forEach((d) => { demandPull += adjusted[d] * 2; });
    tech.secondary_driver.forEach((d) => { demandPull += adjusted[d]; });
  });
  demandPull = Math.min(100, (demandPull / 36) * 100);

  const geoMult = geoFit === 3 ? 1.0 : geoFit === 2 ? 0.78 : 0.55;

  const wPeak = sliders.peak_pressure / 100;
  const wResilience = sliders.resilience_demand / 100;
  const wCapital = sliders.capital_depth / 100;
  const wReg = sliders.regulatory / 100;
  const wTrust = sliders.customer_trust / 100;
  const wElec = sliders.electrification / 100;
  const wInsurance = sliders.insurance / 100;

  const flex = (tech.flexibility / 5) * (wPeak * 0.6 + wReg * 0.4);
  const resil = (tech.resilience / 5) * wResilience;
  const capexFriendly = (tech.capex_score / 5) * (1 - wCapital * 0.4);
  const installEase = ((6 - tech.install_friction) / 5) * (wTrust * 0.4 + 0.3);
  const margin = (tech.margin_potential / 5) * 0.4;
  const elecBonus = tech.id === 'heat_pump' || tech.id === 'ev' ? wElec * 0.4 : 0;
  const insBonus = tech.id === 'leak_thermal' || tech.id === 'smart_panel' ? wInsurance * 0.5 : 0;

  const horizonMult = 1 + horizonShift * 0.08 * ((tech.flexibility + tech.resilience) / 10);

  const components = (flex * 28) + (resil * 18) + (capexFriendly * 16) + (installEase * 12) + (margin * 10) + (elecBonus * 12) + (insBonus * 12);
  const total = components * geoMult * (demandPull / 100 + 0.3) * horizonMult;

  return {
    total: Math.max(0, Math.min(100, Math.round(total))),
    breakdown: {
      demandPull: Math.round(demandPull),
      geoFit,
    },
  };
}

function scoreBusinessModel(model, sliders) {
  const reqReg = model.requires.regulatory;
  const reqCap = model.requires.capital_depth;
  const reqTrust = model.requires.customer_trust;
  const regScore = sliders.regulatory / 20;
  const capScore = sliders.capital_depth / 20;
  const trustScore = sliders.customer_trust / 20;

  const regGap = Math.max(0, reqReg - regScore);
  const capGap = Math.max(0, reqCap - capScore);
  const trustGap = Math.max(0, reqTrust - trustScore);

  const score = Math.max(0, Math.min(100, Math.round(100 - (regGap + capGap + trustGap) * 18)));
  const bottleneck = regGap > capGap && regGap > trustGap ? 'Regulatory openness' :
                     capGap > trustGap ? 'Capital depth' :
                     trustGap > 0 ? 'Customer trust' : null;
  return { score, bottleneck };
}

// Cost vs received value — used by the adoption map.
// Cost dimension: capex difficulty + install friction (supply-side resistance).
// Value dimension: customer-pull from reasons matrix + slider-weighted flexibility / resilience.
// Kept orthogonal from each other so techs scatter rather than collapse to a diagonal.
function computeCostValue(tech, geo, horizon, sliders) {
  // Cost — higher capex_score means cheaper, install_friction 1 = easy / 5 = hard
  const capexPart = (5 - tech.capex_score) * 12;        // 0-48
  const installPart = (tech.install_friction - 1) * 13; // 0-52
  const cost = Math.max(0, Math.min(100, capexPart + installPart));

  // Value — averaged across customer types for current geo + horizon,
  // weighted to this tech's primary (2x) and secondary (1x) drivers
  const baseRow = REASONS_MATRIX_BASE[geo];
  const customers = ['consumer', 'building', 'utility'];
  let pull = 0;
  let weight = 0;
  for (const customer of customers) {
    const adjusted = adjustReasonsForHorizon(baseRow[customer], horizon);
    for (const reason of (tech.primary_driver || [])) {
      pull += (adjusted[reason] || 0) * 2;
      weight += 2;
    }
    for (const reason of (tech.secondary_driver || [])) {
      pull += (adjusted[reason] || 0) * 1;
      weight += 1;
    }
  }
  const demandBase = weight > 0 ? (pull / weight) * 22 : 0; // 0-66 normalized

  // Slider-driven additions — peak pressure rewards flexible techs, resilience
  // demand rewards resilience-heavy techs, customer trust eases adoption pull
  const flexBoost = (tech.flexibility || 0) * (sliders.peak_pressure / 100) * 4;       // 0-20
  const resBoost = (tech.resilience || 0) * (sliders.resilience_demand / 100) * 3;     // 0-15
  const trustBoost = (sliders.customer_trust / 100) * 5;                                // 0-5

  // Geo fit dampens value where the tech doesn't suit the region
  const geoMult = { 1: 0.55, 2: 0.85, 3: 1.0 }[tech.geo_fit[geo]] || 0.5;
  const value = Math.max(0, Math.min(100, (demandBase + flexBoost + resBoost + trustBoost) * geoMult));

  return { cost: Math.round(cost), value: Math.round(value) };
}

// ============================================================================
// HELPERS
// ============================================================================

const intensityClass = (v) => ({ 0: 'cell-0', 1: 'cell-1', 2: 'cell-2', 3: 'cell-3' }[v] || 'cell-0');
const intensityLabel = (v) => ({ 0: '—', 1: 'Emerging', 2: 'Material', 3: 'Primary' }[v] || '—');
const maturityClass = (m) => `maturity-${m}`;
const maturityLabel = (m) => ({ none: '—', limited: 'Limited', emerging: 'Emerging', mature: 'Mature' }[m] || '—');

// Classify a tech's cost-value position into one of four adoption regimes.
// Quadrant thresholds at 50/50.
function adoptionQuadrant(cost, value) {
  if (value >= 50 && cost < 50) return { id: 'pull', label: 'Mainstream Pull', desc: 'Cheap + valued. Adopts on its own. Solve channel and supply.' };
  if (value >= 50 && cost >= 50) return { id: 'mandate', label: 'Mandate / Premium', desc: 'Valued but expensive. Needs mandates, subsidies, or premium segments.' };
  if (value < 50 && cost < 50) return { id: 'addon', label: 'Add-on / Impulse', desc: 'Cheap but optional. Bundles or attach-on with adjacent purchase.' };
  return { id: 'stranded', label: 'Stranded (Won\u2019t Move)', desc: 'Expensive + unloved. Won\u2019t happen without subsidy reset or value-stack change.' };
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function TopBar({ geo, setGeo, horizon, setHorizon, sliders, setSliders, resetSliders }) {
  const [openSlider, setOpenSlider] = useState(null);
  const sliderGroups = [
    {
      label: 'Market conditions',
      items: [
        { key: 'peak_pressure', name: 'Peak / capacity pressure', help: 'Higher = more grid stress, higher value for flexibility' },
        { key: 'resilience_demand', name: 'Resilience demand', help: 'Outage frequency, climate exposure, blackouts' },
        { key: 'electrification', name: 'Electrification pace', help: 'Heat pump and EV adoption rate' },
      ],
    },
    {
      label: 'Capital & trust',
      items: [
        { key: 'capital_depth', name: 'Capital availability', help: 'Project finance + ABS market depth' },
        { key: 'customer_trust', name: 'Customer trust / acquisition', help: 'Cost and ease of reaching end customers' },
        { key: 'regulatory', name: 'Regulatory openness', help: 'How welcoming the framework is to DERs and aggregators' },
      ],
    },
    {
      label: 'Adjacent forces',
      items: [
        { key: 'insurance', name: 'Insurance as buyer', help: 'Insurers paying for hardening / loss prevention' },
      ],
    },
  ];

  return (
    <div className="topbar">
      <div className="topbar-row">
        <div className="topbar-group">
          <span className="topbar-label">Geography</span>
          <div className="seg">
            {Object.entries(GEOGRAPHIES).map(([k, v]) => (
              <button
                key={k}
                className={`seg-btn ${geo === k ? 'seg-btn-active' : ''}`}
                onClick={() => setGeo(k)}
              >
                <span className="seg-flag">{v.flag}</span>
                <span>{k}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="topbar-group">
          <span className="topbar-label">Horizon</span>
          <div className="seg">
            {Object.entries(HORIZONS).map(([k, v]) => (
              <button
                key={k}
                className={`seg-btn ${horizon === k ? 'seg-btn-active' : ''}`}
                onClick={() => setHorizon(k)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <button className="reset-btn" onClick={resetSliders} title="Reset sliders to geography defaults">
          ↺ Reset to {geo} defaults
        </button>
      </div>

      <div className="sliders-section">
        {sliderGroups.map((group, gi) => (
          <div key={gi} className="slider-group-block">
            <div className="slider-group-label">{group.label}</div>
            <div className="slider-group-items">
              {group.items.map((s) => {
                const ref = SLIDER_REFERENCES[s.key];
                const isOpen = openSlider === s.key;
                return (
                  <div key={s.key} className={`slider-item ${isOpen ? 'slider-item-open' : ''}`}>
                    <div className="slider-item-head">
                      <span className="slider-item-name">{s.name}</span>
                      {ref && (
                        <button
                          type="button"
                          className={`slider-info-btn ${isOpen ? 'slider-info-btn-open' : ''}`}
                          onClick={() => setOpenSlider(isOpen ? null : s.key)}
                          aria-label={(isOpen ? 'Hide' : 'Show') + ' details for ' + s.name}
                          title={isOpen ? 'Hide details' : 'Show description & references'}
                        >
                          {isOpen ? '\u00d7' : '\u24d8'}
                        </button>
                      )}
                      <span className="slider-item-val">{sliders[s.key]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliders[s.key]}
                      onChange={(e) => setSliders({ ...sliders, [s.key]: +e.target.value })}
                    />
                    {isOpen && ref && (
                      <div className="slider-details">
                        <div className="slider-details-row">
                          <span className="slider-details-label">What it measures</span>
                          <span className="slider-details-text">{ref.measures}</span>
                        </div>
                        <div className="slider-details-row">
                          <span className="slider-details-label">Current signal</span>
                          <span className="slider-details-text">{ref.current}</span>
                        </div>
                        <div className="slider-details-row">
                          <span className="slider-details-label">Forecast</span>
                          <span className="slider-details-text">{ref.forecast}</span>
                        </div>
                        <div className="slider-details-row">
                          <span className="slider-details-label">Sources</span>
                          <span className="slider-details-sources">
                            {ref.sources.map((src, i) => (
                              <a key={i} href={src.url} target="_blank" rel="noopener noreferrer" className="slider-source-link">
                                {src.label}
                              </a>
                            ))}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReasonsMatrix({ geo, horizon }) {
  const customers = ['consumer', 'building', 'utility'];
  const reasons = Object.keys(REASON_LABELS);
  const data = customers.reduce((acc, c) => {
    acc[c] = adjustReasonsForHorizon(REASONS_MATRIX_BASE[geo][c], horizon);
    return acc;
  }, {});

  return (
    <div className="matrix-wrap">
      <table className="matrix">
        <thead>
          <tr>
            <th></th>
            {reasons.map((r) => (
              <th key={r}>
                <div className="th-label">{REASON_LABELS[r].name}</div>
                <div className="th-sub">{REASON_LABELS[r].desc}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c}>
              <td className="row-head">
                <div className="row-head-label">
                  {c === 'consumer' && 'End Consumer'}
                  {c === 'building' && 'Building Owner / Operator'}
                  {c === 'utility' && 'Utility / Grid Operator'}
                </div>
                <div className="row-head-sub">
                  {c === 'consumer' && 'Homeowner, renter, small biz'}
                  {c === 'building' && 'Multifamily, commercial RE, public housing'}
                  {c === 'utility' && 'Direct procurement or program design'}
                </div>
              </td>
              {reasons.map((r) => {
                const v = data[c][r];
                return (
                  <td key={r} className={`cell ${intensityClass(v)}`}>
                    <div className="cell-bar">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className={`bar-pip ${i < v ? 'bar-pip-on' : ''}`} />
                      ))}
                    </div>
                    <div className="cell-label">{intensityLabel(v)}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TechRanking({ geo, horizon, sliders }) {
  const ranked = useMemo(() => {
    return TECHNOLOGIES.map((t) => ({
      tech: t,
      ...scoreTech(t, geo, horizon, sliders),
    })).sort((a, b) => b.total - a.total);
  }, [geo, horizon, sliders]);

  const topScore = ranked[0]?.total || 100;

  return (
    <div className="ranking-wrap">
      <div className="ranking-header">
        <div className="ranking-title">Live ranking</div>
        <div className="ranking-sub">Recomputes from sliders, geography, and horizon</div>
      </div>
      {ranked.map((r, i) => {
        const widthPct = (r.total / topScore) * 100;
        return (
          <div key={r.tech.id} className="rank-row">
            <div className="rank-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="rank-icon">{r.tech.icon}</div>
            <div className="rank-info">
              <div className="rank-name">{r.tech.name}</div>
              <div className="rank-meta">
                <span>Geo fit ★{r.breakdown.geoFit}/3</span>
                <span>·</span>
                <span>Demand pull {r.breakdown.demandPull}</span>
                {r.tech.portfolio !== '—' && (
                  <>
                    <span>·</span>
                    <span className="rank-portfolio">{r.tech.portfolio.split(' (')[0]}</span>
                  </>
                )}
              </div>
            </div>
            <div className="rank-bar-wrap">
              <div className="rank-bar" style={{ width: `${widthPct}%` }} />
            </div>
            <div className="rank-score">{r.total}</div>
          </div>
        );
      })}
    </div>
  );
}

function TechGrid({ geo, horizon, sliders }) {
  const scored = useMemo(() => {
    return TECHNOLOGIES.map((t) => ({
      tech: t,
      ...scoreTech(t, geo, horizon, sliders),
    })).sort((a, b) => b.total - a.total);
  }, [geo, horizon, sliders]);

  return (
    <div className="tech-grid">
      {scored.map(({ tech: t, total }, idx) => {
        const fit = t.geo_fit[geo];
        return (
          <div key={t.id} className={`tech-card fit-${fit}`}>
            <div className="tech-rank">{String(idx + 1).padStart(2, '0')}</div>
            <div className="tech-head">
              <div className="tech-icon">{t.icon}</div>
              <div className="tech-name">{t.name}</div>
              <div className={`fit-badge fit-badge-${fit}`}>
                {fit === 3 ? 'Strong fit' : fit === 2 ? 'Moderate fit' : 'Weak fit'}
              </div>
            </div>
            <div className="tech-stats">
              <div className="stat">
                <span className="stat-label">Capex</span>
                <span className="stat-val">{t.capex_usd}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Lifespan</span>
                <span className="stat-val">{t.lifespan}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Score</span>
                <span className="stat-val stat-score">{total}</span>
              </div>
            </div>
            <div className="tech-stack">
              <div className="stack-label">Value Stack</div>
              <div className="stack-pills">
                {t.value_stack.map((v) => (
                  <span key={v} className="pill">{v}</span>
                ))}
              </div>
            </div>
            {MARKET_SCALE[t.id] && (
              <div className="tech-scale">
                <div className="scale-head">
                  <span className="scale-label">Market scale · {geo}</span>
                  <span className="scale-headline">{MARKET_SCALE[t.id].headline}</span>
                </div>
                <div className="scale-body">{MARKET_SCALE[t.id].geos[geo]}</div>
              </div>
            )}
            <div className="tech-note">{t.note}</div>
            {t.portfolio !== '—' && (
              <div className="tech-portfolio" title={t.portfolio}>
                <span className="portfolio-dot" />
                <span className="portfolio-text">{t.portfolio}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AdoptionMap({ geo, horizon, sliders }) {
  const points = useMemo(() => {
    return TECHNOLOGIES.map((t) => {
      const { cost, value } = computeCostValue(t, geo, horizon, sliders);
      const q = adoptionQuadrant(cost, value);
      return { tech: t, cost, value, quadrant: q };
    });
  }, [geo, horizon, sliders]);

  // SVG viewBox — keep aspect generous for labels
  const W = 760;
  const H = 480;
  const PAD_L = 70;
  const PAD_R = 30;
  const PAD_T = 50;
  const PAD_B = 60;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;
  const x = (cost) => PAD_L + (cost / 100) * plotW;
  const y = (value) => PAD_T + (1 - value / 100) * plotH;

  // Short labels for the chart so they don't collide
  const shortName = (n) => n
    .replace('Smart Electric Water Heater', 'Water Heater')
    .replace('Hybrid Electrification (Dual Fuel)', 'Hybrid Elec')
    .replace('Heat Pump (Full Electric)', 'Heat Pump')
    .replace('Commercial / Outdoor Electric Heat', 'Commercial Heat')
    .replace('Smart Thermostat / HVAC Controls', 'Thermostat')
    .replace('Stationary Battery (Home/SMB)', 'Battery')
    .replace('Leak / Cold-Chain / Asset Sensors', 'Sensors')
    .replace('Aggregation / VPP Software', 'Aggregation')
    .replace('EV / V2G / Managed Charging', 'EV / V2G')
    .replace('Smart Electrical Panel', 'Smart Panel');

  // Color by quadrant — brand-aligned
  const quadrantColor = {
    pull: 'var(--accent)',       // Blue — strong adoption pull
    mandate: 'var(--gold)',      // Green — mandate/premium territory
    addon: 'var(--ink-3)',       // Gray — minor add-on
    stranded: 'var(--warm)',     // Red — won't move
  };

  // Label offset jitter to reduce collisions (deterministic by tech id hash)
  const labelOffset = (id, value) => {
    const h = id.charCodeAt(0) + id.charCodeAt(id.length - 1);
    const dx = (h % 3) * 6 + 10;
    const dy = value > 75 ? 18 : -8;
    return { dx, dy };
  };

  return (
    <div className="adoption-wrap">
      <div className="adoption-header">
        <div className="adoption-title">Cost-vs-value position · {geo}</div>
        <div className="adoption-sub">Where each technology sits in current conditions</div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="adoption-svg" preserveAspectRatio="xMidYMid meet">
        {/* Plot area background */}
        <rect x={PAD_L} y={PAD_T} width={plotW} height={plotH} fill="var(--paper-2)" />

        {/* Quadrant dividers */}
        <line x1={x(50)} y1={PAD_T} x2={x(50)} y2={PAD_T + plotH} stroke="var(--rule)" strokeWidth="1" />
        <line x1={PAD_L} y1={y(50)} x2={PAD_L + plotW} y2={y(50)} stroke="var(--rule)" strokeWidth="1" />

        {/* Quadrant labels */}
        <text x={x(25)} y={PAD_T + 22} className="quad-label" textAnchor="middle">MAINSTREAM PULL</text>
        <text x={x(25)} y={PAD_T + 38} className="quad-sub" textAnchor="middle">cheap + valued · adopts on its own</text>

        <text x={x(75)} y={PAD_T + 22} className="quad-label" textAnchor="middle">MANDATE / PREMIUM</text>
        <text x={x(75)} y={PAD_T + 38} className="quad-sub" textAnchor="middle">valued but expensive · needs push</text>

        <text x={x(25)} y={PAD_T + plotH - 28} className="quad-label" textAnchor="middle">ADD-ON / IMPULSE</text>
        <text x={x(25)} y={PAD_T + plotH - 12} className="quad-sub" textAnchor="middle">cheap but optional · bundles</text>

        <text x={x(75)} y={PAD_T + plotH - 28} className="quad-label" textAnchor="middle">STRANDED</text>
        <text x={x(75)} y={PAD_T + plotH - 12} className="quad-sub" textAnchor="middle">expensive + unloved · won&rsquo;t move</text>

        {/* Axes */}
        <line x1={PAD_L} y1={PAD_T + plotH} x2={PAD_L + plotW} y2={PAD_T + plotH} stroke="var(--ink)" strokeWidth="1" />
        <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={PAD_T + plotH} stroke="var(--ink)" strokeWidth="1" />

        {/* Axis labels */}
        <text x={PAD_L + plotW / 2} y={H - 20} className="axis-label" textAnchor="middle">RELATIVE COST · capex + install friction →</text>
        <text x={20} y={PAD_T + plotH / 2} className="axis-label" textAnchor="middle" transform={`rotate(-90 20 ${PAD_T + plotH / 2})`}>RECEIVED VALUE · demand pull + flex/resilience →</text>

        {/* Plot points */}
        {points.map(({ tech, cost, value, quadrant }) => {
          const cx = x(cost);
          const cy = y(value);
          const { dx, dy } = labelOffset(tech.id, value);
          const color = quadrantColor[quadrant.id];
          return (
            <g key={tech.id}>
              <circle cx={cx} cy={cy} r="6" fill={color} stroke="var(--paper)" strokeWidth="2" />
              <text x={cx + dx} y={cy + dy} className="point-label" fill="var(--ink)">
                {shortName(tech.name)}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="adoption-legend">
        {['pull', 'mandate', 'addon', 'stranded'].map((qid) => {
          const inQ = points.filter((p) => p.quadrant.id === qid);
          const q = adoptionQuadrant(qid === 'pull' || qid === 'addon' ? 25 : 75, qid === 'pull' || qid === 'mandate' ? 75 : 25);
          return (
            <div key={qid} className="legend-block">
              <div className="legend-head">
                <span className="legend-dot" style={{ background: quadrantColor[qid] }} />
                <span className="legend-name">{q.label}</span>
              </div>
              <div className="legend-techs">{inQ.length ? inQ.map((p) => shortName(p.tech.name)).join(' · ') : '—'}</div>
              <div className="legend-desc">{q.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AdoptionTimeline({ geo, horizon, sliders }) {
  // Color each line by where the tech currently sits in cost-value space
  // — connects this view to the Adoption Map directly.
  const techData = useMemo(() => {
    return TECHNOLOGIES.map((t) => {
      const series = ADOPTION_TIMELINE[t.id];
      if (!series || !series[geo]) return null;
      const { cost, value } = computeCostValue(t, geo, horizon, sliders);
      return { tech: t, points: series[geo], unit: series.unit, quadrant: adoptionQuadrant(cost, value).id };
    }).filter(Boolean);
  }, [geo, horizon, sliders]);

  const W = 800;
  const H = 460;
  const PAD_L = 60;
  const PAD_R = 30;
  const PAD_T = 30;
  const PAD_B = 56;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;
  const years = ADOPTION_TIMELINE_YEARS;
  const yearMin = years[0];
  const yearMax = years[years.length - 1];
  const xPos = (yr) => PAD_L + ((yr - yearMin) / (yearMax - yearMin)) * plotW;
  const yPos = (pct) => PAD_T + (1 - Math.min(pct, 100) / 100) * plotH;

  const quadrantColor = {
    pull: 'var(--accent)',
    mandate: 'var(--gold)',
    addon: 'var(--ink-3)',
    stranded: 'var(--warm)',
  };

  // Short labels (same mapping as the cost-value map)
  const shortName = (n) => n
    .replace('Smart Electric Water Heater', 'Water Heater')
    .replace('Hybrid Electrification (Dual Fuel)', 'Hybrid Elec')
    .replace('Heat Pump (Full Electric)', 'Heat Pump')
    .replace('Commercial / Outdoor Electric Heat', 'Commercial Heat')
    .replace('Smart Thermostat / HVAC Controls', 'Thermostat')
    .replace('Stationary Battery (Home/SMB)', 'Battery')
    .replace('Leak / Cold-Chain / Asset Sensors', 'Sensors')
    .replace('Aggregation / VPP Software', 'Aggregation')
    .replace('EV / V2G / Managed Charging', 'EV / V2G')
    .replace('Smart Electrical Panel', 'Smart Panel');

  // Build path string for each tech
  const pathFor = (points) => points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xPos(years[i])} ${yPos(p)}`).join(' ');

  // For label positioning at the right edge — stagger to reduce collision
  const sortedByEnd = [...techData].sort((a, b) => b.points[b.points.length - 1] - a.points[a.points.length - 1]);

  // Y-axis tick values
  const yTicks = [0, 25, 50, 75, 100];

  return (
    <div className="timeline-wrap">
      <div className="timeline-header">
        <div className="timeline-title">Adoption trajectories · {geo}</div>
        <div className="timeline-sub">% penetration of addressable base · line color matches Adoption Map quadrant</div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="timeline-svg" preserveAspectRatio="xMidYMid meet">
        {/* Plot area background */}
        <rect x={PAD_L} y={PAD_T} width={plotW} height={plotH} fill="var(--paper-2)" />

        {/* Y-axis gridlines */}
        {yTicks.map((t) => (
          <g key={t}>
            <line x1={PAD_L} y1={yPos(t)} x2={PAD_L + plotW} y2={yPos(t)} stroke="var(--rule)" strokeWidth="1" strokeDasharray={t === 0 ? undefined : '2 3'} />
            <text x={PAD_L - 10} y={yPos(t) + 4} className="timeline-axis-tick" textAnchor="end">{t}%</text>
          </g>
        ))}

        {/* X-axis */}
        <line x1={PAD_L} y1={PAD_T + plotH} x2={PAD_L + plotW} y2={PAD_T + plotH} stroke="var(--ink)" strokeWidth="1" />
        {years.map((yr) => (
          <g key={yr}>
            <line x1={xPos(yr)} y1={PAD_T + plotH} x2={xPos(yr)} y2={PAD_T + plotH + 4} stroke="var(--ink)" strokeWidth="1" />
            <text x={xPos(yr)} y={PAD_T + plotH + 18} className="timeline-axis-tick" textAnchor="middle">{yr}</text>
          </g>
        ))}

        {/* Axis labels */}
        <text x={20} y={PAD_T + plotH / 2} className="timeline-axis-label" textAnchor="middle" transform={`rotate(-90 20 ${PAD_T + plotH / 2})`}>PENETRATION %</text>

        {/* Lines per tech */}
        {techData.map(({ tech, points, quadrant }) => {
          const isPortfolio = tech.portfolio && tech.portfolio !== '\u2014';
          const color = quadrantColor[quadrant];
          return (
            <g key={tech.id}>
              <path
                d={pathFor(points)}
                fill="none"
                stroke={color}
                strokeWidth={isPortfolio ? 2.5 : 1.5}
                strokeDasharray={isPortfolio ? undefined : '4 3'}
                opacity={0.9}
              />
              {points.map((p, i) => (
                <circle key={i} cx={xPos(years[i])} cy={yPos(p)} r="3" fill={color} stroke="var(--paper)" strokeWidth="1.5" />
              ))}
            </g>
          );
        })}
      </svg>

      {/* Legend with endpoint values, sorted by 2035 endpoint descending */}
      <div className="timeline-legend">
        {sortedByEnd.map(({ tech, points, quadrant }) => {
          const isPortfolio = tech.portfolio && tech.portfolio !== '\u2014';
          const color = quadrantColor[quadrant];
          const start = points[0];
          const end = points[points.length - 1];
          const growth = start > 0 ? ((end / start - 1) * 100) : null;
          return (
            <div key={tech.id} className="tl-legend-row">
              <span className="tl-legend-swatch" style={{ background: color, borderStyle: isPortfolio ? 'solid' : 'dashed', borderColor: color }} />
              <span className="tl-legend-name">{shortName(tech.name)}{isPortfolio ? ' ·' : ''}</span>
              <span className="tl-legend-end">{end}%</span>
              <span className="tl-legend-delta">{start > 0 && growth !== null ? `${growth >= 1000 ? '\u003e10\u00d7' : growth >= 100 ? Math.round(growth / 100) + '\u00d7' : '+' + Math.round(growth) + '%'} from ${start}%` : 'from \u2014'}</span>
            </div>
          );
        })}
      </div>

      <div className="timeline-footnote">
        Trajectories reflect IEA WEO 2025 (heat pumps, EVs), DOE Liftoff (VPP), EHPA / REPowerEU targets, BNEF storage outlook, and the MARKET_SCALE prose above. Embeds two macro forces: AI/datacenter capacity crunch pulls aggregation and battery curves higher in US/EU; EU summer cooling surge accelerates EU heat pump (heating + cooling), thermostat, and battery curves.
      </div>
    </div>
  );
}

function BusinessModels({ sliders }) {
  const scored = useMemo(() => {
    return BUSINESS_MODELS.map((m) => ({ model: m, ...scoreBusinessModel(m, sliders) }))
      .sort((a, b) => b.score - a.score);
  }, [sliders]);

  return (
    <div>
      <div className="solar-history">
        <div className="solar-history-title">Rooftop Solar Business Model Evolution</div>
        <div className="solar-timeline">
          {ROOFTOP_SOLAR_HISTORY.map((h, i) => (
            <div key={i} className="solar-era">
              <div className="solar-era-year">{h.era}</div>
              <div className="solar-era-model">{h.dominant}</div>
              <div className="solar-era-why">{h.why}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bm-grid">
        {scored.map(({ model: m, score, bottleneck }) => (
          <div key={m.id} className="bm-card">
            <div className="bm-head">
              <div className="bm-name">{m.name}</div>
              <div className={`bm-score ${score >= 75 ? 'score-strong' : score >= 50 ? 'score-mid' : 'score-weak'}`}>
                {score}
              </div>
            </div>
            <div className="bm-desc">{m.desc}</div>
            <div className="bm-rows">
              <div className="bm-row">
                <span className="bm-row-label">Solar Analog</span>
                <span className="bm-row-val">{m.solar_analog}</span>
              </div>
              <div className="bm-row">
                <span className="bm-row-label">Works When</span>
                <span className="bm-row-val">{m.works_when}</span>
              </div>
              <div className="bm-row">
                <span className="bm-row-label">Capital</span>
                <span className="bm-row-val">{m.capital}</span>
              </div>
              <div className="bm-row">
                <span className="bm-row-label">Examples</span>
                <span className="bm-row-val">{m.examples}</span>
              </div>
            </div>
            {bottleneck && (
              <div className="bm-bottleneck">
                <span className="bm-bot-label">Bottleneck</span>
                <span>{bottleneck}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CapitalMarkets() {
  return (
    <div className="cm-wrap">
      <div className="cm-legend">
        <span className="legend-item"><span className="dot maturity-mature" /> Mature</span>
        <span className="legend-item"><span className="dot maturity-emerging" /> Emerging</span>
        <span className="legend-item"><span className="dot maturity-limited" /> Limited</span>
        <span className="legend-item"><span className="dot maturity-none" /> Not yet</span>
      </div>
      <table className="cm-table">
        <thead>
          <tr>
            <th>Capital Stage</th>
            <th>Cost</th>
            {TECHNOLOGIES.map((t) => (
              <th key={t.id} className="cm-tech-head" title={t.name}>
                <span className="cm-tech-icon">{t.icon}</span>
                <span className="cm-tech-short">
                  {t.name.split(' ').slice(0, 2).join(' ')}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CAPITAL_MARKETS.map((row) => (
            <tr key={row.stage}>
              <td className="cm-stage">{row.stage}</td>
              <td className="cm-cost">{row.cost_pct}</td>
              {TECHNOLOGIES.map((t) => {
                const m = row.techs[t.id] || 'none';
                return (
                  <td key={t.id} className={`cm-cell ${maturityClass(m)}`}>
                    <span className="cm-cell-label">{maturityLabel(m)}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cm-note">
        Solar's journey: venture (1990s) → growth (2005) → project finance (2010) → ABS (2013) → IG (2018+).
        Most BTM tech is one to three stages behind. Batteries are leading; long-tail flex is still funded by venture and growth equity.
      </div>
    </div>
  );
}

function Wildcards() {
  return (
    <div className="wild-grid">
      {WILDCARDS.map((w) => (
        <div key={w.id} className="wild-card">
          <div className="wild-hook">{w.hook}</div>
          <div className="wild-title">{w.title}</div>
          <div className="wild-body">{w.body}</div>
          <div className="wild-implication">
            <div className="wild-imp-label">Implication</div>
            <div>{w.implication}</div>
          </div>
          <div className="wild-time">{w.timeframe}</div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// MAIN
// ============================================================================

export default function App() {
  const [geo, setGeo] = useState('US');
  const [horizon, setHorizon] = useState('mid');
  const [sliders, setSliders] = useState(GEO_DEFAULTS.US);

  const resetSliders = () => setSliders(GEO_DEFAULTS[geo]);

  React.useEffect(() => {
    setSliders(GEO_DEFAULTS[geo]);
  }, [geo]);

  const geoLabel = GEOGRAPHIES[geo].label;
  const horizonLabel = HORIZONS[horizon].label;

  return (
    <div className="root">
      <style>{CSS}</style>

      <header className="hdr">
        <div className="hdr-eyebrow">Th·rd Sphere — A research instrument</div>
        <h1 className="hdr-title">
          Behind <span className="hdr-italic">the</span> Meter
        </h1>
        <div className="hdr-sub">
          A comparison of strategies, customers, technologies, business models, and capital markets
          for distributed energy resources — across five geographies and three time horizons.
          Sliders apply your read of conditions; switching geography resets to that region's defaults.
        </div>
      </header>

      <TopBar
        geo={geo}
        setGeo={setGeo}
        horizon={horizon}
        setHorizon={setHorizon}
        sliders={sliders}
        setSliders={setSliders}
        resetSliders={resetSliders}
      />

      <div className="context-strip">
        <div className="context-item">
          <div className="context-label">Viewing</div>
          <div className="context-val">{geoLabel}</div>
        </div>
        <div className="context-item">
          <div className="context-label">Horizon</div>
          <div className="context-val">{horizonLabel}</div>
        </div>
        <div className="context-item">
          <div className="context-label">US VPP capacity, 2025</div>
          <div className="context-val">37.5 GW <span className="context-trend">↑13.7% YoY</span></div>
        </div>
        <div className="context-item">
          <div className="context-label">DOE 2030 target</div>
          <div className="context-val">80–160 GW</div>
        </div>
      </div>

      <section className="section">
        <div className="section-marker">I</div>
        <h2 className="section-title">Why people buy</h2>
        <p className="section-lede">
          Customer types and the reasons that move them. Resilience and identity grow over time;
          comfort, capex, and bills are durable. Switching the horizon dial shifts those growth
          factors up or down.
        </p>
        <ReasonsMatrix geo={geo} horizon={horizon} />
      </section>

      <section className="section">
        <div className="section-marker">II</div>
        <h2 className="section-title">Live technology ranking</h2>
        <p className="section-lede">
          Drag the sliders and watch the order shift. Score combines geographic fit, demand pull
          from the customer reasons matrix, and technology characteristics weighted by current
          conditions. This is the most opinionated part of the tool.
        </p>
        <TechRanking geo={geo} horizon={horizon} sliders={sliders} />
      </section>

      <section className="section">
        <div className="section-marker">III</div>
        <h2 className="section-title">Technology comparison</h2>
        <p className="section-lede">
          Same eight technology classes, expanded view. Card order matches the ranking. Geographic
          fit is fixed per region; the score reflects current slider conditions.
        </p>
        <TechGrid geo={geo} horizon={horizon} sliders={sliders} />
      </section>

      <section className="section">
        <div className="section-marker">IV</div>
        <h2 className="section-title">Adoption map · cost vs received value</h2>
        <p className="section-lede">
          Adoption ultimately falls along cost vs value. Each technology is placed by relative cost
          (capex + install friction on the supply side) and received value (customer demand pull
          from the reasons matrix, weighted by current slider conditions for flexibility, resilience,
          and trust). The quadrant a technology lands in implies the adoption shape it will take —
          mainstream pull, mandate/premium push, optional add-on, or stranded without a value-stack
          reset.
        </p>
        <AdoptionMap geo={geo} horizon={horizon} sliders={sliders} />
      </section>

      <section className="section">
        <div className="section-marker">V</div>
        <h2 className="section-title">Adoption over time</h2>
        <p className="section-lede">
          From snapshot to trajectory. Penetration of addressable base by year, by geography. Line
          color matches the cost-value quadrant each tech currently occupies; solid lines are
          portfolio-represented technologies, dashed are adjacent categories. Trajectories embed
          two macro forces — the AI/datacenter capacity crunch (pulling aggregation and battery
          curves higher in markets with active wholesale plus hyperscaler co-funding) and the EU
          summer cooling surge (accelerating EU heat pump, thermostat, and battery curves as
          buildings designed for cold need to handle 40°C summers).
        </p>
        <AdoptionTimeline geo={geo} horizon={horizon} sliders={sliders} />
      </section>

      <section className="section">
        <div className="section-marker">VI</div>
        <h2 className="section-title">Business models</h2>
        <p className="section-lede">
          Solar walked from cash through PPA, lease, and loan over fifteen years. Each shift was
          gated by a capital market opening and a customer learning curve. The score on each
          model below reflects how well current slider conditions support it. Bottleneck flag
          shows what would unlock it.
        </p>
        <BusinessModels sliders={sliders} />
      </section>

      <section className="section">
        <div className="section-marker">VII</div>
        <h2 className="section-title">Capital markets readiness</h2>
        <p className="section-lede">
          Capital flows to assets it can underwrite. Each technology must traverse the stack from
          venture to investment grade — proving cash flow durability, contract bankability, and
          residual value at each step. The cost of capital at the bottom is a quarter what it is
          at the top.
        </p>
        <CapitalMarkets />
      </section>

      <section className="section">
        <div className="section-marker">VIII</div>
        <h2 className="section-title">Wildcards</h2>
        <p className="section-lede">
          Forces that could rewrite the economics of distributed flexibility. The hyperscaler
          and insurance angles are particularly underappreciated — both bring deep balance sheets
          and different motivations than the classic utility-DR thesis.
        </p>
        <Wildcards />
      </section>

      <footer className="ftr">
        <div className="ftr-brand">
          <span className="ftr-wordmark">Th·rd Sphere</span>
          <span className="ftr-tagline">We forge new paths for those reimagining global systems.</span>
        </div>
        <div className="ftr-row">
          <span>Sources include Wood Mackenzie 2025 NA VPP Market Report, DOE Liftoff: VPP 2025 Update, Pew Charitable Trusts, Latitude Media, LBNL South Africa Water Heating DSM Study (2024), Plentify research.</span>
        </div>
        <div className="ftr-row ftr-meta">
          <span>Built as a research instrument. Numbers reflect current public data and informed estimates.</span>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// STYLES
// ============================================================================

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Backgrounds — brand: white default, light gray for panels */
  --paper: #FFFFFF;
  --paper-2: #F1F1F1;
  /* Text — black with weight contrast for hierarchy (no colored text per brand) */
  --ink: #000000;
  --ink-2: #333333;
  --ink-3: #767676;
  /* Grid lines — brand spec for white backgrounds */
  --rule: #efefef;
  --rule-soft: #efefef;
  /* Semantic data colors mapped to brand palette */
  --accent: #0000E9;      /* Blue — primary brand, used for highest intensity / best fit */
  --accent-2: #0000B5;    /* Blue darker — gradient companion */
  --gold: #00A100;        /* Green — brand secondary, used for material/medium intensity */
  --moss: #00A100;
  --teal: #767676;        /* neutral gray — low signal */
  --warm: #D90000;        /* Red — brand secondary, used sparingly for bottleneck flags */
  --cool: #767676;
  /* Typography — Poppins (brand Circular equivalent), keep mono for small labels */
  --serif: 'Poppins', system-ui, sans-serif;
  --sans: 'Poppins', system-ui, sans-serif;
  --mono: 'JetBrains Mono', monospace;
}

* { box-sizing: border-box; }

.root {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
  padding: 32px 40px 80px;
  max-width: 1480px;
  margin: 0 auto;
  position: relative;
}

.root::before {
  content: '';
  position: fixed;
  inset: 0;
  background: none;
  pointer-events: none;
  z-index: 0;
}

.root > * { position: relative; z-index: 1; }

.hdr {
  border-bottom: 2px solid var(--ink);
  padding-bottom: 24px;
  margin-bottom: 24px;
}

.hdr-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-3);
  margin-bottom: 8px;
}

.hdr-title {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 88px;
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0 0 16px;
  color: var(--ink);
}

.hdr-italic {
  font-weight: 400;
  color: var(--ink);
}

.hdr-sub {
  font-family: var(--serif);
  font-size: 18px;
  line-height: 1.45;
  color: var(--ink-2);
  font-weight: 400;
  max-width: 780px;
}

.topbar {
  background: var(--paper-2);
  border: 1px solid var(--rule);
  padding: 18px 22px;
  margin-bottom: 16px;
}

.topbar-row {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.topbar-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--ink-3);
}

.seg {
  display: flex;
  border: 1px solid var(--ink);
  background: var(--paper);
}

.seg-btn {
  background: transparent;
  border: none;
  border-right: 1px solid var(--rule);
  padding: 7px 14px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-2);
  cursor: pointer;
  transition: all 120ms ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.seg-btn:last-child { border-right: none; }
.seg-btn:hover { background: var(--paper-2); }
.seg-btn-active { background: var(--ink); color: var(--paper); }
.seg-btn-active:hover { background: var(--ink); }
.seg-flag { font-size: 11px; }

.reset-btn {
  margin-left: auto;
  padding: 7px 14px;
  background: transparent;
  border: 1px solid var(--ink-3);
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-2);
  cursor: pointer;
  transition: all 120ms ease;
}

.reset-btn:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.sliders-section {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed var(--rule);
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 32px;
}

.slider-group-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slider-group-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
  font-weight: 500;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 4px;
}

.slider-group-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.slider-item-head {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 6px;
}

.slider-item-name {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-2);
}

.slider-item-val {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--accent);
  margin-left: auto;
  text-align: right;
}

.slider-item input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: var(--rule);
  outline: none;
  cursor: pointer;
}

.slider-item input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--ink);
  border: 2px solid var(--paper);
  cursor: pointer;
  box-shadow: 0 0 0 1px var(--ink);
}

.slider-item input[type='range']::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: var(--ink);
  border: 2px solid var(--paper);
  cursor: pointer;
  box-shadow: 0 0 0 1px var(--ink);
}

.slider-info-btn {
  background: transparent;
  border: none;
  padding: 0;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-3);
  cursor: pointer;
  border-radius: 50%;
  transition: color 0.15s, background 0.15s;
}

.slider-info-btn:hover {
  color: var(--ink);
  background: var(--rule);
}

.slider-info-btn-open {
  color: var(--ink);
  background: var(--paper-2);
  font-size: 14px;
  font-weight: 700;
}

.slider-item-open {
  background: var(--paper-2);
  margin: 0 -10px;
  padding: 8px 10px;
  border-left: 2px solid var(--ink);
}

.slider-details {
  margin-top: 10px;
  padding: 10px 0 4px;
  border-top: 1px solid var(--rule);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.slider-details-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.slider-details-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  font-weight: 500;
}

.slider-details-text {
  font-family: var(--sans);
  font-size: 12px;
  line-height: 1.5;
  color: var(--ink-2);
}

.slider-details-sources {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.slider-source-link {
  font-family: var(--sans);
  font-size: 11px;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-word;
}

.slider-source-link:hover {
  color: var(--accent-2);
}

.context-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--ink);
  margin-bottom: 48px;
}

.context-item {
  padding: 14px 18px;
  border-right: 1px solid var(--rule);
  background: var(--paper);
}

.context-item:last-child { border-right: none; }

.context-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-bottom: 6px;
}

.context-val {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.context-trend {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--moss);
  font-weight: 500;
  margin-left: 6px;
}

.section {
  margin-bottom: 64px;
  padding-top: 8px;
}

.section-marker {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 8px;
  letter-spacing: 0.16em;
}

.section-title {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 42px;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
  color: var(--ink);
}

.section-lede {
  font-family: var(--serif);
  font-size: 17px;
  line-height: 1.55;
  color: var(--ink-2);
  font-weight: 400;
  max-width: 820px;
  margin: 0 0 28px;
}

.matrix-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  overflow-x: auto;
}

.matrix {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.matrix th {
  text-align: left;
  padding: 14px 16px;
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--ink);
  background: var(--paper-2);
  vertical-align: top;
  width: 18%;
}

.matrix th:first-child {
  width: 22%;
  background: var(--ink);
}

.matrix th .th-label {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink);
}

.matrix th .th-sub {
  font-family: var(--serif);
  font-size: 12px;
  font-style: normal;
  color: var(--ink-3);
  font-weight: 300;
  margin-top: 4px;
  line-height: 1.4;
}

.matrix .row-head {
  background: var(--paper-2);
  border-right: 1px solid var(--ink);
  border-bottom: 1px solid var(--rule-soft);
  padding: 16px;
  vertical-align: top;
}

.matrix .row-head-label {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.matrix .row-head-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  margin-top: 4px;
}

.cell {
  padding: 16px;
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  text-align: left;
  vertical-align: middle;
}

.cell-bar {
  display: flex;
  gap: 3px;
  margin-bottom: 6px;
}

.bar-pip {
  width: 16px;
  height: 4px;
  background: var(--rule);
}

.bar-pip-on { background: var(--ink); }
.cell-0 .bar-pip-on { background: var(--rule); }
.cell-1 .bar-pip-on { background: var(--cool); }
.cell-2 .bar-pip-on { background: var(--gold); }
.cell-3 .bar-pip-on { background: var(--accent); }

.cell-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}

.cell-3 .cell-label { color: var(--ink); font-weight: 600; }
.cell-2 .cell-label { color: var(--ink); font-weight: 500; }

.ranking-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  padding: 20px 22px;
}

.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.ranking-title {
  font-family: var(--serif);
  font-style: normal;
  font-size: 16px;
}

.ranking-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
}

.rank-row {
  display: grid;
  grid-template-columns: 32px 28px minmax(220px, 1.5fr) 2.5fr 50px;
  gap: 14px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed var(--rule-soft);
}

.rank-row:last-child { border-bottom: none; }

.rank-num {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-3);
  letter-spacing: 0.05em;
}

.rank-icon {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  text-align: center;
}

.rank-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.rank-name {
  font-family: var(--serif);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.rank-meta {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.rank-portfolio {
  color: var(--accent);
  font-weight: 500;
}

.rank-bar-wrap {
  height: 8px;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  position: relative;
  overflow: hidden;
}

.rank-bar {
  position: absolute;
  inset: 0 auto 0 0;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.rank-score {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 500;
  text-align: right;
  letter-spacing: -0.02em;
  color: var(--accent);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--ink);
  border: 1px solid var(--ink);
}

@media (min-width: 1100px) {
  .tech-grid { grid-template-columns: repeat(4, 1fr); }
}

.tech-card {
  background: var(--paper);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
}

.tech-card.fit-3 { box-shadow: inset 4px 0 0 var(--accent); }
.tech-card.fit-2 { box-shadow: inset 4px 0 0 var(--gold); }
.tech-card.fit-1 { background: var(--paper-2); opacity: 0.85; }

.tech-rank {
  position: absolute;
  top: 12px;
  right: 14px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--ink-3);
}

.tech-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 12px;
  padding-right: 24px;
}

.tech-icon {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  line-height: 1;
}

.tech-name {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.01em;
  flex: 1;
  line-height: 1.2;
}

.fit-badge {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 3px 7px;
  border: 1px solid currentColor;
  white-space: nowrap;
  align-self: flex-start;
}

.fit-badge-3 { color: var(--accent); }
.fit-badge-2 { color: var(--gold); }
.fit-badge-1 { color: var(--ink-3); }

.tech-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px dashed var(--rule);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
}

.stat-val {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
}

.stat-score {
  font-family: var(--serif);
  font-size: 18px;
  color: var(--accent);
  letter-spacing: -0.01em;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stack-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.pill {
  font-family: var(--sans);
  font-size: 10px;
  padding: 3px 7px;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  color: var(--ink-2);
  font-weight: 500;
}

.tech-note {
  font-family: var(--serif);
  font-size: 13px;
  font-style: normal;
  color: var(--ink-2);
  line-height: 1.45;
  font-weight: 300;
}

.tech-scale {
  background: var(--paper-2);
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.scale-head {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.scale-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  font-weight: 500;
}

.scale-headline {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.35;
}

.scale-body {
  font-family: var(--sans);
  font-size: 11px;
  line-height: 1.5;
  color: var(--ink-2);
}

.tech-portfolio {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--rule);
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: help;
}

.portfolio-dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
}

.portfolio-text {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}

.solar-history {
  margin-bottom: 28px;
  padding: 18px 22px;
  background: var(--paper-2);
  border-left: 3px solid var(--accent);
}

.solar-history-title {
  font-family: var(--serif);
  font-style: normal;
  font-size: 16px;
  color: var(--ink);
  margin-bottom: 14px;
  font-weight: 400;
}

.solar-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.solar-era {
  border-top: 2px solid var(--ink);
  padding-top: 8px;
}

.solar-era-year {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--ink-3);
  margin-bottom: 4px;
}

.solar-era-model {
  font-family: var(--serif);
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.solar-era-why {
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.4;
}

.bm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1px;
  background: var(--ink);
  border: 1px solid var(--ink);
}

.bm-card {
  background: var(--paper);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.bm-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.bm-name {
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.bm-score {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.score-strong { color: var(--accent); }
.score-mid { color: var(--gold); }
.score-weak { color: var(--ink-3); }

.bm-desc {
  font-family: var(--serif);
  font-size: 14px;
  font-style: normal;
  color: var(--ink-2);
  line-height: 1.45;
  margin-bottom: 14px;
  font-weight: 300;
}

.bm-rows {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.bm-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
  align-items: start;
}

.bm-row-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
  padding-top: 2px;
}

.bm-row-val {
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.45;
}

.bm-bottleneck {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--rule);
  display: flex;
  align-items: center;
  gap: 8px;
}

.bm-bot-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--warm);
  font-weight: 500;
}

.bm-bottleneck > span:last-child {
  font-family: var(--sans);
  font-size: 12px;
  color: var(--ink);
  font-weight: 500;
}

.cm-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
}

.cm-legend {
  display: flex;
  gap: 18px;
  padding: 12px 18px;
  background: var(--paper-2);
  border-bottom: 1px solid var(--ink);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-2);
}

.dot {
  width: 12px;
  height: 12px;
  display: inline-block;
}

.maturity-mature { background: var(--accent); }
.maturity-emerging { background: var(--gold); }
.maturity-limited { background: var(--cool); }
.maturity-none { background: var(--rule); }

.cm-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.cm-table thead th {
  padding: 12px 8px;
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  text-align: left;
  border-bottom: 1px solid var(--ink);
  background: var(--paper-2);
  border-right: 1px solid var(--rule-soft);
  vertical-align: bottom;
}

.cm-tech-head {
  text-align: center !important;
  width: 9%;
}

.cm-tech-icon {
  display: block;
  font-family: var(--serif);
  font-size: 18px;
  color: var(--accent);
  margin-bottom: 4px;
}

.cm-tech-short {
  display: block;
  font-size: 9px;
  line-height: 1.2;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
  color: var(--ink);
}

.cm-stage {
  font-family: var(--serif);
  font-size: 14px;
  font-weight: 500;
  padding: 12px 14px;
  border-right: 1px solid var(--ink);
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-2);
  letter-spacing: -0.005em;
}

.cm-cost {
  font-family: var(--mono);
  font-size: 11px;
  padding: 12px 10px;
  color: var(--ink-2);
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper);
  white-space: nowrap;
}

.cm-cell {
  text-align: center;
  padding: 12px 6px;
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  position: relative;
}

.cm-cell.maturity-mature { background: rgba(0, 0, 233, 0.18); }
.cm-cell.maturity-emerging { background: rgba(0, 161, 0, 0.16); }
.cm-cell.maturity-limited { background: rgba(118, 118, 118, 0.1); }
.cm-cell.maturity-none { background: var(--paper); }

.cm-cell-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.cm-cell.maturity-mature .cm-cell-label { color: var(--ink); }
.cm-cell.maturity-emerging .cm-cell-label { color: var(--ink); }
.cm-cell.maturity-limited .cm-cell-label { color: var(--ink-3); }
.cm-cell.maturity-none .cm-cell-label { color: var(--ink-3); }

.cm-note {
  padding: 14px 22px;
  font-family: var(--serif);
  font-size: 13px;
  font-style: normal;
  color: var(--ink-2);
  background: var(--paper-2);
  border-top: 1px solid var(--ink);
  font-weight: 300;
  line-height: 1.5;
}

.wild-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 18px;
}

.wild-card {
  background: var(--paper);
  border: 1px solid var(--ink);
  padding: 22px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wild-card::before {
  content: '◆';
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 14px;
  color: var(--accent);
  opacity: 0.5;
}

.wild-hook {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
  font-weight: 500;
}

.wild-title {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin: -6px 0 0;
}

.wild-body {
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-2);
  font-weight: 300;
}

.wild-implication {
  border-top: 1px solid var(--rule);
  padding-top: 12px;
}

.wild-imp-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-bottom: 6px;
}

.wild-implication div:last-child {
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-2);
}

.wild-time {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  border-top: 1px dashed var(--rule);
  padding-top: 10px;
  margin-top: auto;
}

.adoption-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  padding: 24px 28px;
}

.adoption-header {
  border-bottom: 1px solid var(--rule);
  padding-bottom: 14px;
  margin-bottom: 18px;
}

.adoption-title {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
}

.adoption-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-top: 4px;
}

.adoption-svg {
  width: 100%;
  height: auto;
  display: block;
}

.adoption-svg .quad-label {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 600;
  fill: var(--ink-3);
  letter-spacing: 0.14em;
}

.adoption-svg .quad-sub {
  font-family: var(--sans);
  font-size: 9px;
  fill: var(--ink-3);
  font-style: italic;
}

.adoption-svg .axis-label {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.adoption-svg .point-label {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 500;
  fill: var(--ink);
}

.adoption-legend {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid var(--rule);
}

.legend-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.legend-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend-name {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
  color: var(--ink);
}

.legend-techs {
  font-family: var(--sans);
  font-size: 12px;
  color: var(--ink);
  font-weight: 500;
}

.legend-desc {
  font-family: var(--sans);
  font-size: 11px;
  color: var(--ink-2);
  line-height: 1.4;
}

@media (max-width: 700px) {
  .adoption-legend { grid-template-columns: 1fr; }
}

.timeline-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  padding: 24px 28px;
}

.timeline-header {
  border-bottom: 1px solid var(--rule);
  padding-bottom: 14px;
  margin-bottom: 18px;
}

.timeline-title {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
}

.timeline-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-top: 4px;
}

.timeline-svg {
  width: 100%;
  height: auto;
  display: block;
}

.timeline-svg .timeline-axis-tick {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-3);
}

.timeline-svg .timeline-axis-label {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.timeline-legend {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 16px;
}

.tl-legend-row {
  display: grid;
  grid-template-columns: 16px 1fr auto auto;
  align-items: center;
  gap: 8px;
  font-family: var(--sans);
  font-size: 11px;
}

.tl-legend-swatch {
  width: 14px;
  height: 3px;
  border: 1px solid;
  border-style: solid;
}

.tl-legend-name {
  color: var(--ink);
  font-weight: 500;
}

.tl-legend-end {
  font-family: var(--mono);
  font-weight: 600;
  color: var(--ink);
  font-size: 11px;
}

.tl-legend-delta {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink-3);
}

.timeline-footnote {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--rule);
  font-family: var(--sans);
  font-size: 11px;
  color: var(--ink-2);
  line-height: 1.5;
}

@media (max-width: 700px) {
  .timeline-legend { grid-template-columns: 1fr; }
  .tl-legend-row { grid-template-columns: 16px 1fr auto; }
  .tl-legend-delta { display: none; }
}

.ftr {
  border-top: 1px solid var(--ink);
  margin-top: 80px;
  padding-top: 20px;
}

.ftr-brand {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
}

.ftr-wordmark {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.ftr-tagline {
  font-family: var(--serif);
  font-size: 13px;
  font-weight: 400;
  color: var(--ink-2);
  line-height: 1.4;
}

.ftr-row {
  font-size: 11px;
  color: var(--ink-3);
  line-height: 1.5;
  margin-bottom: 6px;
}

.ftr-meta {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 1100px) {
  .sliders-section { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 800px) {
  .root { padding: 20px; }
  .hdr-title { font-size: 56px; }
  .context-strip { grid-template-columns: repeat(2, 1fr); }
  .solar-timeline { grid-template-columns: 1fr; }
  .topbar-row { flex-direction: column; align-items: flex-start; gap: 12px; }
  .sliders-section { grid-template-columns: 1fr; }
  .reset-btn { margin-left: 0; }
  .rank-row {
    grid-template-columns: 28px 24px 1fr 50px;
    grid-template-rows: auto auto;
    row-gap: 8px;
  }
  .rank-bar-wrap { grid-column: 1 / -1; }
}
`;
