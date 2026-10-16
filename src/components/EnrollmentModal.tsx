import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Award, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS, ENROLLMENT_URL, WHATSAPP_CONTACTS, OFFICIAL_LOGO_URL } from '../data/courseData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCurrency: string;
  onSelectCurrency: (curr: string) => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  selectedCurrency,
  onSelectCurrency
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('Physiotherapist (BPT/MPT)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS[selectedCurrency] || PRICING_PLANS.INR;

  const handleProceedToCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      window.open(ENROLLMENT_URL, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Physioneeds Academy, I would like to enrol in the Certification in Taping (CCT) course.\n\nName: ${fullName || 'Interested Candidate'}\nQualification: ${profession}\nSelected Currency: ${currentPlan.currency} (${currentPlan.symbol}${currentPlan.price})`
    );
    window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(WHATSAPP_CONTACTS[0].phone)}&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 my-auto text-left">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Physioneeds Logo"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-semibold">
              Official Enrollment Portal · Physioneeds Academy
            </span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Certification in Clinical Taping (CCT)
          </h3>
          <p className="text-xs text-slate-600">
            Complete the form below to lock in your 75% discounted enrollment fee and proceed to secure checkout.
          </p>
        </div>

        {/* Selected Plan Summary Banner */}
        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono text-slate-500 font-medium">Selected Currency Plan:</div>
            <div className="text-xl font-heading font-bold text-slate-900 flex items-baseline gap-2">
              <span>{currentPlan.symbol}{currentPlan.price.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-400 line-through">{currentPlan.symbol}{currentPlan.mrp.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-emerald-700 font-mono font-semibold">One-Time Fee</span>
            </div>
          </div>

          {/* Quick Currency Switcher */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-mono">
            {Object.keys(PRICING_PLANS).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onSelectCurrency(c)}
                className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                  selectedCurrency === c ? 'bg-amber-600 text-white font-bold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleProceedToCheckout} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name (as it will appear on your Certificate)
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Sarah Jenkins, PT"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="physio@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+1 or +91..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Professional Qualification / Role
            </label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500"
            >
              <option value="Physiotherapist (BPT/MPT)">Physiotherapist (BPT/MPT)</option>
              <option value="Physiotherapy Intern / Student">Physiotherapy Intern / Student</option>
              <option value="Sports Physiotherapist / Rehab Specialist">Sports Physiotherapist / Rehab Specialist</option>
              <option value="Manual Therapist / Orthopaedic Clinician">Manual Therapist / Orthopaedic Clinician</option>
              <option value="Clinic Owner / Healthcare Practitioner">Clinic Owner / Healthcare Practitioner</option>
            </select>
          </div>

          {/* Inclusions */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 space-y-1.5 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Includes 4 Taping Systems + Pre-recorded Demo Videos + 8 CPD Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Lifetime Access · London UK Credential · Authorised CCT Suffix</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Opening Secure Checkout...' : 'Proceed to Secure Checkout'}</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3 rounded-xl font-medium text-xs text-slate-700 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat with Academic Counsellor on WhatsApp</span>
            </button>
          </div>
        </form>

        <div className="text-center text-[10px] text-slate-500 font-mono">
          Physioneeds Academy (Ashira Innovations Pvt Ltd) · Arunalaya Healthcare Patel Nagar
        </div>

      </div>
    </div>
  );
};
