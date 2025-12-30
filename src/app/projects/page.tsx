import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { projectsMetadata } from "@/utils/metadata";
import ProjectCardSmall from "@/components/ProjectCardSmall";
import BackToNav from "@/components/BackToNav";

export default async function ProjectsPage() {
  const allProjects = projectsMetadata.sort((a, b) => a.order - b.order);
  const featuredProjects = allProjects.filter((p) => p.featured_project);
  const otherProjects = allProjects.filter((p) => !p.featured_project);

  return (
    <main className="w-full max-w-5xl mx-auto px-8 py-8 space-y-16">    
      <BackToNav title="Back to Home" href="/" />
      {/* Page Header */} 
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          A collection of web applications and tools I&apos;ve built, focusing
          on user experience and solving real problems.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-lg font-medium text-zinc-400">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((metadata) => (
              <ProjectCard projectMetadata={metadata} key={metadata.title} />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      {otherProjects.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-lg font-medium text-zinc-400">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {otherProjects.map((metadata) => (
              <ProjectCardSmall projectMetadata={metadata} key={metadata.title} />
            ))}
          </div>
        </section>
      )}

      {/* Fallback if all projects are featured */}
      {otherProjects.length === 0 && featuredProjects.length === 0 && (
        <section className="space-y-6">
          <h2 className="text-lg font-medium text-zinc-400">All Projects</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {allProjects.map((metadata) => (
              <ProjectCardSmall projectMetadata={metadata} key={metadata.title} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
