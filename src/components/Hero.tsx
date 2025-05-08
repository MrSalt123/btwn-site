'use client';

export default function Hero({
  headline = 'BTWN. Built for what’s next.',
  subline  = 'Future‑proof websites for growing brands.',
  cta      = 'Request a Quote',
  ctaLink  = '/contact',
}: {
  headline?: string;
  subline ?: string;
  cta     ?: string;
  ctaLink ?: string;
}) {
  return (
    <section className="flex h-[85vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground">{headline}</h1>
      <p className="mt-4 max-w-xl text-lg text-neutral-500">{subline}</p>

      {/* ——— CTA button ——— */}
      <a
        href={ctaLink}
        className="
          group relative mt-8 inline-flex items-center justify-center
          rounded-full bg-foreground px-8 py-3
          text-background transition hover:bg-neutral-600
          focus:outline-none
        "
      >
        {/* -------- Label -------- */}
        <span
          className="
            transition-transform duration-300
            group-hover:-translate-x-2                 /* ➊ slides left ≈½ arrow */
          "
        >
          {cta}
        </span>

        {/* -------- Arrow (drawn) -------- */}
        <span
          className="
            absolute right-4 flex items-center ml-3          /* sits inside padding */
            origin-left                                  /* scales from the left edge */
            scale-x-0 group-hover:scale-x-100            /* ➋ draw‑in animation */
            transition-transform duration-300 ease-out
          "
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </section>
  );
}
