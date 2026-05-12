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
    <>
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(240,237,232,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid var(--color-terra)" : "1px solid transparent",
          transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base) var(--ease-out)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "var(--nav-gutter)",
            height: 72,
          }}
        >
          <a href="#top" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/navbar.png" alt="Evelyn Tomkelski" style={{ height: 40, width: "auto", display: "block" }} />
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
            <a href="#contact" className="btn btn-ghost" style={{ padding: "9px 18px", fontSize: 12 }}>
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
      </nav>

      {/* Mobile menu — outside <nav> so position:fixed isn't trapped by backdrop-filter */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {/* Top bar */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--nav-gutter)",
        }}>
          <a href="#top" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/navbar.png" alt="Evelyn Tomkelski" style={{ height: 40, width: "auto", display: "block" }} />
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "var(--fg-1)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

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
    </>
  );
}
