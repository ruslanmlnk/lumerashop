'use client';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

interface ShopSidebarProps {
    categories: string[];
    selectedCategory: string | null;
    onCategoryChange: (cat: string | null) => void;
    onPriceChange: (range: [number, number]) => void;
}

const ShopSidebar = ({ categories, selectedCategory, onCategoryChange, onPriceChange }: ShopSidebarProps) => {
    return (
        <aside className="w-full lg:w-[280px] shrink-0">
            <div className="sticky top-24">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={onCategoryChange}
                />
                <PriceFilter
                    min={0}
                    max={10000}
                    onChange={onPriceChange}
                />

                {/* Brand Filter - Static for now as placeholder */}
                <div className="mb-10">
                    <h3 className="text-[18px] font-bold mb-6 text-[#111111] uppercase tracking-wider">Značky</h3>
                    <ul className="space-y-3">
                        {['DAVID JONES', 'ENRICO COVERI'].map((brand) => (
                            <li key={brand}>
                                <button className="text-[15px] text-gray-500 hover:text-black transition-colors">
                                    {brand}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default ShopSidebar;
