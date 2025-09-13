import Link from "next/link";

export default function ProjectsPage() {
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
          {/* Project Card Template */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Project Title</h3>
                <p className="text-gray-300">
                  Brief description of what this project does and the problems
                  it solves.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-gray-500 hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Duplicate for second project */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Another Project</h3>
                <p className="text-gray-300">
                  Description of your second featured project and its key
                  features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                    FastAPI
                  </span>
                  <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 border border-gray-500 hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">All Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Smaller project cards */}
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div
              key={project}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    Project {project}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Project {project}</h3>
                  <p className="text-gray-300 text-sm">
                    Short description of project {project}.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <Link
                      href="#"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
