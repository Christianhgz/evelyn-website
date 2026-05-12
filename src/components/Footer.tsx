"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-name", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".footer-rule, .footer-meta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      style={{
        background: "var(--color-espresso)",
        color: "color-mix(in srgb, var(--color-stone) 90%, var(--color-terra-soft))",
        padding: "80px 48px 32px",
        position: "relative",
        isolation: "isolate",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-content)",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Large name */}
        <div
          className="footer-name"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(60px, 7vw, 104px)",
            lineHeight: 1,
            color: "var(--color-terra-soft)",
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}
        >
          Evelyn Tomkelski
        </div>

        {/* Divider */}
        <div
          className="footer-rule"
          style={{
            height: 1,
            background: "rgba(240,237,232,0.12)",
            marginBottom: 28,
          }}
        />

        {/* Bottom row */}
        <div
          className="footer-meta"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "flex-end",
          }}
        >
          <div
            className="pipe-list"
            style={{
              fontSize: 12,
              color: "var(--color-warm-gray-light)",
            }}
          >
            <span>© 2026 Evelyn Tomkelski</span>
            <span>Santiago, CL</span>
            <span>hello@evelyntomkelski.com</span>
          </div>

          <a
            href="#"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 18,
              color: "var(--color-terra-soft)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            evelyntomkelski.com
          </a>
        </div>
      </div>
    </footer>
  );
}
