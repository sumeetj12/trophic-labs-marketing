import { NextResponse, type NextRequest } from 'next/server';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface CheckoutBody {
  email?: string;
}

export async function POST(req: NextRequest) {
  let body: CheckoutBody;
  try {
    body = (await req.json()) as CheckoutBody;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  const priceId = process.env.STRIPE_PRICE_ARCHITECT_ANNUAL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trophiclabs.ai';
  const webAppUrl = process.env.NEXT_PUBLIC_WEB_APP_URL ?? siteUrl;
  if (!priceId) {
    return NextResponse.json(
      { error: 'misconfigured', message: 'STRIPE_PRICE_ARCHITECT_ANNUAL is not set' },
      { status: 500 }
    );
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 14,
        metadata: { tier: 'paid', source: 'marketing-pricing' },
      },
      customer_email: email,
      success_url: `${webAppUrl}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      allow_promotion_codes: true,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'unknown_error';
    return NextResponse.json({ error: 'stripe_error', message }, { status: 500 });
  }
}
