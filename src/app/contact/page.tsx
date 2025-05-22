"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-200 via-accent to-accent-200 bg-clip-text text-transparent">Let’s build something great</span>
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            We design and develop digital experiences that move your brand forward.
            Fill out the form to tell us what you need — we’ll follow up within one business day.
          </p>
        </div>

        {/* Right: Contact Form */}
        <div>
            <form
              action="https://formsubmit.co/hello@btwn.design" method="POST"
              className="grid gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="peer w-full border border-neutral-300 rounded-lg p-3 pt-6 bg-white text-black placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400
      peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    required
                    type="text"
                    name="business"
                    id="business"
                    className="peer w-full border border-neutral-300 rounded-lg p-3 pt-6 bg-white text-black placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Business Name"
                  />
                  <label
                    htmlFor="business"
                    className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400
      peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Business Name
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer w-full border border-neutral-300 rounded-lg p-3 pt-6 bg-white text-black placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400
      peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  required
                  type="text"
                  name="website"
                  id="website"
                  className="peer w-full border border-neutral-300 rounded-lg p-3 pt-6 bg-white text-black placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Website"
                />
                <label
                  htmlFor="website"
                  className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400
      peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Website (if applicable)
                </label>
              </div>

              <div className="relative">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="peer w-full border border-neutral-300 rounded-lg pt-6 p-3 bg-white text-black placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 top-1.5 text-sm text-neutral-500 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400
      peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Message
                </label>
              </div>


              <button
                type="submit"
                className="bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-hover transition"
                style={{
                  boxShadow: '0 -6px 30px -6px var(--accent-500), 0 6px 30px -6px var(--accent-500)',
                }}
              >
                Send Message
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}
