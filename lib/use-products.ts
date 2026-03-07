'use client';

import { useEffect, useState } from 'react';
import { ALL_PRODUCTS } from '@/data/site-data';
import type { Product } from '@/types/site';

type ProductsApiResponse = {
    products?: Product[];
};

export function useProducts() {
    const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                const response = await fetch('/api/products', { cache: 'no-store' });
                if (!response.ok) {
                    return;
                }

                const payload = (await response.json()) as ProductsApiResponse;
                if (!mounted) return;

                if (Array.isArray(payload.products) && payload.products.length > 0) {
                    setProducts(payload.products);
                }
            } catch {
                // Fallback to hardcoded products already in state
            } finally {
                if (mounted) setLoading(false);
            }
        };

        load();

        return () => {
            mounted = false;
        };
    }, []);

    return { products, loading };
}
