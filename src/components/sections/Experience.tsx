import { experience } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';
import { Timeline } from '../ui/Timeline';

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section-shell section-block section-block--surface">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="EXPERIENCE"
          title="Experiencia profesional"
          description="Trabajo aplicado al desarrollo de software, la web y el soporte tecnológico."
        />
        <Timeline entries={experience} />
      </div>
    </section>
  );
}
