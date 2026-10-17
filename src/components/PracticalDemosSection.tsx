import React, { useState } from 'react';
import { Play, ArrowRight, Video, CheckCircle, Clock } from 'lucide-react';
import { VIMEO_VIDEOS } from '../data/courseData';
import physioApplyingTape from '../assets/images/physio_applying_tape_1792140962068.jpg';
import rehabAnkleTape from '../assets/images/rehab_ankle_tape_1792140960680.jpg';
import runnerKneeTape from '../assets/images/runner_knee_tape_1792140959979.jpg';

interface PracticalDemosSectionProps {
  onOpenEnroll: () => void;
}

export const PracticalDemosSection: React.FC<PracticalDemosSectionProps> = ({ onOpenEnroll }) => {
  const [activeVideoId, setActiveVideoId] = useState<string>('demo1');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const demoList = [
    {
      key: 'demo1',
      title: 'Practical Demo Video 1',
      subtitle: 'Clinical Taping Practical Demo',
      description: 'Hands-on clinical taping demo showing step-by-step skin preparation, anchor placement, and measured tensioning.',
      vimeoUrl: VIMEO_VIDEOS.demo1.url,
      duration: 'HD Practical Demo',
      badge: 'Core Clinical Taping',
      poster: physioApplyingTape
    },
    {
      key: 'demo2',
      title: 'Practical Demo Video 2',
      subtitle: 'Technique-Based Taping Demo',
      description: 'Advanced muscle facilitation and inhibition techniques demonstrating directional vector cuts and joint unloading.',
      vimeoUrl: VIMEO_VIDEOS.demo2.url,
      duration: 'HD Technique Demo',
      badge: 'Vector Correction',
      poster: rehabAnkleTape
    },
    {
      key: 'demo3',
      title: 'More Practical Demos',
      subtitle: 'Real Course Learning Experience',
      description: 'Multi-layer hybrid taping demonstrations for complex sports presentations, ligament instability, and return-to-play.',
      vimeoUrl: VIMEO_VIDEOS.demo3.url,
      duration: 'HD Case Demonstration',
      badge: 'Advanced Multi-Layer',
      poster: runnerKneeTape
    }
  ];

  const currentDemo = demoList.find((d) => d.key === activeVideoId) || demoList[0];

  const handleStartPlay = () => {
    setIsPlaying(true);
    window.dispatchEvent(new CustomEvent('physio:pause-webgl'));
  };

  const handleSelectDemo = (key: string) => {
    setActiveVideoId(key);
    setIsPlaying(true);
    window.dispatchEvent(new CustomEvent('physio:pause-webgl'));
  };

  return (
    <section id="demos" className="relative py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide bg-amber-50 text-amber-900 border border-amber-200">
              Pre-Recorded Practical Demo Videos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Watch. Pause. Practice. <span className="text-amber-700">Repeat Anytime.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The biggest advantage of this course is that you get pre-recorded practical demo videos. You can learn at your own pace and revise the technique whenever you need.
          </p>
        </div>

        {/* Video Player + Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Screen (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-300 shadow-md">
              <div className="relative w-full pb-[56.25%] bg-slate-950">
                {isPlaying ? (
                  <iframe
                    key={currentDemo.key}
                    src={`${currentDemo.vimeoUrl}&autoplay=1`}
                    title={currentDemo.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                ) : (
                  <div
                    onClick={handleStartPlay}
                    className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center overflow-hidden"
                  >
                    {/* Video Poster Image */}
                    <img
                      src={currentDemo.poster}
                      alt={currentDemo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

                    {/* Central Play Trigger Button */}
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center p-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide block">
                          Click to Play {currentDemo.title}
                        </span>
                        <span className="text-[11px] font-mono text-amber-300 block">
                          ⚡ Smooth 60fps HD Demo · No Lag
                        </span>
                      </div>
                    </div>

                    {/* Top Corner Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/80 text-white backdrop-blur-xs border border-white/20">
                        {currentDemo.badge}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info Bar */}
              <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 text-xs">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                      {currentDemo.badge}
                    </span>
                    <span className="text-slate-500 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" /> {currentDemo.duration}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {currentDemo.title} · {currentDemo.subtitle}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={onOpenEnroll}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                >
                  <span>Unlock Lifetime Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              {currentDemo.description}
            </p>
          </div>

          {/* Video Selector Playlist (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-2">
              <Video className="w-4 h-4 text-amber-600" />
              <span>Select Practical Demo Video:</span>
            </div>

            {demoList.map((demo) => {
              const isSelected = demo.key === activeVideoId;
              return (
                <div
                  key={demo.key}
                  onClick={() => handleSelectDemo(demo.key)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-400 shadow-xs ring-1 ring-amber-300'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-amber-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-amber-800 font-semibold">
                        {demo.badge}
                      </span>
                      <h4 className={`text-sm font-semibold truncate ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>
                        {demo.title}
                      </h4>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {demo.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Runner Knee Patellar Tracking Visual Teaser */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 bg-white relative group shadow-xs">
              <img
                src={runnerKneeTape}
                alt="Runner knee patellar tracking kinesiology tape"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-3.5 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-200 font-bold">On-Track Application</span>
                <span className="text-xs font-semibold text-white">Patellar Tracking & Deceleration Strapping</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="w-full py-3.5 rounded-xl text-xs font-semibold text-center text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                Get Lifetime Access to All Practical Demos
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
