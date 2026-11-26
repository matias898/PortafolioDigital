import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { copyToClipboard } from '../../utils/clipboard';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  useEffect(() => {
    if (!copied && !copyFailed) return;
    const timer = window.setTimeout(() => {
      setCopied(false);
      setCopyFailed(false);
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [copied, copyFailed]);
  async function copyEmail() {
    if (!profile.email) return;
    const success = await copyToClipboard(profile.email);
    setCopied(success);
    setCopyFailed(!success);
  }
  const hasLinks = Boolean(profile.email || profile.github || profile.linkedin || profile.cv);
  return (
    <section id="contacto" className="section-shell section-block section-block--contact">
      <div className="container">
        <SectionHeading index="06" eyebrow="CONTACT" title="Contacto" />
        <div className="contact-panel">
          <div className="contact-panel__signal">
            <span>LET'S CONNECT</span>
            <span>↘</span>
          </div>
          <h3>
            Construyamos algo <em>interesante.</em>
          </h3>
          <p>
            Conversemos sobre proyectos tecnológicos, oportunidades laborales y colaboraciones
            profesionales.
          </p>
          {hasLinks ? (
            <div className="contact-panel__actions">
              {profile.email && (
                <>
                  <Button
                    href={`mailto:${profile.email}`}
                    variant="primary"
                    icon={<Mail size={17} />}
                  >
                    Enviar correo
                  </Button>
                  <button
                    className="contact-panel__copy"
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copiar correo electrónico"
                  >
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                    {copied ? 'Correo copiado' : 'Copiar correo'}
                  </button>
                </>
              )}
              {profile.github && (
                <Button
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink size={17} />}
                >
                  GitHub
                </Button>
              )}
              {profile.linkedin && (
                <Button
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink size={17} />}
                >
                  LinkedIn
                </Button>
              )}
              {profile.cv && (
                <Button href={profile.cv} download>
                  Descargar CV
                </Button>
              )}
            </div>
          ) : (
            <div className="contact-panel__pending">
              Canales de contacto pendientes de configurar.
            </div>
          )}
          {copyFailed && (
            <p className="contact-panel__feedback" role="status">
              No se pudo copiar. Puedes usar el enlace de correo.
            </p>
          )}
          <div className="contact-panel__bottom">
            <span>{profile.location.toUpperCase()}</span>
            <span>SOFTWARE / DATA / SYSTEMS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
