"use client";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
const DeliverSection = dynamic(() => import('@/components/DynamicDeliver'), { ssr: false });
const IncludeSection = dynamic(() => import('@/components/DynamicInclude'), { ssr: false });
import dynamic from "next/dynamic";
const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ParticlesBackground />
      <Hero
        headline="Digital clarity, delivered by BTWN."
        subline="Zero clutter. Maximum impact."
        cta="Schedule a Call"
        ctaLink="/call"
      />
      <DeliverSection />
      <ServiceCards />
      <IncludeSection />
    </div>
  );
}
