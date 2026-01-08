import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  post: {
    slug: string;
    titles: { es: string; en: string };
    date: string;
    description: { es: string; en: string };
    tags: string[];
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="card group block p-6 hover:border-zinc-600"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <div className="flex gap-2">
              <span className="px-1.5 py-0.5 bg-zinc-800/50 rounded text-zinc-500">EN</span>
              <span className="px-1.5 py-0.5 bg-zinc-800/50 rounded text-zinc-500">ES</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
            {post.titles.en}
          </h3>
          
          <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {post.description.en}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-1">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <FaArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all mt-10 md:mt-1 flex-shrink-0" />
      </div>
    </Link>
  );
}
