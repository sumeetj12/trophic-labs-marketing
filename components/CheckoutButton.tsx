'use client';

import { useState } from 'react';

export default function CheckoutButton({
  className = 'btn btn--atlas btn--block',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function startTrial() {
    setErr(null);
    setPending(true);
    try {
      const email = window.prompt('Email for your 14-day trial:');
      if (!email) {
        setPending(false);
        return;
      }
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Checkout failed (${res.status})`);
      }
      const data = (await res.json()) as { url?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Checkout did not return a URL');
      }
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Checkout failed');
      setPending(false);
    }
  }

  return (
    <>
      <button type="button" onClick={startTrial} disabled={pending} className={className}>
        {pending ? 'Starting…' : children} {!pending && <span className="arr" />}
      </button>
      {err && (
        <p
          role="alert"
          style={{
            color: 'var(--missed)',
            fontSize: 'var(--t-sm)',
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          {err}
        </p>
      )}
    </>
  );
}
