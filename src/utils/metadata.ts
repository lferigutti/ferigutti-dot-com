import { metadata as polMeta } from "@/app/projects/content/test-politico.mdx";
import { metadata as eduMeta } from "@/app/projects/content/educational-site.mdx";
import { metadata as startupMeta } from "@/app/projects/content/startup-simulator.mdx";

export const projectsMetadata = [
  { ...polMeta, slug: "test-politico" },
  { ...eduMeta, slug: "educational-site" },
  { ...startupMeta, slug: "startup-simulator" }
];
