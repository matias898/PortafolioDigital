import { Box, Braces, ChartNoAxesCombined, Cpu, Globe2 } from 'lucide-react';
import { profile } from '../../data/profile';
import { BentoCard } from '../ui/BentoCard';
import { SectionHeading } from '../ui/SectionHeading';

const capabilities = [
  {
    label: 'Software Development',
    detail: 'Soluciones a medida',
    icon: Braces,
    className: 'bento-about--wide',
  },
  { label: 'Process Automation', detail: 'Flujos y control', icon: Cpu, className: '' },
  { label: 'Web Development', detail: 'Sistemas web', icon: Globe2, className: '' },
  {
    label: 'Data Processing',
    detail: 'Datos estructurados',
    icon: ChartNoAxesCombined,
    className: '',
  },
  {
    label: 'IT Infrastructure',
    detail: 'Software y hardware',
    icon: Box,
    className: 'bento-about--wide',
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="section-shell section-block">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="PROFILE"
          title="Sobre mí"
          description="Una mirada integral al software, los datos y la infraestructura."
        />
        <div className="about__layout">
          <div className="about__copy">
            <p className="about__lead">
              Desarrollo con una perspectiva que conecta <em>software</em> y <em>sistemas.</em>
            </p>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about__bento">
            <div className="about__bento-label">
              <span>// ÁREAS DE TRABAJO</span>
              <span>05 ENTRIES</span>
            </div>
            {capabilities.map(({ label, detail, icon: Icon, className }, index) => (
              <BentoCard key={label} className={className}>
                <span className="bento-card__index">0{index + 1}</span>
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
