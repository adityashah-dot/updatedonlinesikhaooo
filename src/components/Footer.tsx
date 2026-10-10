import React from 'react';
import { TabType } from '../types';
import { CheckCircle, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { INSTITUTION_HIGHLIGHTS } from '../data/institutionalData';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onSelectCourse: (courseId: string) => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectCourse, onOpenApply }) => {
  return (
    <footer className="bg-[#000f22] text-[#d8e3fb] pt-16 pb-12 border-t border-[#0b2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#314865]/40">
          {/* Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center rounded-xl bg-white px-3 py-2">
              <img
                src="/logo.svg"
                alt="Online Siksha - Higher Education Gateway"
                className="h-11 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#b1c8eb] max-w-sm leading-relaxed">
              Online Siksha is a premier digital higher education admissions portal facilitating admissions for UGC-recognized, NAAC accredited online universities across India.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-[#b1c8eb]">
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#0b2540] px-3 py-1.5 rounded-lg border border-[#314865]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO 9001:2015 Certified Portal
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#0b2540] px-3 py-1.5 rounded-lg border border-[#314865]">
                <CheckCircle className="w-4 h-4 text-[#70aaff]" />
                UGC-DEB Entitled Equivalence
              </span>
            </div>
          </div>

          {/* Popular Degrees */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Popular Degrees</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#b1c8eb]">
              <li>
                <button
                  onClick={() => onSelectCourse('mba')}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Online MBA (14+ Electives)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('mca')}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Online MCA (AI & Cloud)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('bca')}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Online BCA (Full Stack)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('bba')}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Online BBA (Management)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('bcom')}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Online B.Com / M.Com
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('ba')}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Online BA (Humanities)
                </button>
              </li>
            </ul>
          </div>

          {/* Admissions Desk */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Admissions Desk</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#b1c8eb]">
              <li>
                <button
                  onClick={() => { setActiveTab('admission'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Admission Process 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  0% EMI Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('scholarships'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Scholarship Schemes
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('universities'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Compare All Universities
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenApply}
                  className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                >
                  Direct Enrollment
                </button>
              </li>
            </ul>
          </div>

          {/* Support Desk */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Support Desk</h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#b1c8eb]">
              <p className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[#70aaff] shrink-0" />
                <span>{INSTITUTION_HIGHLIGHTS.email}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[#70aaff] shrink-0" />
                <span>+91 1800-889-4422 (Toll Free)</span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#70aaff] shrink-0" />
                <span>NH-44 Knowledge Corridor, Punjab & Delhi NCR, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#768dad]">
          <div>
            © 2026 Online Siksha. All Rights Reserved. Facilitating authorized higher digital education admissions.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">UGC Compliance Note</span>
            <span className="hover:text-white cursor-pointer transition-colors">Student Grievances</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
