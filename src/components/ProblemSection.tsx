import React from 'react';
import { HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import physioApplyingTape from '../assets/images/physio_applying_tape_1792140962068.jpg';

interface ProblemSectionProps {
  onOpenEnroll: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenEnroll }) => {
  const problems = [
    {
      q: 'Confused between kinesio, rigid, and semi-elastic tape?',
      solution: 'Learn the exact biomechanical indications, elasticity limits, and clinical roles of all four taping types.'
    },
    {
      q: 'Not sure how much stretch or tension to apply?',
      solution: 'Master precise tension gradients: 0-15% for lymphatics, 25-50% for muscle facilitation, 75-100% for mechanical locking.'
    },
    {
      q: 'Applying tape without clear clinical reasoning?',
      solution: 'Move beyond visual imitation to vector analysis, mechanoreceptor stimulation, and fascial line concepts.'
    },
    {
      q: 'Unable to use taping confidently in on-field sports cases?',
      solution: 'Follow proven Sideline Emergency and Return-to-Play (RTP) protocols tested on professional basketball & track athletes.'
    },
    {
      q: 'Patients ask “what does this tape do?” and you feel hesitant?',
      solution: 'Explain the physiological neuro-sensory gating, fluid decompression, and movement facilitation with total authority.'
    },
    {
      q: 'Learned taping in college once but forgot the technique steps?',
      solution: 'Lifetime access to pre-recorded practical video demonstrations allows you to watch, pause, and revise before any case.'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              The Real Clinical Challenge
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Most Physios Know Taping Visually… <br className="hidden sm:inline" />
            <span className="text-amber-700">
              But Don’t Know When, Why & How to Use It
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Watching random social media taping videos is not enough. In real clinical practice, you need to know the right tape material, right tension percentage, right anatomical direction, and right clinical purpose.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: The 6 Questions & Solutions */}
          <div className="lg:col-span-7 space-y-3.5">
            {problems.map((item, idx) => (
              <div
                key={idx}
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all duration-200 shadow-xs"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-amber-900 transition-colors">
                      {item.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item.solution}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 flex items-center justify-start">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-sm active:scale-98 transition-all cursor-pointer"
              >
                <span>Yes, I Want Clinical Taping Skills</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clinical Photo & Note */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group bg-white">
              <img
                src={physioApplyingTape}
                alt="Physiotherapist applying kinesiology tape with clinical reasoning"
                className="w-full h-[470px] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              {/* Floating Clinical Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-800 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-heading font-bold text-slate-900 text-xs">
                    Clinical Logic Over Guesswork
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Every strip applied in CCT is anchored in surface anatomy, muscle fiber lines, and physiological loading principles.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <span className="font-medium">📚 8 CPD Hours Accredited</span>
              <span className="font-mono text-amber-800 font-semibold">Arunalaya Healthcare Patel Nagar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
