export function DataVisualization() {
  return (
    <svg
      className="diagram"
      viewBox="0 0 540 260"
      role="img"
      aria-label="Ilustración abstracta de un panel de datos con gráfico y reporte"
    >
      <path
        className="diagram-grid"
        d="M0 52H540M0 104H540M0 156H540M0 208H540M54 0V260M108 0V260M162 0V260M216 0V260M270 0V260M324 0V260M378 0V260M432 0V260M486 0V260"
      />
      <rect className="diagram-box" x="54" y="33" width="432" height="194" rx="7" />
      <path className="diagram-line" d="M54 68H486M74 51h8m10 0h8m10 0h8M330 86V208" />
      <path className="diagram-axis" d="M82 187H307M82 91V187" />
      <path className="diagram-chart" d="m86 170 48-31 44 10 37-45 38 19 49-42" />
      <circle className="diagram-node" cx="215" cy="104" r="5" />
      <rect className="diagram-bar" x="352" y="167" width="22" height="34" />
      <rect className="diagram-bar" x="390" y="137" width="22" height="64" />
      <rect className="diagram-bar" x="428" y="110" width="22" height="91" />
      <text x="354" y="100">
        REPORT.PDF
      </text>
      <text x="81" y="212">
        DATA / VIEW
      </text>
    </svg>
  );
}
