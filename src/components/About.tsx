"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-image", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".about-text > *", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="grain section-pad"
      style={{
        background: "color-mix(in srgb, var(--bg-page) 70%, var(--bg-surface))",
      }}
    >
      <div
        className="about-grid"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Portrait */}
        <div
          className="about-image"
          style={{
            width: "100%",
            aspectRatio: "4 / 5",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(58,31,13,0.12)",
            background: "var(--color-espresso)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evelyn-hero.png"
            alt="Evelyn Tomkelski"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            About me
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(40px, 4.5vw, 64px)",
              lineHeight: 1.05,
              color: "var(--fg-1)",
              margin: "0 0 40px",
              maxWidth: "20ch",
              letterSpacing: "-0.02em",
            }}
          >
            A storyteller, working in pictures.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 19,
              lineHeight: 1.75,
              color: "var(--fg-1)",
              maxWidth: "52ch",
              marginBottom: 22,
            }}
          >
            I&apos;m a Brazilian-born creative working across motion, design, and
            illustration. For the last eight years I&apos;ve coordinated visual
            identities, animated stories, and led small studios from{" "}
            <em>São Paulo</em>, <em>Dublin</em>, <em>Chiang Mai</em>, and now{" "}
            <em>Santiago</em>.
          </p>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 19,
              lineHeight: 1.75,
              color: "var(--fg-1)",
              maxWidth: "52ch",
              marginBottom: 36,
            }}
          >
            My favourite projects sit where craft meets meaning — when a brand,
            a film, or a single frame helps someone feel something true. That&apos;s
            the work I&apos;m here for.
          </p>

          <div className="pipe-list" style={{ fontSize: 13 }}>
            <span>São Paulo, BR</span>
            <span>Dublin, IE</span>
            <span>Chiang Mai, TH</span>
            <span>Santiago, CL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
