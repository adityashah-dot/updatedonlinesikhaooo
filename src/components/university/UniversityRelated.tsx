import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { UniversityData } from '../../types/university';
import { getRelatedUniversities } from '../../data/universities';

interface UniversityRelatedProps {
  currentUniversityId: string;
}

export const UniversityRelated: React.FC<UniversityRelatedProps> = ({ currentUniversityId }) => {
  const relatedUniversities = getRelatedUniversities(currentUniversityId, 3);

  if (relatedUniversities.length === 0) return null;

  return (
    <section className="space-y-11 pt-11 border-t border-slate-200">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Compare with Other Leading Online Universities
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Compare accreditation, fee structures, and placement records with top UGC-entitled peer universities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {relatedUniversities.map((uni) => (
          <div
            key={uni.id}
            className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{uni.location}</span>
                <span aria-hidden="true">•</span>
                <span className="font-semibold text-blue-700">{uni.naacGrade || 'UGC Entitled'}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                {uni.name}
              </h3>
              <div className="p-2.5 bg-slate-50 rounded-lg space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Fee Range:</span>
                  <span className="font-bold text-slate-900 tabular-nums">{uni.quickStats.feeRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-medium text-slate-800">{uni.quickStats.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Placement Rate:</span>
                  <span className="font-bold text-emerald-700">{uni.quickStats.placementRate}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                {uni.approvals.slice(0, 3).map((app, aIdx) => (
                  <span key={aIdx} className="bg-slate-100 px-2 py-0.5 rounded">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <Link
                to={`/universities/${uni.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full py-2 px-3 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View {uni.shortName} Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
