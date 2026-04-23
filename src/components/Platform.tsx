import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollParallax from "./ScrollParallax";
import { Check, Play, TrendingUp, Search, Link2, MapPin } from "lucide-react";
const platformFeatures = ["Full white-label dashboard with your branding", "Real-time keyword ranking across all major search engines", "AI-powered competitor content analysis", "Automated citation and backlink building", "Detailed analytics and visitor tracking", "Google My Business integration", "Multi-search engine rank tracking (Google, Yahoo, Bing)", "Map Pack, Rich Snippet, and AI Overview monitoring"];

const AnalyticsScreen = () => (
  <div className="p-6 space-y-4">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-sm font-semibold text-foreground">Analytics Overview</div>
        <div className="text-xs text-muted-foreground mt-1">Last 30 days</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
        <TrendingUp className="w-5 h-5 text-primary" />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-3">
      {[
        { value: "4.2K", label: "Views", trend: "+100%" },
        { value: "3.4K", label: "Visits", trend: "+87%" },
        { value: "3.1K", label: "Visitors", trend: "+72%" },
        { value: "0:16", label: "Duration", trend: "+24%" },
      ].map((stat, i) => (
        <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="text-lg font-bold text-foreground">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
          <div className="text-xs text-primary mt-1">↑ {stat.trend}</div>
        </div>
      ))}
    </div>
    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
      <div className="flex items-end gap-1 h-24">
        {[40, 65, 55, 80, 70, 90, 75, 85, 95, 70, 85, 100].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col gap-0.5">
            <div className="bg-gradient-to-t from-primary to-primary/50 rounded-t" style={{ height: `${height * 0.6}%` }} />
            <div className="bg-gradient-to-t from-accent/60 to-accent/30 rounded-t" style={{ height: `${height * 0.4}%` }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RankTrackingScreen = () => (
  <div className="p-6 space-y-4">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-sm font-semibold text-foreground">Keyword Rankings</div>
        <div className="text-xs text-muted-foreground mt-1">Google · Bing · Yahoo</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <Search className="w-5 h-5 text-accent" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        { value: "119", label: "Top 10", trend: "+12" },
        { value: "284", label: "Top 50", trend: "+38" },
        { value: "47", label: "Map Pack", trend: "+9" },
      ].map((stat, i) => (
        <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="text-lg font-bold text-foreground">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
          <div className="text-xs text-primary mt-1">↑ {stat.trend}</div>
        </div>
      ))}
    </div>
    <div className="space-y-2">
      {[
        { kw: "local seo agency", rank: "Top 3", change: "↑ 5" },
        { kw: "white label seo", rank: "Top 10", change: "↑ 2" },
        { kw: "seo dashboard", rank: "Top 5", change: "↑ 8" },
        { kw: "rank tracker tool", rank: "Top 10", change: "↑ 3" },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 border border-border">
          <div className="flex-1 text-xs text-foreground truncate">{row.kw}</div>
          <div className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium">{row.rank}</div>
          <div className="text-xs text-primary w-8 text-right">{row.change}</div>
        </div>
      ))}
    </div>
  </div>
);

const CitationsScreen = () => (
  <div className="p-6 space-y-4">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-sm font-semibold text-foreground">Citation Builder</div>
        <div className="text-xs text-muted-foreground mt-1">Automated backlinks</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
        <Link2 className="w-5 h-5 text-primary" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[
        { value: "100", label: "Citations Built", trend: "+24 this week" },
        { value: "98%", label: "Live Rate", trend: "Verified" },
      ].map((stat, i) => (
        <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="text-lg font-bold text-foreground">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
          <div className="text-xs text-primary mt-1">{stat.trend}</div>
        </div>
      ))}
    </div>
    <div className="space-y-2">
      {[
        { src: "Yelp", status: "Live", da: "DA 93" },
        { src: "Yellow Pages", status: "Live", da: "DA 86" },
        { src: "Apple Maps", status: "Live", da: "DA 100" },
        { src: "Bing Places", status: "Live", da: "DA 95" },
        { src: "Foursquare", status: "Pending", da: "DA 91" },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
          <div className="w-7 h-7 rounded bg-primary/20 flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex-1 text-xs text-foreground">{row.src}</div>
          <div className="text-xs text-muted-foreground">{row.da}</div>
          <div className={`px-2 py-1 rounded text-xs font-medium ${row.status === "Live" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>
            {row.status}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const screens = [
  { id: "analytics", label: "Analytics", url: "youragency.com/analytics", Component: AnalyticsScreen },
  { id: "rankings", label: "Rank Tracking", url: "youragency.com/rankings", Component: RankTrackingScreen },
  { id: "citations", label: "Citations", url: "youragency.com/citations", Component: CitationsScreen },
];
const Platform = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ActiveScreen = screens[activeIndex].Component;

  return <section id="platform" className="py-32 relative overflow-hidden">
      {/* Background */}
      <ScrollParallax speed={-0.1} className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <ScrollParallax speed={-0.3} className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <ScrollParallax speed={-0.2} className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              The Platform
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              A Dashboard Your Clients Will{" "}
              <span className="text-primary text-glow-cyan">Love</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our platform is the result of 22 years of development and feedback from 
              hundreds of agencies. It's designed to impress your clients while giving 
              you the tools to deliver real results.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {platformFeatures.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.05
            }} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>)}
            </div>

            {/* CTA */}
            <a href="#demo" className="btn-futuristic inline-flex items-center gap-2 text-primary-foreground">
              <Play size={18} />
              Watch Demo
            </a>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            
            {/* Dashboard Mockup */}
            <div className="relative gradient-border rounded-2xl overflow-hidden">
              <div className="bg-card p-1">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                    <div className="w-3 h-3 rounded-full bg-accent/60"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={screens[activeIndex].url}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs"
                      >
                        {screens[activeIndex].url}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Slideshow Content */}
                <div className="relative min-h-[440px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={screens[activeIndex].id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <ActiveScreen />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Indicators */}
                <div className="flex items-center justify-center gap-2 pb-4 pt-2 border-t border-border">
                  {screens.map((screen, i) => (
                    <button
                      key={screen.id}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Show ${screen.label}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity
          }} className="absolute -top-4 -right-4 glass-card rounded-xl p-4 border-glow-cyan">
              <div className="text-2xl font-bold text-primary">119</div>
              <div className="text-xs text-muted-foreground">Keywords in Top 10</div>
            </motion.div>

            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity
          }} className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 border-glow-gold">
              <div className="text-2xl font-bold text-accent">100</div>
              <div className="text-xs text-muted-foreground">Citation Links Built</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Platform;