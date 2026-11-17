import { articles, categories } from "../data/articles";

const featured = [
  { ...articles.find(a => a.slug === "pricing-ai-features-saas"), label: "Editor's pick", visual: "visual-ai" },
  { ...articles.find(a => a.slug === "stablecoin-rules-us-founders"), label: "Crypto & Web3", visual: "visual-crypto" },
  { ...articles.find(a => a.slug === "usdc-payments-for-businesses"), label: "Finance & Fintech", visual: "visual-finance" }
];

export default function Home() {
  return <main id="main">
    <section className="hero wrap">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT IDEAS. PRACTICAL INSIGHT.</p><h1>Understand the systems <em>shaping business.</em></h1><p className="hero-lede">Clear, useful guides on finance, crypto, SaaS and AI. Less noise. Better decisions.</p><div className="hero-actions"><a className="button-primary" href="#latest">Explore the latest <span>↓</span></a><a className="text-link" href="/write-for-us/">Contribute an article ↗</a></div><div className="hero-note"><span className="pulse" /> Practical analysis for founders, operators and curious minds.</div></div>
      <div className="hero-art" role="img" aria-label="Stackwire editorial cover showing practical business ideas across finance, crypto, SaaS and AI" />
    </section>
    <section className="ticker"><div className="ticker-inner"><span>THE STACKWIRE BRIEFING</span><i /> FINANCE & FINTECH <i /> CRYPTO & WEB3 <i /> SAAS & AI <i /> PRACTICAL KNOWLEDGE <i /> FINANCE & FINTECH</div></section>
    <section className="section wrap" id="featured"><div className="section-heading"><div><p className="eyebrow">START WITH THE IMPORTANT</p><h2>Featured reads</h2></div><p>Useful context for the decisions on your desk.</p></div>
      <div className="feature-grid">{featured.map((item, i) => <a className={`feature-card ${item.visual} ${i === 0 ? "feature-main" : ""}`} href={`/${item.slug}/`} key={item.slug}><div className="feature-visual"><span className="visual-number">0{i + 1}</span><span className="visual-symbol">{i === 0 ? "↗" : i === 1 ? "◈" : "◎"}</span><span className="visual-lines" /></div><div className="feature-content"><span className="category-label">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><span className="read-link">Read the guide <b>↗</b></span></div></a>)}</div>
    </section>
    <section className="section categories-section"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">THREE FOCUSED DESKS</p><h2>Explore by topic</h2></div><p>Deep enough to be useful. Clear enough to act on.</p></div><div className="category-grid">{categories.map((cat, i) => <a href={`/${cat.slug}/`} className={`category-card ${cat.tone}`} key={cat.slug}><span className="category-count">0{i + 1} / {cat.count} {cat.count === 1 ? "GUIDE" : "GUIDES"}</span><span className="category-icon">{["↗", "◈", "⌘"][i]}</span><h3>{cat.name}</h3><p>{cat.description}</p><span className="category-arrow">Explore topic <b>↗</b></span></a>)}</div></div></section>
    <section className="section wrap" id="latest"><div className="section-heading"><div><p className="eyebrow">FRESH PERSPECTIVES</p><h2>Latest articles</h2></div><p>Ideas and explainers, built to be useful.</p></div><div className="latest-list">{articles.slice().reverse().map((article, i) => <a href={`/${article.slug}/`} className="latest-item" key={article.slug}><span className={`latest-thumb latest-${article.category.includes("Finance") ? "finance" : article.category.includes("Crypto") ? "crypto" : "saas"}`} aria-hidden="true"><img src={article.category.includes("Finance") ? "/images/finance-editorial.svg" : article.category.includes("Crypto") ? "/images/crypto-editorial.svg" : "/images/ai-editorial.svg"} alt="" loading="lazy" /></span><span className="latest-copy"><span className="latest-category">{article.category}</span><span className="latest-title">{article.title}</span></span><span className="latest-date">{article.date}</span><span className="latest-arrow">↗</span></a>)}</div></section>
    <section className="contribute"><div className="wrap contribute-inner"><div><p className="eyebrow">HAVE SOMETHING WORTH SHARING?</p><h2>Bring your expertise<br/>to the conversation.</h2></div><a className="button-light" href="/write-for-us/">Write for Stackwire <span>↗</span></a></div></section>
  </main>;
}
