import "./globals.css";
import "./legacy.css";

export const metadata = {
  metadataBase: new URL("https://stackwiremedia.com"),
  title: { default: "Stackwire Media | Finance, Crypto, SaaS & AI", template: "%s | Stackwire Media" },
  description: "Independent, practical insights on finance and fintech, crypto and Web3, SaaS and AI. Clear guides for founders, operators and curious readers.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Stackwire Media", title: "Stackwire Media | Finance, Crypto, SaaS & AI", description: "Independent, practical insights on finance and fintech, crypto and Web3, SaaS and AI.", url: "https://stackwiremedia.com/", images: ["/images/stackwire-social-card.png"] },
  twitter: { card: "summary_large_image", title: "Stackwire Media | Finance, Crypto, SaaS & AI", description: "Independent, practical insights on finance, crypto, SaaS and AI.", images: ["/images/stackwire-social-card.png"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] }
};

function SiteStructuredData() {\n  const value = {\n    "@context": "https://schema.org",\n    "@graph": [\n      { "@type": "Organization", "name": "Stackwire Media", "url": "https://stackwiremedia.com/" },\n      { "@type": "WebSite", "name": "Stackwire Media", "url": "https://stackwiremedia.com/", "inLanguage": "en" }\n    ]\n  };\n  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }} />;\n}\nfunction Brand() {
  return <a className="brand" href="/" aria-label="Stackwire Media home">
    <img src="/favicon.svg" width="38" height="38" alt="" />
    <span className="brand-word">STACK<span>WIRE</span></span>
  </a>;
}
function Header() {
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="/">Home</a><a href="/finance/">Finance & Fintech</a><a href="/crypto/">Crypto & Web3</a><a href="/saas-ai/">SaaS & AI</a><a href="/about/">About</a>
      </nav>
      <div className="header-actions"><a className="search-link" href="/search/" aria-label="Search Stackwire"><span aria-hidden="true">⌕</span><b>Search</b></a><a className="header-cta" href="/write-for-us/">Write for us <span>↗</span></a></div>
    </div>
  </header>;
}
function Footer() {
  return <footer className="site-footer"><div className="footer-inner">
    <div className="footer-brand"><Brand /><p>Independent ideas and practical insight for a changing world.</p></div>
    <div className="footer-links"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/write-for-us/">Write for us</a><a href="/editorial-policy/">Editorial policy</a><a href="/privacy/">Privacy</a></div>
    <small>© {new Date().getFullYear()} Stackwire Media. Information is for general educational purposes and is not financial or legal advice.</small>
  </div></footer>;
}
export default function RootLayout({ children }) {
  return <html lang="en"><body><SiteStructuredData /><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
