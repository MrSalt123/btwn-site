// components/ServiceCards.tsx
"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Card from "./Card";

const tiers = [
  {
    name: "Starter",
    price: "599",
    description: "Perfect for small businesses getting online.",
    features: [
      "1–4 Static Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Custom Branding",
      "Fast Load Times",
      "1 Round of Revisions",
    ],
  },
  {
    name: "Growth",
    price: "999",
    description: "Ideal for growing businesses with more content needs.",
    features: [
      "5–8 Dynamic Pages",
      "CMS + Blog Setup",
      "Advanced SEO",
      "Booking Integration",
      "Newsletter Capture",
      "2 Rounds of Revisions",
      "Performance Optimization",
    ],
  },
  {
    name: "Pro",
    price: "1599",
    description: "For businesses needing advanced features & scale.",
    features: [
      "Unlimited Pages",
      "E-Commerce Integration",
      "Multilingual Support",
      "3 Mockups + Revisions",
      "Email Automation",
      "Analytics Dashboard",
      "Custom Integrations",
    ],
  },
];


const ServiceCards: React.FC = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Choose the Right Plan
        </h2>
        <p className="text-[var(--color-neutral-400)] mt-4 font-display">
          Three options. One perfect fit for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {tiers.map((tier, index) => (
          <Tilt
            key={index}
            glareEnable={false}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={400}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="w-full max-w-md"
          >
            <Card
              key={tier.name}
              title={tier.name}
              description={tier.description}
              features={tier.features}
              price={tier.price}
              delay={index * 0.2}
            />
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
