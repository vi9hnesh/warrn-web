import { Metadata } from "next";
import PremiumHero from "@/components/website/PremiumHero";
import CTASection from "@/components/website/CTA";
import { Suspense } from "react";
import MultiCardFeature from "@/components/multi-card-feature";
import Features from "@/components/features-1";
import FeaturesSection2 from "@/components/features-2";
import Features3 from "@/components/features-3";
import Footer from "@/components/website/Footer";
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "AI-Powered Incident Management Platform",
  description: "Transform your incident response with Warrn's AI-powered platform. Intelligent triage, automated workflows, and continuous learning for modern DevOps teams. Reduce downtime by 70% with smart incident management.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "incident response platform",
    "DevOps automation",
    "AI monitoring",
    "reduce downtime",
    "intelligent alerting",
    "automated triage",
    "SRE platform",
    "multi-tenant incident management"
  ],
  canonicalUrl: SITE_CONFIG.url,
  type: 'website'
});

// Loading skeletons for each section
const FeaturesSkeleton = () => (
  <div className="relative isolate overflow-hidden bg-background py-24 sm:py-32 animate-pulse">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-muted rounded w-full mx-auto"></div>
      </div>
    </div>
  </div>
);

const SectionSkeleton = () => (
  <div className="py-24 sm:py-32 animate-pulse">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-muted rounded w-full mx-auto"></div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* <ScrollHeader /> */}
      
      {/* Reduced padding since floating navbar takes less space */}
      <div>
        <PremiumHero />
        <MultiCardFeature />
        {/* <Suspense fallback={<SectionSkeleton />}>
          <PremiumGallery />
        </Suspense> */}
        <Suspense fallback={<FeaturesSkeleton />}>
          <div id="features">
              {/* <FeaturesSection /> */}
              <Features />
              <FeaturesSection2 />
              <Features3 />
            </div>
        </Suspense>
        {/* <Suspense fallback={<SectionSkeleton />}>
          <div id="about">
            <HowItWorks />
          </div>
        </Suspense> */}
        <Suspense fallback={<SectionSkeleton />}>
          <div id="integrations">
            <CTASection />
          </div>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}
