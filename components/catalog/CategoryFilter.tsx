'use client';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onSelect: (category: string | null) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelect }: CategoryFilterProps) => {
    return (
        <div className="mb-10">
            <h3 className="text-[18px] font-bold mb-6 text-[#111111] uppercase tracking-wider">Kategorie</h3>
            <ul className="space-y-3">
                <li>
                    <button
                        onClick={() => onSelect(null)}
                        className={`text-[15px] transition-colors hover:text-black ${selectedCategory === null ? 'text-black font-semibold' : 'text-gray-500'
                            }`}
                    >
                        Všechny produkty
                    </button>
                </li>
                {categories.map((cat) => (
                    <li key={cat}>
                        <button
                            onClick={() => onSelect(cat)}
                            className={`text-[15px] transition-colors hover:text-black ${selectedCategory === cat ? 'text-black font-semibold' : 'text-gray-500'
                                }`}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;
