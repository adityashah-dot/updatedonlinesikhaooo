import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityPlacementsProps {
  university: UniversityData;
}

export const UniversityPlacements: React.FC<UniversityPlacementsProps> = ({ university }) => {
  return (
    <section id="placements" className="scroll-mt-32 space-y-11">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Placements & Career Acceleration
        </h2>
        <p className="mt-1 text-sm text-slate-600 max-w-3xl leading-relaxed">
          {university.placements.intro}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {university.placements.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 bg-white border border-slate-200 rounded-xl shadow-xs"
          >
            <span className="block text-xs font-medium text-slate-500">
              {metric.label}
            </span>
            <span className="block text-2xl font-bold text-slate-900 tabular-nums mt-1">
              {metric.value}
            </span>
            {metric.note && (
              <span className="block text-xs text-slate-500 mt-1">
                {metric.note}
              </span>
            )}
          </div>
        ))}
      </div>

      {university.placements.supportServices && university.placements.supportServices.length > 0 && (
        <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-700" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Dedicated Career & Placement Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {university.placements.supportServices.map((service, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {university.placements.recruiters && university.placements.recruiters.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900">
              Top Corporate Recruiting Partners
            </h3>
            <span className="text-xs text-slate-500">
              MNC & Fortune 500 Employers
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {university.placements.recruiters.map((recruiter, idx) => (
              <div
                key={idx}
                className="h-24 bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-1.5 shadow-xs hover:border-slate-300 transition-colors"
              >
                <span className="text-xs font-bold text-slate-800 text-center">{recruiter.name}</span>
                <span className="text-[11px] font-medium text-slate-500 text-center">
                  Hiring Partner
                </span>
              </div>
            ))}
          </div>
          {university.placements.note && (
            <p className="text-xs text-slate-500 pt-1">
              {university.placements.note}
            </p>
          )}
        </div>
      )}
    </section>
  );
};
