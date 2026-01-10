import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 mt-24 border-t border-gray-800">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
                  A
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Ambika Shop</div>
                <div className="text-xs text-gray-400 font-medium">Premium Veg & Vegan</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Your trusted source for premium vegetarian and vegan products from around the world. Quality products, authentic flavors.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group border border-gray-700 hover:border-transparent"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group border border-gray-700 hover:border-transparent"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group border border-gray-700 hover:border-transparent"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 group border border-gray-700 hover:border-transparent"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
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

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Subscribe to receive updates on new products, special offers, and exclusive deals.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 text-sm font-semibold flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
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
                © {new Date().getFullYear()} Ambika Shop. All rights reserved.
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
