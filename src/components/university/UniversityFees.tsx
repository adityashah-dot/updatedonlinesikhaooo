import React from 'react';
import { Calculator, Award, ChevronRight } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityFeesProps {
  university: UniversityData;
  onOpenEmi: () => void;
  onOpenApply: () => void;
}

export const UniversityFees: React.FC<UniversityFeesProps> = ({
  university,
  onOpenEmi,
  onOpenApply,
}) => {
  return (
    <section id="fees" className="scroll-mt-32 space-y-11">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Fees, Installment Options & Scholarships
        </h2>
        <p className="mt-1 text-sm text-slate-600 max-w-3xl">
          {university.feesAndFinancing.intro}
        </p>
      </div>

      <div className="p-5 sm:p-6 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-800/80 text-blue-200 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Zero-Cost Monthly Financing</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Pay in Easy Monthly Installments with 0% Interest
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {university.feesAndFinancing.emiOptionsDescription ||
              'Convert your semester or annual program fees into budget-friendly monthly payments through verified banking partners with zero processing fee.'}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenEmi}
            className="px-5 py-2.5 bg-white text-blue-900 hover:bg-slate-100 font-semibold text-xs sm:text-sm rounded-lg shadow transition-colors text-center cursor-pointer"
          >
            Calculate Your EMI
          </button>
          <span className="text-center text-[11px] text-slate-300">
            Tenures: 6, 9 & 12 Months
          </span>
        </div>
      </div>

      {university.feesAndFinancing.scholarships && university.feesAndFinancing.scholarships.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              Scholarships & Fee Concession Schemes
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Subject to Document Verification
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {university.feesAndFinancing.scholarships.map((sch, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200/80">
                      {sch.tag || 'Tuition Grant'}
                    </span>
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {sch.title}
                  </h4>
                  <div className="text-xs font-semibold text-emerald-700 mb-2">
                    Benefit: {sch.benefit}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sch.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onOpenApply}
                    className="text-xs font-medium text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Check Eligibility for this Grant</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {university.feesAndFinancing.scholarshipsNote && (
            <p className="text-xs text-slate-500 leading-normal">
              {university.feesAndFinancing.scholarshipsNote}
            </p>
          )}
        </div>
      )}
    </section>
  );
};
