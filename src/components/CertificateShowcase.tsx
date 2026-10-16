import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, QrCode, ArrowRight, Play } from 'lucide-react';
import { VIMEO_VIDEOS } from '../data/courseData';

interface CertificateShowcaseProps {
  onOpenEnroll: () => void;
}

export const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({ onOpenEnroll }) => {
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const certificates = [
    {
      title: 'Official CCT Certificate Preview',
      src: 'https://d502jbuhuh9wk.cloudfront.net/courses/64525a61e4b070504d0f60c3/BxLm1clinicaltaping.png',
      caption: 'Main official digital and physical certificate issued by Physioneeds Academy London, UK.'
    },
    {
      title: 'Verifiable Suffix & QR Code',
      src: 'https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/ZPNe9certificateinclinicaltaping.png',
      caption: 'Features unique certificate registration number and scannable QR verification.'
    },
    {
      title: 'Accreditation Endorsement',
      src: 'https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/Eud4Tcertificateinclinicaltaping.png',
      caption: 'Endorsed with IAOTH (UK), IRAP and 8 CPD Hours allocation.'
    },
    {
      title: 'Hard Copy Print & Dispatch',
      src: 'https://d502jbuhuh9wk.cloudfront.net/courses/64525a61e4b070504d0f60c3/XtaaCcertificateinclinicaltaping.jpg',
      caption: 'High-grade parchment dispatch available for clinic and wall display.'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Authorised Professional Credential
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Certificate & Hard Copy <span className="text-amber-700">Showcase</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Show the Certificate. Build Instant Clinical Trust. Earn the globally recognized <strong className="text-slate-900 font-semibold">CCT</strong> credential issued by Physioneeds Academy, London, UK.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Certificate Viewer & Thumbnails (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm p-4 sm:p-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200/80">
                <img
                  src={certificates[selectedCertIndex].src}
                  alt={certificates[selectedCertIndex].title}
                  className="w-full h-full object-contain filter drop-shadow-xs"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = certificates[0].src;
                  }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900">{certificates[selectedCertIndex].title}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">{certificates[selectedCertIndex].caption}</p>
                </div>
                <span className="font-mono text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 font-bold shrink-0">
                  {selectedCertIndex + 1} / {certificates.length}
                </span>
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-4 gap-3">
              {certificates.map((cert, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedCertIndex(idx)}
                  className={`h-20 rounded-xl overflow-hidden border p-1 bg-white transition-all cursor-pointer ${
                    selectedCertIndex === idx
                      ? 'border-amber-500 ring-1 ring-amber-400 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Authentic Hard-Copy Video & Suffix Benefits (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Embedded Vimeo Certificate Video (1200956325) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <div className="relative w-full pb-[56.25%] bg-slate-950">
                {isPlayingVideo ? (
                  <iframe
                    src={`${VIMEO_VIDEOS.certificateVideo.url}&autoplay=1`}
                    title={VIMEO_VIDEOS.certificateVideo.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                ) : (
                  <div
                    onClick={() => {
                      setIsPlayingVideo(true);
                      window.dispatchEvent(new CustomEvent('physio:pause-webgl'));
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src="https://d502jbuhuh9wk.cloudfront.net/courses/64525a61e4b070504d0f60c3/XtaaCcertificateinclinicaltaping.jpg"
                      alt="Certificate unboxing packaging demo preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/20" />

                    <div className="relative z-10 flex flex-col items-center gap-2 text-center p-4">
                      <div className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide block">
                        Watch Certificate Unboxing & Packaging Demo
                      </span>
                      <span className="text-[10px] font-mono text-amber-300 block">
                        ⚡ Official Hard-Copy Verification Video
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3 bg-slate-50 flex items-center justify-between text-xs text-slate-700 border-t border-slate-200">
                <span className="font-medium">Unboxing & Hard Copy Verification</span>
                <span className="font-mono text-amber-800 font-semibold">Vimeo Demo</span>
              </div>
            </div>

            {/* Suffix Checklist */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-300/80 space-y-3 shadow-xs">
              <h3 className="text-sm font-heading font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-700" />
                <span>Your Professional Suffix: CCT</span>
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Add <strong className="text-amber-800 font-mono font-bold">, CCT</strong> (Certified in Clinical Taping) to your professional letterhead, clinic signage, LinkedIn profile, and resume.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Issued by Physioneeds Academy, London, UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>8 Accredited CPD Hours included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Individual QR Code & Unique ID verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Recognised internationally across 191 countries</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onOpenEnroll}
                  className="w-full py-3.5 rounded-xl text-xs font-semibold text-center text-white bg-amber-600 hover:bg-amber-700 shadow-xs active:scale-98 transition-all cursor-pointer"
                >
                  Get Certified in Clinical Taping
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
