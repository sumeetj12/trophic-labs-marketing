'use client';

import { useState } from 'react';
import { PROGRAMS, formatMovementWeight, type Mode } from '@/lib/program-library';

const MODES: Mode[] = ['Chains', 'Eccentric', 'Drop sets', 'Smart Flex', 'Burnout'];

function modeCellClass(value: string): string {
  if (value === '✓') return 'yes';
  if (value === 'peak' || value === 'opt') return 'peak';
  return '';
}

function modeCellLabel(value: string): string {
  if (value === 'peak') return '★ peak';
  if (value === 'opt') return 'opt';
  return value;
}

export default function ProgramLibrary() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="program-library" aria-label="Program library">
      <div className="wrap">
        <span className="label">— Program library</span>
        <div className="program-chips" role="tablist" aria-label="Program selector">
          {PROGRAMS.map((p) => {
            const isActive = active === p.id;
            const dimmed = active !== null && !isActive;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${p.id}`}
                aria-expanded={isActive}
                data-active={isActive ? 'true' : 'false'}
                data-dimmed={dimmed ? 'true' : 'false'}
                className="program-chip"
                onClick={() => setActive(isActive ? null : p.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape' && isActive) {
                    setActive(null);
                  }
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>
        {PROGRAMS.map((p) => {
          const isActive = active === p.id;
          return (
            <div
              key={p.id}
              id={`panel-${p.id}`}
              role="tabpanel"
              className="program-panel"
              data-open={isActive ? 'true' : 'false'}
              aria-hidden={!isActive}
            >
              <div className="program-panel-inner">
                <div>
                  <div className="program-tagline">— {p.tagline}</div>
                  <p className="program-summary">{p.summary}</p>
                  <span className="program-section-title">— The science</span>
                  <ul className="program-science">
                    {p.science.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                  <span className="program-section-title">— Mode usage at a glance</span>
                  <table className="program-modes-table" aria-label="Mode usage by week">
                    <thead>
                      <tr>
                        <th scope="col">Week</th>
                        {MODES.map((m) => (
                          <th key={m} scope="col">
                            {m}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(p.modes).map(([week, row]) => (
                        <tr key={week}>
                          <td>{week}</td>
                          {MODES.map((m) => (
                            <td key={m} className={modeCellClass(row[m])}>
                              {modeCellLabel(row[m])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <span className="program-section-title">— Example session</span>
                  <div className="program-session">
                    <h4>{p.example.title}</h4>
                    <div className="program-session-rows">
                      {p.example.movements.map((m, i) => (
                        <div className="program-session-row" key={i}>
                          <span className="nm">{m.name}</span>
                          <span className="se">
                            {m.sets} × {m.reps}
                          </span>
                          <span className="wt">{formatMovementWeight(m)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
