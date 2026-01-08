import Link from "next/link";
import ProjectCard from "@/components/sections/common/ProjectCard";
import { projectsMetadata, blogMetadata } from "@/utils/metadata";

export default function HomeMainContent() {
  const otherProjects = projectsMetadata
    .filter((p) => p.slug !== "startup-simulator")
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);

  const latestPosts = blogMetadata
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 2);

  return (
    <main className="w-full max-w-5xl mx-auto px-8 pb-24">
      {otherProjects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-400">More Projects</h2>
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

      {latestPosts.length > 0 && (
        <section className="mt-20 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-400">Latest Thoughts</h2>
            <Link 
              href="/blog" 
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Read more →
            </Link>
          </div>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block p-4 -mx-4 rounded-xl hover:bg-zinc-800/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h3 className="text-zinc-300 group-hover:text-zinc-100 transition-colors font-medium">
                    {post.titles.en}
                  </h3>
                  <time className="text-sm text-zinc-500 tabular-nums">
                    {new Date(post.date!).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-20 pt-12 border-t border-zinc-800">
        <h2 className="text-sm font-medium mb-4 text-zinc-500">Technologies</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Node.js",
            "PostgreSQL",
          ].map((tech) => (
            <span
              key={tech}
              className="text-sm text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
