# CONTEXT.md — Portfolio Architecture & Pacing Strategy

## 1. Executive Summary & Brand Identity

- **Owner**: Fahim Faisal (`@blind` / Abir) — Software Engineer at Ollyo (Themeum Core Division, Tutor LMS v2.0–v4.0) & SUST SWE Graduate.
- **Dual Core Audience**:
  1. **Engineering Leaders & Staff Leads**: Seeking proof of architectural depth, concurrency control, local-first cryptography, strict typing, and systematic performance optimization (0.00 CLS, 60 FPS).
  2. **Product Designers & Creative Directors**: Seeking bespoke typography, tactile micro-interactions, delightful doodle physics, cinematic motion pacing, and obsessive UI craft.
- **Design Philosophy**: High-performance systems meet editorial Behance craft. Informed by **Emil Kowalski's Design Engineering principles**:
  - _Restraint over density_: Deep technical proof earned through progressive disclosure rather than monolithic text dumping.
  - _Physical, interruptible feedback_: Snappy springs (`stiffness: 400, damping: 30`), zero layout reflows (`transform`/`opacity` only).
  - _Visual anchors over text walls_: Video loops, interactive architecture topologies, and syntax-highlighted sandboxes do the heavy lifting.

---

## 2. Problem Diagnosis (The Monolithic Single-Page Bottleneck)

During initial development, four enterprise-grade case studies (Tutor LMS, Enclave, EdTech, DocApp) were enhanced with interactive architecture graphs, sequence flow simulators, and code studios. However, all four were rendered sequentially inside a single `#case-study` container on `/`.

### Critical Issues Identified:

1. **Extreme Vertical Sprawl (15,000+ px)**:
   - Homepage scroll distance induces severe fatigue. Recruiters lose orientation around Chapter 04.
2. **Missing Deep-Linkability**:
   - Reviewers and hiring managers cannot share a direct URL to a specific project (e.g. `/case-study/tutor-lms`).
3. **Payload & Memory Weight**:
   - Initial page mount forces simultaneous instantiation of four Mermaid graph runners, syntax highlighters, video loops, and dozens of interactive node inspectors.
4. **Copy Duplication & Bloat**:
   - Chapter 02 (Biography) and Chapter 10 (Executive Dossier) share almost identical copy verbatim.
   - Chapter 01 (Contents Jump Table) lists dense implementation bullets before visitors even see the products.

---

## 3. Structural Strategy: Progressive Disclosure

```
[ Homepage: / ]
   ├── Chapter 00: Cinematic Hero Showreel (Visual Impact & Identity)
   ├── Doodle Marquee Banner 01
   ├── Chapter 01: Visual Index Directory (Refined Table of Contents)
   ├── Chapter 02: Editorial Bio & Interactive Skill Physics Cloud
   ├── Doodle Marquee Banner 02
   ├── Chapter 03: Career Velocity & Experience (Ollyo 2x Promotion & SUST)
   ├── Chapter 04: Featured Flagship Showcase (Artistic Cinematic Stage Cards)
   │     ├── Card 1: Tutor LMS (120K+ Installs · 0.00 CLS) ──> [ CTA: Explore Case Study → ]
   │     ├── Card 2: Enclave (Argon2id · AES-256-GCM)       ──> [ CTA: Explore Case Study → ]
   │     ├── Card 3: EdTech (RTK Query · 5-Mark Engine)     ──> [ CTA: Explore Case Study → ]
   │     └── Card 4: DocApp (RBAC · PDF Dossier)            ──> [ CTA: Explore Case Study → ]
   ├── Chapter 05: Interactive Motion Lab (Physics & Micro-Interactions)
   ├── Chapter 06: Hybrid Blueprint Gallery (12-Item Lightbox)
   └── Chapter 07: Profile Dossier & Direct Contact (Trimmed, Non-Redundant)

[ Dedicated Route: /case-study/[slug] ]
   ├── Floating Navigation Bar (← Back to Overview, Progress Indicator, Theme Switcher)
   ├── Project Header (Badges, Metric Highlights, Source Repo / Live URLs)
   ├── 4-Stage Synchronized Deep-Dive:
   │     ├── Stage 1: Architecture Topology Graph (Interactive SVG / Node Inspector)
   │     ├── Stage 2: Interaction Flow Simulator (Step-by-step state machine replay)
   │     ├── Stage 3: Production Code Studio (Syntax highlighted, verified snippets)
   │     └── Stage 4: Production Blueprints & Live Production Sandbox
   └── Next Project Pagination Footer (Seamless loop to next flagship case study)
```

---

## 4. Architectural Constraints & Non-Negotiables

- **Universal 60 FPS Compositor Pipeline**: All transitions use GPU-composited CSS properties (`transform`, `opacity`).
- **Preserve Whimsical Brand Signature**: Retain the hand-drawn doodle aesthetic, marquee dividers, and interactive draggable physics, but give them generous spacing.
- **Static Export & GitHub Pages Compatibility**: Implement `generateStaticParams` for `/case-study/[slug]` so builds work seamlessly on static CDNs or GitHub Pages.
- **No Premature Code Execution**: All architectural contracts and task definitions must be approved before modifying source code.
