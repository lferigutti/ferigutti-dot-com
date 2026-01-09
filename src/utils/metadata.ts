import { metadata as polMeta } from "@/app/projects/content/test-politico.mdx";
import { metadata as eduMeta } from "@/app/projects/content/educational-site.mdx";
import { metadata as startupMeta } from "@/app/projects/content/startup-simulator.mdx";
import { metadata as catalystMeta } from "@/app/projects/content/catalyst-platform.mdx";
import { metadata as websiteMeta } from "@/app/projects/content/personal-website.mdx";

// Blog imports
import { metadata as ansiedadEs } from "@/app/blog/content/ansiedad-ia.es.mdx";
import { metadata as ansiedadEn } from "@/app/blog/content/ansiedad-ia.en.mdx";
import { metadata as startupAppEs } from "@/app/blog/content/startup-app.es.mdx";
import { metadata as startupAppEn } from "@/app/blog/content/startup-app.en.mdx";
import { metadata as foundingEngineerEs } from "@/app/blog/content/founding-engineer.es.mdx";
import { metadata as foundingEngineerEn } from "@/app/blog/content/founding-engineer.en.mdx";

export const projectsMetadata = [
  { ...polMeta, slug: "test-politico" },
  { ...eduMeta, slug: "educational-site" },
  { ...startupMeta, slug: "startup-simulator" },
  { ...catalystMeta, slug: "catalyst-platform" },
  { ...websiteMeta, slug: "personal-website" }
];

export const blogMetadata = [
  {
    slug: ansiedadEn.slug,
    date: ansiedadEn.date,
    titles: {
      en: ansiedadEn.title,
      es: ansiedadEs.title,
    },
    description: {
      en: ansiedadEn.description,
      es: ansiedadEs.description,
    },
    tags: ansiedadEn.tags,
  },
  {
    slug: startupAppEn.slug,
    date: startupAppEn.date,
    titles: {
      en: startupAppEn.title,
      es: startupAppEs.title,
    },
    description: {
      en: startupAppEn.description,
      es: startupAppEs.description,
    },
    tags: startupAppEn.tags,
  },
  {
    slug: foundingEngineerEn.slug,
    date: foundingEngineerEn.date,
    titles: {
      en: foundingEngineerEn.title,
      es: foundingEngineerEs.title,
    },
    description: {
      en: foundingEngineerEn.description,
      es: foundingEngineerEs.description,
    },
    tags: foundingEngineerEn.tags,
  }
];
