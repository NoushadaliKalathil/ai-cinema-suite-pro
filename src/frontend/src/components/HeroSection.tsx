import { useEffect, useRef, useState } from "react";

/* ─── Google Cloud SVG badge ─────────────────────────────────────── */
function GoogleCloudBadge() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Google Cloud"
    >
      <title>Google Cloud</title>
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="#0a0a0a"
        stroke="#00A3FF"
        strokeWidth="1.5"
      />
      {/* simplified cloud shape */}
      <path
        d="M14 29a5 5 0 0 1 0.3-10 7 7 0 0 1 13.4-2 5 5 0 1 1 0 12H14Z"
        fill="#1a1e2e"
        stroke="#00A3FF"
        strokeWidth="1"
      />
      {/* "G" mark */}
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#00A3FF"
        fontSize="11"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
      >
        G
      </text>
    </svg>
  );
}

/* ─── Steelbook 3D case (CSS / SVG) ──────────────────────────────── */
function SteelbookVisual() {
  return (
    <div
      className="relative mx-auto"
      style={{ width: 420, height: 280, perspective: "1200px" }}
      aria-label="AI Cinema Suite Pro software case"
    >
      {/* floating wrapper */}
      <div
        className="float-slow"
        style={{ width: "100%", height: "100%", transformStyle: "preserve-3d" }}
      >
        {/* ── Case body ──────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "perspective(1200px) rotateY(-18deg) rotateX(4deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front face */}
          <div
            style={{
              position: "absolute",
              left: 40,
              top: 0,
              width: 340,
              height: 280,
              background:
                "linear-gradient(135deg, #1a1e2e 0%, #0d0f18 60%, #0a0a0a 100%)",
              border: "1.5px solid rgba(0,163,255,0.5)",
              boxShadow:
                "0 0 40px rgba(0,163,255,0.2), 0 0 80px rgba(0,163,255,0.08), inset 0 0 30px rgba(0,163,255,0.05)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Shimmer edge highlight */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 6,
                height: "100%",
                background:
                  "linear-gradient(180deg, transparent 0%, #00A3FF 40%, #00E5FF 60%, transparent 100%)",
                opacity: 0.6,
              }}
            />
            {/* Inner content */}
            <div
              style={{
                position: "absolute",
                inset: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {/* AI badge */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #00A3FF22, #8B00FF22)",
                  border: "1.5px solid #00A3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 18px rgba(0,163,255,0.6)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Bebas Neue, serif",
                    fontSize: 24,
                    color: "#00A3FF",
                    letterSpacing: 1,
                    textShadow: "0 0 8px rgba(0,163,255,0.9)",
                  }}
                >
                  AI
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "Bebas Neue, serif",
                    fontSize: 18,
                    letterSpacing: 3,
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  AI CINEMA SUITE
                </div>
                <div
                  style={{
                    fontFamily: "Bebas Neue, serif",
                    fontSize: 14,
                    letterSpacing: 5,
                    color: "#00A3FF",
                    textShadow: "0 0 8px rgba(0,163,255,0.9)",
                  }}
                >
                  PRO
                </div>
              </div>
              {/* decorative grid lines */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(0,163,255,0.04) 18px, rgba(0,163,255,0.04) 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(0,163,255,0.04) 18px, rgba(0,163,255,0.04) 19px)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Spine */}
          <div
            style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 36,
              height: 280,
              background:
                "linear-gradient(180deg, #0d0f18, #1a1e2e 50%, #0d0f18)",
              border: "1.5px solid rgba(0,163,255,0.3)",
              borderRight: "none",
              borderRadius: "2px 0 0 2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateZ(-2px)",
            }}
          >
            <span
              style={{
                fontFamily: "Bebas Neue, serif",
                fontSize: 11,
                letterSpacing: 4,
                color: "rgba(0,163,255,0.8)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              AI CINEMA SUITE PRO
            </span>
          </div>
        </div>

        {/* ── API Cable ──────────────────────────────────────────────── */}
        <svg
          role="img"
          aria-label="API cable connecting to Google Cloud"
          style={{
            position: "absolute",
            left: "55%",
            top: "38%",
            overflow: "visible",
            filter: "drop-shadow(0 0 6px #00A3FF)",
          }}
          width="160"
          height="60"
          viewBox="0 0 160 60"
        >
          <title>API cable connecting to Google Cloud</title>
          <defs>
            <linearGradient id="cable-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B00FF" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* cable path */}
          <path
            d="M0 20 C40 20 60 40 100 40 L145 40"
            stroke="url(#cable-grad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* USB plug tip */}
          <rect
            x="143"
            y="35"
            width="14"
            height="10"
            rx="2"
            fill="#00A3FF"
            opacity="0.9"
          />
          <text
            x="145"
            y="43"
            fill="#0a0a0a"
            fontSize="6"
            fontFamily="Montserrat, sans-serif"
            fontWeight="700"
          >
            API
          </text>
          {/* small glowing dot */}
          <circle cx="0" cy="20" r="4" fill="#00A3FF">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* ── Google Cloud badge ────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            right: -20,
            top: "28%",
            filter: "drop-shadow(0 0 12px rgba(0,163,255,0.7))",
          }}
        >
          <GoogleCloudBadge />
        </div>

        {/* ── Orbiting ring around cloud badge ─────────────────────── */}
        <svg
          role="img"
          aria-label="Orbiting ring decoration"
          style={{
            position: "absolute",
            right: -40,
            top: "calc(28% - 20px)",
            filter: "drop-shadow(0 0 4px #8B00FF)",
            animation: "spin 8s linear infinite",
          }}
          width="88"
          height="88"
          viewBox="0 0 88 88"
        >
          <title>Orbiting ring decoration</title>
          <ellipse
            cx="44"
            cy="44"
            rx="40"
            ry="16"
            stroke="#8B00FF"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── Lens Flare overlay ──────────────────────────────────────────── */
function LensFlare() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        height: "1px",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {/* core line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,163,255,0.05) 10%, rgba(0,163,255,0.35) 30%, rgba(0,229,255,0.7) 50%, rgba(0,163,255,0.35) 70%, rgba(0,163,255,0.05) 90%, transparent 100%)",
          animation: "lensFlareBreath 3.5s ease-in-out infinite",
        }}
      />
      {/* diffuse glow above */}
      <div
        style={{
          position: "absolute",
          top: -30,
          left: "10%",
          width: "80%",
          height: 60,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,163,255,0.12) 0%, transparent 80%)",
          animation: "lensFlareBreath 3.5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      {/* specular hot-spots */}
      {([20, 42, 58, 78] as const).map((pos, idx) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            top: -4,
            left: `${pos}%`,
            width: idx % 2 === 0 ? 8 : 4,
            height: idx % 2 === 0 ? 8 : 4,
            borderRadius: "50%",
            background:
              idx % 2 === 0 ? "rgba(0,229,255,0.9)" : "rgba(255,255,255,0.8)",
            boxShadow: `0 0 ${idx % 2 === 0 ? 16 : 8}px rgba(0,163,255,0.9)`,
            animation: `lensFlareBreath ${2.8 + idx * 0.4}s ease-in-out infinite`,
            animationDelay: `${idx * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main HeroSection ────────────────────────────────────────────── */
export default function HeroSection() {
  const [logoError, setLogoError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // inject keyframes once
    const styleId = "hero-keyframes";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes lensFlareBreath {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes ctaPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 24px rgba(0,163,255,0.55), 0 0 50px rgba(0,163,255,0.25); }
        50% { transform: scale(1.04); box-shadow: 0 0 40px rgba(0,163,255,0.85), 0 0 80px rgba(0,163,255,0.45), 0 0 120px rgba(0,163,255,0.2); }
      }
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-14px); }
      }
      @keyframes spin {
        from { transform: rotateZ(0deg); }
        to { transform: rotateZ(360deg); }
      }
      @keyframes bgPulse {
        0%, 100% { opacity: 0.05; }
        50% { opacity: 0.1; }
      }
      .float-slow {
        animation: floatSlow 6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleCtaClick = () => {
    window.open("https://caffeine.ai", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      data-ocid="hero.section"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "60px 24px 80px",
      }}
    >
      {/* ── Background radial glow ──────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,163,255,0.07) 0%, rgba(139,0,255,0.04) 40%, transparent 75%)",
          animation: "bgPulse 5s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Subtle grid pattern ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(0,163,255,0.03) 60px, rgba(0,163,255,0.03) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,163,255,0.03) 60px, rgba(0,163,255,0.03) 61px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Lens flare ──────────────────────────────────────────── */}
      <LensFlare />

      {/* ── Content stack ───────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          width: "100%",
          maxWidth: 1400,
        }}
      >
        {/* LOGO */}
        <div data-ocid="hero.logo" style={{ marginBottom: 8 }}>
          {!logoError ? (
            <img
              src="/assets/logo.jpg"
              alt="AI Cinema Suite Pro"
              onError={() => setLogoError(true)}
              style={{
                maxHeight: 120,
                objectFit: "contain",
                filter: "drop-shadow(0 0 20px rgba(0,163,255,0.5))",
              }}
            />
          ) : (
            <div
              style={{
                fontFamily: "Bebas Neue, serif",
                fontSize: "clamp(28px, 3vw, 44px)",
                letterSpacing: 6,
                color: "#00A3FF",
                textShadow:
                  "0 0 10px rgba(0,163,255,0.9), 0 0 30px rgba(0,163,255,0.6), 0 0 60px rgba(0,163,255,0.3)",
              }}
            >
              AI CINEMA SUITE PRO
            </div>
          )}
        </div>

        {/* HEADLINE */}
        <h1
          data-ocid="hero.headline"
          style={{
            fontFamily: "Bebas Neue, serif",
            fontSize: "clamp(64px, 10vw, 160px)",
            lineHeight: 0.92,
            letterSpacing: "0.04em",
            color: "#ffffff",
            textAlign: "center",
            margin: 0,
            textShadow:
              "0 0 60px rgba(0,163,255,0.15), 0 4px 40px rgba(0,0,0,0.8)",
          }}
        >
          OWN THE FUTURE
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #ffffff 40%, #00A3FF 80%, #00E5FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            OF FILM.
          </span>
        </h1>

        {/* SUB-HEADLINE */}
        <p
          data-ocid="hero.subheadline"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(16px, 2vw, 26px)",
            textAlign: "center",
            color: "#00E5FF",
            margin: 0,
            textShadow:
              "0 0 10px rgba(0,229,255,0.9), 0 0 20px rgba(0,229,255,0.6), 0 0 40px rgba(0,229,255,0.3)",
            maxWidth: 700,
          }}
        >
          Photoshop for Designers.{" "}
          <span style={{ color: "#ffffff", opacity: 0.9 }}>
            AI Cinema Suite for Filmmakers.
          </span>
        </p>

        {/* STEELBOOK VISUAL */}
        <div data-ocid="hero.steelbook" style={{ margin: "8px 0" }}>
          <SteelbookVisual />
        </div>

        {/* CTA BUTTON */}
        <button
          type="button"
          data-ocid="hero.primary_button"
          onClick={handleCtaClick}
          style={{
            fontFamily: "Bebas Neue, serif",
            fontSize: "clamp(18px, 1.8vw, 24px)",
            letterSpacing: "0.12em",
            color: "#ffffff",
            background: "linear-gradient(135deg, #00A3FF 0%, #0077cc 100%)",
            border: "1.5px solid rgba(0,163,255,0.8)",
            padding: "20px 64px",
            minWidth: 420,
            cursor: "pointer",
            borderRadius: 2,
            animation: "ctaPulse 2.5s ease-in-out infinite",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(135deg, #00c3ff 0%, #0099ee 100%)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 50px rgba(0,163,255,1), 0 0 100px rgba(0,163,255,0.6), 0 0 160px rgba(0,163,255,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(135deg, #00A3FF 0%, #0077cc 100%)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
          }}
        >
          GET LIFETIME ACCESS | $19.99 (BYOK)
        </button>

        {/* trust micro-copy */}
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          No Subscriptions &nbsp;·&nbsp; No Credits &nbsp;·&nbsp; Pure Cinema
        </p>
      </div>
    </section>
  );
}
