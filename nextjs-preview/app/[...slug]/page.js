import { notFound } from "next/navigation";
import { articles, categories } from "../../data/articles";

export function generateStaticParams() {
  return categories.map(category => ({ slug: [category.slug] }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find(item => item.slug === slug.join("/"));
  return category ? { title: category.name, description: category.description, alternates: { canonical: `/${category.slug}/` } } : {};
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categories.find(item => item.slug === slug.join("/"));
  if (!category) notFound();
  const items = articles.filter(article => article.category === category.name);
  return <main id="main"><section className={`category-hero ${category.tone}`}><div className="wrap"><p className="eyebrow">THE STACKWIRE DESK / 0{categories.indexOf(category) + 1}</p><h1>{category.name}</h1><p>{category.description}</p></div></section><section className="section wrap"><div className="section-heading"><div><p className="eyebrow">THE READING LIST</p><h2>{items.length} practical {items.length === 1 ? "guide" : "guides"}</h2></div></div><div className="latest-list">{items.map((article, i) => <a href={`https://stackwiremedia.com/${article.slug}/`} className="latest-item" key={article.slug}><span className="latest-index">{String(i + 1).padStart(2, "0")}</span><span className="latest-category">{article.category}</span><span className="latest-title">{article.title}<small>{article.description}</small></span><span className="latest-date">{article.date}</span><span className="latest-arrow">↗</span></a>)}</div></section></main>;
}
