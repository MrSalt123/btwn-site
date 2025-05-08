"use client";
import { useState, useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import DeliverSection from "@/components/DeliverSection";

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
    </div>
  );
}
