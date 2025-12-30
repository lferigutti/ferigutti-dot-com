import type { Metadata } from "@/models";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ projectMetadata }: { projectMetadata: Metadata }) {
  return (
    <Link 
      href={`/projects/${projectMetadata.slug}`}
      className="card group block p-6 hover:border-zinc-600"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-medium group-hover:text-white transition-colors">
            {projectMetadata.title}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-2">
            {projectMetadata.description}
          </p>
          
          {/* Tags */}
          {projectMetadata.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {projectMetadata.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <FaArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
      </div>
    </Link>
  );
}
