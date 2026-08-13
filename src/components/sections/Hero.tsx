"use client";

import { motion } from "framer-motion";
import { PERSONAL, TECH_STACK } from "@/lib/data";
import TechIcon, { techColors, hasTechIcon } from "@/components/ui/TechIcon";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ padding: "8rem 1.5rem 5rem" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(124,106,244,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs text-[var(--muted)] border"
            style={{ background: "var(--surface)", borderColor: "var(--border2)" }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[var(--green)]"
              style={{ animation: "pulse 2s infinite" }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="gradient-text font-bold leading-none mb-4"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {PERSONAL.name}
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={item}
          className="text-[var(--muted)] mb-4"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
        >
          {PERSONAL.headline}
        </motion.p>

        {/* Role badges */}
        <motion.div
          variants={item}
          className="flex justify-center flex-wrap gap-2 mb-6"
        >
          {PERSONAL.roles.map((role) => (
            <span
              key={role}
              className="font-mono text-xs px-3 py-1.5 rounded-md"
              style={{
                color: "var(--accent2)",
                background: "rgba(124,106,244,0.1)",
                border: "1px solid rgba(124,106,244,0.3)",
              }}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-[var(--muted)] max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "0.95rem" }}
        >
          {PERSONAL.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-xl font-medium text-sm text-white border-none cursor-pointer transition-all hover:opacity-85 hover:-translate-y-0.5"
            style={{ background: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            View Projects
          </button>
          <a
            href="/assets/resume/Resume - Jericho Kyle M. Tamayo - Updated.pdf"
            download
            className="px-7 py-3 rounded-xl font-medium text-sm text-[var(--text)] no-underline cursor-pointer transition-all hover:bg-[var(--surface)]"
            style={{
              background: "transparent",
              border: "1px solid var(--border2)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Download Resume
          </a>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-xl font-medium text-sm text-[var(--text)] border-none cursor-pointer transition-all hover:bg-[var(--surface)]"
            style={{
              background: "transparent",
              border: "1px solid var(--border2)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Contact Me
          </button>
        </motion.div>

        {/* Tech stack pills with icons */}
        <motion.div variants={item} className="flex justify-center flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg text-[var(--muted)] transition-all hover:text-[var(--text)] cursor-default"
              style={{
                background: hasTechIcon(tech) ? techColors[tech] ?? "var(--surface)" : "var(--surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {hasTechIcon(tech) && (
                <span className="flex-shrink-0 opacity-90">
                  <TechIcon name={tech} size={14} />
                </span>
              )}
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
