"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Discovery",
    description:
      "We start with a conversation. You tell us about your goals, audience, and what’s not working. We’ll translate that into a plan that makes sense — no jargon, no fluff.",
    image: "/discovery.svg",
  },
  {
    title: "Design",
    description:
      "With the vision locked in, we create a clean, responsive layout tailored to your brand. You’ll get to preview and refine the look before we write a single line of code.",
    image: "/design.svg",
  },
  {
    title: "Build",
    description:
      "We turn the design into a fast, mobile-first website — complete with SEO, smooth animations, and everything you need to launch with confidence.",
    image: "/build.svg",
  },
  {
    title: "Launch & Support",
    description:
      "Once approved, we go live — but we don’t disappear. Every site includes support, hosting, and updates to keep things running smoothly.",
    image: "/launch.svg",
  },
];

export default function OurProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerCenter = scrollLeft + container.offsetWidth / 2;

      const closestIndex = cardRefs.current.reduce((closestIdx, card, idx) => {
        if (!card) return closestIdx;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const prevCard = cardRefs.current[closestIdx];
        const prevCenter =
          (prevCard?.offsetLeft || 0) + (prevCard?.offsetWidth || 0) / 2;

        return Math.abs(cardCenter - containerCenter) <
          Math.abs(prevCenter - containerCenter)
          ? idx
          : closestIdx;
      }, 0);

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const targetCard = cardRefs.current[index];
    if (container && targetCard) {
      container.scrollTo({
        left:
          targetCard.offsetLeft -
          container.offsetWidth / 2 +
          targetCard.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="our-process" className="py-20 relative">
      <h2 className="text-center text-4xl md:text-5xl font-bold font-display mb-12">
        <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap [text-shadow:0_0_24px_var(--accent-300)]">
          Our Process
        </span>
      </h2>

      {/* Scroll area with fade masks and max-width container */}
      <div className="relative h-[500px] md:h-[450px] max-w-6xl mx-auto px-4 md:px-6">
        <div
          ref={containerRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide relative z-10 h-full"
        >
          <div className="flex w-max space-x-6 h-full">
            {steps.map((step, idx) => (
              <motion.div
                ref={(el) => (cardRefs.current[idx] = el)}
                key={idx}
                className="snap-center h-full w-[65vw] md:w-[40vw] flex-shrink-0 bg-background rounded-xl p-6 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={160}
                  height={160}
                  className="mb-4"
                />
                <h3 className="text-xl md:text-3xl font-bold font-display mb-2">
                  <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap">
                    {step.title}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fade masks */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 z-20 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 z-20 bg-gradient-to-l from-background via-background/70 to-transparent" />
      </div>

      {/* Clickable Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to ${steps[idx].title}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "bg-accent scale-125"
                : "bg-neutral-600 opacity-40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
