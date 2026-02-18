'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HERO_CATEGORIES } from '../data/site-data';

const Hero = () => {
    return (
        <section
            className="mt-[120px] pt-0 pb-0 bg-white overflow-hidden relative"
            id="block-12"
        >
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-[24px] items-start">
                    {/* Left Column (Video/Main content) - 810.2px (+ 24px gap = 834.2px equivalent) */}
                    <div
                        className="w-full lg:w-[810.2px] relative group overflow-hidden h-[567px] bg-[#111111]"
                    >
                        {/* Video Layer */}
                        <div className="absolute inset-0 z-0">
                            <video
                                src="/assets/videos/hero.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                style={{ willChange: 'transform' }}
                            />
                            {/* Overlay/Shading */}
                            <div className="absolute inset-0 bg-black/35" />
                        </div>

                        {/* Content Layer - Align H1 to 59px relative top as per audit */}
                        <div className="absolute inset-x-0 top-0 flex flex-col z-10 text-white pt-[59px] pl-[40px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                {/* H1: Cormorant Garamond, 72px, 700, LH 1.1, Margin-right 234px */}
                                <h1
                                    className="font-serif font-bold text-[72px] leading-[1.1] text-white"
                                    style={{
                                        marginRight: '210px',
                                        fontFamily: '"Cormorant Garamond", serif',
                                        textShadow: 'rgb(64, 64, 64) 0px 0px 8px'
                                    }}
                                >
                                    Elegantní kožené kabelky z Itálie
                                </h1>

                                {/* P: Work Sans, 16px, LH 1.6, Margin: 20px top, 113px right */}
                                <p
                                    className="font-sans font-light text-[16px] leading-[1.6] text-white mt-[20px]"
                                    style={{
                                        marginRight: '113px',
                                        fontFamily: '"Work Sans", sans-serif'
                                    }}
                                >
                                    Objevte jedinečné modely od malých italských výrobců – kvalita, styl a originalita v každém detailu.
                                </p>

                                {/* Button: White BG, Black Text, No shadow, Flat */}
                                <div className="mt-[39px]">
                                    <Link
                                        href="/shop"
                                        className="inline-block bg-white text-black hover:bg-[#111111] hover:text-white transition-colors duration-300"
                                        style={{
                                            padding: '10px 30px',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            fontFamily: '"Work Sans", sans-serif',
                                            borderRadius: '0px',
                                            boxShadow: 'none'
                                        }}
                                    >
                                        Prohlédnout kolekci
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column (Category Tiles) - 305.8px */}
                    <div className="w-full lg:w-[305.8px] flex flex-col gap-[20px] h-[567px]">
                        {HERO_CATEGORIES.map((cat, idx) => {
                            // Proportional heights for 567px total including 3 x 20px gaps: 
                            // 135 + 20 + 135 + 20 + 120 + 20 + 117 = 567
                            const heights = ["135px", "135px", "120px", "117px"];
                            return (
                                <Link
                                    key={idx}
                                    href={cat.href}
                                    className="group relative overflow-hidden bg-[#F5F5F5] block w-full border-l border-white/5"
                                    style={{ height: heights[idx] }}
                                >
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={cat.bg}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="306px"
                                        />
                                    </div>
                                    <div className="absolute inset-0 pt-[25px] pb-[10px] pl-[25px] pr-[10px] flex items-center z-10">
                                        <h2
                                            className="font-serif font-bold text-[30px] text-[#111111] leading-[1.0] max-w-[140px]"
                                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                                        >
                                            {cat.name}
                                        </h2>
                                        {cat.product && (
                                            <div className="absolute right-[15px] top-1/2 -translate-y-1/2 w-[110px] h-[110px] group-hover:scale-110 transition-transform duration-700">
                                                <Image
                                                    src={cat.product}
                                                    alt={cat.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
