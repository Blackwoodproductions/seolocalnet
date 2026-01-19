import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
const testimonials = [{
  quote: "SEOLOCAL has transformed our agency. The automated backlinks from real business sites have given our clients results we couldn't achieve before.",
  author: "Sarah Mitchell",
  role: "CEO, Digital Growth Agency",
  rating: 5
}, {
  quote: "We've tried every white-label SEO platform out there. Nothing comes close to the depth and automation SEOLOCAL provides. Our clients think we're geniuses.",
  author: "Marcus Chen",
  role: "Founder, Apex Marketing",
  rating: 5
}, {
  quote: "The AI content engine is a game-changer. It reverse-engineers exactly what's ranking and creates better content. Our rankings have skyrocketed.",
  author: "Jennifer Parks",
  role: "Director, SEO Specialists Inc.",
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

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
            Trusted by Agencies
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our{" "}
            <span className="text-accent text-glow-gold">Partners</span> Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
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
              <div className="h-full glass-card rounded-2xl p-8 relative">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-[#754ee9]" />)}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="font-display font-bold text-foreground">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;