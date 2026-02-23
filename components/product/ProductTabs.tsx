'use client';
import { useState } from 'react';

interface ProductTabsProps {
    description: string;
    specifications: Record<string, string>;
}

const ProductTabs = ({ description, specifications }: ProductTabsProps) => {
    const [activeTab, setActiveTab] = useState('popis');

    return (
        <div className="mt-24">
            <div className="flex border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar">
                {['popis', 'další informace', 'recenze'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-5 text-[13px] font-bold uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-black'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
                        )}
                    </button>
                ))}
            </div>

            <div className="max-w-[800px]">
                {activeTab === 'popis' && (
                    <div className="text-[17px] text-gray-500 leading-relaxed font-light space-y-6">
                        <p>{description}</p>
                    </div>
                )}

                {activeTab === 'další informace' && (
                    <div className="grid grid-cols-1 gap-4">
                        {Object.entries(specifications).map(([key, value]) => (
                            <div key={key} className="flex border-b border-gray-50 py-4 last:border-0">
                                <span className="w-1/3 text-[14px] font-bold text-[#111111] uppercase tracking-wider">{key}</span>
                                <span className="w-2/3 text-[15px] text-gray-500">{value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'recenze' && (
                    <div className="py-8">
                        <p className="text-gray-500 italic">Zatím zde nejsou žádné recenze.</p>
                        <p className="text-[14px] text-gray-400 mt-4">Pouze přihlášení uživatelé, kteří zakoupili tento produkt, mohou přidat hodnocení.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;
