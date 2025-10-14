import { Metadata } from "next";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Early Access Terms - Warrn",
  description: "Read Warrn's Early Access Terms. Learn about the terms and conditions for participating in our Early Access program and trying new features before general release.",
  keywords: [
    "early access terms",
    "beta program terms",
    "warrn early access",
    "feature preview terms",
    "beta testing agreement"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/early-access/terms`,
  type: 'website'
});

export default function EarlyAccessTermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b pb-6">
              <h1 className="text-4xl font-bold mb-4">Warrn Early Access Terms</h1>
              <p className="text-muted-foreground">
                Last updated: October 13, 2024
              </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <p className="text-lg">
                Welcome to Warrn Early Access! By joining our Early Access program, you agree to the following terms and conditions.
              </p>

              <section id="program-overview">
                <h2 className="text-2xl font-semibold mb-4">1. Program Overview</h2>
                <p className="mb-4">
                  The Warrn Early Access program gives selected users the chance to try new features and modules before they are generally available. Our goal is to gather feedback, improve the product, and provide early adopters with a head start in using Warrn's capabilities.
                </p>
              </section>

              <section id="eligibility">
                <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                <p className="mb-4">
                  Participation is by invitation or approval. We may accept or decline applications at our discretion.
                </p>
              </section>

              <section id="access-and-features">
                <h2 className="text-2xl font-semibold mb-4">3. Access and Features</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Access may include experimental or beta features.</li>
                  <li>Features may be incomplete, unstable, or subject to change.</li>
                  <li>Access may be limited by seats, modules, or usage quotas.</li>
                </ul>
              </section>

              <section id="feedback">
                <h2 className="text-2xl font-semibold mb-4">4. Feedback</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Participants are encouraged to provide feedback, suggestions, or bug reports.</li>
                  <li>Warrn may contact participants for follow-ups, surveys, or interviews.</li>
                  <li>Feedback may be used without compensation to improve the product.</li>
                </ul>
              </section>

              <section id="confidentiality">
                <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Early Access features may include confidential or proprietary information.</li>
                  <li>Participants agree not to disclose or distribute such information without written consent.</li>
                </ul>
              </section>

              <section id="no-warranty">
                <h2 className="text-2xl font-semibold mb-4">6. No Warranty</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Early Access features are provided "as is" without warranty.</li>
                  <li>We do not guarantee feature completeness, reliability, or availability.</li>
                  <li>Use Early Access features at your own risk.</li>
                </ul>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Warrn may modify, suspend, or terminate participation at any time without notice.</li>
                  <li>Participants may opt out at any time.</li>
                </ul>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-semibold mb-4">8. Liability</h2>
                <p className="mb-4">
                  Warrn will not be liable for any damages arising from Early Access features to the extent permitted by law.
                </p>
              </section>

              <section id="privacy">
                <h2 className="text-2xl font-semibold mb-4">9. Privacy</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Usage data and logs may be collected to improve the product.</li>
                  <li>Data handling is subject to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.</li>
                </ul>
              </section>

              <section id="general">
                <h2 className="text-2xl font-semibold mb-4">10. General</h2>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Terms are governed by the laws of India, with jurisdiction in Bangalore, Karnataka.</li>
                  <li>Warrn may update or amend these terms at any time.</li>
                </ul>
                <p className="mt-4 font-medium">
                  By signing up for Early Access, you acknowledge that you have read, understood, and agreed to these terms.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p>
                  For questions about these Early Access Terms, please contact us at:{" "}
                  <a href="mailto:support@warrn.io" className="text-primary hover:underline">
                    support@warrn.io
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}