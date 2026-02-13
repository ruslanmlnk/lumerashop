import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const featuredProducts = [
  {
    id: '1',
    name: 'Italská shopper kabelka Olivia růžová',
    price: '2 490 Kč',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop',
    slug: 'olivia-ruzova',
    category: 'Kabelky'
  },
  {
    id: '2',
    name: 'Dámský semišový pásek hnědý',
    price: '590 Kč',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop',
    slug: 'pasek-hnedy',
    category: 'Pásky'
  },
  {
    id: '3',
    name: 'Kožená kabelka Elis béžová',
    price: '1 890 Kč',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
    slug: 'elis-bezova',
    category: 'Kabelky'
  },
  {
    id: '4',
    name: 'Pánská taška Viko černá',
    price: '2 190 Kč',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop',
    slug: 'viko-cerna',
    category: 'Pánské tašky'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />

      <main>
        <Hero />

        <CategorySection
          title="Lehkost v pohybu"
          description="Pro chvíle, kdy potřebujete mít styl i pohodlí. Italské kabelky a batohy pro váš volný den."
          image="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2071&auto=format&fit=crop"
          link="/batohy"
          linkText="Objevte batohy"
        />

        <CategorySection
          title="Síla elegance"
          description="Klasický design, pravá kůže, dokonalé zpracování. Kabelky, které podtrhnou vaši sebedůvěru."
          image="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1957&auto=format&fit=crop"
          link="/kabelky"
          linkText="Vyberte si svůj styl"
          reversed
        />

        <ProductGrid title="Oblíbené modely" products={featuredProducts} />

        <Features />

        {/* Newsletter/Blog Teaser could go here */}
      </main>

      <Footer />
    </div>
  );
}
