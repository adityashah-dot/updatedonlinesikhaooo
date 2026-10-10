import React, { useState, useEffect } from 'react';
import { UniversityData } from '../../types/university';
import { UniversityHero } from './UniversityHero';
import { UniversityNav } from './UniversityNav';
import { UniversityOverview } from './UniversityOverview';
import { UniversityCourses } from './UniversityCourses';
import { UniversityAdmissions } from './UniversityAdmissions';
import { UniversityFees } from './UniversityFees';
import { UniversityPlacements } from './UniversityPlacements';
import { UniversityRankings } from './UniversityRankings';
import { UniversityLms } from './UniversityLms';
import { UniversityDates } from './UniversityDates';
import { UniversityFaq } from './UniversityFaq';
import { UniversityRelated } from './UniversityRelated';
import { UniversityCounsellingCard } from './UniversityCounsellingCard';
import { Download, Calculator, HelpCircle, ShieldCheck } from 'lucide-react';
import type { Course } from '../../types';

interface UniversityPageProps {
  university: UniversityData;
  onOpenApply: (courseId?: string) => void;
  onOpenBrochure: (course?: Course) => void;
  onOpenEmi: (courseId?: string) => void;
  onOpenHelpDesk: () => void;
  onOpenLms?: () => void;
  onSelectCourse?: (course: Course) => void;
}

export const UniversityPage: React.FC<UniversityPageProps> = ({
  university,
  onOpenApply,
  onOpenBrochure,
  onOpenEmi,
  onOpenHelpDesk,
  onOpenLms,
  onSelectCourse,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const sectionIds = [
      'overview',
      'courses',
      'admissions',
      'fees',
      'placements',
      'accreditations',
      'lms',
      'dates',
      'faqs',
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <UniversityHero
        university={university}
        onOpenApply={onOpenApply}
        onOpenBrochure={() => onOpenBrochure()}
        onOpenEmi={() => onOpenEmi()}
        onOpenCounselor={onOpenHelpDesk}
      />
      <UniversityNav
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenApply={() => onOpenApply()}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <main className="lg:col-span-8 space-y-12">
            <UniversityOverview university={university} />
            <UniversityCourses
              university={university}
              onOpenApply={onOpenApply}
              onOpenEmi={onOpenEmi}
              onSelectCourse={onSelectCourse}
            />
            <UniversityAdmissions
              university={university}
              onOpenApply={() => onOpenApply()}
            />
            <UniversityFees
              university={university}
              onOpenEmi={() => onOpenEmi()}
              onOpenApply={() => onOpenApply()}
            />
            <UniversityPlacements university={university} />
            <UniversityRankings university={university} />
            <UniversityLms
              university={university}
              onOpenLms={onOpenLms}
            />
            <UniversityDates
              university={university}
              onOpenApply={() => onOpenApply()}
            />
            <UniversityFaq university={university} />
            <UniversityRelated currentUniversityId={university.id} />
          </main>
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <UniversityCounsellingCard university={university} />
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Direct Candidate Assistance
              </h4>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => onOpenBrochure()}
                  className="w-full py-2.5 px-3.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-slate-500" />
                    <span>Download Official Brochure</span>
                  </span>
                  <span className="text-[11px] text-slate-400">PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenEmi()}
                  className="w-full py-2.5 px-3.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-slate-500" />
                    <span>Check Monthly EMI Plans</span>
                  </span>
                  <span className="text-[11px] text-emerald-600 font-bold">0% Interest</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenHelpDesk}
                  className="w-full py-2.5 px-3.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-500" />
                    <span>Admission Help Desk</span>
                  </span>
                  <span className="text-[11px] text-blue-600 font-bold">Toll Free</span>
                </button>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Verified Admissions Partner</span>
              </div>
              <p className="leading-relaxed">
                Online Siksha is a direct education discovery portal providing verified, official tuition fees,
                syllabus outlines, and admission guidance without charging any counselling fee from candidates.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
