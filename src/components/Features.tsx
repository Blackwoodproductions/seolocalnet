import { motion } from "framer-motion";
import { Brain, Link2, BarChart3, Users, Layers, Shield } from "lucide-react";
const features = [{
  icon: Brain,
  title: "AI Content Engine",
  description: "Our AI analyzes your top 5 competitors and the top 5 ranking articles for each keyword, then creates superior content that's engineered to outrank them.",
  highlight: "Reverse-Engineer the Competition"
}, {
  icon: Link2,
  title: "Automated Niche Linking",
  description: "Every client website is categorized into our network of 1000s of real business sites, enabling automatic, highly relevant backlink acquisition.",
  highlight: "Real Business Backlinks"
}, {
  icon: BarChart3,
  title: "Real-Time Rank Tracking",
  description: "Monitor rankings across Google, Yahoo, and Bing with comprehensive reports including Map Pack, Rich Snippets, and AI Overview tracking.",
  highlight: "Multi-Search Engine Tracking"
}, {
  icon: Users,
  title: "Complete White Labeling",
  description: "Your brand, your platform. Fully rebrandable dashboard that your clients will think you built yourself. Zero mention of our name anywhere.",
  highlight: "100% Your Brand"
}, {
  icon: Layers,
  title: "Wholesale Pricing",
  description: "Buy at wholesale, sell at retail. We give you the tools and the margins to build a profitable SEO business.",
  highlight: "Built for Agencies"
}, {
  icon: Shield,
  title: "22 Years of Trust",
  description: "We've been perfecting this platform since before SEO was mainstream. Our technology is battle-tested and continuously evolving.",
  highlight: "Industry Veterans"
}];
const Features = () => {
  return <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Why Choose SEOLOCAL
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technology That{" "}
            <span className="text-primary text-glow-cyan">Dominates</span> Rankings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No one else has what we've built over 22 years. Our platform doesn't guess—it 
            reverse-engineers exactly what Google wants.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group">
              <div className="h-full glass-card rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:border-glow-cyan">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 bg-black/0 text-[#754ee9]" />
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                  {feature.highlight}
                </span>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Features;