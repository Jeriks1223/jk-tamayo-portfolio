"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" style={{ padding: "6rem 1.5rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Testimonials
        </div>
        <h2
          className="font-bold mb-8"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          What People Say
        </h2>

        <div
          ref={ref}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "var(--bg3)" }}
                >
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-base mb-1">{testimonial.name}</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: "var(--muted)" }}
              >
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
