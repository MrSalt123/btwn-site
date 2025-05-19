'use client';

export default function Hero() {
  return (
    <section className="flex h-[85vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground text-center">
        Digital clarity, <span className="bg-gradient-to-r from-accent-200 via-accent to-accent bg-clip-text text-transparent">delivered by BTWN</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-neutral-300 font-display">Zero clutter. Maximum impact.</p>

      {/* ——— CTA button ——— */}
      <a
        href="/call"
        className="
          group relative mt-8 inline-flex items-center justify-center text-center
          rounded-full bg-accent px-8 py-3
          text-background transition hover:bg-accent-hover hover:cursor-pointer
          focus:outline-none
        "
        style={{
          boxShadow: '0 -6px 30px -6px var(--accent-500), 0 6px 30px -6px var(--accent-500)',
        }}
      >
        {/* -------- Label -------- */}
        <span
          className="
            transition-transform duration-300
            group-hover:-translate-x-2 font-display text-foreground      
          "
        >
          Schedule a Call
        </span>

        {/* -------- Arrow (drawn) -------- */}
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
    </section>
  );
}
