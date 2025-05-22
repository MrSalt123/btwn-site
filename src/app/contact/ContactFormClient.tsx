// app/contact/ContactFormClient.tsx
"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactFormClient() {
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
            {/* (form inputs same as before) */}
          </form>

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
            <input type="hidden" name="_next" value="https://btwn.design/contact?success=true" />
          </form>
        </>
      )}
    </div>
  );
}
