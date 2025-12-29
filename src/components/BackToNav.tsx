import Link from "next/link";

export default function BackToNav({ title, href }: { title: string; href: string }) {
    return (
      <Link
        href={href}
        className="inline-flex items-center text-zinc-500 hover:text-white transition-colors mb-8 group text-sm"
      >
        <svg
          className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {title}
      </Link>
    );
} 