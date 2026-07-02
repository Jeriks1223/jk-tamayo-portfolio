export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()} · Jericho Kyle M. Tamayo · Built with Next.js &amp; Framer Motion · Cebu, Philippines 🇵🇭
      </p>
    </footer>
  );
}
