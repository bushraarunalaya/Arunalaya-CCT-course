import React from 'react';
import { ArrowRight, Activity, Crosshair, Sparkles } from 'lucide-react';
import { CLINICAL_APPLICATIONS } from '../data/courseData';

interface ClinicalApplicationsProps {
  onOpenEnroll: () => void;
}

export const ClinicalApplications: React.FC<ClinicalApplicationsProps> = ({ onOpenEnroll }) => {
  return (
    <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Real Clinical & Sports Scenarios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Use Taping in <span className="text-amber-700">Real Patient & Sports Cases</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From acute sports field injuries to outpatient clinic rehabilitation, master clinical taping protocols grounded in anatomical lines, biomechanics, and evidence-based adjunct therapy.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICAL_APPLICATIONS.map((app, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              {/* Photo Area */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* System Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono font-semibold text-slate-800">
                  {app.system}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-amber-700 font-bold uppercase tracking-wider">
                    {app.bodyArea}
                  </div>
                  <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium italic">
                    {app.condition}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {app.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">8 CPD Units</span>
                  <span className="text-amber-700 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore case →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Value Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-300/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-heading font-bold text-slate-900">
              Upgrade Your Entire Clinical Skillset Today
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              One payment · Lifetime access · Practical demos · Verified Certificate · Mentor support
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenEnroll}
            className="px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-98 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Claim Course Offer Now
          </button>
        </div>

      </div>
    </section>
  );
};
