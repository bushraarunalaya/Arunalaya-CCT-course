import React from 'react';

interface TapeMarqueeProps {
  direction?: 'left' | 'right';
  tapeColor?: 'cyan' | 'pink' | 'yellow' | 'black' | 'red' | 'green' | 'amber';
  speed?: string;
  className?: string;
  items?: string[];
}

export const MovingTapeMarquee: React.FC<TapeMarqueeProps> = ({
  direction = 'left',
  tapeColor = 'amber',
  className = '',
  items = [
    'Kinesiology Taping',
    '8 CPD Hours Accredited',
    'Rigid Joint Stabilization',
    'Authorised CCT Suffix',
    'Semi-Elastic Functional Recoil',
    'Dr. Chakshu Bansal Instruction',
    'Sports Return-to-Play Protocols',
    'IAOTH UK & IRAP Recognised',
    'Pre-recorded Practical Demos',
    'Lifetime Revision Access'
  ]
}) => {
  const colorMap = {
    cyan: 'bg-sky-600 text-white',
    pink: 'bg-rose-600 text-white',
    yellow: 'bg-amber-500 text-slate-950 font-bold',
    amber: 'bg-[#ff8e35] text-white font-bold',
    black: 'bg-slate-900 text-slate-100 border-y border-slate-700',
    red: 'bg-red-600 text-white',
    green: 'bg-emerald-600 text-white'
  };

  const animClass = direction === 'left' ? 'animate-tape-left' : 'animate-tape-right';

  return (
    <div className={`relative overflow-hidden py-1 select-none pointer-events-none crisp-tape ${className}`}>
      <div className={`tape-shadow-sm py-2 px-4 ${colorMap[tapeColor]} ${animClass} relative border-y border-white/20`}>
        {/* Repeating text blocks with crisp rendering */}
        <div className="flex items-center space-x-8 shrink-0">
          {items.map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap flex items-center gap-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                <span className="inline-block w-2 h-2 rounded-full bg-white/90 shadow-xs" />
                {text}
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center space-x-8 shrink-0 ml-8" aria-hidden="true">
          {items.map((text, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap flex items-center gap-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                <span className="inline-block w-2 h-2 rounded-full bg-white/90 shadow-xs" />
                {text}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TapeStripAccent: React.FC<{
  color?: 'cyan' | 'pink' | 'yellow' | 'red' | 'black' | 'amber';
  angle?: number;
  label?: string;
  className?: string;
}> = ({ color = 'amber', angle = -1, label, className = '' }) => {
  const colorMap = {
    cyan: 'bg-sky-100 text-sky-900 border border-sky-300',
    pink: 'bg-rose-100 text-rose-900 border border-rose-300',
    yellow: 'bg-amber-100 text-amber-900 border border-amber-300',
    amber: 'bg-[#fff7ed] text-amber-900 border border-[#fed7aa]',
    red: 'bg-red-100 text-red-900 border border-red-300',
    black: 'bg-slate-100 text-slate-900 border border-slate-300'
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg) translateZ(0)` }}
      className={`crisp-tape inline-flex items-center px-3.5 py-1 rounded-md text-xs font-bold tracking-wide shadow-xs ${colorMap[color]} ${className}`}
    >
      <span className="truncate">{label}</span>
    </div>
  );
};

export const DualCrossingTapes: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full py-4 overflow-hidden pointer-events-none ${className}`}>
      {/* Top Tape - Crisp hardware-accelerated subtle tilt without font blurring */}
      <div className="z-10 crisp-tape" style={{ transform: 'rotate(0.5deg) translateZ(0)' }}>
        <MovingTapeMarquee
          direction="left"
          tapeColor="cyan"
          items={[
            '4-in-1 Clinical Taping Certification',
            'Kinesiology Wave Tape',
            'Rigid Zinc-Oxide Locking',
            'Semi-Elastic Functional Recoil',
            'Sideline Sports Emergency Strapping',
            '8 CPD Hours Accredited',
            'Physioneeds Academy UK'
          ]}
        />
      </div>

      {/* Bottom Tape - Crisp hardware-accelerated subtle tilt without font blurring */}
      <div className="-mt-3 z-20 crisp-tape" style={{ transform: 'rotate(-0.5deg) translateZ(0)' }}>
        <MovingTapeMarquee
          direction="right"
          tapeColor="amber"
          items={[
            'Master Clinical Reasoning & Tension Mechanics',
            'Watch · Pause · Practice · Master',
            'Pre-recorded Practical Video Demos',
            'Dr. Chakshu Bansal Master Trainer',
            'Arunalaya Healthcare Patel Nagar',
            'Verified QR Credential'
          ]}
        />
      </div>
    </div>
  );
};
