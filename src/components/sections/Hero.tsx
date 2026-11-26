import { motion } from 'motion/react';
import { Download, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Button } from '../ui/Button';
import { Terminal } from '../ui/Terminal';

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [firstName, ...surname] = profile.name.split(' ');
  return (
    <section id="inicio" className="hero section-shell">
      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={reducedMotion ? false : { opacity: 0.9, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-line" /> // {profile.role.toUpperCase()}{' '}
            <span className="hero__eyebrow-end">/ {profile.location.toUpperCase()}</span>
          </p>
          <h1>
            <span className="hero__name-first">{firstName}</span>
            <span className="hero__name-last">
              {surname.join(' ')}
              <span className="hero__name-dot">.</span>
            </span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions">
            <Button href="#experiencia" variant="primary">
              Explorar experiencia
            </Button>
            {profile.cv && (
              <Button href={profile.cv} download icon={<Download size={17} />}>
                Descargar CV
              </Button>
            )}
          </div>
          <div className="hero__socials">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={17} /> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={17} /> LinkedIn
              </a>
            )}
          </div>
          <div className="hero__index">
            <span>01 / 07</span>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </motion.div>
        <motion.div
          className="hero__terminal"
          initial={reducedMotion ? false : { opacity: 0.9, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.12 }}
        >
          <div className="hero__terminal-label">
            <span>INTERACTIVE PROFILE</span>
            <span>01 — TERMINAL</span>
          </div>
          <Terminal />
          <div className="hero__terminal-under">
            <span>AVAILABLE COMMANDS</span>
            <span>help / whoami / skills / ...</span>
          </div>
        </motion.div>
      </div>
      <div className="hero__bottom-line" aria-hidden="true" />
    </section>
  );
}
