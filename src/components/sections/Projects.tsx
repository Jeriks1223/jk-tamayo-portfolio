"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: "6rem 1.5rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Work
        </div>
        <h2
          className="font-bold mb-8"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Featured Projects
        </h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all border-none font-sans"
              style={{
                background: activeCategory === cat ? "var(--accent)" : "var(--surface)",
                color: activeCategory === cat ? "#fff" : "var(--muted)",
                border: activeCategory === cat ? "none" : "1px solid var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl p-6 flex flex-col cursor-pointer transition-all group"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,106,244,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
                onClick={() => {
                  if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: project.color }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded-md font-mono"
                    style={{
                      color: "var(--muted)",
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="font-bold text-base mb-2 flex items-center gap-1.5">
                  {project.title}
                  {project.link && (
                    <span
                      className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    >
                      ↗
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 rounded"
                      style={{
                        color: "var(--accent2)",
                        background: "rgba(124,106,244,0.1)",
                        border: "1px solid rgba(124,106,244,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
