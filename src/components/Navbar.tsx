import React, { useState } from 'react';
import { TabType } from '../types';
import {
  Headphones,
  Menu,
  X,
  Building2,
  GraduationCap,
  ArrowLeftRight,
  Award,
  Trophy,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenApply: () => void;
  onOpenHelpDesk: () => void;
  onOpenCounselor?: () => void;
  onOpenLms: () => void;
  onOpenChat?: () => void;
}

const GLOBAL_LINKS: {
  tab: TabType;
  label: string;
  shortLabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}[] = [
  { tab: 'universities', label: 'Universities', icon: Building2 },
  { tab: 'degrees', label: 'Degree Explorer', shortLabel: 'Degrees', icon: GraduationCap },
  { tab: 'compare', label: 'Compare Matrix', shortLabel: 'Compare', icon: ArrowLeftRight },
  { tab: 'scholarships', label: 'Scholarships', icon: Award, badge: '2026' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenApply,
  onOpenHelpDesk,
  onOpenCounselor,
  onOpenChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-[#e2e8f0]">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-4 md:px-6 h-[58px] sm:h-[62px] flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer select-none shrink-0"
        >
          <img
            src="/logo.svg"
            alt="Online Siksha - Higher Education Gateway"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[13px] font-medium shrink min-w-0">
          {GLOBAL_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive =
              activeTab === link.tab ||
              (link.tab === 'universities' && activeTab === 'overview') ||
              (link.tab === 'degrees' && activeTab === 'courses');
            return (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'text-[#115eaf] bg-[#f0f6ff] font-semibold'
                    : 'text-[#475569] hover:text-[#0b2540] hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#115eaf]' : 'text-slate-400'}`} />
                <span className="hidden xl:inline">{link.label}</span>
                <span className="xl:hidden">{link.shortLabel || link.label}</span>
                {link.badge && (
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2 rounded border border-amber-300">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Ask AI Advisor Button */}
          {onOpenChat && (
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium transition-all duration-150 active:scale-95 shadow-2xs cursor-pointer whitespace-nowrap"
              title="Chat with AI Admissions Advisor"
            >
              <Sparkles className="w-3 h-3 text-blue-400 shrink-0" />
              <span>Ask AI Advisor</span>
            </button>
          )}

          {/* Counselor Help Button */}
          <button
            onClick={onOpenCounselor || onOpenHelpDesk}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#115eaf] hover:bg-[#084a8c] text-white text-[11px] sm:text-xs font-semibold transition-all duration-150 active:scale-95 shadow-2xs cursor-pointer whitespace-nowrap"
            title="Connect with Academic Counselor"
          >
            <PhoneCall className="w-3 h-3 text-amber-300 animate-pulse shrink-0" />
            <span>Counselor Help</span>
          </button>

          {/* Help Desk Link */}
          <button
            onClick={onOpenApply}
            className="hidden md:inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-blue-50 text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
            title="Admissions Help Desk"
          >
            <Headphones className="w-3.5 h-3.5 text-[#115eaf] shrink-0" />
            <span className="hidden xl:inline">Help Desk</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#475569] hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e8f0] px-4 pt-2 pb-5 space-y-2 shadow-lg max-h-[78vh] overflow-y-auto">
          {GLOBAL_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.tab;
            return (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-between cursor-pointer ${
                  isActive ? 'bg-[#f0f6ff] text-[#115eaf] font-semibold' : 'text-[#475569] hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#115eaf]" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2 rounded border border-amber-300">
                      {link.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#e2e8f0] flex flex-col gap-2">
            {onOpenChat && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Ask AI Admissions Advisor</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCounselor) onOpenCounselor();
                else onOpenHelpDesk();
              }}
              className="w-full py-2 rounded-lg bg-[#115eaf] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>Counselor Help</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2 rounded-lg border border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-[#115eaf]" />
              <span>Admissions Help Desk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
