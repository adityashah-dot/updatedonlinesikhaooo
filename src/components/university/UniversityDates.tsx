import React from 'react';
import { Clock } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityDatesProps {
  university: UniversityData;
  onOpenApply: () => void;
}

export const UniversityDates: React.FC<UniversityDatesProps> = ({ university, onOpenApply }) => {
  return (
    <section id="dates" className="scroll-mt-32 space-y-11">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Important Dates & Admission Schedule
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Current intake cycle calendar for upcoming undergraduate and postgraduate batches.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenApply}
          className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
        >
          Apply in Current Batch
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
              <th className="py-3 px-4 sm:px-6">Admission Stage / Event</th>
              <th className="py-3 px-4 sm:px-6">Timeline / Schedule</th>
              <th className="py-3 px-4 sm:px-6 hidden md:table-cell">Mode</th>
              <th className="py-3 px-4 sm:px-6 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 text-slate-700">
            {university.importantDates.items.map((item, idx) => {
              const isActive = item.status === 'Active' || item.status === 'Open';
              return (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                    {item.event}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.date}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 hidden md:table-cell">
                    {item.mode || 'Digital Portal'}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80'
                          : 'bg-blue-50 text-blue-800 border border-blue-200/80'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                      <span>{item.status}</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {university.importantDates.note && (
        <p className="text-xs text-slate-500">
          * {university.importantDates.note}
        </p>
      )}
    </section>
  );
};
