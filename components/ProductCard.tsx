'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/site';

type ProductCardProps = {
    product: Product;
    variant?: 'default' | 'featured';
};

const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
    return (
        <div className="group h-full flex flex-col bg-transparent md:p-[10px]">
            <Link
                href={`/product/${product.slug}`}
                className="block relative overflow-hidden group aspect-[1/1] md:h-[216px] bg-transparent"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 md:p-0 group-hover:scale-105 transition-transform duration-[1000ms]"
                />
            </Link>
            <div className="text-center px-1 flex flex-col items-center flex-grow">
                <h3
                    className="text-[16px] md:text-[20px] font-serif font-normal text-[#111111] mt-[10px] md:mt-[20px] mb-0 leading-[1.2]"
                    style={{
                        fontFamily: '"Cormorant Garamond", serif',
                    }}
                >
                    <Link href={`/product/${product.slug}`} className="hover:text-[#111111] transition-colors">
                        {product.name}
                    </Link>
                </h3>

                <div
                    className="mt-[10px] md:mt-[20px] mb-0"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                    <p className="text-[18px] md:text-[24px] font-normal text-[#111111] m-0 leading-[1.2]">
                        {product.price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

