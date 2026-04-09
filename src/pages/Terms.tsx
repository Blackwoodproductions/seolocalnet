import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <p className="text-primary font-medium mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: April 9, 2026</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") 
              and SEOLocal.io, operated by Blackwood Productions ("Company," "we," "our," or "us"). By accessing or using our 
              Software as a Service platform and related services (collectively, the "Services"), you agree to be bound by these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the 
              authority to bind such entity to these Terms. If you do not have such authority, or if you do not agree with these 
              Terms, you must not accept these Terms and may not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">2. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years of age to use the Services. By using the Services, you represent and warrant that you 
              meet this age requirement and have the legal capacity to enter into a binding contract. The Services are intended for 
              business use and are not directed at consumers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">3. Account Registration and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access certain features of the Services, you must create an account. When registering, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that contain inaccurate information or violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">4. Subscription Plans and Payment</h2>
            <h3 className="text-xl font-semibold text-foreground mt-4">4.1 Subscription Plans</h3>
            <p className="text-muted-foreground leading-relaxed">
              We offer various subscription plans with different features and pricing. The specific terms of your subscription, 
              including pricing and features, will be as described at the time of purchase and in your order confirmation.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">4.2 Payment Terms</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All fees are quoted and payable in US Dollars unless otherwise specified</li>
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>All payments are non-refundable except as expressly stated herein</li>
              <li>You authorize us to charge your designated payment method for all applicable fees</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4">4.3 Price Changes</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify pricing at any time. Price changes will be effective upon the next billing cycle 
              following notice to you. Continued use of the Services after a price change constitutes acceptance of the new pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">5. License Grant and Restrictions</h2>
            <h3 className="text-xl font-semibold text-foreground mt-4">5.1 License Grant</h3>
            <p className="text-muted-foreground leading-relaxed">
              Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, 
              non-transferable, revocable license to access and use the Services for your internal business purposes during the 
              subscription term.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">5.2 Restrictions</h3>
            <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Copy, modify, or create derivative works of the Services</li>
              <li>Reverse engineer, disassemble, or decompile any part of the Services</li>
              <li>Sublicense, sell, resell, transfer, or distribute the Services</li>
              <li>Use the Services to build a competing product or service</li>
              <li>Access the Services through automated means (bots, scrapers) without permission</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Attempt to gain unauthorized access to the Services or related systems</li>
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">6. User Content and Data</h2>
            <h3 className="text-xl font-semibold text-foreground mt-4">6.1 Your Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to content you upload, submit, or transmit through the Services ("User Content"). By submitting 
              User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and display such content 
              solely to provide the Services to you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">6.2 Content Responsibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              You are solely responsible for your User Content and represent that you have all necessary rights to submit such content. 
              You agree not to submit content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">7. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Services, including all content, features, and functionality, are owned by us or our licensors and are protected by 
              copyright, trademark, patent, and other intellectual property laws. Our name, logo, and all related names, logos, product 
              and service names, designs, and slogans are our trademarks. You may not use such marks without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">8. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Each party agrees to maintain the confidentiality of the other party's confidential information and to use such information 
              only as necessary to perform obligations under these Terms. Confidential information does not include information that is 
              publicly available, independently developed, or rightfully received from a third party without restriction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">9. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-foreground mt-4">9.1 Our Warranties</h3>
            <p className="text-muted-foreground leading-relaxed">
              We warrant that the Services will perform materially in accordance with the applicable documentation during the 
              subscription term. Our sole obligation for breach of this warranty is to use commercially reasonable efforts to 
              correct the non-conformity.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">9.2 Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm">
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, 
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed uppercase text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO 
              THESE TERMS OR THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY. OUR TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED 
              THE AMOUNTS PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, agents, and 
              affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, 
              arising out of or in any way connected with your access to or use of the Services, your User Content, or your violation 
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">12. Term and Termination</h2>
            <h3 className="text-xl font-semibold text-foreground mt-4">12.1 Term</h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms commence upon your acceptance and continue until terminated. Subscription terms will automatically renew 
              for successive periods unless cancelled before the renewal date.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">12.2 Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may terminate your subscription at any time through your account settings. We may terminate or suspend your access 
              immediately, without prior notice, for any breach of these Terms or for any other reason at our sole discretion.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">12.3 Effect of Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, your right to use the Services will immediately cease. We may delete your User Content within 90 days 
              of termination. Provisions that by their nature should survive termination will survive, including ownership provisions, 
              warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">13. Governing Law and Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, 
              without regard to its conflict of law provisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any dispute arising out of or relating to these Terms or the Services shall first be attempted to be resolved through 
              good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration administered by 
              the American Arbitration Association in accordance with its Commercial Arbitration Rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">14. General Provisions</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Services.</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in effect.</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right or provision shall not constitute a waiver.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our prior written consent.</li>
              <li><strong>Notices:</strong> We may provide notices via email or through the Services.</li>
              <li><strong>Force Majeure:</strong> Neither party shall be liable for delays caused by circumstances beyond their reasonable control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">15. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the 
              updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after such 
              changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">16. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
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

export default Terms;
