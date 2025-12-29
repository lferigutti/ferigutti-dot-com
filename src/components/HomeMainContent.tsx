import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projectsMetadata } from "@/utils/metadata";

export default function HomeMainContent() {
  // Get all projects except startup-simulator (which is in hero)
  const otherProjects = projectsMetadata
    .filter((p) => p.slug !== "startup-simulator")
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);

  return (
    <main className="w-full max-w-5xl mx-auto px-8 pb-24">
      {/* More Projects Section */}
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

      {/* Technologies - Simple inline */}
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
