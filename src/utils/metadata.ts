import { metadata as polMeta } from "@/app/projects/content/test-politico.mdx";
import { metadata as eduMeta } from "@/app/projects/content/educational-site.mdx";
import { metadata as startupMeta } from "@/app/projects/content/startup-simulator.mdx";
import { metadata as catalystMeta } from "@/app/projects/content/catalyst-platform.mdx";
import { metadata as websiteMeta } from "@/app/projects/content/personal-website.mdx";

// Blog imports
import { metadata as ansiedadEs } from "@/app/blog/content/ansiedad-ia.es.mdx";
import { metadata as ansiedadEn } from "@/app/blog/content/ansiedad-ia.en.mdx";

export const projectsMetadata = [
  { ...polMeta, slug: "test-politico" },
  { ...eduMeta, slug: "educational-site" },
  { ...startupMeta, slug: "startup-simulator" },
  { ...catalystMeta, slug: "catalyst-platform" },
  { ...websiteMeta, slug: "personal-website" }
];

export const blogMetadata = [
  {
    slug: "ansiedad-ia",
    date: ansiedadEs.date ?? "",
    titles: {
      es: ansiedadEs.title ?? "",
      en: ansiedadEn.title ?? "",
    },
    description: {
      es: ansiedadEs.description ?? "",
      en: ansiedadEn.description ?? "",
    },
    tags: ansiedadEs.tags ?? [],
  }
];
