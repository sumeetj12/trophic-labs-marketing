'use client';

import type { ReactNode } from 'react';

export default function FAQItem({
  q,
  children,
  defaultOpen = false,
}: {
  q: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="faq-item" open={defaultOpen || undefined}>
      <summary>
        <span>{q}</span>
        <span className="marker" aria-hidden="true" />
      </summary>
      <div className="answer">{children}</div>
    </details>
  );
}
