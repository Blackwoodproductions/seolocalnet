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

const SEO_TEXTURE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><g fill='none' stroke='white' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' opacity='0.55'><circle cx='30' cy='30' r='10'/><line x1='38' y1='38' x2='48' y2='48'/><path d='M90 50 l8 -10 l8 6 l10 -14'/><circle cx='90' cy='50' r='1.5'/><circle cx='98' cy='40' r='1.5'/><circle cx='106' cy='46' r='1.5'/><circle cx='116' cy='32' r='1.5'/><path d='M170 30 a8 8 0 1 0 11 11 l-3 3 a8 8 0 1 0 -11 -11z'/><text x='200' y='34' font-family='monospace' font-size='10' fill='white'>%231</text><rect x='20' y='110' width='6' height='18'/><rect x='32' y='102' width='6' height='26'/><rect x='44' y='94' width='6' height='34'/><rect x='56' y='86' width='6' height='42'/><path d='M90 120 h30 M90 130 h22'/><circle cx='84' cy='120' r='2'/><circle cx='84' cy='130' r='2'/><text x='160' y='124' font-family='monospace' font-size='9' fill='white'>SEO</text><circle cx='40' cy='200' r='8'/><line x1='46' y1='206' x2='54' y2='214'/><path d='M100 200 l-6 6 a4 4 0 0 0 0 6 a4 4 0 0 0 6 0 l6 -6 M110 190 l6 -6 a4 4 0 0 1 6 0 a4 4 0 0 1 0 6 l-6 6'/><line x1='106' y1='200' x2='118' y2='188'/><text x='170' y='206' font-family='monospace' font-size='9' fill='white'>RANK</text></g></svg>")`;

const Footer = () => {
  return (
    <footer className="relative footer-animated-gradient overflow-hidden">
      {/* Subtle SEO-themed texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: SEO_TEXTURE,
          backgroundSize: '240px 240px',
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
