import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, BookOpen, Clock, Search } from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/courseData';

interface CurriculumSectionProps {
  onOpenEnroll: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenEnroll }) => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    '01': true,
    '02': false,
    '03': false
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModule = (number: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [number]: !prev[number]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    CURRICULUM_MODULES.forEach((m) => {
      all[m.number] = true;
    });
    setExpandedModules(all);
  };

  const collapseAll = () => {
    setExpandedModules({});
  };

  const filteredModules = CURRICULUM_MODULES.filter((m) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q) ||
      m.lessons.some((l) => l.toLowerCase().includes(q))
    );
  });

  return (
    <section id="curriculum" className="relative py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Complete 9-Module Syllabus · 8 CPD Hours
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Everything You Learn <span className="text-amber-700">Inside CCT</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive, step-by-step clinical progression from foundational dermatological mechanics to multi-tape hybrid sports applications.
          </p>
        </div>

        {/* Toolbar: Search & Expand/Collapse Controls */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search curriculum modules or techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600 font-medium self-end sm:self-center">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              Expand all
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-amber-700 transition-colors cursor-pointer"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* Curriculum Modules Accordion */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredModules.map((module) => {
            const isExpanded = !!expandedModules[module.number];
            return (
              <div
                key={module.number}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-amber-300 overflow-hidden transition-all duration-200 shadow-xs"
              >
                {/* Module Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.number)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {module.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono font-semibold text-amber-800 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-600" /> {module.hours}
                        </span>
                        <span className="text-[10px] text-slate-400">·</span>
                        <span className="text-[10px] text-slate-500 font-mono">{module.lessons.length} Core Topics</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Module Content Drawer */}
                {isExpanded && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100 space-y-3 bg-slate-50/40">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200/80">
                      {module.summary}
                    </p>

                    <div className="space-y-2 pt-1">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Practical Lessons & Competencies:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {module.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-10 text-center">
          <button
            type="button"
            onClick={onOpenEnroll}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-sm active:scale-98 transition-all cursor-pointer"
          >
            <span>Unlock Full 9-Module Curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
