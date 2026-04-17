import { motion } from "framer-motion";
import ScrollParallax from "./ScrollParallax";
import { Brain, Layers, FileText, BarChart3 } from "lucide-react";
const features = [{
  icon: Brain,
  title: "Custom AI-Powered SEO Strategies",
  description: "Tailored AI-driven strategies designed to meet your business goals and maximize your online visibility across every channel.",
  highlight: "Tailored Strategy"
}, {
  icon: Layers,
  title: "Comprehensive On-Page Optimization",
  description: "Advanced AI tools ensure your website's structure, content, and keywords are fully optimized for search engines.",
  highlight: "Full-Stack Optimization"
}, {
  icon: FileText,
  title: "Content Creation & Marketing",
  description: "Generate high-quality, SEO-rich content that attracts your target audience and establishes your brand authority.",
  highlight: "AI Content Engine"
}, {
  icon: BarChart3,
  title: "Rapid Results & Transparent Reporting",
  description: "Experience noticeable improvements within 30 days with clear, detailed reporting on every campaign metric.",
  highlight: "Results in 30 Days"
}];
const Features = () => {
  return <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <ScrollParallax speed={-0.15} className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <ScrollParallax speed={-0.3} className="absolute inset-0 bg-gradient-radial opacity-50" />

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
            AI-Powered Tools for{" "}
            <span className="text-primary text-glow-cyan">SEO Dominance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cutting-edge AI tools to optimize, create, and manage your entire SEO strategy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <div className="h-full glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:border-primary cursor-pointer hover:shadow-[0_20px_60px_hsl(var(--primary)/0.45)]">
                {/* Header row: badge + title on left, icon on right */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    {/* Highlight Badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3 transition-colors duration-500 group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground">
                      {feature.highlight}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-foreground/15 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-[#754ee9] transition-colors duration-500 group-hover:text-primary-foreground" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed transition-colors duration-500 group-hover:text-primary-foreground/90">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Features;