"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "border-b border-[var(--border)] glass" : ""
      }`}
    >
      <div className="font-mono text-sm text-[var(--accent2)]">
        <span className="text-[var(--muted)]">~/</span>jericho.dev
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="text-[var(--muted)] text-sm hover:text-[var(--text)] transition-colors cursor-pointer bg-transparent border-none font-sans"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo("#contact")}
        className="hidden md:block bg-[var(--accent)] text-white border-none px-5 py-2 rounded-lg text-sm font-medium cursor-pointer hover:opacity-85 transition-opacity font-sans"
      >
        Hire Me
      </button>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-[var(--muted)] text-2xl bg-transparent border-none cursor-pointer"
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[var(--bg3)] border-b border-[var(--border)] py-4 flex flex-col gap-2 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[var(--muted)] text-sm px-6 py-2 text-left hover:text-[var(--text)] transition-colors bg-transparent border-none cursor-pointer font-sans"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full bg-[var(--accent)] text-white border-none px-5 py-2 rounded-lg text-sm font-medium cursor-pointer font-sans"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
