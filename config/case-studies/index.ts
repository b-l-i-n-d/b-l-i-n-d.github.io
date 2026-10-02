import type { ProjectShowcase } from "@/types/portfolio";

const loaders: Record<string, () => Promise<ProjectShowcase>> = {
  "tutor-lms": () => import("./tutor-lms").then((m) => m.default),
  enclave: () => import("./enclave").then((m) => m.default),
  omnicommerce: () => import("./omnicommerce").then((m) => m.default),
  docapp: () => import("./docapp").then((m) => m.default),
};

export async function getShowcase(id: string): Promise<ProjectShowcase | undefined> {
  const load = loaders[id];
  return load ? load() : undefined;
}
