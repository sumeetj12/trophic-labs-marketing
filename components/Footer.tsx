import Link from 'next/link';
import LogoLockup from './LogoLockup';

export const FOOTER_TAGLINE =
  'The Master Translator for Tonal. Proven science, your data, AI — every cycle, automatic.';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <LogoLockup as="div" />
            <p>{FOOTER_TAGLINE}</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <Link href="/engine">The Engine</Link>
              </li>
              <li>
                <Link href="/methodology">Methodology</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Read</h4>
            <ul>
              <li>
                <Link href="/manifesto">Manifesto</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Trust</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 TROPHIC LABS</span>
          <span>NOT AFFILIATED WITH TONAL · TRADEMARKS BELONG TO THEIR OWNERS</span>
        </div>
      </div>
    </footer>
  );
}
