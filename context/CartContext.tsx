'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: number | string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    sku?: string;
    variant?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number | string) => void;
    updateQuantity: (id: number | string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('lumera_cart');
        if (savedCart) {
            try {
                const parsed = JSON.parse(savedCart);
                // Fix broken images from old mock data if they exist
                const sanitized = parsed.map((item: any) => {
                    if (item.image?.includes('bag-olivia.webp')) {
                        return { ...item, image: '/assets/products/elis-bezova.webp' };
                    }
                    return item;
                });
                setCartItems(sanitized);
            } catch (e) {
                console.error('Failed to parse cart from localStorage', e);
            }
        } else {
            // Mock data for initial testing if empty
            setCartItems([
                {
                    id: 1,
                    name: 'Italská shopper kabelka z pravé kůže Olivia modrá',
                    price: 2199,
                    image: '/assets/products/elis-bezova.webp',
                    quantity: 1,
                    sku: 'OLIVIA-BLUE'
                }
            ]);
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('lumera_cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i.id === item.id);
            if (existingItem) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (id: number | string) => {
        setCartItems((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: number | string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('lumera_cart');
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
