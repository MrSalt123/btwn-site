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
      <Hero />
      <DeliverSection />
      <ServiceCards />
      <IncludeSection />
    </div>
  );
}
