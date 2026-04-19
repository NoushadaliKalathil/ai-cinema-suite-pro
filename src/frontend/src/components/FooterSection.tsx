const keyframes = `
  @keyframes cta-breathe {
    0%, 100% { transform: scale(1); box-shadow: 0 0 30px #00A3FF66, 0 0 60px #00A3FF22; }
    50% { transform: scale(1.04); box-shadow: 0 0 45px #00A3FFaa, 0 0 90px #00A3FF44; }
  }
  @keyframes gold-pulse {
    0%, 100% { text-shadow: 0 0 8px #FFD70066, 0 0 20px #FFD70033; }
    50% { text-shadow: 0 0 16px #FFD700cc, 0 0 40px #FFD70066, 0 0 60px #FFD70022; }
  }
  @keyframes badge-glow-blue {
    0%, 100% { box-shadow: 0 0 12px #00A3FF44, inset 0 0 8px #00A3FF11; }
    50% { box-shadow: 0 0 24px #00A3FF88, inset 0 0 16px #00A3FF22; }
  }
  @keyframes badge-glow-violet {
    0%, 100% { box-shadow: 0 0 12px #8B00FF44, inset 0 0 8px #8B00FF11; }
    50% { box-shadow: 0 0 24px #8B00FF88, inset 0 0 16px #8B00FF22; }
  }
`;

export default function FooterSection() {
  return (
    <>
      <style>{keyframes}</style>

      {/* ── Three-zone split ── */}
      <section
        id="footer-section"
        style={{ backgroundColor: "#050508" }}
        className="w-full"
        data-ocid="footer.section"
      >
        <div className="flex flex-col lg:flex-row min-h-[480px]">
          {/* LEFT — Design Era (Azumni Blue) */}
          <div
            className="flex-1 flex flex-col items-center justify-center gap-6 px-10 py-16 text-center relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #00A3FF10 0%, #030f1a 60%, #020a12 100%)",
              borderRight: "1px solid rgba(0,163,255,0.3)",
            }}
            data-ocid="footer.design-era.section"
          >
            {/* subtle scanline texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, #00A3FF 2px, #00A3FF 3px)",
              }}
            />

            <span
              className="text-sm tracking-[0.3em] uppercase relative z-10"
              style={{ fontFamily: "var(--font-display)", color: "#00A3FF" }}
            >
              The Design Era
            </span>

            {/* Photoshop "Ps" badge */}
            <div
              className="relative z-10 flex items-center justify-center w-28 h-28 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #001d3d 0%, #003366 100%)",
                animation: "badge-glow-blue 3s ease-in-out infinite",
                border: "1px solid rgba(0,163,255,0.5)",
              }}
              aria-label="Photoshop icon"
            >
              <span
                className="leading-none select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.2rem",
                  background:
                    "linear-gradient(135deg, #ffffff 30%, #00A3FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ps
              </span>
            </div>

            <p
              className="text-xl max-w-xs relative z-10 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#b0b8c8" }}
            >
              Photoshop defined the era of the Pixel.
            </p>

            <span
              className="text-2xl relative z-10 tracking-widest"
              style={{ fontFamily: "var(--font-display)", color: "#00A3FF" }}
            >
              1990 — 2024
            </span>
          </div>

          {/* CENTER — The Divide (Neon Gold) */}
          <div
            className="flex flex-col items-center justify-center gap-5 px-10 py-16 text-center relative overflow-hidden lg:min-w-[320px] xl:min-w-[380px]"
            style={{
              background:
                "linear-gradient(180deg, #0a0a0a 0%, #0d0a00 50%, #0a0a0a 100%)",
              borderLeft: "1px solid rgba(255,215,0,0.4)",
              borderRight: "1px solid rgba(255,215,0,0.4)",
            }}
            data-ocid="footer.divider.section"
          >
            {/* vertical gold accent line */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, #FFD70015 40%, #FFD70015 60%, transparent 100%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-3 max-w-xs">
              <div
                className="w-px h-12 mx-auto"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, #FFD700, transparent)",
                }}
              />
              <h2
                className="text-5xl xl:text-6xl leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#FFD700",
                  animation: "gold-pulse 2.5s ease-in-out infinite",
                }}
                data-ocid="footer.headline"
              >
                Choose the Standard.
              </h2>
              <div
                className="w-px h-12 mx-auto"
                style={{
                  background: "linear-gradient(180deg, #FFD700, transparent)",
                }}
              />
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "#6b7280" }}
              >
                Which side of history will you be on?
              </p>
            </div>
          </div>

          {/* RIGHT — Cinematic Era (Neon Violet) */}
          <div
            className="flex-1 flex flex-col items-center justify-center gap-6 px-10 py-16 text-center relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #8B00FF10 0%, #0a0016 60%, #060010 100%)",
              borderLeft: "1px solid rgba(139,0,255,0.3)",
            }}
            data-ocid="footer.cinema-era.section"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, #8B00FF 2px, #8B00FF 3px)",
              }}
            />

            <span
              className="text-sm tracking-[0.3em] uppercase relative z-10"
              style={{ fontFamily: "var(--font-display)", color: "#8B00FF" }}
            >
              The Cinematic Era
            </span>

            {/* ACS badge */}
            <div
              className="relative z-10 flex items-center justify-center w-28 h-28 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #1a0033 0%, #330066 100%)",
                animation: "badge-glow-violet 3s ease-in-out infinite",
                border: "1px solid rgba(139,0,255,0.5)",
              }}
              aria-label="AI Cinema Suite icon"
            >
              <span
                className="leading-none select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.6rem",
                  background:
                    "linear-gradient(135deg, #ffffff 30%, #8B00FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ACS
              </span>
            </div>

            <p
              className="text-xl max-w-xs relative z-10 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#b0b8c8" }}
            >
              AI Cinema Suite Pro defines the era of the Cinematic Molecule.
            </p>

            <span
              className="text-2xl relative z-10 tracking-widest"
              style={{ fontFamily: "var(--font-display)", color: "#8B00FF" }}
            >
              2025 — ∞
            </span>
          </div>
        </div>

        {/* ── Final CTA block ── */}
        <div
          className="w-full flex flex-col items-center gap-8 px-6 py-20 text-center"
          style={{
            background: "linear-gradient(180deg, #050508 0%, #0a0a0a 100%)",
          }}
          data-ocid="footer.cta.section"
        >
          <p
            className="text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-body)", color: "#9ca3af" }}
          >
            Stop renting. Stop losing credits. Own your creative future forever.
          </p>

          <button
            type="button"
            data-ocid="footer.cta.primary_button"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "1.125rem",
              background: "linear-gradient(90deg, #00A3FF 0%, #0066CC 100%)",
              color: "#ffffff",
              minWidth: "500px",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              paddingLeft: "4rem",
              paddingRight: "4rem",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.05em",
              animation: "cta-breathe 2s ease-in-out infinite",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "scale(1.05)";
              el.style.boxShadow = "0 0 50px #00A3FFbb, 0 0 100px #00A3FF55";
              el.style.animation = "none";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "";
              el.style.boxShadow = "";
              el.style.animation = "cta-breathe 2s ease-in-out infinite";
            }}
          >
            GET AI CINEMA SUITE PRO | $19.99 (BYOK)
          </button>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-6"
            data-ocid="footer.trust-badges.section"
          >
            {["✓ Lifetime License", "✓ BYOK Ready", "✓ Win + Mac"].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-sm px-4 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#6ee7b7",
                    border: "1px solid rgba(110,231,183,0.25)",
                    background: "rgba(110,231,183,0.05)",
                  }}
                >
                  {badge}
                </span>
              ),
            )}
          </div>

          {/* Sub-footer */}
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}
            data-ocid="footer.subfooter"
          >
            No Subscriptions. No Credits. Pure Cinema. Kerala, India.
          </p>

          {/* Branding */}
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "#374151" }}
          >
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00A3FF", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
