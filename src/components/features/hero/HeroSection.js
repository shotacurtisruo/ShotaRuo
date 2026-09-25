/* ============================================
   HERO SECTION COMPONENT
   ============================================
   A small working shell. Commands print their
   answer and, where there's a matching section,
   scroll the page to it.
   ============================================ */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './HeroSection.css';
import { ResumeModal } from '../../shared/ResumeModal';
import { useTheme } from '../../../hooks/useTheme';

const BOOT_COMMAND = 'whoami';

const LINKS = {
  github: 'https://github.com/shotacurtisruo',
  linkedin: 'https://www.linkedin.com/in/shota-ruo-1869b7244/',
  instagram: 'https://www.instagram.com/shota_ruo/',
};

const WHOAMI = [
  { k: 'name', v: <strong>Shota Curtis Ruo</strong> },
  { k: 'role', v: <>Software Engineer <strong>@ Buzzit</strong></> },
  { k: 'studying', v: <>Statistical Data Science, <strong>UC Davis</strong></> },
  { k: 'location', v: 'Davis, California' },
];

const EXPERIENCE = [
  ['2025 — now', 'Software Engineer', 'Buzzit'],
  ['2025 — now', 'Computer Technician', 'UCD SOEIT'],
  ['2025 — now', 'Student Helper', 'CPE IT'],
  ['2025 — 2026', 'Project Lead', 'Narb'],
  ['jun—aug 2025', 'Front-end Developer Intern', 'Pal AI'],
  ['jun—aug 2025', 'SWE Intern', 'Narb'],
  ['2023', 'Software Developer', '#include'],
];

const PROJECTS = [
  ['Chrome Extension', 'save and manage browser tabs', 'https://github.com/shotacurtisruo/chrome-web-browser-version-1.1'],
  ['Sho AI', 'chatbot that answers questions about me', 'https://sho-ai.vercel.app/'],
  ['uotani (魚谷)', 'fishing web game featuring Japan', 'https://uotani.vercel.app/'],
];

const HELP = [
  ['whoami', 'who I am, in short'],
  ['experience', 'where I have worked'],
  ['projects', 'things I have built'],
  ['photos', 'photo sets'],
  ['resume', 'open my resume'],
  ['contact', 'how to reach me'],
  ['theme', 'switch light / dark'],
  ['clear', 'clear the screen'],
];

const Rows = ({ rows }) => (
  <div className="term-block">
    {rows.map(({ k, v }, i) => (
      <div className="term-row" key={i}>
        <span className="term-k">{k}</span>
        <span className="term-v">{v}</span>
      </div>
    ))}
  </div>
);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Let the printed answer land before carrying them down to the section */
const scrollToSection = (id) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }, 900);
};

const Prompt = () => (
  <>
    <span className="term-who">shota@davis</span>
    <span className="term-sym">~</span>
    <span className="term-sym">%</span>
  </>
);

export const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState('');
  const [booted, setBooted] = useState(false);
  const [typed, setTyped] = useState('');
  const [, toggleTheme] = useTheme();

  const outRef = useRef(null);
  const inputRef = useRef(null);
  const recall = useRef({ list: [], pos: 0 });

  /* Boot: type the first command, then hand over the prompt */
  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(BOOT_COMMAND);
      setBooted(true);
      return undefined;
    }
    let i = 0;
    let timer;
    const step = () => {
      i += 1;
      setTyped(BOOT_COMMAND.slice(0, i));
      if (i < BOOT_COMMAND.length) timer = setTimeout(step, 85);
      else timer = setTimeout(() => setBooted(true), 320);
    };
    timer = setTimeout(step, 550);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [history, booted]);

  const print = useCallback((command, body) => {
    setHistory((prev) => [...prev, { command, body }]);
  }, []);

  const run = useCallback(
    (raw) => {
      const command = raw.trim().toLowerCase();
      if (command) {
        recall.current.list = [...recall.current.list, raw];
        recall.current.pos = recall.current.list.length;
      }

      if (!command) {
        print(raw, null);
        return;
      }

      switch (command) {
        case 'help':
          print(raw, (
            <div className="term-block">
              <div className="term-dim">available commands</div>
              {HELP.map(([name, desc]) => (
                <div className="term-row" key={name}>
                  <span className="term-k">{name}</span>
                  <span className="term-v">{desc}</span>
                </div>
              ))}
              <div className="term-dim">tip — you can also just scroll. everything is below.</div>
            </div>
          ));
          break;

        case 'whoami':
          print(raw, <Rows rows={WHOAMI} />);
          break;

        case 'experience':
          print(raw, (
            <div className="term-block">
              {EXPERIENCE.map(([when, role, org]) => (
                <div className="term-row" key={`${role}-${org}`}>
                  <span className="term-k">{when}</span>
                  <span className="term-v"><strong>{role}</strong> · {org}</span>
                </div>
              ))}
              <div className="term-dim">jumping to experience…</div>
            </div>
          ));
          scrollToSection('experience');
          break;

        case 'projects':
          print(raw, (
            <div className="term-block">
              {PROJECTS.map(([name, desc, href], i) => (
                <div className="term-line" key={name}>
                  <span className="term-dim">{String(i + 1).padStart(2, '0')}</span>
                  {'  '}
                  <strong>{name}</strong> — {desc}{' '}
                  <a href={href} target="_blank" rel="noreferrer">↗</a>
                </div>
              ))}
              <div className="term-dim">jumping to projects…</div>
            </div>
          ));
          scrollToSection('myprojects');
          break;

        case 'photos':
          print(raw, (
            <div className="term-block">
              <div className="term-line"><strong>7 sets</strong> — brothers, japan, calm, lake, sunset, elsie, hoops</div>
              <div className="term-dim">jumping to photos…</div>
            </div>
          ));
          scrollToSection('photos');
          break;

        case 'resume':
          print(raw, <div className="term-block"><div className="term-dim">opening resume…</div></div>);
          setShowResume(true);
          break;

        case 'contact':
          print(raw, (
            <Rows
              rows={[
                { k: 'github', v: <a href={LINKS.github} target="_blank" rel="noreferrer">@shotacurtisruo ↗</a> },
                { k: 'linkedin', v: <a href={LINKS.linkedin} target="_blank" rel="noreferrer">shota-ruo ↗</a> },
                { k: 'instagram', v: <a href={LINKS.instagram} target="_blank" rel="noreferrer">@shota_ruo ↗</a> },
              ]}
            />
          ));
          break;

        case 'theme':
          toggleTheme();
          print(raw, <div className="term-block"><div className="term-dim">theme switched</div></div>);
          break;

        case 'ls':
          print(raw, <div className="term-block"><div className="term-line">experience&nbsp;&nbsp; projects&nbsp;&nbsp; photos&nbsp;&nbsp; resume</div></div>);
          break;

        case 'sudo':
          print(raw, <div className="term-block"><div className="term-dim">nice try.</div></div>);
          break;

        case 'clear':
          setHistory([]);
          break;

        default:
          print(raw, (
            <div className="term-block">
              <div className="term-err">command not found: {command}</div>
              <div className="term-dim">try 'help'</div>
            </div>
          ));
      }
    },
    [print, toggleTheme]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(value);
      setValue('');
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const { list, pos } = recall.current;
      if (pos > 0) {
        recall.current.pos = pos - 1;
        setValue(list[pos - 1]);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const { list, pos } = recall.current;
      if (pos < list.length - 1) {
        recall.current.pos = pos + 1;
        setValue(list[pos + 1]);
      } else {
        recall.current.pos = list.length;
        setValue('');
      }
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const part = value.trim().toLowerCase();
      if (!part) return;
      const hit = HELP.map(([name]) => name).find((name) => name.startsWith(part));
      if (hit) setValue(hit);
    }
  };

  return (
    <div className="hero-container">
      <div
        className="hero-terminal"
        onClick={(e) => {
          if (e.target.closest('a, button')) return;
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        <img className="term-avatar" src="/images/SHOTA.jpg" alt="Portrait of Shota Ruo" />

        <div className="term-out" ref={outRef}>
          <div className="term-line-row">
            <Prompt />
            <span className="term-echo">{typed}</span>
            {!booted && <span className="term-caret" />}
          </div>
          {booted && <Rows rows={WHOAMI} />}

          {history.map((entry, i) => (
            <React.Fragment key={i}>
              <div className="term-line-row">
                <Prompt />
                <span className="term-echo">{entry.command}</span>
              </div>
              {entry.body}
            </React.Fragment>
          ))}
        </div>

        {booted && (
          <>
            <div className="term-line-row term-input-row">
              <Prompt />
              <span className="term-field">
                <input
                  ref={inputRef}
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-label="Type a command"
                />
                <span className="term-caret term-bcaret" style={{ '--n': value.length }} />
              </span>
            </div>

            <div className="term-chips">
              {['help', 'experience', 'projects', 'photos', 'resume', 'contact'].map((name) => (
                <button
                  type="button"
                  className="term-chip"
                  key={name}
                  onClick={() => {
                    run(name);
                    if (inputRef.current) inputRef.current.focus();
                  }}
                >
                  {name}
                </button>
              ))}
            </div>

            <p className="term-hint">type a command, tap one above, or just scroll ↓</p>
          </>
        )}
      </div>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </div>
  );
};
