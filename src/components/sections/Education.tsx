"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EDUCATION, INTERESTS } from "@/lib/data";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <section id="education" style={{ padding: "6rem 1.5rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
            Education
          </div>
          <h2
            className="font-bold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Academic Background
          </h2>

          <div
            ref={ref}
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>
                  {edu.period}
                </div>
                <div className="font-bold text-base mb-1">{edu.school}</div>
                <div className="text-sm mb-3" style={{ color: "var(--muted)" }}>{edu.degree}</div>
                {edu.honor && (
                  <div className="text-sm font-medium" style={{ color: "var(--green)" }}>
                    🏅 {edu.honor}
                  </div>
                )}
                {edu.note && (
                  <div className="text-sm" style={{ color: "var(--muted)" }}>
                    Capstone: <span style={{ color: "var(--text)" }}>{edu.note.replace("Capstone: ", "")}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" style={{ padding: "4rem 1.5rem 6rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
            Beyond Code
          </div>
          <h2
            className="font-bold mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Interests
          </h2>
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
          >
            {INTERESTS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4 text-center transition-all cursor-default"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
