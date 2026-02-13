import Image from 'next/image';
import Link from 'next/link';

type Product = {
    id: string;
    name: string;
    price: string;
    image: string;
    slug: string;
    category?: string;
};

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group">
            <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Quick add overlay coule go here */}
            </Link>
            <div className="text-center">
                {product.category && (
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                )}
                <h3 className="text-base font-medium text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="text-sm font-bold text-gray-900">{product.price}</p>
            </div>
        </div>
    );
};

const ProductGrid = ({ title, products }: { title: string, products: Product[] }) => {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{title}</h2>
                    <div className="w-24 h-1 bg-amber-700 mx-auto opacity-20"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/shop"
                        className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Zobrazit vše
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
