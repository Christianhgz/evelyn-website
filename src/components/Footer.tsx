"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-name", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
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
        immediateRender: false,
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
        padding: "var(--footer-pad)",
        background: "var(--color-espresso)",
        color: "color-mix(in srgb, var(--color-stone) 90%, var(--color-terra-soft))",
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
            <span>evelyntomkelski@gmail.com</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
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

            <div style={{ display: "flex", gap: 10 }}>
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
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon-btn social-icon-btn--light">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
