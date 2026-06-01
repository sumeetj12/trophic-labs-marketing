'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { webAppPath } from '../lib/web-app-url';

type NavItem = { href: string; label: string };

export default function MobileNav({
  items,
  current,
}: {
  items: NavItem[];
  current?: string;
}) {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger ${open ? 'is-open' : ''}`} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <div
        id="mobile-nav-panel"
        className={`mobile-nav-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
      >
        <nav className="mobile-nav" aria-label="Mobile primary">
          <ul>
            {items.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={current === n.href ? 'current' : undefined}
                  aria-current={current === n.href ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-ctas">
            <a
              className="btn btn--ghost"
              href={webAppPath('/login')}
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
            <Link
              className="btn btn--atlas"
              href="/pricing"
              onClick={() => setOpen(false)}
            >
              Begin <span className="arr" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
