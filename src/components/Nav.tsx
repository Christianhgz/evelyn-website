"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

  const linkStyle = (label: string) => ({
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: hoveredLink === label ? "var(--color-terra)" : "var(--fg-2)",
    textDecoration: "none",
    transition: "color var(--dur-fast) var(--ease-out)",
  });

  return (
    <nav
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled || menuOpen ? "rgba(240,237,232,0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid var(--color-terra)"
          : "1px solid transparent",
        transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base) var(--ease-out)",
      }}
    >
      <div className="nav-inner">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
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

        {/* Desktop links */}
        <div className="nav-links">
          {["Work", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={linkStyle(label)}
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

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {["Work", "About", "Contact"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg-2)",
              textDecoration: "none",
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: 8 }}
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
