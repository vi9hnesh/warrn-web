import { Metadata } from "next";
import Features from "@/components/features-1";
import FeaturesHeader from "@/components/featuresHeader";
import Features3 from "@/components/features-3";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import CTA from "@/components/website/CTA";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";
import { IntegrationsSection } from "@/components/website/Integrations";
import AlertdeckBanner from "@/components/alertdeckbanner";

export const metadata: Metadata = generateSEOMetadata({
  title: "Features - AI-Powered Incident Management & Automated Response",
  description: "Explore Warrn's powerful features: AI-driven incident triage, automated response workflows, intelligent alerting, multi-tenant architecture, and real-time monitoring. Built for modern DevOps and SRE teams.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "AI incident triage",
    "automated incident response",
    "intelligent alerting features",
    "multi-tenant monitoring",
    "incident management features",
    "automated workflows",
    "real-time incident detection",
    "smart notification system",
    "DevOps automation features",
    "SRE tools features"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/features`,
  type: 'website'
});

export default function FeaturesPage() {
    return (
        <div>
            <HeroHeader />
            <FeaturesHeader />
            <AlertdeckBanner />
            <IntegrationsSection />
            <Features />
            {/* <Features3 /> */}
            <CTA />
            <Footer />
        </div>
    )
}