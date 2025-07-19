import { Metadata } from "next";
import Labs from "@/components/website/Labs";
import { HeroHeader } from "@/components/website/Header";
import CTA from "@/components/website/CTA";
import Footer from "@/components/website/Footer";
import About from "@/components/About";
import LabPosts from "@/components/website/LabPosts";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Labs - Experimental Features & Innovation",
  description: "Explore Warrn Labs - our experimental features and cutting-edge innovations in AI-powered incident management. Get early access to future capabilities and shape the future of incident response.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "warrn labs",
    "experimental features",
    "beta features",
    "innovation lab",
    "AI experiments",
    "early access",
    "future features",
    "incident management research",
    "bleeding edge technology",
    "prototype features",
    "AI research",
    "DevOps innovation"
  ],
  canonicalUrl: `${SITE_CONFIG.url}/labs`,
  type: 'website'
});

export default function LabsPage() {
    return (
        <div>
            <HeroHeader />
            <Labs />
            <LabPosts />
            <Footer />
        </div>
    )
}