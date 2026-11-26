export function AutomationDiagram() {
  return (
    <svg
      className="diagram"
      viewBox="0 0 540 260"
      role="img"
      aria-label="Diagrama abstracto de dispositivos conectados a un procesador de datos"
    >
      <path
        className="diagram-grid"
        d="M0 52H540M0 104H540M0 156H540M0 208H540M54 0V260M108 0V260M162 0V260M216 0V260M270 0V260M324 0V260M378 0V260M432 0V260M486 0V260"
      />
      <path
        className="diagram-line"
        d="M138 66H202V130H250M138 194H202V130M290 130H360V66H402M360 130V194H402"
      />
      <rect className="diagram-box" x="46" y="37" width="92" height="58" rx="5" />
      <rect className="diagram-box" x="46" y="165" width="92" height="58" rx="5" />
      <rect
        className="diagram-box diagram-box--primary"
        x="250"
        y="99"
        width="40"
        height="62"
        rx="5"
      />
      <rect className="diagram-box" x="402" y="37" width="92" height="58" rx="5" />
      <rect className="diagram-box" x="402" y="165" width="92" height="58" rx="5" />
      <circle className="diagram-node" cx="202" cy="130" r="5" />
      <circle className="diagram-node" cx="360" cy="130" r="5" />
      <text x="66" y="71">
        DEVICE_01
      </text>
      <text x="66" y="199">
        DEVICE_02
      </text>
      <text x="263" y="135">{`{ }`}</text>
      <text x="422" y="71">
        JSON
      </text>
      <text x="422" y="199">
        CSV
      </text>
    </svg>
  );
}
