import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-8 py-16 space-y-16">
      {/* Page Header */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A passionate developer focused on creating exceptional user
          experiences and building products that make a difference.
        </p>
      </section>

      {/* Main About Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Hi, I&apos;m Leonardo</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              I&apos;m a full-stack developer with a passion for creating
              beautiful, functional web applications that solve real-world
              problems. My journey in tech started with curiosity about how
              things work, and has evolved into a career focused on user
              experience and product development.
            </p>
            <p>
              Currently, I&apos;m working as a core developer at an early-stage
              startup, where I co-lead product development and frontend
              architecture. I love the fast-paced environment of startups and
              the opportunity to wear multiple hats while building something
              from the ground up.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open source projects, or sharing
              what I&apos;ve learned through writing and mentoring.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Leonardo Ferigutti"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <p className="text-gray-300">
              Building responsive, accessible, and performant user interfaces
              with React, Next.js, and modern CSS frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold">Backend Development</h3>
            <p className="text-gray-300">
              Creating robust APIs and server-side applications with Python,
              Node.js, and modern database technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Node.js", "PostgreSQL", "FastAPI"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold">UX & Design</h3>
            <p className="text-gray-300">
              Designing intuitive user experiences and building design systems
              that scale with product growth.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Design Systems", "Prototyping", "User Research"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Experience</h2>
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
            </div>
            <div className="flex-1 pb-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Core Full Stack Developer</h3>
                <p className="text-blue-400">
                  phelas GmbH • 2023 - Present
                </p>
                <p className="text-gray-300">
                  Co-leading product development and frontend architecture for a
                  web application. Responsible for user experience design,
                  technical decision making, and rapid prototyping.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
            </div>
            <div className="flex-1 pb-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Junior Python Developer</h3>
                <p className="text-gray-400">phelas GmbH • 2021 - 2023</p>
                <p className="text-gray-300">
                  Help Business Development team by creating tools to analyze usage of Energy Storage in diferents Renewable Energy Projects.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Earlier Experience</h3>
                <p className="text-gray-400">Various • 2020 - 2022</p>
                <p className="text-gray-300">
                  Foundation building through various projects and learning
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Beyond Code</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              emoji: "📚",
              title: "Learning",
              description: "Always exploring new technologies and concepts",
            },
            {
              emoji: "🌱",
              title: "Open Source",
              description: "Contributing to the developer community",
            },
            {
              emoji: "✍️",
              title: "Writing",
              description: "Sharing knowledge through blog posts and articles",
            },
            {
              emoji: "🎯",
              title: "Mentoring",
              description: "Helping other developers grow their skills",
            },
          ].map((interest) => (
            <div key={interest.title} className="text-center space-y-3">
              <div className="text-4xl">{interest.emoji}</div>
              <h3 className="text-lg font-semibold">{interest.title}</h3>
              <p className="text-gray-300 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-16">
        <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and collaborations.
          Whether you have a project in mind or just want to chat about tech,
          feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 border border-gray-500 hover:bg-gray-800 rounded-lg font-medium text-lg transition-colors"
          >
            View My Work
          </Link>
        </div>
      </section>
    </main>
  );
}
