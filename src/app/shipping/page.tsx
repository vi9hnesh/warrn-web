import { Metadata } from "next";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Digital Delivery / Shipping Policy - Warrn",
  description: "Learn about Warrn's digital delivery process. All services are delivered online immediately after payment. No physical goods are shipped.",
  keywords: [
    "digital delivery",
    "shipping policy",
    "SaaS delivery",
    "online access",
    "account activation",
    "warrn delivery"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/shipping`,
  type: 'website'
});

export default function ShippingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b pb-6">
              <h1 className="text-4xl font-bold mb-4">Digital Delivery / Shipping Policy</h1>
              <p className="text-muted-foreground">
                Last updated: October 13, 2024
              </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Digital Product Delivery</h2>
                <p className="mb-4">
                  Warrn is a digital SaaS product.
                  All services are delivered online immediately after payment. No physical goods are shipped.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Activation & Access</h2>
                <p className="mb-4">
                  Once your payment is confirmed, your account is active and you can access Warrn at{" "}
                  <a href="https://app.warrn.io" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://app.warrn.io
                  </a>
                  .
                </p>
                <p>
                  You will receive a confirmation email with your account details and login instructions. 
                  If you don't receive this email within a few minutes, please check your spam folder.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Support & Assistance</h2>
                <p className="mb-4">
                  For any issues with accessing your account, using our services, or requesting refunds, please contact us at{" "}
                  <a href="mailto:support@warrn.io" className="text-primary hover:underline">
                    support@warrn.io
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
                <p className="mb-4">
                  To access Warrn, you need:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>A modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>Stable internet connection</li>
                  <li>A valid email address for account registration</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}