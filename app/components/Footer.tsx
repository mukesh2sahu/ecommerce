import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-32 border-t border-gray-700/50 overflow-hidden">
      {/* Enhanced Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-t from-orange-500/20 to-transparent blur-sm rounded-t-full"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-4 mb-8 group hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white w-14 h-14 rounded-xl flex items-center justify-center font-black text-2xl shadow-premium group-hover:shadow-premium-lg group-hover:scale-110 transition-all duration-500">
                  A
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white group-hover:text-orange-300 transition-colors duration-300">Mukesh Shop</div>
                <div className="text-sm text-gray-400 font-bold group-hover:text-orange-400 transition-colors duration-300">Premium Veg & Vegan</div>
              </div>
            </Link>
            <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-sm font-medium">
              Your trusted source for premium vegetarian and vegan products from around the world. Quality products, authentic flavors, delivered with care.
            </p>
            {/* Enhanced Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group border border-gray-700/50 hover:border-transparent hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                <div className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group border border-gray-700/50 hover:border-transparent hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-pink-500/25"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-200" />
                <div className="absolute inset-0 rounded-xl bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-800/80 backdrop-blur-sm hover:bg-blue-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group border border-gray-700/50 hover:border-transparent hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-200" />
                <div className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-800/80 backdrop-blur-sm hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group border border-gray-700/50 hover:border-transparent hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-200" />
                <div className="absolute inset-0 rounded-xl bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/shipping', label: 'Shipping Policy' },
                { href: '/returns', label: 'Returns & Refunds' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider relative inline-block">
              Customer Service
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/contact', label: 'Contact Us', icon: Phone },
                { href: '/about', label: 'About Us' },
                { href: '/locations', label: 'Store Locations', icon: MapPin },
                { href: '/careers', label: 'Careers' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {link.icon && <link.icon className="w-4 h-4 text-orange-500" />}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Newsletter */}
          <div className="relative">
            <h3 className="text-white font-black text-lg mb-8 uppercase tracking-wider relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
              <div className="absolute -bottom-1 left-0 w-8 h-1 bg-gradient-to-r from-orange-500/50 to-transparent rounded-full blur-sm"></div>
            </h3>
            <p className="text-base text-gray-400 mb-8 leading-relaxed font-medium">
              Subscribe to receive updates on new products, special offers, and exclusive deals delivered to your inbox.
            </p>
            <form className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-400 transition-colors duration-300" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-14 pr-5 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400/50 text-sm transition-all duration-300 font-medium"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-red-500 hover:to-pink-500 text-white px-6 py-4 rounded-xl hover:shadow-premium hover:shadow-orange-500/25 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-3 group hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Subscribe Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </button>
            </form>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/10 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Payment Methods */}
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-4 font-medium">Accepted Payment Methods</p>
              <div className="flex flex-wrap gap-2">
                {['Visa', 'Mastercard', 'JCB', 'American Express'].map((method) => (
                  <div
                    key={method}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-xs font-semibold text-gray-300 hover:border-orange-500/50 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400 mb-2">
                © {new Date().getFullYear()} Mukesh Shop. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Made with ❤️ for premium vegetarian and vegan products
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
