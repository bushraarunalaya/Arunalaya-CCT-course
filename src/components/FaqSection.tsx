import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from 'lucide-react';
import { FAQS, WHATSAPP_CONTACTS } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(FAQS.map((f) => f.category)))];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      !faqSearch ||
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faqs" className="relative py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Got Questions? <span className="text-amber-700">We Have Answers.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about course structure, CPD points, clinical reasoning, Arunalaya observership, and international credentials.
          </p>
        </div>

        {/* Search & Category Filter Tabs */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <div className="space-y-1 min-w-0 pr-2">
                    <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Box */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-800">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Still have questions? Our academic counsellors are available on WhatsApp:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {WHATSAPP_CONTACTS.map((c, i) => (
              <a
                key={i}
                href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(c.phone)}&text=${encodeURIComponent('Hi, I have a question about the Certification in Taping (CCT) course.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 text-xs font-mono font-medium text-slate-800 hover:text-emerald-700 transition-colors shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{c.display}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
