export function WebArchitecture() {
  return (
    <svg
      className="diagram"
      viewBox="0 0 540 260"
      role="img"
      aria-label="Diagrama abstracto de cliente, servidor y base de datos"
    >
      <path
        className="diagram-grid"
        d="M0 52H540M0 104H540M0 156H540M0 208H540M54 0V260M108 0V260M162 0V260M216 0V260M270 0V260M324 0V260M378 0V260M432 0V260M486 0V260"
      />
      <path className="diagram-line" d="M160 130H206m128 0h46" />
      <circle className="diagram-node" cx="183" cy="130" r="5" />
      <circle className="diagram-node" cx="357" cy="130" r="5" />
      <rect className="diagram-box" x="45" y="77" width="115" height="106" rx="6" />
      <path className="diagram-line" d="M45 106H160M66 93h10m9 0h10" />
      <rect
        className="diagram-box diagram-box--primary"
        x="206"
        y="62"
        width="128"
        height="136"
        rx="6"
      />
      <path className="diagram-line" d="M227 97h86M227 119h70M227 141h76M227 163h48" />
      <path
        className="diagram-box"
        d="M380 89c0-11 25-20 56-20s56 9 56 20v82c0 11-25 20-56 20s-56-9-56-20z"
      />
      <path
        className="diagram-line"
        d="M380 89c0 11 25 20 56 20s56-9 56-20M380 130c0 11 25 20 56 20s56-9 56-20"
      />
      <text x="67" y="151">
        CLIENT
      </text>
      <text x="233" y="186">
        SERVER
      </text>
      <text x="402" y="177">
        DATABASE
      </text>
    </svg>
  );
}
