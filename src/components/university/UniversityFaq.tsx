import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityFaqProps {
  university: UniversityData;
}

export const UniversityFaq: React.FC<UniversityFaqProps> = ({ university }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="scroll-mt-32 space-y-11">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Everything you need to know about admissions, examinations, degree validity, and fee financing for {university.shortName}.
        </p>
      </div>

      <div className="space-y-3">
        {university.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-700' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
