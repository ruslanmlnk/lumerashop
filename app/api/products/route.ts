import { NextRequest, NextResponse } from 'next/server';
import { fetchPayloadProducts } from '@/lib/payload-products';

export async function GET(request: NextRequest) {
    const products = await fetchPayloadProducts();
    const searchParams = request.nextUrl.searchParams;

    const slug = searchParams.get('slug');
    const featured = searchParams.get('featured');
    const recommended = searchParams.get('recommended');
    const category = searchParams.get('category');

    let result = products;

    if (slug) {
        result = result.filter((product) => product.slug === slug);
    }

    if (featured === '1' || featured === 'true') {
        result = result.filter((product) => product.isFeatured);
    }

    if (recommended === '1' || recommended === 'true') {
        result = result.filter((product) => product.isRecommended);
    }

    if (category) {
        result = result.filter((product) => product.category === category);
    }

    return NextResponse.json({ products: result });
}
