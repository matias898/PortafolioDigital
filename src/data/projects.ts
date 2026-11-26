import type { CaseStudy } from '../types';

// These are documented work cases, not independent personal projects.
// The same type can be reused for confirmed personal projects in the future.
export const projects: CaseStudy[] = [
  {
    id: '01',
    title: 'Software Development & Automation',
    summary:
      'Software a medida y automatización de procesos con comunicación entre dispositivos y procesamiento de datos.',
    context: 'Volta Ingeniería',
    details: [
      'Desarrollo de soluciones de software a medida utilizando Python.',
      'Automatización de procesos e integración de comunicación MQTT.',
      'Procesamiento de datos estructurados en JSON y CSV.',
    ],
    technologies: ['Python', 'MQTT', 'JSON', 'CSV'],
    illustration: 'automation',
  },
  {
    id: '02',
    title: 'Data Visualization & Reporting',
    summary: 'Interfaces gráficas, visualización de información y generación de reportes técnicos.',
    context: 'Volta Ingeniería',
    details: [
      'Desarrollo de interfaces gráficas mediante PyQt.',
      'Visualización de información con Matplotlib.',
      'Generación de reportes y exportación de gráficos en PDF.',
    ],
    technologies: ['Python', 'PyQt', 'Matplotlib', 'PDF'],
    illustration: 'data',
  },
  {
    id: '03',
    title: 'Web Development & Infrastructure',
    summary: 'Soluciones web, bases de datos y administración de servicios de alojamiento.',
    context: 'TechMarket',
    details: [
      'Desarrollo y mantenimiento de soluciones web con WordPress y PHP.',
      'Trabajo con bases de datos MariaDB.',
      'Administración de alojamiento web mediante WHM y cPanel.',
    ],
    technologies: ['PHP', 'WordPress', 'MariaDB', 'WHM', 'cPanel'],
    illustration: 'web',
  },
];
