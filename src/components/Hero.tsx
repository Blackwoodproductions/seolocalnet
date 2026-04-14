import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
const Hero = () => {
  return <section className="relative flex flex-col items-center justify-center overflow-hidden pt-40 pb-32" style={{ backgroundColor: '#030608', minHeight: '100vh' }}>
      {/* Circular blur animations */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(197 85% 51% / 0.4), transparent 70%)', filter: 'blur(80px)', top: '10%', left: '15%' }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(205 90% 45% / 0.5), transparent 70%)', filter: 'blur(100px)', bottom: '15%', right: '10%' }}
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -20, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(197 85% 60% / 0.5), transparent 70%)', filter: 'blur(90px)', top: '40%', right: '35%' }}
        animate={{ x: [0, 30, -50, 0], y: [0, -60, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Animated connecting dots */}
      <ParticleNetwork />

      {/* Decorative lines */}
      <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      

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
            <span className="text-primary text-sm font-medium">22+ Years of SEO Innovation</span>
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
             <span className="text-white">The Only </span>
            <motion.span
              className="text-accent text-glow-accent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              White Label SEO
            </motion.span>
            <br />
            <span className="text-white">Platform You'll Ever Need</span>
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
            AI-powered content that reverse-engineers your competition. Automated niche linking 
            from thousands of categorized real business sites.
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
            <a href="#demo" className="btn-futuristic flex items-center gap-2 text-lg text-primary-foreground">
              Start Free Trial
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
            value: "500+",
            label: "Agency Partners"
          }, {
            value: "22",
            label: "Years Experience"
          }, {
            value: "1M+",
            label: "Keywords Ranked"
          }, {
            value: "10K+",
            label: "Client Websites"
          }].map((stat, index) => <div key={index} className="bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="stat-value text-4xl md:text-5xl mb-2">{stat.value}</div>
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
    }} className="relative z-10 mt-5 mb-5 flex justify-center">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ zIndex: 20 }}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <polygon points="0,80 0,80 1200,30 1200,80" className="fill-background" />
        </svg>
      </div>
    </section>;

};
export default Hero;