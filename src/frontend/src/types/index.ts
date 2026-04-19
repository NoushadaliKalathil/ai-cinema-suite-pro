/** Accent color for a cinematic module card */
export type ModuleAccent = "blue" | "violet";

/** A single cinematic module definition */
export interface CinematicModule {
  id: string;
  icon: string;
  headline: string;
  description: string;
  accent: ModuleAccent;
  /** Optional screenshot/image path relative to /public */
  imagePath?: string;
  /** Visual tag shown on the card */
  tag?: string;
}

/** Bundle item definition for "What's Inside" section */
export interface BundleItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  type: "software" | "pdf" | "video";
}

/** Global roadmap node */
export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  status: "live" | "upcoming" | "future";
  icon: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}
