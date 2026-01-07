import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Resources: ["Documentation", "Help Center", "Blog", "Webinars"],
  Company: ["About Us", "Careers", "Contact", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-display font-black text-primary-foreground text-lg">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-foreground">SEOLOCAL</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  by Blackwood Productions
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              The industry's most powerful white-label SEO platform. 22 years of innovation 
              helping agencies deliver results.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Blackwood Productions. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with 22 years of SEO expertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
