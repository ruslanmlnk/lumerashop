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
import Testimonials from '@/components/Testimonials';
import { fetchPayloadArticles } from '@/lib/payload-articles';
import { getGlobal } from '@/lib/payload-data';
import { fetchPayloadProducts } from '@/lib/payload-products';
import { getProductPurchaseCount, sortProductsByPopularity } from '@/lib/product-sorting';

export async function generateMetadata(): Promise<Metadata> {
  const homePageData = await getGlobal('home-page');

  return {
    title: homePageData?.seo?.title || 'Lumera Shop | ItalskР вЂњР’В© koР вЂўРЎвЂўenР вЂњР’В© kabelky',
    description:
      homePageData?.seo?.description ||
      'Objevte eleganci s Lumera. ItalskР вЂњР’В© koР вЂўРЎвЂўenР вЂњР’В© kabelky a doplР вЂўРІвЂљВ¬ky pР вЂўРІвЂћСћР вЂњР’В­mo od vР вЂњР вЂ¦robcР вЂўР вЂЎ.',
  };
}

export default async function Home() {
  const homePageData = await getGlobal('home-page');
  const products = await fetchPayloadProducts();
  const featuredProducts = products.filter((product) => product.isFeatured);
  const recommendedProducts = products.filter((product) => product.isRecommended);
  const popularProducts = sortProductsByPopularity(products);
  const productsWithPurchases = popularProducts.filter((product) => getProductPurchaseCount(product) > 0);
  const featuredForView = (productsWithPurchases.length ? productsWithPurchases : featuredProducts).slice(0, 8);

  const aboutSection = homePageData?.aboutSection;
  const aboutTitle =
    typeof aboutSection?.title === 'string' && aboutSection.title.length > 0
      ? aboutSection.title
      : 'O obchodР”вЂє Lumera';
  const aboutDescription =
    typeof aboutSection?.description === 'string' && aboutSection.description.length > 0
      ? aboutSection.description
      : 'Lumera je Р”РЊeskР“Р… obchod s italskР“Р…mi koР•С•enР“Р…mi kabelkami a doplР•в‚¬ky.\nSpolupracujeme s menР•РЋР“В­mi vР“Р…robci z ItР“РЋlie, kteР•в„ўР“В­ si zaklР“РЋdajР“В­ na kvalitР”вЂє a ruР”РЊnР“В­m zpracovР“РЋnР“В­. KaР•С•dР“Р… model peР”РЊlivР”вЂє vybР“В­rР“РЋme tak, aby spojoval eleganci, praktiР”РЊnost a originalitu. VР”вЂєР•в„ўР“В­me, Р•С•e krР“РЋsa je v detailu - stejnР”вЂє jako v kaР•С•dР“В© kabelce, kterou nabР“В­zР“В­me.';
  const aboutButtonText =
    typeof aboutSection?.buttonText === 'string' && aboutSection.buttonText.length > 0
      ? aboutSection.buttonText
      : 'Zjistit vР“В­ce o obchodР”вЂє';
  const aboutButtonLink =
    typeof aboutSection?.buttonLink === 'string' && aboutSection.buttonLink.length > 0
      ? aboutSection.buttonLink
      : '/o-nas';
  const testimonialsSection =
    typeof homePageData?.testimonialsSection === 'object' && homePageData.testimonialsSection
      ? homePageData.testimonialsSection
      : null;
  const testimonialsTitle =
    typeof testimonialsSection?.title === 'string' && testimonialsSection.title.length > 0
      ? testimonialsSection.title
      : 'Co o n\u00e1s \u0159\u00edkaj\u00ed na\u0161e z\u00e1kaznice';
  const testimonials = Array.isArray(testimonialsSection?.items)
    ? testimonialsSection.items
        .filter(
          (item): item is { text: string; author: string; location?: string } =>
            typeof item?.text === 'string' &&
            item.text.trim().length > 0 &&
            typeof item?.author === 'string' &&
            item.author.trim().length > 0,
        )
        .map((item) => ({
          text: item.text.trim(),
          author: item.author.trim(),
          location: typeof item.location === 'string' ? item.location.trim() : '',
        }))
    : [];
  const blogSection = typeof homePageData?.blogSection === 'object' && homePageData.blogSection ? homePageData.blogSection : null;
  const blogSectionTitle =
    typeof blogSection?.title === 'string' && blogSection.title.trim().length > 0
      ? blogSection.title.trim()
      : 'Z blogu Lumera';
  const blogSectionDescription =
    typeof blogSection?.description === 'string' && blogSection.description.trim().length > 0
      ? blogSection.description.trim()
      : 'Styl, inspirace a péče o vaše kožené doplňky.';
  const selectedBlogSlugs = Array.isArray(blogSection?.featuredArticles)
    ? blogSection.featuredArticles
        .map((item) => {
          if (typeof item === 'object' && item && typeof item.slug === 'string') {
            return item.slug.trim();
          }

          return '';
        })
        .filter((slug): slug is string => slug.length > 0)
    : [];
  const blogPosts = selectedBlogSlugs.length > 0 ? await fetchPayloadArticles() : [];
  const blogPostMap = new Map(blogPosts.map((post) => [post.slug, post] as const));
  const selectedBlogPosts = selectedBlogSlugs
    .map((slug) => blogPostMap.get(slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

  return (
    <div className="min-h-screen bg-white font-sans text-[#111111] selection:bg-amber-100 italic-selection">
      <Header />
      <main>
        <Hero />

        <div className="mt-[20px]">
          <MarketingSlider slides={homePageData?.marketingSlides} />
        </div>

        {featuredForView.length > 0 && (
          <div className="mt-[20px]">
            <ProductGrid
              title={'Obl\u00edben\u00e9 modely'}
              products={featuredForView}
              description={
                'Nejobl\u00edben\u011bj\u0161\u00ed produkty z administrace se\u0159azen\u00e9 podle po\u010dtu n\u00e1kup\u016f.'
              }
              isSlider={true}
              autoPlay={false}
              cardVariant="featured"
              arrowTheme="gold"
              showShopButton={true}
            />
          </div>
        )}

        <section className="mt-[20px] flex justify-center overflow-hidden bg-white" id="block-6">
          <div className="lumera-container">
            <div className="relative mt-[20px] mb-0 flex flex-col lg:flex-row">
              <div className="flex min-h-[100px] w-full flex-col p-[10px] md:min-h-[396px] md:p-[30px] lg:w-1/2">
                <h2
                  className="mb-0 font-serif text-[30px] leading-[1.1] font-normal text-[#111111] md:text-[36px] lg:text-[48px]"
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

        {recommendedProducts.length > 0 && (
          <div className="mt-[20px]">
            <ProductGrid
              title="NaЕЎe doporuДЌenГ­В­"
              products={recommendedProducts}
              description="Vybrali jsme pro vГЎs nД›kolik oblГ­benГЅch modelЕЇ z ItГЎlie. KaЕѕdГЅ z nich spojuje kvalitu, styl a poctivou ruДЌnГ­ prГЎci."
            />
          </div>
        )}

        {testimonials.length > 0 && <Testimonials title={testimonialsTitle} testimonials={testimonials} />}

        {selectedBlogPosts.length > 0 && (
          <section className="mt-[20px] bg-white py-[30px] md:py-[40px]" id="block-9">
            <div className="lumera-container">
              <h2
                className="mb-[20px] font-serif text-[30px] leading-[1.1] font-bold text-[#111111] md:text-[36px]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {blogSectionTitle}
              </h2>
              <p
                className="mb-[30px] text-[14px] leading-[1.6] text-[#111111] md:text-[16px]"
                style={{ fontFamily: '"Work Sans", sans-serif' }}
              >
                {blogSectionDescription}
              </p>

              <div className="mb-[40px] grid grid-cols-1 gap-[10px] md:grid-cols-3">
                {selectedBlogPosts.map((post, idx) => (
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
                  Objevte vГ­ce inspirace
                </Link>
              </div>
            </div>
          </section>
        )}

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
                    className="mb-[0px] font-serif text-[30px] leading-[1.1] font-bold text-white md:text-[40px] lg:text-[48px]"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                    }}
                  >
                    Objevte eleganci s Lumera
                  </h2>
                  <p
                    className="mt-[15px] mb-0 text-[14px] font-normal text-white md:mt-[20px] md:text-[16px] lg:text-[18px]"
                    style={{ fontFamily: '"Work Sans", sans-serif', textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}
                  >
                    NajdД›te svЕЇj dokonalГЅ doplnД›k jeЕЎtД› dnes.
                  </p>
                </div>

                <div className="mt-[30px] flex-shrink-0 md:mt-0">
                  <Link href="/shop" className="lumera-btn lumera-btn--light inline-flex">
                    ProhlГ©dnout kolekci
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
