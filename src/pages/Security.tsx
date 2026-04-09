import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Server, AlertTriangle, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your sensitive information is never stored in plaintext.",
  },
  {
    icon: Shield,
    title: "Access Controls",
    description: "Role-based access controls (RBAC) ensure that only authorized personnel can access specific data and system functions.",
  },
  {
    icon: Eye,
    title: "Monitoring & Auditing",
    description: "Continuous monitoring and comprehensive audit logs track all system access and changes for full accountability.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Our infrastructure is hosted on enterprise-grade cloud providers with SOC 2 compliance, redundant systems, and 99.9% uptime SLA.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "A dedicated security team with a documented incident response plan ensures rapid detection, containment, and resolution of security events.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "We maintain compliance with industry standards including SOC 2 Type II, GDPR, and CCPA to protect your data and privacy.",
  },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <p className="text-primary font-medium mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Security
        </h1>
        <p className="text-muted-foreground mb-12">
          Your data security is our top priority. Here's how we protect your information.
        </p>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">1. Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We employ multiple layers of security to safeguard your data. All communications between your browser and our servers 
              are encrypted using TLS 1.3. Data at rest is encrypted using AES-256 encryption. We maintain strict key management 
              procedures and regularly rotate encryption keys.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">2. Authentication & Access</h2>
            <p className="text-muted-foreground leading-relaxed">
              We support multi-factor authentication (MFA) for all accounts. Our role-based access control system ensures users 
              only have access to the data and features necessary for their role. All access attempts are logged and monitored for 
              suspicious activity.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Multi-factor authentication (MFA) support</li>
              <li>Single Sign-On (SSO) integration for enterprise customers</li>
              <li>Automatic session timeout after periods of inactivity</li>
              <li>Password strength requirements and breach detection</li>
              <li>IP allowlisting for sensitive operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">3. Infrastructure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform is built on enterprise-grade cloud infrastructure with geographic redundancy. We perform regular 
              backups, disaster recovery testing, and maintain a business continuity plan to ensure your data is always available 
              and protected.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Geographically distributed data centers</li>
              <li>Automated daily backups with point-in-time recovery</li>
              <li>DDoS protection and Web Application Firewall (WAF)</li>
              <li>Network segmentation and intrusion detection systems</li>
              <li>99.9% uptime Service Level Agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">4. Vulnerability Management</h2>
            <p className="text-muted-foreground leading-relaxed">
              We proactively identify and remediate security vulnerabilities through regular security assessments, penetration 
              testing, and automated vulnerability scanning. Our development practices follow secure coding guidelines and include 
              security reviews for all code changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">5. Incident Response</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our security team maintains a comprehensive incident response plan that includes detection, analysis, containment, 
              eradication, and recovery procedures. In the event of a security incident that affects your data, we will notify you 
              promptly in accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">6. Employee Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All employees undergo background checks and receive security awareness training upon hire and annually thereafter. 
              Access to customer data is restricted to employees who require it to perform their job functions, and all access is 
              logged and audited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">7. Reporting a Vulnerability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you discover a security vulnerability in our Services, we encourage you to report it responsibly. Please contact 
              our security team at support@blackwoodproductions.com with details of the vulnerability. We appreciate your help in 
              keeping our platform secure and will acknowledge your contribution.
            </p>
            <div className="text-muted-foreground mt-4 space-y-1">
              <p className="font-semibold text-foreground">SEOLocal.io by Blackwood Productions</p>
              <p>117 NE 1st Avenue, 9th Floor #1046</p>
              <p>Miami, FL 33131</p>
              <p>Email: support@blackwoodproductions.com</p>
              <p>Phone: 858-201-7994</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
