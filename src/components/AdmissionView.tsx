import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { DEGREEFYD_LPU_API } from '../data/apiData';
import { 
  CheckCircle, 
  ChevronRight, 
  Download, 
  Calendar, 
  PhoneCall 
} from 'lucide-react';

interface AdmissionViewProps {
  onSelectCourse: (course: Course) => void;
  onOpenApply: (courseId?: string) => void;
  onOpenBrochure: () => void;
  onOpenHelpDesk: () => void;
  onOpenEmi: () => void;
  universityNavigation?: React.ReactNode;
}

export const AdmissionView: React.FC<AdmissionViewProps> = ({
  onOpenApply,
  onOpenBrochure,
  onOpenHelpDesk,
  universityNavigation
}) => {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackCourse, setCallbackCourse] = useState('mba');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [showAllEligibility, setShowAllEligibility] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
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
            <span className="text-[#000f22] font-bold">Admission 2026</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        {/* PAGE HERO */}
        <section className="bg-white rounded-lg border border-[#e7eeff] p-4 sm:p-5 space-y-4 shadow-xs" id="overview">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#000f22] tracking-tight font-sans">
              LPU Online Admission 2026
            </h1>
            <p className="text-sm sm:text-base text-[#43474d] leading-relaxed font-normal">
              {DEGREEFYD_LPU_API.admissionProcess.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#f0f3ff] p-4 rounded-lg border border-[#e7eeff]">
            <div className="space-y-1 border-r border-[#c4c6ce] pr-2">
              <span className="text-xs font-normal text-[#74777e] block">Admission Status</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-semibold bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                {DEGREEFYD_LPU_API.importantDates[0].date}
              </span>
            </div>
            <div className="space-y-1 md:border-r border-[#c4c6ce] px-1 md:px-2">
              <span className="text-xs font-normal text-[#74777e] block">Mode of Application</span>
              <span className="text-base font-semibold text-[#000f22]">Online</span>
            </div>
            <div className="space-y-1 border-r border-[#c4c6ce] px-1 md:px-2">
              <span className="text-xs font-normal text-[#74777e] block">Admission Criteria</span>
              <span className="text-base font-semibold text-[#000f22]">Merit-based</span>
            </div>
            <div className="space-y-1 pl-1 md:pl-2">
              <span className="text-xs font-normal text-[#74777e] block">Registration Fee</span>
              <span className="text-base font-bold text-[#115eaf]">₹600</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onOpenApply()}
              className="bg-[#115eaf] hover:bg-[#084A8C] text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors shadow-sm cursor-pointer"
            >
              Apply Now
            </button>
            <button
              onClick={onOpenBrochure}
              className="bg-white hover:bg-[#EFF6FF] text-[#0b2540] border border-[#0b2540] px-5 py-2.5 rounded font-semibold text-sm transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#115eaf]" />
              Download Brochure
            </button>
          </div>
        </section>

        {universityNavigation}

        {/* LPU ONLINE ADMISSION PROCESS 2026 */}
        <section className="page-section" id="admission-process">
          <div className="mb-5 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#000f22] font-sans">
              LPU Online Admission Process 2026
            </h2>
            <p className="mt-2 text-sm text-[#43474d] leading-relaxed font-normal">
              {DEGREEFYD_LPU_API.admissionProcess.intro}
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-4 left-[10%] right-[10%] h-px bg-[#d5e3ff]" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
              {DEGREEFYD_LPU_API.admissionProcess.steps.map((step, index, steps) => (
                <div key={step.stepNum} className="relative flex items-start gap-3 md:flex-col md:items-center md:gap-0">
                  {index < steps.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-[-12px] w-px bg-[#d5e3ff] md:hidden" />
                  )}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#115eaf] bg-white text-xs font-semibold text-[#115eaf] md:mb-3">
                    {String(step.stepNum).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1 rounded-lg border border-[#e7eeff] bg-white p-3.5 md:w-full md:flex-none">
                    <h3 className="mb-1.5 text-sm font-semibold text-[#000f22] font-sans">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#43474d] font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGIBILITY & SELECTION CRITERIA TABLE */}
        <section className="page-section card bg-white border border-[#e7eeff] rounded-2xl shadow-xs">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 border-b border-[#e7eeff] pb-4">
            <div className="text-left">
              <span className="text-xs font-bold text-[#115eaf] uppercase tracking-wider block">Admission Criteria</span>
              <h2 className="section-title text-xl sm:text-2xl font-bold text-[#000f22] font-sans">
                LPU Online Eligibility and Selection Criteria
              </h2>
            </div>
            <button
              onClick={onOpenHelpDesk}
              className="text-xs font-bold text-[#115eaf] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Need Free Eligibility Assessment?</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e7eeff] mt-[18px]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0b2540] text-white">
                  <th className="py-3 px-4 font-bold">Course</th>
                  <th className="py-3 px-4 font-bold">Eligibility</th>
                  <th className="py-3 px-4 font-bold">Selection Process</th>
                  <th className="py-3 px-4 font-bold text-right">Tuition Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7eeff]">
                {(showAllEligibility
                  ? DEGREEFYD_LPU_API.eligibilityMatrix
                  : DEGREEFYD_LPU_API.eligibilityMatrix.slice(0, 4)
                ).map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f0f3ff]/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#000f22]">
                      {item.course}
                      <span className="block text-[11px] font-normal text-[#74777e]">{item.duration}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#43474d] max-w-xs">{item.eligibility}</td>
                    <td className="py-3.5 px-4 text-[#115eaf] font-normal">{item.selection}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-[#000f22]">
                      {item.feeSem} <span className="text-[11px] font-normal text-[#74777e]">/sem</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {DEGREEFYD_LPU_API.eligibilityMatrix.length > 4 && (
            <div className="flex justify-center mt-3">
              <button
                onClick={() => setShowAllEligibility(!showAllEligibility)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#115eaf] hover:underline cursor-pointer"
              >
                {showAllEligibility
                  ? 'Show Less'
                  : `Show All ${DEGREEFYD_LPU_API.eligibilityMatrix.length} Programs`}
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAllEligibility ? 'rotate-90' : ''}`} />
              </button>
            </div>
          )}
        </section>

        {/* IMPORTANT DATES TABLE */}
        <section className="page-section card bg-white border border-[#e7eeff] rounded-2xl shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4 border-b border-[#e7eeff]">
            <div>
              <span className="text-xs font-bold text-[#115eaf] uppercase tracking-wider block">Important Dates</span>
              <h2 className="section-title text-xl sm:text-2xl font-extrabold text-[#000f22] font-sans">
                LPU Online Admission 2026 Dates
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#43474d]">
              <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Intake 2026 Active</span>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#e7eeff] mt-[18px]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#f0f3ff] text-[#000f22] font-bold">
                  <th className="py-3 px-4 border-b border-[#e7eeff]">Event</th>
                  <th className="py-3 px-4 border-b border-[#e7eeff]">Important Date</th>
                  <th className="py-3 px-4 border-b border-[#e7eeff]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7eeff]">
                {DEGREEFYD_LPU_API.importantDates.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f0f3ff]/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#000f22] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#115eaf]" />
                      <span>{item.event}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#43474d]">{item.date}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal bg-[#d5e3ff] text-[#004689]">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* INSTANT COUNSELING CALLBACK BANNER */}
        <section className="page-section card bg-[#0b2540] text-white rounded-2xl border border-[#314865] relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#115eaf] text-white text-xs font-bold uppercase tracking-wide">
                <PhoneCall className="w-3.5 h-3.5" />
                1-on-1 Academic Counseling
              </span>
              <h2 className="section-title text-2xl sm:text-3xl font-extrabold font-sans">
                Have Questions About Document Eligibility or Grants?
              </h2>
              <p className="section-description text-xs sm:text-sm text-[#b1c8eb] max-w-2xl leading-relaxed">
                Speak directly with Online Siksha university counselors for transcript pre-screening, scholarship estimation, and instant enrollment support.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-2xl text-[#000f22] shadow-lg space-y-3">
              <h3 className="font-bold text-sm text-[#000f22] font-sans">Request Instant Callback</h3>
              {!callbackSubmitted ? (
                <form onSubmit={handleCallbackSubmit} className="space-y-2.5 text-xs">
                  <input
                    type="text"
                    required
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full h-10 px-3 rounded-xl border border-[#c4c6ce] focus:border-[#115eaf] outline-none"
                  />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Mobile Number (+91)"
                    className="w-full h-10 px-3 rounded-xl border border-[#c4c6ce] focus:border-[#115eaf] outline-none"
                  />
                  <select
                    value={callbackCourse}
                    onChange={(e) => setCallbackCourse(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-[#c4c6ce] focus:border-[#115eaf] outline-none cursor-pointer bg-white"
                  >
                    {COURSES_DATA.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#115eaf] text-white h-10 rounded-xl font-bold hover:bg-[#004689] active:scale-95 transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Talk to Expert Counselor</span>
                  </button>
                </form>
              ) : (
                <div className="py-4 text-center space-y-2 text-xs">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                  <span className="font-bold text-[#000f22] block">Callback Requested!</span>
                  <p className="text-[#43474d]">
                    We will call you at +91 {callbackPhone} shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
