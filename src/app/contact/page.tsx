// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-12 bg-background text-foreground font-display">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent">
              Let’s build something great
            </span>
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            We design and develop digital experiences that move your brand forward. Fill out the form to tell us what you need — we’ll follow up within one business day.
          </p>
        </div>

        <div>
          <ContactFormClient />
        </div>
      </div>
    </div>
  );
}

import dynamic from "next/dynamic";
const ContactFormClient = dynamic(() => import("./ContactFormClient"), { ssr: false });
