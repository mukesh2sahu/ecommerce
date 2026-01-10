// Strapi Product Types
export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail?: {
          url: string;
        };
        small?: {
          url: string;
        };
        medium?: {
          url: string;
        };
        large?: {
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
}

export interface StrapiProduct {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string | null;
    price: number;
    originalPrice: number | null;
    discount: number | null;
    inStock: boolean;
    stockQuantity: number | null;
    expiryDate: string | null;
    badges: string[] | null;
    images: StrapiImage;
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      } | null;
    };
    brand: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      } | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  badges?: ('Dry' | 'Halal' | 'Veg' | 'Vegan')[];
  imageUrl?: string;
  expiryDate?: string;
  slug: string;
  description?: string;
  inStock: boolean;
}

