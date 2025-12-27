import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { projectsMetadata } from "@/utils/metadata";
import ProjectCardSmall from "@/components/ProjectCardSmall";

export default async function ProjectsPage() {

  
  const allProjects = projectsMetadata.sort((a, b) => a.order - b.order);

  return (
    <main className="w-full max-w-6xl mx-auto px-8 py-16 space-y-16">
      {/* Page Header */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A collection of web applications and tools I&apos;ve built, focusing
          on user experience, performance, and solving real-world problems.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects
            .filter((metadata) => metadata.featured_project)
            .map((metadata) => (
              <ProjectCard projectMetadata={metadata} key={metadata.title} />
            ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">All Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {allProjects.map((metadata) => (
            <ProjectCardSmall projectMetadata={metadata} key={metadata.title} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-16">
        <h2 className="text-3xl font-bold">Interested in working together?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects and opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
