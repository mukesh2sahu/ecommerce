import Image from 'next/image';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  badges?: ('Dry' | 'Halal' | 'Veg' | 'Vegan')[];
  imageUrl?: string;
  expiryDate?: string;
}

const badgeColors = {
  'Dry': 'bg-blue-100 text-blue-700 border-blue-200',
  'Halal': 'bg-green-100 text-green-700 border-green-200',
  'Veg': 'bg-orange-100 text-orange-700 border-orange-200',
  'Vegan': 'bg-purple-100 text-purple-700 border-purple-200'
};

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
    <div className="group relative bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-gray-100/60 overflow-hidden hover:shadow-premium-lg hover-lift transition-all duration-500 hover:border-orange-300/60 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20">
      {/* Premium Favorite Button */}
      <button className="absolute top-5 right-5 z-20 w-11 h-11 bg-white/95 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-125 hover:bg-white shadow-xl hover:shadow-2xl hover:shadow-red-500/30 border border-white/50">
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-all duration-300 group-hover:fill-red-500 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Premium Discount Badge */}
      {discount && discount > 0 && (
        <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white text-sm font-black px-4 py-2 rounded-2xl shadow-2xl animate-pulse border-2 border-white/30">
          <div className="relative">
            -{discount}%
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/50 to-pink-400/50 rounded-2xl blur-sm"></div>
          </div>
        </div>
      )}

      {/* Premium Image Container */}
      <div className="relative h-72 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 overflow-hidden">
        {/* Premium background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249,115,22,0.4) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {imageUrl && imageUrl !== '/placeholder-product.jpg' && imageUrl.startsWith('http') ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            unoptimized
          />
        ) : imageUrl && imageUrl !== '/placeholder-product.jpg' ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-3 opacity-50 group-hover:opacity-70 transition-opacity duration-300">📦</div>
              <div className="text-xs text-gray-400 font-medium">Product Image</div>
            </div>
          </div>
        )}

        {/* Premium overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Multi-layer floating particles */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-orange-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
        <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-pink-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-200"></div>
        <div className="absolute top-1/2 right-6 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-400"></div>

        {/* Premium Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="relative bg-white/95 backdrop-blur-lg text-gray-900 px-8 py-3 rounded-2xl font-bold text-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 border-2 border-white/50">
            <span className="relative z-10">Quick View</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-800 rounded-2xl"></div>
          </button>
        </div>
      </div>

      {/* Premium Content Section */}
      <div className="p-8">
        {/* Enhanced Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' : 'text-gray-300'} transition-all duration-200 hover:scale-110`} />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1 font-semibold">(4.2)</span>
          <div className="ml-auto text-xs text-gray-400 font-medium">247 reviews</div>
        </div>

        {/* Premium Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem] leading-tight group-hover:text-orange-600 transition-all duration-300 relative">
          {title}
          <div className="absolute -bottom-1 left-0 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500"></div>
        </h3>

        {/* Premium Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-5">
            {badges.map((badge) => (
              <span
                key={badge}
                className={`inline-block text-xs px-3 py-1.5 rounded-full border-2 font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg ${badgeColors[badge] || 'bg-gray-100 text-gray-600 border-gray-200'} shadow-md`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Premium Expiry Date */}
        {expiryDate && (
          <div className="flex items-center gap-3 mb-5 p-3 bg-orange-50/50 rounded-xl border border-orange-100/50">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm"></div>
            <p className="text-sm text-orange-700 font-bold">Expires: {expiryDate}</p>
          </div>
        )}

        {/* Premium Price and Add to Cart Section */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-gradient-to-r from-orange-200/50 to-pink-200/50">
          <div className="flex flex-col">
            {originalPrice && originalPrice > price ? (
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-gray-900 drop-shadow-sm">¥{price.toLocaleString()}</span>
                <span className="text-base text-gray-400 line-through font-semibold">¥{originalPrice.toLocaleString()}</span>
                <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full font-bold">
                  SAVE ¥{(originalPrice - price).toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-black text-gray-900 drop-shadow-sm">¥{price.toLocaleString()}</span>
            )}
            <span className="text-xs text-gray-500 font-semibold mt-1">including tax</span>
          </div>

          {/* Premium Add to Cart Button */}
          <button className="group/btn relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-3.5 rounded-2xl hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-500 font-bold text-sm shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative flex items-center gap-2.5">
              <ShoppingCart className="w-5 h-5 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-300" />
              <span className="hidden sm:inline group-hover/btn:scale-110 transition-transform duration-200">Add to Cart</span>
            </div>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 rounded-2xl"></div>
          </button>
        </div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/15 via-pink-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>

      {/* Floating accent particles */}
      <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-gradient-to-br from-orange-400/60 to-red-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
      <div className="absolute bottom-4 right-6 w-1 h-1 bg-gradient-to-br from-pink-400/60 to-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-300"></div>
    </div>
  );
}
