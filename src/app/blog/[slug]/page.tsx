import BackToNav from "@/components/ui/BackToNav";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { notFound } from "next/navigation";
import { blogMetadata } from "@/utils/metadata";

export default async function BlogPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const sParams = await searchParams;
  const lang = sParams.lang || "en"; // Default to English

  let post;
  try {
    post = await import(`@/app/blog/content/${slug}.${lang}.mdx`);
  } catch (e) {
    try {
      const fallbackLang = lang === "en" ? "es" : "en";
      post = await import(`@/app/blog/content/${slug}.${fallbackLang}.mdx`);
    } catch (e2) {
      notFound();
    }
  }

  const { default: Content, metadata } = post;

  return (
    <article className="w-full max-w-4xl mx-auto px-8 py-8">
      <div className="flex justify-between items-center">
        <BackToNav title="Back to Blog" href="/blog" />
        <LanguageSwitcher currentLang={lang} />
      </div>
      
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="flex items-center gap-4 text-zinc-500 text-sm">
          <time dateTime={metadata.date}>
            {new Date(metadata.date).toLocaleDateString(lang === "en" ? "en-US" : "es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <div className="flex gap-2">
            {metadata.tags?.map((tag: string) => (
              <span key={tag} className="px-2 py-0.5 bg-zinc-800 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      <div className="prose prose-zinc prose-invert max-w-none">
        <Content />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return blogMetadata.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = true; // Allow new posts without rebuild if using dynamic imports
