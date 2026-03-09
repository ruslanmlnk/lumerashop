import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClearCartOnSuccess from '@/components/checkout/ClearCartOnSuccess';
import { fetchPaymentOrder, type PaymentOrderStatus } from '@/lib/payments/internal-orders';

const getProviderLabel = (provider?: string) => {
    if (provider === 'global-payments') {
        return 'Global Payments';
    }

    if (provider === 'stripe') {
        return 'Stripe';
    }

    return provider || '';
};

const getPaymentStatusLabel = (status?: PaymentOrderStatus) => {
    if (status === 'paid') {
        return 'Zaplaceno';
    }

    if (status === 'failed') {
        return 'Platba selhala';
    }

    if (status === 'canceled') {
        return 'Zru\u0161eno';
    }

    return '\u010Cek\u00E1 na potvrzen\u00ED';
};

export default async function CheckoutSuccessPage({
    searchParams,
}: {
    searchParams: Promise<{ provider?: string; orderId?: string; session_id?: string }>;
}) {
    const params = await searchParams;
    const order = params.orderId ? await fetchPaymentOrder(params.orderId).catch(() => null) : null;
    const providerLabel = getProviderLabel(order?.provider || params.provider);
    const paymentStatus = order?.paymentStatus || 'pending';
    const displayOrderId = order?.orderId || params.orderId || '';
    const title =
        paymentStatus === 'paid'
            ? 'Platba prob\u011Bhla \u00FAsp\u011B\u0161n\u011B'
            : 'Objedn\u00E1vku jsme p\u0159ijali';
    const description =
        paymentStatus === 'paid'
            ? 'D\u011Bkujeme za objedn\u00E1vku. Potvrzen\u00ED v\u00E1m za\u0161leme e-mailem.'
            : 'D\u011Bkujeme za objedn\u00E1vku. Platbu je\u0161t\u011B potvrzujeme a brzy v\u00E1m po\u0161leme e-mail.';

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <ClearCartOnSuccess />

            <main className="flex flex-1 items-start pt-[180px] pb-20 md:pt-[220px]">
                <div className="mx-auto w-full max-w-[820px] px-4 lg:px-0">
                    <div className="border border-[#111111]/10 bg-white p-8 md:p-12">
                        <h1
                            className="text-[40px] leading-[1.05] text-[#111111] md:text-[52px]"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            {title}
                        </h1>

                        <p className="mt-4 text-[16px] leading-[1.6] text-[#444444]">{description}</p>

                        {displayOrderId ? (
                            <p className="mt-2 text-[14px] text-[#666666]">
                                {'\u010C\u00EDslo objedn\u00E1vky:'}{' '}
                                <span className="font-semibold text-[#111111]">{displayOrderId}</span>
                            </p>
                        ) : null}

                        {providerLabel ? (
                            <p className="mt-1 text-[14px] text-[#666666]">
                                {'Platebn\u00ED br\u00E1na:'}{' '}
                                <span className="font-semibold text-[#111111]">{providerLabel}</span>
                            </p>
                        ) : null}

                        <p className="mt-1 text-[14px] text-[#666666]">
                            {'Stav platby:'}{' '}
                            <span className="font-semibold text-[#111111]">
                                {getPaymentStatusLabel(paymentStatus)}
                            </span>
                        </p>

                        {order?.total ? (
                            <p className="mt-1 text-[14px] text-[#666666]">
                                Celkem:{' '}
                                <span className="font-semibold text-[#111111]">
                                    {new Intl.NumberFormat('cs-CZ', {
                                        style: 'currency',
                                        currency: order.currency || 'CZK',
                                        maximumFractionDigits: 0,
                                    }).format(order.total)}
                                </span>
                            </p>
                        ) : null}

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/shop"
                                className="inline-flex h-[46px] items-center justify-center border border-black px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-black hover:bg-black hover:text-white"
                            >
                                {'Pokra\u010Dovat v n\u00E1kupu'}
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex h-[46px] items-center justify-center border border-[#111111]/20 px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-black"
                            >
                                {'Zp\u011Bt na \u00FAvod'}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
