import React, { useState } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { 
  Award, 
  Shield, 
  Clock, 
  Heart, 
  Sparkles, 
  Calculator, 
  ArrowRight, 
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface ScholarshipsViewProps {
  onOpenApply: (courseId?: string) => void;
  onOpenHelpDesk: () => void;
  universityNavigation?: React.ReactNode;
}

export const ScholarshipsView: React.FC<ScholarshipsViewProps> = ({ onOpenApply, universityNavigation }) => {
  const [calcCourseId, setCalcCourseId] = useState('mba');
  const [marks, setMarks] = useState<number>(78);
  const [isDefense, setIsDefense] = useState(false);
  const [isSingleGirl, setIsSingleGirl] = useState(false);
  const [isAlumni, setIsAlumni] = useState(false);

  const selectedCourse = COURSES_DATA.find(c => c.id === calcCourseId) || COURSES_DATA[0];

  let scholarshipPct = 20;
  if (isDefense) {
    scholarshipPct = 50;
  } else if (marks >= 85) {
    scholarshipPct = 25;
  } else if (marks >= 75) {
    scholarshipPct = 20;
  }
  if (isSingleGirl && !isDefense) {
    scholarshipPct = Math.min(30, scholarshipPct + 5);
  }
  if (isAlumni && !isDefense) {
    scholarshipPct = Math.min(30, scholarshipPct + 5);
  }

  const baseTotal = selectedCourse.totalFee;
  const savings = Math.round((baseTotal * scholarshipPct) / 100);
  const netPayable = baseTotal - savings;
  const netSemFee = Math.round(netPayable / selectedCourse.semestersCount);

  return (
    <div className="space-y-0">
      <div className="bg-[#f0f3ff] border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="flex items-center text-xs text-[#43474d] space-x-2 font-medium">
            <span className="hover:text-[#115eaf] cursor-pointer">Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span className="hover:text-[#115eaf] cursor-pointer">Lovely Professional University Online</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span className="text-[#000f22] font-bold">Scholarships & Grants 2026</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <div className="page-section text-center max-w-3xl mx-auto mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            Fee Waivers & Concessions 2026
          </span>
          <h1 className="section-title mt-2 text-2xl sm:text-3xl font-bold text-[#000f22] tracking-tight font-sans">
            Scholarships & Fee Discounts
          </h1>
          <p className="section-description text-xs sm:text-sm text-[#43474d] leading-relaxed">
            Check your eligibility for university fee concessions. Discounts are offered for high academic scorers, serving military and defense personnel, early enrollment applicants, and university alumni.
          </p>
        </div>

        {universityNavigation}

        {/* INTERACTIVE SCHOLARSHIP CALCULATOR */}
        <section className="page-section card bg-white rounded-2xl border-2 border-[#115eaf]/30 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="w-full lg:w-3/5 space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#e7eeff]">
                <Calculator className="w-5 h-5 text-[#115eaf]" />
                <h3 className="font-bold text-base text-[#000f22] font-sans">
                  Calculate Your Net Tuition Fee & Savings
                </h3>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-1.5">
                  Select Program
                </label>
                <select
                  value={calcCourseId}
                  onChange={(e) => setCalcCourseId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm font-semibold text-[#000f22] focus:border-[#115eaf] outline-none cursor-pointer bg-white"
                >
                  {COURSES_DATA.map(c => (
                    <option key={c.id} value={c.id}>{c.name} (₹{c.totalFee.toLocaleString('en-IN')})</option>
                  ))}
                </select>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <label className="font-bold text-[#000f22] uppercase tracking-wider">
                    Qualifying Aggregate Marks: {marks}%
                  </label>
                  <span className="text-[#115eaf] font-normal">
                    {marks >= 85 ? 'Top Tier Merit (25%)' : marks >= 75 ? 'Academic Merit (20%)' : 'Standard Grant'}
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={98}
                  value={marks}
                  onChange={(e) => setMarks(Number(e.target.value))}
                  className="w-full h-2 bg-[#e7eeff] rounded-lg appearance-none cursor-pointer accent-[#115eaf]"
                />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-2">
                  Special Welfare Categories
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    isDefense ? 'border-[#115eaf] bg-[#f0f3ff]' : 'border-[#e7eeff]'
                  }`}>
                    <input
                      type="checkbox"
                      checked={isDefense}
                      onChange={(e) => setIsDefense(e.target.checked)}
                      className="rounded text-[#115eaf]"
                    />
                    <span className="font-normal text-[#000f22]">Defense / Paramilitary</span>
                  </label>
                  <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    isSingleGirl ? 'border-[#115eaf] bg-[#f0f3ff]' : 'border-[#e7eeff]'
                  }`}>
                    <input
                      type="checkbox"
                      checked={isSingleGirl}
                      onChange={(e) => setIsSingleGirl(e.target.checked)}
                      className="rounded text-[#115eaf]"
                    />
                    <span className="font-normal text-[#000f22]">Single Girl Child</span>
                  </label>
                  <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    isAlumni ? 'border-[#115eaf] bg-[#f0f3ff]' : 'border-[#e7eeff]'
                  }`}>
                    <input
                      type="checkbox"
                      checked={isAlumni}
                      onChange={(e) => setIsAlumni(e.target.checked)}
                      className="rounded text-[#115eaf]"
                    />
                    <span className="font-normal text-[#000f22]">Alumni / Sibling</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="card w-full lg:w-2/5 rounded-2xl bg-gradient-to-br from-[#0b2540] to-[#000f22] text-white space-y-4 shadow-md">
              <div className="pb-3 border-b border-white/10">
                <span className="text-[11px] font-bold text-[#b1c8eb] uppercase tracking-wider block">
                  Eligible Tuition Waiver
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {scholarshipPct}% Waiver
                </div>
                <p className="text-xs text-emerald-400 mt-[7.5px]">
                  Total Fee Savings: ₹{savings.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="space-y-2 text-xs text-[#d8e3fb]">
                <div className="flex justify-between">
                  <span className="text-[#768dad]">Standard Degree Fee:</span>
                  <span className="line-through text-[#768dad]">₹{baseTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Net Total Tuition:</span>
                  <span className="font-bold text-white text-sm">₹{netPayable.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/10">
                  <span className="font-bold">Net Per Semester:</span>
                  <span className="font-extrabold text-[#70aaff]">₹{netSemFee.toLocaleString('en-IN')}/sem</span>
                </div>
              </div>
              <button
                onClick={() => onOpenApply(calcCourseId)}
                className="w-full py-3 rounded-xl bg-[#115eaf] text-white text-xs font-bold shadow hover:bg-[#004689] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Claim {scholarshipPct}% Scholarship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 6 SCHOLARSHIP PILLARS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white border border-[#e7eeff] rounded-2xl shadow-xs flex flex-col justify-between hover:border-[#115eaf] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] text-[#92400E] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-[#D97706]" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffdcc3] text-[#6e3900]">
                Ongoing Batch
              </span>
              <h3 className="section-title font-bold text-base text-[#000f22] font-sans mt-2">Early Bird 20% Grant</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Available to all applicants who register and complete document verification during the active intake cycle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e7eeff] text-xs font-bold text-[#115eaf]">
              Applied Automatically
            </div>
          </div>

          <div className="card bg-white border border-[#e7eeff] rounded-2xl shadow-xs flex flex-col justify-between hover:border-[#115eaf] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#e7eeff] text-[#115eaf] flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d5e3ff] text-[#004689]">
                Academic Merit
              </span>
              <h3 className="section-title font-bold text-base text-[#000f22] font-sans mt-2">Academic Excellence</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Up to 25% tuition fee waiver for students with 85%+ aggregate marks in 10+2 (for UG) or graduation (for PG).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e7eeff] text-xs font-bold text-[#115eaf]">
              Evaluated on Marksheet
            </div>
          </div>

          <div className="card bg-white border border-[#e7eeff] rounded-2xl shadow-xs flex flex-col justify-between hover:border-[#115eaf] transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#e7eeff] text-[#115eaf] flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffdcc3] text-[#6e3900]">
                Defense Personnel
              </span>
              <h3 className="section-title font-bold text-base text-[#000f22] font-sans mt-2">Jai Jawan Defense Scheme</h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Up to 100% full tuition fee waiver for active armed forces, along with special fee relief for defense wards.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e7eeff] text-xs font-bold text-[#115eaf]">
              Defense Service Card Verified
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
