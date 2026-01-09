import Link from "next/link";
import ProjectCard from "@/components/sections/common/ProjectCard";
import BlogCard from "@/components/sections/common/BlogCard";
import ContactCTA from "@/components/sections/common/ContactCTA";
import { projectsMetadata, blogMetadata } from "@/utils/metadata";

export default function HomeMainContent() {
  const otherProjects = projectsMetadata
    .filter((p) => p.slug !== "startup-simulator")
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);

  const latestPosts = blogMetadata
    .filter((post): post is typeof post & { slug: string; date: string; tags: string[] } => {
      return !!post.slug && !!post.date && !!post.tags;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="w-full max-w-5xl mx-auto px-8 pb-24">
      {latestPosts.length > 0 && (
        <section className="space-y-6 mb-20">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <h2 className="text-lg font-medium text-zinc-400">Latest Thoughts</h2>
            </div>
            <Link 
              href="/blog" 
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Read all →
            </Link>
          </div>
          <div className="grid gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="space-y-6 pt-12 border-t border-zinc-900">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-400">Other Projects</h2>
            <Link 
              href="/projects" 
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {otherProjects.map((metadata) => (
              <ProjectCard projectMetadata={metadata} key={metadata.title} />
            ))}
          </div>
        </section>
      )}

      <section className="pt-12 border-zinc-900">
        <ContactCTA />
      </section>


    </main>
  );
}
