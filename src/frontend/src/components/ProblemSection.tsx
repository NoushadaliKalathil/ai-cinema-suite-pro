export default function ProblemSection() {
  return (
    <section
      data-ocid="problem.section"
      className="relative w-full overflow-hidden py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #1a1e2e 0%, #0f1117 100%)",
      }}
    >
      {/* Section headline */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2
          className="font-display text-5xl md:text-7xl leading-none tracking-wider uppercase text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Escape the Creative Prison:{" "}
          <span style={{ color: "#8B00FF" }}>Stop Renting.</span> Start Owning.
        </h2>
      </div>

      {/* Two-column visuals */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* LEFT — Credit Meter Running Dry */}
        <div
          data-ocid="problem.credit_meter.card"
          className="flex flex-col items-center justify-center rounded-2xl p-8 border"
          style={{
            background: "rgba(20, 20, 30, 0.85)",
            borderColor: "rgba(139, 0, 255, 0.3)",
            boxShadow:
              "0 0 30px rgba(139,0,255,0.12), inset 0 0 60px rgba(0,0,0,0.4)",
          }}
        >
          <p
            className="uppercase tracking-[0.3em] text-xs mb-6"
            style={{ color: "#888", fontFamily: "var(--font-body)" }}
          >
            YOUR CREDITS
          </p>

          {/* Gauge SVG */}
          <svg
            viewBox="0 0 240 140"
            className="w-full max-w-xs"
            role="img"
            aria-label="Credit meter gauge showing empty"
          >
            {/* Background arc */}
            <path
              d="M 20 120 A 100 100 0 0 1 220 120"
              fill="none"
              stroke="#2a2a3a"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Healthy zone (greyed out, desaturated) */}
            <path
              d="M 20 120 A 100 100 0 0 1 120 20"
              fill="none"
              stroke="#333340"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Warning zone */}
            <path
              d="M 120 20 A 100 100 0 0 1 185 47"
              fill="none"
              stroke="#4a2a1a"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Critical / Empty zone — violet glow */}
            <path
              d="M 185 47 A 100 100 0 0 1 220 120"
              fill="none"
              stroke="#8B00FF"
              strokeWidth="18"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 8px #8B00FF)" }}
            />

            {/* Tick marks */}
            {[0, 30, 60, 90, 120, 150, 180].map((angle, i) => {
              const rad = ((angle - 90) * Math.PI) / 180;
              const x1 = 120 + 92 * Math.cos(rad);
              const y1 = 120 + 92 * Math.sin(rad);
              const x2 = 120 + 80 * Math.cos(rad);
              const y2 = 120 + 80 * Math.sin(rad);
              return (
                <line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i >= 5 ? "#8B00FF" : "#444"}
                  strokeWidth="2"
                />
              );
            })}

            {/* Needle — pointing near empty (right end) */}
            <line
              x1="120"
              y1="120"
              x2="196"
              y2="68"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 4px #ff4444)" }}
            />
            {/* Needle pivot */}
            <circle
              cx="120"
              cy="120"
              r="8"
              fill="#1a1e2e"
              stroke="#8B00FF"
              strokeWidth="2"
            />

            {/* Labels */}
            <text
              x="22"
              y="138"
              fill="#444"
              fontSize="9"
              fontFamily="monospace"
            >
              FULL
            </text>
            <text x="96" y="16" fill="#444" fontSize="9" fontFamily="monospace">
              50%
            </text>
            <text
              x="200"
              y="138"
              fill="#8B00FF"
              fontSize="9"
              fontFamily="monospace"
            >
              EMPTY
            </text>
          </svg>

          {/* Critical badge */}
          <div
            className="mt-5 animate-pulse flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(139,0,255,0.18)",
              border: "1px solid #8B00FF",
              color: "#cc66ff",
              fontFamily: "var(--font-body)",
              boxShadow: "0 0 16px rgba(139,0,255,0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            CRITICAL — OUT OF CREDITS
          </div>

          <p
            className="mt-4 text-center text-sm"
            style={{ color: "#666", fontFamily: "var(--font-body)" }}
          >
            Your AI tools are paused.{" "}
            <span style={{ color: "#ff4444" }}>Top up to continue.</span>
          </p>
        </div>

        {/* RIGHT — Subscription Cancelled Popup */}
        <div
          data-ocid="problem.subscription_popup.card"
          className="flex items-center justify-center"
        >
          {/* Outer shadow/backdrop */}
          <div
            className="relative rounded-xl overflow-hidden w-full max-w-sm"
            style={{
              transform: "rotate(-2deg)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.7), 0 0 40px rgba(255,80,80,0.12)",
            }}
          >
            {/* Window title bar */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "#1f1f28", borderBottom: "1px solid #333" }}
            >
              <div className="flex gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#ff5f57" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#febc2e" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#28c840" }}
                />
              </div>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#555", fontFamily: "var(--font-body)" }}
              >
                System Alert
              </span>
              <button
                aria-label="Close (disabled)"
                type="button"
                className="w-5 h-5 flex items-center justify-center rounded text-xs"
                style={{
                  color: "#555",
                  background: "#2a2a35",
                  cursor: "default",
                }}
                onClick={() => {}}
              >
                ✕
              </button>
            </div>

            {/* Dialog body */}
            <div className="px-6 py-7" style={{ background: "#16161f" }}>
              {/* Warning icon row */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: "rgba(255,90,0,0.15)",
                    border: "1px solid rgba(255,90,0,0.4)",
                  }}
                >
                  ⚠️
                </div>
                <h3
                  className="font-bold text-lg leading-tight"
                  style={{
                    color: "#ff6b35",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Subscription Cancelled
                </h3>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#aaa", fontFamily: "var(--font-body)" }}
              >
                Your creative tools have been{" "}
                <span style={{ color: "#ff4444" }}>disabled</span>. Renew your
                plan to restore access and continue your project.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #ff4500, #ff6b35)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    boxShadow: "0 0 20px rgba(255,90,0,0.3)",
                    cursor: "default",
                  }}
                >
                  RENEW NOW — $29.99/mo
                </button>
                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider"
                  style={{
                    background: "#1f1f28",
                    color: "#444",
                    border: "1px solid #333",
                    fontFamily: "var(--font-body)",
                    cursor: "default",
                  }}
                >
                  LOSE YOUR WORK
                </button>
              </div>

              {/* Fine print */}
              <p
                className="mt-4 text-center text-xs"
                style={{ color: "#444", fontFamily: "var(--font-body)" }}
              >
                All unsaved projects will be deleted in{" "}
                <span style={{ color: "#ff4444" }}>24:00:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body copy */}
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{
            color: "#b0b0c0",
            fontFamily: "var(--font-body)",
          }}
        >
          Stop wasting money on monthly rents and idle credits.{" "}
          <span className="text-white font-semibold">
            AI Cinema Suite Pro is a standalone native software.
          </span>{" "}
          Connect your own Google API key and pay wholesale rates direct.{" "}
          <span style={{ color: "#00A3FF" }}>
            Zero waste. Maximum efficiency.
          </span>
        </p>
      </div>

      {/* Subtle decorative glow blobs */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{
          background: "#8B00FF",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-5"
        style={{
          background: "#00A3FF",
          filter: "blur(80px)",
          transform: "translate(50%, -50%)",
        }}
      />
    </section>
  );
}
