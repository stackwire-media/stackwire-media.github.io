"use client";
import { useMemo, useState } from "react";
import { articles } from "../../data/articles";

export default function SearchPanel() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return articles.map(article => {
      const haystack = (article.title + " " + article.category + " " + article.description).toLowerCase();
      const score = words.reduce((total, word) => total + (haystack.includes(word) ? 1 : 0), 0);
      return { ...article, score };
    }).filter(article => article.score > 0).sort((a, b) => b.score - a.score);
  }, [query]);
  return <main id="main" className="search-main"><div className="search-shell">
    <p className="eyebrow">THE STACKWIRE LIBRARY</p><h1>Find a useful answer.</h1>
    <p className="search-intro">Search practical guides across finance, crypto, SaaS and AI.</p>
    <label className="search-label" htmlFor="site-query">What are you looking for?</label>
    <input id="site-query" className="search-input" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try “AI pricing” or “payment processor”" autoComplete="off" />
    <p className="search-count" aria-live="polite">{query.trim() ? \`\${results.length} \${results.length === 1 ? "guide" : "guides"} found\` : "Start typing to search all 10 guides."}</p>
    {query.trim() && results.length === 0 ? <p className="search-empty">No matching guides yet. Try a broader term such as AI, payments, pricing or crypto.</p> : null}
    <ul className="search-results">{results.map(article => <li key={article.slug}><span>{article.category}</span><h2><a href={\`/\${article.slug}/\`}>{article.title}</a></h2><p>{article.description}</p></li>)}</ul>
  </div></main>;
}
