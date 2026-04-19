// Neural network background dots positions (pre-computed for determinism)
const NEURAL_DOTS = [
  { id: "d01", x: 5, y: 8, size: 2, opMod: 0 },
  { id: "d02", x: 12, y: 22, size: 1.5, opMod: 1 },
  { id: "d03", x: 20, y: 5, size: 2.5, opMod: 2 },
  { id: "d04", x: 30, y: 18, size: 1, opMod: 0 },
  { id: "d05", x: 40, y: 35, size: 2, opMod: 1 },
  { id: "d06", x: 48, y: 12, size: 1.5, opMod: 2 },
  { id: "d07", x: 55, y: 28, size: 2, opMod: 0 },
  { id: "d08", x: 65, y: 8, size: 1, opMod: 1 },
  { id: "d09", x: 72, y: 42, size: 2.5, opMod: 2 },
  { id: "d10", x: 80, y: 15, size: 1.5, opMod: 0 },
  { id: "d11", x: 90, y: 30, size: 2, opMod: 1 },
  { id: "d12", x: 95, y: 70, size: 1, opMod: 2 },
  { id: "d13", x: 8, y: 55, size: 2, opMod: 0 },
  { id: "d14", x: 18, y: 75, size: 1.5, opMod: 1 },
  { id: "d15", x: 25, y: 60, size: 2, opMod: 2 },
  { id: "d16", x: 35, y: 80, size: 1, opMod: 0 },
  { id: "d17", x: 45, y: 65, size: 2.5, opMod: 1 },
  { id: "d18", x: 58, y: 88, size: 1.5, opMod: 2 },
  { id: "d19", x: 68, y: 72, size: 2, opMod: 0 },
  { id: "d20", x: 78, y: 60, size: 1, opMod: 1 },
  { id: "d21", x: 88, y: 85, size: 2, opMod: 2 },
  { id: "d22", x: 3, y: 40, size: 1.5, opMod: 0 },
  { id: "d23", x: 97, y: 48, size: 2, opMod: 1 },
  { id: "d24", x: 50, y: 50, size: 1, opMod: 2 },
  { id: "d25", x: 15, y: 45, size: 2, opMod: 0 },
  { id: "d26", x: 85, y: 55, size: 1.5, opMod: 1 },
  { id: "d27", x: 62, y: 52, size: 1, opMod: 2 },
];

// Orbital platform data
interface OrbitalNode {
  label: string;
  icon: string;
  color: string;
  angle: number;
  orbitRadius: number;
  lineClass: string;
  delay: string;
  pulseDelay: string;
}

const ORBITAL_NODES: OrbitalNode[] = [
  {
    label: "NETFLIX",
    icon: "N",
    color: "#E50914",
    angle: 0,
    orbitRadius: 195,
    lineClass: "data-line",
    delay: "0s",
    pulseDelay: "0s",
  },
  {
    label: "PRIME",
    icon: "P",
    color: "#00A3FF",
    angle: 72,
    orbitRadius: 195,
    lineClass: "data-line-alt",
    delay: "0.3s",
    pulseDelay: "0.4s",
  },
  {
    label: "YOUTUBE",
    icon: "▶",
    color: "#FF0000",
    angle: 144,
    orbitRadius: 195,
    lineClass: "data-line",
    delay: "0.6s",
    pulseDelay: "0.8s",
  },
  {
    label: "CINEMAS",
    icon: "🎬",
    color: "#FFD700",
    angle: 216,
    orbitRadius: 195,
    lineClass: "data-line-alt",
    delay: "0.9s",
    pulseDelay: "1.2s",
  },
  {
    label: "STREAMING",
    icon: "≋",
    color: "#8B00FF",
    angle: 288,
    orbitRadius: 195,
    lineClass: "data-line",
    delay: "1.2s",
    pulseDelay: "1.6s",
  },
];

function toCartesian(cx: number, cy: number, angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

// Latitude/longitude grid lines for the globe
function GlobeGrid({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const latLines = [-60, -30, 0, 30, 60];
  const lonLines = [0, 36, 72, 108, 144];

  return (
    <g opacity={0.22}>
      {latLines.map((lat) => {
        const yOffset = (lat / 90) * r;
        const rxEllipse = Math.sqrt(Math.max(0, r * r - yOffset * yOffset));
        return (
          <ellipse
            key={`lat-${lat}`}
            cx={cx}
            cy={cy + yOffset}
            rx={rxEllipse}
            ry={rxEllipse * 0.35}
            fill="none"
            stroke="#8B00FF"
            strokeWidth={0.8}
          />
        );
      })}
      {lonLines.map((lon) => {
        const rad = (lon * Math.PI) / 180;
        return (
          <ellipse
            key={`lon-${lon}`}
            cx={cx}
            cy={cy}
            rx={r * Math.abs(Math.cos(rad))}
            ry={r}
            fill="none"
            stroke="#8B00FF"
            strokeWidth={0.8}
          />
        );
      })}
    </g>
  );
}

export default function RoadmapSection() {
  const SVG_W = 500;
  const SVG_H = 500;
  const CX = SVG_W / 2;
  const CY = SVG_H / 2;
  const GLOBE_R = 100;

  const nodes = ORBITAL_NODES.map((node) => ({
    ...node,
    pos: toCartesian(CX, CY, node.angle, node.orbitRadius),
    midPos: {
      x: (CX + toCartesian(CX, CY, node.angle, node.orbitRadius).x) / 2,
      y: (CY + toCartesian(CX, CY, node.angle, node.orbitRadius).y) / 2,
    },
  }));

  return (
    <section
      data-ocid="roadmap.section"
      className="relative w-full overflow-hidden py-24 px-4"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, #1a0030 0%, #0a0a0a 70%)",
      }}
    >
      {/* Neural network background dots */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {NEURAL_DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size * 2}px`,
              height: `${dot.size * 2}px`,
              background: "#00A3FF",
              opacity: 0.12 + dot.opMod * 0.04,
              boxShadow: `0 0 ${dot.size * 3}px #00A3FF`,
            }}
          />
        ))}
      </div>

      {/* Headline */}
      <div className="relative z-10 mx-auto max-w-5xl text-center mb-6">
        <h2
          className="font-display text-6xl md:text-7xl uppercase tracking-wider text-white leading-tight"
          style={{
            textShadow:
              "0 0 30px #8B00FF, 0 0 60px #8B00FF40, 0 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          The Future of Independent Film: DirectorOS
        </h2>
      </div>

      {/* Sub-description */}
      <div className="relative z-10 mx-auto max-w-3xl text-center mb-16">
        <p
          className="font-body text-lg leading-relaxed"
          style={{ color: "#d1d5db" }}
        >
          We are building an End-to-End cinematic operating system. Idea
          development, 8K creation, and direct-to-platform global publishing.
          The power of a Hollywood studio, controlled by a single human brain.
        </p>
      </div>

      {/* Data-Cosmos Globe Visual */}
      <div className="relative z-10 flex justify-center">
        <div className="relative" style={{ width: SVG_W, maxWidth: "100%" }}>
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            width={SVG_W}
            height={SVG_H}
            className="w-full h-auto"
            aria-label="DirectorOS global distribution network"
            role="img"
          >
            <defs>
              <radialGradient id="globeGrad" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#2a0060" />
                <stop offset="60%" stopColor="#1a0040" />
                <stop offset="100%" stopColor="#0a0020" />
              </radialGradient>

              <filter
                id="violetGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="blueGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="orbitRingGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B00FF" stopOpacity={0} />
                <stop offset="70%" stopColor="#8B00FF" stopOpacity={0.08} />
                <stop offset="100%" stopColor="#8B00FF" stopOpacity={0.25} />
              </radialGradient>

              <style>{`
                @keyframes flowLines {
                  from { stroke-dashoffset: 100; }
                  to   { stroke-dashoffset: 0; }
                }
                @keyframes pulseNode {
                  0%, 100% { opacity: 0.8; }
                  50%      { opacity: 1; }
                }
                @keyframes rotateDash {
                  from { stroke-dashoffset: 200; }
                  to   { stroke-dashoffset: 0; }
                }
                .data-line {
                  stroke-dasharray: 5 5;
                  animation: flowLines 2s linear infinite;
                }
                .data-line-alt {
                  stroke-dasharray: 5 5;
                  animation: flowLines 2s linear infinite reverse;
                }
                .orbit-ring {
                  fill: none;
                  stroke: #8B00FF;
                  stroke-width: 0.6;
                  stroke-dasharray: 4 8;
                  animation: rotateDash 8s linear infinite;
                }
                .node-pulse {
                  animation: pulseNode 2s ease-in-out infinite;
                }
              `}</style>
            </defs>

            {/* Orbital ring */}
            <circle
              cx={CX}
              cy={CY}
              r={ORBITAL_NODES[0].orbitRadius + 12}
              fill="url(#orbitRingGrad)"
            />
            <circle
              cx={CX}
              cy={CY}
              r={ORBITAL_NODES[0].orbitRadius + 12}
              className="orbit-ring"
            />

            {/* Data lines */}
            {nodes.map((node) => (
              <line
                key={`line-${node.label}`}
                x1={CX}
                y1={CY}
                x2={node.pos.x}
                y2={node.pos.y}
                stroke="#00A3FF"
                strokeWidth={1.5}
                strokeOpacity={0.6}
                className={node.lineClass}
                style={{ animationDelay: node.delay }}
                filter="url(#blueGlow)"
              />
            ))}

            {/* Midpoint node dots */}
            {nodes.map((node) => (
              <circle
                key={`midnode-${node.label}`}
                cx={node.midPos.x}
                cy={node.midPos.y}
                r={3}
                fill="#00A3FF"
                opacity={0.7}
                filter="url(#blueGlow)"
              />
            ))}

            {/* Globe outer glow */}
            <circle
              cx={CX}
              cy={CY}
              r={GLOBE_R + 10}
              fill="none"
              stroke="#8B00FF"
              strokeWidth={1}
              strokeOpacity={0.3}
            />

            {/* Globe body */}
            <circle
              cx={CX}
              cy={CY}
              r={GLOBE_R}
              fill="url(#globeGrad)"
              stroke="#8B00FF"
              strokeWidth={2}
              filter="url(#violetGlow)"
            />

            {/* Globe grid */}
            <clipPath id="globeClip">
              <circle cx={CX} cy={CY} r={GLOBE_R - 1} />
            </clipPath>
            <g clipPath="url(#globeClip)">
              <GlobeGrid cx={CX} cy={CY} r={GLOBE_R} />
            </g>

            {/* Center node */}
            <circle
              cx={CX}
              cy={CY}
              r={5}
              fill="#00A3FF"
              filter="url(#blueGlow)"
              className="node-pulse"
            />

            {/* DirectorOS label */}
            <text
              x={CX}
              y={CY - 8}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={18}
              fontFamily="'Bebas Neue', serif"
              fill="#00A3FF"
              letterSpacing="2"
            >
              DirectorOS
            </text>
            <text
              x={CX}
              y={CY + 14}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fontFamily="'Montserrat', sans-serif"
              fill="#00A3FF"
              opacity={0.7}
              letterSpacing="1"
            >
              CINEMATIC OS
            </text>

            {/* Orbital platform nodes */}
            {nodes.map((node) => (
              <g key={`orbital-${node.label}`}>
                <circle
                  cx={node.pos.x}
                  cy={node.pos.y}
                  r={26}
                  fill={node.color}
                  fillOpacity={0.08}
                  stroke={node.color}
                  strokeWidth={1}
                  strokeOpacity={0.4}
                />
                <circle
                  cx={node.pos.x}
                  cy={node.pos.y}
                  r={20}
                  fill={node.color}
                  fillOpacity={0.2}
                  stroke={node.color}
                  strokeWidth={1.5}
                />
                <circle
                  cx={node.pos.x}
                  cy={node.pos.y}
                  r={5}
                  fill="#00A3FF"
                  className="node-pulse"
                  style={{ animationDelay: node.pulseDelay }}
                  filter="url(#blueGlow)"
                />
                <text
                  x={node.pos.x}
                  y={node.pos.y - 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={node.icon.length > 1 ? 13 : 14}
                  fontFamily="'Montserrat', sans-serif"
                  fontWeight="bold"
                  fill={node.color}
                >
                  {node.icon}
                </text>
                <text
                  x={node.pos.x}
                  y={node.pos.y + 34}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={8}
                  fontFamily="'Bebas Neue', serif"
                  fill="#ffffff"
                  opacity={0.85}
                  letterSpacing="1.5"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="relative z-10 mx-auto max-w-2xl text-center mt-12">
        <p
          className="font-display text-2xl uppercase tracking-widest"
          style={{ color: "#00A3FF", textShadow: "0 0 20px #00A3FF80" }}
        >
          One Human. One Vision. One OS.
        </p>
      </div>
    </section>
  );
}
