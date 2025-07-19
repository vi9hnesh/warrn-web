import { Metadata } from "next";
import About from "@/components/About";
import { HeroHeader } from "@/components/website/Header";
import CTA from "@/components/website/CTA";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Warrn - AI-Powered Incident Management Platform",
  description: "Learn about Warrn's mission to transform incident management with AI. Discover our team, vision, and commitment to helping DevOps teams reduce downtime and improve system reliability through intelligent automation.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "about warrn",
    "company information",
    "incident management company",
    "AI startup",
    "DevOps platform",
    "team behind warrn",
    "company mission",
    "system reliability experts"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/about`,
  type: 'website'
});

export default function AboutPage() {
    return (
        <div>
            <HeroHeader />
            <About />
            <CTA />
            <Footer />
        </div>
    )
}