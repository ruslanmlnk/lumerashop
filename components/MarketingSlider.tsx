'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
    {
        title: "Každodenní elegance z Itálie",
        description: "Kabelky, které doplní váš den – stylové, lehké a vždy připravené vyrazit s vámi.",
        button: "Prohlédnout kabelky",
        link: "/product-category/kabelky",
        bg: "/assets/bg/hero-slider-1.webp",
        overlayImage: "/assets/products/cutout-1.webp",
        layout: {
            paddingTop: 160,
            titleMaxWidth: 540,
            descMaxWidth: 600,
            img: { w: 269, h: 565, top: 105, right: 64 }
        }
    },
    {
        title: "Lehkost v pohybu",
        description: "Pro chvíle, kdy potřebujete mít styl i pohodlí. Italské kabelky a batohy pro váš volný den.",
        button: "Objevte batohy",
        link: "/product-category/batohy",
        bg: "/assets/bg/hero-slider-2.webp",
        overlayImage: "/assets/products/cutout-2.png",
        layout: {
            paddingTop: 219,
            titleMaxWidth: 335,
            descMaxWidth: 453,
            img: { w: 343, h: 561, top: 83, right: 120 }
        }
    },
    {
        title: "Síla elegance",
        description: "Klasický design, pravá kůže, dokonalé zpracování. Kabelky, které podtrhnou vaši sebedůvěru.",
        button: "Vyberte si svůj styl",
        link: "/shop",
        bg: "/assets/bg/hero-slider-3.webp",
        overlayImage: "/assets/products/cutout-3.png",
        layout: {
            paddingTop: 136,
            titleMaxWidth: 300,
            descMaxWidth: 453,
            img: { w: 177, h: 467, top: 160, right: 151 }
        }
    }
];

const MarketingSlider = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + SLIDES.length) % SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 7000);
        return () => clearInterval(timer);
    }, [current]);

    const slideVariants: any = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1,
            zIndex: 1
        }),
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 1,
            zIndex: 0
        })
    };

    const getVariants = (enterX: number, centerDelay: number, exitDuration: number = 0.5): any => ({
        enter: {
            opacity: 0,
            x: enterX
        },
        center: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.0,
                delay: centerDelay,
                ease: [0.33, 1, 0.68, 1]
            }
        },
        exit: {
            opacity: 0,
            x: enterX,
            transition: {
                duration: exitDuration,
                ease: "easeIn"
            }
        }
    });

    return (
        <section className="hidden lg:block bg-white overflow-hidden py-0" id="block-4">
            <div className="lumera-container">
                <div className="relative h-[380px] md:h-[644px] overflow-hidden bg-[#111111]">
                    {/* Slides Container */}
                    <div className="relative h-full w-full">
                        <AnimatePresence custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }
                                }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Background Image */}
                                <Image
                                    src={SLIDES[current].bg}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay Shading */}
                                <div className="absolute inset-0 bg-black/25" />

                                {/* Content Layout */}
                                <div className="absolute inset-x-0 inset-y-0 w-full max-w-[1140px] mx-auto px-6 md:px-[50px] z-10 flex flex-col justify-center lg:block">
                                    <div
                                        className="text-left text-white relative flex flex-col w-full lg:w-[60%] z-20"
                                        style={{
                                            marginTop: `${SLIDES[current].layout.paddingTop}px`,
                                            textShadow: '0 2px 10px rgba(0,0,0,0.2)' // Subtle shadow for readability without darkening the image
                                        }}
                                    >
                                        <motion.h2
                                            variants={getVariants(-200, 1.0)}
                                            className="text-[34px] md:text-[48px] font-serif font-bold leading-[1.1] mb-5"
                                            style={{
                                                fontFamily: '"Cormorant Garamond", serif',
                                                maxWidth: `${SLIDES[current].layout.titleMaxWidth}px`
                                            }}
                                        >
                                            {SLIDES[current].title}
                                        </motion.h2>
                                        <motion.p
                                            variants={getVariants(-200, 1.2)}
                                            className="text-[14px] md:text-[16px] font-sans font-normal leading-[1.6] mb-8"
                                            style={{
                                                fontFamily: '"Work Sans", sans-serif',
                                                maxWidth: `${SLIDES[current].layout.descMaxWidth}px`
                                            }}
                                        >
                                            {SLIDES[current].description}
                                        </motion.p>
                                        <motion.div
                                            variants={getVariants(-200, 1.4)}
                                        >
                                            <Link
                                                href={SLIDES[current].link}
                                                className="lumera-btn lumera-btn--light w-fit shadow-lg shadow-black/10"
                                            >
                                                {SLIDES[current].button}
                                            </Link>
                                        </motion.div>
                                    </div>

                                    {/* Right Overlay Image */}
                                    <div className="hidden lg:block">
                                        <motion.div
                                            variants={getVariants(300, 0.8, 0.7)}
                                            className="absolute z-10"
                                            style={{
                                                width: `${SLIDES[current].layout.img.w}px`,
                                                height: `${SLIDES[current].layout.img.h}px`,
                                                top: `${SLIDES[current].layout.img.top}px`,
                                                right: `${SLIDES[current].layout.img.right}px`
                                            }}
                                        >
                                            <Image
                                                src={SLIDES[current].overlayImage}
                                                alt=""
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>





                        {/* Custom Navigation Arrows */}
                        <button
                            onClick={() => paginate(-1)}
                            className="absolute left-2 md:left-[10px] top-1/2 -translate-y-1/2 z-20 w-[32px] h-[32px] md:w-[36px] md:h-[36px] rounded-full border-[1.6px] border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all group"
                            aria-label="Previous"
                        >
                            <svg className="w-4 h-4 md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 477.175 477.175">
                                <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="absolute right-2 md:right-[10px] top-1/2 -translate-y-1/2 z-20 w-[32px] h-[32px] md:w-[36px] md:h-[36px] rounded-full border-[1.6px] border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all group"
                            aria-label="Next"
                        >
                            <svg className="w-4 h-4 md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 477.175 477.175">
                                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                            c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path>
                            </svg>
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 md:bottom-[20px] left-1/2 -translate-x-1/2 flex gap-[6px] z-20">
                            {SLIDES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > current ? 1 : -1);
                                        setCurrent(idx);
                                    }}
                                    className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${current === idx ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingSlider;

