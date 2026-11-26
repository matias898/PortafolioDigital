import { education } from '../../data/education';
import { SectionHeading } from '../ui/SectionHeading';

export function EducationSection() {
  return (
    <section id="formacion" className="section-shell section-block section-block--surface">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="EDUCATION"
          title="Formación académica"
          description="Una trayectoria de aprendizaje continuo en informática."
        />
        <div className="education-grid">
          <div className="education-grid__intro">
            <span className="eyebrow">RUTA ACADÉMICA</span>
            <p>Una base técnica sólida, en evolución hacia nuevos desafíos de ingeniería.</p>
            <div className="education-grid__line" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>
          <div className="education-grid__items">
            {education.map((entry, index) => (
              <article className="education-card" key={entry.degree}>
                <div className="education-card__top">
                  <span>0{index + 1} / UTFSM</span>
                  <span
                    className={`status-tag ${entry.status === 'En curso' ? 'status-tag--current' : ''}`}
                  >
                    {entry.status}
                  </span>
                </div>
                <h3>{entry.degree}</h3>
                <p>{entry.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
