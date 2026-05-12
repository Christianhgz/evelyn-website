"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GradientAvatar from "./GradientAvatar";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
        padding: "40px 48px 120px",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-content)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 80,
          alignItems: "center",
          minHeight: 620,
          position: "relative",
        }}
      >
        {/* ── Left: copy ──────────────────────────────────────────── */}
        <div style={{ position: "relative", zIndex: 3 }}>
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
              margin: "0 0 44px",
            }}
          >
            Hi, I&apos;m Evelyn — I tell stories with visuals, and I mean every
            frame. Born in Brazil, sharpened in Ireland and Thailand, creating
            from Chile.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#work" className="btn btn-primary hero-cta">
              View work →
            </a>
            <a href="#contact" className="btn btn-ghost hero-cta">
              Get in touch
            </a>
          </div>
        </div>

        {/* ── Right: arc + portrait ────────────────────────────────── */}
        <div
          className="hero-portrait"
          style={{
            position: "relative",
            aspectRatio: "1 / 1.05",
            width: "100%",
            zIndex: 1,
          }}
        >
          {/* Terra arc */}
          <svg
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
            <GradientAvatar />
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
          display: "flex",
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
