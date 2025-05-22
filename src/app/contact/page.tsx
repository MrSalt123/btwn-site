"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to API route or service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen px-6 py-24 md:px-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something great
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            We design and develop digital experiences that move your brand forward.
            Fill out the form to tell us what you need — we’ll follow up within one business day.
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Fully custom websites (no templates)</li>
            <li>End-to-end service — design, development, hosting</li>
            <li>Ongoing support and updates included</li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div>
          {submitted ? (
            <div className="text-green-500 text-xl font-medium">
              ✅ Message sent! We’ll be in touch shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Your Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full border border-neutral-300 rounded-lg p-3 bg-white text-black"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Business Name</label>
                  <input
                    required
                    type="text"
                    name="business"
                    className="w-full border border-neutral-300 rounded-lg p-3 bg-white text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full border border-neutral-300 rounded-lg p-3 bg-white text-black"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Website (if any)</label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://example.com"
                  className="w-full border border-neutral-300 rounded-lg p-3 bg-white text-black"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">What’s this about?</label>
                <select
                  required
                  name="inquiry"
                  className="w-full border border-neutral-300 rounded-lg p-3 bg-white text-black"
                >
                  <option value="">Select one</option>
                  <option value="new-site">New Website</option>
                  <option value="redesign">Redesign</option>
                  <option value="support">Ongoing Support</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full border border-neutral-300 rounded-lg p-3 bg-white text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
