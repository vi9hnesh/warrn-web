import Labs from "@/components/website/Labs";
import { HeroHeader } from "@/components/website/Header";
import CTA from "@/components/website/CTA";
import Footer from "@/components/website/Footer";
import About from "@/components/About";
import LabPosts from "@/components/website/LabPosts";

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