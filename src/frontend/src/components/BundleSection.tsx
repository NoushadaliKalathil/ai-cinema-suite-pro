import { useState } from "react";

/* ─── Inline float keyframe injected once ─────────────────────────── */
const floatStyle = `
@keyframes floatBob {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
`;

function injectFloatStyle() {
  if (
    typeof document !== "undefined" &&
    !document.getElementById("float-bob-style")
  ) {
    const tag = document.createElement("style");
    tag.id = "float-bob-style";
    tag.textContent = floatStyle;
    document.head.appendChild(tag);
  }
}
injectFloatStyle();

/* ─── Asset card ───────────────────────────────────────────────────── */
interface AssetCardProps {
  label: string;
  delay?: string;
  children: React.ReactNode;
}

function AssetCard({ label, delay = "0s", children }: AssetCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid="bundle.asset_card"
      className="flex flex-col items-center gap-4 cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animation: `floatBob 3s ease-in-out ${delay} infinite`,
        transform: hovered ? "scale(1.1)" : "scale(1)",
        transition: "transform 300ms ease, filter 300ms ease",
        filter: hovered
          ? "drop-shadow(0 0 24px rgba(0,163,255,0.6))"
          : "drop-shadow(0 0 8px rgba(0,163,255,0.2))",
      }}
    >
      {children}
      <span
        className="font-body text-sm font-semibold tracking-wide text-center"
        style={{ color: "#aab4cc", fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Glass Disc (EXE / DMG) ──────────────────────────────────────── */
interface GlassDiscProps {
  text: string;
  color: string;
  glowColor: string;
}

function GlassDisc({ text, color, glowColor }: GlassDiscProps) {
  return (
    <div
      style={{
        width: 128,
        height: 128,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1e293b 0%, #0f1117 100%)",
        border: `1.5px solid ${color}`,
        boxShadow: `0 0 18px 2px ${glowColor}44, inset 0 1px 0 rgba(255,255,255,0.05)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Inner glass sheen */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
          borderRadius: "50% 50% 0 0",
        }}
      />
      {/* Concentric ring */}
      <div
        style={{
          position: "absolute",
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: `1px solid ${color}33`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 96,
          height: 96,
          borderRadius: "50%",
          border: `1px solid ${color}22`,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 28,
          letterSpacing: 2,
          color,
          textShadow: `0 0 12px ${color}cc`,
          zIndex: 1,
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ─── Document Card (PDF) ─────────────────────────────────────────── */
interface DocCardProps {
  headerColor: string;
}

function DocCard({ headerColor }: DocCardProps) {
  return (
    <div
      style={{
        width: 112,
        height: 144,
        borderRadius: 8,
        background: "linear-gradient(160deg, #1a1e2e 0%, #0d1020 100%)",
        border: `1px solid ${headerColor}55`,
        boxShadow: `0 0 16px 2px ${headerColor}33`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header strip */}
      <div
        style={{
          height: 28,
          background: `linear-gradient(90deg, ${headerColor}cc 0%, ${headerColor}44 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            letterSpacing: 2,
            color: "#fff",
          }}
        >
          PDF
        </span>
      </div>
      {/* Document lines */}
      <div
        style={{
          padding: "14px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {([80, 60, 70] as const).map((w, idx) => (
          <div
            key={w}
            style={{
              height: 6,
              width: `${w}%`,
              borderRadius: 3,
              background: `rgba(255,255,255,0.${10 + idx * 3})`,
            }}
          />
        ))}
        <div
          style={{
            height: 6,
            width: "50%",
            borderRadius: 3,
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            height: 6,
            width: "75%",
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
          }}
        />
        {/* Tiny colored accent bar */}
        <div
          style={{
            marginTop: "auto",
            height: 4,
            width: "40%",
            borderRadius: 2,
            background: headerColor,
            boxShadow: `0 0 6px ${headerColor}`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── Play Button (Video) ─────────────────────────────────────────── */
function PlayButton() {
  return (
    <div
      style={{
        width: 128,
        height: 128,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 40% 35%, #1a2540 0%, #050810 100%)",
        border: "1.5px dashed #00A3FF",
        boxShadow: "0 0 20px 4px rgba(0,163,255,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Outer ring pulse */}
      <div
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: "50%",
          border: "1px solid rgba(0,163,255,0.2)",
        }}
      />
      {/* Play triangle */}
      <div
        style={{
          width: 0,
          height: 0,
          marginLeft: 6,
          borderTop: "22px solid transparent",
          borderBottom: "22px solid transparent",
          borderLeft: "38px solid #00A3FF",
          filter: "drop-shadow(0 0 10px #00A3FFcc)",
        }}
      />
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────────────────── */
export default function BundleSection() {
  return (
    <section
      data-ocid="bundle.section"
      style={{
        background: "linear-gradient(135deg, #1a1e2e 0%, #0f1117 100%)",
        padding: "96px 48px",
      }}
    >
      {/* Headline */}
      <h2
        className="text-center"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          letterSpacing: "0.06em",
          color: "#ffffff",
          textShadow: "0 0 32px rgba(0,163,255,0.25)",
          marginBottom: 20,
        }}
      >
        📦 The Complete Production Ecosystem
      </h2>

      {/* Sub-description */}
      <p
        className="text-center mx-auto"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.05rem",
          lineHeight: 1.75,
          color: "#9aa3b8",
          maxWidth: 700,
          marginBottom: 80,
        }}
      >
        You are not just downloading an app; you are gaining an organised master
        kit: Native Win/Mac installers, two professional PDF Masterclasses, and
        full video walkthroughs.
      </p>

      {/* Floating Assets */}
      <div
        data-ocid="bundle.assets_list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 48,
          alignItems: "flex-end",
        }}
      >
        {/* Asset 1 — Windows EXE */}
        <AssetCard label="Windows Installer" delay="0s">
          <GlassDisc text="EXE" color="#00A3FF" glowColor="#00A3FF" />
        </AssetCard>

        {/* Asset 2 — Mac DMG */}
        <AssetCard label="Mac Installer" delay="0.5s">
          <GlassDisc text="DMG" color="#8B00FF" glowColor="#8B00FF" />
        </AssetCard>

        {/* Asset 3 — Billing Index PDF */}
        <AssetCard label="Billing Masterclass PDF" delay="1s">
          <DocCard headerColor="#00A3FF" />
        </AssetCard>

        {/* Asset 4 — Pro Masterclass PDF */}
        <AssetCard label="Pro Masterclass PDF" delay="1.5s">
          <DocCard headerColor="#8B00FF" />
        </AssetCard>

        {/* Asset 5 — Video Walkthrough */}
        <AssetCard label="Video Walkthroughs" delay="2s">
          <PlayButton />
        </AssetCard>
      </div>

      {/* Decorative bottom divider */}
      <div
        style={{
          marginTop: 80,
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, #00A3FF44 30%, #8B00FF44 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
