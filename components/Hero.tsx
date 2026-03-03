'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HERO_CATEGORIES } from '../data/site-data';

const Hero = () => {
    return (
        <section
            className="mt-[134px] md:mt-[120px] pt-0 pb-0 bg-white overflow-hidden relative"
            id="block-12"
        >
            <div className="lumera-container">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
                    {/* Left Column (Video/Main content) - 810.2px (+ 24px gap = 834.2px equivalent) */}
                    <div
                        className="w-full lg:w-[810.2px] relative group overflow-hidden h-[560px] md:h-[567px] bg-[#111111]"
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
                        <div className="absolute inset-x-0 top-0 flex flex-col z-10 text-white pt-10 md:pt-[59px] pl-6 md:pl-[40px] pr-6 md:pr-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                {/* H1: Cormorant Garamond, 72px, 700, LH 1.1, Margin-right 234px */}
                                <h1
                                    className="font-serif font-bold text-[72px] leading-[1.1] text-white md:mr-[210px]"
                                    style={{
                                        fontFamily: '"Cormorant Garamond", serif',
                                        textShadow: 'rgb(64, 64, 64) 0px 0px 8px'
                                    }}
                                >
                                    Elegantní kožené kabelky z Itálie
                                </h1>

                                {/* P: Work Sans, 16px, LH 1.6, Margin: 20px top, 113px right */}
                                <p
                                    className="font-sans font-light text-[16px] leading-[1.6] text-white mt-4 md:mt-[20px] md:mr-[113px]"
                                    style={{
                                        fontFamily: '"Work Sans", sans-serif'
                                    }}
                                >
                                    Objevte jedinečné modely od malých italských výrobců – kvalita, styl a originalita v každém detailu.
                                </p>

                                {/* Button: White BG, Black Text, No shadow, Flat */}
                                <div className="mt-8 md:mt-[39px]">
                                    <Link
                                        href="/shop"
                                        className="lumera-btn lumera-btn--light"
                                    >
                                        Prohlédnout kolekci
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column (Category Tiles) - 305.8px */}
                    <div className="w-full lg:w-[305.8px] flex flex-col gap-4 lg:gap-[24px] h-auto lg:h-[567px] lg:py-[12.5px]">
                        {HERO_CATEGORIES.map((cat, idx) => {
                            // Exact visual inner heights per subagent bounding box analysis:
                            // 126.5 + 126.5 + 110 + 107 = 470px
                            // Gaps: 3 * 24 = 72px
                            // Padding top/bottom: 12.5 * 2 = 25px
                            // Total = 470 + 72 + 25 = 567px
                            const heights = ["126.5px", "126.5px", "110px", "107px"];
                            const bgScales = ["115%", "115%", "130%", "110%"];
                            const bgPositions = ["100% 18.4%", "56.06% 54.68%", "100% 71.16%", "86.39% 0%"];
                            return (
                                <Link
                                    key={idx}
                                    href={cat.href}
                                    className="group relative overflow-hidden bg-[#F5F5F5] block w-full border-l border-white/5"
                                    style={{ height: heights[idx] }}
                                >
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <div
                                            className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-no-repeat"
                                            style={{
                                                backgroundImage: `url(${cat.bg})`,
                                                backgroundSize: bgScales[idx],
                                                backgroundPosition: bgPositions[idx]
                                            }}
                                        />
                                    </div>
                                    <div className="absolute inset-0 z-10 pointer-events-none">
                                        {/* Exact text positioning */}
                                        <h2
                                            className="absolute left-[30px] lg:left-[60px] font-serif font-bold text-[30px] text-[#111111] leading-[1.1] whitespace-pre-line"
                                            style={{
                                                fontFamily: '"Cormorant Garamond", serif',
                                                top: ["25px", "25px", "38.5px", "44px"][idx]
                                            }}
                                        >
                                            {idx < 2 ? cat.name.replace(' ', '\n') : cat.name}
                                        </h2>
                                        {/* Exact product image sizing & positioning */}
                                        {cat.product && (
                                            <div
                                                className="absolute group-hover:scale-110 transition-transform duration-700"
                                                style={{
                                                    width: ["80px", "88px", "89px", "90px"][idx],
                                                    height: ["80px", "80px", "80px", "50px"][idx],
                                                    top: ["18px", "18px", "14.5px", "35px"][idx],
                                                    right: ["30px", "26px", "26px", "25px"][idx]
                                                }}
                                            >
                                                <Image
                                                    src={cat.product}
                                                    alt={cat.name}
                                                    fill
                                                    sizes="90px"
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

