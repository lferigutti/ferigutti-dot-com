export default function HeroSection() {
  return (
    <header className="w-full flex flex-col" style={{ paddingTop: "1rem" }}>
      <div className="w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Leonardo.</h1>
        <p className="text-lg text-gray-300">
          I build full-stack web products with a focus on UX and early-stage
          startups.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            See Projects
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg border border-gray-500 hover:bg-gray-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
