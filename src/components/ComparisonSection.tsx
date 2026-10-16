import React from 'react';
import { Check, X, Shield, Layers, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenEnroll: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section className="relative py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Programme Selection Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            CCT vs CKT: <span className="text-amber-700">Which Course Should You Choose?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent guide to help you choose between the comprehensive multi-system course (CCT) and the single-system deep specialist program (CKT).
          </p>
        </div>

        {/* 2 Comparison Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: CCT (Featured Course) */}
          <div className="rounded-3xl bg-white border-2 border-amber-500 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                This Course · Recommended
              </span>
            </div>

            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-amber-800 font-bold">
                  Multi-System Clinical Umbrella
                </span>
                <h3 className="text-2xl font-heading font-bold text-slate-900">
                  CCT: Certification in Clinical Taping
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ideal for physiotherapists and sports therapists who need multi-system versatility across clinics, gyms, and sports sidelines.
                </p>
              </div>

              {/* Feature Matrix */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>4 Taping Systems:</strong> Kinesiology, Rigid, Semi-Elastic & Sports</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>Clinical Reasoning:</strong> Cross-system comparative selection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>Sports RTP & Sideline:</strong> Fast emergency application rules</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>Special Populations:</strong> Neuro, Paediatrics & Women’s Health</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>Credential Suffix:</strong> Authorised CCT course suffix</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>CPD Allocation:</strong> 8 Accredited CPD Hours</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="w-full py-4 rounded-xl text-sm font-semibold text-center text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in CCT Course Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: CKT (Specialist) */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold">
                  Single-System Elastic Specialist
                </span>
                <h3 className="text-2xl font-heading font-bold text-slate-800">
                  CKT: Certification in Kinesiology Taping
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Dedicated deep dive into 130+ elastic kinesiology-only patterns for clinicians who exclusively apply elastic wave-adhesive tape.
                </p>
              </div>

              {/* Feature Matrix */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 font-bold" />
                  <span><strong>1 Taping System:</strong> Kinesiology tape exclusively</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 font-bold" />
                  <span><strong>130+ Specific Cuts:</strong> Exhaustive regional anatomy library</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <X className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>No Rigid Zinc Oxide joint immobilization</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <X className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>No Semi-Elastic dynamic recoil bands</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 font-bold" />
                  <span><strong>Credential Suffix:</strong> Authorised CKT specialist suffix</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 font-bold" />
                  <span>Ideal follow-up after completing CCT multi-system breadth</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-center font-medium">
                Recommendation: Start with CCT for multi-system clinical breadth, then take CKT for kinesiology depth.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
