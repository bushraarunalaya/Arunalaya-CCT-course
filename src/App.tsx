/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { FourTapingSystems } from './components/FourTapingSystems';
import { PracticalDemosSection } from './components/PracticalDemosSection';
import { ClinicalApplications } from './components/ClinicalApplications';
import { CurriculumSection } from './components/CurriculumSection';
import { CertificateShowcase } from './components/CertificateShowcase';
import { InstructorSection } from './components/InstructorSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingEnrollSection } from './components/PricingEnrollSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyEnrollBar } from './components/StickyEnrollBar';
import { EnrollmentModal } from './components/EnrollmentModal';
import { MovingTapeMarquee, DualCrossingTapes } from './components/MovingTapeBands';

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('INR');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState<boolean>(false);

  const handleOpenEnroll = () => {
    setIsEnrollModalOpen(true);
  };

  const handleCloseEnroll = () => {
    setIsEnrollModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col relative selection:bg-amber-400 selection:text-slate-900">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenEnroll={handleOpenEnroll}
        selectedCurrency={selectedCurrency}
        onSelectCurrency={setSelectedCurrency}
      />

      <main className="flex-1">
        {/* 1. Hero Section (3D Three.js Tape Visual + Video Preview + Value Props) */}
        <HeroSection
          onOpenEnroll={handleOpenEnroll}
          selectedCurrency={selectedCurrency}
        />

        {/* Dynamic Horizontal Moving Tape Ribbon */}
        <MovingTapeMarquee
          direction="left"
          tapeColor="pink"
          items={[
            'KINESIOLOGY TAPING',
            'RIGID IMMOBILIZATION',
            'SEMI-ELASTIC DYNAMIC',
            'SIDELINE SPORTS RTP',
            '8 CPD HOURS',
            'AUTHORISED CCT SUFFIX',
            'DR. CHAKSHU BANSAL',
            'ARUNALAYA HEALTHCARE',
            'PRE-RECORDED PRACTICAL DEMOS'
          ]}
        />

        {/* 2. The Real Problem Section (6 clinical questions & solutions) */}
        <ProblemSection onOpenEnroll={handleOpenEnroll} />

        {/* Dual Crossing Kinesio Tape Accent */}
        <DualCrossingTapes />

        {/* 3. The 4 Taping Systems (Detailed breakdown with reference photos) */}
        <FourTapingSystems onOpenEnroll={handleOpenEnroll} />

        {/* 4. Practical Demo Videos (3 authentic Vimeo practical demos) */}
        <PracticalDemosSection onOpenEnroll={handleOpenEnroll} />

        {/* 5. Clinical Applications & Real Sports Scenarios (Athlete photography) */}
        <ClinicalApplications onOpenEnroll={handleOpenEnroll} />

        {/* Moving Yellow & Cyan Tape Band */}
        <MovingTapeMarquee
          direction="right"
          tapeColor="yellow"
          items={[
            'PATELLAR TRACKING',
            'ROTATOR CUFF UNLOADING',
            'LATERAL ANKLE SPRAIN LOCK',
            'POSTURAL KYPHOSIS RETRACTION',
            'PAEDIATRIC & NEURO TAPING',
            'BIO-MECHANICAL VECTOR CORRECTION'
          ]}
        />

        {/* 6. Complete Curriculum (9 Modules with search and lesson breakdowns) */}
        <CurriculumSection onOpenEnroll={handleOpenEnroll} />

        {/* 7. Certificate & Hard Copy Showcase (Official certificates & Vimeo unboxing video) */}
        <CertificateShowcase onOpenEnroll={handleOpenEnroll} />

        {/* 8. Instructor Section (Dr. Chakshu Bansal & InBL Pro Basketball Experience) */}
        <InstructorSection onOpenEnroll={handleOpenEnroll} />

        {/* 9. Comparison: CCT vs CKT */}
        <ComparisonSection onOpenEnroll={handleOpenEnroll} />

        {/* 10. Pricing & Enrollment Showcase (Best value offer, currency selector, WhatsApp counsellors) */}
        <PricingEnrollSection
          onOpenEnroll={handleOpenEnroll}
          selectedCurrency={selectedCurrency}
          onSelectCurrency={setSelectedCurrency}
        />

        {/* 11. Frequently Asked Questions (All 28 categorized FAQs with search) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar (Within 15% mobile viewport limit) */}
      <StickyEnrollBar
        onOpenEnroll={handleOpenEnroll}
        selectedCurrency={selectedCurrency}
      />

      {/* Interactive Enrollment & Checkout Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnroll}
        selectedCurrency={selectedCurrency}
        onSelectCurrency={setSelectedCurrency}
      />
    </div>
  );
}
