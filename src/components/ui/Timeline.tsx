import { motion } from 'motion/react';
import type { Experience } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TechBadge } from './TechBadge';

export function Timeline({ entries }: { entries: Experience[] }) {
  const reducedMotion = useReducedMotion();
  return (
    <div className="timeline">
      {entries.map((entry, index) => (
        <motion.article
          className="timeline__item"
          key={entry.company}
          initial={reducedMotion ? false : { opacity: 0.8, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reducedMotion ? 0 : 0.4,
            delay: reducedMotion ? 0 : index * 0.08,
          }}
        >
          <div className="timeline__rail">
            <span className="timeline__node" />
            <span className="timeline__number">0{index + 1}</span>
          </div>
          <div className="timeline__content">
            <div className="timeline__top">
              <span className="eyebrow">{entry.company}</span>
              {entry.period && <span className="timeline__period">{entry.period}</span>}
            </div>
            <h3>{entry.role}</h3>
            <ul>
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
            <div className="badge-list">
              {entry.technologies.map((technology) => (
                <TechBadge key={technology}>{technology}</TechBadge>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
