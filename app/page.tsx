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

        {/* Block 6: O obchodě Lumera */}
        <section className="mt-[20px] bg-white overflow-hidden flex justify-center" id="block-6">
          <div className="lumera-container">
            <div className="flex flex-col lg:flex-row mt-[20px] mb-0 relative">
              {/* Left Column: Text */}
              <div className="w-full lg:w-1/2 flex flex-col p-[10px] md:p-[30px] min-h-[100px] md:min-h-[396px]">
                <h2
                  className="text-[30px] md:text-[36px] lg:text-[48px] font-serif font-normal mb-0 text-[#111111] leading-[1.1]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  O obchodě Lumera
                </h2>
                <p className="text-[#111111] text-[14px] md:text-[16px] font-normal leading-[1.6] mt-[20px] mb-0" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                  Lumera je český obchod s italskými koženými kabelkami a doplňky.<br />
                  Spolupracujeme s menšími výrobci z Itálie, kteří si zakládají na kvalitě a ručním zpracování. Každý model pečlivě vybíráme tak, aby spojoval eleganci, praktičnost a originalitu. Věříme, že krása je v detailu – stejně jako v každé kabelce, kterou nabízíme.
                </p>
                <div className="mt-[30px]">
                  <Link
                    href="/o-nas"
                    className="lumera-btn"
                  >
                    Zjistit více o obchodě
                  </Link>
                </div>
              </div>

              {/* Right Column: Video */}
              <div className="w-full lg:w-1/2 relative min-h-[100px] md:min-h-[396px] p-0 md:p-[30px] flex items-end md:items-center justify-center">
                <div className="w-full h-[275px] md:h-[336px] relative overflow-hidden bg-transparent">
                  <video
                    className="w-full h-full object-contain md:object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://lumerashop.cz/wp-content/uploads/2025/11/OobchodeLumera-5.mp4"
                    style={{ willChange: 'transform' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-[20px] hidden md:block">
          <Features />
        </div>

        <div className="mt-[20px]">
          <ProductGrid
            title="Naše doporučení"
            products={RECOMMENDED_PRODUCTS}
            description="Vybrali jsme pro vás několik oblíbených modelů z Itálie. Každý z nich spojuje kvalitu, styl a poctivou ruční práci."
          />
        </div>

        {/* Block 8: Testimonials */}
        <section className="mt-[20px] py-[30px] md:py-[40px] bg-white text-center" id="block-8">
          <div className="lumera-container">
            <h2
              className="text-[30px] md:text-[36px] font-serif font-bold mb-[30px] text-[#111111] leading-[1.1]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Co o nás říkají naše zákaznice
            </h2>

            <div className="max-w-[1140px] mx-auto relative group pt-2 pb-6">
              <div className="flex justify-center transition-transform duration-500">
                <div className="w-full flex-shrink-0 px-4 md:px-0 flex flex-col items-center">
                  <div className="w-[66px] h-[66px] rounded-full bg-transparent flex items-center justify-center text-[#b3b3b3] mb-4">
                    <svg viewBox="0 0 409.294 409.294" className="w-[33px] h-[33px] fill-current">
                      <path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z"></path>
                      <path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z"></path>
                    </svg>
                  </div>
                  <p className="text-[#111111] text-[18px] md:text-[24px] mb-[20px] max-w-3xl mx-auto leading-[1.6]" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                    "{TESTIMONIALS[0].text}"
                  </p>
                  <p className="font-bold font-sans text-[20px] text-[#111111] m-0" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                    {TESTIMONIALS[0].author}
                  </p>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-[10px] gap-[10px] absolute left-1/2 -translate-x-1/2 bottom-[-10px]">
                <button className="w-[10px] h-[10px] rounded-full bg-[#404040]" aria-label="1"></button>
                <button className="w-[10px] h-[10px] rounded-full bg-[#cccccc]" aria-label="2"></button>
                <button className="w-[10px] h-[10px] rounded-full bg-[#cccccc]" aria-label="3"></button>
              </div>
            </div>

          </div>
        </section>

        {/* Block 9: Z blogu Lumera */}
        <section className="mt-[20px] py-[30px] md:py-[40px] bg-white" id="block-9">
          <div className="lumera-container">
            <h2 className="text-[30px] md:text-[36px] font-serif font-bold mb-[20px] text-[#111111] leading-[1.1]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Z blogu Lumera
            </h2>
            <p className="text-[#111111] mb-[30px] text-[14px] md:text-[16px] leading-[1.6]" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Styl, inspirace a péče o vaše kožené doplňky.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-[40px]">
              {BLOG_POSTS.map((post, idx) => (
                <div key={idx} className="flex flex-col">
                  <h3 className="text-[20px] md:text-[24px] font-serif font-normal mb-[20px] leading-[1.2]">
                    <Link href={`/blog/${post.slug}`} className="text-[#111111] hover:text-[#111111]">
                      {post.title}
                    </Link>
                  </h3>
                  <Link href={`/blog/${post.slug}`} className="block relative w-full h-[240px] mb-[20px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <p className="text-[#111111] text-[14px] md:text-[16px] leading-[1.6]" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-[30px]">
              <Link
                href="/blog"
                className="lumera-btn"
              >
                Objevte více inspirace
              </Link>
            </div>
          </div>
        </section>

        {/* Block 10: CTA */}
        <section className="mt-[30px] py-0 bg-white" id="block-10">
          <div className="lumera-container">
            <div className="relative h-[220px] md:h-[340px] flex flex-col justify-center px-[20px] md:px-[40px] lg:px-[40px] lg:pr-[129.1px] w-full">
              {/* Background gradient image logic */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/bg/cta-home.webp"
                  alt="Objevte Lumera"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="text-left max-w-2xl">
                  <h2
                    className="text-[30px] md:text-[40px] lg:text-[48px] font-serif font-bold text-white mb-[0px] leading-[1.1]"
                    style={{ fontFamily: '"Cormorant Garamond", serif', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
                  >
                    Objevte eleganci s Lumera
                  </h2>
                  <p
                    className="text-[14px] md:text-[16px] lg:text-[18px] font-normal text-white mt-[15px] md:mt-[20px] mb-0"
                    style={{ fontFamily: '"Work Sans", sans-serif', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
                  >
                    Najděte svůj dokonalý doplněk ještě dnes.
                  </p>
                </div>

                <div className="mt-[30px] md:mt-0 flex-shrink-0">
                  <Link
                    href="/shop"
                    className="lumera-btn lumera-btn--light inline-flex"
                  >
                    Prohlédnout kolekci
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

