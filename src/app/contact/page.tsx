import { Metadata } from "next";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Warrn Support",
  description: "Get in touch with the Warrn team for support, feedback, or inquiries. Our support team is ready to help you with your incident management needs.",
  keywords: [
    "contact warrn",
    "warrn support",
    "customer support",
    "help desk",
    "incident management support",
    "technical support"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/contact`,
  type: 'website'
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b pb-6">
              <h1 className="text-4xl font-normal mb-4">Contact Us</h1>
              <p className="text-muted-foreground">
                Have questions or need help? Our support team is here to assist you.
              </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <section>
                <div className="bg-muted/50 rounded-lg p-6 my-6">
                  <a 
                    href="mailto:support@warrn.io" 
                    className="text-primary hover:underline text-xl"
                  >
                    support@warrn.io
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </section>


              <section className="bg-muted/50 rounded-lg p-6 my-6">
                <h2 className="text-2xl font-semibold mb-4">Self-Service Resources</h2>
                <p className="mb-4">
                  You might find answers to your questions in our:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><a href="https://docs.warrn.io" className="text-primary hover:underline">Documentation</a></li>
                  <li><a href="/features" className="text-primary hover:underline">Features Guide</a></li>
                  <li><a href="/pricing" className="text-primary hover:underline">Pricing Information</a></li>
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