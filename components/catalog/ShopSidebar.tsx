'use client';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import MultiSelectFilter from './MultiSelectFilter';

interface ActiveFilter {
    id: string;
    label: string;
}

interface SidebarFilterGroup {
    key: string;
    title: string;
    options: string[];
    selected: string[];
}

interface ShopSidebarProps {
    categories: string[];
    selectedCategory: string | null;
    onCategoryChange: (cat: string | null) => void;
    priceRange?: [number, number];
    priceBounds?: [number, number];
    onPriceChange: (range: [number, number]) => void;
    filterGroups?: SidebarFilterGroup[];
    onToggleFilterOption?: (groupKey: string, value: string) => void;
    activeFilters?: ActiveFilter[];
    onRemoveFilter?: (id: string) => void;
    onClearFilters?: () => void;
}

const ShopSidebar = ({
    categories,
    selectedCategory,
    onCategoryChange,
    priceRange = [0, 10000],
    priceBounds = [0, 10000],
    onPriceChange,
    filterGroups = [],
    onToggleFilterOption = () => undefined,
    activeFilters = [],
    onRemoveFilter = () => undefined,
    onClearFilters = () => undefined,
}: ShopSidebarProps) => {
    return (
        <aside className="w-full shrink-0 self-stretch lg:w-[270px] lg:pr-[20px]">
            <div className="flex w-full max-w-[250px] flex-col gap-[42px] bg-white px-[6px] pb-[36px] pt-[26px]">
                <CategoryFilter
                    title="Kategorie produktu"
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={onCategoryChange}
                />

                <div className="w-full">
                    <button
                        type="button"
                        className="flex h-[50px] w-[203px] items-center justify-center gap-2 bg-black px-4 text-[15px] font-medium text-white"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M9.62 16.84h3.85v-1.45H9.62v1.45ZM5.77 5.77v1.45h11.55V5.77H5.77Zm1.93 6.25h7.69v-1.44H7.7v1.44Z" fill="currentColor" />
                        </svg>
                        Filtr produktu
                    </button>

                    <div className="mt-[7px]">
                        <h2
                            className="text-[20px] font-bold leading-[24px] text-[#111111]"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}
                        >
                            Filtry
                        </h2>

                        {activeFilters.length > 0 && (
                            <div className="mb-[18px] mt-4">
                                <div className="mb-3 flex flex-wrap gap-[4px] py-[8px]">
                                    {activeFilters.map((filter) => (
                                        <button
                                            key={filter.id}
                                            type="button"
                                            onClick={() => onRemoveFilter(filter.id)}
                                            className="inline-flex items-center gap-[6px] rounded-[2px] border border-[#111111]/20 px-[10px] py-[4px] text-[14px] leading-[22px] text-[#111111]"
                                        >
                                            <span>{filter.label}</span>
                                            <span className="text-[16px] leading-none">x</span>
                                        </button>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={onClearFilters}
                                    className="w-full bg-black px-2 py-[5px] text-[14px] text-white"
                                >
                                    Vymazat filtry
                                </button>
                            </div>
                        )}

                        <div className="space-y-[18px]">
                            <PriceFilter
                                min={priceBounds[0]}
                                max={priceBounds[1]}
                                value={priceRange}
                                onChange={onPriceChange}
                            />

                            {filterGroups.map((group) => (
                                <MultiSelectFilter
                                    key={group.key}
                                    title={group.title}
                                    options={group.options}
                                    selected={group.selected}
                                    onToggle={(value) => onToggleFilterOption(group.key, value)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ShopSidebar;
