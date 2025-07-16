import Pricing from "@/components/website/Pricing";
import { HeroHeader } from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import CTA from "@/components/website/CTA";
import PricingComparator from "@/components/website/Comparator";

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