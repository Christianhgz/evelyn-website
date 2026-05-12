"use client";

export default function GradientAvatar({ radius = 0 }: { radius?: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: radius,
        background:
          "linear-gradient(135deg, var(--color-terra-soft) 0%, var(--color-terra) 55%, var(--color-espresso) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* depth highlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 35% 30%, rgba(250,248,245,0.22) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />
      {/* silhouette */}
      <svg
        viewBox="0 0 200 240"
        preserveAspectRatio="xMidYMax meet"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "88%",
          display: "block",
        }}
      >
        <circle cx="100" cy="82" r="46" fill="rgba(255,255,255,0.32)" />
        <path
          d="M 18 240 Q 18 150 100 150 Q 182 150 182 240 Z"
          fill="rgba(255,255,255,0.32)"
        />
      </svg>
    </div>
  );
}
