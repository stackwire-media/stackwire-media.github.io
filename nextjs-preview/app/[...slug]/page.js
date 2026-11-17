import { notFound } from "next/navigation";
import articles from "../../data/articles-content.json";
import sitePages from "../../data/pages-content.json";

const categories = sitePages.categories;
const pages = sitePages.pages;
const articleMap = Object.fromEntries(articles.map(item => [item.slug, item]));
const pageMap = Object.fromEntries(pages.map(item => [item.slug, item]));
const categoryMap = Object.fromEntries(categories.map(item => [item.slug, item]));

export function generateStaticParams() {
  return [
    ...articles.map(item => ({ slug: [item.slug] })),
    ...pages.map(item => ({ slug: [item.slug] })),
    ...categories.map(item => ({ slug: [item.slug] }))
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const key = slug.join("/");
  const item = articleMap[key] || pageMap[key];
  if (item) return {
    title: item.title,
    description: item.description,
    alternates: { canonical: item.canonical },
    openGraph: { title: item.ogTitle || item.title, description: item.ogDesc || item.description, url: item.canonical, type: articleMap[key] ? "article" : "website", images: ["/images/stackwire-social-card.png"] }
  };
  const category = categoryMap[key];
  if (category) {
    const label = key === "finance" ? "Finance and fintech" : key === "crypto" ? "Crypto and web3" : "SaaS and AI";
    return { title: label, alternates: { canonical: `/${key}/` } };
  }
  notFound();
}

function StructuredData({ value }) {
  if (!value) return null;
  let parsed;
  try { parsed = JSON.parse(value); } catch { return null; }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parsed) }} />;
}

export default async function ContentPage({ params }) {
  const { slug } = await params;
  const key = slug.join("/");
  const article = articleMap[key];
  const page = pageMap[key];
  const category = categoryMap[key];
  if (!article && !page && !category) notFound();
  const item = article || page;
  const rawBody = article ? article.body : page ? page.body : category.main;
  const body = article ? rawBody : rawBody.replace(/^<main\b[^>]*>/i, "").replace(/<\/main>\s*$/i, "");
  return <main id="main" className={article ? "legacy-content article-page" : "legacy-content"}>
    {item ? <StructuredData value={item.schema} /> : null}
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </main>;
}
