import 'server-only';
import { BLOG_POSTS } from '@/data/site-data';
import {
    DEFAULT_LOCAL_ASSET_FALLBACK,
    getLocalAssetPath,
    getRenderableAssetPath,
} from '@/lib/local-assets';
import type { BlogPost } from '@/types/site';

const DEFAULT_PAYLOAD_API_URL = 'http://127.0.0.1:3001';

type PayloadMediaDoc = {
    url?: unknown;
};

type PayloadArticleDoc = {
    slug?: unknown;
    title?: unknown;
    mainImage?: PayloadMediaDoc | number | null;
    description?: unknown;
    content?: any;
    updatedAt?: unknown;
};

type PayloadListResponse<T> = {
    docs?: T[];
};

const resolveUrl = (value: unknown, baseUrl: string): string => {
    if (typeof value !== 'string' || value.length === 0) {
        return DEFAULT_LOCAL_ASSET_FALLBACK;
    }

    const normalizedValue = getLocalAssetPath(value);
    if (!normalizedValue) {
        return DEFAULT_LOCAL_ASSET_FALLBACK;
    }

    if (normalizedValue.startsWith('/assets/')) {
        return normalizedValue;
    }

    if (normalizedValue.startsWith('http://') || normalizedValue.startsWith('https://')) {
        if (normalizedValue.startsWith(baseUrl)) {
            return normalizedValue;
        }
        return getRenderableAssetPath(normalizedValue, DEFAULT_LOCAL_ASSET_FALLBACK);
    }

    if (normalizedValue.startsWith('/')) {
        return `${baseUrl}${normalizedValue}`;
    }

    return `${baseUrl}/${normalizedValue}`;
};

const resolveArticleImage = (doc: PayloadArticleDoc, baseUrl: string): string => {
    if (typeof doc.mainImage === 'object' && doc.mainImage) {
        const url = resolveUrl(doc.mainImage.url, baseUrl);
        return url !== DEFAULT_LOCAL_ASSET_FALLBACK ? url : DEFAULT_LOCAL_ASSET_FALLBACK;
    }
    return DEFAULT_LOCAL_ASSET_FALLBACK;
};

function renderLexicalToHTML(node: any): string {
    if (!node) return '';

    if (typeof node === 'string') return node;

    if (Array.isArray(node)) {
        return node.map(renderLexicalToHTML).join('');
    }

    if (node.type === 'root') {
        return renderLexicalToHTML(node.children);
    }

    if (node.type === 'paragraph') {
        return `<p>${renderLexicalToHTML(node.children)}</p>`;
    }

    if (node.type === 'heading') {
        const tag = `h${node.tag ? node.tag.replace('h', '') : '2'}`;
        return `<${tag}>${renderLexicalToHTML(node.children)}</${tag}>`;
    }

    if (node.type === 'list') {
        const tag = node.listType === 'number' ? 'ol' : 'ul';
        return `<${tag}>${renderLexicalToHTML(node.children)}</${tag}>`;
    }

    if (node.type === 'listitem') {
        return `<li>${renderLexicalToHTML(node.children)}</li>`;
    }

    if (node.type === 'quote') {
        return `<blockquote>${renderLexicalToHTML(node.children)}</blockquote>`;
    }

    if (node.type === 'link') {
        const url = node.fields?.url || '#';
        return `<a href="${url}">${renderLexicalToHTML(node.children)}</a>`;
    }

    if (node.type === 'text') {
        let text = node.text || '';
        if (node.format & 1) text = `<strong>${text}</strong>`; // bold
        if (node.format & 2) text = `<em>${text}</em>`; // italic
        if (node.format & 8) text = `<u>${text}</u>`; // underline
        if (node.format & 16) text = `<code>${text}</code>`; // code
        return text;
    }

    // fallback for unknown types that have children
    if (node.children) {
        return renderLexicalToHTML(node.children);
    }

    return '';
}

const mapPayloadArticle = (doc: PayloadArticleDoc, baseUrl: string): BlogPost | null => {
    const title = typeof doc.title === 'string' ? doc.title.trim() : '';
    const slug = typeof doc.slug === 'string' ? doc.slug.trim() : '';

    if (!title || !slug) {
        return null;
    }

    const excerpt = typeof doc.description === 'string' ? doc.description : '';
    const image = resolveArticleImage(doc, baseUrl);

    let contentHtml = '';
    if (doc.content) {
        contentHtml = renderLexicalToHTML(doc.content);
    }

    let date = 'Nedatováno';
    if (typeof doc.updatedAt === 'string') {
        const d = new Date(doc.updatedAt);
        if (!isNaN(d.getTime())) {
            date = d.toLocaleDateString('cs-CZ', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }
    }

    return {
        title,
        slug,
        excerpt,
        image,
        content: contentHtml,
        date
    };
};

export async function fetchPayloadArticles(): Promise<BlogPost[]> {
    const baseUrlRaw = process.env.PAYLOAD_API_URL?.trim() || DEFAULT_PAYLOAD_API_URL;
    const baseUrl = baseUrlRaw.replace(/\/+$/, '');

    try {
        const response = await fetch(`${baseUrl}/api/article?limit=100&sort=-updatedAt`, {
            cache: 'no-store',
            next: { revalidate: 0 },
        });

        if (!response.ok) {
            return BLOG_POSTS;
        }

        const payload = (await response.json()) as PayloadListResponse<PayloadArticleDoc>;
        const docs = Array.isArray(payload.docs) ? payload.docs : [];
        const mapped = docs
            .map((doc) => mapPayloadArticle(doc, baseUrl))
            .filter((post): post is BlogPost => Boolean(post));

        return mapped.length ? mapped : BLOG_POSTS;
    } catch {
        return BLOG_POSTS; // fallback to hardcoded
    }
}
