import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="section-heading"
      initial={reducedMotion ? false : { opacity: 0.72, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reducedMotion ? 0 : 0.45 }}
    >
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>// {eyebrow}</span>
      </div>
      <div className="section-heading__main">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </motion.div>
  );
}
