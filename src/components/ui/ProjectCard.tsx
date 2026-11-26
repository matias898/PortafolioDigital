import { Plus } from 'lucide-react';
import type { CaseStudy } from '../../types';
import { AutomationDiagram } from '../illustrations/AutomationDiagram';
import { DataVisualization } from '../illustrations/DataVisualization';
import { WebArchitecture } from '../illustrations/WebArchitecture';
import { TechBadge } from './TechBadge';

export function ProjectIllustration({ kind }: { kind: CaseStudy['illustration'] }) {
  if (kind === 'automation') return <AutomationDiagram />;
  if (kind === 'data') return <DataVisualization />;
  return <WebArchitecture />;
}

export function ProjectCard({ project, onOpen }: { project: CaseStudy; onOpen: () => void }) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        <ProjectIllustration kind={project.illustration} />
        <span className="project-card__visual-label">CASE / {project.id}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>CASO DE TRABAJO {project.id}</span>
          <span>{project.context}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="badge-list">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
        <button
          className="project-card__more"
          type="button"
          onClick={onOpen}
          aria-label={`Ver detalles de ${project.title}`}
        >
          <span>Ver detalles</span>
          <Plus size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
