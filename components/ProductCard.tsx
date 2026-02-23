'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/site';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group h-full flex flex-col bg-white">
            <Link href={`/product/${product.slug}`} className="block relative aspect-[14/17] overflow-hidden mb-4 group">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-[1000ms]"
                />
            </Link>
            <div className="text-center px-1 flex flex-col items-center">
                <h3
                    className="text-[20px] font-serif font-medium text-[#111111] mb-2 leading-[1.2]"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    <Link href={`/product/${product.slug}`} className="hover:text-[#3b2f2f] transition-colors">
                        {product.name}
                    </Link>
                </h3>
                <p
                    className="text-[16px] font-normal text-[rgb(59,47,47)]"
                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                >
                    {product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
