"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";

// ─── SERVICES DATA ─────────────────────────────────────────────
const services = [
  {
    title: "Custom Web Creation",
    bullets: [
      "Tailored designs from scratch",
      "Clean, modern UI/UX",
      "Optimized for performance and branding",
      "Built with future scalability in mind",
    ],
    image: "/customweb.png",
  },
  {
    title: "Search Engine Optimization (SEO)",
    bullets: [
      "Keyword research & on-page optimization",
      "Technical SEO best practices",
      "Fast-loading performance for ranking boost",
      "Built-in SEO tools and reports",
    ],
    image: "/seo2.png",
  },
  {
    title: "Secure Hosting & Maintenance",
    bullets: [
      "SSL, firewalls, and backups included",
      "99.9% uptime guarantee",
      "Monitoring and performance alerts",
      "Free support and updates",
    ],
    image: "/hosting.png",
  },
  {
    title: "Mobile‑First Design",
    bullets: [
      "Responsive across all screen sizes",
      "Touch‑friendly interfaces",
      "Performance-optimized for mobile",
      "Flexible layouts for future changes",
    ],
    image: "/mobileui.png",
  },
  {
    title: "E‑commerce Solutions",
    bullets: [
      "Secure checkout & payment gateways",
      "Inventory & product management",
      "Custom cart and order flows",
      "Optional Shopify/Stripe integration",
    ],
    image: "/ecommerce.png",
  },
  {
    title: "Ongoing Web Management",
    bullets: [
      "Content updates and edits",
      "Monthly performance reports",
      "Bug fixes & backups included",
      "Scaling with your business growth",
    ],
    image: "/management.png",
  },
];

type Service = {
  title: string;
  bullets: string[];
  image: string;
};

// ─── PARALLAX HELPER ───────────────────────────────────────────
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// ─── INDIVIDUAL SERVICE SECTION ────────────────────────────────
function ParallaxItem({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useParallax(scrollYProgress, 100);
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="min-h-screen scroll-snap-start flex items-center justify-center px-6 mb-16 md:mb-0"
      >
      <div
        className={`flex flex-col md:flex-row ${!isEven && "md:flex-row-reverse"
          } max-w-6xl w-full gap-12 items-center`}
      >
        <motion.div style={{ y }} className="w-full md:w-1/2">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            style={{
              boxShadow: '0 -6px 30px -6px var(--accent-500), 0 6px 30px -6px var(--accent-500)',
            }}
          />
        </motion.div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent">{service.title}</span>
          </h2>
          <ul className="text-neutral-300 text-lg space-y-2">
            {service.bullets.map((point: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#6d28d9] font-bold text-xl">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── FULL PAGE COMPONENT ───────────────────────────────────────
export default function ServicesPage() {
  const headingRef = useRef<HTMLHeadingElement>(null);
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
    });
  }, []);

  return (
    <div className="font-display w-full overflow-x-hidden">
      {/* ─── Hero Section ───────────────────────────────────── */}
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
                <h3 className="text-xl md:text-2xl text-neutral-300 font-medium leading-snug">
                  We design, develop, and maintain fast, branded websites that
                  grow with you.
                </h3>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* ─── Services Section ─────────────────────────────── */}
      {services.map((service, index) => (
        <ParallaxItem key={index} index={index} service={service} />
      ))}

      {/* ─── Scroll Snapping Styles ──────────────────────── */}
      <style jsx global>{`
        html {
          scroll-snap-type: y mandatory;
        }

        section {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}
