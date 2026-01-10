'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/types/strapi';
import { Loader2 } from 'lucide-react';

interface ProductsGridProps {
  initialProducts?: Product[];
  featured?: boolean;
  limit?: number;
}

export default function ProductsGrid({ 
  initialProducts = [], 
  featured = false,
  limit = 8 
}: ProductsGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(!initialProducts.length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch if no initial products provided
    if (initialProducts.length === 0) {
      fetchProducts();
    }
  }, [featured, limit]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (featured) params.append('featured', 'true');
      params.append('limit', limit.toString());

      const response = await fetch(`/api/products?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse"
          >
            <div className="h-64 bg-gray-200"></div>
            <div className="p-5 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ))}
        <div className="col-span-full flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">⚠️ {error}</div>
        <button
          onClick={fetchProducts}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-4">No products found</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="opacity-0 animate-in fade-in slide-in-from-bottom-4"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
        >
          <ProductCard
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            badges={product.badges}
            imageUrl={product.imageUrl}
            expiryDate={product.expiryDate}
          />
        </div>
      ))}
    </div>
  );
}

