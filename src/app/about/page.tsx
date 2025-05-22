"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    glowRefs.current.forEach((card) => {
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
    <section className="min-h-screen px-6 py-24 md:py-32 bg-background text-white font-display">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          <div className="inline-flex flex-col items-center">
            <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace">
              Built by Developers Who Get It
            </span>
            <div className="mt-2 h-[2px] w-[80%] bg-gradient-to-r from-accent-200 via-accent to-accent-200 rounded-full" />
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed text-neutral-300"
        >
          We’re two graduates from the University of Georgia with a passion for clean code, design that speaks, and digital experiences that work. With over 5 years of hands-on development, we’ve helped startups, small businesses, and creatives launch fast, beautiful websites that scale with them.
        </motion.p>

        {/* What We Bring Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-10 mt-10"
        >
          {[
            {
              title: "Modern Tech Stack",
              desc: "React, Next.js, Tailwind, Framer Motion — fast, scalable builds from day one.",
            },
            {
              title: "5+ Years Experience",
              desc: "Hundreds of websites launched across industries, from local brands to SaaS tools.",
            },
            {
              title: "Design-First Thinking",
              desc: "Every project starts with UX. We build sites that look great and feel intuitive.",
            },
            {
              title: "Speed & SEO Built In",
              desc: "Optimized Lighthouse scores and search-friendly structures out of the box.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                glowRefs.current[index] = el;
              }}
              className="glow-card relative rounded-2xl p-6 md:p-8 bg-transparent border border-[#6d28d9]/30 text-left text-white overflow-hidden transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#6d28d9] mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
