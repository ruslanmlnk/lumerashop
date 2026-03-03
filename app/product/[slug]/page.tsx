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
import { ShieldCheck, Star, Award, Heart } from 'lucide-react';

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

    const gallery = product.gallery || [product.image];
    const description = product.description || 'Italská kabelka z pravé kůže. Elegantní a praktická.';
    const specifications = product.specifications || {
        'Materiál': 'Kůže',
        'Země původu': 'Itálie'
    };

    // Mock variants for matching original look
    const mockVariants = [
        { id: '1', image: '/images/products/bag-black.jpg', slug: 'bag-black' },
        { id: '2', image: '/images/products/bag-red.jpg', slug: 'bag-red' },
        { id: '3', image: '/images/products/bag-brown.jpg', slug: 'bag-brown' },
    ];

    return (
        <div className="min-h-screen font-sans text-[#111111] bg-white">
            <Header />

            <main className="pt-[140px] md:pt-[200px] pb-32">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                    {/* Breadcrumbs */}
                    <nav className="mb-12 text-[11px] text-gray-400 uppercase tracking-[0.2em] flex items-center gap-3">
                        <Link href="/" className="hover:text-[#c8a16a] transition-colors">Domů</Link>
                        <span className="text-[10px]">/</span>
                        <Link href="/shop" className="hover:text-[#c8a16a] transition-colors">Obchod</Link>
                        <span className="text-[10px]">/</span>
                        <span className="text-black font-bold">{product.category}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
                        <div className="w-full lg:w-[55%]">
                            <ProductGallery images={gallery} />
                        </div>
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-[160px]">
                            <ProductInfo
                                name={product.name}
                                price={product.price}
                                oldPrice={product.name.includes('Sleva') ? '2 950 Kč' : undefined}
                                sku={product.sku || product.id}
                                category={product.category}
                                shortDescription={description.split('.')[0] + '.'}
                                stockStatus={product.id === '1' ? 'low-stock' : 'in-stock'}
                                variants={mockVariants}
                            />
                        </div>
                    </div>

                    <div className="mt-24">
                        <ProductTabs
                            description={description}
                            specifications={specifications}
                        />
                    </div>

                    {/* Features Section - Replicated from D:/lumera/wp-content/themes/Lumera_Shop_1_61/woocommerce/template-parts/productTemplate/content-single-product.php */}
                    <section className="mt-32 py-20 border-t border-b border-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#c8a16a]">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="font-serif text-[20px] font-bold mb-3 tracking-tight">Italský původ</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">Kabelky přímo від menších výrobců з Itálie.</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#c8a16a]">
                                    <Star size={32} />
                                </div>
                                <h3 className="font-serif text-[20px] font-bold mb-3 tracking-tight">Pečlivý výběr</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">Každý model vybíráme osobně з důrazem на kvalitu а styl.</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#c8a16a]">
                                    <Award size={32} />
                                </div>
                                <h3 className="font-serif text-[20px] font-bold mb-3 tracking-tight">Doprava zdarma</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">Pro objednávky nad 1500 Kč doprava zdarma. Rychlé а bezpečné doručení.</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#c8a16a]">
                                    <Heart size={32} />
                                </div>
                                <h3 className="font-serif text-[20px] font-bold mb-3 tracking-tight">Osobní přístup</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">Malý obchod, velká vášeň pro krásu а design.</p>
                            </div>
                        </div>
                    </section>

                    <div className="mt-32">
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
