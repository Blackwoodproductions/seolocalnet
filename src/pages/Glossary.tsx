import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Term = { term: string; definition: string };

const glossary: Term[] = [
  { term: "301 Redirect", definition: "A permanent redirect from one URL to another that passes most link equity to the destination page." },
  { term: "302 Redirect", definition: "A temporary redirect indicating the original URL will return; passes less SEO value than a 301." },
  { term: "404 Error", definition: "An HTTP status code returned when a requested page cannot be found on the server." },
  { term: "A/B Testing", definition: "Comparing two versions of a page or element to determine which performs better against a defined goal." },
  { term: "Above the Fold", definition: "The portion of a webpage visible without scrolling; critical for first impressions and Core Web Vitals." },
  { term: "Alt Text", definition: "Descriptive text for images that aids accessibility and helps search engines understand image content." },
  { term: "Anchor Text", definition: "The clickable text in a hyperlink; relevant anchors help search engines understand the linked page's topic." },
  { term: "Authority", definition: "A site's perceived trustworthiness and expertise, often influenced by quality backlinks and content depth." },
  { term: "Backlink", definition: "An incoming link from another website; high-quality backlinks are a major ranking factor." },
  { term: "Black Hat SEO", definition: "Tactics that violate search engine guidelines to manipulate rankings, risking penalties or de-indexing." },
  { term: "Bounce Rate", definition: "The percentage of visitors who leave a site after viewing only one page." },
  { term: "Breadcrumbs", definition: "Navigational links showing a page's hierarchy, improving UX and helping search engines understand structure." },
  { term: "Cached Page", definition: "A stored snapshot of a webpage as it appeared when last crawled by a search engine." },
  { term: "Canonical Tag", definition: "An HTML tag (rel=\"canonical\") that signals the preferred version of duplicate or similar pages." },
  { term: "Citation", definition: "An online mention of a business's name, address, and phone number—important for local SEO." },
  { term: "Click-Through Rate (CTR)", definition: "The percentage of users who click a link out of the total who saw it." },
  { term: "Cloaking", definition: "A black hat technique that shows different content to search engines than to users." },
  { term: "Content Marketing", definition: "Creating and distributing valuable content to attract and retain a target audience." },
  { term: "Conversion Rate", definition: "The percentage of visitors who complete a desired action, such as a purchase or signup." },
  { term: "Core Web Vitals", definition: "Google's set of metrics measuring loading (LCP), interactivity (INP), and visual stability (CLS)." },
  { term: "Crawl Budget", definition: "The number of pages a search engine will crawl on a site within a given timeframe." },
  { term: "Crawler", definition: "An automated bot (e.g., Googlebot) that browses the web to index pages for search engines." },
  { term: "CSS", definition: "Cascading Style Sheets, used to control the visual presentation of web pages." },
  { term: "CTA (Call To Action)", definition: "A prompt encouraging users to take a specific action, such as \"Sign Up\" or \"Buy Now\"." },
  { term: "CTR", definition: "Click-Through Rate—the ratio of clicks to impressions for a link or ad." },
  { term: "Cumulative Layout Shift (CLS)", definition: "A Core Web Vital measuring unexpected layout movement during page load." },
  { term: "DA (Domain Authority)", definition: "A third-party score (Moz) predicting how well a domain may rank in search results." },
  { term: "Deep Linking", definition: "Linking to a specific internal page rather than a homepage." },
  { term: "De-indexing", definition: "Removing a page or site from a search engine's index, eliminating it from search results." },
  { term: "Disavow", definition: "Asking Google to ignore specific backlinks pointing to your site, typically to address spammy links." },
  { term: "DNS", definition: "Domain Name System, which translates domain names into IP addresses." },
  { term: "Do-Follow Link", definition: "A link that passes authority (link equity) to the destination page." },
  { term: "Domain Age", definition: "The length of time a domain has been registered; minor signal for trust." },
  { term: "Duplicate Content", definition: "Substantial blocks of content appearing on multiple URLs, which can dilute rankings." },
  { term: "E-E-A-T", definition: "Experience, Expertise, Authoritativeness, and Trustworthiness—Google's quality framework." },
  { term: "Engagement Metrics", definition: "Signals like time on page, scroll depth, and CTR used to evaluate content quality." },
  { term: "Entity", definition: "A distinct person, place, or thing recognized by search engines for semantic understanding." },
  { term: "Evergreen Content", definition: "Content that remains relevant and valuable for a long period after publication." },
  { term: "External Link", definition: "A link pointing from one domain to a different domain." },
  { term: "Featured Snippet", definition: "A highlighted answer box at the top of Google search results." },
  { term: "Footer Link", definition: "A link placed in the footer of a website; lower SEO weight than in-content links." },
  { term: "GMB / GBP (Google Business Profile)", definition: "A free Google listing that helps local businesses appear in Maps and local search." },
  { term: "Google Algorithm", definition: "The complex system Google uses to rank web pages in search results." },
  { term: "Google Analytics", definition: "A free analytics platform that tracks website traffic and user behavior." },
  { term: "Google Search Console (GSC)", definition: "A free tool for monitoring a site's presence in Google search results." },
  { term: "Gray Hat SEO", definition: "Tactics that fall between white hat and black hat—not explicitly forbidden but risky." },
  { term: "H1 Tag", definition: "The main heading on a page, signaling its primary topic to users and search engines." },
  { term: "Heading Tags (H1-H6)", definition: "HTML tags that structure content hierarchically and aid readability and SEO." },
  { term: "Hreflang", definition: "An HTML attribute specifying the language and regional targeting of a page." },
  { term: "HTTPS", definition: "A secure version of HTTP using SSL/TLS encryption; a confirmed ranking signal." },
  { term: "Impression", definition: "A count of every time a page or link appears in search results, regardless of clicks." },
  { term: "Index", definition: "The database of web pages a search engine has crawled and stored for retrieval." },
  { term: "Indexability", definition: "Whether a page can be added to a search engine's index." },
  { term: "Internal Link", definition: "A link from one page to another on the same domain; helps distribute link equity." },
  { term: "JavaScript SEO", definition: "Optimizing JavaScript-powered sites so search engines can crawl and render them properly." },
  { term: "Keyword", definition: "A word or phrase users type into search engines that pages target for ranking." },
  { term: "Keyword Cannibalization", definition: "When multiple pages on a site compete for the same keyword, hurting rankings." },
  { term: "Keyword Density", definition: "The percentage of times a keyword appears relative to total words on a page." },
  { term: "Keyword Difficulty", definition: "A score estimating how hard it is to rank for a particular keyword." },
  { term: "Keyword Research", definition: "Identifying search terms people use to find topics relevant to your business." },
  { term: "Keyword Stuffing", definition: "Overusing keywords unnaturally; a black hat tactic that can trigger penalties." },
  { term: "Landing Page", definition: "A standalone page designed for a specific marketing or search intent." },
  { term: "Largest Contentful Paint (LCP)", definition: "A Core Web Vital measuring how quickly the largest visible element loads." },
  { term: "Latent Semantic Indexing (LSI)", definition: "Related terms and synonyms that help search engines understand content context." },
  { term: "Link Building", definition: "The practice of acquiring backlinks from other websites to improve authority and rankings." },
  { term: "Link Equity", definition: "The value or authority a link passes from one page to another (also called link juice)." },
  { term: "Link Farm", definition: "A group of sites created solely to link to each other—against search engine guidelines." },
  { term: "Local Pack", definition: "The map and three local business listings shown in Google for local queries." },
  { term: "Local SEO", definition: "Optimizing a business's online presence to attract customers from relevant local searches." },
  { term: "Long-Tail Keyword", definition: "A longer, more specific keyword phrase with lower competition and clearer intent." },
  { term: "Meta Description", definition: "An HTML attribute summarizing a page's content; influences CTR but not rankings directly." },
  { term: "Meta Tags", definition: "HTML tags providing metadata about a webpage, such as title and description." },
  { term: "Mobile-First Indexing", definition: "Google primarily uses the mobile version of a site for indexing and ranking." },
  { term: "NAP", definition: "Name, Address, and Phone number—must be consistent across web listings for local SEO." },
  { term: "Negative SEO", definition: "Malicious tactics aimed at lowering a competitor's rankings, such as spammy backlinks." },
  { term: "No-Follow Link", definition: "A link with rel=\"nofollow\" that signals search engines not to pass authority." },
  { term: "Noindex", definition: "A meta directive instructing search engines not to include a page in their index." },
  { term: "Off-Page SEO", definition: "Optimization activities outside your own website, like link building and brand mentions." },
  { term: "On-Page SEO", definition: "Optimizing elements on your own pages, such as content, headings, and internal links." },
  { term: "Organic Traffic", definition: "Visitors who arrive at a site through unpaid search engine results." },
  { term: "Orphan Page", definition: "A page with no internal links pointing to it, making it hard to discover and index." },
  { term: "PageRank", definition: "Google's original algorithm measuring page importance based on backlink quantity and quality." },
  { term: "Page Speed", definition: "How quickly a webpage loads; a confirmed ranking and UX factor." },
  { term: "PBN (Private Blog Network)", definition: "A network of websites built to manipulate rankings through backlinks—against guidelines." },
  { term: "Permalink", definition: "The permanent URL of a specific page or post on a website." },
  { term: "PPC", definition: "Pay-Per-Click advertising, where advertisers pay each time someone clicks an ad." },
  { term: "Pogo-Sticking", definition: "When users quickly return to search results after clicking a result—signals dissatisfaction." },
  { term: "Rank", definition: "The position a page holds in search engine results for a given query." },
  { term: "Rank Tracking", definition: "Monitoring keyword positions in search results over time." },
  { term: "Redirect Chain", definition: "Multiple redirects between an initial URL and the final destination; hurts performance and SEO." },
  { term: "Referral Traffic", definition: "Visitors arriving at a site through a link from another website." },
  { term: "Render Blocking", definition: "Resources (CSS/JS) that delay page rendering and harm Core Web Vitals." },
  { term: "Reverse Engineering", definition: "Analyzing competitors' strategies to understand and improve your own SEO." },
  { term: "Rich Snippet", definition: "Enhanced search results showing extra info like ratings, prices, or images via structured data." },
  { term: "Robots.txt", definition: "A file telling search engine crawlers which pages or sections to access or avoid." },
  { term: "ROI", definition: "Return on Investment—a measure of profitability from SEO or marketing efforts." },
  { term: "Schema Markup", definition: "Structured data vocabulary helping search engines understand page content for rich results." },
  { term: "SERP", definition: "Search Engine Results Page—the page displayed after a user enters a query." },
  { term: "SERP Features", definition: "Special elements on SERPs like featured snippets, local packs, and knowledge panels." },
  { term: "Sitelinks", definition: "Additional links shown beneath a main result, leading to popular pages on the same site." },
  { term: "Sitemap", definition: "A file listing a site's pages to help search engines discover and crawl content." },
  { term: "Site Speed", definition: "The overall loading performance of a website; impacts ranking and conversions." },
  { term: "SSL Certificate", definition: "A digital certificate enabling HTTPS, encrypting data between server and browser." },
  { term: "Structured Data", definition: "Standardized formats (often Schema.org) used to annotate page content for search engines." },
  { term: "Subdomain", definition: "A prefixed division of a domain (e.g., blog.example.com) often treated as a separate site." },
  { term: "Subfolder", definition: "A directory within a domain (e.g., example.com/blog), generally preferred for SEO consolidation." },
  { term: "Taxonomy", definition: "The classification structure used to organize site content (categories, tags, etc.)." },
  { term: "Technical SEO", definition: "Optimization of crawlability, indexability, performance, and site architecture." },
  { term: "Time on Page", definition: "How long visitors spend on a page; a possible engagement signal." },
  { term: "Title Tag", definition: "The HTML element specifying a page's title; shown in browser tabs and SERPs." },
  { term: "Topical Authority", definition: "Perceived expertise on a subject earned through comprehensive, high-quality content." },
  { term: "Traffic", definition: "The volume of visitors to a website over a period of time." },
  { term: "URL", definition: "Uniform Resource Locator—the address of a resource on the web." },
  { term: "URL Slug", definition: "The portion of a URL identifying a specific page in human-readable form." },
  { term: "User Intent", definition: "The goal behind a user's search query (informational, navigational, transactional, etc.)." },
  { term: "UX (User Experience)", definition: "The overall experience a user has interacting with a website, increasingly tied to SEO." },
  { term: "Voice Search", definition: "Searches performed by speaking to a device; favors natural language and long-tail queries." },
  { term: "Web Crawler", definition: "An automated program that systematically browses the web to index pages." },
  { term: "White Hat SEO", definition: "Ethical SEO techniques that comply with search engine guidelines." },
  { term: "XML Sitemap", definition: "A machine-readable file listing URLs to help search engines crawl a site efficiently." },
  { term: "Zero-Click Search", definition: "A search where the user gets the answer directly on the SERP without clicking a result." },
];

const Glossary = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, Term[]>();
    for (const t of filtered) {
      const letter = /^[a-z]/i.test(t.term[0]) ? t.term[0].toUpperCase() : "#";
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(t);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const letters = grouped.map(([l]) => l);

  // Pagination logic
  const paginatedGrouped = useMemo(() => {
    if (query) return grouped; // Show all when searching
    
    let allTerms: { letter: string; term: Term }[] = [];
    for (const [letter, terms] of grouped) {
      for (const term of terms) {
        allTerms.push({ letter, term });
      }
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageTerms = allTerms.slice(startIndex, endIndex);
    
    // Re-group by letter for display
    const map = new Map<string, Term[]>();
    for (const { letter, term } of pageTerms) {
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(term);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [grouped, currentPage, query]);

  const totalItems = useMemo(() => {
    return grouped.reduce((acc, [, terms]) => acc + terms.length, 0);
  }, [grouped]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Reset to page 1 when searching
  useMemo(() => {
    if (query) setCurrentPage(1);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <p className="text-primary font-medium mb-2">Resources</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          SEO Glossary
        </h1>
        <p className="text-muted-foreground mb-8">
          A comprehensive A–Z reference of essential SEO terms and their meanings.
        </p>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search terms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            aria-label="Search glossary"
          />
        </div>

        {/* Alphabet Nav - only show letters on current page when not searching */}
        {letters.length > 0 && !query && (
          <nav
            aria-label="Glossary alphabet"
            className="flex flex-wrap gap-2 mb-12 p-4 rounded-xl border border-border bg-card sticky top-20 z-10 backdrop-blur"
          >
            {paginatedGrouped.map(([l]) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        )}

        {/* Terms */}
        {paginatedGrouped.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">
            No terms found matching "{query}".
          </p>
        ) : (
          <>
            <div className="space-y-12">
              {paginatedGrouped.map(([letter, terms]) => (
                <section key={letter} id={`letter-${letter}`} className="scroll-mt-32">
                  <h2 className="text-3xl font-display font-bold text-primary mb-6 pb-2 border-b border-border">
                    {letter}
                  </h2>
                  <dl className="space-y-6">
                    {terms.map((t) => (
                      <div
                        key={t.term}
                        className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
                      >
                        <dt className="font-display font-semibold text-foreground mb-1">
                          {t.term}
                        </dt>
                        <dd className="text-muted-foreground text-sm leading-relaxed">
                          {t.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>

            {/* Pagination */}
            {!query && totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} terms
                </p>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show first page, last page, current page, and pages around current
                      const shouldShow = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                      const showEllipsisBefore = page > 2 && page === currentPage - 1 && currentPage > 3;
                      const showEllipsisAfter = page < totalPages - 1 && page === currentPage + 1 && currentPage < totalPages - 2;

                      if (!shouldShow) return null;

                      return (
                        <PaginationItem key={page}>
                          {showEllipsisBefore && <PaginationEllipsis />}
                          <PaginationLink
                            onClick={() => setCurrentPage(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                          {showEllipsisAfter && <PaginationEllipsis />}
                        </PaginationItem>
                      );
                    })}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
