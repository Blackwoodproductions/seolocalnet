import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Platform", href: "#platform" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {/* AI Shield Icon */}
            <div className="relative">
              <Shield className="h-10 w-10 text-foreground" strokeWidth={1.5} />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground" style={{ marginTop: '2px' }}>
                ai
              </span>
            </div>
            {/* Logo Text */}
            <span className="text-2xl tracking-tight">
              <span className="font-bold text-foreground">SEO</span>
              <span className="font-normal text-foreground/80">local.net</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Login
            </a>
            <a href="#demo" className="btn-futuristic text-sm">
              Get Started
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <a href="#" className="text-foreground font-medium py-2">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
