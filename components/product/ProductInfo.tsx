'use client';
import { useState } from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

interface ProductInfoProps {
    name: string;
    price: string;
    oldPrice?: string;
    sku: string;
    category: string;
    shortDescription?: string;
    stockStatus?: 'in-stock' | 'low-stock' | 'out-of-stock';
    variants?: { id: string, image: string, slug: string }[];
}

const ProductInfo = ({ name, price, oldPrice, sku, category, shortDescription, stockStatus = 'in-stock', variants }: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1);

    const getStockLabel = () => {
        switch (stockStatus) {
            case 'low-stock': return { label: 'Poslední kus', color: 'text-orange-500', dot: 'bg-orange-500' };
            case 'out-of-stock': return { label: 'Vyprodáno', color: 'text-red-500', dot: 'bg-red-500' };
            default: return { label: 'Skladem', color: 'text-green-600', dot: 'bg-green-600' };
        }
    };

    const stock = getStockLabel();

    return (
        <div className="flex flex-col">
            <h1 className="text-[32px] md:text-[42px] font-serif font-bold text-[#111111] mb-2 leading-tight tracking-tight">
                {name}
            </h1>

            <p className="text-[12px] text-gray-400 font-sans tracking-[0.2em] mb-6 uppercase">Ref. {sku}</p>

            <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[32px] font-sans font-black text-[#111111]">{price}</span>
                {oldPrice && (
                    <span className="text-[20px] font-sans text-gray-300 line-through">{oldPrice}</span>
                )}
            </div>

            <div className="flex items-center gap-2 mb-8">
                <span className={`w-2 h-2 rounded-full ${stock.dot} animate-pulse`}></span>
                <span className={`text-[14px] font-bold uppercase tracking-wider ${stock.color}`}>
                    {stock.label}
                </span>
            </div>

            {/* Variations / Upsells */}
            {variants && variants.length > 0 && (
                <div className="mb-10">
                    <p className="text-[14px] font-bold text-[#111] mb-4 uppercase tracking-wider">Barevné varianty:</p>
                    <div className="flex flex-wrap gap-3">
                        {variants.map((v) => (
                            <button
                                key={v.id}
                                className="w-16 h-16 border border-gray-100 hover:border-[#c8a16a] transition-all p-1 bg-white shadow-sm overflow-hidden"
                            >
                                <img src={v.image} alt="variant" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center border border-gray-200 h-14 bg-white">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-5 h-full hover:bg-gray-50 text-gray-400 hover:text-black transition-colors"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="w-12 text-center font-bold text-[16px] outline-none"
                    />
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-5 h-full hover:bg-gray-50 text-gray-400 hover:text-black transition-colors"
                    >
                        +
                    </button>
                </div>

                <button className="flex-1 h-14 bg-[#111] text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#c8a16a] transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
                    Přidat do košíku
                </button>

                <button className="h-14 w-14 border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-100 group transition-all">
                    <Heart size={20} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                </button>
            </div>

            <div className="space-y-4 mb-10 pt-8 border-t border-gray-50">
                <div className="flex items-center gap-4 text-[13px] text-gray-500 font-sans">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <Truck size={18} className="text-[#c8a16a]" />
                    </div>
                    <span>Doprava zdarma při nákupu nad 1500 Kč</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-gray-500 font-sans">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <RotateCcw size={18} className="text-[#c8a16a]" />
                    </div>
                    <span>14 dní na vrácení</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-gray-500 font-sans">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <ShieldCheck size={18} className="text-[#c8a16a]" />
                    </div>
                    <span>Garantujeme 100% kvalitu a italský původ</span>
                </div>
            </div>

            {shortDescription && (
                <div className="text-gray-500 text-[15px] leading-relaxed font-sans border-l-2 border-[#c8a16a] pl-6 py-2 italic font-light">
                    {shortDescription}
                </div>
            )}
        </div>
    );
};

export default ProductInfo;
