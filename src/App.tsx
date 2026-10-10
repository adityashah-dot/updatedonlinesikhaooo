import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { TabType, Course } from './types';
import { COURSES_DATA } from './data/coursesData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CollegeDetailView } from './components/CollegeDetailView';
import { CoursesAndFeesView } from './components/CoursesAndFeesView';
import { AdmissionView } from './components/AdmissionView';
import { ScholarshipsView } from './components/ScholarshipsView';
import { UniversitiesView } from './components/UniversitiesView';
import { CourseDetailModal } from './components/CourseDetailModal';
import { EmiCalculatorModal } from './components/EmiCalculatorModal';
import { ApplyOnlineModal } from './components/ApplyOnlineModal';
import { BrochureModal } from './components/BrochureModal';
import { LmsPortalModal } from './components/LmsPortalModal';
import { HelpDeskModal } from './components/HelpDeskModal';
import { FloatingActions } from './components/FloatingActions';
import { CounselorModal } from './components/CounselorModal';
import { TrackApplicationModal } from './components/TrackApplicationModal';
import { GeminiChatbot } from './components/chat/GeminiChatbot';
import { BookOpen, GraduationCap, Home, FileText, Building2, Award } from 'lucide-react';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const routeToTab = (path: string, search: string = ''): TabType => {
    if (path.startsWith('/universities/lpu') || path.startsWith('/universities/lovely')) {
      if (search.includes('section=courses')) return 'courses';
      if (search.includes('section=admission')) return 'admission';
      if (search.includes('section=scholarships')) return 'scholarships';
      return 'overview';
    }
    if (path.startsWith('/universities/amity')) return 'universities';
    if (path.startsWith('/courses')) return 'courses';
    if (path.startsWith('/admission')) return 'admission';
    if (path.startsWith('/scholarships')) return 'scholarships';
    if (path.startsWith('/universities')) return 'universities';
    if (path.startsWith('/colleges')) return 'universities';
    return 'home';
  };

  const activeTab: TabType = routeToTab(location.pathname, location.search);

  const scrollToHomeSection = (id: string) => {
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
  };

  const setActiveTab = (tab: TabType) => {
    const onLpuProfile =
      location.pathname.startsWith('/universities/lpu') ||
      location.pathname.startsWith('/universities/lovely');

    const routes: Record<TabType, string> = {
      home: '/',
      universities: '/universities',
      courses: onLpuProfile ? '/universities/lpu-online?section=courses' : '/courses',
      overview: '/universities/lpu-online',
      admission: onLpuProfile ? '/universities/lpu-online?section=admission' : '/admission',
      scholarships: onLpuProfile ? '/universities/lpu-online?section=scholarships' : '/scholarships',
      lms: '/courses',
      degrees: '/courses',
      compare: '/universities',
      nirf: '/universities',
    };

    navigate(routes[tab]);
    if (tab === 'degrees') scrollToHomeSection('degrees');
    else if (tab === 'compare') scrollToHomeSection('compare');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modals state
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [applyCourseId, setApplyCourseId] = useState<string>('mba');
  const [emiPlanDetails, setEmiPlanDetails] = useState<{ emiAmount: number; tenure: number } | null>(null);
  const [isEmiModalOpen, setIsEmiModalOpen] = useState<boolean>(false);
  const [emiCourseId, setEmiCourseId] = useState<string>('mba');
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState<boolean>(false);
  const [selectedCourseForBrochure, setSelectedCourseForBrochure] = useState<Course | null>(null);
  const [isLmsModalOpen, setIsLmsModalOpen] = useState<boolean>(false);
  const [isHelpDeskModalOpen, setIsHelpDeskModalOpen] = useState<boolean>(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState<boolean>(false);
  const [isCounselorModalOpen, setIsCounselorModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleOpenCourseDetail = (course: Course) => {
    setSelectedCourseForDetail(course);
  };

  const handleSelectCourseById = (courseId: string) => {
    const course = COURSES_DATA.find((c) => c.id === courseId);
    if (course) {
      setSelectedCourseForDetail(course);
    }
  };

  const handleOpenApply = (courseId?: string) => {
    if (courseId) {
      setApplyCourseId(courseId);
    }
    setEmiPlanDetails(null);
    setIsApplyModalOpen(true);
  };

  const handleOpenEmi = (courseId?: string) => {
    if (courseId) {
      setEmiCourseId(courseId);
    }
    setIsEmiModalOpen(true);
  };

  const handleApplyWithEmi = (courseId: string, emiAmount: number, tenure: number) => {
    setApplyCourseId(courseId);
    setEmiPlanDetails({ emiAmount, tenure });
    setIsApplyModalOpen(true);
  };

  const handleOpenBrochure = (course?: Course) => {
    setSelectedCourseForBrochure(course || null);
    setIsBrochureModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d] font-sans pb-16 md:pb-0">
      {/* Top Application Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApply={() => handleOpenApply()}
        onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
        onOpenCounselor={() => setIsCounselorModalOpen(true)}
        onOpenLms={() => setIsLmsModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Routed Pages */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomeView
                onOpenApply={handleOpenApply}
                onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
                onOpenChat={() => setIsChatOpen(true)}
                onOpenCounselor={() => setIsCounselorModalOpen(true)}
              />
            }
          />
          <Route
            path="/universities/:slug"
            element={
              <CollegeDetailView
                onSelectCourse={handleOpenCourseDetail}
                onOpenApply={handleOpenApply}
                onOpenBrochure={handleOpenBrochure}
                onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
                onOpenEmi={handleOpenEmi}
                onOpenLms={() => setIsLmsModalOpen(true)}
              />
            }
          />
          <Route
            path="/universities"
            element={
              <UniversitiesView
                onOpenApply={() => handleOpenApply()}
                onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
                onOpenBrochure={() => handleOpenBrochure()}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <CoursesAndFeesView
                onSelectCourse={handleOpenCourseDetail}
                onOpenApply={handleOpenApply}
                onOpenBrochure={handleOpenBrochure}
                onOpenEmi={handleOpenEmi}
                onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
              />
            }
          />
          <Route
            path="/admission"
            element={
              <AdmissionView
                onSelectCourse={handleOpenCourseDetail}
                onOpenApply={handleOpenApply}
                onOpenBrochure={() => handleOpenBrochure()}
                onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
                onOpenEmi={() => handleOpenEmi()}
              />
            }
          />
          <Route
            path="/scholarships"
            element={
              <ScholarshipsView
                onOpenApply={handleOpenApply}
                onOpenHelpDesk={() => setIsHelpDeskModalOpen(true)}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Institutional Desktop Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectCourse={handleSelectCourseById}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Mobile Sticky Bottom Navigation Dock */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t border-[#e7eeff] px-3 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => {
            setActiveTab('courses');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'courses' ? 'bg-[#e7eeff] text-[#115eaf]' : 'text-[#43474d]'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span>Courses</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'home' ? 'bg-[#e7eeff] text-[#115eaf]' : 'text-[#43474d]'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('universities');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'universities' ? 'bg-[#e7eeff] text-[#115eaf]' : 'text-[#43474d]'
          }`}
        >
          <Building2 className="w-4 h-4 mb-0.5" />
          <span>Universities</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('admission');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'admission' ? 'bg-[#e7eeff] text-[#115eaf]' : 'text-[#43474d]'
          }`}
        >
          <GraduationCap className="w-4 h-4 mb-0.5" />
          <span>Admission</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('scholarships');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'scholarships' ? 'bg-[#e7eeff] text-[#115eaf]' : 'text-[#43474d]'
          }`}
        >
          <Award className="w-4 h-4 mb-0.5" />
          <span>Scholarship</span>
        </button>
        <button
          onClick={() => handleOpenApply()}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-xs font-bold bg-[#115eaf] text-white shadow cursor-pointer"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>Apply</span>
        </button>
      </nav>

      {/* Modals Container */}
      <CourseDetailModal
        course={selectedCourseForDetail}
        isOpen={selectedCourseForDetail !== null}
        onClose={() => setSelectedCourseForDetail(null)}
        onOpenApply={(courseId) => {
          setSelectedCourseForDetail(null);
          handleOpenApply(courseId);
        }}
        onOpenBrochure={(course) => {
          setSelectedCourseForDetail(null);
          handleOpenBrochure(course);
        }}
        onOpenEmi={(courseId) => {
          setSelectedCourseForDetail(null);
          handleOpenEmi(courseId);
        }}
      />

      <EmiCalculatorModal
        isOpen={isEmiModalOpen}
        onClose={() => setIsEmiModalOpen(false)}
        initialCourseId={emiCourseId}
        onApplyWithEmi={handleApplyWithEmi}
      />

      <ApplyOnlineModal
        isOpen={isApplyModalOpen}
        onClose={() => {
          setIsApplyModalOpen(false);
          setEmiPlanDetails(null);
        }}
        preselectedCourseId={applyCourseId}
        emiPlanDetails={emiPlanDetails}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        selectedCourse={selectedCourseForBrochure}
      />

      <LmsPortalModal
        isOpen={isLmsModalOpen}
        onClose={() => setIsLmsModalOpen(false)}
        onOpenApply={() => {
          setIsLmsModalOpen(false);
          handleOpenApply();
        }}
      />

      <HelpDeskModal
        isOpen={isHelpDeskModalOpen}
        onClose={() => setIsHelpDeskModalOpen(false)}
      />

      <TrackApplicationModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />

      <CounselorModal
        isOpen={isCounselorModalOpen}
        onClose={() => setIsCounselorModalOpen(false)}
      />

      {/* Floating Bottom Action Buttons & AI Admissions Desk */}
      <FloatingActions
        onOpenCounselorModal={() => setIsCounselorModalOpen(true)}
        onOpenTrackModal={() => setIsTrackModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* AI Advisory Chat Window */}
      <GeminiChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenApply={handleOpenApply}
      />
    </div>
  );
}
