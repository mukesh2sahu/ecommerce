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

      <main className="overflow-hidden">
        {/* Hero Section with Enhanced Styling */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-orange-300/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-blue-300/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full text-sm font-semibold text-orange-700 mb-6">
                <Sparkles className="w-4 h-4" />
                Premium Quality Products
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Premium{' '}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Vegetarian
                </span>{' '}
                & Vegan Products
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Discover authentic flavors from India, Nepal, and across Asia. Quality products for your kitchen, delivered fresh to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:shadow-2xl hover:shadow-gray-900/25 hover:scale-105 transition-all duration-300 font-semibold text-lg"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Brands</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories with Enhanced Design */}
        <section className="py-20 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4">
                <TrendingUp className="w-5 h-5" />
                Shop by Category
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Collections
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our wide selection of premium products organized by category
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-900 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products with Enhanced Styling */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16">
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
        <section className="py-20 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Ambika Shop?
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best shopping experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
