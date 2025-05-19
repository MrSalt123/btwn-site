"use client";

import Image from "next/image";

const features = [
  {
    title: "Fast-loading websites",
    text:
      "From code to image delivery, we optimize every asset so your site feels instant.",
    src: "/fastloading.svg",
    alt: "Rocket blasting forward",
  },
  {
    title: "Data‑driven insights",
    text:
      "Built‑in analytics turn every click into a clear action plan—so you can watch your business grow in real time.",
    src: "/data.svg",
    alt: "Chart going up",
  },
  {
    title: "Stunning design",
    text:
      "We craft sleek layouts that adapt perfectly to any screen, giving your brand a bold first impression.",
    src: "/uidesign.svg",
    alt: "Responsive layout icon",
  },
];


export default function DeliverSection() {
  return (
    <section className="relative overflow-hidden shadow-lg">
      {/* Background & grain layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl py-24 px-6 text-foreground">
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-24 text-center">
          Everything You Need.
        </h2>

        {/* Horizontal Feature Grid */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Left column (2/3 or 3/4 width) */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-center text-center max-w-xl mx-auto">
            <Image src={features[0].src} alt={features[0].alt} width={300} height={300} />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-8 mb-4">
              {features[0].title}
            </h3>
            <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">
              {features[0].text}
            </p>
          </div>

          {/* Right column (1/3 or 1/4 width) */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center max-w-sm mx-auto">
            <Image src={features[1].src} alt={features[1].alt} width={300} height={300} />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-8 mb-4">
              {features[1].title}
            </h3>
            <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">
              {features[1].text}
            </p>
          </div>
        </div>

        {/* Bottom Row: Full Width */}
        <div className="w-full flex flex-col items-center text-center max-w-3xl mx-auto">
          <Image src={features[2].src} alt={features[2].alt} width={300} height={300} />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-8 mb-4">
            {features[2].title}
          </h3>
          <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">
            {features[2].text}
          </p>
        </div>
      </div>
    </section>
  );
}
