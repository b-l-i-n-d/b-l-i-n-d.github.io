export interface SkillDoodle {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  size: string;
  weight: string;
  rot: number;
}

export const SKILLS_DOODLE: SkillDoodle[] = [
  {
    id: "doodle-0",
    name: "Design Systems",
    subtitle: "Tokenized UI with mathematical rhythm",
    badge: "Atomic Systems",
    size: "text-2xl sm:text-3xl lg:text-[2.2rem]",
    weight: "font-bold",
    rot: -3.5,
  },
  {
    id: "doodle-1",
    name: "Fluid Motion",
    subtitle: "120 FPS interruptible spring physics",
    badge: "120 FPS",
    size: "text-xl sm:text-2xl lg:text-[1.85rem]",
    weight: "font-extrabold",
    rot: 3,
  },
  {
    id: "doodle-2",
    name: "State Machines",
    subtitle: "Predictable, zero-illegal-state UI",
    badge: "Deterministic",
    size: "text-xl sm:text-2xl lg:text-3xl",
    weight: "font-black",
    rot: -2,
  },
  {
    id: "doodle-3",
    name: "Optimization",
    subtitle: "18X build pipeline & bundle tree-shaking",
    badge: "18X Fast",
    size: "text-base sm:text-lg lg:text-xl",
    weight: "font-bold",
    rot: 4.5,
  },
  {
    id: "doodle-4",
    name: "Micro-Interactions",
    subtitle: "Tactile gestures & magnetic pointer physics",
    badge: "Tactile",
    size: "text-lg sm:text-xl lg:text-2xl",
    weight: "font-semibold",
    rot: 2,
  },
  {
    id: "doodle-5",
    name: "Zero CLS",
    subtitle: "FLIP layout geometry pre-computation",
    badge: "Score: 0.000",
    size: "text-xl sm:text-2xl lg:text-3xl",
    weight: "font-black",
    rot: -3.5,
  },
];
