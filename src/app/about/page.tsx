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
We’re two graduates from the University of Georgia who share a passion for clean code, thoughtful design, and building things that work. With experience in web development and design, we enjoy creating fast, modern websites that bring ideas to life — whether for small projects or big visions.        </motion.p>

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
              title: "Built by Developers",
              desc: "We’re hands-on builders who care more about performance and polish than upsells and fluff.",
            },
            {
              title: "Rooted in UGA",
              desc: "What started as side projects at the University of Georgia became a full-on studio for modern web work.",
            },
            {
              title: "Design-Driven",
              desc: "We blend creative design with technical know-how to build sites that actually work — and look good doing it.",
            },
            {
              title: "Fast, Clean, and Future-Ready",
              desc: "Our projects are built with performance, accessibility, and scalability in mind — no bloated templates here.",
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
