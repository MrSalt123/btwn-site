"use client";

import { useEffect } from "react";
import { animate, scroll, timeline } from "motion";
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
    useEffect(() => {
        const container = document.querySelector(".img-group-container");

        if (!container) return; 

        const items = document.querySelectorAll(".img-container");

        scroll(
            animate(".img-group", {
                transform: ["none", `translateX(-${items.length - 1}00vw)`],
            }),
            { target: container }
        );

        scroll(
            animate(".progress", { scaleX: [0, 1] }),
            { target: container }
        );
    }, []);


    return (
        <article id="our-process">
            <header className="h-[70vh] flex items-center justify-center">
                <h2 className="text-[56px] font-bold text-center font-display">
                    <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap [text-shadow:0_0_24px_var(--accent-300)]">
                        Our Process
                    </span>
                </h2>
            </header>

            <section className="img-group-container h-[300vh] relative">
                <div className="sticky top-0 overflow-hidden h-screen">
                    <ul className="img-group flex">
                        {steps.map((step, idx) => (
                            <li
                                className="img-container flex flex-col items-center justify-center w-screen h-screen flex-shrink-0"
                                key={idx}
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={300}
                                    height={400}
                                    className="mb-4"
                                />
                                <h3 className="text-[40px] font-bold font-display mb-4">
                                    <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap">
                                        {step.title}
                                    </span>

                                </h3>
                                <p className="text-lg max-w-xl font-display text-center px-4">
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <div className="progress fixed bottom-[50px] left-0 right-0 h-[5px] bg-purple-700 scale-x-0 origin-left" />
        </article>
    );
}
