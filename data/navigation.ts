export interface NavItem {
  id: string;
  label: string;
  href: string;
  chapter: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "showreel", label: "Showreel", href: "#hero", chapter: "hero" },
  { id: "about", label: "About", href: "#about", chapter: "about" },
  { id: "contents", label: "Contents", href: "#contents", chapter: "contents" },
  { id: "experience", label: "Experience", href: "#experience", chapter: "experience" },
  { id: "case-study", label: "Case Study", href: "#case-study", chapter: "case-study" },
  { id: "dossier", label: "Dossier", href: "#profile", chapter: "profile" },
];

export const CASE_STUDY_CHAPTER_IDS = [
  "tutor-lms",
  "enclave",
  "omnicommerce",
  "docapp",
  "case-study",
];

export interface FooterNavItem {
  label: string;
  targetId: string;
}

export const FOOTER_NAV: FooterNavItem[] = [
  { label: "Showreel", targetId: "hero" },
  { label: "About", targetId: "about" },
  { label: "Contents", targetId: "contents" },
  { label: "Experience", targetId: "experience" },
  { label: "Case Study", targetId: "case-study" },
  { label: "Dossier", targetId: "profile" },
];
