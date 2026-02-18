'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Product } from '../types/site';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group h-full flex flex-col bg-white">
            <Link href={`/product/${product.slug}`} className="block relative aspect-[14/17] overflow-hidden mb-4 group">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-[1000ms]"
                />
            </Link>
            <div className="text-center px-1 flex flex-col items-center">
                <h3
                    className="text-[20px] font-serif font-medium text-[#111111] mb-2 leading-[1.2]"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    <Link href={`/product/${product.slug}`} className="hover:text-[#3b2f2f] transition-colors">
                        {product.name}
                    </Link>
                </h3>
                <p
                    className="text-[16px] font-normal text-[rgb(59,47,47)]"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                    {product.price}
                </p>
            </div>
        </div>
    );
};

const ProductGrid = ({ title, products, description, isSlider = false }: { title: string, products: Product[], description?: string, isSlider?: boolean }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < products.length - 4) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(Math.max(0, products.length - 4));
        }
    };

    useEffect(() => {
        if (isSlider) {
            const timer = setInterval(nextSlide, 7000);
            return () => clearInterval(timer);
        }
    }, [isSlider, currentIndex, products.length]);

    const GridHeader = () => (
        <div className="text-center mb-[30px]">
            <h2
                className="text-[36px] font-serif font-bold text-[#111111] mb-[20px] leading-[1.1]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
                {title}
            </h2>
            {description && (
                <p
                    className="text-[#111111] max-w-[578px] mx-auto mb-0 text-[16px] font-sans font-normal leading-relaxed"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                    {description}
                </p>
            )}
        </div>
    );

    const ShopButton = () => (
        <div className="text-center mt-12 pb-2">
            <Link
                href="/shop"
                className="inline-block bg-[#111111] text-white text-[16px] font-normal hover:bg-[#333333] transition-all duration-300"
                style={{
                    padding: '10px 30px',
                    borderRadius: '0px',
                    fontFamily: '"Work Sans", sans-serif'
                }}
            >
                Zobrazit celý obchod
            </Link>
        </div>
    );

    if (isSlider) {
        return (
            <section className="py-[40px] bg-white text-center overflow-hidden" id="block-5">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-[15px] relative">
                    <GridHeader />

                    <div className="relative mt-[30px] group">
                        {/* Navigation Arrows - Circular semi-transparent dark blocks */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-[rgb(77,77,77)]/70 hover:bg-[rgb(77,77,77)] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
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
                            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-[rgb(77,77,77)]/70 hover:bg-[rgb(77,77,77)] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
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
                                animate={{ x: `-${currentIndex * (100 / 4)}%` }}
                                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                                className="flex"
                            >
                                {products.map((product) => (
                                    <div key={product.id} className="min-w-[50%] md:min-w-[25%] px-[5px]">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <ShopButton />
                </div>
            </section>
        );
    }

    return (
        <section className="py-[40px] bg-white text-center">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-[15px]">
                <GridHeader />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <ShopButton />
            </div>
        </section>
    );
};

export default ProductGrid;

