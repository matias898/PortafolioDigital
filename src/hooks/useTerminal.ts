import { useRef, useState } from 'react';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { skills } from '../data/skills';

export interface TerminalLine {
  id: number;
  kind: 'system' | 'command' | 'response' | 'error';
  text: string;
}

const commands = [
  'whoami',
  'skills',
  'education',
  'experience',
  'contact',
  'help',
  'clear',
] as const;

function responseFor(command: string): string | null {
  switch (command) {
    case 'whoami':
      return `${profile.name} · ${profile.role}\n${profile.location} · ${profile.university}`;
    case 'skills':
      return skills.map((group) => `${group.label}: ${group.technologies.join(', ')}`).join('\n');
    case 'education':
      return education
        .map((item) => `${item.degree} · ${item.status}\n${item.institution}`)
        .join('\n\n');
    case 'experience':
      return experience
        .map((item) => `${item.role} · ${item.company}${item.period ? `\n${item.period}` : ''}`)
        .join('\n\n');
    case 'contact': {
      const links = [profile.email, profile.github, profile.linkedin].filter(Boolean);
      return links.length ? links.join('\n') : 'Datos de contacto pendientes de configurar.';
    }
    case 'help':
      return `Comandos disponibles: ${commands.join(', ')}`;
    default:
      return null;
  }
}

export function useTerminal() {
  const nextId = useRef(1);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 0,
      kind: 'system',
      text: `Bienvenido al espacio de ${profile.name}. Escribe help para comenzar.`,
    },
  ]);
  const [history, setHistory] = useState<string[]>([]);

  function execute(value: string) {
    const command = value.trim().toLowerCase();
    if (!command) return;
    setHistory((previous) => [...previous, command]);
    if (command === 'clear') {
      setLines([]);
      return;
    }
    const output = responseFor(command);
    setLines((previous) => [
      ...previous,
      { id: nextId.current++, kind: 'command', text: command },
      {
        id: nextId.current++,
        kind: output === null ? 'error' : 'response',
        text: output ?? `Comando desconocido: ${command}. Escribe help.`,
      },
    ]);
  }

  return { lines, history, execute };
}
