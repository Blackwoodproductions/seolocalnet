import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <p className="text-primary font-medium mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Cookie Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: April 9, 2026</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely 
              used to make websites work more efficiently, provide a better user experience, and supply reporting information. Cookies 
              set by the website owner (in this case, SEOLocal.io) are called "first-party cookies." Cookies set by parties other than 
              the website owner are called "third-party cookies."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">We use cookies and similar technologies for the following purposes:</p>

            <h3 className="text-xl font-semibold text-foreground mt-4">2.1 Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are strictly necessary for the operation of our Services. They enable core functionality such as security, 
              network management, and account authentication. You cannot opt out of these cookies as the Services would not function 
              properly without them.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">2.2 Performance & Analytics Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies collect information about how visitors use our Services, such as which pages are visited most often and 
              whether users receive error messages. The information collected is aggregated and anonymous. We use this data to improve 
              how our Services work.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">2.3 Functionality Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies allow our Services to remember choices you make (such as your preferred language or region) and provide 
              enhanced, more personalized features. They may also be used to remember changes you have made to text size, fonts, and 
              other customizable parts of the interface.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">2.4 Marketing & Advertising Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are used to deliver advertisements that are relevant to you and your interests. They also help limit the 
              number of times you see an advertisement and measure the effectiveness of advertising campaigns. They are usually placed 
              by advertising networks with our permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">3. Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Cookie Name</th>
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Type</th>
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Purpose</th>
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">session_id</td>
                    <td className="p-3">Essential</td>
                    <td className="p-3">Maintains your authenticated session</td>
                    <td className="p-3">Session</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">csrf_token</td>
                    <td className="p-3">Essential</td>
                    <td className="p-3">Prevents cross-site request forgery</td>
                    <td className="p-3">Session</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">_ga / _gid</td>
                    <td className="p-3">Analytics</td>
                    <td className="p-3">Google Analytics tracking</td>
                    <td className="p-3">2 years / 24 hours</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">theme_pref</td>
                    <td className="p-3">Functionality</td>
                    <td className="p-3">Remembers your light/dark mode preference</td>
                    <td className="p-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="p-3">_fbp</td>
                    <td className="p-3">Marketing</td>
                    <td className="p-3">Facebook advertising pixel</td>
                    <td className="p-3">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">4. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or 
              to alert you when cookies are being sent. Here's how to manage cookies in common browsers:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Please note that blocking or deleting cookies may affect the functionality of our Services and your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">5. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some cookies on our Services are set by third-party services that appear on our pages. We do not control the setting 
              of these cookies, and we encourage you to review the privacy policies of these third parties for more information about 
              their cookie practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">6. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. 
              When we make changes, we will update the "Last updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
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

export default Cookies;
