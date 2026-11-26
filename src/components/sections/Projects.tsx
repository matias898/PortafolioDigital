import { lazy, Suspense, useCallback, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { projects } from '../../data/projects';
import type { CaseStudy } from '../../types';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

const ProjectModal = lazy(() => import('../ui/ProjectModal'));

export function Projects() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const close = useCallback(() => setSelected(null), []);
  return (
    <section id="proyectos" className="section-shell section-block">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="SELECTED WORK"
          title="Casos técnicos"
          description="Una selección de trabajo realizado en contextos profesionales."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>
        <p className="projects-note">
          // Casos basados en experiencias profesionales. Sin repositorios públicos asociados.
        </p>
      </div>
      <Suspense fallback={null}>
        <AnimatePresence>
          {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
        </AnimatePresence>
      </Suspense>
    </section>
  );
}
