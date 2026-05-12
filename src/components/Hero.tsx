"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", immediateRender: false } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6, delay: 0.3 })
        .from(".hero-name", { y: 50, opacity: 0, duration: 0.9 }, "-=0.3")
        .from(".hero-divider", { scaleX: 0, transformOrigin: "left", duration: 0.6 }, "-=0.4")
        .from(".hero-pipes", { y: 12, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-lead", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.3")
        .from(".hero-portrait", { scale: 1.06, opacity: 0, duration: 1.1, ease: "power2.out" }, 0.5)
        .from(".hero-scroll-cue", { y: 10, opacity: 0, duration: 0.5 }, "-=0.2");
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "var(--hero-pad)",
        minHeight: "var(--hero-section-min-h)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-content)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "var(--hero-cols)",
          gap: "var(--hero-gap)",
          alignItems: "center",
          minHeight: "var(--hero-min-h)",
          position: "relative",
        }}
      >
        {/* ── Left: copy ──────────────────────────────────────────── */}
        <div className="hero-copy-wrap" style={{ position: "relative", zIndex: 3 }}>
          <div className="eyebrow hero-eyebrow" style={{ marginBottom: 32 }}>
            Portfolio · 2026
          </div>

          <h1
            className="hero-name"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "var(--fs-display)",
              lineHeight: "var(--lh-display)",
              color: "var(--color-terra)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Evelyn
            <br />
            Tomkelski
          </h1>

          <div
            className="hero-divider"
            style={{
              height: 1,
              background: "var(--color-terra)",
              width: 96,
              margin: "36px 0 24px",
            }}
          />

          <div className="pipe-list hero-pipes" style={{ fontSize: 16, marginBottom: 32 }}>
            <span>Creative Coordinator</span>
            <span>Graphic Designer</span>
            <span>Motion Artist</span>
            <span>Illustrator</span>
          </div>

          <p
            className="hero-lead"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 21,
              lineHeight: 1.55,
              color: "var(--fg-1)",
              maxWidth: "34ch",
              margin: "0 0 24px",
            }}
          >
            Hi, I&apos;m Evelyn — I tell stories with visuals, and I mean every
            frame. Born in Brazil, sharpened in Ireland and Thailand, creating
            from Chile.
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* Socials — first in DOM so they appear on top row on mobile */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/evelyntomkelski/",
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                label: "Behance",
                href: "https://www.behance.net/vivitomkelski",
                d: "M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.791 1.872 1.864 1.872.914 0 1.559-.469 1.81-1.326l3.083.484zm-5.987-2.193c-.132-1.18-.785-1.843-1.75-1.843-.982 0-1.698.673-1.862 1.843h3.612zM8.949 13.049c.897-.443 1.449-1.243 1.449-2.271 0-2.127-1.647-3.278-4.31-3.278H1v12h5.281c2.908 0 4.697-1.27 4.697-3.522.001-1.385-.617-2.394-2.029-2.929zM3.797 9.272h2.609c.983 0 1.544.404 1.544 1.182 0 .834-.624 1.206-1.813 1.206H3.797V9.272zm3.129 7.528H3.797v-2.758h3.233c1.267 0 1.928.469 1.928 1.378 0 .878-.697 1.38-2.032 1.38z",
              },
              {
                label: "Vimeo",
                href: "https://vimeo.com/evelyntomkelski",
                d: "M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.612-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.478 4.807z",
              },
            ].map(({ label, href, d }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon-btn hero-cta">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d={d} />
                </svg>
              </a>
            ))}
            </div>

            {/* Divider — hidden on mobile */}
            <div className="hero-action-divider" style={{ width: 1, height: 28, background: "var(--border-hairline)", margin: "0 4px" }} />

            {/* CTA buttons — second row on mobile */}
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#work" className="btn btn-primary hero-cta">
                View work →
              </a>
              <a href="#contact" className="btn btn-ghost hero-cta">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: arc + portrait ────────────────────────────────── */}
        <div
          className="hero-portrait hero-portrait-wrap"
          style={{
            position: "relative",
            aspectRatio: "1 / 1.05",
            width: "100%",
            zIndex: 1,
          }}
        >
          {/* Terra arc — hidden on mobile via .hero-arc */}
          <svg
            className="hero-arc"
            viewBox="0 0 600 600"
            style={{
              position: "absolute",
              top: -60,
              right: -100,
              width: 680,
              height: 680,
              zIndex: 0,
            }}
          >
            <path
              d="M 600 600 Q 600 60 260 60 Q -60 60 -60 600 Z"
              fill="var(--color-terra)"
            />
          </svg>

          {/* Ochre dot */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: -28,
              zIndex: 3,
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "var(--color-ochre)",
            }}
          />

          {/* Portrait card */}
          <div
            style={{
              position: "absolute",
              inset: "32px 28px 32px 56px",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow:
                "0 24px 56px rgba(58,31,13,0.22), 0 8px 16px rgba(58,31,13,0.10)",
              background: "var(--bg-surface)",
              zIndex: 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Evelyn Tomkelski"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          {/* Location caption */}
          <div
            style={{
              position: "absolute",
              bottom: -2,
              left: 64,
              zIndex: 2,
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              letterSpacing: "0.24em",
              color: "var(--fg-2)",
              textTransform: "uppercase",
            }}
          >
            Santiago, CL · 2026
          </div>
        </div>
      </div>

      {/* ── Scroll cue ──────────────────────────────────────────────── */}
      <div
        className="hero-scroll-cue"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          letterSpacing: "0.24em",
          color: "var(--fg-3)",
          textTransform: "uppercase",
          zIndex: 4,
        }}
      >
        <span>Scroll</span>
        <div style={{ width: 1, height: 28, background: "var(--color-terra)" }} />
      </div>
    </section>
  );
}
