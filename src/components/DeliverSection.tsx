"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const features = [
  {
    title: "Fast-loading websites",
    text:
      "From code to image delivery, we optimize every asset so your site feels instant.",
    src: "/rocket-launch.json",
    alt: "Rocket blasting forward",
  },
  {
    title: "Data‑driven insights",
    text:
      "Built‑in analytics turn every click into a clear action plan—so you can watch your business grow in real time.",
    src: "/graph.json",
    alt: "Chart going up",
  },
  {
    title: "Stunning design",
    text:
      "We craft sleek layouts that adapt perfectly to any screen, giving your brand a bold first impression.",
    src: "/webdesign.json",
    alt: "Responsive layout icon",
  },
];


export default function DeliverSection() {
  return (
    <section className="relative overflow-hidden shadow-lg">
      {/* Background & grain layers */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl py-24 px-6 text-background">
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-24">
          Everything&nbsp;your&nbsp;business&nbsp;needs&nbsp;to&nbsp;succeed.
        </h2>

        {/* Horizontal Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col max-w-sm mx-auto">
                <Player
                  src={feature.src}
                  autoplay
                  loop
                  style={{ height: 160, width: 160 }}
                  aria-label={feature.alt}
                />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-background)] mt-8 mb-4">
                {feature.title}
              </h3>
              <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
