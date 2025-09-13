import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header
      className="w-full flex justify-center items-center"
      style={{ paddingTop: "4rem" }}
    >
      <div className="flex items-center gap-16 max-w-6xl px-8">
        {/* Profile Image First */}
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />

        {/* Text Content Second */}
        <div className="text-left space-y-6 flex-1">
          <h1 className="text-5xl font-bold">Hi, I&apos;m Leonardo.</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            I build full-stack web products with a focus on UX and early-stage
            startups.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-medium transition-colors"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
