import { CINEMATIC_MODULES } from "@/data/modules";
import type { CinematicModule } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";

// ─── Featured Visual Inserts ──────────────────────────────────────────────────

function ScriptArchitectVisual() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #110022 100%)",
      }}
    >
      {/* Parchment lines */}
      <div className="absolute inset-0 flex flex-col justify-center gap-[6px] px-4 py-3">
        {[
          { w: 80, id: "l1" },
          { w: 60, id: "l2" },
          { w: 70, id: "l3" },
          { w: 45, id: "l4" },
          { w: 65, id: "l5" },
          { w: 50, id: "l6" },
          { w: 75, id: "l7" },
          { w: 40, id: "l8" },
        ].map(({ w, id }, i) => (
          <div
            key={id}
            className="h-[2px] rounded-full"
            style={{
              width: `${w}%`,
              background:
                i === 2 || i === 5
                  ? "rgba(139,0,255,0.55)"
                  : "rgba(255,255,255,0.12)",
              marginLeft: i === 2 || i === 5 ? "8px" : "0",
            }}
          />
        ))}
      </div>
      {/* Violet data stream flowing right */}
      <div
        className="absolute inset-y-0 right-0 w-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,0,255,0.18) 50%, rgba(139,0,255,0.35) 100%)",
        }}
      />
      {/* Violet particles */}
      {[
        { top: 20, id: "p1" },
        { top: 45, id: "p2" },
        { top: 65, id: "p3" },
        { top: 80, id: "p4" },
      ].map(({ top, id }) => (
        <div
          key={id}
          className="absolute right-3 w-1.5 h-1.5 rounded-full"
          style={{
            top: `${top}%`,
            background: "#8B00FF",
            boxShadow: "0 0 6px #8B00FF, 0 0 12px #8B00FF88",
            opacity: 0.9,
          }}
        />
      ))}
      <div
        className="absolute bottom-2 right-2 text-[9px] font-mono"
        style={{ color: "rgba(139,0,255,0.7)" }}
      >
        NARRATIVE.AI
      </div>
    </div>
  );
}

function MacrVisual() {
  const angles = [
    "0°",
    "45°",
    "90°",
    "135°",
    "180°",
    "225°",
    "270°",
    "315°",
    "360°",
  ];
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #000a1a 0%, #001122 100%)",
      }}
    >
      {/* 3×3 angle grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {angles.map((angle) => {
          const isCenter = angle === "180°";
          return (
            <div
              key={angle}
              className="relative flex items-center justify-center rounded-sm"
              style={{
                width: 34,
                height: 24,
                background: isCenter
                  ? "rgba(0,163,255,0.25)"
                  : "rgba(0,163,255,0.07)",
                border: isCenter
                  ? "1px solid #00A3FF"
                  : "1px solid rgba(0,163,255,0.25)",
                boxShadow: isCenter ? "0 0 8px #00A3FF66" : "none",
              }}
            >
              <span
                className="text-[6px] font-mono"
                style={{ color: isCenter ? "#00A3FF" : "rgba(0,163,255,0.5)" }}
              >
                {angle}
              </span>
              {/* connecting lines from center */}
              {!isCenter && (
                <div
                  className="absolute"
                  style={{
                    width: 1,
                    height: "100%",
                    background: "rgba(0,163,255,0.15)",
                    left: "50%",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      {/* Holographic overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,163,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-2 right-2 text-[9px] font-mono"
        style={{ color: "rgba(0,163,255,0.7)" }}
      >
        36-ANGLE DNA
      </div>
    </div>
  );
}

function GenesisLabVisual() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center gap-3"
      style={{
        background: "linear-gradient(135deg, #0a001a 0%, #110022 100%)",
      }}
    >
      {/* Three source thumbnails */}
      <div className="flex flex-col gap-1.5">
        {[
          { op: 0.15, id: "t1" },
          { op: 0.23, id: "t2" },
          { op: 0.31, id: "t3" },
        ].map(({ op, id }) => (
          <div
            key={id}
            className="rounded-sm"
            style={{
              width: 28,
              height: 20,
              background: `linear-gradient(135deg, rgba(139,0,255,${op}) 0%, rgba(100,0,200,0.1) 100%)`,
              border: "1px solid rgba(139,0,255,0.4)",
            }}
          />
        ))}
      </div>
      {/* Flow arrows */}
      <div className="flex flex-col gap-3">
        {["a1", "a2", "a3"].map((id) => (
          <div key={id} className="flex items-center gap-0.5">
            <div
              style={{
                width: 16,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(139,0,255,0.5), rgba(139,0,255,0.9))",
              }}
            />
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid rgba(139,0,255,0.8)",
                borderTop: "3px solid transparent",
                borderBottom: "3px solid transparent",
              }}
            />
          </div>
        ))}
      </div>
      {/* Output frame */}
      <div
        className="rounded-sm flex items-center justify-center"
        style={{
          width: 52,
          height: 68,
          background:
            "linear-gradient(135deg, rgba(139,0,255,0.22) 0%, rgba(100,0,200,0.15) 100%)",
          border: "1px solid #8B00FF",
          boxShadow: "0 0 14px rgba(139,0,255,0.45)",
        }}
      >
        <span
          className="text-[8px] font-mono text-center leading-tight"
          style={{ color: "rgba(139,0,255,0.9)" }}
        >
          FILM
          <br />
          DNA
        </span>
      </div>
      <div
        className="absolute bottom-2 right-2 text-[9px] font-mono"
        style={{ color: "rgba(139,0,255,0.7)" }}
      >
        STORY.ENGINE
      </div>
    </div>
  );
}

function CineLookVisual() {
  const grades = [
    { label: "WARM", from: "#FF6B35", to: "#FFB347" },
    { label: "CINEMATIC", from: "#1a3a5c", to: "#00A3FF" },
    { label: "TEAL", from: "#008080", to: "#00E5FF" },
    { label: "NOIR", from: "#1a1a1a", to: "#4a4a4a" },
    { label: "GOLDEN", from: "#B8860B", to: "#FFD700" },
  ];
  return (
    <div
      className="relative w-full h-full flex flex-col"
      style={{ background: "#050508" }}
    >
      <div className="flex-1 flex">
        {grades.map((g) => (
          <div
            key={g.label}
            className="flex-1 relative flex items-end justify-center pb-1"
            style={{
              background: `linear-gradient(180deg, ${g.from} 0%, ${g.to} 100%)`,
            }}
          >
            <span
              className="text-[5px] font-mono font-bold tracking-wider"
              style={{
                color: "rgba(255,255,255,0.85)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {g.label}
            </span>
          </div>
        ))}
      </div>
      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
        }}
      />
      <div
        className="absolute bottom-1 right-2 text-[9px] font-mono"
        style={{ color: "rgba(0,163,255,0.7)" }}
      >
        LUT MASTER
      </div>
    </div>
  );
}

// ─── Generic Visuals ──────────────────────────────────────────────────────────

function GenericVisual({ accent }: { accent: "blue" | "violet" }) {
  const color = accent === "blue" ? "#00A3FF" : "#8B00FF";
  const colorAlpha = accent === "blue" ? "rgba(0,163,255," : "rgba(139,0,255,";
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 30% 50%, ${colorAlpha}0.12) 0%, transparent 65%), #050508`,
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${colorAlpha}0.3) 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />
      {/* Accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-2 right-2 text-[9px] font-mono"
        style={{ color: `${colorAlpha}0.6)` }}
      >
        MODULE.AI
      </div>
    </div>
  );
}

// ─── Card Component ───────────────────────────────────────────────────────────

const FEATURED_VISUALS: Record<string, React.ReactNode> = {
  "script-architect": <ScriptArchitectVisual />,
  macr: <MacrVisual />,
  "genesis-lab": <GenesisLabVisual />,
  "cinelook-studio": <CineLookVisual />,
};

interface ModuleCardProps {
  module: CinematicModule;
  index: number;
  isFeatured: boolean;
}

function ModuleCard({ module, index, isFeatured }: ModuleCardProps) {
  const [hovered, setHovered] = useState(false);
  const isBlue = module.accent === "blue";
  const accentColor = isBlue ? "#00A3FF" : "#8B00FF";
  const glowBase = isBlue ? "rgba(0,163,255,0.33)" : "rgba(139,0,255,0.33)";
  const glowHover = isBlue
    ? "0 0 20px rgba(0,163,255,0.55), 0 0 40px rgba(0,163,255,0.25), 0 0 1px rgba(0,163,255,0.8) inset"
    : "0 0 20px rgba(139,0,255,0.55), 0 0 40px rgba(139,0,255,0.25), 0 0 1px rgba(139,0,255,0.8) inset";
  const glowIdle = isBlue
    ? "0 0 10px rgba(0,163,255,0.2), 0 0 1px rgba(0,163,255,0.4) inset"
    : "0 0 10px rgba(139,0,255,0.2), 0 0 1px rgba(139,0,255,0.4) inset";

  const visualNode = FEATURED_VISUALS[module.id] ?? (
    <GenericVisual accent={module.accent} />
  );

  return (
    <motion.div
      data-ocid={`modules.item.${index + 1}`}
      className="relative flex flex-col cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.06, 0.8),
        ease: "easeOut",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111827",
        border: `1px solid ${accentColor}`,
        boxShadow: hovered ? glowHover : glowIdle,
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        borderRadius: 0,
        padding: "1.5rem",
      }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div
          className="absolute top-0 right-0 px-2 py-0.5 text-[10px] font-bold tracking-widest font-body"
          style={{
            background: accentColor,
            color: "#000",
            letterSpacing: "0.12em",
            zIndex: 2,
          }}
        >
          FEATURED
        </div>
      )}

      {/* Tag */}
      {module.tag && (
        <div
          className="absolute top-3 left-3 px-1.5 py-0.5 text-[9px] font-mono tracking-wider"
          style={{
            background: `${accentColor}18`,
            border: `1px solid ${accentColor}55`,
            color: accentColor,
          }}
        >
          {module.tag}
        </div>
      )}

      {/* Icon row */}
      <div className="flex items-start justify-between mt-5 mb-3">
        <span
          className="text-5xl leading-none select-none"
          style={{ filter: `drop-shadow(0 0 8px ${glowBase})` }}
          role="img"
          aria-label={module.headline}
        >
          {module.icon}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="w-full h-px mb-3"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, ${accentColor}22, transparent)`,
        }}
      />

      {/* Headline */}
      <h3
        className="text-2xl leading-tight mb-3 font-display uppercase"
        style={{ color: "#ffffff", letterSpacing: "0.04em" }}
      >
        {module.headline}
      </h3>

      {/* Visual area */}
      <div
        className="w-full mb-3 overflow-hidden flex-shrink-0"
        style={{ height: isFeatured ? "140px" : "112px" }}
      >
        {visualNode}
      </div>

      {/* Description */}
      <p
        className="text-sm font-body leading-relaxed flex-1"
        style={{ color: "rgba(156,163,175,0.9)" }}
      >
        {module.description}
      </p>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(90deg, transparent, ${accentColor}, transparent)`
            : "transparent",
        }}
      />
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ModulesSection() {
  return (
    <section
      id="modules"
      data-ocid="modules.section"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,163,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Top edge ambient */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,163,255,0.5), rgba(139,0,255,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="inline-block mb-4 px-4 py-1 text-xs font-mono tracking-[0.25em] uppercase border"
            style={{
              color: "#00A3FF",
              borderColor: "rgba(0,163,255,0.4)",
              background: "rgba(0,163,255,0.06)",
            }}
          >
            Full Production Arsenal
          </div>

          <h2
            className="text-6xl sm:text-7xl lg:text-8xl font-display uppercase text-white leading-none mb-4"
            style={{
              textShadow:
                "0 0 40px rgba(0,163,255,0.2), 0 0 80px rgba(0,163,255,0.1)",
              letterSpacing: "0.06em",
            }}
          >
            18+ Cinematic Modules
          </h2>

          <p
            className="text-xl sm:text-2xl font-body font-semibold tracking-wider"
            style={{
              color: "#00E5FF",
              textShadow:
                "0 0 20px rgba(0,229,255,0.7), 0 0 40px rgba(0,229,255,0.35)",
            }}
          >
            The Complete AI Filmmaking Arsenal.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div
              className="h-px w-32"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,163,255,0.6))",
              }}
            />
            <div
              className="w-2 h-2 rotate-45"
              style={{ background: "#00A3FF", boxShadow: "0 0 10px #00A3FF" }}
            />
            <div
              className="h-px w-32"
              style={{
                background:
                  "linear-gradient(90deg, rgba(139,0,255,0.6), transparent)",
              }}
            />
          </div>
        </motion.div>

        {/* Modules grid */}
        <div
          data-ocid="modules.list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {CINEMATIC_MODULES.map((mod, idx) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              index={idx}
              isFeatured={idx < 4}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <p
            className="font-body mb-6"
            style={{ color: "rgba(156,163,175,0.8)" }}
          >
            All 18 modules. One license. Your API key. Your rules.
          </p>
          <a
            data-ocid="modules.primary_button"
            href="#pricing"
            className="inline-block px-10 py-4 font-display text-xl tracking-widest uppercase transition-all duration-300 pulse-cta"
            style={{
              background: "linear-gradient(135deg, #00A3FF 0%, #0077CC 100%)",
              color: "#000",
              boxShadow:
                "0 0 25px rgba(0,163,255,0.5), 0 0 50px rgba(0,163,255,0.2)",
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 40px rgba(0,163,255,0.8), 0 0 80px rgba(0,163,255,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 25px rgba(0,163,255,0.5), 0 0 50px rgba(0,163,255,0.2)";
            }}
          >
            Get All 18 Modules — $19.99
          </a>
        </motion.div>
      </div>
    </section>
  );
}
