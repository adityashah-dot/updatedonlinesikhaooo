import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { DEGREEFYD_LPU_API } from '../data/apiData';
import {
  ChevronRight,
  Download,
  Star,
  MapPin,
  ChevronDown,
  Search,
  ArrowRight,
} from 'lucide-react';

interface OverviewViewProps {
  onSelectCourse: (course: Course) => void;
  onOpenApply: (courseId?: string) => void;
  onOpenBrochure: (course?: Course) => void;
  onOpenHelpDesk: () => void;
  universityNavigation?: React.ReactNode;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  onSelectCourse,
  onOpenApply,
  onOpenBrochure,
  universityNavigation
}) => {
  const [courseFeeSearch, setCourseFeeSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [counselPanelOpen, setCounselPanelOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [counselingForm, setCounselingForm] = useState({ phone: '', email: '', course: 'mba' });

  const handleCounselingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Breadcrumb Bar */}
      <div className="bg-[#f0f3ff] border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav className="flex items-center text-xs text-[#43474d] space-x-2 font-medium">
            <span className="hover:text-[#115eaf] cursor-pointer">Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span className="hover:text-[#115eaf] cursor-pointer">Colleges</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span className="hover:text-[#115eaf] cursor-pointer">Lovely Professional University Online</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span className="text-[#000f22] font-bold">Overview</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white text-[#000f22] border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white border border-[#e7eeff] p-1.5 shadow-sm shrink-0 flex items-center justify-center font-bold text-blue-700 text-xl">
              LPU
            </div>
            <div className="min-w-0">
              <h1 className="section-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-sans text-[#000f22]">
                {DEGREEFYD_LPU_API.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="px-2.5 py-1 rounded-full bg-[#f0f3ff] border border-[#d5e3ff] text-[#115eaf] text-[11px] font-bold">#31 NIRF Rank</span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0f3ff] border border-[#d5e3ff] text-[#115eaf] text-[11px] font-bold">NAAC A++</span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0f3ff] border border-[#d5e3ff] text-[#115eaf] text-[11px] font-bold">UGC-DEB</span>
                <span className="px-2.5 py-1 rounded-full bg-[#f0f3ff] border border-[#d5e3ff] text-[#115eaf] text-[11px] font-bold">AICTE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-4 items-start mt-4">
            <div className="lg:col-span-7 space-y-3">
              <p className="section-description text-xs sm:text-sm text-[#43474d] font-normal flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#115eaf] shrink-0" />
                {DEGREEFYD_LPU_API.location} • Private • Est. {DEGREEFYD_LPU_API.established} •{' '}
                <span className="inline-flex items-center gap-0.5 font-bold text-[#B45309]">
                  <Star className="w-3 h-3 fill-[#D97706] text-[#D97706]" />
                  {DEGREEFYD_LPU_API.rating}
                </span>
              </p>
              <p className="text-sm text-[#2d3137] leading-relaxed font-normal">
                {DEGREEFYD_LPU_API.hero.description}
              </p>
              <p className="text-sm text-[#2d3137] leading-relaxed font-normal">
                {DEGREEFYD_LPU_API.hero.heroSub}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#e7eeff] shadow-xs bg-[#f9f9ff]">
                <img
                  src={DEGREEFYD_LPU_API.hero.backgroundImage}
                  alt="Lovely Professional University Campus"
                  className="w-full h-48 sm:h-60 lg:h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Quick Stats & CTAs */}
          <div className="flex flex-wrap items-stretch gap-3 mt-5">
            <div className="bg-[#f0f3ff] border border-[#e7eeff] px-4 py-2.5 rounded-xl text-center min-w-[110px]">
              <span className="block text-sm font-bold text-[#000f22] font-sans">₹46K - ₹1.86L</span>
              <span className="text-[10px] text-[#74777e]">Fee Range</span>
            </div>
            <div className="bg-[#f0f3ff] border border-[#e7eeff] px-4 py-2.5 rounded-xl text-center min-w-[110px]">
              <span className="block text-sm font-bold text-[#115eaf] font-sans">1 - 3 Years</span>
              <span className="text-[10px] text-[#74777e]">Duration</span>
            </div>
            <div className="bg-[#f0f3ff] border border-[#e7eeff] px-4 py-2.5 rounded-xl text-center min-w-[110px]">
              <span className="block text-sm font-bold text-[#000f22] font-sans">Online</span>
              <span className="text-[10px] text-[#74777e]">Semester-based</span>
            </div>
            <div className="bg-[#f0f3ff] border border-[#e7eeff] px-4 py-2.5 rounded-xl text-center min-w-[110px]">
              <span className="block text-sm font-bold text-[#B45309] font-sans">90%</span>
              <span className="text-[10px] text-[#74777e]">Placement Rate</span>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={() => onOpenBrochure()}
                className="px-5 py-2.5 rounded-xl bg-white text-[#115eaf] border border-[#115eaf] text-xs sm:text-sm font-bold hover:bg-[#f0f3ff] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Brochure
              </button>
              <button
                onClick={() => onOpenApply()}
                className="px-6 py-2.5 rounded-xl bg-[#115eaf] text-white text-xs sm:text-sm font-bold shadow hover:bg-[#004689] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {universityNavigation}

      {/* MAIN CONTENT */}
      <div className="content-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-10">
        {/* Highlights Table */}
        <section id="highlights" className="page-section card bg-white rounded-2xl border border-[#e7eeff] shadow-xs p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#000f22] font-sans mb-4">
            LPU Online Highlights 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#e7eeff]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0b2540] text-white">
                  <th className="py-3 px-4 font-bold">Particulars</th>
                  <th className="py-3 px-4 font-bold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7eeff]">
                {DEGREEFYD_LPU_API.highlightsTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f0f3ff]/60 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-[#000f22]">{row.label}</td>
                    <td className="py-2.5 px-4 text-[#2d3137]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Courses & Fees Searchable Table */}
        <section id="courses-fees" className="page-section card bg-white rounded-2xl border border-[#e7eeff] shadow-xs p-6">
          <h2 className="section-title text-2xl font-bold text-[#000f22] font-sans">
            LPU Online Courses and Fees 2026
          </h2>
          <p className="section-description text-sm text-[#43474d] leading-relaxed mb-4">
            {DEGREEFYD_LPU_API.coursesFees.intro}
          </p>

          <div className="relative mb-4">
            <input
              type="text"
              value={courseFeeSearch}
              onChange={(e) => setCourseFeeSearch(e.target.value)}
              placeholder="Search degrees (e.g. MBA, MCA, BBA)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e7eeff] bg-[#f9f9ff] text-sm text-[#000f22] focus:outline-none focus:border-[#115eaf] transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#74777e]" />
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e7eeff]">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
              <thead>
                <tr className="bg-[#0b2540] text-white">
                  <th className="py-3 px-4 font-bold">Degree</th>
                  <th className="py-3 px-4 font-bold">Duration</th>
                  <th className="py-3 px-4 font-bold">Avg. Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7eeff]">
                {DEGREEFYD_LPU_API.coursesFees.table
                  .filter((c) => c.degree.toLowerCase().includes(courseFeeSearch.toLowerCase()))
                  .map((c) => (
                    <tr key={c.degree} className="bg-white hover:bg-[#f9f9ff] transition-colors">
                      <td className="py-3 px-4 align-top">
                        <button
                          onClick={() => {
                            const course = COURSES_DATA.find((x) => x.id === c.courseId);
                            if (course) onSelectCourse(course);
                          }}
                          className="block text-left text-xs sm:text-[13px] font-bold text-[#115eaf] hover:underline cursor-pointer"
                        >
                          {c.degree}
                        </button>
                        <span className="block text-[10px] text-[#74777e]">{c.specializations}</span>
                      </td>
                      <td className="py-3 px-4 text-[#43474d] align-top">{c.duration}</td>
                      <td className="py-3 px-4 font-bold text-[#115eaf] align-top">{c.avgFees}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="page-section card bg-white rounded-2xl border border-[#e7eeff] shadow-xs p-6">
          <h2 className="section-title text-xl font-bold text-[#000f22] font-sans mb-4">
            Frequently Asked Questions (LPU Online)
          </h2>
          <div className="space-y-3">
            {DEGREEFYD_LPU_API.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-[#e7eeff] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between font-medium text-xs sm:text-sm text-[#000f22] hover:text-[#115eaf] bg-white transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#115eaf] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3 text-xs text-[#43474d] bg-[#f9f9ff] border-t border-[#e7eeff] leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Floating Free Apply Edge Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center">
        {counselPanelOpen && (
          <div className="w-72 bg-white border border-[#e7eeff] shadow-2xl rounded-l-2xl p-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-[#e7eeff] mb-3">
              <span className="text-xs font-bold text-[#000f22]">Get Free Counselling</span>
              <button onClick={() => setCounselPanelOpen(false)} className="text-xs text-[#74777e] cursor-pointer">✕</button>
            </div>
            {!formSubmitted ? (
              <form onSubmit={handleCounselingSubmit} className="space-y-2.5 text-xs">
                <input
                  type="tel"
                  required
                  placeholder="Mobile (+91)"
                  value={counselingForm.phone}
                  onChange={(e) => setCounselingForm({ ...counselingForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#c4c6ce] text-xs outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={counselingForm.email}
                  onChange={(e) => setCounselingForm({ ...counselingForm, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#c4c6ce] text-xs outline-none"
                />
                <button type="submit" className="w-full py-2 bg-[#115eaf] text-white rounded-lg text-xs font-bold cursor-pointer">
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center py-3 text-xs text-emerald-600 font-semibold">
                Callback Requested!
              </div>
            )}
          </div>
        )}
        <button
          onClick={() => setCounselPanelOpen(!counselPanelOpen)}
          className="w-10 h-[160px] bg-[#115eaf] hover:bg-[#004689] rounded-l-xl shadow-md flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="block text-white text-xs font-semibold whitespace-nowrap -rotate-90">
            {counselPanelOpen ? 'Close' : 'Free Apply'}
          </span>
        </button>
      </div>
    </div>
  );
};
