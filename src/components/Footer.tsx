import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Award } from 'lucide-react';
import { ENROLLMENT_URL, WHATSAPP_CONTACTS, OFFICIAL_LOGO_URL } from '../data/courseData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mission with Official Logo */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Physioneeds Academy Logo"
                className="h-10 w-auto object-contain bg-white rounded-lg p-1"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-heading uppercase font-bold text-base leading-tight">
                Physioneeds Academy
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Certification in Clinical Taping (CCT) is the flagship multi-system taping programme of Physioneeds Academy, combining clinical reasoning, video demos, and international accreditation.
            </p>
            <div className="pt-1 text-[11px] font-mono text-[#FBB02E] font-bold">
              8 CPD Hours · IAOTH (UK) & IRAP Recognised
            </div>
          </div>

          {/* Clinical Headquarters */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Clinical Headquarters
            </h4>
            <div className="space-y-1.5 text-slate-400 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FBB02E] shrink-0 mt-0.5" />
                <span>Arunalaya Healthcare, Patel Nagar, New Delhi, India</span>
              </p>
              <p className="text-slate-500 text-[11px]">
                Ashira Innovations Pvt Ltd · International Delivery from London, UK
              </p>
            </div>
          </div>

          {/* Academic Inquiries */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Admissions & Support
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              {WHATSAPP_CONTACTS.map((c, i) => (
                <p key={i} className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                  <a
                    href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(c.phone)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 font-mono transition-colors"
                  >
                    {c.display}
                  </a>
                </p>
              ))}
              <p className="text-slate-500 text-[11px] pt-1">
                Website: <a href="https://www.e-physioneeds.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBB02E] underline">www.e-physioneeds.com</a>
              </p>
            </div>
          </div>

          {/* Official Course Actions */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Official Reference
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href={ENROLLMENT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FBB02E] underline">
                  Course Official Page (64525a61e4b070504d0f60c3)
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-slate-200">
                  4 Taping Systems
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-slate-200">
                  9-Module Curriculum
                </a>
              </li>
              <li>
                <a href="#instructor" className="hover:text-slate-200">
                  Dr. Chakshu Bansal
                </a>
              </li>
              <li>
                <a href="https://www.e-physioneeds.com/refundpolicy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">
                  Cancellation & Refund Terms
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Professional Disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Physioneeds Academy. All rights reserved.
          </div>
          <div className="text-center md:text-right text-[10px] text-slate-500 max-w-xl">
            Taping is taught as an evidence-based supportive adjunct to assessment-led physiotherapy and rehabilitation. Clinical scope is governed by your local regulatory board and qualification.
          </div>
        </div>

      </div>
    </footer>
  );
};
