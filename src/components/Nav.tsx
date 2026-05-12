"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 72,
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(240,237,232,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid var(--color-terra)"
          : "1px solid transparent",
        transition:
          "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base) var(--ease-out)",
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 28,
          color: "var(--color-terra)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Evelyn
      </a>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Work", "About", "Contact"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onMouseEnter={() => setHoveredLink(label)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: hoveredLink === label ? "var(--color-terra)" : "var(--fg-2)",
              textDecoration: "none",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-ghost"
          style={{ padding: "9px 18px", fontSize: 12 }}
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
