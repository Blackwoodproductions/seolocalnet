import { motion } from "framer-motion";
import ScrollParallax from "./ScrollParallax";
import { UserPlus, FolderOpen, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

// Hand-drawn curved arrow pointing right (with slight wobble for sketchy feel)
const CurvedArrow = ({ flip = false, delay = 0 }: { flip?: boolean; delay?: number }) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-12 text-primary"
    style={{ transform: flip ? "scaleY(-1)" : undefined }}
    aria-hidden="true"
  >
    <motion.path
      d="M5 35 C 25 5, 60 5, 90 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.6))" }}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.1, delay, ease: "easeInOut" }}
    />
    <motion.path
      d="M90 28 L 82 22 M90 28 L 84 36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.6))" }}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: delay + 1.0, ease: "easeOut" }}
    />
  </svg>
);
const steps = [{
  number: "01",
  icon: UserPlus,
  title: "Onboard Your Clients",
  description: "Add your agency clients to the platform. Each gets their own branded dashboard with your logo and colors."
}, {
  number: "02",
  icon: FolderOpen,
  title: "We Categorize & Analyze",
  description: "Every client website is categorized into our niche network. Our AI analyzes competitors and top-ranking content."
}, {
  number: "03",
  icon: Sparkles,
  title: "AI Creates Superior Content",
  description: "Our engine reverse-engineers what's working and creates content that's built to outrank the competition."
}, {
  number: "04",
  icon: TrendingUp,
  title: "Automated Links & Rankings",
  description: "Relevant backlinks flow automatically from our network of 1000s of real business sites. Watch rankings climb."
}];
const HowItWorks = () => {
  return <section id="how-it-works" className="py-32 relative overflow-hidden bg-secondary/30">
      {/* Top Border Gradient */}
      <ScrollParallax speed={-0.1} className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <ScrollParallax speed={-0.25} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

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
      }} className="text-center mb-20">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary text-glow-cyan">SEOLOCAL</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get your agency up and running with the most powerful white-label SEO platform in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.15
          }} className="relative">
                <div className="glass-card rounded-2xl p-8 text-center h-full relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-accent flex items-center justify-center opacity-100 shadow-none rounded-full mx-0 my-0 px-0 py-0">
                    <span className="text-primary-foreground font-bold text-base">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-[#754ee9]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hand-drawn curved arrow to next step (desktop only, not after last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 w-12 z-20 pointer-events-none">
                    <CurvedArrow flip={index % 2 === 1} delay={index * 0.2} />
                  </div>
                )}
              </motion.div>)}
          </div>
        </div>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20"
        >
          <a
            href="https://calendly.com/q-ratansi/seolocal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-futuristic flex items-center gap-2 text-lg text-primary-foreground"
          >
            Book A Demo
            <ArrowRight size={20} />
          </a>
          <a href="#platform" className="btn-outline-glow flex items-center gap-2 text-lg">
            See The Platform
          </a>
        </motion.div>
      </div>
    </section>;
};
export default HowItWorks;