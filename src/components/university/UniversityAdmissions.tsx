import React from 'react';
import { FileCheck, CheckCircle2 } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityAdmissionsProps {
  university: UniversityData;
  onOpenApply: () => void;
}

export const UniversityAdmissions: React.FC<UniversityAdmissionsProps> = ({
  university,
  onOpenApply,
}) => {
  return (
    <section id="admissions" className="scroll-mt-32 space-y-11">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Admission Process & Eligibility Criteria
        </h2>
        <p className="mt-1 text-sm text-slate-600 max-w-3xl">
          {university.admissions.intro}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
          Step-by-Step Online Admission Workflow
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {university.admissions.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold flex items-center justify-center mb-3">
                  0{step.stepNumber}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {university.admissions.eligibilityMatrix && university.admissions.eligibilityMatrix.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Program Eligibility & Selection Criteria
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Scroll horizontally if table overflows
            </span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="py-3 px-4">Program</th>
                  <th className="py-3 px-4">Eligibility Requirements</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Total Fee</th>
                  <th className="py-3 px-4">Selection Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-slate-700">
                {university.admissions.eligibilityMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap">
                      {row.course}
                    </td>
                    <td className="py-3 px-4 max-w-xs sm:max-w-md">
                      {row.eligibility}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-slate-600">
                      {row.duration}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap font-semibold text-slate-900 tabular-nums">
                      {row.totalFee}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-xs text-slate-600">
                      {row.selection || 'Academic Merit Verification'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {university.admissions.requiredDocuments && (
        <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-700" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Mandatory Documents for Digital Verification
            </h3>
          </div>
          <p className="text-xs text-slate-600">
            Keep clear, scanned PDF or image copies ready before beginning your application.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {university.admissions.requiredDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
            <span className="text-xs text-slate-500">
              Assistance available for UGC Distance Education Bureau (DEB) ID creation.
            </span>
            <button
              type="button"
              onClick={onOpenApply}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
            >
              Start Online Application
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
