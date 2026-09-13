# TASK.md: Implementation Roadmap & Ticketed Checklist

This document tracks the implementation of the modular case-study routing, editorial homepage showcase, and copy refinements into discrete, verifiable tickets.

---

## Ticket Overview & Status

```
[✓] TICKET-01: Routing & Static Generation Foundation
[✓] TICKET-02: Dedicated Case Study Route & Full-Width Layout
[✓] TICKET-03: Route-Aware Navigation & Breadcrumb Header
[✓] TICKET-04: Cinematic Editorial Cards on Homepage
[✓] TICKET-05: Editorial Copy Pruning & De-duplication
[✓] TICKET-06: Verification, Build & Visual Polish
```

---

## Tickets & Execution Details

### [✓] [TICKET-01] Routing & Static Generation Foundation

- **Goal**: Establish the Next.js App Router dynamic route structure and export contracts for all flagship projects.
- **Files**:
  - `app/case-study/[slug]/page.tsx`
  - `config/portfolio-data.ts`
- **Completed Tasks**:
  1. Created `app/case-study/[slug]/page.tsx` with `generateStaticParams()` returning `tutor-lms`, `enclave`, `edtech`, `docapp`.
  2. Implemented `generateMetadata()` for dynamic page titles, OG meta, and descriptions per project.
  3. Wired 404 fallback using Next.js `notFound()` for invalid slugs.
- **Verification**:
  - `curl http://localhost:3000/case-study/tutor-lms` -> `200 OK`.
  - `curl http://localhost:3000/case-study/invalid-slug` -> `404 Not Found`.

---

### [✓] [TICKET-02] Dedicated Case Study Route Page & Full-Width Layout

- **Goal**: Assemble the deep-dive view at `/case-study/[slug]` using verified showcase components.
- **Files**:
  - `app/case-study/[slug]/page.tsx`
  - `components/showcase/ProjectCaseStudySection.tsx`
- **Completed Tasks**:
  1. Mounted the project header (title, chapter number, timeline, role, repository link, live link, key metrics bar).
  2. Mounted the 4-stage interactive breakdown:
     - Architecture Topology (`ArchitectureGraph`)
     - State & Interaction Flow (`InteractiveFlowVisualizer`)
     - Production Source Code (`ComplexCodeStudio`)
     - Product Blueprints & Spec Gallery (`HybridGallery`)
  3. Integrated `DoodleMarqueeBanner` as a playful chapter divider matching the artistic identity.
- **Verification**:
  - Interactive stage tabs switch smoothly; Monaco / Prism code studio renders cleanly.

---

### [✓] [TICKET-03] Route-Aware Navigation & Breadcrumb Header

- **Goal**: Enable route-aware navigation in the global header and provide a focused case-study breadcrumb bar.
- **Context**: `RootLayout` renders global `<Navbar />` with `ThemeSwitch` across all routes. No duplicate theme switcher.
- **Files**:
  - `components/navbar.tsx`
  - `components/navigation/CaseStudyBreadcrumbBar.tsx`
  - `components/navigation/CaseStudyFooterNav.tsx`
- **Completed Tasks**:
  1. Updated `components/navbar.tsx`:
     - Added `usePathname()` & `useRouter()`.
     - When on `/case-study/...`, clicking in-page anchor links routes back to `/#section-id`.
     - Active nav indicator highlights "Case Study" with the spring glider pill when viewing a case study.
     - Brand logo returns to `/` from subpages.
  2. Built `CaseStudyBreadcrumbBar.tsx`:
     - Sticky under the top navbar with `← Overview / Flagship Engineering` spring link.
     - Active project pill indicator (`01 / 04 · Tutor LMS`).
     - Quick next project link (`Next: Enclave 🛡️ →`).
  3. Built `CaseStudyFooterNav.tsx`:
     - Previous & Next case study cards with chapter numbers, titles, and taglines.
     - Quick "All Projects" grid link.
- **Verification**:
  - Clicking "Overview" navigates directly back to `http://localhost:3000/#case-study`.

---

### [✓] [TICKET-04] Cinematic Editorial Cards for Homepage (`FeaturedProjectsSection`)

- **Goal**: Replace the 8,000px inline case-study dump on the homepage with an artistic, high-impact feature spread.
- **Files**:
  - `components/showcase/FeaturedProjectsSection.tsx`
  - `app/page.tsx`
- **Completed Tasks**:
  1. Built `FeaturedProjectsSection.tsx`:
     - Chapter header: `CHAPTER 04 // FLAGSHIP WORKS` with pulse indicator.
     - 4 Cinematic Editorial Spread cards with custom ambient gradients, chapter stamps (`04.1` to `04.4`), and tech tags.
     - Telemetry 2x2 grid (`120K+ Installs`, `0.000 CLS`, `60 FPS`, `Strict Registry`).
     - Integrated mini-window previewing the 4 stages (`Architecture`, `State Flow`, `Code Studio`, `Blueprints`).
     - Magnetic CTA: `Explore Case Study (Architecture & Code) →` linking to `/case-study/[slug]`.
  2. Mounted `<FeaturedProjectsSection />` in `app/page.tsx`.
- **Verification**:
  - Total section height reduced from 8,000+ px to a structured 3,148 px.
  - Desktop and mobile layouts render without horizontal overflow.

---

### [✓] [TICKET-05] Editorial Copy Pruning & Redundancy Removal

- **Goal**: Eliminate verbatim duplicate text between Biography and Dossier, and polish the Contents jump table.
- **Files**:
  - `components/profile/ProfileOutro.tsx`
  - `components/contents/ContentsIndexSection.tsx`
  - `config/portfolio-data.ts`
- **Completed Tasks**:
  1. In `ProfileOutro.tsx`:
     - Pruned the duplicated bio paragraphs.
     - Replaced with an **Executive Mandate & Core Focus** section and credentials cards (SUST SWE, 2x Promoted, 120k+ Scale).
     - Tightened the Off-Duty gaming card to a crisp "Tactical Gaming & Kinetic Reflexes" micro-card (Sub-140ms, Squad Sniper).
  2. In `ContentsIndexSection.tsx`:
     - Updated case study items to route directly to `/case-study/${slug}` using Next.js router.
     - Fixed `renderDots` type compatibility.
  3. Updated chapter label in `portfolio-data.ts` to `Flagship Case Studies`.
- **Verification**:
  - No verbatim narrative duplication.
  - Contents index acts as an instant direct navigator.

---

### [✓] [TICKET-06] Verification, Build & Visual Polish

- **Goal**: Guarantee zero regressions, locked 60 FPS compositor, and flawless static generation.
- **Completed Tasks**:
  1. Executed `next build`:
     - Output: 8/8 static HTML pages generated successfully, including all 4 dynamic case studies (`/case-study/tutor-lms`, `/case-study/enclave`, `/case-study/edtech`, `/case-study/docapp`).
  2. Executed `pnpm lint`:
     - 0 errors across the codebase.
  3. Executed browser preview smoke test via MCP tools (`preview_navigate`, `preview_scroll`, `preview_evaluate`):
     - Interactive stage tab switching verified.
     - Breadcrumb navigation verified.
