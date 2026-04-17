import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import seolocalLogo from "@/assets/seolocal-logo-white.png";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Resources: ["Documentation", "Help Center", "Blog", "Webinars"],
  Company: ["About Us", "Careers", "Contact", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573406406956" },
  { icon: Instagram, href: "https://www.instagram.com/seolocal.it/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/seo-local-io/" },
];

const Footer = () => {
  return (
    <footer className="relative mt-32 md:mt-48" style={{ backgroundColor: '#030608' }}>
      {/* Diagonal divider transitioning from light section into dark footer */}
      <div className="absolute left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ top: 0, transform: 'translateY(-99%)', zIndex: 1 }}>
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-32 md:h-48 block">
          <path
            d="M0,200 L0,40 Q300,180 600,120 T1200,30 L1200,200 Z"
            fill="#030608"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src={seolocalLogo} 
                alt="SEOLocal Logo" 
                className="h-14 w-auto opacity-80" style={{ filter: 'brightness(0.3) sepia(1) hue-rotate(190deg) saturate(3)' }}
              />
            </a>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              The industry's most powerful white-label SEO platform. 22 years of innovation 
              helping agencies deliver results.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>117 NE 1st Avenue, 9th Floor #1046<br />Miami, FL 33131</span>
              </div>
              <a 
                href="tel:858-201-7994" 
                className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>858-201-7994</span>
              </a>
              <a 
                href="mailto:support@blackwoodproductions.com" 
                className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>support@blackwoodproductions.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
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
                {links.map((link) => {
                  const legalRoutes: Record<string, string> = {
                    "Privacy Policy": "/privacy",
                    "Terms of Service": "/terms",
                    "Cookie Policy": "/cookies",
                    "Security": "/security",
                  };
                  const route = legalRoutes[link];
                  return (
                    <li key={link}>
                      {route ? (
                        <Link
                          to={route}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
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
