import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { useTerminal } from '../../hooks/useTerminal';

export function Terminal() {
  const { lines, history, execute } = useTerminal();
  const [input, setInput] = useState('');
  const historyIndex = useRef(-1);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [lines]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    execute(input);
    setInput('');
    historyIndex.current = -1;
  }

  function handleKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowUp' && history.length) {
      event.preventDefault();
      historyIndex.current = Math.min(historyIndex.current + 1, history.length - 1);
      setInput(history[history.length - 1 - historyIndex.current] ?? '');
    } else if (event.key === 'ArrowDown' && historyIndex.current >= 0) {
      event.preventDefault();
      historyIndex.current -= 1;
      setInput(
        historyIndex.current < 0 ? '' : (history[history.length - 1 - historyIndex.current] ?? ''),
      );
    }
  }

  return (
    <div className="terminal" aria-label="Terminal interactiva simulada">
      <div className="terminal__chrome">
        <div className="terminal__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>dev@portfolio: ~</span>
        <span className="terminal__status">● ONLINE</span>
      </div>
      <div className="terminal__body">
        <div
          ref={logRef}
          className="terminal__log"
          role="log"
          aria-live="polite"
          aria-label="Historial de la terminal"
        >
          {lines.map((line) => (
            <div key={line.id} className={`terminal__line terminal__line--${line.kind}`}>
              {line.kind === 'command' && (
                <span className="terminal__prompt" aria-hidden="true">
                  ❯{' '}
                </span>
              )}
              {line.text}
            </div>
          ))}
        </div>
        <form className="terminal__form" onSubmit={submit}>
          <span className="terminal__prompt" aria-hidden="true">
            ❯
          </span>
          <label className="sr-only" htmlFor="terminal-command">
            Escribir comando
          </label>
          <input
            id="terminal-command"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="escribe help..."
          />
          <span className="terminal__cursor" aria-hidden="true" />
        </form>
      </div>
      <div className="terminal__footer">
        <span>SIMULATED SHELL</span>
        <span>UTF-8 / ES</span>
      </div>
    </div>
  );
}
