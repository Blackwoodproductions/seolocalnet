import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import headshotSarah from "@/assets/headshot-sarah.jpg";
import headshotMarcus from "@/assets/headshot-marcus.jpg";
import headshotJennifer from "@/assets/headshot-jennifer.jpg";

const testimonials = [
  {
    quote: "SEOLOCAL has transformed our agency. The automated backlinks from real business sites have given our clients results we couldn't achieve before.",
    author: "Sarah Mitchell",
    role: "CEO, Digital Growth Agency",
    rating: 5,
    image: headshotSarah,
  },
  {
    quote: "We've tried every white-label SEO platform out there. Nothing comes close to the depth and automation SEOLOCAL provides. Our clients think we're geniuses.",
    author: "Marcus Chen",
    role: "Founder, Apex Marketing",
    rating: 5,
    image: headshotMarcus,
  },
  {
    quote: "The AI content engine is a game-changer. It reverse-engineers exactly what's ranking and creates better content. Our rankings have skyrocketed.",
    author: "Jennifer Parks",
    role: "Director, SEO Specialists Inc.",
    rating: 5,
    image: headshotJennifer,
  },
];

// Floating blurred headshots for background decoration
const floatingHeadshots = [
  { src: headshotSarah, top: "8%", left: "5%", size: 100, delay: 0 },
  { src: headshotMarcus, top: "15%", right: "8%", size: 120, delay: 1.5 },
  { src: headshotJennifer, bottom: "12%", left: "10%", size: 90, delay: 0.8 },
  { src: headshotSarah, bottom: "20%", right: "5%", size: 110, delay: 2 },
  { src: headshotMarcus, top: "50%", left: "2%", size: 80, delay: 1 },
  { src: headshotJennifer, top: "30%", right: "3%", size: 95, delay: 0.5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#030608" }}>
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Floating blurred headshots */}
      {floatingHeadshots.map((hs, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full overflow-hidden"
          style={{
            top: hs.top,
            left: (hs as any).left,
            right: (hs as any).right,
            bottom: (hs as any).bottom,
            width: hs.size,
            height: hs.size,
            filter: "blur(8px)",
            opacity: 0.12,
          }}
          animate={{
            y: [0, -15, 0, 10, 0],
            x: [0, 8, -5, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: hs.delay,
          }}
        >
          <img
            src={hs.src}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* SVG connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(197 85% 51%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(197 85% 51%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(197 85% 51%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 90% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(200 90% 60%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(200 90% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Diagonal connecting lines */}
        <motion.line
          x1="5%" y1="15%" x2="95%" y2="85%"
          stroke="url(#line-grad-1)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 2, delay: 0.3 }}
        />
        <motion.line
          x1="95%" y1="10%" x2="5%" y2="90%"
          stroke="url(#line-grad-2)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="50%" y1="0%" x2="50%" y2="100%"
          stroke="url(#line-grad-1)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.7 }}
        />
        <motion.line
          x1="0%" y1="50%" x2="100%" y2="50%"
          stroke="url(#line-grad-2)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.9 }}
        />
        {/* Node dots at intersections */}
        {[
          { cx: "50%", cy: "50%" },
          { cx: "25%", cy: "35%" },
          { cx: "75%", cy: "65%" },
          { cx: "75%", cy: "35%" },
          { cx: "25%", cy: "65%" },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx} cy={dot.cy} r="3"
            fill="hsl(197 85% 51%)"
            opacity={0}
            animate={{ opacity: [0, 0.4, 0.15, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Trusted by Agencies
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-accent text-glow-accent">Partners</span> Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl p-8 relative bg-white/[0.03] backdrop-blur-sm border border-white/10">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
