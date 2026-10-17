import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Clock, Award, Sparkles, BookOpen } from 'lucide-react';
import { ThreeTapeHero } from './ThreeTapeHero';
import { PRICING_PLANS, ACCREDITATION_LOGOS, VIMEO_VIDEOS } from '../data/courseData';
import heroAthleteTape from '../assets/images/hero_athlete_tape_1792140960116.jpg';

interface HeroSectionProps {
  onOpenEnroll: () => void;
  selectedCurrency: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnroll,
  selectedCurrency
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const currentPlan = PRICING_PLANS[selectedCurrency] || PRICING_PLANS.INR;

  useEffect(() => {
    if (showVideoModal) {
      window.dispatchEvent(new CustomEvent('physio:pause-webgl'));
    } else {
      window.dispatchEvent(new CustomEvent('physio:resume-webgl'));
    }
  }, [showVideoModal]);

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 border-b border-slate-200/80">
      {/* Background soothing warm light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Urgency Strip (Eye-friendly warm amber background) */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-300/80 text-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xs mb-6">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-semibold text-amber-900">Limited-Time Enrollment Offer: 1 Month · 8 CPD Hours</span>
            <span className="hidden md:inline text-slate-600 font-mono">· Clinical Taping Certification at ₹ 3600</span>
          </div>

          <button
            type="button"
            onClick={onOpenEnroll}
            className="px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Claim Offer Now →
          </button>
        </div>

        {/* Professional Suffix Hook Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 font-mono text-xs font-bold uppercase tracking-wider shrink-0 border border-amber-200">
              CCT Suffix
            </span>
            <p className="text-sm font-semibold text-slate-800">
              Add <strong className="text-amber-700 font-mono font-bold">CCT</strong> (Certification in Clinical Taping) as Your Verified Professional Credential
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 sm:whitespace-nowrap">
            Issued by Physioneeds Academy, London UK
          </span>
        </div>

        {/* 2-Column Split: Copy on Left, 3D Visual & Video on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-semibold tracking-wider text-amber-700 uppercase font-mono">
                Tapedia — Clinical Taping Encyclopedia
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Master <span className="text-amber-600">Clinical Taping</span> with Practical Demo Videos
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-semibold">Kinesiology Taping + Rigid Taping + Semi-Elastic Taping + Sports Taping</strong> in one comprehensive, practical certification course.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Learn clinical reasoning, surface anatomy mechanics, pre-recorded practical video demos, lifetime access, certificate, and personal support from Dr. Chakshu Bansal.
            </p>

            {/* Inclusions Pill Grid (Soft white cards with subtle slate/amber borders) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-base">🎓</span>
                <span>CCT Course Suffix</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-base">🎥</span>
                <span>Practical Demo Videos</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-base">🩹</span>
                <span>4 Taping Systems</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-base">⏳</span>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-base">🏆</span>
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-base">👩‍⚕️</span>
                <span>Dr. Chakshu Support</span>
              </div>
            </div>

            {/* Price Badge + Primary CTA Box */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="group relative inline-flex items-center justify-center gap-3 px-5 sm:px-8 py-4 rounded-2xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/20 active:scale-98 transition-all cursor-pointer"
              >
                <span>Enroll in CCT Course</span>
                <span className="font-mono text-sm px-2.5 py-0.5 rounded-md bg-amber-700 text-white font-bold">
                  ₹ 3600
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Course Preview</span>
              </button>
            </div>

            {/* Price Guarantee & Trust Note */}
            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="line-through text-slate-400">
                Regular: {currentPlan.symbol}{currentPlan.mrp.toLocaleString('en-IN')}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">70% Special Discount</span>
              <span aria-hidden="true">·</span>
              <span>8 Accredited CPD Hours</span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Simulator + Video Preview Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Interactive Three.js Simulator Canvas */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white p-2">
              <ThreeTapeHero />
            </div>

            {/* Video Promo Teaser Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => setShowVideoModal(true)}
                  className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-300 cursor-pointer group shrink-0"
                >
                  <img
                    src={heroAthleteTape}
                    alt="Athlete kinesiology tape demo preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Course Video Walkthrough</h4>
                  <p className="text-[11px] text-slate-500">Dr. Chakshu Bansal on clinical multi-tape reasoning</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="text-xs font-semibold text-amber-700 hover:text-amber-800 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Play video →
              </button>
            </div>
          </div>

        </div>

        {/* Accreditations Trust Strip (Soft Cards with Official Logos) */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Recognised Continuing Professional Development (CPD) & Global Accreditations
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center">
            {ACCREDITATION_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-300 shadow-xs transition-colors w-full min-h-24"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 max-w-[120px] object-contain mb-1.5"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-[11px] font-semibold text-slate-800 leading-tight">
                  {logo.name}
                </span>
                <span className="text-[9px] text-slate-500 font-mono">
                  {logo.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Vimeo Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">{VIMEO_VIDEOS.heroPromo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                src={`${VIMEO_VIDEOS.heroPromo.url}&autoplay=1`}
                title={VIMEO_VIDEOS.heroPromo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between gap-3 text-xs text-slate-600">
              <span>{VIMEO_VIDEOS.heroPromo.caption}</span>
              <button
                type="button"
                onClick={() => {
                  setShowVideoModal(false);
                  onOpenEnroll();
                }}
                className="text-amber-700 hover:text-amber-800 font-bold"
              >
                Enroll in CCT Course →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
