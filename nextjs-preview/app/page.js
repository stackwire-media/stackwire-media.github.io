import { articles, categories } from "../data/articles";

const imageBySlug = {
  "merchant-account": "https://images.pexels.com/photos/3570237/pexels-photo-3570237.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "usdc-payments-for-businesses": "https://images.pexels.com/photos/3570242/pexels-photo-3570242.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "choosing-a-payment-processor": "https://images.pexels.com/photos/8296991/pexels-photo-8296991.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "payment-gateway-vs-payment-processor": "https://images.pexels.com/photos/10330109/pexels-photo-10330109.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "stablecoin-rules-us-founders": "https://images.pexels.com/photos/14911431/pexels-photo-14911431.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "ai-agent-payments-safely": "https://images.pexels.com/photos/6694475/pexels-photo-6694475.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "calculating-ai-api-costs": "https://images.pexels.com/photos/36496927/pexels-photo-36496927.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "ai-agent-cost-per-task": "https://images.pexels.com/photos/37085304/pexels-photo-37085304.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "rag-vs-fine-tuning": "https://images.pexels.com/photos/34804016/pexels-photo-34804016.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "pricing-ai-features-saas": "https://images.pexels.com/photos/34804005/pexels-photo-34804005.jpeg?auto=compress&cs=tinysrgb&w=1200"
};
const featuredSlugs = ["merchant-account", "stablecoin-rules-us-founders", "pricing-ai-features-saas"];
const featured = featuredSlugs.map(slug => articles.find(article => article.slug === slug)).filter(Boolean);
const latest = articles.slice().sort((a,b) => new Date(b.date) - new Date(a.date));

function ArticleCard({ article, featured = false }) {
  return <a className={featured ? "story-card story-card-featured" : "story-card"} href={`/${article.slug}/`}>
    <div className="story-image"><img src={imageBySlug[article.slug]} alt={article.title} loading="lazy" decoding="async" /><span className="image-tag">{article.category}</span></div>
    <div className="story-copy"><p className="story-meta">{article.category} <span>·</span> {article.date}</p><h3>{article.title}</h3><p className="story-description">{article.description}</p><span className="story-read">Read article <b>↗</b></span></div>
  </a>;
}

export default function Home() {
  const lead = featured[0];
  return <main id="main">
    <section className="home-intro wrap">
      <div className="intro-copy">
        <p className="eyebrow"><span className="eyebrow-mark" /> INDEPENDENT IDEAS. PRACTICAL INSIGHT.</p>
        <h1>Clear thinking for a <em>changing world.</em></h1>
        <p className="intro-lede">Straightforward guides to finance, crypto, SaaS and AI. Get the context, understand your options, and make more confident decisions.</p>
        <div className="intro-actions"><a className="button-primary" href="#latest">Explore the latest <span>↓</span></a><a className="quiet-link" href="/about/">About Stackwire ↗</a></div>
        <div className="intro-proof"><span className="proof-dot" /> Made for founders, professionals and curious readers who want the useful details without the noise.</div>
      </div>
      {lead && <a className="lead-story" href={`/${lead.slug}/`}>
        <img src={imageBySlug[lead.slug]} alt={lead.title} fetchPriority="high" decoding="async" />
        <span className="lead-overlay"></span>
        <span className="lead-label">EDITOR'S PICK</span>
        <span className="lead-caption"><span>{lead.category}</span><strong>{lead.title}</strong><small>Explore the guide ↗</small></span>
      </a>}
    </section>

    <section className="topic-strip"><div className="wrap topic-strip-inner"><span>EXPLORE THE BIG PICTURE</span><a href="/finance/">Finance & Fintech <b>↗</b></a><a href="/crypto/">Crypto & Web3 <b>↗</b></a><a href="/saas-ai/">SaaS & AI <b>↗</b></a></div></section>

    <section className="section wrap" id="featured">
      <div className="section-heading"><div><p className="eyebrow">SELECTED FOR YOU</p><h2>Featured stories</h2></div><p>A good place to start, whether you are learning something new or making a business decision.</p></div>
      <div className="featured-grid">{featured.map((article,i) => <ArticleCard key={article.slug} article={article} featured={i===0} />)}</div>
    </section>

    <section className="topic-section">
      <div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">THREE FOCUSED DESKS</p><h2>Explore by topic</h2></div><p>Explore practical guides, clear explanations and the details that matter.</p></div>
        <div className="topic-grid">{categories.map((category,i) => <a className={`topic-card topic-${i}`} href={`/${category.slug}/`} key={category.slug}>
          <span className="topic-number">0{i+1} / {category.count} {category.count===1?"GUIDE":"GUIDES"}</span>
          <span className="topic-icon" aria-hidden="true">{["↗","◈","⌘"][i]}</span>
          <h3>{category.name}</h3><p>{category.description}</p><span className="topic-link">Explore topic <b>↗</b></span>
        </a>)}</div>
      </div>
    </section>

    <section className="section wrap" id="latest">
      <div className="section-heading"><div><p className="eyebrow">FRESH PERSPECTIVES</p><h2>Latest articles</h2></div><p>New explainers and practical guides, collected in one place.</p></div>
      <div className="latest-grid">{latest.map(article => <ArticleCard key={article.slug} article={article} />)}</div>
    </section>

    <section className="contribute-light"><div className="wrap contribute-inner"><div><p className="eyebrow">HAVE SOMETHING WORTH SHARING?</p><h2>Bring your expertise<br/>to the conversation.</h2><p>Have first-hand knowledge or a useful point of view? We welcome original, well-researched articles across our three topics.</p></div><a className="button-primary" href="/write-for-us/">Write for Stackwire <span>↗</span></a></div></section>
  </main>;
}
