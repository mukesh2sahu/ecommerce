import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';
import { fetchProducts } from '@/lib/api/strapi';
import { Product } from '@/lib/types/strapi';

const categories = [
  { name: 'Spices', icon: '🌶️', color: 'from-red-500 to-orange-500' },
  { name: 'Fresh Produce', icon: '🥬', color: 'from-green-500 to-emerald-500' },
  { name: 'Rice & Dal', icon: '🍚', color: 'from-amber-500 to-yellow-500' },
  { name: 'Bakery & Snacks', icon: '🍪', color: 'from-rose-500 to-pink-500' },
  { name: 'Tea & Beverages', icon: '☕', color: 'from-amber-600 to-orange-600' },
  { name: 'Frozen Products', icon: '🧊', color: 'from-cyan-500 to-blue-500' },
];

const features = [
  {
    icon: '🚚',
    title: 'Free Shipping',
    description: 'On orders over ¥5,000',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    description: 'Safe and encrypted transactions',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    description: '30-day return policy',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '⭐',
    title: 'Premium Quality',
    description: 'Authentic products guaranteed',
    gradient: 'from-orange-500 to-amber-500',
  },
];

export default async function Home() {
  // Fetch featured products from Strapi (server-side)
  let featuredProducts: Product[] = [];
  try {
    const products = await fetchProducts({
      limit: 8,
      populate: ['images', 'category', 'brand'],
      filters: {
        publishedAt: { $notNull: true },
      },
      sort: ['createdAt:desc'],
    });
    featuredProducts = products;
  } catch (error) {
    console.error('Error fetching products from Strapi:', error);
    // Continue with empty array if fetch fails - ProductsGrid will handle the empty state
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Promotional Banner */}
      <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-ping" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Sparkles className="w-6 h-6 animate-pulse text-yellow-300" />
                  <div className="absolute inset-0 w-6 h-6 bg-yellow-300/50 rounded-full blur-sm animate-ping"></div>
                </div>
                <span className="font-bold text-lg lg:text-xl tracking-wide">SPECIAL OFFER</span>
              </div>
              <div className="hidden lg:block w-px h-8 bg-white/30"></div>
              <p className="text-white/90 font-medium text-sm lg:text-base">
                🎉 Free Shipping on Orders Over ¥5,000 + Get 10% Off Your First Order!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/products"
                className="group relative bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button className="text-white/70 hover:text-white transition-colors duration-300 text-xl leading-none">
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-3 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </section>

      <main className="overflow-hidden">
        {/* Hero Section with Enhanced Styling */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 py-20 lg:py-32 overflow-hidden">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-orange-50/40 backdrop-blur-3xl"></div>
          {/* Enhanced Animated Background Elements with Parallax */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none parallax">
            {/* Main gradient orbs with enhanced effects */}
            <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/40 via-amber-200/30 to-red-200/20 rounded-full blur-3xl animate-pulse animate-morph shadow-2xl shadow-orange-500/20" style={{animationDelay: '0s'}} data-speed="0.5"></div>
            <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/35 via-indigo-200/25 to-purple-200/15 rounded-full blur-3xl animate-pulse animate-morph shadow-2xl shadow-blue-500/15" style={{animationDelay: '2s'}} data-speed="0.3"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-100/25 via-yellow-100/20 to-orange-100/15 rounded-full blur-3xl animate-pulse animate-morph shadow-2xl shadow-pink-500/10" style={{animationDelay: '4s'}} data-speed="0.2"></div>

            {/* Floating geometric shapes with premium animations */}
            <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-red-400/25 rounded-lg rotate-45 animate-float shadow-lg shadow-orange-500/20" style={{animationDelay: '1s', animationDuration: '6s'}} data-speed="0.8"></div>
            <div className="absolute top-64 right-32 w-16 h-16 bg-gradient-to-br from-blue-400/35 to-purple-400/25 rounded-full animate-float shadow-lg shadow-blue-500/20" style={{animationDelay: '2.5s', animationDuration: '8s'}} data-speed="0.6"></div>
            <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-green-400/30 to-teal-400/25 rounded-lg animate-float shadow-lg shadow-green-500/20" style={{animationDelay: '0.5s', animationDuration: '7s'}} data-speed="0.4"></div>

            {/* Additional floating elements with enhanced styling */}
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400/40 to-orange-400/30 rounded-full animate-float shadow-md shadow-yellow-500/25" style={{animationDelay: '3s', animationDuration: '5s'}} data-speed="0.7"></div>
            <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-gradient-to-br from-purple-400/35 to-pink-400/25 rounded-lg rotate-12 animate-float shadow-md shadow-purple-500/20" style={{animationDelay: '1.5s', animationDuration: '6.5s'}} data-speed="0.5"></div>

            {/* Premium dot pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04]" data-speed="0.1">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Mesh gradient overlay for depth */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl">
              {/* Enhanced Premium Badge with sophisticated styling */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-red-500/15 border border-orange-200/60 rounded-full text-sm font-bold text-orange-800 mb-8 shadow-2xl shadow-orange-500/20 backdrop-blur-md hover:shadow-orange-500/30 transition-all duration-500 hover:scale-105">
                <div className="relative">
                  <Sparkles className="w-5 h-5 animate-pulse text-orange-600" />
                  <div className="absolute inset-0 w-5 h-5 bg-orange-400/60 rounded-full blur-md animate-ping" style={{animationDuration: '3s'}}></div>
                  <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-50 animate-pulse" style={{animationDuration: '2s'}}></div>
                </div>
                <span className="relative z-10 tracking-wide">Premium Quality Products</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 animate-pulse" style={{animationDuration: '4s'}}></div>
              </div>

              {/* Premium Typography with advanced effects */}
              <h1 className="text-5xl lg:text-8xl font-black text-gray-900 mb-10 leading-[0.9] tracking-tight">
                <span className="block mb-3 relative">
                  Premium
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-80"></div>
                </span>
                <span className="relative block mb-3">
                  <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-sm">
                    Vegetarian
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x blur-sm opacity-50"></div>
                </span>
                <span className="block mt-3 relative">
                  & Non Vegetarian Products
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed max-w-3xl font-light relative">
                Discover authentic flavors from{' '}
                <span className="font-bold text-orange-700 hover:text-orange-800 transition-colors duration-300 cursor-pointer relative">
                  India
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </span>
                ,{' '}
                <span className="font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 cursor-pointer relative">
                  Nepal
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </span>
                , and across{' '}
                <span className="font-bold text-green-700 hover:text-green-800 transition-colors duration-300 cursor-pointer relative">
                  Asia
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </span>
                . Quality products for your kitchen, delivered fresh to your door.
              </p>

              {/* Premium CTA Buttons with advanced styling */}
              <div className="flex flex-col sm:flex-row gap-8 mb-20">
                <Link
                  href="/products"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl hover:shadow-2xl hover:shadow-gray-900/50 hover:scale-105 transition-all duration-500 font-bold text-lg overflow-hidden shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <span className="relative z-10 drop-shadow-sm">Shop Now</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 drop-shadow-sm" />
                  <div className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 rounded-3xl"></div>
                </Link>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white/90 backdrop-blur-lg text-gray-900 border-2 border-gray-200/60 rounded-3xl hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-500 font-bold text-lg shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">Learn More</span>
                  <div className="relative z-10 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-150 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/50"></div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Premium Stats with sophisticated design */}
              <div className="grid grid-cols-3 gap-8">
                <div className="group text-center p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 hover:bg-white/90 hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">10K+</div>
                    <div className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Happy Customers</div>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
                <div className="group text-center p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">500+</div>
                    <div className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Products</div>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
                <div className="group text-center p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 hover:bg-white/90 hover:shadow-2xl hover:shadow-green-500/15 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-br from-green-600 via-teal-600 to-emerald-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">50+</div>
                    <div className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Brands</div>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-green-500 via-teal-500 to-emerald-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories with Enhanced Design */}
        <section className="py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden animate-slide-up">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 text-orange-600 font-bold mb-8 px-6 py-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border-2 border-orange-200/50 shadow-lg shadow-orange-500/10 backdrop-blur-sm">
                <div className="relative">
                  <TrendingUp className="w-6 h-6 animate-pulse" />
                  <div className="absolute inset-0 w-6 h-6 bg-orange-400/30 rounded-full blur-md animate-ping" style={{animationDuration: '3s'}}></div>
                </div>
                <span className="text-lg tracking-wide">Shop by Category</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Explore Our{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-sm">
                    Collections
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x blur-sm opacity-50"></div>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Browse our wide selection of premium products organized by category with authentic flavors from around the world
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative bg-white/90 backdrop-blur-lg border-2 border-gray-100/60 rounded-3xl p-10 text-center hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-300/60 transition-all duration-500 overflow-hidden hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Premium Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`}></div>

                  {/* Animated Multi-layer Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/30 via-red-500/20 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-[2px] rounded-3xl bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Premium Icon with Advanced Effects */}
                    <div className="relative mb-8">
                      <div className="text-7xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 ease-out filter group-hover:drop-shadow-2xl group-hover:brightness-110">
                        {category.icon}
                      </div>
                      {/* Multi-layer Glow Effect */}
                      <div className={`absolute inset-0 text-7xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md ${category.icon} group-hover:blur-lg`}></div>
                      <div className={`absolute inset-0 text-7xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl ${category.icon}`}></div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-base group-hover:text-orange-700 transition-colors duration-300 uppercase tracking-wider mb-2">
                      {category.name}
                    </h3>

                    {/* Enhanced Indicator */}
                    <div className="w-12 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                  </div>

                  {/* Premium Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/15 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Enhanced Floating Particles */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 shadow-lg"></div>
                  <div className="absolute bottom-6 left-6 w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 shadow-lg" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 shadow-lg" style={{animationDelay: '1s'}}></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 rounded-3xl"></div>
                </Link>
              ))}
            </div>

            {/* Premium Call to Action */}
            <div className="text-center mt-20">
              <p className="text-gray-600 mb-8 font-medium text-lg">Can&apos;t find what you&apos;re looking for?</p>
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-105 transition-all duration-500 font-bold text-lg overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <span className="relative z-10">View All Products</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 rounded-2xl"></div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products with Enhanced Styling */}
        <section className="py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden animate-slide-up stagger-2">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4">
                <Award className="w-5 h-5" />
                Featured Products
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Discover Our{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Best Sellers
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked selection of our most popular and recommended products
              </p>
            </div>
            <ProductsGrid initialProducts={featuredProducts} featured={true} limit={8} />
            <div className="text-center mt-16">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:shadow-2xl hover:shadow-gray-900/25 hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                View All Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section with Enhanced Design */}
        <section className="py-28 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden animate-slide-up stagger-3">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-100/25 to-purple-100/15 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  Mukesh Shop?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                We&apos;re committed to providing the best shopping experience with premium quality products and exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-100/50 rounded-3xl p-8 text-center hover-lift hover:shadow-premium-lg hover:border-orange-200/50 transition-all duration-500 overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Enhanced Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Premium Icon Container */}
                    <div className="relative mb-8">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                        <span className="text-4xl filter drop-shadow-sm">{feature.icon}</span>
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 lg:py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden animate-slide-up stagger-4">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of satisfied customers and discover authentic flavors today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Browse Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
