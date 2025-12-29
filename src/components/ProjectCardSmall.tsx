import { Metadata } from "@/models";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCardSmall({
  projectMetadata,
}: {
  projectMetadata: Metadata;
}) {
  return (
    <Link 
      href={`/projects/${projectMetadata.slug}`}
      className="card group block p-4 hover:border-zinc-600"
    >
      <div className="space-y-3">
        <div className="w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden">
          <Image
            src={projectMetadata.thumbnail ?? ""}
            alt={projectMetadata.title ?? "Project"}
            width={400}
            height={225}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-medium group-hover:text-white transition-colors">
            {projectMetadata.title}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-2">
            {projectMetadata.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
