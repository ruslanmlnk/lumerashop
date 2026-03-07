export interface ProductFilterValue {
    group: string;
    option: string;
    groupSlug?: string;
    optionSlug?: string;
}

export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    slug: string;
    category: string;
    sku?: string;
    description?: string;
    gallery?: string[];
    specifications?: Record<string, string>;
    filterValues?: ProductFilterValue[];
    isFeatured?: boolean;
    isRecommended?: boolean;
}

export interface NavItem {
    label: string;
    href: string;
    dropdown?: NavItem[];
}

export interface Category {
    name: string;
    bg: string;
    product?: string;
    href: string;
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    text: string;
    author: string;
    location: string;
}

export interface BlogPost {
    title: string;
    excerpt: string;
    content?: string;
    date?: string;
    image: string;
    slug: string;
}
