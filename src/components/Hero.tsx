import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, TrendingUp, Rocket, Calendar, Network, Clock, BadgePercent } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import StarField from "./StarField";
import CountUp from "./CountUp";
const Hero = () => {
  return <section className="relative flex flex-col items-center justify-center overflow-hidden pt-40 pb-32" style={{ backgroundColor: '#030608', minHeight: '100vh' }}>
      {/* Outer space starfield background */}
      <StarField />

      {/* Soft, slow-drifting pastel auras (inspired by hashtag.org) */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 900, height: 900,
          background: 'radial-gradient(circle, hsl(210 90% 70% / 0.10), transparent 65%)',
          filter: 'blur(120px)', top: '5%', left: '-10%',
        }}
        animate={{ x: [0, 40, -30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 800, height: 800,
          background: 'radial-gradient(circle, hsl(25 95% 72% / 0.07), transparent 65%)',
          filter: 'blur(130px)', bottom: '-10%', left: '20%',
        }}
        animate={{ x: [0, -35, 30, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 850, height: 850,
          background: 'radial-gradient(circle, hsl(290 80% 72% / 0.08), transparent 65%)',
          filter: 'blur(130px)', top: '15%', right: '-12%',
        }}
        animate={{ x: [0, -40, 25, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Animated connecting dots */}
      <ParticleNetwork />

      {/* Decorative lines */}
      <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Subtle launching rocket behind hero text */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{ top: '52%' }}
        initial={{ y: 280, opacity: 0 }}
        animate={{ y: [-260, -260, 280, 280], opacity: [0, 0.18, 0.18, 0] }}
        transition={{
          duration: 14,
          times: [0, 0.15, 0.85, 1],
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 4,
        }}
      >
        <div className="relative flex flex-col items-center">
          <Rocket className="w-16 h-16 md:w-20 md:h-20 text-primary/40 -rotate-12" strokeWidth={1.2} />
          {/* Exhaust trail */}
          <div
            className="w-1.5 md:w-2 mt-1 rounded-full"
            style={{
              height: 220,
              background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.25), hsl(var(--accent) / 0.1), transparent)',
              filter: 'blur(6px)',
            }}
          />
        </div>
      </motion.div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-sm font-medium">Trusted by Thousands of Agencies</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8">
            <span className="text-white">SEO Under </span>
            <motion.span
              className="text-accent text-glow-accent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Your Brand.
            </motion.span>
            <br />
            <span className="text-white">Built for Agencies.</span>
            <br />
            <span className="text-primary text-glow-cyan">Ready to Scale.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            White-label SEO platform with AI-powered content, automated niche backlinks
            from 3,000+ real business sites, and measurable results in just 10 days.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a href="https://calendly.com/q-ratansi/seolocal" target="_blank" rel="noopener noreferrer" className="btn-futuristic flex items-center gap-2 text-lg text-primary-foreground">
              Book A Demo
              <ArrowRight size={20} />
            </a>
            <a href="#platform" className="btn-outline-glow flex items-center gap-2 text-lg">
              See The Platform
            </a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {[{
            icon: Zap,
            text: "AI Content Engine"
          }, {
            icon: Globe,
            text: "Automated Backlinks"
          }, {
            icon: TrendingUp,
            text: "Rank Tracking"
          }].map((feature, index) => <div key={index} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
                <feature.icon size={16} className="text-accent" />
            <span className="text-white/70 text-sm font-medium">{feature.text}</span>
              </div>)}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{
            value: "6+",
            label: "Years of SEO Innovation"
          }, {
            value: "3,167+",
            label: "Domains in Our Network"
          }, {
            value: "10",
            label: "Days to First Results"
          }, {
            value: "25%",
            label: "Cheaper Than Agencies"
          }].map((stat, index) => <div key={index} className="bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-xl p-8 text-center">
                <CountUp value={stat.value} className="stat-value text-4xl md:text-5xl mb-2 block" />
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>)}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="relative z-10 mt-2 mb-2 flex justify-center">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ zIndex: 20 }}>
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-32 md:h-48 block">
          <path
            d="M0,200 L0,180 Q300,160 600,110 T1200,10 L1200,200 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>;

};
export default Hero;