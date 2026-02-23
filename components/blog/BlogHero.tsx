'use client';

const BlogHero = () => {
    return (
        <section className="bg-[#f9f9f9] py-20 border-b border-neutral-100">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0 text-center">
                <h1
                    className="text-[48px] md:text-[64px] font-serif font-bold text-[#111111] mb-6"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    Blog Lumera
                </h1>
                <p className="text-[18px] text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
                    Inspirace ze světa italské módy, rady pro péči o kůži a novinky z naší dílny.
                </p>
            </div>
        </section>
    );
};

export default BlogHero;
