'use client';
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import ShopSidebar from '@/components/catalog/ShopSidebar';
import ProductSort from '@/components/catalog/ProductSort';
import ProductCard from '@/components/ProductCard';
import { ALL_PRODUCTS } from '@/data/site-data';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [sortOrder, setSortOrder] = useState('popularity');

    const categories = useMemo(() => {
        const cats = new Set(ALL_PRODUCTS.map(p => p.category));
        return Array.from(cats);
    }, []);

    const filteredProducts = useMemo(() => {
        let results = [...ALL_PRODUCTS];

        if (selectedCategory) {
            results = results.filter(p => p.category === selectedCategory);
        }

        results = results.filter(p => {
            const price = parseInt(p.price.replace(/[^\d]/g, ''));
            return price >= priceRange[0] && price <= priceRange[1];
        });

        results.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
            const priceB = parseInt(b.price.replace(/[^\d]/g, ''));

            if (sortOrder === 'price-low') return priceA - priceB;
            if (sortOrder === 'price-high') return priceB - priceA;
            return 0;
        });

        return results;
    }, [selectedCategory, priceRange, sortOrder]);

    return (
        <div className="min-h-screen font-sans text-[#111111] bg-white">
            <Header />

            <main>
                <CatalogHeader
                    title="Obchod"
                    breadcrumbs={[{ label: 'Obchod' }]}
                />

                <div className="max-w-[1140px] mx-auto px-4 lg:px-0 py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <ShopSidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            onPriceChange={setPriceRange}
                        />

                        {/* Main Content */}
                        <div className="flex-1">
                            <ProductSort
                                value={sortOrder}
                                onChange={setSortOrder}
                                totalResults={filteredProducts.length}
                            />

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-gray-500 text-[18px]">Žádné produkty neodpovídají vašemu výběru.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory(null);
                                            setPriceRange([0, 10000]);
                                        }}
                                        className="mt-6 text-black border-b border-black font-medium"
                                    >
                                        Vymazat filtry
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
