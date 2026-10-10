import React, { useState, useId } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { X, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface EmiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyWithEmi: (courseId: string, emiAmount: number, tenure: number) => void;
  initialCourseId?: string;
}

export const EmiCalculatorModal: React.FC<EmiCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApplyWithEmi,
  initialCourseId = 'mba'
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourseId);
  const [tenure, setTenure] = useState<number>(24);
  const [includeEarlyBird, setIncludeEarlyBird] = useState<boolean>(true);
  const [downPayment, setDownPayment] = useState<number>(0);

  const programSelectId = useId();
  const earlyBirdCheckboxId = useId();
  const downPaymentInputId = useId();

  if (!isOpen) return null;

  const currentCourse: Course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];
  const rawFee = currentCourse.totalFee;
  const discountedFee = includeEarlyBird ? Math.round(rawFee * 0.8) : rawFee;
  const principalAfterDownPayment = Math.max(0, discountedFee - downPayment);
  const monthlyEmi = Math.round(principalAfterDownPayment / tenure);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e7eeff] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#e7eeff] flex items-center justify-between bg-[#f0f3ff]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#115eaf] text-white flex items-center justify-center shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#000f22] font-sans">
                Zero-Cost EMI & Tuition Calculator
              </h3>
              <p className="text-xs text-[#43474d]">
                Instant monthly financing calculations with 0% interest subvention
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#74777e] hover:text-[#000f22] rounded-lg hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label htmlFor={programSelectId} className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-2">
              Select Degree Program
            </label>
            <select
              id={programSelectId}
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#c4c6ce] text-sm font-semibold text-[#000f22] bg-white focus:outline-none focus:border-[#115eaf] focus:ring-2 focus:ring-[#115eaf]/20 transition-all cursor-pointer"
            >
              {COURSES_DATA.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name} - ₹{course.totalFee.toLocaleString('en-IN')} ({course.duration})
                </option>
              ))}
            </select>
          </div>

          <div className="p-4 rounded-xl bg-[#e7eeff]/60 border border-[#b1c8eb] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id={earlyBirdCheckboxId}
                checked={includeEarlyBird}
                onChange={(e) => setIncludeEarlyBird(e.target.checked)}
                className="w-5 h-5 rounded text-[#115eaf] focus:ring-[#115eaf] cursor-pointer"
              />
              <label htmlFor={earlyBirdCheckboxId} className="cursor-pointer">
                <span className="text-sm font-bold text-[#000f22] block">
                  Apply 20% Early Bird Scholarship Grant
                </span>
                <span className="text-xs text-[#115eaf] font-medium">
                  Saves ₹{Math.round(rawFee * 0.2).toLocaleString('en-IN')} on overall tuition
                </span>
              </label>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#ffdcc3] text-[#6e3900]">
              Guaranteed
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#000f22] uppercase tracking-wider mb-2">
              Select Repayment Tenure (Months)
            </label>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[6, 12, 18, 24].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTenure(t)}
                  className={`py-3 px-2 rounded-xl text-center font-bold text-sm transition-all cursor-pointer ${
                    tenure === t
                      ? 'bg-[#115eaf] text-white shadow-sm ring-2 ring-[#115eaf]/30'
                      : 'bg-[#f0f3ff] text-[#000f22] hover:bg-[#e7eeff]'
                  }`}
                >
                  <span className="block text-base">{t} Mo</span>
                  <span className={`text-[10px] block font-normal ${tenure === t ? 'text-blue-100' : 'text-[#74777e]'}`}>
                    {t <= 12 ? 'Zero Cost' : 'No Interest'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={downPaymentInputId} className="text-xs font-bold text-[#000f22] uppercase tracking-wider">
                Optional Down Payment
              </label>
              <span className="text-sm font-bold text-[#115eaf]">
                ₹{downPayment.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              id={downPaymentInputId}
              type="range"
              min={0}
              max={Math.min(50000, discountedFee / 2)}
              step={2000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-[#e7eeff] rounded-lg appearance-none cursor-pointer accent-[#115eaf]"
            />
            <div className="flex justify-between text-[11px] text-[#74777e] mt-1">
              <span>₹0 (Zero Down Payment)</span>
              <span>₹{Math.min(50000, Math.round(discountedFee / 2)).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0b2540] to-[#000f22] text-white space-y-4 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs text-[#b1c8eb] uppercase tracking-wider font-semibold">
                  Calculated Monthly Installment
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  ₹{monthlyEmi.toLocaleString('en-IN')} <span className="text-sm font-normal text-[#b1c8eb]">/ month</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  0% Interest Rate
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs text-[#d8e3fb]">
              <div>
                <span className="text-[#768dad] block">Standard Fee:</span>
                <span className="font-semibold line-through text-[#768dad]">
                  ₹{rawFee.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-[#768dad] block">Net Tuition:</span>
                <span className="font-bold text-white">
                  ₹{discountedFee.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-[#768dad] block">Total Interest:</span>
                <span className="font-bold text-emerald-400">
                  ₹0 (Subvented)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#43474d] bg-[#f0f3ff] p-3 rounded-xl border border-[#e7eeff]">
            <ShieldCheck className="w-4 h-4 text-[#115eaf] shrink-0" />
            <span>
              Partnered with <strong>HDFC, ICICI, LiquiLoans & Propelld</strong> for zero-paperwork paperless digital approvals in under 10 minutes.
            </span>
          </div>
        </div>

        <div className="p-6 border-t border-[#e7eeff] bg-[#f9f9ff] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#c4c6ce] text-[#000f22] font-semibold text-sm hover:bg-white transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onApplyWithEmi(selectedCourseId, monthlyEmi, tenure);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#115eaf] text-white font-bold text-sm shadow hover:bg-[#004689] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed with ₹{monthlyEmi.toLocaleString('en-IN')}/mo Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
