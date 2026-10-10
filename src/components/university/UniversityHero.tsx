import React from 'react';
import {
  MapPin,
  Calendar,
  ShieldCheck,
  Award,
  Download,
  GraduationCap,
  Calculator,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { UniversityData } from '../../types/university';

interface UniversityHeroProps {
  university: UniversityData;
  onOpenApply: (courseId?: string) => void;
  onOpenBrochure: () => void;
  onOpenEmi: () => void;
  onOpenCounselor?: () => void;
}

export const UniversityHero: React.FC<UniversityHeroProps> = ({
  university,
  onOpenApply,
  onOpenBrochure,
  onOpenEmi,
  onOpenCounselor,
}) => {
  return (
    <div className="relative bg-white border-b border-slate-200">
      {/* Background Cover Band */}
      <div className="h-44 sm:h-56 md:h-64 w-full relative overflow-hidden bg-slate-900">
        {university.backgroundImage ? (
          <img
            src={university.backgroundImage}
            alt={university.name}
            className="w-full h-full object-cover object-center opacity-40 brightness-95"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

        {/* Top Badges Floating Over Cover */}
        <div className="absolute top-4 left-4 right-4 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Admissions Open {university.verifiedYear || '2026'}</span>
          </div>
          {university.officialWebsite && (
            <a
              href={`https://${university.officialWebsite}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/80 hover:text-white flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 transition-colors pointer-events-auto"
            >
              <span>{university.officialWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 sm:-mt-20 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Logo and Core Identity */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl bg-white border-2 border-white shadow-xl p-3 flex items-center justify-center shrink-0">
                {university.logoImage ? (
                  <img
                    src={university.logoImage}
                    alt={`${university.name} official logo`}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <GraduationCap className="w-16 h-16 text-blue-800" />
                )}
              </div>

              <div className="space-y-2 max-w-2xl">
                {/* Meta Breadcrumb */}
                <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium text-slate-500">
                  <span className="text-blue-700 font-semibold">{university.type || 'UGC-DEB Entitled'}</span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {university.location}
                  </span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Est. {university.established}
                  </span>
                  {university.rating && (
                    <>
                      <span aria-hidden="true">•</span>
                      <span className="text-amber-700 font-semibold">★ {university.rating} ({university.reviewsCount || '1.2k+'} reviews)</span>
                    </>
                  )}
                </div>

                {/* Primary University Name */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance">
                  {university.name}
                </h1>

                {/* Tagline / Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 line-clamp-2">
                  {university.tagline}
                </p>

                {/* Accreditation Marks */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {university.naacGrade && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-900 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                      {university.naacGrade}
                    </span>
                  )}
                  {university.nirfRanking && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      NIRF #{university.nirfRanking}
                    </span>
                  )}
                  {university.approvals?.slice(0, 4).map((app, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => onOpenApply()}
                  className="flex-1 sm:flex-none px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all text-center whitespace-nowrap active:scale-[0.99] cursor-pointer"
                >
                  Apply Online
                </button>
                <button
                  type="button"
                  onClick={onOpenBrochure}
                  className="flex-1 sm:flex-none px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>Brochure</span>
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 justify-center lg:justify-end w-full">
                {university.quickStats.emiStarting && (
                  <button
                    type="button"
                    onClick={onOpenEmi}
                    className="flex items-center gap-1 hover:text-blue-700 transition-colors font-medium underline underline-offset-4 cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5 text-blue-600" />
                    <span>EMI from {university.quickStats.emiStarting}</span>
                  </button>
                )}
                {onOpenCounselor && (
                  <>
                    <span aria-hidden="true">•</span>
                    <button
                      type="button"
                      onClick={onOpenCounselor}
                      className="flex items-center gap-1 hover:text-blue-700 transition-colors font-medium cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Free Counselling</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-6 border-t border-slate-200">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-xs text-slate-500 font-medium">Course Fee Range</span>
              <span className="block text-base font-bold text-slate-900 tabular-nums mt-1">
                {university.quickStats.feeRange}
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-xs text-slate-500 font-medium">Program Duration</span>
              <span className="block text-base font-bold text-slate-900 mt-1">
                {university.quickStats.duration}
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-xs text-slate-500 font-medium">Learning & Exam Mode</span>
              <span className="block text-base font-bold text-slate-900 mt-1 truncate" title={university.quickStats.mode}>
                {university.quickStats.mode}
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-xs text-slate-500 font-medium">Placement Assistance</span>
              <span className="block text-base font-bold text-emerald-700 tabular-nums mt-1">
                {university.quickStats.placementRate}
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-xs text-slate-500 font-medium">Highest Package</span>
              <span className="block text-base font-bold text-blue-700 tabular-nums mt-1">
                {university.quickStats.highestPackage || '₹20+ LPA'}
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="block text-xs text-slate-500 font-medium">No-Cost EMI</span>
              <span className="block text-base font-bold text-slate-900 tabular-nums mt-1">
                {university.quickStats.emiStarting || '0% Interest'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
