"use client";

import { useEffect, useState } from "react";

const applyTheme = (theme: "light" | "dark") => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const defaultTheme = storedTheme
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setTheme(defaultTheme);
    applyTheme(defaultTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg border border-transparent px-3 py-2 text-base font-sans hover:border-[var(--border)]"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
