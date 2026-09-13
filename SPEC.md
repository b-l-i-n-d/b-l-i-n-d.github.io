# Technical Specification: Modular Case Study Routing & Editorial Showcase

## 1. Objectives & Scope

### 1.1 Core Goals

1. **Dedicated Case Study Routing**: Extract the 4 monolithic case study deep-dives (`tutor-lms`, `enclave`, `edtech`, `docapp`) into standalone dynamic routes at `/case-study/[slug]`.
2. **Artistic Homepage Showcase (`FeaturedProjectsSection`)**: Replace the inline 8,000px case study block on `/` with cinematic, editorial feature spread cards designed in the Behance / design-engineering aesthetic.
3. **Editorial Pacing & Text Pruning**: Eliminate text redundancy between Chapter 02 (Bio) and Chapter 10 (Dossier), and refine Chapter 01 (Contents Index) into a clean, inviting chapter directory.
4. **Preserved Brand Accents**: Maintain doodle marquee ribbons, draggable physics clouds, and high-contrast dark/light mode elegance.

---

## 2. Route Architecture & Navigation

### 2.1 Route Map

- **`/` (Landing Page)**:
  - High-level narrative arc: Hook (Hero) $\to$ Index $\to$ Identity (Bio) $\to$ Track Record (Ollyo) $\to$ Featured Work (Cinematic Cards) $\to$ Motion Lab $\to$ Blueprints $\to$ Dossier/Contact.
- **`/case-study/[slug]` (Deep Dive Pages)**:
  - Dynamic segment for each project (`tutor-lms`, `enclave`, `edtech`, `docapp`).
  - `generateStaticParams()` pre-renders all 4 slugs at build time.
  - Handles unknown slugs with Next.js `notFound()`.

### 2.2 Navigation Contracts

- **Breadcrumb Header (`CaseStudyNavBar`)**:
  - Persistent or floating top bar with:
    - `← Overview` link returning to `/#case-study` (or previous scroll position).
    - Active Project pill (e.g. `01 / 04 · Tutor LMS`).
    - Direct stage anchors (`#architecture`, `#flow`, `#code`, `#live`).
    - Theme switcher toggle.
- **Pagination Footer (`CaseStudyFooterNav`)**:
  - Dual-card footer: "Previous Project" and "Next Project" links with title, thumbnail teaser, and arrow transition.

---

## 3. Component Architecture

### 3.1 Homepage: `FeaturedProjectsSection` (`components/showcase/FeaturedProjectsSection.tsx`)

- Replaces the 4 stacked `<ProjectCaseStudySection />` instances on `/`.
- **Design Engineering Details**:
  - **Card Layout**: Split editorial stage spread.
    - _Left column / Media Stage_: Filmstrip-styled video loop container or interactive mock with subtle hover tilt (`perspective: 1000px`), status badge (`Active Deployments: 120K+`), and framerate counter (`60 FPS`).
    - _Right column / Editorial Content_:
      - Chapter counter (`04.1 // ENTERPRISE EDTECH`).
      - Title with serif/sans contrast and subtle gradient.
      - One-sentence mission hook.
      - Key Technical Metrics Grid (4 compact telemetry pills: e.g. `0.000 CLS`, `120K+ Academies`, `Sub-16ms FLIP`, `Strict Registry`).
      - Tech Stack Badges.
      - Magnetic CTA: `Explore Full Case Study (Architecture, Flow & Code) →` linking to `/case-study/[slug]`.

### 3.2 Dynamic Route: `app/case-study/[slug]/page.tsx`

- Server Component wrapping client interactive stages:
  - Generates static metadata (Title: `Tutor LMS Case Study — Fahim Faisal`, OpenGraph, Description).
  - Passes project and showcase data into a full-width container.
  - Reuses tested components: `<ArchitectureGraph />`, `<InteractiveFlowVisualizer />`, `<ComplexCodeStudio />`, `<HybridGallery />`.

---

## 4. Performance & Motion Constraints

- **Strict 60 FPS Target**: No layout thrashing. All card hover animations, button micro-interactions, and modal triggers must animate exclusively via `transform` and `opacity`.
- **Reduced Motion Compliance**: Query `useReducedMotion()` from `motion/react` to instantly substitute zero-duration transitions for users with motion sensitivities.
- **Asset Throttling**: Looping videos use `IntersectionObserver` via `ViewportController` to ensure only the active in-view card plays video, preserving device battery and VRAM.

---

## 5. Copy & Text Refinement Plan

1. **Chapter 01 (Contents Directory)**:
   - Keep the 3-column editorial structure, but convert dense bullet points into clean, scannable chapter cards with preview tags and smooth jump links.
2. **Chapter 02 (Bio) vs. Chapter 10 (Dossier)**:
   - _Bio (Ch 02)_: Focus on engineering identity, graduation from SUST SWE, and craft philosophy (tactile UI + distributed systems).
   - _Dossier (Ch 10)_: Remove duplicated biography paragraphs; transform into a crisp **Technical Capabilities Matrix**, verified SUST degree credential badge, and high-impact contact channels.
3. **Warzone Section**:
   - Condense tactical sniper paragraph into a sleek "Off-Duty / High-Tick Reflexes" micro-card that emphasizes focus and fast decision-making without overstating parallels to coding.

---

## 6. Verification & Definition of Done

1. `pnpm build` completes with zero TypeScript or lint errors; static pages generated for all 4 case study slugs.
2. Navigating from `/` to `/case-study/tutor-lms` and clicking `← Back` works seamlessly without reload flashes.
3. Page height of `/` reduced by >50%, resulting in fluid scroll pacing and zero compositor memory warnings.
4. All interactive stages (Mermaid graphs, FLIP reorder simulator, code copy) fully functional within `/case-study/[slug]`.
