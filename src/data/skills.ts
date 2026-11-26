import type { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    label: 'Lenguajes',
    technologies: ['Python', 'PHP'],
    icon: 'code',
  },
  { name: 'Web Development', label: 'Desarrollo web', technologies: ['WordPress'], icon: 'globe' },
  { name: 'Databases', label: 'Bases de datos', technologies: ['MariaDB'], icon: 'database' },
  {
    name: 'Communication & Data',
    label: 'Comunicación y datos',
    technologies: ['MQTT', 'JSON', 'CSV'],
    icon: 'network',
  },
  {
    name: 'GUI & Data Visualization',
    label: 'Interfaces y visualización',
    technologies: ['PyQt', 'Matplotlib'],
    icon: 'chart',
  },
  {
    name: 'Infrastructure',
    label: 'Infraestructura',
    technologies: ['WHM', 'cPanel', 'Web Hosting'],
    icon: 'server',
  },
  {
    name: 'IT Support',
    label: 'Soporte técnico',
    technologies: [
      'Hardware',
      'Soporte técnico',
      'Diagnóstico de equipos',
      'Mantenimiento preventivo',
      'Optimización de sistemas',
    ],
    icon: 'wrench',
    size: 'wide',
  },
];
