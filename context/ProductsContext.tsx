'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { Product } from '@/types/site';
import { ALL_PRODUCTS } from '@/data/site-data';

export const ProductsContext = createContext<{ products: Product[], loading: boolean }>({
    products: ALL_PRODUCTS,
    loading: false
});

export function ProductsProvider({ children, initialProducts }: { children: ReactNode, initialProducts: Product[] }) {
    return (
        <ProductsContext.Provider value={{ products: initialProducts, loading: false }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    return useContext(ProductsContext);
}
