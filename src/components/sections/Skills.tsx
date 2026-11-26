import {
  Braces,
  ChartNoAxesCombined,
  Code2,
  Database,
  Globe2,
  Network,
  Server,
  Wrench,
} from 'lucide-react';
import { skills } from '../../data/skills';
import type { SkillGroup } from '../../types';
import { BentoCard } from '../ui/BentoCard';
import { SectionHeading } from '../ui/SectionHeading';
import { TechBadge } from '../ui/TechBadge';

const icons = {
  code: Code2,
  globe: Globe2,
  database: Database,
  network: Network,
  chart: ChartNoAxesCombined,
  server: Server,
  wrench: Wrench,
} satisfies Record<SkillGroup['icon'], typeof Braces>;

export function Skills() {
  return (
    <section id="tecnologias" className="section-shell section-block">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="TOOLKIT"
          title="Tecnologías y competencias"
          description="Herramientas utilizadas en experiencias profesionales concretas."
        />
        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <BentoCard
                key={group.name}
                className={`skill-card ${group.size === 'wide' ? 'skill-card--wide' : ''}`}
              >
                <div className="skill-card__top">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <span>0{index + 1} / 07</span>
                </div>
                <div>
                  <p className="skill-card__eyebrow">{group.label}</p>
                  <h3>{group.name}</h3>
                </div>
                <div className="badge-list">
                  {group.technologies.map((technology) => (
                    <TechBadge key={technology}>{technology}</TechBadge>
                  ))}
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
