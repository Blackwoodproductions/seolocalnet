import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <p className="text-primary font-medium mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: April 9, 2026</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how SEOLocal.io, operated by Blackwood Productions ("Company," "we," "our," or "us"), 
              collects, uses, and shares information about you when you use our Software as a Service platform and related services 
              (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance 
              with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mt-4">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Account registration information (name, email address, company name)</li>
              <li>Billing and payment information</li>
              <li>Communications you send to us (support requests, feedback)</li>
              <li>Content you upload or submit through the Services</li>
              <li>Survey responses and contest entries</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Device information (browser type, operating system, device identifiers)</li>
              <li>Log data (IP address, access times, pages viewed, referring URL)</li>
              <li>Usage data (features used, actions taken, performance data)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location data (derived from IP address)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Information from integrated third-party services you connect</li>
              <li>Analytics data from our partners</li>
              <li>Publicly available business information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve the Services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
              <li>Send promotional communications (with your consent where required)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, 
              and regular security assessments. However, no method of transmission over the Internet or electronic storage is 
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, 
              including to satisfy any legal, accounting, or reporting requirements. When we no longer need your information, 
              we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to collect and track information and to improve and analyze our Services. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not 
              accept cookies, you may not be able to use some portions of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at support@blackwoodproductions.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
              from children. If we become aware that we have collected personal information from a child, we will take steps to 
              delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries 
              may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure 
              that your personal information remains protected in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Last updated" date. Your continued use of the Services after such changes constitutes 
              acceptance of the modified Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
