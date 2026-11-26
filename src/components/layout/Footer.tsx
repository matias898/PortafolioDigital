import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">
            {profile.name}
            <span className="footer__cursor" aria-hidden="true">
              _
            </span>
          </p>
          <p>© {new Date().getFullYear()} · Designed &amp; Built with React.</p>
        </div>
        <div className="footer__right">
          <div className="footer__links">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
          </div>
          <a className="footer__top" href="#inicio">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
