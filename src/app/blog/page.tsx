import BackToNav from "@/components/ui/BackToNav";
import BlogCard from "@/components/sections/common/BlogCard";
import { blogMetadata } from "@/utils/metadata";

export default function BlogListPage() {
  const validPosts = blogMetadata.filter(
    (post): post is typeof post & { slug: string; date: string; tags: string[] } => {
      return !!post.slug && !!post.date && !!post.tags;
    }
  );

  return (
    <main className="w-full max-w-4xl mx-auto px-8 py-8 space-y-16">
      <BackToNav title="Back to Home" href="/" />
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Thoughts about web development, design and technology. 
          Mainly in Spanish, with English versions available.
        </p>
      </section>

      <section className="grid gap-6">
        {validPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return blogMetadata.map((post) => ({ slug: post.slug }));
}