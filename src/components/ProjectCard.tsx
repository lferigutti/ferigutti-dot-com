import type { Metadata } from "@/models";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";


export default function ProjectCard({ projectMetadata }: { projectMetadata : Metadata}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
      <Link href={`/projects/${projectMetadata.slug}`}>
      <div className="space-y-4">
        <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
          <Image
            src={projectMetadata.thumbnail ?? ""}
            alt={projectMetadata.slug ?? "default-picture"}
            width={400}
            height={100}

          />
        </div>
        <div className="space-y-3 mt-3">
          <h3 className="text-xl font-semibold">{projectMetadata.title}</h3>
          <p className="text-gray-300">
           {projectMetadata.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projectMetadata.tags && projectMetadata.tags.map(
              tag => {return (<Tag tag={tag} key={tag} />)}
            )
          }
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

