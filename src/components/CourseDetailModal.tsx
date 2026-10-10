import React, { useState } from 'react';
import { Course } from '../types';
import { X, CheckCircle, Download, Calculator, ArrowRight, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: (courseId: string) => void;
  onOpenBrochure: (course: Course) => void;
  onOpenEmi: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onOpenApply,
  onOpenBrochure,
  onOpenEmi
}) => {
  const [expandedSemester, setExpandedSemester] = useState<number | null>(1);

  if (!isOpen || !course) return null;

  const earlyBirdTotal = Math.round(course.totalFee * 0.8);
  const monthlyEmiEst = Math.round(earlyBirdTotal / 24);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#e7eeff] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title and Close */}
        <div className="sticky top-0 z-20 px-6 py-4 border-b border-[#e7eeff] bg-white/95 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#e7eeff] text-[#115eaf] text-xs font-bold uppercase tracking-wider">
              {course.level}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-[#000f22] font-sans truncate max-w-md sm:max-w-xl">
              {course.name}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#74777e] hover:text-[#000f22] rounded-lg hover:bg-[#f0f3ff] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-10">
          {/* Hero Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000f22] tracking-tight font-sans">
                  {course.name}
                </h1>
                <p className="text-xs sm:text-sm text-[#115eaf] font-semibold mt-1 flex flex-wrap items-center gap-2">
                  <span>{course.code}</span>
                  <span>•</span>
                  <span>{course.semestersCount} Semesters</span>
                  <span>•</span>
                  <span>{course.credits} Credits</span>
                  <span>•</span>
                  <span>100% Online Delivery</span>
                </p>
              </div>

              <p className="text-sm text-[#43474d] leading-relaxed">
                {course.shortDescription} Classes are held live on weekends with interactive doubt-solving, and complete HD video recordings are available 24/7 on the online student portal.
              </p>

              {/* 4 Pillars Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#e7eeff]">
                  <span className="text-[11px] text-[#74777e] block">Duration</span>
                  <span className="font-bold text-sm text-[#000f22]">{course.duration}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#e7eeff]">
                  <span className="text-[11px] text-[#74777e] block">Total Credits</span>
                  <span className="font-bold text-sm text-[#000f22]">{course.credits} Credits</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#e7eeff]">
                  <span className="text-[11px] text-[#74777e] block">Eligibility</span>
                  <span className="font-bold text-sm text-[#000f22] truncate block">Merit-Based</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#e7eeff]">
                  <span className="text-[11px] text-[#74777e] block">Net Total Fee</span>
                  <span className="font-bold text-sm text-[#115eaf]">₹{earlyBirdTotal.toLocaleString('en-IN')}*</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenApply(course.id)}
                  className="px-6 py-3 rounded-xl bg-[#115eaf] text-white font-bold text-xs sm:text-sm shadow hover:bg-[#004689] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply Now for {course.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenBrochure(course)}
                  className="px-5 py-3 rounded-xl border border-[#000f22] text-[#000f22] font-semibold text-xs sm:text-sm hover:bg-[#f0f3ff] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#115eaf]" />
                  <span>Download Curriculum PDF</span>
                </button>
              </div>
            </div>

            {/* Right 5 cols: Financial card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#f9f9ff] border border-[#d5e3ff] shadow-sm space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[#e7eeff]">
                <div>
                  <span className="text-xs font-bold text-[#115eaf] uppercase tracking-wider block">
                    Tuition & Installments
                  </span>
                  <h3 className="font-bold text-base text-[#000f22] font-sans">
                    Fee Breakdown & Plans
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#43474d]">
                <div className="flex justify-between items-center">
                  <span>Standard Semester Fee:</span>
                  <span className="font-semibold line-through text-[#74777e]">
                    ₹{course.perSemFee.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#000f22]">20% Early Bird Semester Fee:</span>
                  <span className="font-bold text-sm text-[#115eaf]">
                    ₹{Math.round(course.perSemFee * 0.8).toLocaleString('en-IN')}/sem
                  </span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#e7eeff] border border-[#b1c8eb]">
                  <div>
                    <span className="font-bold text-[#000f22] block">Zero-Cost Monthly EMI:</span>
                    <span className="text-[10px] text-[#43474d]">24 Months Subvented Interest</span>
                  </div>
                  <span className="font-extrabold text-sm text-[#115eaf]">
                    ₹{monthlyEmiEst.toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span>Total Tuition (With Early Bird):</span>
                  <span className="font-bold text-sm text-[#000f22]">
                    ₹{earlyBirdTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {course.specializations && course.specializations.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#000f22] block mb-1.5">
                    Available Specialization Tracks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.specializations.map((spec, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-[#c4c6ce] text-[#000f22] font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => onOpenEmi(course.id)}
                className="w-full py-2.5 rounded-xl border border-[#115eaf] text-[#115eaf] font-bold text-xs hover:bg-[#e7eeff] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Customize Down Payment & EMI Tenure</span>
              </button>
            </div>
          </div>

          {/* Placement Outcomes */}
          <div className="p-6 rounded-2xl bg-[#000f22] text-white space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-[#70aaff] uppercase tracking-wider block">
                  Graduate Mobility & Placements
                </span>
                <h3 className="text-xl font-bold text-white font-sans mt-0.5">
                  Career Pathways for {course.code}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#b1c8eb]">
                <Briefcase className="w-4 h-4 text-[#70aaff]" />
                <span>Over 2,000+ Recruiting Partners</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#b1c8eb] block">Average Package Range:</span>
                <span className="text-2xl font-bold text-white mt-1 block">
                  {course.careerProspects.avgPackage}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#b1c8eb] block">Highest Recorded CTC:</span>
                <span className="text-2xl font-bold text-[#70aaff] mt-1 block">
                  {course.careerProspects.highestPackage}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#b1c8eb] block">Placement Assistance:</span>
                <span className="text-2xl font-bold text-emerald-400 mt-1 block">
                  90% Placement Assistance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="sticky bottom-0 z-20 px-6 py-4 border-t border-[#e7eeff] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="text-xs text-[#43474d]">
            Spring 2026 Admissions Open | 100% Online Document Scrutiny
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-[#c4c6ce] text-[#000f22] text-xs font-semibold hover:bg-[#f0f3ff] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply(course.id);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#115eaf] text-white text-xs font-bold shadow hover:bg-[#004689] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for {course.code} Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
