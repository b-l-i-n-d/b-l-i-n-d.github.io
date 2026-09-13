export interface NavItem {
  id: string;
  label: string;
  href: string;
  chapter: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "showreel", label: "Showreel", href: "#hero", chapter: "hero" },
  { id: "contents", label: "Contents", href: "#contents", chapter: "contents" },
  { id: "about", label: "About", href: "#about", chapter: "about" },
  { id: "experience", label: "Experience", href: "#experience", chapter: "experience" },
  { id: "case-study", label: "Case Study", href: "#case-study", chapter: "case-study" },
  { id: "motion-lab", label: "Motion Lab", href: "#motion-lab", chapter: "motion-lab" },
  { id: "gallery", label: "Blueprints", href: "#gallery", chapter: "gallery" },
  { id: "dossier", label: "Dossier", href: "#profile", chapter: "profile" },
];

export const CASE_STUDY_CHAPTER_IDS = ["tutor-lms", "enclave", "edtech", "docapp", "case-study"];

export interface FooterNavItem {
  label: string;
  targetId: string;
}

export const FOOTER_NAV: FooterNavItem[] = [
  { label: "Showreel", targetId: "hero" },
  { label: "Contents", targetId: "contents" },
  { label: "About", targetId: "about" },
  { label: "Experience", targetId: "experience" },
  { label: "Case Study", targetId: "case-study" },
  { label: "Motion Lab", targetId: "motion-lab" },
  { label: "Blueprints", targetId: "gallery" },
  { label: "Dossier", targetId: "profile" },
];
