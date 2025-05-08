// components/DeliverSection.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function DeliverSection() {
  return (
    <section className="relative overflow-hidden shadow-lg">
      {/* background & grain layers */}
      <div className="absolute inset-0 bg-neutral-600" />
      <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl py-24 px-6 text-background">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
          WE&nbsp;DELIVER…
        </h2>

        {/* ——— Section 1 ——— */}
        <div className="mb-24 flex flex-col items-center gap-10 md:gap-16 md:mb-32 md:flex-row">
          {/* icon / animation */}
          <Player
            src="/rocket-launch.json"
            autoplay
            loop
            style={{ height: 160, width: 160 }}
            aria-label="Rocket blasting forward"
          />

          {/* copy */}
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-display text-background font-bold mb-4">
              Lightning‑fast performance
            </h3>
            <p className="leading-relaxed opacity-90">
              From image optimisation to edge caching, we shave every
              millisecond so your customers never wait.
            </p>
          </div>
        </div>

        {/* ——— Section 2 ——— */}
        <div className="flex flex-col items-center gap-10 md:gap-16 md:mb-32 md:flex-row-reverse">
          <div className="text-4xl">
            <Player
              src="/graph.json"
              autoplay
              loop
              style={{ height: 160, width: 160 }}
              aria-label="Chart going up"
            />
          </div>

          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Data‑driven insights
            </h3>
            <p className="leading-relaxed opacity-90">
              Built‑in analytics turn every click into a clear action plan—so
              you can watch your business grow in real time.
            </p>
          </div>
        </div>

        {/* ——— Section 3 ——— */}
        <div className="mb-24 flex flex-col items-center gap-10 md:gap-16 md:flex-row">
          <img
            src="/icons/server.svg"
            alt="Server stack"
            className="h-32 w-32 flex-shrink-0 rounded-lg object-contain md:h-40 md:w-40"
          />

          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Scalable back‑end
            </h3>
            <p className="leading-relaxed opacity-90">
              Whether you spike on launch day or grow 10× in a year, our
              headless CMS, API, and database stack keep humming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
