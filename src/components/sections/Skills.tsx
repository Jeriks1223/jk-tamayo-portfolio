"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/lib/data";
import TechIcon, { techColors, hasTechIcon } from "@/components/ui/TechIcon";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" style={{ padding: "6rem 1.5rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Technical Expertise
        </div>
        <h2
          className="font-bold mb-12"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Skills & Technologies
        </h2>

        <div
          ref={ref}
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 transition-all"
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
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: cat.color }}
                >
                  {cat.icon}
                </div>
                <span className="text-sm font-semibold">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded-lg transition-all cursor-default"
                    style={{
                      color: "var(--muted)",
                      background: hasTechIcon(tag)
                        ? techColors[tag] ?? "var(--bg)"
                        : "var(--bg)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    {hasTechIcon(tag) && (
                      <span className="flex-shrink-0 opacity-80">
                        <TechIcon name={tag} size={13} />
                      </span>
                    )}
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
