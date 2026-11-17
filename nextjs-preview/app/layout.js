import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://stackwiremedia.com"),
  title: { default: "Stackwire | Practical insight on finance, crypto and AI", template: "%s | Stackwire" },
  description: "Practical guides on finance and fintech, crypto and Web3, SaaS and AI for founders, operators and curious readers.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Stackwire", title: "Stackwire | Practical insight on finance, crypto and AI", description: "Practical guides for founders, operators and curious readers.", url: "https://stackwiremedia.com/", images: ["/images/stackwire-social-card.png"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.png", type: "image/png" }] }
};

function Brand() {
  return <a className="brand" href="/" aria-label="Stackwire home"><img src="/favicon.svg" width="38" height="38" alt="" /><span>STACK<span className="brand-light">WIRE</span></span></a>;
}
function Header() {
  return <header className="site-header"><div className="header-inner"><Brand /><nav aria-label="Main navigation"><a href="/">Home</a><a href="/finance/">Finance</a><a href="/crypto/">Crypto</a><a href="/saas-ai/">SaaS & AI</a><a href="/about/">About</a></nav><div className="header-actions"><a href="/search.html" aria-label="Search articles">Search</a><a className="header-cta" href="/write-for-us/">Write for us <span>↗</span></a></div></div></header>;
}
function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div><Brand /><p>Clear thinking for people building what comes next.</p></div><div className="footer-links"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/editorial-policy/">Editorial policy</a><a href="/write-for-us/">Write for us</a></div><small>© {new Date().getFullYear()} Stackwire Media. For information, not financial or legal advice.</small></div></footer>;
}
export default function RootLayout({ children }) {
  return <html lang="en"><head><link rel="stylesheet" href="/style.css" /></head><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
