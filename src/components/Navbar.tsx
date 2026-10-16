import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from '../data/courseData';

interface NavbarProps {
  onOpenEnroll: () => void;
  selectedCurrency: string;
  onSelectCurrency: (curr: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnroll,
  selectedCurrency,
  onSelectCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '4 Taping Systems', href: '#systems' },
    { label: 'Practical Demos', href: '#demos' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Instructor', href: '#instructor' },
    { label: 'FAQs', href: '#faqs' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Zone with Official Physioneeds Academy Logo */}
        <a
          href="#"
          className="flex items-center gap-3.5 shrink-0 group py-1"
        >
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Physioneeds Academy Logo"
            className="h-10 sm:h-11 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-heading font-bold tracking-tight text-slate-900 leading-none">
              Physioneeds Academy
            </span>
            <span className="text-xs font-medium text-amber-700 tracking-wide mt-1">
              Certificate in Clinical Taping (CCT)
            </span>
          </div>
        </a>

        {/* 4–5 Clean Navigation Links with Eye-Friendly Typography */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-700 hover:underline underline-offset-8 decoration-amber-400 decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Currency Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Currency Selector */}
          <div className="hidden sm:flex items-center bg-slate-100 border border-slate-200/90 rounded-xl p-0.5 text-xs text-slate-600">
            {(['INR', 'USD'] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => onSelectCurrency(curr)}
                className={`px-2.5 py-1 rounded-lg font-mono font-medium transition-all cursor-pointer ${
                  selectedCurrency === curr
                    ? 'bg-white text-slate-900 font-bold shadow-xs'
                    : 'hover:text-slate-900 text-slate-600'
                }`}
              >
                {curr === 'INR' ? '₹ INR' : '$ USD'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenEnroll}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-sm active:scale-98 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 py-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-600">
            <span className="font-medium">Select Currency:</span>
            <div className="flex items-center gap-1">
              {(['INR', 'USD'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => onSelectCurrency(curr)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                    selectedCurrency === curr ? 'bg-amber-600 text-white font-bold' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {curr === 'INR' ? '₹ INR' : '$ USD'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-amber-700 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnroll();
            }}
            className="w-full mt-2 py-3 rounded-xl text-center text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-sm transition-colors"
          >
            Enroll in CCT Now
          </button>
        </div>
      )}
    </header>
  );
};
