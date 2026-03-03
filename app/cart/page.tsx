'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import '@/app/cart.css';

export default function CartPage() {
    const [isCouponOpen, setIsCouponOpen] = React.useState(false);
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-[180px] pb-20">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-8">
                        <ShoppingBag size={40} className="text-gray-300" />
                    </div>
                    <h1 className="text-4xl font-serif text-[#111] mb-4">Váš košík je prázdný</h1>
                    <p className="text-lg text-gray-500 mb-10 font-sans max-w-md">
                        Zdá se, že jste si zatím nic nevybrali. Objevte naši kolekci italských kožených kabelek.
                    </p>
                    <Link
                        href="/"
                        className="px-12 py-4 bg-[#c8a16a] text-white font-bold rounded-sm hover:bg-[#b08b5a] transition-all hover:shadow-lg transform hover:-translate-y-1"
                    >
                        Přejít k nákupu
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 pt-[180px] md:pt-[240px] pb-32">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                    <div className="mb-16 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-serif text-[#111] mb-4 tracking-tight leading-none">Nákupní košík</h1>
                        <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-[12px]">{cartItems.length} {cartItems.length === 1 ? 'položka' : (cartItems.length < 5 ? 'položky' : 'položek')}</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Table side */}
                        <div className="flex-1 w-full">
                            {/* Desktop Table View */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b-[1.5px] border-[#111]">
                                            <th className="pb-6 font-serif text-[15px] text-[#111] text-left uppercase tracking-[0.15em] font-bold">Produkt</th>
                                            <th className="pb-6 font-serif text-[15px] text-[#111] text-center uppercase tracking-[0.15em] font-bold">Cena</th>
                                            <th className="pb-6 font-serif text-[15px] text-[#111] text-center uppercase tracking-[0.15em] font-bold">Množství</th>
                                            <th className="pb-6 font-serif text-[15px] text-[#111] text-right uppercase tracking-[0.15em] font-bold">Celkem</th>
                                            <th className="pb-6"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {cartItems.map((item) => (
                                            <tr key={item.id} className="group cart-item-row">
                                                <td className="py-8">
                                                    <div className="flex items-center gap-6">
                                                        <div className="relative w-24 h-24 bg-white border border-gray-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-500 ease-out p-1 shadow-sm">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-contain p-1.5"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-1 max-w-[320px]">
                                                            <Link href={`/product/${item.id}`} className="font-serif text-[20px] text-[#111] hover:text-[#c8a16a] transition-colors leading-[1.2] font-semibold">
                                                                {item.name}
                                                            </Link>
                                                            {item.sku && <span className="text-[9px] text-gray-400 font-sans tracking-[0.15em] uppercase">Ref. {item.sku}</span>}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-8 text-center font-sans text-[#111] text-[15px] font-medium">
                                                    {item.price.toLocaleString('cs-CZ')} Kč
                                                </td>
                                                <td className="py-8">
                                                    <div className="flex justify-center">
                                                        <div className="flex items-center border border-gray-100 bg-white h-10 shadow-sm">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="px-4 hover:bg-gray-50 text-gray-400 hover:text-[#111] transition-colors h-full flex items-center"
                                                            >
                                                                <Minus size={12} />
                                                            </button>
                                                            <input
                                                                type="text"
                                                                value={item.quantity}
                                                                readOnly
                                                                className="w-10 text-center font-sans font-bold text-[14px] h-full"
                                                            />
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="px-4 hover:bg-gray-50 text-gray-400 hover:text-[#111] transition-colors h-full flex items-center"
                                                            >
                                                                <Plus size={12} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-8 text-right font-sans font-bold text-[#111] text-[16px]">
                                                    {(item.price * item.quantity).toLocaleString('cs-CZ')} Kč
                                                </td>
                                                <td className="py-8 text-right pl-4">
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-gray-200 hover:text-red-400 transition-colors p-2"
                                                        title="Odstranit"
                                                    >
                                                        <X size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Card View */}
                            <div className="md:hidden space-y-8">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="pb-8 border-b border-gray-50 flex gap-5">
                                        <div className="relative w-24 h-24 bg-white border border-gray-100 flex-shrink-0 shadow-sm">
                                            <Image src={item.image} alt={item.name} fill className="object-contain p-1.5" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-0.5">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-serif text-[17px] text-[#111] leading-tight pr-2 font-semibold">{item.name}</h3>
                                                <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 p-1">
                                                    <X size={16} />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center border border-gray-100 h-8 shadow-sm">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 text-gray-400 border-r border-gray-50 flex items-center h-full"><Minus size={10} /></button>
                                                    <span className="px-4 font-sans text-[13px] font-bold text-[#111]">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 text-gray-400 border-l border-gray-50 flex items-center h-full"><Plus size={10} /></button>
                                                </div>
                                                <span className="font-bold text-[#111] text-[16px] font-sans">{(item.price * item.quantity).toLocaleString('cs-CZ')} Kč</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Coupon & Actions */}
                            <div className="mt-10 border-t border-gray-100 pt-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                    <div className="w-full md:w-auto">
                                        <button
                                            onClick={() => setIsCouponOpen(!isCouponOpen)}
                                            className="font-serif text-[17px] text-[#111] hover:text-[#c8a16a] transition-colors flex items-center gap-3 mb-4 group"
                                        >
                                            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center group-hover:border-[#c8a16a] transition-colors">
                                                <Plus size={10} className={`transition-transform duration-500 ease-in-out ${isCouponOpen ? 'rotate-45' : ''}`} />
                                            </div>
                                            <span className="border-b border-black group-hover:border-[#c8a16a] pb-0.5 font-bold tracking-tight transition-all">Máte slevový kód?</span>
                                        </button>

                                        {isCouponOpen && (
                                            <div className="flex overflow-hidden transition-all duration-500 animate-fadeIn h-11 w-full md:w-[320px] shadow-sm border border-gray-100">
                                                <input
                                                    type="text"
                                                    placeholder="VLOŽTE KÓD"
                                                    className="flex-1 px-4 focus:outline-none focus:bg-gray-50 bg-white text-[10px] font-sans tracking-[0.1em] text-[#111]"
                                                />
                                                <button className="px-6 bg-[#111] text-white hover:bg-black transition-colors text-[10px] font-bold uppercase tracking-[0.15em] h-full">Použít</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-end">
                                        <button
                                            onClick={() => window.location.reload()}
                                            className="px-8 py-2.5 bg-white border border-gray-200 text-[#111] font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gray-50 transition-all shadow-sm rounded-sm"
                                        >
                                            Aktualizovat košík
                                        </button>
                                        <Link
                                            href="/"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#f8f8f8] text-[#111] hover:bg-gray-100 transition-all font-sans text-[10px] uppercase tracking-[0.15em] font-bold shadow-sm rounded-sm"
                                        >
                                            <ArrowLeft size={12} /> Pokračovat
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Block - Side layout */}
                        <div className="w-full lg:w-[380px]">
                            <div className="bg-white border border-gray-100 p-8 md:p-10 shadow-xl relative rounded-sm">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#c8a16a]"></div>
                                <h2 className="font-serif text-[28px] text-[#111] mb-8 pb-4 border-b border-gray-50 font-semibold tracking-tight">Souhrn</h2>

                                <div className="space-y-5 mb-8">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 font-sans uppercase tracking-[0.1em] text-[11px] font-bold font-sans">Mezisoučet</span>
                                        <span className="text-[#111] font-sans font-bold text-[15px]">{totalPrice.toLocaleString('cs-CZ')} Kč</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 font-sans uppercase tracking-[0.1em] text-[11px] font-bold font-sans">Doprava</span>
                                        <span className="text-[#c8a16a] font-bold font-sans uppercase tracking-[0.1em] text-[11px]">Zdarma!</span>
                                    </div>
                                    <div className="pt-6 border-t border-gray-50">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="text-[16px] font-serif text-[#111] font-bold uppercase tracking-[0.1em]">Celkem</span>
                                            <span className="text-2xl font-sans font-black text-[#111]">{totalPrice.toLocaleString('cs-CZ')} Kč</span>
                                        </div>
                                        <p className="text-right text-[10px] text-gray-300 font-sans tracking-tight">Včetně DPH {(totalPrice * 0.21).toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč</p>
                                    </div>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="w-full h-12 bg-[#111] text-white flex items-center justify-center font-bold uppercase tracking-[0.25em] text-[12px] hover:bg-[#c8a16a] transition-all duration-300 group shadow-md"
                                >
                                    <span>Pokladna</span>
                                    <ArrowRight size={16} className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                                </Link>

                                <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                                    <p className="text-[12px] text-gray-400 font-sans leading-relaxed italic">
                                        Doprava zdarma nad 2 000 Kč.<br />
                                        Garantujeme 100% kvalitu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
            <Footer />
        </div>
    );
}
