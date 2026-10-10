import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Course, CourseCategory } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { ALL_UNIVERSITIES } from '../data/universities';
import { 
  CheckCircle, 
  Search, 
  ChevronRight, 
  Download, 
  ArrowRight, 
  Calculator, 
  Star, 
  ChevronDown, 
  PhoneCall, 
  Laptop, 
  CreditCard, 
  Layers, 
  Calendar,
  Gift,
  Clock,
  Building2,
  X,
  GraduationCap,
  ShieldCheck,
  Award,
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface CoursesAndFeesViewProps {
  onSelectCourse: (course: Course) => void;
  onOpenApply: (courseId?: string) => void;
  onOpenBrochure: (course?: Course) => void;
  onOpenEmi: (courseId?: string) => void;
  onOpenHelpDesk: () => void;
  universityNavigation?: React.ReactNode;
}

export interface CatalogCourse {
  id: string;
  code: string;
  name: string;
  degreeTitle: string;
  category: CourseCategory;
  level: string;
  duration: string;
  semestersCount: number;
  perSemFee: number;
  totalFee: number;
  perSemFeeFormatted: string;
  totalFeeFormatted: string;
  highlightBadge?: string;
  eligibility: string;
  shortDescription: string;
  specializations: string[];
  universityId: string;
  universityName: string;
  universityShort: string;
  universityLocation: string;
  universityNaac?: string;
  universityNirf?: string;
  careerProspects?: {
    avgPackage?: string;
    highestPackage?: string;
    roles?: string[];
  };
  brochurePdfName?: string;
  originalCourse?: Course;
}

// Helper to reliably parse numeric fee from various string representations
function parseFeeNumber(feeStr: string | number | undefined, defaultVal: number): number {
  if (typeof feeStr === 'number') return feeStr;
  if (!feeStr) return defaultVal;
  const match = feeStr.match(/[\d,]+/);
  if (!match) return defaultVal;
  const num = parseInt(match[0].replace(/,/g, ''), 10);
  return isNaN(num) ? defaultVal : num;
}

export const CoursesAndFeesView: React.FC<CoursesAndFeesViewProps> = ({
  onSelectCourse,
  onOpenApply,
  onOpenBrochure,
  onOpenEmi,
  onOpenHelpDesk,
  universityNavigation
}) => {
  const navigate = useNavigate();

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('search') || '';
    }
    return '';
  });

  const [selectedUniversity, setSelectedUniversity] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('university') || 'all';
    }
    return 'all';
  });

  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [sortBy, setSortBy] = useState<'popularity' | 'fee-asc' | 'fee-desc' | 'duration'>('popularity');

  // Sync with URL query parameter changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('search');
      if (q !== null && q !== searchQuery) {
        setSearchQuery(q);
      }
      const u = params.get('university');
      if (u !== null && u !== selectedUniversity) {
        setSelectedUniversity(u);
      }
    }
  }, [window.location.search]);

  // Aggregate multi-university course catalog
  const allCatalogCourses: CatalogCourse[] = useMemo(() => {
    // 1. LPU Courses from COURSES_DATA
    const lpuCatalog: CatalogCourse[] = COURSES_DATA.map((c) => ({
      id: c.id,
      code: c.code,
      name: c.name,
      degreeTitle: c.code ? `Online ${c.code}` : c.name,
      category: c.category,
      level: c.level,
      duration: c.duration,
      semestersCount: c.semestersCount,
      perSemFee: c.perSemFee,
      totalFee: c.totalFee,
      perSemFeeFormatted: `₹${c.perSemFee.toLocaleString('en-IN')}`,
      totalFeeFormatted: `₹${c.totalFee.toLocaleString('en-IN')}`,
      highlightBadge: c.highlightBadge,
      eligibility: c.eligibility,
      shortDescription: c.shortDescription,
      specializations: c.specializations || [],
      universityId: 'lpu-online',
      universityName: 'Lovely Professional University (LPU Online)',
      universityShort: 'LPU Online',
      universityLocation: 'Phagwara, Punjab',
      universityNaac: 'NAAC A++ (Score 3.68)',
      universityNirf: 'NIRF #31',
      careerProspects: c.careerProspects,
      brochurePdfName: c.brochurePdfName,
      originalCourse: c,
    }));

    // 2. Degrees from other top accredited universities in ALL_UNIVERSITIES
    const otherUniversitiesCatalog: CatalogCourse[] = ALL_UNIVERSITIES
      .filter((u) => u.id !== 'lpu-online')
      .flatMap((u) => {
        return u.courses.map((c) => {
          const totalNum = parseFeeNumber(c.totalFee, 150000);
          const semNum = parseFeeNumber(c.feePerSemester, Math.round(totalNum / 4));
          const cat: CourseCategory = c.level.toLowerCase().includes('pg')
            ? 'pg'
            : c.level.toLowerCase().includes('ug')
            ? 'ug'
            : 'diploma';
          const lvl = c.level.includes('PG') ? 'PG Degree' : c.level.includes('UG') ? 'UG Degree' : 'Diploma';

          return {
            id: c.id,
            code: c.code || 'DEGREE',
            name: c.name,
            degreeTitle: c.code ? `Online ${c.code}` : c.name,
            category: cat,
            level: lvl,
            duration: c.duration,
            semestersCount: c.duration.includes('3') ? 6 : c.duration.includes('1') ? 2 : 4,
            perSemFee: semNum,
            totalFee: totalNum,
            perSemFeeFormatted: `₹${semNum.toLocaleString('en-IN')}`,
            totalFeeFormatted: `₹${totalNum.toLocaleString('en-IN')}`,
            highlightBadge: u.tagline ? 'UGC-DEB Entitled' : undefined,
            eligibility: c.eligibility,
            shortDescription:
              c.description ||
              `${c.name} offered fully online by ${u.name} with NAAC accreditation, live interactive lectures, and flexible remote examinations.`,
            specializations: c.specializations || [],
            universityId: u.id,
            universityName: u.name,
            universityShort: u.shortName,
            universityLocation: u.location,
            universityNaac: u.naacGrade,
            universityNirf: u.nirfRanking ? `NIRF #${u.nirfRanking}` : undefined,
            careerProspects: c.careerProspects,
            brochurePdfName: u.brochureUrl,
          };
        });
      });

    return [...lpuCatalog, ...otherUniversitiesCatalog];
  }, []);

  // Filter courses by university name or degree title
  const filteredCourses = useMemo(() => {
    return allCatalogCourses
      .filter((course) => {
        // 1. University dropdown filter
        if (selectedUniversity !== 'all' && course.universityId !== selectedUniversity) {
          return false;
        }

        // 2. Degree category filter
        if (selectedCategory !== 'all' && course.category !== selectedCategory) {
          return false;
        }

        // 3. Search query: filters based on University Names OR Degree Titles
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();

          // University name matches
          const matchesUniversity =
            course.universityName.toLowerCase().includes(q) ||
            course.universityShort.toLowerCase().includes(q) ||
            course.universityId.toLowerCase().includes(q) ||
            course.universityLocation.toLowerCase().includes(q);

          // Degree title matches
          const matchesDegree =
            course.name.toLowerCase().includes(q) ||
            course.degreeTitle.toLowerCase().includes(q) ||
            course.code.toLowerCase().includes(q);

          // Specialization or description matches
          const matchesSpecs = course.specializations.some((s) => s.toLowerCase().includes(q));
          const matchesDesc = course.shortDescription.toLowerCase().includes(q);

          if (!matchesUniversity && !matchesDegree && !matchesSpecs && !matchesDesc) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'fee-asc') return a.totalFee - b.totalFee;
        if (sortBy === 'fee-desc') return b.totalFee - a.totalFee;
        if (sortBy === 'duration') return a.semestersCount - b.semestersCount;
        const popularityOrder = [
          'mba',
          'mca',
          'bca',
          'bba',
          'bcom',
          'ba',
          'mcom',
          'msc-math',
          'msc-eco',
          'ma',
          'diploma',
        ];
        const aIndex = popularityOrder.findIndex((k) => a.id.toLowerCase().includes(k));
        const bIndex = popularityOrder.findIndex((k) => b.id.toLowerCase().includes(k));
        return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
      });
  }, [allCatalogCourses, selectedUniversity, selectedCategory, searchQuery, sortBy]);

  // Handler to open CourseDetailModal with a full Course instance
  const handleSelectCourseItem = (catCourse: CatalogCourse) => {
    if (catCourse.originalCourse) {
      onSelectCourse(catCourse.originalCourse);
    } else {
      const synthesized: Course = {
        id: catCourse.id,
        code: catCourse.code,
        name: catCourse.name,
        shortDescription: catCourse.shortDescription,
        category: catCourse.category === 'all' ? 'pg' : (catCourse.category as 'ug' | 'pg' | 'diploma'),
        level: catCourse.level,
        duration: catCourse.duration,
        semestersCount: catCourse.semestersCount,
        perSemFee: catCourse.perSemFee,
        totalFee: catCourse.totalFee,
        credits: 90,
        eligibility: catCourse.eligibility,
        careerProspects: {
          avgPackage: catCourse.careerProspects?.avgPackage || '5.5 - 7.5 LPA',
          highestPackage: catCourse.careerProspects?.highestPackage || '18+ LPA',
          roles: catCourse.careerProspects?.roles || ['Domain Specialist', 'Strategy Consultant', 'Manager', 'Analyst'],
        },
        syllabus: [
          {
            semester: 1,
            credits: 22,
            subjects: [
              { name: `${catCourse.name} - Core Foundations`, type: 'Core' },
              { name: 'Applied Analytics & Research Frameworks', type: 'Core' },
              { name: 'Business Leadership & Communication', type: 'Core' },
            ],
          },
          {
            semester: 2,
            credits: 22,
            subjects: [
              { name: 'Advanced Domain Specialization', type: 'Core' },
              { name: 'Industry Practicum & Capstone', type: 'Specialization' },
              { name: 'Executive Case Seminars', type: 'Project' },
            ],
          },
        ],
        specializations: catCourse.specializations,
        brochurePdfName: catCourse.brochurePdfName || 'https://images.degreefyd.com//lpu-online-brochure.pdf',
      };
      onSelectCourse(synthesized);
    }
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedUniversity('all');
    setSelectedCategory('all');
    setSortBy('popularity');
  };

  return (
    <div className="space-y-0 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#e7eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-xs text-[#43474d] space-x-2 font-medium">
            <span onClick={() => navigate('/')} className="hover:text-[#115eaf] cursor-pointer">
              Home
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span onClick={() => navigate('/universities')} className="hover:text-[#115eaf] cursor-pointer">
              Universities
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#74777e]" />
            <span className="text-[#000f22] font-bold">Courses &amp; Degree Programs</span>
          </nav>
        </div>
      </div>

      {/* Hero Header & Primary Search Console */}
      <section className="relative bg-gradient-to-b from-[#f0f3ff] via-[#f9f9ff] to-[#f9f9ff] overflow-hidden border-b border-[#e7eeff]/70 py-8 sm:py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/80 text-[#0b5cad] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0b5cad]" />
              <span className="uppercase tracking-wider">UGC-DEB Entitled Degree Programs 2026</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-medium">100% Govt Recognized</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#000f22] tracking-tight leading-tight">
              Online Degree Programs &amp; University Fees 2026
            </h1>
            <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed font-normal">
              Search accredited online undergraduate, postgraduate, and diploma degrees across India's top UGC-entitled universities. Compare official semester fees, specializations, NAAC ratings, and 0% EMI options.
            </p>
          </div>

          {/* =========================================================================
              PRIMARY SEARCH BAR (FILTERS BASED ON UNIVERSITY NAMES OR DEGREE TITLES)
              ========================================================================= */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-200 shadow-md space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
              {/* Full-width Search Input */}
              <div className="md:col-span-8 relative flex items-center">
                <Search className="absolute left-3.5 text-[#115eaf] w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by university name or degree title (e.g. Lovely Professional University, Online MBA, Amity, MCA, Manipal)..."
                  className="w-full pl-11 pr-9 py-3 bg-[#f8fbff] rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#115eaf] focus:ring-2 focus:ring-[#115eaf]/15 transition-all font-normal"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* University Selector Dropdown in Primary Console */}
              <div className="md:col-span-4 relative">
                <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className="w-full h-[46px] pl-9 pr-8 bg-[#f8fbff] rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-[#0b2540] focus:border-[#115eaf] focus:ring-2 focus:ring-[#115eaf]/15 outline-none appearance-none cursor-pointer"
                >
                  <option value="all">All Universities ({allCatalogCourses.length} Degrees)</option>
                  <option value="lpu-online">Lovely Professional University (LPU)</option>
                  <option value="amity-online">Amity University Online</option>
                  <option value="cu-online">Chandigarh University (CU)</option>
                  <option value="manipal-online">Manipal University Jaipur</option>
                  <option value="jain-online">Jain University Online</option>
                  <option value="upes-online">UPES Online</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Quick Degree & University Shortcut Pills */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[11px] font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#115eaf]" />
                <span>Degrees:</span>
              </span>
              {['Online MBA', 'Online MCA', 'Online BBA', 'Online BCA', 'Online M.Com', 'Data Science & AI'].map((deg) => (
                <button
                  key={deg}
                  type="button"
                  onClick={() => setSearchQuery(searchQuery.toLowerCase() === deg.toLowerCase() ? '' : deg)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    searchQuery.toLowerCase() === deg.toLowerCase()
                      ? 'bg-[#115eaf] text-white shadow-2xs'
                      : 'bg-[#f4f7fc] text-slate-700 hover:bg-blue-50 hover:text-[#115eaf]'
                  }`}
                >
                  {deg}
                </button>
              ))}

              <span className="text-[11px] font-semibold text-slate-300 mx-1 hidden sm:inline">|</span>

              <span className="text-[11px] font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Universities:</span>
              </span>
              {['LPU Online', 'Amity Online', 'Chandigarh Univ', 'Manipal', 'Jain', 'UPES'].map((u) => {
                const queryVal = u.replace(' Online', '').replace(' Univ', '');
                const isSelected = searchQuery.toLowerCase().includes(queryVal.toLowerCase());
                return (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setSearchQuery(isSelected ? '' : queryVal)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0b2540] text-white shadow-2xs'
                        : 'bg-[#f4f7fc] text-slate-700 hover:bg-amber-50 hover:text-amber-800'
                    }`}
                  >
                    {u}
                  </button>
                );
              })}
            </div>

            {/* Active Search & Filter Feedback Bar */}
            {(searchQuery.trim() || selectedUniversity !== 'all' || selectedCategory !== 'all') && (
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs bg-blue-50/70 px-3 py-2 rounded-xl border border-blue-100">
                <div className="flex items-center gap-1.5 text-[#0b2540]">
                  <Search className="w-3.5 h-3.5 text-[#115eaf]" />
                  <span>
                    Showing <strong>{filteredCourses.length}</strong> {filteredCourses.length === 1 ? 'program' : 'programs'}
                    {searchQuery.trim() && (
                      <>
                        {' '}matching <strong>"{searchQuery}"</strong>
                      </>
                    )}
                    {selectedUniversity !== 'all' && (
                      <>
                        {' '}in <strong>{ALL_UNIVERSITIES.find((u) => u.id === selectedUniversity)?.name || selectedUniversity}</strong>
                      </>
                    )}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-xs font-semibold text-[#115eaf] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {universityNavigation}

      {/* STICKY FILTER STRIP & QUICK SORT */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-[#e7eeff] shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Degree Level Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 [scrollbar-width:none]">
            {[
              { id: 'all', label: `All Degrees (${allCatalogCourses.length})` },
              { id: 'pg', label: "Master's (PG)" },
              { id: 'ug', label: "Bachelor's (UG)" },
              { id: 'diploma', label: 'Diploma' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as CourseCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b2540] text-white shadow-2xs'
                    : 'bg-[#f0f3ff] text-[#43474d] hover:bg-[#e7eeff]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search + Sort Controls */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <div className="relative flex-1 md:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search degree or university..."
                className="w-full h-9 pl-8 pr-7 rounded-xl border border-slate-300 bg-white text-xs font-normal focus:border-[#115eaf] focus:ring-2 focus:ring-[#115eaf]/15 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <div className="relative min-w-[130px]">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full h-9 px-3 pr-7 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-[#000f22] focus:border-[#115eaf] outline-none appearance-none cursor-pointer"
              >
                <option value="popularity">Sort: Popularity</option>
                <option value="fee-asc">Fee: Low to High</option>
                <option value="fee-desc">Fee: High to Low</option>
                <option value="duration">Duration</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG GRID */}
      <section className="bg-[#f0f3ff]/40 border-t border-[#e7eeff] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Results Summary Header */}
          <div className="flex items-center justify-between">
            <div className="text-xs sm:text-sm text-slate-600">
              Showing <strong className="text-[#0b2540] font-bold">{filteredCourses.length}</strong> verified online programs
              {selectedUniversity !== 'all' && (
                <span className="text-[#115eaf] font-semibold">
                  {' '}· {ALL_UNIVERSITIES.find((u) => u.id === selectedUniversity)?.name}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => onOpenApply()}
              className="text-xs font-bold text-[#115eaf] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Free Admission Counseling</span>
            </button>
          </div>

          {/* Cards Grid */}
          {filteredCourses.length === 0 ? (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#115eaf] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800">No matching degree programs found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any courses matching <strong>"{searchQuery}"</strong>. Try searching for popular degrees like "Online MBA", "MCA", or university names like "Amity", "LPU", "Manipal".
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-2 px-4 py-2 bg-[#115eaf] hover:bg-[#004689] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredCourses.map((course) => {
                const isTopPick = course.highlightBadge != null;
                const semFeeEst = `₹${course.perSemFee.toLocaleString('en-IN')}/sem`;

                return (
                  <div
                    key={`${course.universityId}-${course.id}`}
                    className={`bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 border hover:shadow-md hover:border-[#115eaf]/70 relative ${
                      isTopPick
                        ? 'border-[#115eaf]/70 shadow-xs ring-1 ring-[#115eaf]/15'
                        : 'border-[#e7eeff] shadow-xs'
                    }`}
                  >
                    <div>
                      {/* Top Header: University Badge & Degree Level */}
                      <div className="flex items-start justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                        <div
                          onClick={() => navigate(`/universities/${course.universityId}`)}
                          className="flex items-center gap-1.5 text-[11px] font-bold text-[#0b5cad] hover:text-[#004689] cursor-pointer truncate"
                          title={course.universityName}
                        >
                          <Building2 className="w-3.5 h-3.5 shrink-0 text-[#115eaf]" />
                          <span className="truncate">{course.universityShort}</span>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          {course.universityNaac && (
                            <span className="text-[9.5px] font-bold px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200">
                              {course.universityNaac.split(' ')[0]} {course.universityNaac.split(' ')[1] || ''}
                            </span>
                          )}
                          <span
                            className={`px-2 py-0.5 text-[10px] font-semibold rounded ${
                              course.category === 'ug'
                                ? 'bg-[#e7eeff] text-[#011c37]'
                                : course.category === 'pg'
                                ? 'bg-[#d5e3ff] text-[#004689]'
                                : 'bg-[#ffdcc3] text-[#6e3900]'
                            }`}
                          >
                            {course.level}
                          </span>
                        </div>
                      </div>

                      {/* Degree Program Title */}
                      <h3
                        className="text-sm sm:text-base font-bold text-[#000f22] font-sans hover:text-[#115eaf] transition-colors cursor-pointer leading-snug line-clamp-2"
                        onClick={() => handleSelectCourseItem(course)}
                        title={course.name}
                      >
                        {course.name}
                      </h3>

                      {/* Duration & Exam Format */}
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{course.duration}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-emerald-700 font-medium">
                          <Laptop className="w-3 h-3 text-emerald-600" />
                          <span>100% Online</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#555960] mt-2 line-clamp-2 leading-relaxed font-normal">
                        {course.shortDescription}
                      </p>

                      {/* Specializations Pills */}
                      {course.specializations && course.specializations.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {course.specializations.slice(0, 2).map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 text-[#115eaf] border border-blue-100"
                            >
                              {spec}
                            </span>
                          ))}
                          {course.specializations.length > 2 && (
                            <span className="text-[10px] text-slate-400 font-medium self-center">
                              +{course.specializations.length - 2} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Fees Metric */}
                      <div className="mt-3 pt-2.5 border-t border-[#f0f3ff] flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] text-[#74777e] font-semibold uppercase tracking-wider block">
                            Semester Tuition
                          </span>
                          <span className="text-xs font-bold text-[#0b5cad]">
                            {course.perSemFeeFormatted} / sem
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-[#74777e] font-semibold uppercase tracking-wider block">
                            Total Program Fee
                          </span>
                          <span className="text-sm sm:text-[15px] font-extrabold text-[#000f22] font-sans">
                            {course.totalFeeFormatted}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3.5 grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleSelectCourseItem(course)}
                        className="w-full py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0b2540] text-xs font-bold text-center transition-all cursor-pointer active:scale-95"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenApply(course.id)}
                        className="w-full py-2 px-2.5 rounded-xl bg-[#115eaf] hover:bg-[#004689] text-white text-xs font-bold text-center transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
