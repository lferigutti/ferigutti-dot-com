export default function HomeMainContent() {
  return (
    <main className="w-full max-w-6xl mx-auto px-8 py-16 space-y-20">
      {/* What I Do Section */}
      <section id="what-i-do" className="space-y-6">
        <h2 className="text-3xl font-bold">What I do</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Core developer of an early-stage web app, co-leading product and
              frontend development with a focus on user experience.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">My expertise includes:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Frontend UX and design systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Full-stack prototyping (React / Next.js / Python)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Building and iterating fast with small teams</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-6">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold">Current Role</h3>
            <p className="text-gray-400 mb-2">Early-stage Startup • 2021 -  Present</p>
            <p className="text-gray-300">
              Leading frontend development and product decisions for a web
              application in the early stages of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="space-y-6">
        <h2 className="text-3xl font-bold">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
            "Git",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
