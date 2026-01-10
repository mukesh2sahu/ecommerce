import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  badges?: ('Dry' | 'Halal' | 'Veg' | 'Vegan')[];
  imageUrl?: string;
  expiryDate?: string;
}

export default function ProductCard({
  title,
  price,
  originalPrice,
  discount,
  badges = [],
  imageUrl = '/placeholder-product.jpg',
  expiryDate
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300">
      {/* Image Container */}
      <div className="relative h-64 bg-gray-50 overflow-hidden">
        {discount && discount > 0 && (
          <div className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md z-10">
            -{discount}%
          </div>
        )}
        {imageUrl && imageUrl !== '/placeholder-product.jpg' && imageUrl.startsWith('http') ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        ) : imageUrl && imageUrl !== '/placeholder-product.jpg' ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <div className="text-5xl mb-2">📦</div>
              <div className="text-xs">Product Image</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem] leading-snug">
          {title}
        </h3>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-block text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Expiry Date */}
        {expiryDate && (
          <p className="text-xs text-gray-500 mb-3 font-medium">Expires: {expiryDate}</p>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            {originalPrice && originalPrice > price ? (
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-gray-900">¥{price.toLocaleString()}</span>
                <span className="text-sm text-gray-400 line-through">¥{originalPrice.toLocaleString()}</span>
              </div>
            ) : (
              <span className="text-xl font-semibold text-gray-900">¥{price.toLocaleString()}</span>
            )}
            <span className="text-xs text-gray-500 block mt-0.5">with tax</span>
          </div>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
