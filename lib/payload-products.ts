import 'server-only';
import { ALL_PRODUCTS } from '@/data/site-data';
import type { Product, ProductFilterValue } from '@/types/site';

type PayloadListResponse<T> = {
    docs?: T[];
};

type PayloadFilterOption = {
    name?: unknown;
    slug?: unknown;
    group?: {
        name?: unknown;
        slug?: unknown;
    } | null;
};

type PayloadProductDoc = {
    id?: unknown;
    name?: unknown;
    price?: unknown;
    imageUrl?: unknown;
    slug?: unknown;
    sku?: unknown;
    description?: unknown;
    category?: {
        name?: unknown;
    } | number | null;
    mainImage?: {
        url?: unknown;
    } | number | null;
    gallery?: Array<{
        imageUrl?: unknown;
        image?: {
            url?: unknown;
        } | number | null;
    }> | null;
    specifications?: Array<{
        key?: unknown;
        value?: unknown;
    }> | null;
    filterOptions?: Array<PayloadFilterOption | number> | null;
    isFeatured?: unknown;
    isRecommended?: unknown;
};

const DEFAULT_PAYLOAD_API_URL = 'http://127.0.0.1:3001';

const formatPrice = (value: number) => `${new Intl.NumberFormat('cs-CZ').format(value)} Kč`;

const resolveUrl = (value: unknown, baseUrl: string): string | null => {
    if (typeof value !== 'string' || value.length === 0) {
        return null;
    }

    if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/assets/')) {
        return value;
    }

    if (value.startsWith('/')) {
        return `${baseUrl}${value}`;
    }

    return `${baseUrl}/${value}`;
};

const toSpecificationsObject = (specs: PayloadProductDoc['specifications']): Record<string, string> | undefined => {
    if (!Array.isArray(specs) || specs.length === 0) {
        return undefined;
    }

    const result: Record<string, string> = {};
    for (const spec of specs) {
        const key = typeof spec?.key === 'string' ? spec.key.trim() : '';
        const value = typeof spec?.value === 'string' ? spec.value.trim() : '';
        if (!key || !value) continue;
        result[key] = value;
    }

    return Object.keys(result).length ? result : undefined;
};

const toFilterValues = (options: PayloadProductDoc['filterOptions']): ProductFilterValue[] | undefined => {
    if (!Array.isArray(options) || options.length === 0) {
        return undefined;
    }

    const result: ProductFilterValue[] = [];
    for (const raw of options) {
        if (!raw || typeof raw !== 'object') continue;

        const option = typeof raw.name === 'string' ? raw.name.trim() : '';
        const optionSlug = typeof raw.slug === 'string' ? raw.slug.trim() : undefined;
        const group = typeof raw.group?.name === 'string' ? raw.group.name.trim() : '';
        const groupSlug = typeof raw.group?.slug === 'string' ? raw.group.slug.trim() : undefined;

        if (!group || !option) continue;

        result.push({ group, option, groupSlug, optionSlug });
    }

    return result.length ? result : undefined;
};

const mapPayloadProduct = (doc: PayloadProductDoc, baseUrl: string): Product | null => {
    const name = typeof doc.name === 'string' ? doc.name : '';
    const slug = typeof doc.slug === 'string' ? doc.slug : '';
    const id = doc.id != null ? String(doc.id) : '';
    const category =
        typeof doc.category === 'object' && doc.category && typeof doc.category.name === 'string'
            ? doc.category.name
            : 'Nezařazené';

    if (!id || !name || !slug) {
        return null;
    }

    const numericPrice = typeof doc.price === 'number' ? doc.price : Number(doc.price);
    const price = Number.isFinite(numericPrice) ? formatPrice(Math.round(numericPrice)) : '0 Kč';

    const mainUploadUrl =
        typeof doc.mainImage === 'object' && doc.mainImage ? resolveUrl(doc.mainImage.url, baseUrl) : null;
    const imageUrl = resolveUrl(doc.imageUrl, baseUrl);
    const image = mainUploadUrl || imageUrl || '/assets/products/placeholder.webp';

    const galleryUrls = Array.isArray(doc.gallery)
        ? doc.gallery
              .map((item) => {
                  const uploaded =
                      typeof item?.image === 'object' && item.image ? resolveUrl(item.image.url, baseUrl) : null;
                  const linked = resolveUrl(item?.imageUrl, baseUrl);
                  return uploaded || linked;
              })
              .filter((value): value is string => Boolean(value))
        : [];

    const gallery = galleryUrls.length ? galleryUrls : [image];

    return {
        id,
        name,
        price,
        image,
        slug,
        category,
        sku: typeof doc.sku === 'string' ? doc.sku : undefined,
        description: typeof doc.description === 'string' ? doc.description : undefined,
        gallery,
        specifications: toSpecificationsObject(doc.specifications),
        filterValues: toFilterValues(doc.filterOptions),
        isFeatured: doc.isFeatured === true,
        isRecommended: doc.isRecommended === true,
    };
};

export async function fetchPayloadProducts(): Promise<Product[]> {
    const baseUrlRaw = process.env.PAYLOAD_API_URL?.trim() || DEFAULT_PAYLOAD_API_URL;
    const baseUrl = baseUrlRaw.replace(/\/+$/, '');

    try {
        const response = await fetch(
            `${baseUrl}/api/products?where[status][equals]=published&depth=3&limit=500&sort=-updatedAt`,
            {
                cache: 'no-store',
                next: { revalidate: 0 },
            },
        );

        if (!response.ok) {
            return ALL_PRODUCTS;
        }

        const payload = (await response.json()) as PayloadListResponse<PayloadProductDoc>;
        const docs = Array.isArray(payload.docs) ? payload.docs : [];
        const mapped = docs
            .map((doc) => mapPayloadProduct(doc, baseUrl))
            .filter((product): product is Product => Boolean(product));

        return mapped.length ? mapped : ALL_PRODUCTS;
    } catch {
        return ALL_PRODUCTS;
    }
}
