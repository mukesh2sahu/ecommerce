'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, User, ChevronDown, Search, Globe } from 'lucide-react';
import Link from 'next/link';

const categories = [
  'Spices',
  'Fresh Produce',
  'Rice & Dal',
  'Atta & Rava',
  'Ghee & Oil',
  'Nuts & Dryfruits',
  'Pickles & Chutneys',
  'Ready to Eat',
  'Frozen Products',
  'Bakery & Snacks',
  'Tea & Beverages',
  'Health & Beauty',
  'Special Offers'
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

  return (
    <header className={`bg-white/95 backdrop-blur-lg border-b border-gradient-to-r from-orange-200/30 via-pink-200/20 to-purple-200/30 sticky top-0 z-50 transition-all duration-500 relative overflow-hidden ${
      scrolled ? 'shadow-premium-lg bg-white/98' : 'shadow-premium bg-white/95'
    }`}>
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249,115,22,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {/* Premium gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Premium Logo */}
          <Link
            href="/"
            className="group flex items-center gap-4 hover:scale-105 transition-all duration-500 relative"
          >
            {/* Animated ring effect */}
            <div className="absolute inset-0 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-pink-400/15 to-purple-400/20 animate-pulse"></div>
            </div>

            <div className="relative">
              {/* Multi-layer glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Main logo with enhanced gradient */}
              <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center font-black text-xl lg:text-3xl shadow-premium group-hover:shadow-premium-lg group-hover:scale-110 transition-all duration-500 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"></div>
                <span className="relative z-10 drop-shadow-lg">M</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl lg:text-3xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-orange-600 transition-all duration-300 relative">
                Mukesh Shop
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"></div>
              </span>
              <span className="text-xs lg:text-sm text-gray-500 font-bold hidden sm:block group-hover:text-orange-600 transition-all duration-300 relative">
                Premium Veg & Vegan Products
                <div className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-700 delay-100"></div>
              </span>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-200"></div>
          </Link>

          {/* Premium Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-3xl mx-8">
            <div className="relative flex w-full group">
              {/* Multi-layer glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-pink-400/20 to-purple-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-focus-within:opacity-25 transition-opacity duration-500"></div>

              <div className="relative flex w-full rounded-3xl border-2 border-gray-200/60 focus-within:border-orange-400/80 focus-within:shadow-premium-lg focus-within:shadow-orange-500/15 transition-all duration-500 bg-white/90 backdrop-blur-lg hover:bg-white/95 shadow-lg hover:shadow-xl">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-pink-500/15 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[2px] rounded-[22px] bg-white/90"></div>

                <input
                  type="text"
                  placeholder="🔍 Search for premium products, brands, categories..."
                  className="relative z-10 flex-1 px-8 py-5 text-base bg-transparent focus:outline-none placeholder:text-gray-400 text-gray-900 font-medium rounded-l-3xl"
                />

                <button className="relative z-10 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:from-orange-500 hover:to-red-500 hover:via-pink-500 flex items-center justify-center transition-all duration-500 rounded-r-3xl group/btn shadow-xl hover:shadow-2xl hover:shadow-orange-500/30">
                  <Search className="w-5 h-5 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-r-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 rounded-r-3xl"></div>
                </button>
              </div>

              {/* Search Suggestions Dropdown (placeholder) */}
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-premium opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 max-h-64 overflow-hidden">
                <div className="p-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Popular Searches</div>
                  <div className="space-y-2">
                    {['Spices', 'Rice & Dal', 'Fresh Produce', 'Tea & Beverages'].map((item) => (
                      <div key={item} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Language Selector */}
            <div className="relative hidden md:block" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-200/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="relative">
                  <Globe className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors duration-300" />
                  <div className="absolute inset-0 w-4 h-4 bg-orange-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="hidden lg:inline font-bold">{language}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''} group-hover:text-orange-500`} />
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-md shadow-premium rounded-2xl border border-gray-200/50 z-50 py-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <button
                    className="block w-full text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 flex items-center gap-3"
                    onClick={() => { setLanguage('English'); setLangMenuOpen(false); }}
                  >
                    <span className="text-lg">🇺🇸</span>
                    English
                  </button>
                  <button
                    className="block w-full text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 flex items-center gap-3"
                    onClick={() => { setLanguage('नेपाली'); setLangMenuOpen(false); }}
                  >
                    <span className="text-lg">🇳🇵</span>
                    नेपाली
                  </button>
                  <button
                    className="block w-full text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 flex items-center gap-3"
                    onClick={() => { setLanguage('日本語'); setLangMenuOpen(false); }}
                  >
                    <span className="text-lg">🇯🇵</span>
                    日本語
                  </button>
                </div>
              )}
            </div>

            {/* Account */}
            <Link
              href="/account"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-transparent hover:border-blue-200/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative">
                <User className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                <div className="absolute inset-0 w-5 h-5 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="hidden lg:inline font-bold">Account</span>
            </Link>

            {/* Enhanced Cart */}
            <button className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 border border-transparent hover:border-green-200/50 transition-all duration-300 group hover:scale-105">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors duration-300" />
                <div className="absolute inset-0 w-5 h-5 bg-green-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-black shadow-premium animate-pulse">
                  0
                </span>
              </div>
              <span className="hidden lg:inline font-bold">Cart</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-2 border-t border-gray-200/50 py-6 bg-gradient-to-r from-transparent via-gray-50/30 to-transparent">
          <Link
            href="/"
            className="px-5 py-3 text-sm font-bold text-gray-700 hover:text-orange-600 hover:bg-orange-50/80 rounded-xl transition-all duration-300 relative group hover:scale-105 border border-transparent hover:border-orange-200/50"
          >
            Home
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-4/5 rounded-full transition-all duration-300"></span>
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCategoryMenuOpen(true)}
            onMouseLeave={() => setCategoryMenuOpen(false)}
          >
            <button className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all duration-300 group hover:scale-105 border border-transparent hover:border-blue-200/50">
              Categories
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${categoryMenuOpen ? 'rotate-180' : ''} group-hover:text-blue-500`} />
            </button>
            {categoryMenuOpen && (
              <div className="absolute top-full left-0 mt-4 w-80 bg-white/95 backdrop-blur-md shadow-premium-lg border border-gray-200/50 rounded-3xl py-4 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 max-h-[600px] overflow-y-auto">
                <div className="px-4 mb-3">
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Shop by Category</div>
                </div>
                {categories.map((category, index) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 border-l-4 border-transparent hover:border-orange-500 flex items-center gap-3 group/item"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                    {category}
                    <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all duration-200 transform translate-x-2 group-hover/item:translate-x-0">
                      →
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="px-5 py-3 text-sm font-bold text-gray-700 hover:text-purple-600 hover:bg-purple-50/80 rounded-xl transition-all duration-300 relative group hover:scale-105 border border-transparent hover:border-purple-200/50"
          >
            About
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4/5 rounded-full transition-all duration-300"></span>
          </Link>

          <Link
            href="/contact"
            className="px-5 py-3 text-sm font-bold text-gray-700 hover:text-green-600 hover:bg-green-50/80 rounded-xl transition-all duration-300 relative group hover:scale-105 border border-transparent hover:border-green-200/50"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 group-hover:w-4/5 rounded-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top duration-200">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="flex w-full rounded-lg border-2 border-gray-200 focus-within:border-gray-900 transition-all">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-4 py-2.5 text-sm focus:outline-none bg-gray-50 rounded-l-lg"
                />
                <button className="px-4 bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center rounded-r-lg">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <Link 
                href="/" 
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${categoryMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {categoryMenuOpen && (
                <div className="pl-4 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
              <Link 
                href="/about" 
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/account" 
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
