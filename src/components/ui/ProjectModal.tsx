import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { CaseStudy } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ProjectIllustration } from './ProjectCard';
import { TechBadge } from './TechBadge';

export function ProjectModal({ project, onClose }: { project: CaseStudy; onClose: () => void }) {
  const reducedMotion = useReducedMotion();
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const root = document.getElementById('root');
    const previousInert = root?.inert;
    document.body.style.overflow = 'hidden';
    if (root) root.inert = true;
    closeButton.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key !== 'Tab' || !dialog.current) return;
      const focusables = Array.from(
        dialog.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (root) root.inert = previousInert ?? false;
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="modal-backdrop"
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.18 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialog}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        initial={reducedMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.99 }}
        transition={{ duration: reducedMotion ? 0 : 0.22 }}
      >
        <div className="project-modal__header">
          <span className="eyebrow">CASE STUDY / {project.id}</span>
          <button
            ref={closeButton}
            className="icon-button"
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalles"
          >
            <X size={20} />
          </button>
        </div>
        <div className="project-modal__visual">
          <ProjectIllustration kind={project.illustration} />
        </div>
        <div className="project-modal__content">
          <p className="eyebrow">CONTEXTO / {project.context}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p id="project-modal-description">{project.summary}</p>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="badge-list">
            {project.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export default ProjectModal;
