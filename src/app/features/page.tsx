import Features from "@/components/features-1";
import FeaturesSection2 from "@/components/features-2";
import Features3 from "@/components/features-3";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import CTA from "@/components/website/CTA";

export default function FeaturesPage() {
    return (
        <div>
            <HeroHeader />
            <FeaturesSection2 />
            <Features />
            <Features3 />
            <CTA />
            <Footer />
        </div>
    )
}