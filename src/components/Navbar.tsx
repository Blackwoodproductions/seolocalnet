import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import seolocalLogo from "@/assets/seolocal-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Features",
    href: "#features"
  }, {
    name: "How It Works",
    href: "#how-it-works"
  }, {
    name: "Platform",
    href: "#platform"
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6
  }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10" style={{ backgroundColor: 'rgba(3, 6, 8, 0.9)' }}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={seolocalLogo} alt="SEOLocal Logo" className="h-7 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-white/70 hover:text-primary transition-colors duration-300 font-medium">
                {link.name}
              </a>)}
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://login.seolocal.it.com/" className="text-white hover:text-primary transition-colors duration-300 font-medium">
              Login
            </a>
            <a href="#demo" className="btn-futuristic text-sm text-primary-foreground">
              Get Started
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} className="lg:hidden overflow-hidden">
              <div className="py-6 flex flex-col gap-4">
                {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
                    {link.name}
                  </a>)}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <a href="https://login.seolocal.it.com/" className="text-foreground font-medium py-2">
                    Login
                  </a>
                  <a href="#demo" className="btn-futuristic text-center text-sm">
                    Get Started
                  </a>
                  <div className="pt-2">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
};
export default Navbar;