"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="gradient-text-accent font-mono font-bold" style={{ fontSize: "2.5rem" }}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="py-12"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <div
                className="text-xs uppercase tracking-widest mt-1"
                style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
