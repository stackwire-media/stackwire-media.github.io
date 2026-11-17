import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://stackwiremedia.com"),
  title: { default: "Stackwire — Clear thinking on finance, crypto and software", template: "%s | Stackwire" },
  description: "Practical guides on finance, fintech, crypto, SaaS and AI for founders, operators and curious readers.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Stackwire", title: "Stackwire — Clear thinking on finance, crypto and software", description: "Practical guides for founders, operators and curious readers.", url: "https://stackwiremedia.com/" },
  icons: { icon: "/favicon.png" }
};

function Brand() {
  return <a className="brand" href="/" aria-label="Stackwire home"><span className="brand-mark">S</span><span>STACK<span className="brand-light">WIRE</span></span></a>;
}

function Header() {
  return <header className="site-header"><div className="header-inner"><Brand /><nav aria-label="Main navigation"><a href="/">Home</a><a href="/finance/">Finance</a><a href="/crypto/">Crypto</a><a href="/saas-ai/">SaaS & AI</a><a href="https://stackwiremedia.com/about/">About</a></nav><a className="header-cta" href="https://stackwiremedia.com/write-for-us/">Write for us <span>↗</span></a></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div><Brand /><p>Clear thinking for people building what comes next.</p></div><div className="footer-links"><a href="https://stackwiremedia.com/about/">About</a><a href="https://stackwiremedia.com/contact/">Contact</a><a href="https://stackwiremedia.com/privacy/">Privacy</a><a href="https://stackwiremedia.com/editorial-policy/">Editorial policy</a></div><small>© {new Date().getFullYear()} Stackwire Media. For information, not financial or legal advice.</small></div></footer>;
}

export default function RootLayout({ children }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
