import { NextRequest, NextResponse } from 'next/server';
import { parseGlobalPaymentsResponse } from '@/lib/payments/global-payments';
import { getBaseUrl } from '@/lib/payments/checkout-utils';

export const runtime = 'nodejs';

const toRecord = (entries: Iterable<[string, FormDataEntryValue]>): Record<string, string> => {
    const result: Record<string, string> = {};

    for (const [key, value] of entries) {
        result[key] = typeof value === 'string' ? value : '';
    }

    return result;
};

const redirectToResult = (request: NextRequest, path: '/checkout/success' | '/checkout/cancel', params: Record<string, string>) => {
    const baseUrl = getBaseUrl(
        request.headers.get('x-forwarded-host') || request.headers.get('host'),
        request.headers.get('x-forwarded-proto'),
    );

    const url = new URL(path, baseUrl);
    for (const [key, value] of Object.entries(params)) {
        if (!value) continue;
        url.searchParams.set(key, value);
    }

    return NextResponse.redirect(url, 303);
};

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const payload = toRecord(formData.entries());
        const parsed = parseGlobalPaymentsResponse(payload);
        const orderId = parsed.transactionReference?.orderId || payload.ORDER_ID || '';

        if (parsed.responseCode === '00') {
            return redirectToResult(request, '/checkout/success', {
                provider: 'global-payments',
                orderId,
            });
        }

        return redirectToResult(request, '/checkout/cancel', {
            provider: 'global-payments',
            orderId,
            code: parsed.responseCode || '',
        });
    } catch {
        return redirectToResult(request, '/checkout/cancel', {
            provider: 'global-payments',
            reason: 'invalid-callback',
        });
    }
}

export async function GET(request: NextRequest) {
    const params: Record<string, string> = {};
    request.nextUrl.searchParams.forEach((value, key) => {
        params[key] = value;
    });

    try {
        const parsed = parseGlobalPaymentsResponse(params);
        const orderId = parsed.transactionReference?.orderId || params.ORDER_ID || '';

        if (parsed.responseCode === '00') {
            return redirectToResult(request, '/checkout/success', {
                provider: 'global-payments',
                orderId,
            });
        }

        return redirectToResult(request, '/checkout/cancel', {
            provider: 'global-payments',
            orderId,
            code: parsed.responseCode || '',
        });
    } catch {
        return redirectToResult(request, '/checkout/cancel', {
            provider: 'global-payments',
            reason: 'invalid-callback',
        });
    }
}
