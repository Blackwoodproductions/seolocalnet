import { motion } from "framer-motion";
import ScrollParallax from "./ScrollParallax";
import { ArrowRight, Mail, Phone } from "lucide-react";
const CTA = () => {
  return <section id="demo" className="py-32 relative overflow-hidden">
      {/* Background */}
      <ScrollParallax speed={-0.15} className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <ScrollParallax speed={-0.1} className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      {/* Glowing Orbs */}
      <ScrollParallax speed={-0.3} className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <ScrollParallax speed={-0.2} className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-accent text-sm font-medium">Limited Partner Spots Available</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="text-primary text-glow-cyan">Dominate</span>{" "}
            SEO?
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join 500+ agencies who trust SEOLOCAL to power their white-label SEO services. 
            Get started today with a free trial and see why no one else comes close.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#" className="btn-futuristic flex items-center gap-2 text-lg text-primary-foreground">
              Start Your Free Trial
              <ArrowRight size={20} />
            </a>
            <a href="#" className="btn-outline-glow flex items-center gap-2 text-lg">
              Schedule a Demo
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <a href="mailto:support@blackwoodproductions.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              <span>support@blackwoodproductions.com</span>
            </a>
            <a href="tel:+18582017994" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={18} />
              <span>858-201-7994</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CTA;