"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const hiddenFormRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();

  const submitted = searchParams?.get("success") === "true";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    Object.entries(form).forEach(([key, value]) => {
      if (key !== "website" && !value.trim()) {
        newErrors[key] = "This field is required.";
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    hiddenFormRef.current?.submit();
  };

  const inputClass =
    "peer w-full border rounded-lg p-3 pt-6 bg-white text-black placeholder-transparent transition-all duration-300 ease-in-out focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 shadow-[0_0_0_2px_rgba(109,40,217,0.2)]";

  return (
    <div className="min-h-screen px-6 py-24 md:px-12 bg-background text-foreground font-display">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent">
              Let’s build something great
            </span>
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            We design and develop digital experiences that move your brand forward.
            Fill out the form to tell us what you need — we’ll follow up within one business day.
          </p>
        </div>

        {/* Right Content */}
        <div>
          {submitted ? (
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-accent mb-4">Message Sent!</h2>
              <p className="text-lg text-neutral-300">
                Thanks for reaching out — you should hear back from us within 48 hours.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={inputClass + (errors.name ? " border-red-500" : " border-neutral-300")}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-accent-pressed"
                    >
                      Your Name
                    </label>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Business */}
                  <div className="relative">
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Business Name"
                      className={inputClass + (errors.business ? " border-red-500" : " border-neutral-300")}
                    />
                    <label
                      htmlFor="business"
                      className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-accent-pressed"
                    >
                      Business Name
                    </label>
                    {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={inputClass + (errors.email ? " border-red-500" : " border-neutral-300")}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-accent-pressed"
                  >
                    Email
                  </label>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Website (optional) */}
                <div className="relative">
                  <input
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="Website"
                    className={inputClass + " border-neutral-300"}
                  />
                  <label
                    htmlFor="website"
                    className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-accent-pressed"
                  >
                    Website (if applicable)
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className={inputClass + (errors.message ? " border-red-500" : " border-neutral-300")}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-accent-pressed"
                  >
                    Message
                  </label>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-hover transition"
                  style={{
                    boxShadow: "0 -6px 30px -6px var(--accent-500), 0 6px 30px -6px var(--accent-500)",
                  }}
                >
                  Send Message
                </button>
              </form>

              {/* Hidden FormSubmit Proxy */}
              <form
                ref={hiddenFormRef}
                action="https://formsubmit.co/hello@btwn.design"
                method="POST"
                className="hidden"
              >
                <input type="hidden" name="name" value={form.name} />
                <input type="hidden" name="business" value={form.business} />
                <input type="hidden" name="email" value={form.email} />
                <input type="hidden" name="website" value={form.website} />
                <input type="hidden" name="message" value={form.message} />
                <input type="hidden" name="_next" value="http://btwn.design/contact?success=true" />
              </form>
            </>
          )}f
        </div>
      </div>
    </div>
  );
}
