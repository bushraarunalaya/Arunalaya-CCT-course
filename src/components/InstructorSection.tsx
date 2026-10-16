import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

interface InstructorSectionProps {
  onOpenEnroll: () => void;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section id="instructor" className="relative py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Master Trainer & Tapedia Founder
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Learn from <span className="text-amber-700">Dr. Chakshu Bansal</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Clinical Taping taught with practical logic, surface anatomy precision, and high-stakes athletic field experience.
          </p>
        </div>

        {/* 2-Column Split: Instructor Profile & InBL Pro Sports Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Authentic Photo & Credentials (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
              <img
                src="https://raw.githubusercontent.com/Adi-Ida404/Arunalaya-course/main/chakshu%20maam%20profile.jpeg"
                alt="Dr. Chakshu Bansal - Founder of Tapedia & Physioneeds Academy"
                className="w-full h-[470px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/physio_applying_tape_1792140962068.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-900 shadow-sm">
                <h3 className="font-heading font-bold text-slate-900 text-base">
                  Dr. Chakshu Bansal
                </h3>
                <p className="text-amber-800 font-mono text-[11px] font-semibold mt-0.5">
                  Ph.D. Scholar (USA) · MPT (Musculoskeletal) · Certified Taping Master Trainer (Canada)
                </p>
                <p className="text-slate-600 text-[11px] mt-2">
                  Founder of Tapedia (World's 1st Taping Encyclopedia) & Physioneeds Academy.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Pedagogy & Clinical Leadership (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                Clinical Pedagogy & Real-World Exposure
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-snug">
                Understand Not Just How to Apply Tape, But Why and When
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dr. Chakshu Bansal brings a clinical, application-grounded teaching methodology. Having trained thousands of physiotherapists worldwide, she bridges textbook anatomical science with fast-paced clinical decisions.
              </p>
            </div>

            {/* Core Badges List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Founder of Tapedia</strong>
                  <span className="text-slate-500 text-[11px]">Developer of the comprehensive clinical taping encyclopedia.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Lead Physio InBL Pro (2025)</strong>
                  <span className="text-slate-500 text-[11px]">Direct on-court athlete treatment in professional basketball league.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Co-Developer of KKMT</strong>
                  <span className="text-slate-500 text-[11px]">KinetiKinetic Manual Therapy with Prof. (Dr.) Krishna N. Sharma.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Live Clinic Grounding</strong>
                  <span className="text-slate-500 text-[11px]">Practicing at Arunalaya Healthcare, Patel Nagar, New Delhi.</span>
                </div>
              </div>
            </div>

            {/* Featured Media Logos */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 font-medium block mb-2">Featured In Publications & Media:</span>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                <img
                  src="https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/2Ja0scomt5.png"
                  alt="Media features Dr. Chakshu Bansal"
                  className="max-h-11 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-98 transition-all cursor-pointer"
              >
                <span>Learn With Dr. Chakshu Bansal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* InBL Pro 2025 Sports Experience */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                Sideline Professional Sports Exposure
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mt-1">
                Lead Physio at InBL Pro (2025) Basketball League
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              On-Court Athlete Care · Emergency Fast Taping
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* InBL Athlete Squad Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white group shadow-xs">
              <img
                src="https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/AJiTxinbl1.jpg"
                alt="Lead Physio InBL Pro 2025 with professional basketball athletes"
                className="w-full h-64 object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs font-bold text-white">Professional Basketball Athletes at InBL Pro</span>
                <span className="text-[11px] text-slate-200">Preventative joint strapping and high-velocity deceleration management</span>
              </div>
            </div>

            {/* InBL On-Court Treatment Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white group shadow-xs">
              <img
                src="https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/6ITiuinbl2.jpg"
                alt="On-court sports physiotherapy athlete treatment at InBL Pro"
                className="w-full h-64 object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs font-bold text-white">Direct Sideline Athlete Treatment</span>
                <span className="text-[11px] text-slate-200">Emergency sideline taping and acute injury triage under clock pressure</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
