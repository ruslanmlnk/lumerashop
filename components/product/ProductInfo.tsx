'use client';
import { useState } from 'react';

interface ProductInfoProps {
    name: string;
    price: string;
    sku: string;
    category: string;
    shortDescription?: string;
}

const ProductInfo = ({ name, price, sku, category, shortDescription }: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col">
            <h1
                className="text-[42px] font-serif font-bold text-[#111111] mb-4 leading-tight"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
                {name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
                <span className="text-[28px] font-medium text-amber-800">{price}</span>
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[12px] font-bold uppercase tracking-wider rounded-full">
                    Skladem
                </span>
            </div>

            {shortDescription && (
                <p className="text-gray-500 text-[16px] leading-relaxed mb-8 font-light italic">
                    {shortDescription}
                </p>
            )}

            <div className="space-y-6 pb-10 border-b border-gray-100">
                <div className="flex flex-col gap-2">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#111111]">Množství</span>
                    <div className="flex items-center w-32 border border-gray-200">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            readOnly
                            className="w-full text-center text-[15px] font-medium outline-none"
                        />
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                            +
                        </button>
                    </div>
                </div>

                <button className="w-full py-5 bg-black text-white text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-lg">
                    Přidat do košíku
                </button>
            </div>

            <div className="pt-8 space-y-3">
                <div className="flex items-center gap-2 text-[14px]">
                    <span className="font-bold text-[#111111]">SKU:</span>
                    <span className="text-gray-500 uppercase">{sku}</span>
                </div>
                <div className="flex items-center gap-2 text-[14px]">
                    <span className="font-bold text-[#111111]">Kategorie:</span>
                    <span className="text-gray-500 underline hover:text-black cursor-pointer transition-colors">{category}</span>
                </div>
            </div>

            <div className="mt-10 p-6 bg-[#f9f9f9] border border-gray-100 space-y-4">
                <div className="flex items-center gap-3 text-[14px] text-gray-600">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Doprava zdarma při nákupu nad 1500 Kč
                </div>
                <div className="flex items-center gap-3 text-[14px] text-gray-600">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    14 dní na vrácení
                </div>
                <div className="flex items-center gap-3 text-[14px] text-gray-600">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Vyrobeno v Itálii
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
