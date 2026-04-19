import BundleSection from "./BundleSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ModulesSection from "./ModulesSection";
import ProblemSection from "./ProblemSection";
import RoadmapSection from "./RoadmapSection";

function scrollToFooter() {
  const el = document.getElementById("footer");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* ── Sticky Navigation Bar ── */}
      <nav
        data-ocid="nav.bar"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3"
        style={{
          background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0, 163, 255, 0.20)",
        }}
      >
        {/* Brand wordmark */}
        <span
          data-ocid="nav.brand"
          className="text-xl tracking-widest select-none"
          style={{
            fontFamily: "'Bebas Neue', serif",
            color: "#00A3FF",
            textShadow: "0 0 10px rgba(0,163,255,0.6)",
          }}
        >
          AI Cinema Suite Pro
        </span>

        {/* CTA */}
        <button
          type="button"
          data-ocid="nav.cta_button"
          onClick={scrollToFooter}
          className="pulse-cta inline-flex items-center gap-2 px-5 py-2 text-sm tracking-widest font-semibold text-white transition-smooth hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            fontFamily: "'Bebas Neue', serif",
            fontSize: "0.95rem",
            background: "rgba(0,163,255,0.12)",
            border: "1px solid #00A3FF",
            boxShadow: "0 0 12px rgba(0,163,255,0.35)",
          }}
        >
          GET LIFETIME ACCESS&nbsp;|&nbsp;$19.99
        </button>
      </nav>

      {/* ── Page Sections ── */}
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="problem">
          <ProblemSection />
        </section>

        <section id="modules">
          <ModulesSection />
        </section>

        <section id="bundle">
          <BundleSection />
        </section>

        <section id="roadmap">
          <RoadmapSection />
        </section>

        <section id="footer">
          <FooterSection />
        </section>
      </main>
    </div>
  );
}
