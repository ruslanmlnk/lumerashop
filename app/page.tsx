import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarketingSlider from '@/components/MarketingSlider';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, TESTIMONIALS, BLOG_POSTS } from '@/data/site-data';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[#111111] bg-white selection:bg-amber-100 italic-selection">
      <Header />

      <main>
        <Hero />

        {/* Gap 20px created by mt-[20px] on block-4 */}
        <div className="mt-[20px]">
          <MarketingSlider />
        </div>

        {/* Gap 20px created by mt-[20px] on block-5 */}
        <div className="mt-[20px]">
          <ProductGrid
            title="Oblíbené modely"
            products={FEATURED_PRODUCTS}
            description="Nejoblíbenější kožené kabelky, peněženky a doplňky od italských výrobců."
            isSlider={true}
          />
        </div>

        {/* Block 6: O obchodě Lumera - 460px height, 20px mt gap */}
        <section className="mt-[20px] bg-white h-[460px] overflow-hidden" id="block-6">
          <div className="max-w-[1140px] mx-auto h-full px-4 lg:px-0">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Column: Text - PT 40px, PB 20px */}
              <div className="w-full md:w-1/2 flex flex-col pt-[40px] pb-[20px] pr-10">
                <h2
                  className="text-[48px] font-serif font-bold mb-8 text-[#111111] leading-[1.1]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  O obchodě Lumera
                </h2>
                <h4 className="text-[17px] font-sans font-bold text-[#111111] mb-6 uppercase tracking-wider">
                  Nadčasová elegance z Itálie
                </h4>
                <p className="text-gray-500 mb-10 leading-relaxed text-[16px] font-light">
                  Lumera je český obchod s italskými koženými kabelkami a doplňky. Spolupracujeme s menšími výrobci z Itálie, kteří si zakládají na kvalitě a ručním zpracování. Každý model pečlivě vybíráme tak, aby spojoval eleganci, praktičnost a originalitu. Věříme, že krása je v detailu – stejně jako v každé kabelce, kterou nabízíme.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/o-nas"
                    className="inline-block px-[30px] py-[10px] bg-black text-white text-[16px] font-medium hover:bg-neutral-800 transition-all"
                    style={{ borderRadius: '0px' }}
                  >
                    O nás
                  </Link>
                </div>
              </div>

              {/* Right Column: Video with Text Overlay */}
              <div className="w-full md:w-1/2 relative h-full bg-gray-100">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://lumerashop.cz/wp-content/uploads/2025/11/OobchodeLumera-5.mp4"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-x-0 bottom-[60px] text-center z-10">
                  <span
                    className="text-white text-[32px] font-serif italic"
                    style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.5)' }}
                  >
                    Nadčasový styl
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-[20px]">
          <Features />
        </div>

        <div className="mt-[20px]">
          <ProductGrid
            title="Naše doporučení"
            products={RECOMMENDED_PRODUCTS}
            description="Vybrali jsme pro vás několik oblíbených modelů z Itálie. Každý z nich spojuje kvalitu, styl a poctivou ruční práci."
          />
        </div>

        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden relative mt-[20px]">
          <div className="max-w-[1140px] mx-auto px-4 lg:px-0 text-center relative z-10">
            <h2 className="text-[42px] font-serif font-bold mb-16 text-[#111111]">Co o nás říkají naše zákaznice</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-10 md:p-16 shadow-sm border border-neutral-100 relative">
                <span className="absolute top-10 left-10 text-[100px] text-gray-100 font-serif leading-none select-none">"</span>
                <p className="text-gray-600 text-[20px] md:text-[24px] italic mb-8 leading-relaxed relative z-10">
                  {TESTIMONIALS[0].text}
                </p>
                <div>
                  <p className="font-bold font-serif text-[18px] text-[#111111] mb-1">{TESTIMONIALS[0].author}</p>
                  <p className="text-[12px] text-gray-400 uppercase tracking-widest">{TESTIMONIALS[0].location}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white mt-[20px]">
          <div className="max-w-[1140px] mx-auto px-4 lg:px-0 text-center">
            <h2 className="text-[42px] font-serif font-bold mb-4 text-[#111111]">Z blogu Lumera</h2>
            <p className="text-gray-500 mb-16 italic text-[16px]">Styl, inspirace a péče o vaše kožené doplňky.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, idx) => (
                <Link href={`/blog/${post.slug}`} key={idx} className="text-left group block">
                  <div className="aspect-[4/3] relative overflow-hidden mb-6 shadow-sm">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                    />
                  </div>
                  <h3 className="text-[20px] font-serif font-bold mb-4 group-hover:text-amber-800 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-light">{post.excerpt}</p>
                </Link>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-block px-12 py-4 border border-black text-[15px] font-medium hover:bg-black hover:text-white transition-all shadow-sm"
                style={{ borderRadius: '0px' }}
              >
                Objevte více inspirace
              </Link>
            </div>
          </div>
        </section>

        <section className="py-0 mt-[20px]">
          <div className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/bg/cta-home.webp"
              alt="Objevte Lumera"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10 text-center text-white px-6">
              <h2 className="text-[40px] md:text-[52px] font-serif font-bold mb-6 leading-tight drop-shadow-lg text-white">Objevte eleganci s Lumera</h2>
              <p className="text-[18px] md:text-[20px] mb-10 font-light italic drop-shadow-md">Najděte svůj dokonalý doplněk ještě dnes.</p>
              <Link
                href="/shop"
                className="inline-block px-12 py-4 bg-white text-black text-[15px] font-medium hover:bg-black hover:text-white transition-all shadow-lg"
                style={{ borderRadius: '0px' }}
              >
                Prohlédnout kolekci
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
