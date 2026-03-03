import { TESTIMONIALS } from '@/data/site-data';

const Testimonials = () => {
    return (
        <section className="bg-white text-center py-12 md:py-20" id="testimonials">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                <h2
                    className="text-[32px] md:text-[42px] lg:text-[48px] font-serif font-bold mb-12 text-[#111111] leading-[1.1] tracking-tight"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    Co o nás říkají naše zákaznice
                </h2>

                <div className="max-w-[850px] mx-auto relative group pt-12 pb-16 px-10 border border-gray-50 bg-gray-50/20 shadow-sm rounded-sm">
                    <div className="flex flex-col items-center">
                        <div className="text-[#c8a16a] mb-8 opacity-40">
                            <svg viewBox="0 0 409.294 409.294" className="w-[45px] h-[45px] fill-current">
                                <path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z"></path>
                                <path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z"></path>
                            </svg>
                        </div>
                        <p className="text-[#111111] text-[20px] md:text-[26px] mb-10 leading-relaxed italic font-sans" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                            &quot;{TESTIMONIALS[0].text}&quot;
                        </p>
                        <div className="w-12 h-[1px] bg-[#c8a16a] mb-4 opacity-50"></div>
                        <p className="font-bold text-[18px] md:text-[20px] text-[#111111] tracking-wide uppercase font-sans">
                            {TESTIMONIALS[0].author}
                        </p>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-12 gap-3">
                        <button className="w-2 h-2 rounded-full bg-[#111111]" aria-label="1"></button>
                        <button className="w-2 h-2 rounded-full bg-[#cccccc] hover:bg-[#c8a16a] transition-colors" aria-label="2"></button>
                        <button className="w-2 h-2 rounded-full bg-[#cccccc] hover:bg-[#c8a16a] transition-colors" aria-label="3"></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
