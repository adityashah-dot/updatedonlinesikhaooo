import React from 'react';

export interface NavSectionItem {
  id: string;
  label: string;
}

export const UNIVERSITY_NAV_SECTIONS: NavSectionItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'courses', label: 'Courses & Fees' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'fees', label: 'Fees & Financing' },
  { id: 'placements', label: 'Placements' },
  { id: 'accreditations', label: 'Rankings' },
  { id: 'lms', label: 'LMS & Exams' },
  { id: 'dates', label: 'Important Dates' },
  { id: 'faqs', label: 'FAQs' },
];

interface UniversityNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenApply: () => void;
}

export const UniversityNav: React.FC<UniversityNavProps> = ({
  activeSection,
  onSelectSection,
  onOpenApply,
}) => {
  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <nav
            aria-label="University Page Sections"
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar scroll-smooth"
          >
            {UNIVERSITY_NAV_SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSelectSection(section.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-800 font-semibold border border-blue-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenApply}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors whitespace-nowrap shadow-xs cursor-pointer"
            >
              Apply Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
