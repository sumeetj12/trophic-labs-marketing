import Link from 'next/link';

export default function LogoLockup({ as = 'link' }: { as?: 'link' | 'div' }) {
  const inner = (
    <>
      <div className="glyph-3bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span className="word">TROPHIC LABS</span>
      <span className="tag">Performance Architect for Tonal</span>
    </>
  );
  if (as === 'div') {
    return <div className="lockup">{inner}</div>;
  }
  return (
    <Link href="/" className="lockup" aria-label="Trophic Labs home">
      {inner}
    </Link>
  );
}
