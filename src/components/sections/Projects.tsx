"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

const liveUrl = (p: Project): string | null => {
  const link = "link" in p ? p.link : undefined;
  return link && link !== "#" ? link : null;
};

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const LIVE_COUNT = PROJECTS.filter(liveUrl).length;

function LiveBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-md font-mono"
      style={{
        color: "var(--green)",
        background: "rgba(52,211,153,0.12)",
        border: "1px solid rgba(52,211,153,0.35)",
      }}
    >
      <span className="relative flex w-2 h-2">
        <span
          className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
          style={{ background: "var(--green)" }}
        />
        <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: "var(--green)" }} />
      </span>
      LIVE
    </span>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [liveOnly, setLiveOnly] = useState(false);

  const filtered = PROJECTS.filter(
    (p) =>
      (activeCategory === "All" || p.category.includes(activeCategory)) &&
      (!liveOnly || liveUrl(p))
  );

  return (
    <section id="projects" style={{ padding: "6rem 1.5rem", background: "var(--bg2)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", letterSpacing: "0.15em" }}>
          Work
        </div>
        <h2
          className="font-bold mb-3"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Featured Projects
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          Projects marked <span style={{ color: "var(--green)", fontWeight: 600 }}>● LIVE</span> are deployed. Click
          the card or the <span style={{ color: "var(--text)", fontWeight: 600 }}>View Live Demo</span> button to open them.
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setLiveOnly((v) => !v)}
            aria-pressed={liveOnly}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-all font-sans"
            style={{
              background: liveOnly ? "var(--green)" : "rgba(52,211,153,0.1)",
              color: liveOnly ? "#06281c" : "var(--green)",
              border: "1px solid rgba(52,211,153,0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: liveOnly ? "#06281c" : "var(--green)" }} />
            Live Demos ({LIVE_COUNT})
          </button>
          <span className="w-px h-6 mx-1" style={{ background: "var(--border2)" }} />
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

        {filtered.length === 0 && (
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            No live demos in this category yet.
          </p>
        )}

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const url = liveUrl(project);
              const image = "image" in project ? project.image : undefined;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.05 }}
                  className={`rounded-2xl p-6 flex flex-col transition-all group ${url ? "cursor-pointer" : ""}`}
                  style={{
                    background: "var(--surface)",
                    border: url ? "1px solid rgba(52,211,153,0.3)" : "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = url ? "rgba(52,211,153,0.7)" : "rgba(124,106,244,0.4)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = url ? "rgba(52,211,153,0.3)" : "var(--border)";
                    el.style.transform = "translateY(0)";
                  }}
                  onClick={() => {
                    if (url) window.open(url, "_blank", "noopener,noreferrer");
                  }}
                >
                  {image && (
                    <div
                      className="relative w-full h-40 rounded-xl mb-4 overflow-hidden"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {url && (
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "rgba(10,10,20,0.6)" }}
                        >
                          <span
                            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                            style={{ background: "var(--accent)" }}
                          >
                            Open Live Site ↗
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between items-start gap-2 mb-4">
                    <div
                      className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: project.color }}
                    >
                      {project.icon}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {url && <LiveBadge />}
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs px-2 py-1 rounded-md font-mono"
                          style={{
                            color: "var(--muted)",
                            background: "var(--bg3)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="font-bold text-base mb-2">{project.title}</div>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
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

                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between gap-3 w-full px-4 py-2.5 rounded-xl text-white no-underline transition-opacity hover:opacity-90"
                      style={{ background: "var(--accent)" }}
                    >
                      <span className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold">View Live Demo</span>
                        <span className="font-mono text-xs opacity-80">{hostname(url)}</span>
                      </span>
                      <span className="text-lg" aria-hidden>
                        ↗
                      </span>
                    </a>
                  ) : (
                    <div
                      className="w-full px-4 py-2.5 rounded-xl text-xs font-mono text-center"
                      style={{ color: "var(--muted)", background: "var(--bg3)", border: "1px dashed var(--border2)" }}
                    >
                      Not publicly deployed
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
