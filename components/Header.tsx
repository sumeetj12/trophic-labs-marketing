import Link from 'next/link';
import LogoLockup from './LogoLockup';
import MobileNav from './MobileNav';
import { webAppPath } from '../lib/web-app-url';

const NAV = [
  { href: '/methodology', label: 'Methodology' },
  { href: '/engine', label: 'Engine' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Header({ current }: { current?: string }) {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <LogoLockup />
        <nav className="primary" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={current === n.href ? 'current' : undefined}
              aria-current={current === n.href ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="top-ctas">
          <a className="btn btn--ghost btn--sm" href={webAppPath('/login')}>
            Log in
          </a>
          <Link className="btn btn--atlas btn--sm" href="/pricing">
            Begin <span className="arr" />
          </Link>
        </div>
        <MobileNav items={NAV} current={current} />
      </div>
    </header>
  );
}
