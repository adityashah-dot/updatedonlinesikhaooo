import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityRankingsProps {
  university: UniversityData;
}

export const UniversityRankings: React.FC<UniversityRankingsProps> = ({ university }) => {
  return (
    <section id="accreditations" className="scroll-mt-32 space-y-11">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Government Recognitions & Accreditations
        </h2>
        <p className="mt-1 text-sm text-slate-600 max-w-3xl leading-relaxed">
          {university.rankingsAndAccreditations.intro}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
              <th className="py-3 px-4 sm:px-6 w-1/3">Statutory Council / Ranking Body</th>
              <th className="py-3 px-4 sm:px-6">Recognition Status & Equivalence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 text-slate-700">
            {university.rankingsAndAccreditations.table.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 align-top">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{row.authority}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 sm:px-6 align-top">
                  <span className="font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded text-xs inline-block mb-1">
                    {row.status}
                  </span>
                  {row.description && (
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      {row.description}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
