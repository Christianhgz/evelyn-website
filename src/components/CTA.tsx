"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-left", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".cta-right > *", {
        x: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "120px 48px",
        background: "color-mix(in srgb, var(--bg-page) 70%, var(--bg-surface))",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 96,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="cta-left">
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Let&apos;s work together
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(44px, 5vw, 72px)",
              color: "var(--color-terra)",
              margin: "0 0 24px",
              lineHeight: 1.0,
              maxWidth: "14ch",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s make something honest.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 19,
              lineHeight: 1.75,
              color: "var(--fg-1)",
              maxWidth: "40ch",
              margin: 0,
            }}
          >
            Open to brand, motion, and short-film collaborations. Tell me a
            little about your project — what it is, who it&apos;s for, and when
            you&apos;d like it to live in the world.
          </p>
        </div>

        {/* Right */}
        <div
          className="cta-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            alignItems: "flex-start",
          }}
        >
          <a
            href="mailto:hello@evelyntomkelski.com"
            className="btn btn-primary"
            style={{ padding: "18px 28px", fontSize: 15 }}
          >
            Send a note →
          </a>

          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              letterSpacing: "0.14em",
              color: "var(--fg-2)",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            hello@evelyntomkelski.com
          </div>

          <div
            style={{
              height: 1,
              background: "var(--border-hairline)",
              width: 200,
              margin: "20px 0",
            }}
          />

          <div className="pipe-list" style={{ fontSize: 12 }}>
            <span>LinkedIn</span>
            <span>Behance</span>
            <span>Instagram</span>
            <span>Vimeo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
