import About from "@/components/About";
import { HeroHeader } from "@/components/website/Header";
import CTA from "@/components/website/CTA";
import Footer from "@/components/website/Footer";

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