import Image from "next/image";
import Button from "../ui/Button";
import { Project } from "@/types/Project";
import Badge from "../ui/Badge";
import { formatDate } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
  }

  export function ProjectCard({ project }: ProjectCardProps) {
    // Mapping des statuts vers des variantes de badge
    const statusVariantMap: Record<string, string> = {
      'planning': 'default',
      'exploration': 'secondary',
      'development': 'success',
      'production': 'warning',
      'completed': 'outline',
    };

    return (
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-mining-dark/50 dark:hover:shadow-gray-800">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || '/images/projects/default.jpg'}
            alt={project.title}
            width={400}
            height={240}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <Badge
              variant={statusVariantMap[project.status] as 'default'}
            >
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-mining-dark dark:text-mining-light">
            {project.title}
          </h3>
          <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <span className="font-medium">Région:</span> {project.region}
            </div>
            <div>
              <span className="font-medium">Date de début:</span> {formatDate(project.startDate)}
            </div>
          </div>
          <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mt-4">
            <Button href={`/projects/${project.id}`} className="w-full">
              Voir le projet
            </Button>
          </div>
        </div>
      </div>
    );
  }
