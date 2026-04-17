import { motion } from "framer-motion";
import ScrollParallax from "./ScrollParallax";
import { ShieldCheck, TrendingUp, Lock } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Reliable Results",
    description: "AI-powered tools deliver consistent improvements in rankings within 30 days.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Strategies that drive traffic and ensure long-term growth and engagement.",
  },
  {
    icon: Lock,
    title: "Comprehensive Protection",
    description: "Campaigns managed with precision and transparency, keeping you ahead.",
  },
];

const Guarantee = () => {
  return (
    <section id="guarantee" className="py-32 relative overflow-hidden">
      <ScrollParallax
        speed={-0.15}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <ScrollParallax
        speed={-0.25}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Promise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary text-glow-cyan">Guarantee</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We stand behind every campaign with measurable results and full transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-[#754ee9]" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
