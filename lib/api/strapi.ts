import { StrapiProduct, StrapiResponse, Product } from '../types/strapi';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.STRAPI_API_URL || 'http://localhost:1337/api';

/**
 * Fetch products from Strapi CMS
 */
export async function fetchProducts(params?: {
  limit?: number;
  populate?: string[];
  filters?: Record<string, any>;
  sort?: string[];
}): Promise<Product[]> {
  try {
    const limit = params?.limit || 100;
    const populate = params?.populate || ['images', 'category', 'brand'];
    const filters = params?.filters || {};
    const sort = params?.sort || ['createdAt:desc'];

    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append('pagination[limit]', limit.toString());
    queryParams.append('populate', populate.join(','));
    queryParams.append('sort', sort.join(','));

    // Add filters
    if (Object.keys(filters).length > 0) {
      Object.entries(filters).forEach(([key, value]) => {
        queryParams.append(`filters[${key}]`, JSON.stringify(value));
      });
    }

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add authorization if token exists
    const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN;
    if (apiToken) {
      headers['Authorization'] = `Bearer ${apiToken}`;
    }

    const response = await fetch(
      `${STRAPI_API_URL}/products?${queryParams.toString()}`,
      {
        headers,
        cache: 'no-store', // Always fetch fresh data (or use 'force-cache' for caching)
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data: StrapiResponse<StrapiProduct[]> = await response.json();
    
    // Transform Strapi products to our Product type
    return data.data.map(transformStrapiProduct);
  } catch (error) {
    console.error('Error fetching products from Strapi:', error);
    throw error;
  }
}

/**
 * Fetch a single product by slug
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN;
    if (apiToken) {
      headers['Authorization'] = `Bearer ${apiToken}`;
    }

    const response = await fetch(
      `${STRAPI_API_URL}/products?filters[slug][$eq]=${slug}&populate=images,category,brand`,
      {
        headers,
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const data: StrapiResponse<StrapiProduct[]> = await response.json();
    
    if (data.data.length === 0) {
      return null;
    }

    return transformStrapiProduct(data.data[0]);
  } catch (error) {
    console.error('Error fetching product from Strapi:', error);
    throw error;
  }
}

/**
 * Transform Strapi product to our Product type
 */
function transformStrapiProduct(strapiProduct: StrapiProduct): Product {
  // Get image URL
  let imageUrl: string | undefined;
  if (strapiProduct.attributes.images?.data) {
    const image = strapiProduct.attributes.images.data.attributes;
    // Use the appropriate image format, fallback to original
    imageUrl = image.formats?.large?.url || 
               image.formats?.medium?.url || 
               image.formats?.small?.url || 
               image.url;
    
    // Prepend Strapi URL if image URL is relative
    if (imageUrl && !imageUrl.startsWith('http')) {
      const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace('/api', '') || 'http://localhost:1337';
      imageUrl = `${strapiBaseUrl}${imageUrl}`;
    }
  }

  // Transform badges - ensure they match our allowed types
  const allowedBadges: ('Dry' | 'Halal' | 'Veg' | 'Vegan')[] = ['Dry', 'Halal', 'Veg', 'Vegan'];
  let badges: ('Dry' | 'Halal' | 'Veg' | 'Vegan')[] | undefined;
  if (strapiProduct.attributes.badges && Array.isArray(strapiProduct.attributes.badges)) {
    badges = strapiProduct.attributes.badges.filter((badge): badge is ('Dry' | 'Halal' | 'Veg' | 'Vegan') =>
      allowedBadges.includes(badge as any)
    ) as ('Dry' | 'Halal' | 'Veg' | 'Vegan')[];
  }

  // Calculate discount if originalPrice exists
  let discount: number | undefined;
  if (strapiProduct.attributes.originalPrice && strapiProduct.attributes.originalPrice > strapiProduct.attributes.price) {
    discount = Math.round(
      ((strapiProduct.attributes.originalPrice - strapiProduct.attributes.price) / strapiProduct.attributes.originalPrice) * 100
    );
  } else if (strapiProduct.attributes.discount) {
    discount = strapiProduct.attributes.discount;
  }

  return {
    id: strapiProduct.id,
    title: strapiProduct.attributes.title,
    price: strapiProduct.attributes.price,
    originalPrice: strapiProduct.attributes.originalPrice || undefined,
    discount,
    badges,
    imageUrl,
    expiryDate: strapiProduct.attributes.expiryDate || undefined,
    slug: strapiProduct.attributes.slug,
    description: strapiProduct.attributes.description || undefined,
    inStock: strapiProduct.attributes.inStock,
  };
}

