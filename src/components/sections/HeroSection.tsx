import Image from "next/image";
import { FaLinkedinIn, FaEnvelope, FaGithub, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <header className="w-full flex justify-center items-center py-16 md:py-24">
      <div className="flex flex-col items-center text-center max-w-3xl px-8">
        {/* Profile Image */}
        <Image
          src="/profile.png"
          alt="Leonardo Ferigutti"
          width={140}
          height={140}
          className="rounded-full mb-6"
        />

        {/* Name & Tagline */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Hi, I&apos;m Leonardo.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-8">
          Full-stack dev who ships products, not just code.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-16">
          <a
            href="https://github.com/lferigutti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-ferigutti-859913122/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@ferigutti.com"
            className="p-3 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        {/* Featured Project - Startup Simulator */}
        <div className="w-full max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Featured Project</p>
          <a
            href="https://startup-simulator.htz.ferigutti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card group block p-6 text-left hover:border-zinc-600"
          >
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  Startup Simulator
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  An interactive role-based simulator where you navigate realistic startup scenarios and uncover your working style.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "React", "Coolify"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium bg-white text-zinc-900 px-4 py-2 rounded-lg group-hover:bg-zinc-200 transition-colors">
                  Try it live
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
