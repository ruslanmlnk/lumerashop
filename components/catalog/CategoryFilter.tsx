'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoryFilterProps {
    title?: string;
    categories: string[];
    selectedCategory: string | null;
    onSelect: (category: string | null) => void;
}

interface CategoryNavItem {
    label: string;
    href: string;
    value?: string | null;
    children?: Array<{ label: string; href: string }>;
}

const CATEGORY_MENU: CategoryNavItem[] = [
    { label: 'Dámské kabelky', href: '/product-category/kabelky', value: 'Kabelky' },
    { label: 'Pánské tašky', href: '/product-category/panske-tasky', value: 'Pánské tašky' },
    {
        label: 'Batohy',
        href: '/product-category/batohy',
        value: 'Batohy',
        children: [
            { label: 'Kožené batohy', href: '/product-category/batohy?type=kozene' },
            { label: 'Městské batohy', href: '/product-category/batohy?type=mestske' },
        ],
    },
    {
        label: 'Doplňky',
        href: '/product-category/doplnky',
        value: 'Doplňky',
        children: [
            { label: 'Peněženky', href: '/product-category/doplnky?type=penezenky' },
            { label: 'Pásky', href: '/product-category/doplnky?type=pasky' },
        ],
    },
    {
        label: 'Dárkové poukazy',
        href: '/shop',
        children: [{ label: 'Všechny poukazy', href: '/shop' }],
    },
    { label: 'DAVID JONES', href: '/shop' },
    { label: 'ENRICO COVERI', href: '/shop' },
    { label: 'Akce', href: '/shop' },
];

const stripQuery = (href: string) => href.split('?')[0];

const CategoryFilter = ({ title = 'Kategorie produktu', selectedCategory, onSelect }: CategoryFilterProps) => {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState<string[]>([]);

    const toggleExpand = (label: string) => {
        setExpanded((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
    };

    return (
        <div className="w-full">
            <h3
                className="mb-[20px] text-[20px] font-bold leading-[24px] text-[#111111]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
                {title}
            </h3>

            <ul className="space-y-[6px]">
                {CATEGORY_MENU.map((item) => {
                    const isExpanded = expanded.includes(item.label);
                    const isActive =
                        stripQuery(item.href) === pathname ||
                        (item.value ? selectedCategory === item.value : false);
                    const hasChildren = Boolean(item.children?.length);

                    return (
                        <li key={item.label}>
                            <div className="flex items-center gap-[5px] py-[10px]">
                                {hasChildren ? (
                                    <button
                                        type="button"
                                        aria-label={`Toggle ${item.label}`}
                                        onClick={() => toggleExpand(item.label)}
                                        className="flex h-[14px] w-[14px] items-center justify-center"
                                    >
                                        <svg
                                            className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path d="M3 2 7 5 3 8V2Z" fill={isActive ? '#111111' : '#777777'} />
                                        </svg>
                                    </button>
                                ) : (
                                    <span className="h-[14px] w-[14px]" />
                                )}

                                <Link
                                    href={item.href}
                                    onClick={() => onSelect(item.value ?? null)}
                                    className={`text-[14px] leading-[14px] ${
                                        isActive ? 'font-medium text-black' : 'font-normal text-black'
                                    }`}
                                    style={{ fontFamily: '"Work Sans", sans-serif' }}
                                >
                                    {item.label}
                                </Link>
                            </div>

                            {hasChildren && isExpanded && (
                                <ul className="ml-[19px] space-y-[2px] pb-[6px]">
                                    {item.children?.map((child) => (
                                        <li key={child.href}>
                                            <Link
                                                href={child.href}
                                                onClick={() => onSelect(item.value ?? null)}
                                                className="block py-[6px] text-[13px] leading-[18px] text-[#3f3f3f] hover:text-black"
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CategoryFilter;
