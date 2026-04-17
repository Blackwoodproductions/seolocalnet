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

const PAPER_TEXTURE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'><g fill='none' stroke='white' stroke-width='0.6' opacity='0.9'><line x1='40' y1='40' x2='150' y2='90'/><line x1='150' y1='90' x2='240' y2='50'/><line x1='240' y1='50' x2='290' y2='140'/><line x1='150' y1='90' x2='180' y2='200'/><line x1='40' y1='40' x2='80' y2='180'/><line x1='80' y1='180' x2='180' y2='200'/><line x1='180' y1='200' x2='270' y2='240'/><line x1='80' y1='180' x2='60' y2='280'/><line x1='60' y1='280' x2='180' y2='200'/><line x1='270' y1='240' x2='220' y2='300'/><line x1='220' y1='300' x2='60' y2='280'/><line x1='290' y1='140' x2='270' y2='240'/></g><g fill='white' opacity='0.95'><circle cx='40' cy='40' r='1.6'/><circle cx='150' cy='90' r='1.8'/><circle cx='240' cy='50' r='1.6'/><circle cx='290' cy='140' r='1.6'/><circle cx='80' cy='180' r='1.6'/><circle cx='180' cy='200' r='1.8'/><circle cx='270' cy='240' r='1.6'/><circle cx='60' cy='280' r='1.6'/><circle cx='220' cy='300' r='1.6'/></g></svg>")`;

const Footer = () => {
  return (
    <footer className="relative footer-animated-gradient overflow-hidden">
      {/* Subtle paper grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: PAPER_TEXTURE,
          backgroundSize: '320px 320px',
          opacity: 0.18,
        }}
      />
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src={seolocalLogo} 
                alt="SEOLocal Logo" 
                className="h-14 w-auto"
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
                className="flex items-center gap-3 text-white/60 text-sm hover:text-primary transition-colors"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>858-201-7994</span>
              </a>
              <a 
                href="mailto:support@blackwoodproductions.com" 
                className="flex items-center gap-3 text-white/60 text-sm hover:text-primary transition-colors"
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
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-white mb-4">{category}</h4>
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
                          className="text-white/60 text-sm hover:text-primary transition-colors duration-300"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-white/60 text-sm hover:text-primary transition-colors duration-300"
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Blackwood Productions. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with 22 years of SEO expertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
