import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  Calculator,
} from 'lucide-react';
import { UniversityData } from '../../types/university';
import type { Course } from '../../types';

interface UniversityCoursesProps {
  university: UniversityData;
  onOpenApply: (courseId?: string) => void;
  onOpenEmi: (courseId?: string) => void;
  onSelectCourse?: (course: Course) => void;
}

export const UniversityCourses: React.FC<UniversityCoursesProps> = ({
  university,
  onOpenApply,
  onOpenEmi,
}) => {
  const [levelFilter, setLevelFilter] = useState<'all' | 'PG' | 'UG' | 'Diploma'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return university.courses.filter((c) => {
      const matchesLevel = levelFilter === 'all' || c.level === levelFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        (c.code && c.code.toLowerCase().includes(q)) ||
        c.specializations.some((s) => s.toLowerCase().includes(q));
      return matchesLevel && matchesSearch;
    });
  }, [university.courses, levelFilter, searchQuery]);

  return (
    <section id="courses" className="scroll-mt-32 space-y-11">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Courses & Fees Structure
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Explore UGC-entitled degree programs with detailed semester fees, eligibility, and specializations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setLevelFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              levelFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Degrees ({university.courses.length})
          </button>
          <button
            type="button"
            onClick={() => setLevelFilter('PG')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              levelFilter === 'PG'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PG Master's
          </button>
          <button
            type="button"
            onClick={() => setLevelFilter('UG')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              levelFilter === 'UG'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            UG Bachelor's
          </button>
        </div>
      </div>

      {/* Course Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search degree titles or specializations (e.g. MBA, MCA, BBA, Data Science, AI)..."
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900 placeholder:text-slate-400"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Courses List */}
      {filteredCourses.length === 0 ? (
        <div className="p-8 text-center bg-white border border-slate-200 rounded-xl">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h3 className="text-base font-semibold text-slate-800">No matching programs found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search query or reset the level filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setLevelFilter('all');
              setSearchQuery('');
            }}
            className="mt-3 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                {/* Left Program Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500">
                    <span className="font-semibold text-blue-700">
                      {course.level === 'PG' ? 'Postgraduate Degree' : 'Undergraduate Degree'}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                    {course.specializationsCount && course.specializationsCount > 1 && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span className="text-slate-700 font-medium">
                          {course.specializationsCount} Specializations Available
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {course.name}
                    </h3>
                    {course.description && (
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    )}
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                    <strong className="text-slate-900 font-semibold">Eligibility: </strong>
                    <span>{course.eligibility}</span>
                  </div>

                  {course.specializations && course.specializations.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-semibold text-slate-600 block">
                        Electives & Specialization Tracks:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.specializations.slice(0, 6).map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs text-slate-700 bg-slate-100/90 border border-slate-200/80 px-2 py-0.5 rounded"
                          >
                            {spec}
                          </span>
                        ))}
                        {course.specializations.length > 6 && (
                          <span className="text-xs text-slate-500 px-1 py-0.5">
                            +{course.specializations.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {course.careerProspects && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                      {course.careerProspects.avgPackage && (
                        <span>
                          Avg CTC: <strong className="text-slate-800">{course.careerProspects.avgPackage}</strong>
                        </span>
                      )}
                      {course.careerProspects.highestPackage && (
                        <>
                          <span aria-hidden="true">•</span>
                          <span>
                            Highest CTC: <strong className="text-blue-700">{course.careerProspects.highestPackage}</strong>
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Pricing & Actions Panel */}
                <div className="lg:w-64 lg:border-l lg:border-slate-200 lg:pl-6 flex flex-col justify-between shrink-0 pt-3 lg:pt-0 border-t border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 font-medium block">
                      Total Course Fee
                    </span>
                    <div className="text-2xl font-bold text-slate-900 tabular-nums">
                      {course.totalFee}
                    </div>
                    {course.feePerSemester && (
                      <span className="text-xs text-slate-500 block tabular-nums">
                        Approx. {course.feePerSemester} / semester
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-2">
                    <button
                      type="button"
                      onClick={() => onOpenApply(course.id)}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors text-center shadow-xs cursor-pointer"
                    >
                      Apply for {course.code || 'Course'}
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenEmi(course.id)}
                      className="w-full py-2 px-3 text-xs font-medium text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calculator className="w-3.5 h-3.5 text-blue-600" />
                      <span>Check Monthly EMI</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
