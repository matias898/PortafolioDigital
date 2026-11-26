import { siCpanel, siJson, siMariadb, siMqtt, siPhp, siPython, siWordpress } from 'simple-icons';

const brandMarks: Record<string, { path: string }> = {
  Python: siPython,
  PHP: siPhp,
  WordPress: siWordpress,
  MariaDB: siMariadb,
  MQTT: siMqtt,
  JSON: siJson,
  cPanel: siCpanel,
};

export function TechBadge({ children }: { children: string }) {
  const mark = brandMarks[children];
  return (
    <span className="tech-badge">
      {mark && (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d={mark.path} />
        </svg>
      )}
      {children}
    </span>
  );
}
