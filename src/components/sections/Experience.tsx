"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Career
        </div>
        <h2
          className="font-bold mb-12"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Professional Experience
        </h2>

        <div
          ref={ref}
          className="relative"
          style={{ paddingLeft: "2rem" }}
        >
          {/* Timeline line */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: "0.5rem", width: 1, background: "var(--border2)" }}
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ paddingBottom: i < EXPERIENCE.length - 1 ? "3rem" : 0 }}
            >
              {/* Dot */}
              <div
                className="absolute rounded-full"
                style={{
                  left: "-1.65rem",
                  top: "0.4rem",
                  width: 10,
                  height: 10,
                  background: exp.current ? "var(--accent2)" : "var(--accent)",
                  border: "2px solid var(--bg)",
                  boxShadow: exp.current ? "0 0 8px rgba(167,139,250,0.5)" : "none",
                }}
              />

              {/* Content */}
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="font-bold text-lg">{exp.company}</span>
                {exp.current && (
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{
                      color: "var(--green)",
                      background: "rgba(52,211,153,0.1)",
                      border: "1px solid rgba(52,211,153,0.2)",
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <div
                className="font-mono text-sm mb-1"
                style={{ color: "var(--accent2)" }}
              >
                {exp.role}
              </div>
              <div className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                {exp.period}
                {exp.location && ` · ${exp.location}`}
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      color: "var(--muted)",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
