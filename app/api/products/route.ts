import { NextResponse } from 'next/server';
import { fetchProducts } from '@/lib/api/strapi';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const category = searchParams.get('category');
    const featured = searchParams.get('featured') === 'true';

    // Build filters
    const filters: Record<string, any> = {
      publishedAt: { $notNull: true }, // Only published products
    };

    if (category) {
      filters.category = {
        slug: { $eq: category },
      };
    }

    if (featured) {
      filters.featured = { $eq: true };
    }

    const products = await fetchProducts({
      limit,
      populate: ['images', 'category', 'brand'],
      filters,
      sort: featured ? ['createdAt:desc'] : ['createdAt:desc'],
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error in products API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

