import { NextRequest, NextResponse } from 'next/server';
import { createGlobalPaymentsHppSession } from '@/lib/payments/global-payments';
import { buildCheckoutTotals, getBaseUrl, sanitizeCheckoutItems } from '@/lib/payments/checkout-utils';
import type { CheckoutPayload, CheckoutProvider } from '@/lib/payments/checkout-types';
import { getStripeClient } from '@/lib/payments/stripe';

export const runtime = 'nodejs';

const SUPPORTED_PROVIDERS: CheckoutProvider[] = ['stripe', 'global-payments'];

const isCheckoutProvider = (value: unknown): value is CheckoutProvider =>
    typeof value === 'string' && SUPPORTED_PROVIDERS.includes(value as CheckoutProvider);

export async function POST(request: NextRequest) {
    try {
        const payload = (await request.json()) as CheckoutPayload;

        if (!isCheckoutProvider(payload?.provider)) {
            return NextResponse.json({ error: 'Unsupported payment provider.' }, { status: 400 });
        }

        const items = sanitizeCheckoutItems(payload.items);
        if (!items.length) {
            return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
        }

        const totals = buildCheckoutTotals(items);
        const baseUrl = getBaseUrl(
            request.headers.get('x-forwarded-host') || request.headers.get('host'),
            request.headers.get('x-forwarded-proto'),
        );

        const orderId = `LMR-${Date.now()}`;

        if (payload.provider === 'stripe') {
            const stripe = getStripeClient();
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                customer_email: payload.customer?.email,
                line_items: items.map((item) => ({
                    quantity: item.quantity,
                    price_data: {
                        currency: totals.currency.toLowerCase(),
                        unit_amount: item.unitPrice * 100,
                        product_data: {
                            name: item.name,
                            metadata: {
                                itemId: item.id,
                            },
                        },
                    },
                })),
                metadata: {
                    orderId,
                    provider: 'stripe',
                },
                success_url: `${baseUrl}/checkout/success?provider=stripe&orderId=${orderId}&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${baseUrl}/checkout/cancel?provider=stripe&orderId=${orderId}`,
            });

            if (!session.url) {
                return NextResponse.json({ error: 'Stripe checkout URL was not generated.' }, { status: 500 });
            }

            return NextResponse.json({
                provider: 'stripe',
                orderId,
                redirectUrl: session.url,
            });
        }

        // Global Payments
        const responseUrl = process.env.GP_HPP_RESPONSE_URL?.trim() || `${baseUrl}/api/payments/global-payments/response`;
        const hppSession = createGlobalPaymentsHppSession({
            amount: totals.total,
            currency: totals.currency,
            orderId,
            description: `Lumera order ${orderId}`,
            responseUrl,
        });

        return NextResponse.json({
            provider: 'global-payments',
            orderId: hppSession.orderId,
            actionUrl: hppSession.actionUrl,
            fields: hppSession.fields,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown checkout error.';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
