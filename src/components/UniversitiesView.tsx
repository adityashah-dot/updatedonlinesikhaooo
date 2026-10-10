import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  SlidersHorizontal,
  MapPin,
  Star,
  CreditCard,
  Download,
  ShieldCheck,
  List,
  LayoutGrid,
  X,
  Check,
  GraduationCap,
  Sparkles,
  Award,
  ChevronDown,
  RotateCcw,
  CheckCircle2,
  Building2,
  BookOpen,
} from 'lucide-react';
import { DEGREEFYD_LPU_API } from '../data/apiData';
import { ALL_UNIVERSITIES } from '../data/universities';

interface UniversitiesViewProps {
  onOpenApply: (courseId?: string) => void;
  onOpenHelpDesk: () => void;
  onOpenBrochure: () => void;
}

const ACCREDITATION_OPTIONS = [
  { id: 'naac_app', label: 'NAAC A++ Grade (Highest)', tag: 'A++' },
  { id: 'naac_ap', label: 'NAAC A+ Grade', tag: 'A+' },
  { id: 'nirf_top35', label: 'NIRF Top 35 Ranked', tag: 'NIRF Top 35' },
  { id: 'ugc_deb', label: 'UGC-DEB Entitled', tag: 'UGC-DEB' },
  { id: 'aicte', label: 'AICTE Approved', tag: 'AICTE' },
  { id: 'wes', label: 'WES / Global Evaluation', tag: 'WES' },
];

const DEGREE_TRACK_OPTIONS = [
  { id: 'mba', label: 'Online MBA (Management)', tag: 'MBA' },
  { id: 'mca', label: 'Online MCA (Computer Apps & AI)', tag: 'MCA' },
  { id: 'bba', label: 'Online BBA (Business Admin)', tag: 'BBA' },
  { id: 'bca', label: 'Online BCA (Computer Apps)', tag: 'BCA' },
  { id: 'mcom', label: 'Online M.Com (Commerce)', tag: 'M.Com' },
  { id: 'bama', label: 'Online BA / MA (Arts & Humanities)', tag: 'BA/MA' },
];

const LOCATION_OPTIONS = [
  { id: 'punjab', label: 'Punjab (Phagwara, Mohali)' },
  { id: 'delhi_ncr_up', label: 'Delhi NCR / Uttar Pradesh (Noida)' },
  { id: 'rajasthan', label: 'Rajasthan (Jaipur)' },
  { id: 'karnataka', label: 'Karnataka (Bangalore Hub)' },
  { id: 'uttarakhand', label: 'Uttarakhand (Dehradun)' },
];

const FEE_RANGES = [
  { id: 'all', label: 'All Budgets', max: Infinity, min: 0 },
  { id: 'under_140', label: 'Under ₹1,40,000 Total', max: 140000, min: 0 },
  { id: '140_160', label: '₹1,40,000 – ₹1,60,000', max: 160000, min: 140000 },
  { id: 'above_160', label: 'Above ₹1,60,000', max: Infinity, min: 160001 },
];

const EXAM_MODE_OPTIONS = [
  { id: 'home_proctored', label: '100% Home AI-Proctored' },
  { id: 'web_proctored', label: 'Web-Proctored AI' },
];

export const UniversitiesView: React.FC<UniversitiesViewProps> = ({
  onOpenApply,
  onOpenBrochure,
}) => {
  const navigate = useNavigate();
  const [view, setView] = useState<'list' | 'grid'>('list');

  // Filter States
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('search') || '';
    }
    return '';
  });
  const [selectedAccreditations, setSelectedAccreditations] = useState<string[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFeeRange, setSelectedFeeRange] = useState<string>('all');
  const [selectedExamModes, setSelectedExamModes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'nirf' | 'fee-asc' | 'fee-desc' | 'rating'>('nirf');

  // Sync with URL search params when route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('search');
      if (q !== null && q !== searchQuery) {
        setSearchQuery(q);
      }
    }
  }, [window.location.search]);

  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Quick Preset Pills
  const [quickFilter, setQuickFilter] = useState<'all' | 'naac_app' | 'nirf_top35' | 'under_150' | 'mba' | 'mca' | 'low_emi'>('all');

  const handleQuickFilterClick = (preset: typeof quickFilter) => {
    setQuickFilter(preset);
    if (preset === 'all') {
      resetAllFilters();
      return;
    }
    if (preset === 'naac_app') {
      setSelectedAccreditations(['naac_app']);
    } else if (preset === 'nirf_top35') {
      setSelectedAccreditations(['nirf_top35']);
    } else if (preset === 'under_150') {
      setSelectedFeeRange('under_140');
    } else if (preset === 'mba') {
      setSelectedTracks(['mba']);
    } else if (preset === 'mca') {
      setSelectedTracks(['mca']);
    }
  };

  const toggleAccreditation = (id: string) => {
    setQuickFilter('all');
    setSelectedAccreditations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleTrack = (id: string) => {
    setQuickFilter('all');
    setSelectedTracks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleLocation = (id: string) => {
    setQuickFilter('all');
    setSelectedLocations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleExamMode = (id: string) => {
    setQuickFilter('all');
    setSelectedExamModes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedAccreditations([]);
    setSelectedTracks([]);
    setSelectedLocations([]);
    setSelectedFeeRange('all');
    setSelectedExamModes([]);
    setQuickFilter('all');
    setSortBy('nirf');
  };

  const getNumericFee = (uni: (typeof DEGREEFYD_LPU_API.onlineUniversities)[0]): number => {
    if (uni.id === 'lpu-online') return 140000;
    if (uni.id === 'cu-online') return 135000;
    if (uni.id === 'amity-online') return 165000;
    if (uni.id === 'manipal-online') return 175000;
    if (uni.id === 'jain-online') return 150000;
    if (uni.id === 'upes-online') return 155000;
    return 150000;
  };

  const matchesUniversityAccreditation = (uni: (typeof DEGREEFYD_LPU_API.onlineUniversities)[0], accId: string) => {
    const naac = (uni.naac || '').toLowerCase();
    const approvals = uni.approvals.map((a) => a.toLowerCase()).join(' ');
    const rankNote = (uni.rankNote || '').toLowerCase();
    switch (accId) {
      case 'naac_app':
        return naac.includes('a++');
      case 'naac_ap':
        return naac.includes('a+') && !naac.includes('a++');
      case 'nirf_top35':
        return rankNote.includes('#31') || rankNote.includes('#32') || rankNote.includes('top 35');
      case 'ugc_deb':
        return approvals.includes('ugc') || approvals.includes('deb');
      case 'aicte':
        return approvals.includes('aicte') || uni.id === 'lpu-online' || uni.id === 'cu-online' || uni.id === 'manipal-online';
      case 'wes':
        return (
          approvals.includes('wes') ||
          uni.id === 'lpu-online' ||
          uni.id === 'amity-online' ||
          uni.id === 'manipal-online' ||
          uni.id === 'upes-online'
        );
      default:
        return true;
    }
  };

  const matchesUniversityTrack = (uni: (typeof DEGREEFYD_LPU_API.onlineUniversities)[0], trackId: string) => {
    const tracksStr = uni.tracks.join(' ').toLowerCase();
    switch (trackId) {
      case 'mba':
        return tracksStr.includes('mba');
      case 'mca':
        return tracksStr.includes('mca');
      case 'bba':
        return tracksStr.includes('bba');
      case 'bca':
        return tracksStr.includes('bca');
      case 'mcom':
        return tracksStr.includes('m.com') || tracksStr.includes('commerce');
      case 'bama':
        return tracksStr.includes('ba') || tracksStr.includes('ma');
      default:
        return true;
    }
  };

  const matchesUniversityLocation = (uni: (typeof DEGREEFYD_LPU_API.onlineUniversities)[0], locId: string) => {
    const loc = (uni.location || '').toLowerCase();
    switch (locId) {
      case 'punjab':
        return loc.includes('punjab') || loc.includes('phagwara') || loc.includes('mohali');
      case 'delhi_ncr_up':
        return loc.includes('noida') || loc.includes('uttar pradesh') || loc.includes('delhi');
      case 'rajasthan':
        return loc.includes('jaipur') || loc.includes('rajasthan');
      case 'karnataka':
        return loc.includes('bangalore') || loc.includes('karnataka');
      case 'uttarakhand':
        return loc.includes('dehradun') || loc.includes('uttarakhand');
      default:
        return true;
    }
  };

  const matchesUniversityExam = (uni: (typeof DEGREEFYD_LPU_API.onlineUniversities)[0], examId: string) => {
    const specsStr = uni.specs.map((s) => s.value.toLowerCase()).join(' ');
    switch (examId) {
      case 'home_proctored':
        return specsStr.includes('home') || specsStr.includes('proctored');
      case 'web_proctored':
        return specsStr.includes('web-proctored') || specsStr.includes('ai');
      default:
        return true;
    }
  };

  const filteredUniversities = useMemo(() => {
    return DEGREEFYD_LPU_API.onlineUniversities.filter((uni) => {
      // 1. Text Search Query - University Name or Degree Title
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        // Match University Name or ID
        const matchesName =
          uni.name.toLowerCase().includes(query) ||
          uni.short.toLowerCase().includes(query) ||
          uni.id.toLowerCase().includes(query);

        // Match Degree Titles from tracks
        const matchesTracks = uni.tracks.some((t) => t.toLowerCase().includes(query));

        // Match Degree Titles and Specializations from full university course catalog
        const fullUni = ALL_UNIVERSITIES.find((u) => u.id === uni.id);
        const matchesFullCourses = Boolean(
          fullUni?.courses.some((c) =>
            c.name.toLowerCase().includes(query) ||
            (c.code && c.code.toLowerCase().includes(query)) ||
            c.specializations?.some((s) => s.toLowerCase().includes(query))
          )
        );

        // Metadata matches
        const matchesLoc = uni.location.toLowerCase().includes(query);
        const matchesApprovals = uni.approvals.some((a) => a.toLowerCase().includes(query));
        const matchesNaac = (uni.naac || '').toLowerCase().includes(query);

        if (!matchesName && !matchesTracks && !matchesFullCourses && !matchesLoc && !matchesApprovals && !matchesNaac) {
          return false;
        }
      }

      // 2. Accreditation Filters
      if (selectedAccreditations.length > 0) {
        const matchesAnyAcc = selectedAccreditations.some((accId) =>
          matchesUniversityAccreditation(uni, accId)
        );
        if (!matchesAnyAcc) return false;
      }

      // 3. Degree Track Filters
      if (selectedTracks.length > 0) {
        const matchesAnyTrack = selectedTracks.some((tId) =>
          matchesUniversityTrack(uni, tId)
        );
        if (!matchesAnyTrack) return false;
      }

      // 4. Location Filters
      if (selectedLocations.length > 0) {
        const matchesAnyLoc = selectedLocations.some((locId) =>
          matchesUniversityLocation(uni, locId)
        );
        if (!matchesAnyLoc) return false;
      }

      // 5. Fee Range Filter
      if (selectedFeeRange !== 'all') {
        const fee = getNumericFee(uni);
        const range = FEE_RANGES.find((r) => r.id === selectedFeeRange);
        if (range && (fee < range.min || fee > range.max)) return false;
      }

      // 6. Exam Mode Filter
      if (selectedExamModes.length > 0) {
        const matchesAnyExam = selectedExamModes.some((eId) =>
          matchesUniversityExam(uni, eId)
        );
        if (!matchesAnyExam) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'fee-asc') return getNumericFee(a) - getNumericFee(b);
      if (sortBy === 'fee-desc') return getNumericFee(b) - getNumericFee(a);
      if (sortBy === 'rating') {
        const rA = a.id === 'manipal-online' ? 4.8 : a.id === 'amity-online' ? 4.7 : 4.6;
        const rB = b.id === 'manipal-online' ? 4.8 : b.id === 'amity-online' ? 4.7 : 4.6;
        return rB - rA;
      }
      const nirfOrder = ['lpu-online', 'cu-online', 'amity-online', 'upes-online', 'manipal-online', 'jain-online'];
      return nirfOrder.indexOf(a.id) - nirfOrder.indexOf(b.id);
    });
  }, [searchQuery, selectedAccreditations, selectedTracks, selectedLocations, selectedFeeRange, selectedExamModes, sortBy]);

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    selectedAccreditations.length +
    selectedTracks.length +
    selectedLocations.length +
    (selectedFeeRange !== 'all' ? 1 : 0) +
    selectedExamModes.length;

  return (
    <div className="pb-16 md:pb-8 font-sans">
      {/* =========================================================================
          HERO SEARCH & FILTER HEADER
          ========================================================================= */}
      <section className="bg-gradient-to-b from-[#eef4ff] via-[#f7faff] to-white border-b border-[#dbe6f8] pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#115eaf] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Official UGC-DEB Directory</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#000f22] tracking-tight leading-tight">
              Explore Top Online Universities in India
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Compare NAAC A++ ratings, NIRF rankings, verified total fee structures, 0% EMI plans, and exam formats to find your best-fit university.
            </p>
          </div>

          {/* =========================================================================
              MODERN FILTER BOX CONSOLE
              ========================================================================= */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-blue-200/90 shadow-md max-w-4xl mx-auto space-y-3.5">
            {/* Primary Search Bar Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
              <div className="md:col-span-8 relative flex items-center">
                <Search className="absolute left-3.5 text-[#115eaf] w-4.5 h-4.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by university name or degree title (e.g. Lovely Professional University, Online MBA, Amity, MCA, Manipal)..."
                  className="w-full pl-10 pr-9 py-3 bg-[#f8fbff] rounded-2xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#115eaf] focus:ring-2 focus:ring-[#115eaf]/15 transition-all font-normal"
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

              <div className="md:col-span-4 flex items-center gap-2">
                {/* Mobile Filter Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex-1 py-3 px-3.5 bg-blue-50 hover:bg-blue-100 text-[#115eaf] border border-blue-200 text-xs font-bold rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
                </button>

                {/* Reset Filters Button */}
                <button
                  type="button"
                  onClick={resetAllFilters}
                  disabled={activeFiltersCount === 0 && !searchQuery}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 disabled:hover:bg-slate-100 text-xs sm:text-sm font-semibold rounded-2xl flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Degree Titles & University Shortcut Filter Pills */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[11px] font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#115eaf]" />
                <span>Degrees:</span>
              </span>
              {['Online MBA', 'Online MCA', 'Online BBA', 'Online BCA', 'Data Science & AI', 'Online M.Com'].map((deg) => (
                <button
                  key={deg}
                  type="button"
                  onClick={() => setSearchQuery(searchQuery.toLowerCase() === deg.toLowerCase() ? '' : deg)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
                    searchQuery.toLowerCase() === deg.toLowerCase()
                      ? 'bg-[#115eaf] text-white shadow-2xs'
                      : 'bg-[#f4f7fc] text-slate-700 hover:bg-blue-50 hover:text-[#115eaf]'
                  }`}
                >
                  {deg}
                </button>
              ))}

              <span className="text-[11px] font-semibold text-slate-400 mx-1 hidden sm:inline">|</span>

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
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
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

            {/* Active Search Status Feedback */}
            {searchQuery.trim() && (
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs bg-blue-50/60 px-3 py-2 rounded-xl border border-blue-100">
                <div className="flex items-center gap-1.5 text-[#0b2540]">
                  <Search className="w-3.5 h-3.5 text-[#115eaf]" />
                  <span>
                    Filtering by <strong>"{searchQuery}"</strong> · Found <strong>{filteredUniversities.length}</strong> {filteredUniversities.length === 1 ? 'university' : 'universities'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-semibold text-[#115eaf] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  <span>Clear Search</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN LISTINGS & FILTER SIDEBAR
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          
          {/* =========================================================================
              DESKTOP FILTER SIDEBAR BOX
              ========================================================================= */}
          <aside className="lg:col-span-3 bg-white rounded-3xl border border-blue-100 p-5 shadow-sm sticky top-20 hidden lg:block space-y-5">
            {/* Filter Sidebar Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#115eaf]" />
                <span className="text-sm font-bold text-slate-900">Filter By</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-blue-50 text-[#115eaf] text-[11px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-[11px] font-semibold text-[#115eaf] hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Filter Group 1: Accreditations */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#115eaf]" />
                <span>Accreditations</span>
              </span>
              <div className="space-y-1.5">
                {ACCREDITATION_OPTIONS.map((acc) => {
                  const isChecked = selectedAccreditations.includes(acc.id);
                  return (
                    <label
                      key={acc.id}
                      className="flex items-center justify-between text-xs cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAccreditation(acc.id)}
                          className="w-4 h-4 rounded text-[#115eaf] border-slate-300 focus:ring-[#115eaf] cursor-pointer"
                        />
                        <span className={`font-normal ${isChecked ? 'text-[#115eaf] font-bold' : 'text-slate-700'}`}>
                          {acc.label}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter Group 2: Degree Program Tracks */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#115eaf]" />
                <span>Program Tracks</span>
              </span>
              <div className="space-y-1.5">
                {DEGREE_TRACK_OPTIONS.map((track) => {
                  const isChecked = selectedTracks.includes(track.id);
                  return (
                    <label
                      key={track.id}
                      className="flex items-center justify-between text-xs cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleTrack(track.id)}
                          className="w-4 h-4 rounded text-[#115eaf] border-slate-300 focus:ring-[#115eaf] cursor-pointer"
                        />
                        <span className={`font-normal ${isChecked ? 'text-[#115eaf] font-bold' : 'text-slate-700'}`}>
                          {track.label}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter Group 3: Tuition Budget */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                <span>Total Fee Budget</span>
              </span>
              <div className="space-y-1.5">
                {FEE_RANGES.map((fee) => {
                  const isChecked = selectedFeeRange === fee.id;
                  return (
                    <label
                      key={fee.id}
                      className="flex items-center justify-between text-xs cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="feeRangeDesktop"
                          checked={isChecked}
                          onChange={() => setSelectedFeeRange(fee.id)}
                          className="w-4 h-4 text-[#115eaf] border-slate-300 focus:ring-[#115eaf] cursor-pointer"
                        />
                        <span className={`font-normal ${isChecked ? 'text-[#115eaf] font-bold' : 'text-slate-700'}`}>
                          {fee.label}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter Group 4: Campus Location */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#115eaf]" />
                <span>State / Region</span>
              </span>
              <div className="space-y-1.5">
                {LOCATION_OPTIONS.map((loc) => {
                  const isChecked = selectedLocations.includes(loc.id);
                  return (
                    <label
                      key={loc.id}
                      className="flex items-center justify-between text-xs cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleLocation(loc.id)}
                          className="w-4 h-4 rounded text-[#115eaf] border-slate-300 focus:ring-[#115eaf] cursor-pointer"
                        />
                        <span className={`font-normal ${isChecked ? 'text-[#115eaf] font-bold' : 'text-slate-700'}`}>
                          {loc.label}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter Group 5: Exam Format */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#115eaf]" />
                <span>Exam Format</span>
              </span>
              <div className="space-y-1.5">
                {EXAM_MODE_OPTIONS.map((ex) => {
                  const isChecked = selectedExamModes.includes(ex.id);
                  return (
                    <label
                      key={ex.id}
                      className="flex items-center justify-between text-xs cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleExamMode(ex.id)}
                          className="w-4 h-4 rounded text-[#115eaf] border-slate-300 focus:ring-[#115eaf] cursor-pointer"
                        />
                        <span className={`font-normal ${isChecked ? 'text-[#115eaf] font-bold' : 'text-slate-700'}`}>
                          {ex.label}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* =========================================================================
              UNIVERSITY LISTINGS CONTENT COLUMN
              ========================================================================= */}
          <section className="lg:col-span-9 space-y-4">
            {/* Results Header Bar */}
            <div className="bg-white p-3.5 px-4 rounded-2xl border border-slate-200/90 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Showing <strong className="text-[#115eaf]">{filteredUniversities.length}</strong> of {DEGREEFYD_LPU_API.onlineUniversities.length} Universities
                </span>
                {activeFiltersCount > 0 && (
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    Filtered
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                {/* View Switch: List vs Grid */}
                <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setView('list')}
                    className={`p-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      view === 'list' ? 'bg-white text-[#115eaf] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView('grid')}
                    className={`p-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      view === 'grid' ? 'bg-white text-[#115eaf] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Selector */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <span className="hidden sm:inline font-medium">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="py-1.5 px-3 bg-[#f8fbff] rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold cursor-pointer outline-none focus:border-[#115eaf]"
                  >
                    <option value="nirf">NIRF Ranking</option>
                    <option value="fee-asc">Total Fee: Low to High</option>
                    <option value="fee-desc">Total Fee: High to Low</option>
                    <option value="rating">Student Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Active Filters Tag Pills (Removable) */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-blue-50/50 rounded-2xl border border-blue-100">
                <span className="text-[11px] font-semibold text-slate-500 mr-1">Active filters:</span>
                
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 text-[11px] font-medium shadow-2xs">
                    <span>"{searchQuery}"</span>
                    <button type="button" onClick={() => setSearchQuery('')} className="hover:text-red-600 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedAccreditations.map((accId) => {
                  const opt = ACCREDITATION_OPTIONS.find((a) => a.id === accId);
                  return (
                    <span key={accId} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 text-[11px] font-medium shadow-2xs">
                      <span>{opt?.label}</span>
                      <button type="button" onClick={() => toggleAccreditation(accId)} className="hover:text-red-600 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}

                {selectedTracks.map((tId) => {
                  const opt = DEGREE_TRACK_OPTIONS.find((t) => t.id === tId);
                  return (
                    <span key={tId} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 text-[11px] font-medium shadow-2xs">
                      <span>{opt?.tag}</span>
                      <button type="button" onClick={() => toggleTrack(tId)} className="hover:text-red-600 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}

                {selectedFeeRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 text-[11px] font-medium shadow-2xs">
                    <span>{FEE_RANGES.find((r) => r.id === selectedFeeRange)?.label}</span>
                    <button type="button" onClick={() => setSelectedFeeRange('all')} className="hover:text-red-600 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedLocations.map((locId) => {
                  const opt = LOCATION_OPTIONS.find((l) => l.id === locId);
                  return (
                    <span key={locId} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 text-[11px] font-medium shadow-2xs">
                      <span>{opt?.label.split('(')[0].trim()}</span>
                      <button type="button" onClick={() => toggleLocation(locId)} className="hover:text-red-600 cursor-pointer">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}

                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-[11px] font-semibold text-red-600 hover:underline ml-auto cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredUniversities.length === 0 && (
              <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#115eaf] flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">No Universities Found</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-normal">
                    No online universities match all your selected filters. Try clearing some filters or searching with different keywords.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 bg-[#115eaf] hover:bg-[#084a8c] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* University Cards Listings */}
            <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
              {filteredUniversities.map((u) => (
                <article
                  key={u.id}
                  onClick={() => navigate(`/universities/${u.id}`)}
                  className="bg-white rounded-3xl border border-blue-100 hover:border-blue-400 p-5 md:p-6 shadow-2xs hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* Upper Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0b2540] to-[#115eaf] text-white flex flex-col items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                          <span className="text-lg font-bold">
                            {u.short}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider font-semibold text-blue-200 -mt-0.5">
                            Online
                          </span>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#115eaf] transition-colors leading-snug">
                              {u.name}
                            </h2>
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                              {u.highlight.text}
                            </span>
                          </div>
                          <p className="text-[13px] font-normal text-slate-500 flex flex-wrap items-center gap-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              <span>{u.location}</span>
                            </span>
                            <span>•</span>
                            <span className="text-amber-800 font-semibold">{u.rankNote}</span>
                            <span>•</span>
                            <span className="font-bold text-[#115eaf]">{u.naac}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-left sm:text-right shrink-0">
                        <span className="block text-[11px] text-slate-400 font-semibold uppercase">
                          Total Program Fee
                        </span>
                        <div className="text-xl font-bold text-slate-900">
                          ₹{u.feeLabel} <span className="text-xs text-slate-400 font-normal">onwards</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 mt-1 bg-emerald-50 text-emerald-800 rounded-full text-[11px] font-semibold border border-emerald-200/60">
                          <CreditCard className="w-3 h-3" />
                          <span>EMI starts {u.emi}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specs Pills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {u.specs.slice(0, 4).map((spec, sIdx) => (
                        <div key={sIdx} className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[10px] text-slate-400 block font-medium uppercase truncate">
                            {spec.label}
                          </span>
                          <span className={`text-xs font-bold truncate block ${spec.highlight ? 'text-emerald-700' : 'text-slate-800'}`}>
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Popular Tracks & Approvals */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] text-slate-400 uppercase font-semibold mr-1">
                        Tracks:
                      </span>
                      {u.tracks.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-[#f0f5ff] text-[#115eaf] border border-blue-100 rounded-full text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="flex items-center justify-between gap-3 pt-4 mt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      {u.approvals.slice(0, 2).map((appr) => (
                        <span key={appr} className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{appr}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBrochure();
                        }}
                        className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Brochure</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenApply();
                        }}
                        className="px-4 py-2 rounded-xl bg-[#115eaf] hover:bg-[#084a8c] text-white text-xs font-bold transition-all shadow-2xs active:scale-95 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* =========================================================================
          MOBILE FILTER DRAWER / MODAL
          ========================================================================= */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden z-10">
            {/* Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-blue-50/50">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#115eaf]" />
                <h3 className="font-bold text-slate-900 text-sm">Filter Universities</h3>
                {activeFiltersCount > 0 && (
                  <span className="bg-[#115eaf] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Filters Body */}
            <div className="p-5 space-y-5 overflow-y-auto flex-1 text-xs">
              {/* Accreditations */}
              <div className="space-y-2">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Accreditations
                </span>
                <div className="space-y-1.5">
                  {ACCREDITATION_OPTIONS.map((acc) => (
                    <label key={acc.id} className="flex items-center gap-2.5 p-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAccreditations.includes(acc.id)}
                        onChange={() => toggleAccreditation(acc.id)}
                        className="w-4 h-4 rounded text-[#115eaf]"
                      />
                      <span>{acc.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tracks */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Program Tracks
                </span>
                <div className="space-y-1.5">
                  {DEGREE_TRACK_OPTIONS.map((track) => (
                    <label key={track.id} className="flex items-center gap-2.5 p-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTracks.includes(track.id)}
                        onChange={() => toggleTrack(track.id)}
                        className="w-4 h-4 rounded text-[#115eaf]"
                      />
                      <span>{track.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Total Course Budget
                </span>
                <div className="space-y-1.5">
                  {FEE_RANGES.map((fee) => (
                    <label key={fee.id} className="flex items-center gap-2.5 p-1 cursor-pointer">
                      <input
                        type="radio"
                        name="feeMobile"
                        checked={selectedFeeRange === fee.id}
                        onChange={() => setSelectedFeeRange(fee.id)}
                        className="w-4 h-4 text-[#115eaf]"
                      />
                      <span>{fee.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Location / State
                </span>
                <div className="space-y-1.5">
                  {LOCATION_OPTIONS.map((loc) => (
                    <label key={loc.id} className="flex items-center gap-2.5 p-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(loc.id)}
                        onChange={() => toggleLocation(loc.id)}
                        className="w-4 h-4 rounded text-[#115eaf]"
                      />
                      <span>{loc.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-2">
              <button
                type="button"
                onClick={resetAllFilters}
                className="py-2.5 px-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-[#115eaf] text-white font-bold rounded-xl text-xs shadow-md cursor-pointer"
              >
                Apply ({filteredUniversities.length} found)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
