"use client";

import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <div className="font-display">
      {/* Hero Section (approx. 90% of viewport height) */}
      <section className="min-h-[85vh] w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl">
          {/* Text on the Left */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              At BTWN, we craft websites designed to perform — beautiful, fast, and built to grow with your brand.
            </h1>
          </div>


          <div></div>
        </div>
      </section>

        <Accordion />
    </div>
  );
}
