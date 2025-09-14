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
    <div>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {metadata.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          Published: {new Date(metadata.date).toLocaleDateString()}
        </p>
      </div>
      <Project />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "test-politico" }, { slug: "educational-site" }];
}

export const dynamicParams = false;
