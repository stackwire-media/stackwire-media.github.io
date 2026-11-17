import articleContent from "./articles-content.json";

const categoryBySlug = {
  "merchant-account": "Finance & Fintech",
  "usdc-payments-for-businesses": "Finance & Fintech",
  "choosing-a-payment-processor": "Finance & Fintech",
  "payment-gateway-vs-payment-processor": "Finance & Fintech",
  "stablecoin-rules-us-founders": "Crypto & Web3",
  "ai-agent-payments-safely": "SaaS & AI",
  "calculating-ai-api-costs": "SaaS & AI",
  "ai-agent-cost-per-task": "SaaS & AI",
  "rag-vs-fine-tuning": "SaaS & AI",
  "pricing-ai-features-saas": "SaaS & AI"
};

export const articles = articleContent.map(item => ({
  slug: item.slug,
  category: categoryBySlug[item.slug],
  title: item.title.replace(/\s*\|\s*Stackwire$/, ""),
  description: item.description,
  date: new Date(item.date + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}));

export const categories = [
  { name: "Finance & Fintech", slug: "finance", description: "Payments, lending and financial infrastructure. Clear explanations for people building and running businesses.", count: 4, tone: "finance" },
  { name: "Crypto & Web3", slug: "crypto", description: "Stablecoins, digital assets and regulation, explained without hype or price predictions.", count: 1, tone: "crypto" },
  { name: "SaaS & AI", slug: "saas-ai", description: "AI products, software economics, automation and the decisions behind better products.", count: 5, tone: "saas" }
];
