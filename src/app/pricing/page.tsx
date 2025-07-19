import { Metadata } from "next";
import Pricing from "@/components/website/Pricing";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import CTA from "@/components/website/CTA";
import PricingComparator from "@/components/website/Comparator";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Pricing Plans - Affordable AI-Powered Incident Management",
  description: "Choose the perfect Warrn pricing plan for your team. Transparent pricing for AI-powered incident management, from startups to enterprise. Free trial available. Scale as you grow with flexible multi-tenant pricing.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "warrn pricing",
    "incident management pricing",
    "AI monitoring cost",
    "SaaS pricing plans",
    "enterprise incident management",
    "multi-tenant pricing",
    "DevOps tools pricing",
    "monitoring platform cost",
    "incident response pricing",
    "free trial",
    "enterprise features",
    "startup friendly pricing"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/pricing`,
  type: 'website'
});

export default function PricingPage() {
    return (
        <div>
            <HeroHeader />
            <Pricing />
            <PricingComparator />
            <CTA />
            <Footer />
        </div>
    )
}