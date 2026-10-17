import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { PRICING_PLANS, WHATSAPP_CONTACTS, OFFICIAL_LOGO_URL } from '../data/courseData';

interface StickyEnrollBarProps {
  onOpenEnroll: () => void;
  selectedCurrency: string;
}

export const StickyEnrollBar: React.FC<StickyEnrollBarProps> = ({
  onOpenEnroll,
  selectedCurrency
}) => {
  const [visible, setVisible] = useState(false);
  const currentPlan = PRICING_PLANS[selectedCurrency] || PRICING_PLANS.INR;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Enrollment Action"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-lg transition-transform duration-300 animate-slideUp"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between gap-4">
        
        {/* Left: Logo & Price */}
        <div className="flex items-center gap-3.5 min-w-0">
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Physioneeds Logo"
            className="h-8 w-auto hidden sm:block object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          <div className="hidden md:flex flex-col">
            <span className="text-xs font-heading font-bold text-slate-900 leading-tight">
              Certification in Clinical Taping (CCT)
            </span>
            <span className="text-[11px] text-amber-800 font-medium">4 Taping Systems · 8 CPD Hours</span>
          </div>

          <div className="flex items-baseline gap-1.5 font-mono">
            <span className="text-base sm:text-lg font-bold text-slate-900">
              ₹ 3600
            </span>
            <span className="text-xs text-slate-400 line-through hidden sm:inline">
              ₹ 12000
            </span>
            <span className="text-xs text-emerald-700 font-semibold hidden lg:inline">
              · 70% Off Lifetime
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(WHATSAPP_CONTACTS[0].phone)}&text=${encodeURIComponent('Hi, I want to enrol in the Certification in Taping (CCT) course.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-emerald-800 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px]">Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenEnroll}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-98 transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
