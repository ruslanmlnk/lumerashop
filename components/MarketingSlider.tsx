'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
    {
        title: "Každodenní elegance z Itálie",
        description: "Kabelky, které doplní váš den a podtrhnou vaši jedinečnost.",
        button: "Prohlédnout kabelky",
        link: "/kabelky",
        bg: "/assets/bg/hero-slider-1.webp",
        overlayImage: "/assets/products/elis-bezova.webp" // Placeholder until actual cutouts are available
    },
    {
        title: "Lehkost v pohybu",
        description: "Pro chвіle, kdy potřebujete mít styl і pohodlí. Objevte naše batohy.",
        button: "Objevte batohy",
        link: "/batohy",
        bg: "/assets/bg/hero-slider-2.webp",
        overlayImage: "/assets/products/viko-cerna.webp" // Placeholder
    },
    {
        title: "Síla elegance",
        description: "Klasický design, pravá kůže, dokonalé zpracování. To je Lumera.",
        button: "Vyberte si svůj styl",
        link: "/shop",
        bg: "/assets/bg/hero-slider-3.webp",
        overlayImage: "/assets/products/elis-taupe.webp" // Placeholder
    }
];

const MarketingSlider = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + SLIDES.length) % SLIDES.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 1
        })
    };

    return (
        <section className="bg-white overflow-hidden py-0" id="block-4">
            <div className="max-w-[1140px] mx-auto relative h-[666px] overflow-hidden bg-[#111111]">
                <div className="relative h-full w-full">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "tween", duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full"
                            style={{ willChange: 'transform' }}
                        >
                            <Image
                                src={SLIDES[current].bg}
                                alt={SLIDES[current].title}
                                fill
                                className="object-cover"
                                priority={current === 0}
                            />
                            <div className="absolute inset-0 bg-black/20" />

                            <div className="absolute inset-0 flex items-center">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-[50px] items-center">
                                    {/* Left Content */}
                                    <div className="text-left text-white max-w-[616px] z-10">
                                        <motion.h2
                                            initial={{ x: -25, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 1 }}
                                            className="text-[48px] font-serif font-bold mb-6"
                                            style={{
                                                maxWidth: '538px',
                                                textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                                                fontFamily: '"Cormorant Garamond", serif',
                                                lineHeight: '1.1'
                                            }}
                                        >
                                            {SLIDES[current].title}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ x: -25, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 1 }}
                                            className="text-[16px] font-sans font-light mb-0"
                                            style={{
                                                maxWidth: '616px',
                                                textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                                                fontFamily: '"Work Sans", sans-serif',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            {SLIDES[current].description}
                                        </motion.p>
                                        <motion.div
                                            initial={{ x: -25, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6, duration: 1 }}
                                            className="mt-[40px]"
                                        >
                                            <Link
                                                href={SLIDES[current].link}
                                                className="inline-block bg-white text-black text-[16px] font-medium hover:bg-[#111111] hover:text-white transition-colors duration-300"
                                                style={{
                                                    padding: '10px 30px',
                                                    borderRadius: '0px',
                                                    boxShadow: 'none',
                                                    fontFamily: '"Work Sans", sans-serif'
                                                }}
                                            >
                                                {SLIDES[current].button}
                                            </Link>
                                        </motion.div>
                                    </div>

                                    {/* Right Overlay Image */}
                                    <div className="hidden lg:flex justify-end pr-[20px]">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            transition={{ delay: 0.1, duration: 1 }}
                                            className="relative w-[450px] h-[550px]"
                                        >
                                            <Image
                                                src={SLIDES[current].overlayImage}
                                                alt=""
                                                fill
                                                className="object-contain"
                                                sizes="450px"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[20] w-[36px] h-[36px] border-[1.6px] border-white flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <ChevronLeft size={20} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-[10px] top-1/2 -translate-y-1/2 z-[20] w-[36px] h-[36px] border-[1.6px] border-white flex items-center justify-center rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <ChevronRight size={20} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-[6px] z-[15]">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > current ? 1 : -1);
                                setCurrent(idx);
                            }}
                            className={`w-[10px] h-[10px] rounded-full transition-all ${current === idx ? 'bg-white' : 'bg-[#b3b3b3]'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingSlider;
