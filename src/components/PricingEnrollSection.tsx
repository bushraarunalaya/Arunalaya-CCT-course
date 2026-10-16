import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Phone, MessageSquare, Clock, Award } from 'lucide-react';
import { PRICING_PLANS, ENROLLMENT_URL, WHATSAPP_CONTACTS } from '../data/courseData';

interface PricingEnrollSectionProps {
  onOpenEnroll: () => void;
  selectedCurrency: string;
  onSelectCurrency: (curr: string) => void;
}

export const PricingEnrollSection: React.FC<PricingEnrollSectionProps> = ({
  onOpenEnroll,
  selectedCurrency,
  onSelectCurrency
}) => {
  const currentPlan = PRICING_PLANS[selectedCurrency] || PRICING_PLANS.INR;

  const features = [
    'Official Certification in Clinical Taping',
    'Authorized right to use the professional "CCT" suffix',
    'Complete Kinesiology Taping method & biomechanics',
    'Rigid Zinc-Oxide mechanical joint locking protocols',
    'Semi-Elastic dynamic recoil & functional loading',
    'Sideline Sports Taping & acute return-to-play rules',
    'Pre-recorded practical video demos (watch, pause, repeat)',
    'Official Certificate with unique QR code verification',
    'Direct mentor support from Dr. Chakshu Bansal',
    'Real patient & athletic clinical case demonstrations',
    '8 Accredited CPD Hours (CPD Standards Office UK)',
    'Lifetime access with zero recurring renewal fees'
  ];

  return (
    <section id="enroll" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/20 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Limited-Time Single-Payment Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Don’t Just Watch Taping Videos Randomly. <br />
            <span className="text-amber-700">
              Learn It Properly.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Get certified in Clinical Taping with practical demo videos, lifetime access, personal mentor support, and all four major taping types in one comprehensive program.
          </p>
        </div>

        {/* Currency Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {Object.keys(PRICING_PLANS).map((curr) => {
              const isSelected = selectedCurrency === curr;
              return (
                <button
                  key={curr}
                  type="button"
                  onClick={() => onSelectCurrency(curr)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {curr === 'INR' ? '₹ INR (Rupees)' : '$ USD (International)'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-amber-300 shadow-lg p-6 sm:p-10 relative overflow-hidden">
          {/* Top Decorative Amber Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Price Column (5 cols) */}
            <div className="md:col-span-5 space-y-6 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                {currentPlan.badge}
              </span>

              <div className="space-y-1">
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 tracking-tight">
                    {currentPlan.symbol}{currentPlan.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg text-slate-400 line-through font-mono">
                    {currentPlan.symbol}{currentPlan.mrp.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs font-mono text-emerald-700 font-semibold">
                  One-time payment · 70% Off · Zero monthly fees
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Applicable Region: {currentPlan.country}
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={onOpenEnroll}
                  className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Yes, I Want This Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={ENROLLMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-slate-500 hover:text-amber-700 underline font-semibold transition-colors"
                >
                  Direct link to official platform checkout ↗
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-slate-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Secure Checkout Guarantee</span>
                </div>
                <p>Instant credential activation · Lifetime course dashboard</p>
              </div>
            </div>

            {/* Checklist Column (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-700 font-bold">
                Everything Included in Your Enrollment:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Counsellor Support Hotline */}
              <div className="mt-6 pt-5 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Have questions before enrolling? Speak with our Academic Counsellors:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {WHATSAPP_CONTACTS.map((contact, i) => (
                    <a
                      key={i}
                      href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(contact.phone)}&text=${encodeURIComponent('Hi, I have a query regarding the Certification in Taping (CCT) course on e-physioneeds.com')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500/50 flex items-center justify-center gap-2 text-xs text-slate-800 hover:text-emerald-700 transition-colors shadow-xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[11px] font-semibold">{contact.display}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
