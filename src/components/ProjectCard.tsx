import { ExternalLink } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <p className="project-card__category">{project.category}</p>
      </div>

      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <div className="project-card__skills" aria-label={`Skills usadas en ${project.title}`}>
        {project.tags.map((tag) => (
          <span key={`${project.id}-${tag}`}>{tag}</span>
        ))}
      </div>

      <a className="project-card__button" href={project.url} target="_blank" rel="noreferrer">
        Ver sitio
        <ExternalLink size={17} />
      </a>
    </article>
  );
}
