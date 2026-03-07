import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LazyAutoplayVideo from '@/components/LazyAutoplayVideo';
import MarketingSlider from '@/components/MarketingSlider';
import ProductGrid from '@/components/ProductGrid';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, TESTIMONIALS } from '@/data/site-data';
import { getGlobal } from '@/lib/payload-data';
import { fetchPayloadArticles } from '@/lib/payload-articles';
import { fetchPayloadProducts } from '@/lib/payload-products';
import { getProductPurchaseCount, sortProductsByPopularity } from '@/lib/product-sorting';

export async function generateMetadata(): Promise<Metadata> {
  const homePageData = await getGlobal('home-page');

  return {
    title: homePageData?.seo?.title || 'Lumera Shop | ItalskР“В© koР•С•enР“В© kabelky',
    description: homePageData?.seo?.description || 'Objevte eleganci s Lumera. ItalskР“В© koР•С•enР“В© kabelky a doplР•в‚¬ky pР•в„ўР“В­mo od vР“Р…robcР•Р‡.',
  };
}

export default async function Home() {
  const homePageData = await getGlobal('home-page');
  const products = await fetchPayloadProducts();
  const blogPosts = await fetchPayloadArticles();
  const featuredProducts = products.filter((product) => product.isFeatured);
  const recommendedProducts = products.filter((product) => product.isRecommended);
  const popularProducts = sortProductsByPopularity(products);
  const productsWithPurchases = popularProducts.filter((product) => getProductPurchaseCount(product) > 0);
  const featuredForView = (
    productsWithPurchases.length
      ? productsWithPurchases
      : featuredProducts.length
        ? featuredProducts
        : FEATURED_PRODUCTS
  ).slice(0, 8);
  const recommendedForView = recommendedProducts.length ? recommendedProducts : RECOMMENDED_PRODUCTS;

  const aboutSection = homePageData?.aboutSection;
  const aboutTitle =
    typeof aboutSection?.title === 'string' && aboutSection.title.length > 0
      ? aboutSection.title
      : 'O obchodД› Lumera';
  const aboutDescription =
    typeof aboutSection?.description === 'string' && aboutSection.description.length > 0
      ? aboutSection.description
      : 'Lumera je ДЌeskГЅ obchod s italskГЅmi koЕѕenГЅmi kabelkami a doplЕ€ky.\nSpolupracujeme s menЕЎГ­mi vГЅrobci z ItГЎlie, kteЕ™Г­ si zaklГЎdajГ­ na kvalitД› a ruДЌnГ­m zpracovГЎnГ­. KaЕѕdГЅ model peДЌlivД› vybГ­rГЎme tak, aby spojoval eleganci, praktiДЌnost a originalitu. VД›Е™Г­me, Еѕe krГЎsa je v detailu - stejnД› jako v kaЕѕdГ© kabelce, kterou nabГ­zГ­me.';
  const aboutButtonText =
    typeof aboutSection?.buttonText === 'string' && aboutSection.buttonText.length > 0
      ? aboutSection.buttonText
      : 'Zjistit vГ­ce o obchodД›';
  const aboutButtonLink =
    typeof aboutSection?.buttonLink === 'string' && aboutSection.buttonLink.length > 0
      ? aboutSection.buttonLink
      : '/o-nas';

  return (
    <div className="min-h-screen bg-white font-sans text-[#111111] selection:bg-amber-100 italic-selection">
      <Header />
      <main>
        <Hero />

        <div className="mt-[20px]">
          <MarketingSlider slides={homePageData?.marketingSlides} />
        </div>

        <div className="mt-[20px]">
          <ProductGrid
            title={'Obl\u00edben\u00e9 modely'}
            products={featuredForView}
            description={'Nejobl\u00edben\u011bj\u0161\u00ed produkty z administrace se\u0159azen\u00e9 podle po\u010dtu n\u00e1kup\u016f.'}
            isSlider={true}
            autoPlay={false}
            cardVariant="featured"
            arrowTheme="gold"
            showShopButton={true}
          />
        </div>

        <section className="mt-[20px] flex justify-center overflow-hidden bg-white" id="block-6">
          <div className="lumera-container">
            <div className="relative mt-[20px] mb-0 flex flex-col lg:flex-row">
              <div className="flex min-h-[100px] w-full flex-col p-[10px] md:min-h-[396px] md:p-[30px] lg:w-1/2">
                <h2
                  className="mb-0 font-serif text-[30px] leading-[1.1] text-[#111111] font-normal md:text-[36px] lg:text-[48px]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {aboutTitle}
                </h2>
                <p
                  className="mt-[20px] mb-0 whitespace-pre-line text-[14px] font-normal leading-[1.6] text-[#111111] md:text-[16px]"
                  style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                  {aboutDescription}
                </p>
                <div className="mt-[30px]">
                  <Link href={aboutButtonLink} className="lumera-btn">
                    {aboutButtonText}
                  </Link>
                </div>
              </div>

              <div className="relative flex min-h-[100px] w-full items-end justify-center p-0 md:min-h-[396px] md:items-center md:p-[30px] lg:w-1/2">
                <div className="relative h-[275px] w-full overflow-hidden bg-transparent md:h-[336px]">
                  <LazyAutoplayVideo
                    src="/assets/videos/about.mp4"
                    className="h-full w-full object-contain md:object-cover"
                    placeholderClassName="h-full w-full bg-[#f6f3ef]"
                    posterSrc="/assets/bg/about-hero.webp"
                    posterClassName="object-cover"
                    posterSizes="(min-width: 1024px) 570px, 100vw"
                    preload="metadata"
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
            title="Naše doporučení­"
            products={recommendedForView}
            description="Vybrali jsme pro vás několik oblíbených modelů z Itálie. Každý z nich spojuje kvalitu, styl a poctivou ruční práci."
          />
        </div>

        <section className="mt-[20px] bg-white py-[30px] text-center md:py-[40px]" id="block-8">
          <div className="lumera-container">
            <h2
              className="mb-[30px] font-serif text-[30px] leading-[1.1] text-[#111111] font-bold md:text-[36px]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Co o nás říkají naše zákaznice
            </h2>

            <div className="group relative mx-auto max-w-[1140px] pt-2 pb-6">
              <div className="flex justify-center transition-transform duration-500">
                <div className="flex w-full flex-shrink-0 flex-col items-center px-4 md:px-0">
                  <div className="mb-4 flex h-[66px] w-[66px] items-center justify-center rounded-full bg-transparent text-[#b3b3b3]">
                    <svg viewBox="0 0 409.294 409.294" className="h-[33px] w-[33px] fill-current">
                      <path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z" />
                      <path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z" />
                    </svg>
                  </div>
                  <p
                    className="mb-[20px] max-w-3xl text-[18px] leading-[1.6] text-[#111111] md:text-[24px]"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                  >
                    &quot;{TESTIMONIALS[0].text}&quot;
                  </p>
                  <p className="m-0 font-sans text-[20px] text-[#111111] font-bold" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                    {TESTIMONIALS[0].author}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[-10px] left-1/2 mt-[10px] flex -translate-x-1/2 gap-[10px]">
                <button className="h-[10px] w-[10px] rounded-full bg-[#404040]" aria-label="1" />
                <button className="h-[10px] w-[10px] rounded-full bg-[#cccccc]" aria-label="2" />
                <button className="h-[10px] w-[10px] rounded-full bg-[#cccccc]" aria-label="3" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[20px] bg-white py-[30px] md:py-[40px]" id="block-9">
          <div className="lumera-container">
            <h2
              className="mb-[20px] font-serif text-[30px] leading-[1.1] text-[#111111] font-bold md:text-[36px]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Z blogu Lumera
            </h2>
            <p
              className="mb-[30px] text-[14px] leading-[1.6] text-[#111111] md:text-[16px]"
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              Styl, inspirace a péče o vaše kožené doplňky.
            </p>

            <div className="mb-[40px] grid grid-cols-1 gap-[10px] md:grid-cols-3">
              {blogPosts.slice(0, 3).map((post, idx) => (
                <div key={idx} className="flex flex-col">
                  <h3 className="mb-[20px] font-serif text-[20px] leading-[1.2] font-normal md:text-[24px]">
                    <Link href={`/blog/${post.slug}`} className="text-[#111111] hover:text-[#111111]">
                      {post.title}
                    </Link>
                  </h3>
                  <Link href={`/blog/${post.slug}`} className="relative mb-[20px] block h-[240px] w-full">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </Link>
                  <p
                    className="text-[14px] leading-[1.6] text-[#111111] md:text-[16px]"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[30px] text-center">
              <Link href="/blog" className="lumera-btn">
                Objevte více inspirace
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-[30px] mb-[40px] bg-white py-0" id="block-10">
          <div className="lumera-container">
            <div className="relative flex h-[220px] w-full flex-col justify-center px-[20px] md:h-[340px] md:px-[40px] lg:px-[40px] lg:pr-[129.1px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/bg/cta-home.webp"
                  alt="Objevte Lumera"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl text-left">
                  <h2
                    className="mb-[0px] font-serif text-[30px] leading-[1.1] text-white font-bold md:text-[40px] lg:text-[48px]"
                    style={{ fontFamily: '"Cormorant Garamond", serif', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
                  >
                    Objevte eleganci s Lumera
                  </h2>
                  <p
                    className="mt-[15px] mb-0 text-[14px] font-normal text-white md:mt-[20px] md:text-[16px] lg:text-[18px]"
                    style={{ fontFamily: '"Work Sans", sans-serif', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
                  >
                    Najděte svůj dokonalý doplněk ještě dnes.
                  </p>
                </div>

                <div className="mt-[30px] flex-shrink-0 md:mt-0">
                  <Link href="/shop" className="lumera-btn lumera-btn--light inline-flex">
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
