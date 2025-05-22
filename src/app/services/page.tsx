"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import Accordion from "@/components/Accordion";

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!headingRef.current || !containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const { words } = splitText(headingRef.current);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );

      // Delay subtext until main headline finishes animating
      {/*
      setTimeout(() => {
        if (subtextRef.current) {

          animate(
            subtextRef.current as Element,
            {
              opacity: [0, 1],
              transform: ["translateY(10px)", "translateY(0px)"],
            },
            {
              duration: 0.8,
              easing: "ease-out",
            }
          );
        }
      }, 550); */} // Adjust this to match your headline animation duration
    });
  }, []);

  return (
    <div className="font-display">
      {/* Hero Section */}
      <section className="min-h-[85vh] w-full flex items-start justify-center pt-24 md:pt-32">
        <div className="w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <div
                ref={containerRef}
                style={{ visibility: "hidden" }}
                className="w-full"
              >
                <h1
                  ref={headingRef}
                  className="text-3xl md:text-6xl font-bold text-foreground leading-tight mb-6"
                >
                  Your all-in-one web partner.
                </h1>
                <h3
                  ref={subtextRef}
                  className="text-xl md:text-2xl text-neutral-300 font-medium leading-snug opacity-0"
                >
                  We design, develop, and maintain fast, branded websites that grow with you.
                </h3>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>

      <Accordion />
    </div>
  );
}
