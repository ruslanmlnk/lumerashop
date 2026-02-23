'use client';
import { use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import ProductGrid from '@/components/ProductGrid';
import { ALL_PRODUCTS, RECOMMENDED_PRODUCTS } from '@/data/site-data';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    const product = ALL_PRODUCTS.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-20">
                    <h1 className="text-[32px] font-serif mb-6">Produkt nebyl nalezen</h1>
                    <Link href="/shop" className="px-8 py-3 bg-black text-white uppercase tracking-wider text-[14px]">
                        Zpět do obchodu
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    // Fallback for missing details if and only if they are not provided in site-data
    const gallery = product.gallery || [product.image];
    const description = product.description || 'Italská kabelka z pravé kůže. Elegantní a praktická.';
    const specifications = product.specifications || {
        'Materiál': 'Kůže',
        'Země původu': 'Itálie'
    };

    return (
        <div className="min-h-screen font-sans text-[#111111] bg-white">
            <Header />

            <main className="py-12 md:py-20">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                    {/* Breadcrumbs */}
                    <nav className="mb-10 text-[13px] text-gray-400 uppercase tracking-wider">
                        <Link href="/" className="hover:text-black">Domů</Link>
                        <span className="mx-2">/</span>
                        <Link href="/shop" className="hover:text-black">Obchod</Link>
                        <span className="mx-2">/</span>
                        <span className="text-black font-medium">{product.category}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                            <ProductGallery images={gallery} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <ProductInfo
                                name={product.name}
                                price={product.price}
                                sku={product.sku || product.id}
                                category={product.category}
                                shortDescription={description.split('.')[0] + '.'}
                            />
                        </div>
                    </div>

                    <ProductTabs
                        description={description}
                        specifications={specifications}
                    />

                    <div className="mt-32 pt-20 border-t border-gray-100">
                        <ProductGrid
                            title="Mohlo by se vám také líbit"
                            products={RECOMMENDED_PRODUCTS.slice(0, 4)}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
