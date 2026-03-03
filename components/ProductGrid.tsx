'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types/site';
import Link from 'next/link';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products, description, isSlider = false }: { title: string, products: Product[], description?: string, isSlider?: boolean }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        if (!isSlider) return;

        const updateVisibleItems = () => {
            setVisibleItems(window.innerWidth < 768 ? 2 : 4);
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);

        return () => window.removeEventListener('resize', updateVisibleItems);
    }, [isSlider]);

    const maxIndex = Math.max(0, products.length - visibleItems);
    const activeIndex = Math.min(currentIndex, maxIndex);

    const nextSlide = useCallback(() => {
        if (activeIndex < maxIndex) {
            setCurrentIndex(activeIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }, [activeIndex, maxIndex]);

    const prevSlide = useCallback(() => {
        if (activeIndex > 0) {
            setCurrentIndex(activeIndex - 1);
        } else {
            setCurrentIndex(maxIndex);
        }
    }, [activeIndex, maxIndex]);

    useEffect(() => {
        if (isSlider) {
            const timer = setInterval(nextSlide, 7000);
            return () => clearInterval(timer);
        }
    }, [isSlider, nextSlide]);

    const gridHeader = (
        <div className="text-center mb-0">
            <h2
                className="text-[30px] md:text-[36px] font-serif font-bold text-[#111111] mb-0 leading-[1.1]"
                style={{ fontFamily: '"Cormorant Garamond", serif', marginTop: 0 }}
            >
                {title}
            </h2>
            {description && (
                <p
                    className="text-[#111111] max-w-[578px] mx-auto mt-[20px] mb-0 text-[14px] md:text-[16px] font-sans font-normal leading-[1.6]"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                    {description}
                </p>
            )}
        </div>
    );

    const shopButton = (
        <div className="text-center mt-[30px] mb-[40px]">
            <Link
                href="/shop"
                className="lumera-btn"
            >
                Zobrazit celý obchod
            </Link>
        </div>
    );

    if (isSlider) {
        return (
            <section className="py-12 md:py-20 bg-white text-center overflow-hidden" id="block-5">
                <div className="lumera-container relative">
                    {gridHeader}

                    <div className="relative mt-[30px] mb-0 group">
                        {/* Navigation Arrows - Circular semi-transparent dark blocks */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-[10px] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all disabled:opacity-50"
                            aria-label="Previous"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 451.847 451.847">
                                <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
                                c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
                                c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-[10px] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all disabled:opacity-50"
                            aria-label="Next"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 451.846 451.847">
                                <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                                L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                                c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>
                            </svg>
                        </button>

                        <div className="overflow-hidden">
                            <motion.div
                                animate={{ x: `-${activeIndex * (100 / visibleItems)}%` }}
                                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                                className="flex"
                            >
                                {products.map((product) => (
                                    <div key={product.id} className="min-w-[100%] sm:min-w-[50%] md:min-w-[25%] px-[10px]">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {shopButton}
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 md:py-20 bg-white text-center" id="block-5">
            <div className="lumera-container">
                {gridHeader}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] mt-[30px] mb-0">
                    {products.map((product) => (
                        <div key={product.id} className="px-[10px]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {shopButton}
            </div>
        </section>
    );
};

export default ProductGrid;
