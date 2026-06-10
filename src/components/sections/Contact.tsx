"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PERSONAL } from "@/lib/data";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" style={{ padding: "6rem 1.5rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Get in Touch
        </div>
        <h2
          className="font-bold mb-12"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Let&apos;s Build Something.
        </h2>

        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-base mb-2">Open to Opportunities</h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Available for full-time roles, freelance projects, and enterprise consulting in NetSuite development, full-stack web, and business systems automation.
            </p>

            {[
              { icon: "📧", label: "Email", value: PERSONAL.email },
              { icon: "📍", label: "Location", value: `${PERSONAL.location} 🇵🇭` },
              { icon: "💼", label: "Current Role", value: "NetSuite Developer @ GAI" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 py-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-xs" style={{ color: "var(--muted)" }}>{item.label}</div>
                  <div className="text-sm">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={PERSONAL.linkedin}
                target="https://www.linkedin.com/in/jericho-kyle-tamayo-01621b179/"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm no-underline transition-all"
                style={{
                  color: "var(--text)",
                  background: "transparent",
                  border: "1px solid var(--border2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href={PERSONAL.github}
                target="https://github.com/Jeriks1223"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm no-underline transition-all"
                style={{
                  color: "var(--text)",
                  background: "transparent",
                  border: "1px solid var(--border2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                GitHub ↗
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 rounded-lg text-sm no-underline text-white transition-all hover:opacity-85"
                style={{ background: "var(--accent)" }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h3 className="font-semibold text-base mb-6">Send a Message</h3>

            {["name", "email"].map((field) => (
              <div key={field} className="mb-4">
                <label
                  className="block font-mono text-xs mb-1.5 uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field === "email" ? "your@email.com" : "Your name"}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border2)",
                    color: "var(--text)",
                    fontFamily: "var(--font-inter)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border2)";
                  }}
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block font-mono text-xs mb-1.5 uppercase" style={{ color: "var(--muted)" }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the project or opportunity..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border2)",
                  color: "var(--text)",
                  fontFamily: "var(--font-inter)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border2)";
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white border-none cursor-pointer transition-all hover:opacity-85 disabled:opacity-60 font-sans"
              style={{ background: "var(--accent)" }}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "✓ Message sent!"
                : status === "error"
                ? "✗ Try again"
                : "Send Message →"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
