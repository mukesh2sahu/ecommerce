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
    <header className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center font-bold text-lg lg:text-xl shadow-lg">
                A
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                Ambika Shop
              </span>
              <span className="text-xs text-gray-500 font-medium hidden sm:block">
                Premium Veg & Vegan
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative flex w-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative flex w-full rounded-xl border-2 border-gray-200 focus-within:border-gray-900 focus-within:shadow-lg transition-all duration-200 bg-gray-50/50">
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  className="flex-1 px-6 py-3 text-sm bg-transparent focus:outline-none placeholder:text-gray-400 text-gray-900"
                />
                <button className="px-6 bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center transition-all duration-200 rounded-r-xl group/btn">
                  <Search className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 lg:gap-5">
            {/* Language Selector */}
            <div className="relative hidden md:block" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group"
              >
                <Globe className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                <span className="hidden lg:inline">{language}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-xl border border-gray-200 z-50 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <button 
                    className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all" 
                    onClick={() => { setLanguage('English'); setLangMenuOpen(false); }}
                  >
                    English
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all" 
                    onClick={() => { setLanguage('नेपाली'); setLangMenuOpen(false); }}
                  >
                    नेपाली
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all" 
                    onClick={() => { setLanguage('日本語'); setLangMenuOpen(false); }}
                  >
                    日本語
                  </button>
                </div>
              )}
            </div>

            {/* Account */}
            <Link 
              href="/account" 
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group"
            >
              <User className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
              <span className="hidden lg:inline">Account</span>
            </Link>

            {/* Cart */}
            <button className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 group">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  0
                </span>
              </div>
              <span className="hidden lg:inline">Cart</span>
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

        {/* Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 border-t border-gray-100 py-4">
          <Link 
            href="/" 
            className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-3/4 transition-all duration-300"></span>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setCategoryMenuOpen(true)}
            onMouseLeave={() => setCategoryMenuOpen(false)}
          >
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
              Categories
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoryMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {categoryMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl border border-gray-200 rounded-2xl py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[600px] overflow-y-auto">
                {categories.map((category, index) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-orange-50 hover:text-gray-900 transition-all duration-150 border-l-4 border-transparent hover:border-orange-500"
                    style={{ animationDelay: `${index * 20}ms` }}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link 
            href="/about" 
            className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 relative group"
          >
            About
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-3/4 transition-all duration-300"></span>
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-3/4 transition-all duration-300"></span>
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
