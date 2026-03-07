import { NextRequest, NextResponse } from 'next/server';
import { getStripeClient } from '@/lib/payments/stripe';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    const stripe = getStripeClient();
    const signature = request.headers.get('stripe-signature');
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

    if (!webhookSecret) {
        return NextResponse.json({ error: 'Missing STRIPE_WEBHOOK_SECRET' }, { status: 500 });
    }

    if (!signature) {
        return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
    }

    try {
        const body = await request.text();
        const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            console.log('Stripe checkout completed', {
                id: session.id,
                paymentStatus: session.payment_status,
                metadata: session.metadata,
            });
        }

        if (event.type === 'payment_intent.payment_failed') {
            const paymentIntent = event.data.object;
            console.log('Stripe payment failed', {
                id: paymentIntent.id,
                status: paymentIntent.status,
                lastError: paymentIntent.last_payment_error?.message,
            });
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Invalid Stripe webhook payload';
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
