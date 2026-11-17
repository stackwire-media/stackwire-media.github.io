import SearchPanel from "./search-panel";
export const metadata = {
  title: "Search Stackwire",
  description: "Search practical Stackwire guides across finance, fintech, crypto, SaaS and AI.",
  alternates: { canonical: "/search/" },
  robots: { index: false, follow: true }
};
export default function SearchPage() { return <SearchPanel />; }
