'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types/site';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group h-full flex flex-col">
            <Link href={`/product/${product.slug}`} className="block relative aspect-[1/1.3] overflow-hidden bg-[#F9F9F9] mb-4 group border border-neutral-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-[1500ms]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 p-4">
                    <span className="bg-white text-black w-full py-3 text-[11px] uppercase tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-md text-center">
                        Rychlý náhled
                    </span>
                </div>
            </Link>
            <div className="text-center px-1">
                {product.category && (
                    <p className="text-[10px] text-amber-900 uppercase tracking-[0.2em] font-bold mb-1.5">{product.category}</p>
                )}
                <h3 className="text-[15px] font-sans font-medium text-[#111111] mb-1 group-hover:text-amber-800 transition-colors">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="text-[15px] font-bold text-[#111111] tracking-tight">{product.price}</p>
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

    if (isSlider) {
        return (
            <section className="py-[20px] pb-[40px] bg-white text-center overflow-hidden" id="block-5">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-0 relative">
                    <div className="text-center mb-[30px]">
                        <h2
                            className="text-[36px] font-serif font-bold text-[#111111] mb-[20px] leading-[1.1]"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            {title}
                        </h2>
                        {description && (
                            <p className="text-[#111111] max-w-2xl mx-auto mb-0 text-[16px] font-sans font-normal leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>

                    <div className="relative mt-[30px]">
                        {/* Grey Circular Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-[rgb(77,77,77)] hover:bg-[#333] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all p-[10px]"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-[rgb(77,77,77)] hover:bg-[#333] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all p-[10px]"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <div className="overflow-hidden">
                            <motion.div
                                animate={{ x: `-${currentIndex * (100 / 4)}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex"
                                style={{ willChange: 'transform' }}
                            >
                                {products.map((product) => (
                                    <div key={product.id} className="min-w-[50%] md:min-w-[25%] px-1.5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/shop"
                            className="inline-block bg-black text-white text-[16px] font-medium hover:bg-neutral-800 transition-all"
                            style={{
                                padding: '10px 30px',
                                borderRadius: '0px',
                                fontFamily: '"Work Sans", sans-serif'
                            }}
                        >
                            Zobrazit celý obchod
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-white text-center">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-[36px] font-serif font-bold text-[#111111] mb-4 leading-[1.1]">{title}</h2>
                    {description && <p className="text-[#111111] max-w-2xl mx-auto mb-8 text-[16px] font-sans font-normal">{description}</p>}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/shop"
                        className="inline-block px-14 py-4 md:py-5 bg-black text-white text-[15px] font-medium hover:bg-neutral-800 transition-all duration-500"
                        style={{ borderRadius: '0px' }}
                    >
                        Zobrazit celý obchod
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
