export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Project, metadata } = await import(
    `@/app/projects/content/${slug}.mdx`
  );

  return (
    <article className="max-w-3xl mx-auto px-8">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {metadata.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Date */}
      <p className="text-zinc-500 text-sm mb-8">
        {new Date(metadata.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      
      {/* MDX Content */}
      <div className="prose prose-invert max-w-none">
        <Project />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return [{ slug: "test-politico" }, { slug: "educational-site" }, { slug: "startup-simulator" }];
}

export const dynamicParams = false;
