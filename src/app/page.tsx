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
  title: "Comprehensive Alert Management & Team Organization Platform",
  description: "Advanced alert lifecycle management with team organization and service cataloging. Complete alert filtering, team collaboration, and service inventory management.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "alert management system",
    "team organization platform", 
    "service catalog",
    "alert lifecycle",
    "team collaboration",
    "service inventory",
    "alert filtering",
    "incident collaboration"
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
        {/* <MultiCardFeature /> */}
        {/* <Suspense fallback={<SectionSkeleton />}>
          <PremiumGallery />
        </Suspense> */}
        <Suspense fallback={<FeaturesSkeleton />}>
          <div id="features">
              {/* <FeaturesSection /> */}
              <Features />
              {/* Additional features commented out until ready */}
              {/* <FeaturesSection2 /> */}
              {/* <Features3 /> */}
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
