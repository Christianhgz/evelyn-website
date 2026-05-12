"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Quote() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".quote-mark", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".quote-text", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".quote-rule, .quote-attribution", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      style={{ padding: "120px 48px", background: "var(--bg-page)" }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Opening mark */}
        <div
          className="quote-mark"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 80,
            color: "var(--color-ochre)",
            lineHeight: 0.6,
            fontStyle: "italic",
            height: 36,
            userSelect: "none",
          }}
        >
          &ldquo;
        </div>

        <p
          className="quote-text"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(28px, 3vw, 44px)",
            lineHeight: 1.25,
            color: "var(--fg-1)",
            margin: "8px 0 32px",
            maxWidth: "24ch",
            letterSpacing: "-0.01em",
          }}
        >
          I want every frame to feel like it knows who it&apos;s talking to — and
          means it.
        </p>

        <div
          className="quote-rule"
          style={{
            height: 1,
            background: "var(--color-terra)",
            width: 48,
            marginBottom: 16,
          }}
        />

        <div className="pipe-list quote-attribution" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          <span>Evelyn Tomkelski</span>
          <span>Creative Coordinator</span>
        </div>
      </div>
    </section>
  );
}
