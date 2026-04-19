import type { BundleItem, CinematicModule, RoadmapNode } from "@/types";

export const CINEMATIC_MODULES: CinematicModule[] = [
  {
    id: "script-architect",
    icon: "🧠",
    headline: "Script Architect: Spark to Screenplay",
    description:
      "Turn any raw idea into a production-ready, scene-by-scene screenplay instantly. Total narrative control in any language.",
    accent: "violet",
    tag: "Narrative AI",
  },
  {
    id: "macr",
    icon: "🔍",
    headline: "MACR: Multi-Angle Cinematic Replicator",
    description:
      "DNA Scanning Technology. Analyzes 1 image to replicate 36 different camera angles with 100% consistency.",
    accent: "blue",
    imagePath: "/assets/images/macr2.jpg",
    tag: "DNA Scanning",
  },
  {
    id: "genesis-lab",
    icon: "🎨",
    headline: "Genesis Lab: The Story Engine",
    description:
      "Upload 3 inspiration images. Watch as Genesis Lab extracts the visual DNA to build a structured narrative.",
    accent: "violet",
    tag: "Visual DNA",
  },
  {
    id: "cinelook-studio",
    icon: "🎞️",
    headline: "CineLook Studio: Color & Light Master",
    description:
      "Master lighting and color grading without a dedicated colorist. Achieve the blockbuster look with professional precision.",
    accent: "blue",
    imagePath: "/assets/images/cinelook.jpg",
    tag: "Color Grading",
  },
  {
    id: "shot-designer",
    icon: "🎬",
    headline: "Shot Designer: Frame Perfection",
    description:
      "AI-powered shot composition and framing assistant. Define rule-of-thirds, Dutch angles, and cinematic depth of field in seconds.",
    accent: "violet",
    tag: "Composition",
  },
  {
    id: "voice-director",
    icon: "🎙️",
    headline: "Voice Director: Dialogue Coach",
    description:
      "Clone, cast, and direct AI voices with emotion mapping. Create believable characters with nuanced vocal performances.",
    accent: "blue",
    tag: "Voice AI",
  },
  {
    id: "motion-forge",
    icon: "⚡",
    headline: "Motion Forge: Scene Animator",
    description:
      "Transform static frames into dynamic cinematic sequences. Keyframe-driven AI motion with physics-aware movement.",
    accent: "violet",
    tag: "Animation",
  },
  {
    id: "world-builder",
    icon: "🌍",
    headline: "World Builder: Environment Genesis",
    description:
      "Generate infinite photorealistic environments from text prompts. From dystopian megacities to alien nebulae — any world, on demand.",
    accent: "blue",
    tag: "World Gen",
  },
  {
    id: "character-engine",
    icon: "👤",
    headline: "Character Engine: Actor Forge",
    description:
      "Design consistent characters across unlimited scenes. Maintain facial accuracy and costume continuity throughout your entire film.",
    accent: "violet",
    tag: "Consistency",
  },
  {
    id: "sound-architect",
    icon: "🎵",
    headline: "Sound Architect: Sonic Canvas",
    description:
      "AI-composed adaptive soundtracks and dynamic SFX layers. Score your film in real-time to match mood, tempo, and tension.",
    accent: "blue",
    tag: "Audio AI",
  },
  {
    id: "vfx-engine",
    icon: "💥",
    headline: "VFX Engine: Particle & FX Suite",
    description:
      "Hollywood-grade visual effects pipeline without the Hollywood budget. Fire, water, destruction, portals — photorealistic at 8K.",
    accent: "violet",
    tag: "Visual FX",
  },
  {
    id: "edit-suite",
    icon: "✂️",
    headline: "Edit Suite: Intelligent Cut",
    description:
      "AI understands pacing, rhythm, and narrative flow. Automatically assembles rough cuts based on your screenplay beats.",
    accent: "blue",
    tag: "Smart Edit",
  },
  {
    id: "subtitle-engine",
    icon: "📝",
    headline: "Subtitle Engine: Global Reach",
    description:
      "Auto-generate, translate, and style subtitles in 47 languages. Burn-in cinematic lower thirds or export as broadcast SRT.",
    accent: "violet",
    tag: "Multilingual",
  },
  {
    id: "poster-forge",
    icon: "🖼️",
    headline: "Poster Forge: Marketing Machine",
    description:
      "Generate theatrical-quality movie posters, trailers, and promotional material from your film's assets in minutes.",
    accent: "blue",
    tag: "Marketing",
  },
  {
    id: "distribution-hub",
    icon: "📡",
    headline: "Distribution Hub: Platform Pipeline",
    description:
      "Package, compress, and submit your film in platform-specific formats for Netflix, Prime, YouTube, and festival submissions.",
    accent: "violet",
    tag: "Distribution",
  },
  {
    id: "analytics-core",
    icon: "📊",
    headline: "Analytics Core: Audience Intel",
    description:
      "Predictive audience analysis and scene-by-scene engagement scoring. Know exactly where your film will captivate or lose viewers.",
    accent: "blue",
    tag: "Intelligence",
  },
  {
    id: "storyboard-ai",
    icon: "📋",
    headline: "Storyboard AI: Pre-Viz Master",
    description:
      "From script to visual storyboard in minutes. Full pre-visualization of your production with camera moves and shot lists.",
    accent: "violet",
    tag: "Pre-Viz",
  },
  {
    id: "render-farm",
    icon: "🖥️",
    headline: "Render Farm: 8K Output Engine",
    description:
      "Distributed BYOK rendering pipeline. Leverage Google Cloud compute at wholesale rates to render 8K content at record speed.",
    accent: "blue",
    tag: "8K Render",
  },
];

export const BUNDLE_ITEMS: BundleItem[] = [
  {
    id: "win-installer",
    icon: "🪟",
    title: "Windows Installer (.EXE)",
    description:
      "Native 64-bit installer for Windows 10/11. Full hardware acceleration.",
    type: "software",
  },
  {
    id: "mac-installer",
    icon: "🍎",
    title: "macOS Installer (.DMG)",
    description:
      "Universal binary for Apple Silicon and Intel Macs. Notarized and signed.",
    type: "software",
  },
  {
    id: "billing-pdf",
    icon: "📄",
    title: "Billing Index Masterclass PDF",
    description:
      "Complete guide to managing your BYOK Google API billing. Optimize costs.",
    type: "pdf",
  },
  {
    id: "pro-pdf",
    icon: "📘",
    title: "Pro Masterclass PDF",
    description:
      "350-page production handbook covering all 18 modules in cinematic detail.",
    type: "pdf",
  },
  {
    id: "video-walkthroughs",
    icon: "▶️",
    title: "Full Video Walkthroughs",
    description:
      "HD video guides for every module. Learn from master-level productions.",
    type: "video",
  },
];

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: "ai-cinema-suite",
    title: "AI Cinema Suite Pro",
    description:
      "18+ professional modules. BYOK architecture. The foundation is live.",
    status: "live",
    icon: "🎬",
  },
  {
    id: "director-os",
    title: "DirectorOS Alpha",
    description:
      "Unified creative operating environment. All tools in one workflow.",
    status: "upcoming",
    icon: "🖥️",
  },
  {
    id: "cloud-studio",
    title: "Cloud Studio Integration",
    description:
      "Collaborative real-time production with distributed team support.",
    status: "upcoming",
    icon: "☁️",
  },
  {
    id: "global-distribution",
    title: "Global Distribution Network",
    description:
      "Direct-to-platform publishing for Netflix, Prime, and cinema chains.",
    status: "future",
    icon: "🌍",
  },
  {
    id: "8k-pipeline",
    title: "8K End-to-End Pipeline",
    description:
      "From idea to 8K delivery. The complete Hollywood studio in your hands.",
    status: "future",
    icon: "✨",
  },
];
