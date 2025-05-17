"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Branding",
        image: "/3dmodel_1.jpg",
        content:
            "Your brand is more than a logo — it’s how customers remember you. We help create a visual identity that reflects your business, from logo refinement to cohesive design language across your site.",
    },
    {
        title: "Color Palette",
        image: "/3dmodel_1.jpg",
        content:
            "Color sets the tone. We build palettes that feel modern, accessible, and on-brand — with contrast that ensures readability and a style that feels unmistakably yours.",
    },
    {
        title: "Typography",
        image: "/3dmodel_1.jpg",
        content:
            "Clean, professional type can instantly elevate your site. We choose fonts that pair well, scale nicely across devices, and reinforce your brand personality.",
    },
    {
        title: "Layout & Structure",
        image: "/3dmodel_1.jpg",
        content:
            "We follow proven UX principles to guide your visitors through the site — using spacing, grids, and hierarchy to make your content effortless to navigate.",
    },
    {
        title: "Mobile Responsiveness",
        image: "/3dmodel_1.jpg",
        content:
            "Over half of web traffic comes from phones — so every site we make is mobile-first. We test on real devices and ensure everything feels fast, intuitive, and smooth.",
    },
    {
        title: "SEO Foundations",
        image: "/3dmodel_1.jpg",
        content:
            "Our builds start with semantic HTML, meta tags, and clean structure that helps search engines find and rank your site — a strong base for any future SEO strategy.",
    },
];

export default function AccordionGrid() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Left: PNG Render */}
            <div></div>

            {/* Right: Accordion */}
            <div className="w-full max-w-xl text-left">
                {sections.map((section, index) => (
                    <div key={index} className="py-3">
                        <button
                            onClick={() => toggle(index)}
                            className="flex justify-between items-center w-full font-semibold text-2xl"
                        >
                            {section.title}
                            <ChevronDown
                                className={`ml-2 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <div
                            className={`mt-2 text-neutral-600 text-lg leading-relaxed transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="pt-1">{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}