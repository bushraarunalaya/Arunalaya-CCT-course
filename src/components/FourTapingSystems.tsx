import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Layers, Shield, Zap, Activity } from 'lucide-react';
import { FOUR_TAPING_SYSTEMS } from '../data/courseData';

interface FourTapingSystemsProps {
  onOpenEnroll: () => void;
}

export const FourTapingSystems: React.FC<FourTapingSystemsProps> = ({ onOpenEnroll }) => {
  const [activeTab, setActiveTab] = useState(FOUR_TAPING_SYSTEMS[0].id);
  const currentSystem = FOUR_TAPING_SYSTEMS.find((s) => s.id === activeTab) || FOUR_TAPING_SYSTEMS[0];

  const iconMap: Record<string, React.ReactNode> = {
    kinesiology: <Layers className="w-5 h-5 text-sky-600" />,
    rigid: <Shield className="w-5 h-5 text-amber-600" />,
    'semi-elastic': <Activity className="w-5 h-5 text-indigo-600" />,
    sports: <Zap className="w-5 h-5 text-rose-600" />
  };

  return (
    <section id="systems" className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              4-in-1 Comprehensive Clinical Curriculum
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            One Course. <span className="text-amber-700">Four Powerful Taping Systems.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Instead of buying separate fragmented short courses for kinesiology taping, rigid taping, semi-elastic dynamic taping, and sports taping, you get a complete, unified clinical taping system.
          </p>
        </div>

        {/* 4 Interactive System Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {FOUR_TAPING_SYSTEMS.map((sys) => {
            const isActive = activeTab === sys.id;
            return (
              <button
                key={sys.id}
                type="button"
                onClick={() => setActiveTab(sys.id)}
                className={`flex items-center gap-3 p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-amber-500 shadow-sm ring-1 ring-amber-400/50'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 ${isActive ? 'bg-amber-50' : 'bg-slate-100'}`}>
                  {iconMap[sys.id]}
                </div>
                <div className="min-w-0">
                  <h3 className={`text-sm font-heading font-bold truncate ${isActive ? 'text-slate-950' : 'text-slate-700'}`}>
                    {sys.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {sys.colorName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active System Spotlight Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full border border-amber-200 font-mono font-medium bg-amber-50 text-amber-900">
                    {currentSystem.colorName}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Module Integration: {currentSystem.title}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                  {currentSystem.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-amber-700">
                  Primary Role: {currentSystem.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentSystem.description}
              </p>

              {/* Core Competencies */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Key Clinical Competencies Mastered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {currentSystem.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Cases Mentioned */}
              <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/80 text-xs text-slate-700">
                <span className="text-amber-900 font-bold">Frequent Clinical Presentations: </span>
                <span>{currentSystem.cases}</span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenEnroll}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-98 transition-all cursor-pointer"
                >
                  <span>Learn All 4 Taping Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Reference Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-white">
                <img
                  src={currentSystem.image}
                  alt={`${currentSystem.title} practical demonstration`}
                  className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/runner_knee_tape_1792140959979.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs text-slate-900 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-heading font-bold text-slate-900">Reference Curriculum Asset</span>
                  </div>
                  <span className="font-mono text-[11px] text-amber-800 font-semibold">Tapedia Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
