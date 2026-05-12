"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      delay: 0.1,
    });
  });

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
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-terra)"
          : "1px solid transparent",
        transition: "all 240ms cubic-bezier(0.22,0.61,0.36,1)",
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
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg-2)",
              textDecoration: "none",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color =
                "var(--color-terra)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "var(--fg-2)")
            }
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="btn btn-ghost" style={{ padding: "9px 18px", fontSize: 12 }}>
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
