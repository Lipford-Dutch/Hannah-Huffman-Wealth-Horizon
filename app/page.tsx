"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const milestones = [
  {
    phase: "01",
    range: "Now - 12 months",
    title: "Stabilize the launchpad",
    copy: "Unify the household plan, capture every employer match, clear expensive debt, and build a 3-6 month cash runway before taking on advanced strategies.",
    tags: ["One household plan", "Emergency reserve", "High-interest debt"],
  },
  {
    phase: "02",
    range: "Years 1 - 3",
    title: "Automate the core",
    copy: "Increase the savings rate deliberately, automate diversified low-cost investing, and fund tax-advantaged accounts in a sequence that fits your cash flow.",
    tags: ["Automatic investing", "Tax-aware accounts", "Lifestyle guardrails"],
  },
  {
    phase: "03",
    range: "Years 3 - 5",
    title: "Build optionality",
    copy: "Model the home, childcare, insurance, and career decisions together. Keep complex debt or alternative-investment tactics behind a written risk test.",
    tags: ["Scenario planning", "Insurance review", "Mortgage math"],
  },
  {
    phase: "04",
    range: "Years 5 - 10",
    title: "Engineer the bridge",
    copy: "Prepare the years between work and traditional retirement access: healthcare, taxable reserves, Roth conversion timing, and sequence-of-returns protection.",
    tags: ["Bridge assets", "Roth ladder", "Healthcare plan"],
  },
  {
    phase: "05",
    range: "Beyond year 10",
    title: "Protect the legacy",
    copy: "Coordinate beneficiaries, estate documents, education, and governance. Add trusts or advanced insurance only when the family balance sheet warrants the complexity.",
    tags: ["Beneficiaries", "Estate counsel", "Family governance"],
  },
];

const resources = [
  ["Core blueprint", "Generational wealth + early retirement", "/resources/generational-wealth-blueprint.pdf", "Foundation"],
  ["Early access", "The Roth conversion ladder", "/resources/roth-conversion-ladder.pdf", "Retirement"],
  ["Debt systems", "Debt-free living strategies", "/resources/debt-free-living.pdf", "Debt"],
  ["Risk review", "Velocity banking: mechanics + risks", "/resources/velocity-banking-risks.pdf", "Debt"],
  ["Home purchase", "First-home velocity banking", "/resources/first-home-velocity-banking.pdf", "Debt"],
  ["Portfolio design", "Modern 60-10-30 model", "/resources/modern-60-10-30.pdf", "Investing"],
  ["Portfolio research", "High-net-worth portfolios", "/resources/hnw-portfolios.pdf", "Investing"],
  ["Market lens", "2026 market + planning dynamics", "/resources/2026-market-planning.pdf", "Investing"],
  ["Independence", "FIRE vs. Retire Sooner", "/resources/fire-vs-retire-sooner.pdf", "Retirement"],
  ["Trust strategy", "2026 trust architectures", "/resources/trust-architectures-2026.pdf", "Legacy"],
  ["Legacy design", "The dynasty trust", "/resources/dynasty-trust.pdf", "Legacy"],
  ["Family banking", "Architecting the infinite family bank", "/resources/infinite-family-bank.pdf", "Legacy"],
] as const;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function estimateYears(target: number, current: number, annual: number, rate: number) {
  if (target <= current) return 0;
  if (annual <= 0) return null;
  let balance = current;
  for (let year = 1; year <= 80; year += 1) {
    balance = balance * (1 + rate) + annual;
    if (balance >= target) return year;
  }
  return null;
}

export default function Home() {
  const [annualSpend, setAnnualSpend] = useState(60000);
  const [withdrawalRate, setWithdrawalRate] = useState(3.3);
  const [currentInvested, setCurrentInvested] = useState(75000);
  const [monthlyContribution, setMonthlyContribution] = useState(3000);
  const [returnRate, setReturnRate] = useState(6);
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const fireNumber = annualSpend / (withdrawalRate / 100);
  const years = useMemo(
    () => estimateYears(fireNumber, currentInvested, monthlyContribution * 12, returnRate / 100),
    [fireNumber, currentInvested, monthlyContribution, returnRate],
  );
  const filtered = activeFilter === "All" ? resources : resources.filter((r) => r[3] === activeFilter);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hannah's Wealth Horizon home">
          <span className="brand-mark">HH</span>
          <span>WEALTH HORIZON</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#roadmap" onClick={() => setMenuOpen(false)}>Roadmap</a>
          <a href="#model" onClick={() => setMenuOpen(false)}>Plan lab</a>
          <a href="#watch" onClick={() => setMenuOpen(false)}>Watch + listen</a>
          <a href="#library" onClick={() => setMenuOpen(false)}>Library</a>
        </nav>
        <a className="header-cta" href="#next">Start here <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="grid-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> A PERSONAL WEALTH OPERATING SYSTEM</p>
          <h1>Make your<br /><em>future</em> feel<br />inevitable.</h1>
          <p className="hero-lede">A living, decade-long plan for Hannah and family—designed to turn disciplined choices today into freedom, resilience, and a legacy tomorrow.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#roadmap">Explore the roadmap <span>↓</span></a>
            <a className="text-link" href="/resources/generational-wealth-blueprint.pdf" target="_blank">Read the source blueprint <span>↗</span></a>
          </div>
        </div>

        <div className="hero-orbit" aria-label="Four pillars of the plan">
          <div className="orbit-ring orbit-one" />
          <div className="orbit-ring orbit-two" />
          <div className="core-orb"><small>FAMILY</small><strong>10</strong><span>YEAR HORIZON</span></div>
          <span className="orbit-label label-a">01&nbsp; CASH FLOW</span>
          <span className="orbit-label label-b">02&nbsp; INVEST</span>
          <span className="orbit-label label-c">03&nbsp; PROTECT</span>
          <span className="orbit-label label-d">04&nbsp; LEGACY</span>
          <span className="spark spark-a" /><span className="spark spark-b" /><span className="spark spark-c" />
        </div>

        <div className="hero-metrics">
          <div><span>Starting advantage</span><strong>Age 27</strong></div>
          <div><span>Core principle</span><strong>One team</strong></div>
          <div><span>North-star metric</span><strong>Savings rate</strong></div>
        </div>
      </section>

      <section className="ticker" aria-label="Plan priorities">
        <div>ALIGN THE HOUSEHOLD <span>✦</span> BUILD THE BUFFER <span>✦</span> AUTOMATE THE CORE <span>✦</span> MODEL THE BRIDGE <span>✦</span> PROTECT THE LEGACY <span>✦</span></div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="section-heading">
          <p className="eyebrow"><span /> THE SEQUENCE MATTERS</p>
          <h2>Five phases.<br /><em>One direction.</em></h2>
          <p>Advanced tools are powerful only after the foundation is stable. This sequence keeps complexity in its proper place.</p>
        </div>
        <div className="timeline">
          {milestones.map((item, index) => (
            <article className="timeline-card" key={item.phase}>
              <div className="timeline-index"><span>{item.phase}</span><i>{item.range}</i></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="timeline-node" aria-hidden="true">{index + 1}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section lab" id="model">
        <div className="lab-intro">
          <p className="eyebrow light"><span /> INTERACTIVE PLAN LAB</p>
          <h2>Turn the dream<br />into a <em>number.</em></h2>
          <p>Explore a planning range—not a promise. Adjust the assumptions to see how spending, contributions, and time interact.</p>
          <div className="signal-card">
            <span className="signal-dot" />
            <div><small>CURRENT SIGNAL</small><strong>{years === null ? "Add a contribution" : years === 0 ? "Target reached" : `${years} year path`}</strong></div>
          </div>
        </div>
        <div className="calculator">
          <div className="calc-fields">
            <label>Annual retirement spending <span>{money.format(annualSpend)}</span>
              <input type="range" min="30000" max="200000" step="5000" value={annualSpend} onChange={(e) => setAnnualSpend(Number(e.target.value))} />
            </label>
            <label>Planning withdrawal rate <span>{withdrawalRate.toFixed(1)}%</span>
              <input type="range" min="2.5" max="4" step="0.1" value={withdrawalRate} onChange={(e) => setWithdrawalRate(Number(e.target.value))} />
            </label>
            <label>Already invested <span>{money.format(currentInvested)}</span>
              <input type="range" min="0" max="1000000" step="5000" value={currentInvested} onChange={(e) => setCurrentInvested(Number(e.target.value))} />
            </label>
            <label>Monthly contribution <span>{money.format(monthlyContribution)}</span>
              <input type="range" min="250" max="15000" step="250" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} />
            </label>
            <label>Illustrative annual return <span>{returnRate.toFixed(1)}%</span>
              <input type="range" min="2" max="10" step="0.5" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} />
            </label>
          </div>
          <div className="calc-output">
            <span>Illustrative independence target</span>
            <strong>{money.format(fireNumber)}</strong>
            <div className="output-grid">
              <div><small>Expense multiple</small><b>{(100 / withdrawalRate).toFixed(1)}×</b></div>
              <div><small>Estimated horizon</small><b>{years === null ? "—" : `${years} yrs`}</b></div>
            </div>
            <p>Uses annual compounding and end-of-year contributions. It excludes taxes, fees, inflation changes, market volatility, and cash-flow interruptions.</p>
          </div>
        </div>
      </section>

      <section className="section strategy">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> DECISION ARCHITECTURE</p>
          <h2>Core first.<br /><em>Complexity later.</em></h2>
        </div>
        <div className="strategy-grid">
          <article className="strategy-card core-card">
            <span className="card-number">01</span><div className="card-symbol">∞</div>
            <h3>Build the durable core</h3>
            <p>Cash reserve, employer match, high-interest debt, diversified investments, and deliberate protection.</p>
            <ul><li>Automate before optimizing</li><li>Raise contributions with income</li><li>Keep fees and taxes visible</li></ul>
          </article>
          <article className="strategy-card caution-card">
            <span className="card-number">02</span><div className="card-symbol">△</div>
            <h3>Pressure-test debt tactics</h3>
            <p>Velocity banking adds variable-rate, liquidity, and home-collateral risk. Compare it to simple extra principal payments first.</p>
            <a href="/resources/velocity-banking-risks.pdf" target="_blank">Open the risk brief ↗</a>
          </article>
          <article className="strategy-card advanced-card">
            <span className="card-number">03</span><div className="card-symbol">◌</div>
            <h3>Earn the right to diversify</h3>
            <p>Private assets, insurance-based strategies, and trusts can add value—but only with suitable scale, liquidity, diligence, and professional review.</p>
            <a href="/resources/modern-60-10-30.pdf" target="_blank">Study the portfolio model ↗</a>
          </article>
        </div>
      </section>

      <section className="visual-brief" id="navigator">
        <div className="brief-copy">
          <p className="eyebrow light"><span /> THE RESEARCH MAP</p>
          <h2>Your 2026<br /><em>wealth navigator.</em></h2>
          <p>A visual field guide to the macro landscape, portfolio evolution, debt frameworks, tax considerations, and structural protection covered in the research set.</p>
          <a className="button button-light" href="/wealth-navigator.webp" target="_blank">View full resolution <span>↗</span></a>
        </div>
        <div className="brief-image"><Image src="/wealth-navigator.webp" width={2752} height={1536} sizes="(max-width: 1050px) 100vw, 66vw" alt="2026 Wealth Navigator infographic summarizing markets, portfolios, tax, debt, and trust strategies" /></div>
      </section>

      <section className="section media-section" id="watch">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> WATCH + LISTEN</p>
          <h2>Learn at<br /><em>your pace.</em></h2>
        </div>
        <div className="media-grid">
          <article className="video-card">
            <div className="media-kicker"><span>VIDEO BRIEFING</span><i>10:46</i></div>
            <video controls preload="metadata" poster="/wealth-navigator.webp">
              <source src="/media/2026-wealth-blueprint.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <h3>2026 Wealth Blueprint</h3><p>A guided overview of the market, planning, and protection landscape.</p>
          </article>
          <article className="audio-card">
            <div className="audio-icon" aria-hidden="true">◉</div><div><span>AUDIO GUIDE · 18:18</span><h3>A ten-year blueprint for financial comfort</h3></div>
            <audio controls preload="metadata"><source src="/media/ten-year-blueprint.m4a" type="audio/mp4" /></audio>
          </article>
          <article className="audio-card">
            <div className="audio-icon" aria-hidden="true">◈</div><div><span>AUDIO GUIDE · 24:24</span><h3>FIRE versus the Retire Sooner method</h3></div>
            <audio controls preload="metadata"><source src="/media/fire-vs-retire-sooner.m4a" type="audio/mp4" /></audio>
          </article>
        </div>
      </section>

      <section className="section library" id="library">
        <div className="library-head">
          <div><p className="eyebrow"><span /> SOURCE LIBRARY</p><h2>Go deeper,<br /><em>with context.</em></h2></div>
          <p>Every major theme in this site traces back to the supplied research. Use the filters to find the next brief for your current decision.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter source library">
          {["All", "Foundation", "Debt", "Investing", "Retirement", "Legacy"].map((filter) => (
            <button className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>
          ))}
        </div>
        <div className="resource-list">
          {filtered.map(([kicker, title, href, category], index) => (
            <a className="resource-row" href={href} target="_blank" key={href}>
              <span className="resource-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="resource-title"><small>{kicker}</small><strong>{title}</strong></span>
              <span className="resource-category">{category}</span><span className="resource-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="next-step" id="next">
        <div><p className="eyebrow light"><span /> YOUR NEXT 90 DAYS</p><h2>Clarity becomes<br /><em>momentum.</em></h2></div>
        <ol>
          <li><span>01</span><p><strong>Write the baseline</strong>Net worth, monthly surplus, rates, benefits, and protection gaps.</p></li>
          <li><span>02</span><p><strong>Choose one target</strong>A cash reserve, expensive debt, or the next contribution milestone.</p></li>
          <li><span>03</span><p><strong>Schedule the review</strong>Revisit the plan quarterly and after every major family or career change.</p></li>
        </ol>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">HH</span><span>WEALTH HORIZON</span></div>
        <p>Educational planning experience for Hannah and family.</p>
        <p className="disclaimer">This site is educational and illustrative—not individualized investment, tax, insurance, lending, or legal advice. Assumptions and laws change. Review decisions with qualified fiduciary, tax, insurance, and estate professionals.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
