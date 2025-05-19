"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      };
    });
  }, []);
  return (
    <section className="relative overflow-hidden shadow-lg">
      {/* Background & grain layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl py-24 px-6 text-foreground">
        <h2 className="text-3xl md:text-5xl font-display font-semibold mb-16 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap">
              Everything You Need.
            </span>
            <div className="mt-2 h-[2px] w-[80%] bg-gradient-to-r from-accent-200 via-accent to-accent-200 rounded-full" />
          </div>
        </h2>


        {/* Horizontal Feature Grid */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center mx-auto">

          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <motion.div
  ref={(el) => { cardRefs.current[0] = el; }}
  className="glow-card relative rounded-2xl p-8 text-center bg-transparent overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <Image src={features[0].src} alt={features[0].alt} width={240} height={240} className="mx-auto" />
  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-8 mb-4">
    {features[0].title}
  </h3>
  <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">
    {features[0].text}
  </p>
</motion.div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="glow-card h-full relative rounded-2xl p-8 text-center bg-transparent overflow-hidden"
            >
              <Image src={features[1].src} alt={features[1].alt} width={240} height={240} className="mx-auto" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-8 mb-4">
                {features[1].title}
              </h3>
              <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">
                {features[1].text}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Full Width */}
        <div className="w-full flex flex-col items-center text-center max-w-3xl mx-auto">
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className="glow-card relative rounded-2xl p-8 text-center bg-transparent overflow-hidden"
          >
            <Image src={features[2].src} alt={features[2].alt} width={240} height={240} className="mx-auto" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-8 mb-4">
              {features[2].title}
            </h3>
            <p className="leading-relaxed font-display text-[var(--color-neutral-200)]">
              {features[2].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
