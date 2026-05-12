"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    id: "casa",
    title: "Casa Tropicalia",
    client: "Brand identity",
    year: 2024,
    category: "Branding",
    glyph: "Ct",
    gradient:
      "linear-gradient(135deg, var(--color-terra-soft) 0%, var(--color-terra) 100%)",
  },
  {
    id: "sienna",
    title: "Sienna reel",
    client: "Motion series",
    year: 2024,
    category: "Motion",
    glyph: "Sr",
    gradient:
      "linear-gradient(135deg, var(--color-ochre) 0%, var(--color-espresso) 100%)",
  },
  {
    id: "aurora",
    title: "Aurora Series",
    client: "Illustration",
    year: 2024,
    category: "Illustration",
    glyph: "Au",
    gradient:
      "linear-gradient(135deg, var(--color-terra) 0%, var(--color-espresso) 100%)",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="#"
      className="project-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        background: "var(--bg-surface)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: hover
          ? "var(--shadow-card-hover)"
          : "var(--shadow-1)",
        transform: hover ? "translateY(-4px)" : "none",
        border: hover
          ? "1.5px solid var(--color-terra)"
          : "1.5px solid transparent",
        transition: "all 240ms cubic-bezier(0.22,0.61,0.36,1)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          background: project.gradient,
          display: "flex",
          alignItems: "flex-end",
          padding: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-espresso)",
            background: "var(--color-ochre-soft)",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          {project.category}
        </span>
        {/* Decorative glyph */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 72,
            color: "rgba(250,248,245,0.22)",
            letterSpacing: "-0.02em",
            pointerEvents: "none",
          }}
        >
          {project.glyph}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "20px 24px 24px" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 28,
            color: "var(--color-terra)",
            lineHeight: 1.1,
            marginBottom: 4,
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--fg-2)",
          }}
        >
          {project.client} · {project.year}
        </div>
      </div>
    </a>
  );
}

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-header", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ padding: "120px 48px", background: "var(--bg-page)" }}
    >
      <div style={{ maxWidth: "var(--max-content)", margin: "0 auto" }}>
        {/* Header row */}
        <div
          className="work-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Featured work
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(40px, 4.5vw, 64px)",
                color: "var(--fg-1)",
                margin: 0,
                lineHeight: 1.05,
                maxWidth: "22ch",
                letterSpacing: "-0.02em",
              }}
            >
              Selected projects — 2022 to today.
            </h2>
          </div>
          <a href="#" className="btn btn-ghost">
            See full archive →
          </a>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
