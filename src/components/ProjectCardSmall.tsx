import { Metadata } from "@/models";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCardSmall({
  projectMetadata,
}: {
  projectMetadata: Metadata;
}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
      <div className="space-y-4">
        <Link href={`/projects/${projectMetadata.slug}`}>
          <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center">
            <Image
              src={projectMetadata.thumbnail ?? ""}
              alt={projectMetadata.slug ?? "default-picture"}
              width={400}
              height={100}
            />
          </div>
          <div className="space-y-2 mt-3">
            <h3 className="text-lg font-semibold">{projectMetadata.title}</h3>
            <p className="text-gray-300 text-sm">
              {projectMetadata.description}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
