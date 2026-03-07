'use client';
import { use, useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import ShopSidebar from '@/components/catalog/ShopSidebar';
import ProductSort from '@/components/catalog/ProductSort';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/lib/use-products';
import { buildFilterGroups, getProductFilterValues, normalizeFilterKey, parseProductPrice } from '@/lib/catalog-filters';
import { compareProductsByPopularity } from '@/lib/product-sorting';

type ActiveChip = {
    id: string;
    label: string;
};

const DEFAULT_RANGE: [number, number] = [0, 10000];

const categoryMap: Record<string, string> = {
    kabelky: 'Kabelky',
    'panske-tasky': 'Pánské tašky',
    batohy: 'Batohy',
    doplnky: 'Doplňky',
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const mappedCategory = categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
    const { products: catalogProducts } = useProducts();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(mappedCategory);
    const [priceRange, setPriceRange] = useState<[number, number]>(DEFAULT_RANGE);
    const [sortOrder, setSortOrder] = useState('popularity');
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    const categories = useMemo(() => {
        const items = new Set(catalogProducts.map((product) => product.category));
        return Array.from(items);
    }, [catalogProducts]);

    const priceBounds = useMemo<[number, number]>(() => {
        const values = catalogProducts.map((product) => parseProductPrice(product.price)).filter((value) => value > 0);
        if (!values.length) return DEFAULT_RANGE;
        return [Math.min(...values), Math.max(...values)];
    }, [catalogProducts]);

    useEffect(() => {
        setSelectedCategory(mappedCategory);
    }, [mappedCategory]);

    useEffect(() => {
        setPriceRange(priceBounds);
    }, [priceBounds]);

    const filterGroups = useMemo(() => buildFilterGroups(catalogProducts), [catalogProducts]);

    useEffect(() => {
        const validKeys = new Set(filterGroups.map((group) => group.key));
        setSelectedFilters((prev) => {
            const next: Record<string, string[]> = {};
            for (const [key, values] of Object.entries(prev)) {
                if (validKeys.has(key) && values.length > 0) {
                    next[key] = values;
                }
            }
            return next;
        });
    }, [filterGroups]);

    const toggleFilterOption = (groupKey: string, value: string) => {
        setSelectedFilters((prev) => {
            const current = prev[groupKey] ?? [];
            const nextValues = current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value];

            return {
                ...prev,
                [groupKey]: nextValues,
            };
        });
    };

    const clearAllFilters = () => {
        setSelectedCategory(mappedCategory);
        setPriceRange(priceBounds);
        setSelectedFilters({});
    };

    const activeFilters = useMemo<ActiveChip[]>(() => {
        const chips: ActiveChip[] = [];

        if (selectedCategory) {
            chips.push({ id: `category:${selectedCategory}`, label: `Kategorie: ${selectedCategory}` });
        }

        if (priceRange[0] !== priceBounds[0] || priceRange[1] !== priceBounds[1]) {
            chips.push({ id: 'price:range', label: `Cena: ${priceRange[0]}-${priceRange[1]} Kč` });
        }

        for (const group of filterGroups) {
            const selectedValues = selectedFilters[group.key] ?? [];
            for (const value of selectedValues) {
                chips.push({
                    id: `filter:${group.key}:${value}`,
                    label: `${group.title}: ${value}`,
                });
            }
        }

        return chips;
    }, [selectedCategory, priceRange, priceBounds, selectedFilters, filterGroups]);

    const removeFilter = (id: string) => {
        const [type, groupKey, ...rest] = id.split(':');
        const value = rest.join(':');

        if (type === 'category') {
            setSelectedCategory(null);
            return;
        }

        if (type === 'price') {
            setPriceRange(priceBounds);
            return;
        }

        if (type === 'filter' && groupKey) {
            setSelectedFilters((prev) => ({
                ...prev,
                [groupKey]: (prev[groupKey] ?? []).filter((item) => item !== value),
            }));
        }
    };

    const filteredProducts = useMemo(() => {
        const results = catalogProducts.filter((product) => {
            if (selectedCategory && product.category !== selectedCategory) {
                return false;
            }

            const price = parseProductPrice(product.price);
            if (price < priceRange[0] || price > priceRange[1]) {
                return false;
            }

            const productFilterMap = new Map<string, Set<string>>();
            for (const filter of getProductFilterValues(product)) {
                const key = normalizeFilterKey(filter.group);
                if (!key) continue;

                if (!productFilterMap.has(key)) {
                    productFilterMap.set(key, new Set());
                }
                productFilterMap.get(key)!.add(filter.option);
            }

            for (const [groupKey, selectedValues] of Object.entries(selectedFilters)) {
                if (!selectedValues.length) continue;

                const productValues = productFilterMap.get(groupKey);
                if (!productValues) {
                    return false;
                }

                const matches = selectedValues.some((value) => productValues.has(value));
                if (!matches) {
                    return false;
                }
            }

            return true;
        });

        results.sort((a, b) => {
            const priceA = parseProductPrice(a.price);
            const priceB = parseProductPrice(b.price);
            const idA = Number(a.id);
            const idB = Number(b.id);

            if (sortOrder === 'popularity') return compareProductsByPopularity(a, b);
            if (sortOrder === 'price-low') return priceA - priceB;
            if (sortOrder === 'price-high') return priceB - priceA;
            if (sortOrder === 'newest') return (Number.isFinite(idB) ? idB : 0) - (Number.isFinite(idA) ? idA : 0);
            return 0;
        });

        return results;
    }, [catalogProducts, priceRange, selectedCategory, selectedFilters, sortOrder]);

    const sidebarFilterGroups = useMemo(
        () =>
            filterGroups.map((group) => ({
                key: group.key,
                title: group.title,
                options: group.options,
                selected: selectedFilters[group.key] ?? [],
            })),
        [filterGroups, selectedFilters],
    );

    return (
        <div className="min-h-screen bg-white font-sans text-[#111111]">
            <Header />

            <main>
                <CatalogHeader title={mappedCategory} breadcrumbs={[{ label: 'Obchod', href: '/shop' }, { label: mappedCategory }]} />

                <div className="mx-auto max-w-[1140px] px-4 py-16 lg:px-0">
                    <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-10">
                        <ShopSidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            priceRange={priceRange}
                            priceBounds={priceBounds}
                            onPriceChange={setPriceRange}
                            filterGroups={sidebarFilterGroups}
                            onToggleFilterOption={toggleFilterOption}
                            activeFilters={activeFilters}
                            onRemoveFilter={removeFilter}
                            onClearFilters={clearAllFilters}
                        />

                        <div className="min-w-0 flex-1">
                            <ProductSort value={sortOrder} onChange={setSortOrder} totalResults={filteredProducts.length} />

                            <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="py-20 text-center">
                                    <p className="text-[18px] text-gray-500">Zadne produkty neodpovidaji vasemu vyberu.</p>
                                    <button onClick={clearAllFilters} className="mt-6 border-b border-black font-medium text-black">
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
