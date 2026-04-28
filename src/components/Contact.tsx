import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, ShieldCheck, Sparkles, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const perks = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours, guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "No Commitment",
    description: "Get expert advice with zero pressure. We're here to help.",
  },
  {
    icon: Sparkles,
    title: "Free Consultation",
    description: "Your first strategy call is on us. Let's explore your needs.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-primary text-glow-cyan">Digital Presence?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join over 10,000 users who made the switch to SEOLOCAL. Whether you have questions about our platform or
            want a personalized demo, our team is ready to help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Perks */}
          <div className="space-y-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <perk.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@agency.com"
                  maxLength={255}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
              <Input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                maxLength={150}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your goals..."
                maxLength={1000}
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn-futuristic w-full flex items-center justify-center gap-2 text-primary-foreground">
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
