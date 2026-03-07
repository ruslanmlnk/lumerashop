import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function CheckoutSuccessPage({
    searchParams,
}: {
    searchParams: Promise<{ provider?: string; orderId?: string }>;
}) {
    const params = await searchParams;

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 pt-[180px] md:pt-[220px] pb-20">
                <div className="mx-auto w-full max-w-[820px] px-4 lg:px-0">
                    <div className="border border-[#111111]/10 bg-white p-8 md:p-12">
                        <h1
                            className="text-[40px] leading-[1.05] text-[#111111] md:text-[52px]"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            Platba proběhla úspěšně
                        </h1>

                        <p className="mt-4 text-[16px] leading-[1.6] text-[#444444]">
                            Děkujeme za objednávku.
                        </p>

                        {params.orderId && (
                            <p className="mt-2 text-[14px] text-[#666666]">
                                Číslo objednávky: <span className="font-semibold text-[#111111]">{params.orderId}</span>
                            </p>
                        )}

                        {params.provider && (
                            <p className="mt-1 text-[14px] text-[#666666]">
                                Platební brána: <span className="font-semibold text-[#111111]">{params.provider}</span>
                            </p>
                        )}

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/shop"
                                className="inline-flex h-[46px] items-center justify-center border border-black px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-black hover:bg-black hover:text-white"
                            >
                                Pokračovat v nákupu
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex h-[46px] items-center justify-center border border-[#111111]/20 px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-black"
                            >
                                Zpět na úvod
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
