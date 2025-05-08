

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <main className="flex h-[85vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-color-foreground">
        Let’s talk about your project
      </h1>

      <p className="mt-4 max-w-lg text-lg text-neutral-500">
        Pick a time on our calendar or drop us a note.
      </p>

      {/* Replace the href with your real Calendly/booking/contact link */}
      <a
        href="https://calendly.com/your‑handle/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-white transition hover:bg-neutral-600"
      >
        Schedule a 30‑min call
      </a>
    </main>
    </div>
  );
}
