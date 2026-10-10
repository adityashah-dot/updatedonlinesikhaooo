import React from 'react';
import { PhoneCall, Search } from 'lucide-react';

export const RobotIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v3" strokeWidth="2" />
    <circle cx="12" cy="2" r="1.5" fill="#38bdf8" stroke="none" />
    <rect x="3.5" y="5" width="17" height="13" rx="4.5" fill="currentColor" fillOpacity="0.2" />
    <rect x="6" y="8" width="12" height="6.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="9.5" cy="11.2" r="1.3" fill="#38bdf8" stroke="none" />
    <circle cx="14.5" cy="11.2" r="1.3" fill="#38bdf8" stroke="none" />
    <path d="M10 15.5c1 .6 3 .6 4 0" strokeWidth="1.6" />
    <path d="M1.5 10v3" strokeWidth="2.5" />
    <path d="M22.5 10v3" strokeWidth="2.5" />
  </svg>
);

interface FloatingActionsProps {
  onOpenCounselorModal: () => void;
  onOpenTrackModal: () => void;
  onOpenChat?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenCounselorModal,
  onOpenTrackModal,
  onOpenChat,
}) => {
  return (
    <aside
      aria-label="Quick admissions assistance and AI advisor"
      className="fixed bottom-20 md:bottom-5 right-3 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 pointer-events-auto select-none"
    >
      <button
        type="button"
        onClick={onOpenCounselorModal}
        className="px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white text-slate-900 border border-slate-300 rounded-full shadow-md hover:shadow-lg text-xs font-semibold hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 active:scale-95"
        aria-label="Request counselor callback"
        title="Request free academic counselor callback"
      >
        <PhoneCall className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
        <span className="hidden sm:inline">Counselor Help</span>
      </button>

      <button
        type="button"
        onClick={onOpenTrackModal}
        className="px-3 py-2 sm:px-3.5 sm:py-2.5 bg-slate-900 text-white rounded-full shadow-md hover:shadow-lg text-xs font-semibold hover:bg-slate-800 transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-950 active:scale-95"
        aria-label="Track submitted application status"
        title="Track submitted application"
      >
        <Search className="w-3.5 h-3.5 text-amber-400" />
        <span>Track Status</span>
      </button>

      {onOpenChat && (
        <button
          type="button"
          onClick={onOpenChat}
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#0b2540] via-[#115eaf] to-[#2563eb] text-white shadow-lg hover:shadow-xl border-2 border-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="Admissions Desk - Ask AI Advisor"
          aria-label="Open Admissions Desk AI Advisor"
        >
          <RobotIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
          </span>
        </button>
      )}
    </aside>
  );
};
