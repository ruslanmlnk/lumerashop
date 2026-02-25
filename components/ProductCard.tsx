'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/site';

type ProductCardProps = {
    product: Product;
    variant?: 'default' | 'featured';
};

const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
    const isFeatured = variant === 'featured';

    return (
        <div className="group h-full flex flex-col bg-transparent">
            <Link
                href={`/product/${product.slug}`}
                className={`block relative overflow-hidden group ${
                    isFeatured
                        ? 'aspect-square bg-[#f6f6f7] mb-4 md:mb-5'
                        : 'aspect-[14/17] mb-2 md:mb-3'
                }`}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-contain ${isFeatured ? 'p-2.5 md:p-4' : 'p-1 md:p-2'} group-hover:scale-105 transition-transform duration-[1000ms]`}
                />
            </Link>
            <div className="text-center px-1 md:px-2 flex flex-col items-center">
                <h3
                    className={`${isFeatured ? 'text-[15px] md:text-[20px] min-h-[38px] md:min-h-[52px]' : 'text-[11px] md:text-[20px]'} font-serif font-medium text-[#3b2f2f] mb-1 leading-[1.15]`}
                    style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: isFeatured ? 2 : 3,
                        overflow: 'hidden',
                    }}
                >
                    <Link href={`/product/${product.slug}`} className="hover:text-[#3b2f2f] transition-colors">
                        {product.name}
                    </Link>
                </h3>
                <p
                    className={`${isFeatured ? 'text-[13px] md:text-[16px] mt-0.5' : 'text-[10px] md:text-[16px]'} font-normal text-[rgb(59,47,47)]`}
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                    {product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
