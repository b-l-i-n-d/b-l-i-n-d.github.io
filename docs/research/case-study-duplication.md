# Research: Tutor LMS & EdTech render the same case study

Date: 2026-09-09
Question: Why do "Tutor LMS 2.0 to 4.0" and "EdTech Learning Platform" show identical case-study bodies, even though they are different products?
Primary sources: the site's own code (`config/portfolio-data.ts`, `components/showcase/*`).

## Findings

### 1. The data layer already defines distinct case studies per project
`config/portfolio-data.ts` models every flagship project with its own typed `stages` record (architecture / flow / code / live), each with unique titles, descriptions, highlights, and code snippets:

- `tutor-lms` (lines 111–240): Tutor Core Registry, FLIP curriculum engine, `useTutorMotion`, zero-CLS cockpit.
- `enclave` (lines 241–332): Argon2id/AES-256-GCM vault, TOTP engine, 3-way sync.
- `edtech` (lines 333–426): Next.js/Express LMS, Cloudinary video, quiz/leaderboard engine.
- `docapp` (lines 427–518): booking concurrency locks, role portals, PDF generator.

The shape is fully typed in `types/portfolio.ts` (`ProjectCaseStudy.stages`, lines 42–43).

### 2. But the presentation layer ignores `project.stages` entirely
`components/showcase/ProjectCaseStudySection.tsx` renders the same three hard-coded, Tutor-specific interactive components for **every** project, with no project-specific props:

- Architecture stage → `<TutorArchitectureGraph />` (line 275). `TutorArchitectureGraph` takes no props and its `NODES` array is pure Tutor LMS content (`components/showcase/TutorArchitectureGraph.tsx:20–230`).
- Code stage → `<ComplexCodeStudio />` (line 287). `ComplexCodeStudio` takes no props; its `modules` are hard-coded (`components/showcase/ComplexCodeStudio.tsx:17–186`).
- Flow stage → `<InteractiveFlowVisualizer />` (line 299) — no `projectId` passed, so it defaults to `"tutor-lms"` (`components/showcase/InteractiveFlowVisualizer.tsx:349`). Its simulator `steps` are `TUTOR_LMS_STEPS` unconditionally (line 351); the mermaid diagrams only swap to an unrelated "EASYSTORE" POS diagram when `projectId` is set to something else (lines 350–353).

Only the "Product Blueprints" gallery stage is actually data-driven per project (`getProjectGallery`, lines 85–96).

### 3. Consequence
Every flagship project (Tutor, Enclave, EdTech, DocApp) renders the same body: Tutor's architecture graph, Tutor's flow simulator, and a fixed code module list. Headers (title/tagline/stack/stats/GitHub link) and the blueprint gallery differ, but the architecture / code / flow stages are identical — hence Tutor and EdTech "share" a case study.

### 4. Root cause summary
`ProjectCaseStudySection` is hard-wired to Tutor-LMS showcase components instead of consuming the per-project `project.stages` contract that already exists in the data model. The interactive components were built to be a deep-dive for Tutor specifically but were mounted for all four projects.

## Fix (shipped)
The three hard-coded Tutor components now render only for `project.id === "tutor-lms"`; all other projects render a generic `DataDrivenStageView` fed from `project.stages.architecture / .code / .flow` (title, subtitle, description, numbered highlights, optional code snippet). Implemented in `components/showcase/ProjectCaseStudySection.tsx`.

## Product-info verification pass (2026-09-09, via `gh`)
Re-grounded the per-project stages against the actual repos:

- **EdTech** (`b-l-i-n-d/edTech`, GitHub API tree of `master`): monorepo confirmed — `client/` = Next.js 13 + TypeScript + Redux Toolkit/RTK Query + redux-persist + Ant Design + react-player + react-markdown; `server/` = ESM Express, models→services→controllers→routes, Mongoose paginate plugin, Joi, helmet/xss-clean/rate-limit/mongo-sanitize, Swagger, NodeMailer+Handlebars, Jest. Grading code replaced with the real `server/src/services/quizzMark.service.js` (5-mark questions, duplicate-submission 400 guard). Live: `https://ed-tech-six.vercel.app`.
- **DocApp** (`b-l-i-n-d/docapp`): confirmed Vite + React 18 + Ant Design + Tailwind/daisyUI + Chart.js + `@react-pdf/renderer`; server = component-based Express (users/doctors/departments/districts/workplaces/appointments) with cookie-borne rotating JWT. Replaced the fictional `reserveAppointmentSlot` TS snippet with the real `server/components/appointments/appointments.controller.js` `createAppointment`; removed unsupported "atomic slot-lock/blackout" claims. Live: `https://docapp-five.vercel.app`.
- **Enclave** (`b-l-i-n-d/enclave`, private): the repo is a skills-mirror folder plus the actual Expo app — confirmed `lib/crypto/encryption.ts` (AES-256-GCM, 96-bit IV, 128-bit tag), `lib/crypto/key-derivation.ts` (Argon2id: 64MB, 3 passes, 1 lane), `lib/crypto/totp.ts`, `lib/security/hibp.ts` (k-anonymity prefix), `lib/sync/merger.ts` (timestamp 3-way item merge). Replaced the fictional snippet with the real `encryptJson`.
- **Tutor LMS** (`themeum/tutor`): spot-verified `gh search issues --author b-l-i-n-d` — real PRs exist for the claims in the flagship graph (#2985, #2990, #2983, #2948, #2931, #2938, #2997, etc.). Tutor flagship components left untouched.

## Round 2: Full Tutor-format for all projects (shipped 2026-09-09)
User decision: keep the Tutor format — every flagship project now renders the same three interactive presenters, each driven by its own verified repo data.

- The three components were generalized into data-driven presenters with no hard-coded content:
  - `components/showcase/TutorArchitectureGraph.tsx` → `components/showcase/ArchitectureGraph.tsx` (props: `ShowcaseGraph`).
  - `components/showcase/InteractiveFlowVisualizer.tsx` now takes `{ flow }` (`ShowcaseFlow`); removed `TUTOR_LMS_*`/`EASYSTORE_*` constants and the `projectId` prop; "* of 05" counter and code-window filename are now dynamic.
  - `components/showcase/ComplexCodeStudio.tsx` now takes `{ modules }` (`ShowcaseCodeModule[]`).
- All showcase data lives in `config/case-study-data.ts` (`caseStudyShowcase` registry, typed `ProjectShowcase` in `types/portfolio.ts`). Tutor's datasets were moved in verbatim so Tutor renders identically; Enclave/EdTech/DocApp got freshly authored graph nodes, flow steps, mermaid arch/seq specs, and code studios grounded in the verified sources (real lib/service/controller files).
- `components/showcase/ProjectCaseStudySection.tsx`: tutor-lms gate removed — renders `<ArchitectureGraph data={...}/>`, `<ComplexCodeStudio modules={...}/>`, `<InteractiveFlowVisualizer flow={...}/>` for any project with showcase data; falls back to `DataDrivenStageView` when absent.
- Verified: `npx tsc --noEmit` and `npm run build` pass; in-browser, each project shows its own graph (12 vs 9 modules), its own code studio (real filenames), its own flow simulator (step titles + code windows), and renders its own mermaid arch/seq SVGs without errors.