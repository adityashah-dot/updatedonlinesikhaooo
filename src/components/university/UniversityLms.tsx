import React, { useState } from 'react';
import { Laptop, Monitor, FileText, CheckCircle2, ZoomIn, X } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityLmsProps {
  university: UniversityData;
  onOpenLms?: () => void;
}

export const UniversityLms: React.FC<UniversityLmsProps> = ({ university, onOpenLms }) => {
  const [isDegreeModalOpen, setIsDegreeModalOpen] = useState(false);

  return (
    <section id="lms" className="scroll-mt-32 space-y-11">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Learning Platform & Examination Pattern
        </h2>
        <p className="mt-1 text-sm text-slate-600 max-w-3xl leading-relaxed">
          {university.campusAndLms.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-700" />
              <h3 className="text-base font-bold text-slate-900">
                {university.campusAndLms.lmsName}
              </h3>
            </div>
            {onOpenLms && (
              <button
                type="button"
                onClick={onOpenLms}
                className="text-xs font-medium text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
              >
                Access Demo LMS
              </button>
            )}
          </div>
          <div className="space-y-2.5">
            {university.campusAndLms.lmsFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-700" />
            <h3 className="text-base font-bold text-slate-900">
              Examination & Evaluation Pattern
            </h3>
          </div>
          <div className="space-y-3">
            {university.campusAndLms.examPattern.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {university.campusAndLms.sampleDegree && (
        <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
              <FileText className="w-4 h-4" />
              <span>Verified Credential Certificate</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {university.campusAndLms.sampleDegree.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {university.campusAndLms.sampleDegree.description}
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-2">
            {university.campusAndLms.sampleDegree.imageUrl ? (
              <button
                type="button"
                onClick={() => setIsDegreeModalOpen(true)}
                className="group relative block w-48 h-32 rounded-lg overflow-hidden border border-slate-300 shadow hover:shadow-md transition-all cursor-pointer"
              >
                <img
                  src={university.campusAndLms.sampleDegree.imageUrl}
                  alt={university.campusAndLms.sampleDegree.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1">
                  <ZoomIn className="w-4 h-4" />
                  <span>Preview Degree</span>
                </div>
              </button>
            ) : (
              <div className="w-44 p-3 bg-white border border-slate-200 rounded-lg text-center text-xs text-slate-600">
                UGC Validated Certificate
              </div>
            )}
            <span className="text-[11px] text-slate-500">Click to preview original degree format</span>
          </div>
        </div>
      )}

      {isDegreeModalOpen && university.campusAndLms.sampleDegree?.imageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative bg-white rounded-xl max-w-2xl w-full p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h4 className="text-sm font-bold text-slate-900">
                {university.campusAndLms.sampleDegree.title}
              </h4>
              <button
                type="button"
                onClick={() => setIsDegreeModalOpen(false)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto">
              <img
                src={university.campusAndLms.sampleDegree.imageUrl}
                alt="Sample Degree"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-xs text-slate-500 text-center">
              Degree certificates issued by UGC-entitled institutions carry standard format without "Online" distinction on main certificate.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
