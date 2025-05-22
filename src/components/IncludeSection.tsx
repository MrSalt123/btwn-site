"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function IncludeSection() {
    return (
        <div>
            <section className="bg-[var(--color-neutral-700)] text-foreground py-32 px-6">
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Packed With <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap">Power</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {[
                        {
                            icon: "/tool.json",
                            label: "Hosting & maintenance included",
                        },
                        {
                            icon: "/pencil.json",
                            label: "Custom branding with every tier",
                        },
                        {
                            icon: "/news.json",
                            label: "Newsletter, blog, & calendar integrations",
                        },
                        {
                            icon: "/clock.json",
                            label: "Fast turnaround & responsive support",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <Player
                                src={item.icon}
                                autoplay
                                loop
                                style={{ height: 40, width: 40 }}
                                aria-label={item.label}
                            />
                            <p className="text-lg font-display">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="text-white py-24 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-foreground text-4xl md:text-5xl font-display font-bold">
                        <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent whitespace-nowrap">
                            Ready to grow online?
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-300 font-display">
                        Let’s turn your vision into a website that works.
                    </p>
                    <motion.button whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} >
                    <a
                        href="/contact"
                        className="
          group relative mt-8 inline-flex items-center justify-center
          rounded-full bg-accent px-8 py-3
          text-background transition hover:bg-accent-hover
          focus:outline-none hover:cursor-pointer
        "
                        style={{
                            boxShadow: '0 -6px 30px -6px var(--accent-500), 0 6px 30px -6px var(--accent-500)',
                        }}
                    >

                        <span
                            className="
            transition-transform duration-300
            group-hover:-translate-x-2 font-display text-foreground         
          "
                        >
                            Let&apos;s talk
                        </span>

                        <span
                            className="
            absolute right-4 flex items-center ml-3         
            origin-left                       
            scale-x-0 group-hover:scale-x-100           
            transition-transform duration-300 ease-out text-foreground
          "
                            aria-hidden="true"
                        >
                            →
                        </span>
                    </a>
                    </motion.button>
                </div>
            </section>
        </div>
    )
}