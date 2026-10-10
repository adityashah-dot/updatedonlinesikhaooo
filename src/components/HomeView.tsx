import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Laptop,
  CheckCircle2,
  Clock,
  X,
  ShieldCheck,
  Award,
  Megaphone,
  Landmark,
  FileText,
  Users,
  Wallet,
  Check,
  MapPin,
  Play,
  Pause,
  Star,
  Quote,
  TrendingUp,
  Sparkles,
  Volume2,
  VolumeX,
  Briefcase,
  Bookmark,
  Download,
  Building2,
  Compass,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';

interface HomeViewProps {
  onOpenApply: (courseId?: string) => void;
  onOpenHelpDesk: () => void;
  onOpenChat?: () => void;
  onOpenCounselor?: () => void;
}

const DEGREE_OPTIONS = [
  'Online MBA (Management)',
  'Online MCA (Computer Applications)',
  'Online BBA (Business Administration)',
  'Online BCA (Computer Applications)',
  'Online M.Com (Commerce)',
  'Online MA (General)',
  'Online PGDM',
  'Online M.Sc (Mathematics & AI)',
];

const BUDGET_OPTIONS = [
  'All Budgets (₹12K – ₹50K)',
  'Below ₹12K',
  '₹12K – ₹25K',
  '₹25K – ₹40K',
  '₹40K – ₹50K',
  'Above ₹50K',
];

const EXAM_FORMAT_OPTIONS = [
  'Remote Proctored',
  'Live Online',
  'Hybrid (Online + On-Campus)',
  'On-Campus (Regular)',
];

interface BfmUniversity {
  n: string;
  s: string;
  c: string;
  na: string;
  deg: string[];
  fee: Record<string, number>;
  exam: ('remote' | 'centre')[];
}

const BFM_UNIS: BfmUniversity[] = [
  { n: "Lovely Professional University", s: "LPU", c: "#e11d48", na: "A++", deg: ["MBA", "BBA", "BCA", "MCA", "BCOM", "DS"], fee: { MBA: 32000, BBA: 24000, BCA: 24000, MCA: 30000, BCOM: 18000, DS: 35000 }, exam: ["remote"] },
  { n: "Amity University Online", s: "AU", c: "#1d4ed8", na: "A+", deg: ["MBA", "BBA", "BCA", "MCA", "BCOM", "DS"], fee: { MBA: 47500, BBA: 36000, BCA: 36000, MCA: 42000, BCOM: 30000, DS: 48000 }, exam: ["remote"] },
  { n: "Chandigarh University", s: "CU", c: "#7c3aed", na: "A+", deg: ["MBA", "BBA", "BCA", "MCA", "BCOM", "DS"], fee: { MBA: 36000, BBA: 28000, BCA: 28000, MCA: 34000, BCOM: 20000, DS: 38000 }, exam: ["remote", "centre"] },
  { n: "Manipal University Jaipur", s: "MUJ", c: "#ea580c", na: "A+", deg: ["MBA", "BBA", "BCA", "MCA", "BCOM"], fee: { MBA: 65000, BBA: 42000, BCA: 42000, MCA: 55000, BCOM: 35000 }, exam: ["remote"] },
  { n: "Shoolini University", s: "SU", c: "#0f766e", na: "A+", deg: ["MBA", "BBA", "BCA", "BCOM", "DS"], fee: { MBA: 41000, BBA: 30000, BCA: 30000, BCOM: 24000, DS: 40000 }, exam: ["remote", "centre"] },
  { n: "IGNOU", s: "IG", c: "#475569", na: "A++", deg: ["MBA", "BCA", "MCA", "BCOM"], fee: { MBA: 15000, BCA: 9000, MCA: 12000, BCOM: 6000 }, exam: ["centre"] },
  { n: "Galgotias University", s: "GU", c: "#be185d", na: "A+", deg: ["MBA", "BBA", "BCA", "BCOM"], fee: { MBA: 38000, BBA: 27000, BCA: 27000, BCOM: 21000 }, exam: ["remote", "centre"] }
];

const BFM_DEG_OPTIONS = [
  { k: "MBA", label: "Online MBA", sub: "Management", icon: "📈" },
  { k: "BBA", label: "Online BBA", sub: "Business admin", icon: "🏢" },
  { k: "BCA", label: "Online BCA", sub: "Computer apps", icon: "💻" },
  { k: "MCA", label: "Online MCA", sub: "Master's in IT", icon: "🧠" },
  { k: "DS", label: "Data Science & AI", sub: "Tech & analytics", icon: "🤖" },
  { k: "BCOM", label: "Online B.Com", sub: "Commerce", icon: "🧾" },
];

const BFM_BUD_OPTIONS = [
  { k: "low", label: "Under ₹25,000", sub: "Most affordable programs", icon: "💰" },
  { k: "mid", label: "₹25,000 – ₹50,000", sub: "Popular range", icon: "💳" },
  { k: "high", label: "₹50,000 and above", sub: "Premium universities", icon: "🎓" },
];

const BFM_EXAM_OPTIONS = [
  { k: "remote", label: "Remote proctored", sub: "Write from home on your laptop", icon: "🏠" },
  { k: "centre", label: "Exam centre", sub: "Appear at an authorised centre", icon: "🏫" },
  { k: "any", label: "No preference", sub: "Show me everything", icon: "✨" },
];

const BFM_DEG_LABELS: Record<string, string> = {
  MBA: "Online MBA",
  BBA: "Online BBA",
  BCA: "Online BCA",
  MCA: "Online MCA",
  DS: "Data Science & AI",
  BCOM: "Online B.Com"
};

const BFM_BUD_LABELS: Record<string, string> = {
  low: "Under ₹25K",
  mid: "₹25K–₹50K",
  high: "₹50K+"
};

const BFM_EXAM_LABELS: Record<string, string> = {
  remote: "Remote proctored",
  centre: "Exam centre",
  any: "Any exam format"
};

interface FaqItem {
  q: string;
  a: string;
  category: 'admissions' | 'fees' | 'exams' | 'validity';
  categoryLabel: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'admissions',
    categoryLabel: 'Admissions & Eligibility',
    q: 'Are online degrees from UGC-DEB entitled universities valid for government jobs, UPSC, and study abroad?',
    a: 'Yes, 100%. Under the University Grants Commission (Open and Distance Learning Programmes and Online Programmes) Regulations and Official Gazette of India, degrees obtained via UGC-DEB entitled online mode are equivalent to conventional regular degrees in all respects. They are completely valid for government employment (UPSC Civil Services, State PSC, SSC, Banking, Railways, Defense), corporate promotions, and higher education worldwide (recognized by WES and international credential evaluation agencies).',
  },
  {
    category: 'fees',
    categoryLabel: 'Fees & 0% EMI',
    q: 'How do semester fee structures and 0% interest EMI options work?',
    a: 'Tuition fees can be paid semester-by-semester, annually, or through flexible monthly installments. Online Siksha has partnered with leading education finance partners to offer 0% interest EMI schemes starting from as low as ₹2,499/month. Approval is paperless, instant (typically approved within 15–30 minutes), and requires no hidden collateral or processing charges.',
  },
  {
    category: 'admissions',
    categoryLabel: 'Admissions & Eligibility',
    q: 'What are the general admission eligibility criteria for online UG and PG degrees?',
    a: 'For Postgraduate degrees (Online MBA, MCA, M.Com, M.Sc): Candidates must hold a recognized Bachelor’s degree in any discipline with a minimum of 40%–50% marks (varies by university). For Undergraduate degrees (Online BBA, BCA, B.Com, BA): Candidates must have completed 10+2 from a recognized state or central board. Most online universities offer direct merit-based admissions without mandatory entrance exams.',
  },
  {
    category: 'exams',
    categoryLabel: 'Exams & Learning',
    q: 'How are semester end-term exams and classes conducted in online degree programs?',
    a: 'All academic delivery is conducted through the university’s digital Learning Management System (LMS) with interactive weekend live sessions, pre-recorded lectures, e-libraries, and project submissions. Examinations are 100% online through secure AI-proctored remote examination systems—you can comfortably take exams from your home computer without needing to travel to a physical center.',
  },
  {
    category: 'validity',
    categoryLabel: 'Degree Recognition',
    q: 'Will "Online" mode be mentioned differently on my degree certificate, and does it impact corporate value?',
    a: 'The degree certificate issued by the university follows the standardized UGC format. Top Fortune 500 companies, multinational tech giants, and consulting firms actively hire and promote candidates holding UGC-entitled online degrees, recognizing the industry-aligned curriculum and practical capstone projects.',
  },
  {
    category: 'admissions',
    categoryLabel: 'Counseling & Support',
    q: 'How does Online Siksha assist students throughout the university application journey?',
    a: 'Online Siksha offers unbiased, 100% free personalized counseling. Our academic advisors evaluate your career goals, budget, and academic background to recommend the best-fit university and specialization. We assist with document verification, fee discounts, scholarship applications, 0% EMI processing, and provide dedicated admission desk support until enrollment is confirmed.',
  },
];

const CAROUSEL_UNIVERSITIES = [
  {
    id: 'lpu-online',
    name: 'LPU Online',
    fullName: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    naac: 'NAAC A++',
    rank: 'NIRF #31 (Top 35)',
    examMode: '100% Home Proctored',
    fee: '₹1,40,000 Total',
    emi: '₹4,950 / month',
    tracks: ['Online MBA', 'Online MCA', 'Online BCA'],
    logo: (
      <div className="w-10 h-10 rounded-full bg-[#faecd6] border border-[#f3ca90] flex items-center justify-center shrink-0 shadow-2xs overflow-hidden p-1">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="#1b1c20" stroke="#f59e0b" strokeWidth="4" />
          <path d="M50 16 L65 38 L35 38 Z" fill="#f59e0b" />
          <circle cx="50" cy="54" r="16" fill="#f59e0b" />
          <text x="50" y="80" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">LPU</text>
        </svg>
      </div>
    ),
  },
  {
    id: 'amity-online',
    name: 'Amity Online',
    fullName: 'Amity University Online',
    location: 'Noida, Uttar Pradesh',
    naac: 'NAAC A+',
    rank: 'NIRF #32 • QS Asia #10',
    examMode: '100% Home Proctored',
    fee: '₹1,65,000 Total',
    emi: '₹5,833 / month',
    tracks: ['Online MBA', 'Online MCA', 'Online BBA'],
    logo: (
      <div className="w-10 h-10 rounded-full bg-[#eef4ff] border border-[#bfdbfe] flex items-center justify-center shrink-0 shadow-2xs overflow-hidden p-1">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 8 L84 26 L84 66 C84 82 50 94 50 94 C50 94 16 82 16 66 L16 26 Z" fill="#0b2b64" stroke="#f59e0b" strokeWidth="3" />
          <path d="M50 20 L74 34 L74 62 C74 74 50 84 50 84 C50 84 26 74 26 62 L26 34 Z" fill="#f59e0b" />
          <text x="50" y="58" textAnchor="middle" fill="#0b2b64" fontSize="13" fontWeight="bold" fontFamily="sans-serif">AMITY</text>
        </svg>
      </div>
    ),
  },
  {
    id: 'cu-online',
    name: 'CU Online',
    fullName: 'Chandigarh University',
    location: 'Mohali, Punjab',
    naac: 'NAAC A+',
    rank: 'NIRF #32 • QS Ranked',
    examMode: 'Web-Proctored AI',
    fee: '₹1,35,000 Total',
    emi: '₹4,500 / month',
    tracks: ['Online MBA', 'Online MCA', 'Online BBA'],
    logo: (
      <div className="w-10 h-10 rounded-xl bg-[#991b1b] text-white flex flex-col items-center justify-center shrink-0 shadow-2xs font-bold leading-none p-1">
        <span className="text-[13px] tracking-tight">CU</span>
        <span className="text-[7.5px] text-red-200 tracking-widest mt-0.5">ONLINE</span>
      </div>
    ),
  },
  {
    id: 'manipal-online',
    name: 'Online Manipal',
    fullName: 'Manipal University Jaipur',
    location: 'Jaipur, Rajasthan',
    naac: 'NAAC A++',
    rank: 'NIRF #64 • 70+ Yrs',
    examMode: 'Online AI-Proctored',
    fee: '₹1,75,000 Total',
    emi: '₹5,200 / month',
    tracks: ['Online MBA', 'Online MCA', 'Online B.Com'],
    logo: (
      <div className="w-10 h-10 rounded-full bg-[#fff4ed] border border-[#fed7aa] flex items-center justify-center shrink-0 shadow-2xs p-1">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="24" r="14" fill="#ea580c" />
          <path d="M22 84 C22 56 40 44 50 44 C60 44 78 56 78 84" fill="#ea580c" />
        </svg>
      </div>
    ),
  },
  {
    id: 'jain-online',
    name: 'Jain Online',
    fullName: 'Jain (Deemed-to-be) University',
    location: 'Bangalore, Karnataka',
    naac: 'NAAC A++',
    rank: 'NIRF Top 70 Ranked',
    examMode: 'Home AI-Proctored',
    fee: '₹1,50,000 Total',
    emi: '₹4,800 / month',
    tracks: ['Online MBA', 'Online MCA', 'Online M.Com'],
    logo: (
      <div className="w-10 h-10 rounded-full bg-[#1e1b4b] text-white flex items-center justify-center shrink-0 shadow-2xs font-extrabold text-xs border-2 border-indigo-400">
        JGI
      </div>
    ),
  },
  {
    id: 'upes-online',
    name: 'UPES Online',
    fullName: 'University of Petroleum & Energy Studies',
    location: 'Dehradun, Uttarakhand',
    naac: 'NAAC A',
    rank: 'NIRF Top 55 Tech Hub',
    examMode: 'AI-Proctored Online',
    fee: '₹1,60,000 Total',
    emi: '₹5,300 / month',
    tracks: ['Online MBA', 'Online MCA', 'Online BCA'],
    logo: (
      <div className="w-10 h-10 rounded-xl bg-[#f0f9ff] border border-[#bae6fd] flex items-center justify-center shrink-0 shadow-2xs p-1">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20 20 L20 60 C20 78 36 90 50 90 C64 90 80 78 80 60 L80 20 L62 20 L62 60 C62 68 56 72 50 72 C44 72 38 68 38 60 L38 20 Z" fill="#0284c7" />
          <circle cx="50" cy="38" r="8" fill="#dc2626" />
        </svg>
      </div>
    ),
  },
];

export interface StudentStory {
  id: string;
  name: string;
  role: string;
  company: string;
  university: string;
  universityShort: string;
  degree: string;
  courseId: string;
  growth: string;
  previousRole: string;
  quote: string;
  videoDuration: string;
  naac: string;
  verifiedTag: string;
  rating: number;
  featured?: boolean;
  image?: string;
  topics: { time: string; title: string }[];
}

export const STUDENT_TESTIMONIALS: StudentStory[] = [
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    role: 'Product Operations Lead',
    company: 'FinTech Global Solutions',
    university: 'Lovely Professional University',
    universityShort: 'LPU Online',
    degree: 'Online MBA (Finance & Analytics)',
    courseId: 'lpu-mba',
    growth: '+145% CTC Hike (₹7.5 LPA → ₹18.4 LPA)',
    previousRole: 'Associate Business Analyst',
    quote: 'The UGC-entitled degree was directly accepted during MNC background checks without any friction. Weekend live sessions and LMS flexibility made balancing a 50-hour work week seamless.',
    videoDuration: '2:45 min',
    naac: 'NAAC A++',
    verifiedTag: 'UGC & WES Verified',
    rating: 5,
    featured: true,
    image: '/src/assets/images/student_success_thumb_1791608010797.jpg',
    topics: [
      { time: '0:18', title: 'Managing 50hr corporate week & classes' },
      { time: '1:10', title: 'Why UGC-DEB equivalence mattered for MNC promo' },
      { time: '2:05', title: 'Online Siksha zero-cost EMI admission help' },
    ],
  },
  {
    id: 'vikram-rao',
    name: 'Vikramaditya Rao',
    role: 'Senior Cloud Solutions Architect',
    company: 'Infosys Enterprise',
    university: 'Manipal University Jaipur',
    universityShort: 'Manipal Online',
    degree: 'Online MCA (Cloud Computing)',
    courseId: 'manipal-mca',
    growth: '+120% Salary Growth (Tech Support → Cloud Architect)',
    previousRole: 'Technical Support Executive',
    quote: 'Home-proctored semester exams meant I never had to burn office leaves. The hands-on virtual cloud labs gave me the edge to crack international cloud interviews.',
    videoDuration: '3:12 min',
    naac: 'NAAC A++',
    verifiedTag: 'DigiLocker Verified Degree',
    rating: 5,
    topics: [
      { time: '0:25', title: 'Switching from support to cloud architecture' },
      { time: '1:30', title: 'AI-Proctored term exams experience' },
      { time: '2:35', title: 'Cracking technical interview rounds' },
    ],
  },
  {
    id: 'pooja-sundaram',
    name: 'Pooja Sundaram',
    role: 'HR Business Partner',
    company: 'Reliance Retail',
    university: 'Chandigarh University',
    universityShort: 'CU Online',
    degree: 'Online MBA (Human Resource Management)',
    courseId: 'cu-mba',
    growth: '+95% Career Jump (Promoted to Lead HR Partner)',
    previousRole: 'Talent Sourcing Specialist',
    quote: 'I needed a recognized master’s degree to qualify for leadership bands. Online Siksha counsellors helped me verify the official UGC-DEB gazette before paying a single rupee.',
    videoDuration: '2:15 min',
    naac: 'NAAC A+',
    verifiedTag: 'Govt & MNC Approved',
    rating: 5,
    topics: [
      { time: '0:15', title: 'Overcoming fear of online vs regular degrees' },
      { time: '1:05', title: 'Zero-cost monthly EMI with no bank interest' },
      { time: '1:50', title: 'Passing appraisal review with new MBA' },
    ],
  },
  {
    id: 'karthik-nair',
    name: 'Karthik Nair',
    role: 'Data Analytics Consultant',
    company: 'Fractal Analytics',
    university: 'Amity University Online',
    universityShort: 'Amity Online',
    degree: 'Online BCA (Data Science Track)',
    courseId: 'amity-bca',
    growth: '+140% Hike (₹3.8 LPA → ₹9.2 LPA)',
    previousRole: 'Field Operations Rep',
    quote: 'Coming from non-tech, the step-by-step SQL and Python modules were intuitive. The placement drive gave me direct interviews with 5 premier analytics firms.',
    videoDuration: '3:40 min',
    naac: 'NAAC A+',
    verifiedTag: '300+ Hiring Partners',
    rating: 5,
    topics: [
      { time: '0:30', title: 'Non-tech background to Data Science transition' },
      { time: '1:45', title: 'Weekly mentorship with senior tech leads' },
      { time: '2:50', title: 'Campus placement drive experience' },
    ],
  },
  {
    id: 'sneha-mukherjee',
    name: 'Sneha Mukherjee',
    role: 'Senior Financial Auditor',
    company: 'Deloitte USI',
    university: 'Jain University Online',
    universityShort: 'Jain Online',
    degree: 'Online M.Com (Corporate Finance & Taxation)',
    courseId: 'jain-mcom',
    growth: '+110% Salary Growth (Global Big 4 Transition)',
    previousRole: 'Junior Staff Accountant',
    quote: 'Studied for global certifications alongside my Online M.Com. Both the university faculty and Online Siksha’s desk assisted me at every step with document verification.',
    videoDuration: '2:50 min',
    naac: 'Category-1 UGC',
    verifiedTag: 'UGC-DEB Entitled',
    rating: 5,
    topics: [
      { time: '0:22', title: 'Combining CPA preparation with Online M.Com' },
      { time: '1:20', title: 'Transparent fees and zero hidden charges' },
      { time: '2:15', title: 'Big 4 hiring partner onboarding' },
    ],
  },
  {
    id: 'rohan-deshmukh',
    name: 'Rohan Deshmukh',
    role: 'Growth Marketing Manager',
    company: 'Swiggy',
    university: 'D.Y. Patil University Online',
    universityShort: 'D.Y. Patil Online',
    degree: 'Online BBA (Digital Strategy)',
    courseId: 'dypatil-bba',
    growth: '+85% CTC Growth (Fast-Tracked into Management)',
    previousRole: 'Digital Marketing Intern',
    quote: 'The curriculum was 100% current with today’s marketing tools. What I studied on Saturday live sessions, I implemented in client marketing campaigns on Monday.',
    videoDuration: '1:55 min',
    naac: 'NAAC A++',
    verifiedTag: '100% Digital Campus',
    rating: 5,
    topics: [
      { time: '0:14', title: 'Practical case study methodology' },
      { time: '0:55', title: 'Interactive student community & forums' },
      { time: '1:35', title: 'Digital Degree issued on DigiLocker' },
    ],
  },
];

export interface TrustedUniversityItem {
  id: string;
  name: string;
  fullName: string;
  accreditation: string;
  nirf: string;
  category: string;
  bgColor: string;
  borderColor: string;
  logo: React.ReactNode;
}

export const TRUSTED_UNIVERSITIES: TrustedUniversityItem[] = [
  {
    id: 'lpu-online',
    name: 'LPU Online',
    fullName: 'Lovely Professional University',
    accreditation: 'NAAC A++',
    nirf: 'NIRF #31',
    category: 'Top 35 NIRF',
    bgColor: '#faecd6',
    borderColor: '#f3ca90',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <circle cx="50" cy="50" r="46" fill="#1b1c20" stroke="#f59e0b" strokeWidth="4" />
        <path d="M50 16 L65 38 L35 38 Z" fill="#f59e0b" />
        <circle cx="50" cy="54" r="16" fill="#f59e0b" />
        <text x="50" y="80" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">LPU</text>
      </svg>
    ),
  },
  {
    id: 'amity-online',
    name: 'Amity Online',
    fullName: 'Amity University Online',
    accreditation: 'NAAC A+',
    nirf: 'QS Asia #10',
    category: 'NIRF #32',
    bgColor: '#e9f1ff',
    borderColor: '#c6daf9',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#0b5cad" />
        <path d="M50 15 L78 80 L62 80 L50 48 L38 80 L22 80 Z" fill="#ffffff" />
        <path d="M36 62 L64 62" stroke="#f59e0b" strokeWidth="6" />
      </svg>
    ),
  },
  {
    id: 'manipal-online',
    name: 'Online Manipal',
    fullName: 'Manipal University Jaipur',
    accreditation: 'NAAC A++',
    nirf: 'NIRF Top 50',
    category: 'UGC-DEB',
    bgColor: '#fff4eb',
    borderColor: '#ffd0b0',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <circle cx="50" cy="50" r="46" fill="#ea580c" />
        <path d="M25 70 L25 30 L50 55 L75 30 L75 70" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'chandigarh-univ',
    name: 'CU Online',
    fullName: 'Chandigarh University',
    accreditation: 'NAAC A+',
    nirf: 'QS World #1',
    category: 'Top Private Univ',
    bgColor: '#fee2e2',
    borderColor: '#fca5a5',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#b91c1c" />
        <circle cx="50" cy="50" r="26" fill="none" stroke="#ffffff" strokeWidth="8" strokeDasharray="120" />
        <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="bold">CU</text>
      </svg>
    ),
  },
  {
    id: 'jain-online',
    name: 'Jain Online',
    fullName: 'Jain (Deemed-to-be) University',
    accreditation: 'NAAC A++',
    nirf: 'NIRF #68',
    category: 'Bangalore Tech Hub',
    bgColor: '#eff6ff',
    borderColor: '#bfdbfe',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#1e40af" />
        <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="bold">JU</text>
      </svg>
    ),
  },
  {
    id: 'nmims-online',
    name: 'NMIMS Global',
    fullName: 'Narsee Monjee Institute of Mgmt',
    accreditation: 'NAAC A+',
    nirf: 'UGC Cat-1',
    category: 'Top Management',
    bgColor: '#fdf2f8',
    borderColor: '#fbcfe8',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#9d174d" />
        <path d="M26 72 L26 28 L42 28 L58 54 L58 28 L74 28 L74 72 L58 72 L42 46 L42 72 Z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'dypatil-online',
    name: 'D.Y. Patil Online',
    fullName: 'Dr. D.Y. Patil Vidyapeeth Pune',
    accreditation: 'NAAC A++',
    nirf: 'NIRF #44',
    category: 'Healthcare & Mgmt',
    bgColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#047857" />
        <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">DPU</text>
      </svg>
    ),
  },
  {
    id: 'symbiosis-online',
    name: 'Symbiosis Online',
    fullName: 'Symbiosis CDL (SSODL)',
    accreditation: 'NAAC A++',
    nirf: 'AICTE Entitled',
    category: 'Pioneer Digital',
    bgColor: '#fff7ed',
    borderColor: '#fed7aa',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <circle cx="50" cy="50" r="46" fill="#c2410c" />
        <text x="50" y="60" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">SCDL</text>
      </svg>
    ),
  },
  {
    id: 'upes-online',
    name: 'UPES Online',
    fullName: 'Univ of Petroleum & Energy Studies',
    accreditation: 'NAAC A+',
    nirf: 'NIRF #54',
    category: 'Dehradun Campus',
    bgColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#15803d" />
        <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="bold">UPES</text>
      </svg>
    ),
  },
  {
    id: 'bits-wilp',
    name: 'BITS Pilani WILP',
    fullName: 'Birla Institute of Tech & Science',
    accreditation: 'Inst of Eminence',
    nirf: 'NIRF #20',
    category: 'Work Integrated',
    bgColor: '#f5f3ff',
    borderColor: '#ddd6fe',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <circle cx="50" cy="50" r="46" fill="#5b21b6" />
        <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="bold">BITS</text>
      </svg>
    ),
  },
  {
    id: 'snu-online',
    name: 'Shiv Nadar Online',
    fullName: 'Shiv Nadar University',
    accreditation: 'Inst of Eminence',
    nirf: 'NIRF #62',
    category: 'Research Univ',
    bgColor: '#eff6ff',
    borderColor: '#93c5fd',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#0369a1" />
        <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">SNU</text>
      </svg>
    ),
  },
  {
    id: 'uttaranchal-online',
    name: 'Uttaranchal Online',
    fullName: 'Uttaranchal University',
    accreditation: 'NAAC A+',
    nirf: 'UGC-DEB',
    category: 'Govt Approved',
    bgColor: '#fdf4ff',
    borderColor: '#f5d0fe',
    logo: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <rect width="100" height="100" rx="20" fill="#86198f" />
        <text x="50" y="62" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="bold">UU</text>
      </svg>
    ),
  },
];

export const LOCATION_CITIES = [
  'All India',
  'Delhi/NCR',
  'Hyderabad',
  'Bangalore',
  'Pune',
  'Chennai',
  'Mumbai (All)',
];

export interface CollegeLocationData {
  id: string;
  n: string;
  shortName?: string;
  c: string;
  state: string;
  r: string;
  nirfYear?: string;
  co: string;
  s: number;
  reviewsCount: number;
  f: string;
  reg: string;
  i: string;
  g: [string, string];
  type: string;
  naac: string;
  popularCourses: string[];
  avgPackage: string;
  highestPackage: string;
  established: string;
  image: string;
  universityId?: string;
}

export const COLLEGES_BY_LOCATION: CollegeLocationData[] = [
  {
    id: 'nit-kkr',
    n: 'NIT Kurukshetra – National Institute of Technology',
    shortName: 'NIT Kurukshetra',
    c: 'Kurukshetra',
    state: 'Haryana',
    r: '#85 NIRF',
    nirfYear: '2024',
    co: '20 Courses',
    s: 4.1,
    reviewsCount: 380,
    f: '₹5.00 L',
    reg: 'All India',
    i: 'NIT',
    g: ['#7f1d1d', '#b91c1c'],
    type: 'Govt. Autonomous Institute',
    naac: 'UGC & AICTE Approved',
    popularCourses: ['B.Tech', 'M.Tech', 'MCA', 'MBA'],
    avgPackage: '₹11.2 LPA Avg',
    highestPackage: '₹44.0 LPA',
    established: 'Est. 1963',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'niftem',
    n: 'NIFTEM – National Institute of Food Technology',
    shortName: 'NIFTEM Sonepat',
    c: 'Kundli, Sonepat',
    state: 'Delhi/NCR',
    r: '101-150 NIRF',
    nirfYear: '2024',
    co: '8 Courses',
    s: 4.0,
    reviewsCount: 190,
    f: '₹3.80 L',
    reg: 'Delhi/NCR',
    i: 'NIF',
    g: ['#065f46', '#10b981'],
    type: 'Central Govt. Institute (MoFPI)',
    naac: 'NAAC A Grade',
    popularCourses: ['B.Tech Food Tech', 'M.Tech', 'MBA'],
    avgPackage: '₹6.8 LPA Avg',
    highestPackage: '₹18.0 LPA',
    established: 'Est. 2006',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'amity-gurugram',
    n: 'Amity University, Gurugram Campus',
    shortName: 'Amity Gurugram',
    c: 'Manesar, Gurgaon',
    state: 'Delhi/NCR',
    r: '101-150 NIRF',
    nirfYear: '2024',
    co: '22 Courses',
    s: 4.1,
    reviewsCount: 640,
    f: '₹8.56 L',
    reg: 'Delhi/NCR',
    i: 'AU',
    g: ['#1e3a8a', '#3b82f6'],
    type: 'Private Research University',
    naac: 'NAAC A+ Accredited',
    popularCourses: ['B.Tech CSE', 'MBA', 'BBA', 'BCA'],
    avgPackage: '₹7.5 LPA Avg',
    highestPackage: '₹32.0 LPA',
    established: 'Est. 2010',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    universityId: 'amity-online',
  },
  {
    id: 'mmu-mullana',
    n: 'Maharishi Markandeshwar (Deemed to be University)',
    shortName: 'MMU Mullana',
    c: 'Mullana, Ambala',
    state: 'Haryana',
    r: '101-150 NIRF',
    nirfYear: '2024',
    co: '22 Courses',
    s: 4.0,
    reviewsCount: 310,
    f: '₹3.37 L',
    reg: 'All India',
    i: 'MMU',
    g: ['#9a3412', '#f97316'],
    type: 'Deemed-to-be University',
    naac: 'NAAC A++ (Highest Grade)',
    popularCourses: ['B.Tech', 'MBA', 'MCA', 'B.Pharma'],
    avgPackage: '₹6.2 LPA Avg',
    highestPackage: '₹24.0 LPA',
    established: 'Est. 1993',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mriirs',
    n: 'Manav Rachna International Institute (MRIIRS)',
    shortName: 'Manav Rachna',
    c: 'Surajkund, Faridabad',
    state: 'Delhi/NCR',
    r: '101-150 NIRF',
    nirfYear: '2024',
    co: '18 Courses',
    s: 4.2,
    reviewsCount: 420,
    f: '₹4.20 L',
    reg: 'Delhi/NCR',
    i: 'MRI',
    g: ['#6d28d9', '#a78bfa'],
    type: 'Deemed University (UGC)',
    naac: 'NAAC A++ Accredited',
    popularCourses: ['B.Tech CSE', 'BBA', 'B.Des', 'MBA'],
    avgPackage: '₹6.5 LPA Avg',
    highestPackage: '₹34.0 LPA',
    established: 'Est. 1997',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iiit-hyd',
    n: 'IIIT Hyderabad – International Institute of Info Tech',
    shortName: 'IIIT Hyderabad',
    c: 'Gachibowli, Hyderabad',
    state: 'Telangana',
    r: '#55 NIRF',
    nirfYear: '2024',
    co: '12 Courses',
    s: 4.7,
    reviewsCount: 560,
    f: '₹7.20 L',
    reg: 'Hyderabad',
    i: 'IIIT',
    g: ['#0f766e', '#14b8a6'],
    type: 'Autonomous Public-Private',
    naac: 'Tier-1 NBA Accredited',
    popularCourses: ['B.Tech CSE', 'B.Tech ECE', 'M.Tech AI', 'MS Research'],
    avgPackage: '₹30.0 LPA Avg',
    highestPackage: '₹1.02 Cr',
    established: 'Est. 1998',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'osmania-univ',
    n: 'Osmania University (Heritage University)',
    shortName: 'Osmania University',
    c: 'Amberpet, Hyderabad',
    state: 'Telangana',
    r: '#64 NIRF',
    nirfYear: '2024',
    co: '28 Courses',
    s: 4.1,
    reviewsCount: 730,
    f: '₹1.80 L',
    reg: 'Hyderabad',
    i: 'OU',
    g: ['#374151', '#4b5563'],
    type: 'State Public University',
    naac: 'NAAC A+ Accredited',
    popularCourses: ['B.Tech', 'MBA', 'MCA', 'M.Sc Data'],
    avgPackage: '₹5.5 LPA Avg',
    highestPackage: '₹22.0 LPA',
    established: 'Est. 1918',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iisc-blr',
    n: 'Indian Institute of Science (IISc Bangalore)',
    shortName: 'IISc Bangalore',
    c: 'Malleshwaram, Bangalore',
    state: 'Karnataka',
    r: '#1 NIRF Overall',
    nirfYear: '2024',
    co: '18 Courses',
    s: 4.9,
    reviewsCount: 950,
    f: '₹2.40 L',
    reg: 'Bangalore',
    i: 'IISc',
    g: ['#1e3a8a', '#2563eb'],
    type: 'Institute of Eminence (IoE)',
    naac: 'NAAC A++ (3.82 CGPA)',
    popularCourses: ['B.Sc (Research)', 'M.Tech AI', 'M.Des', 'Ph.D'],
    avgPackage: '₹28.0 LPA Avg',
    highestPackage: '₹86.0 LPA',
    established: 'Est. 1909',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'jain-blr',
    n: 'Jain University Online & Campus Bangalore',
    shortName: 'Jain University',
    c: 'Jayanagar, Bangalore',
    state: 'Karnataka',
    r: '#68 NIRF',
    nirfYear: '2024',
    co: '34 Courses',
    s: 4.3,
    reviewsCount: 680,
    f: '₹2.10 L',
    reg: 'Bangalore',
    i: 'JU',
    g: ['#1d4ed8', '#60a5fa'],
    type: 'Deemed-to-be University',
    naac: 'NAAC A++ Accredited',
    popularCourses: ['Online MBA', 'MCA', 'BBA', 'B.Com'],
    avgPackage: '₹6.8 LPA Avg',
    highestPackage: '₹30.0 LPA',
    established: 'Est. 1990',
    image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80',
    universityId: 'jain-online',
  },
  {
    id: 'symbiosis-pune',
    n: 'Symbiosis International (Deemed University)',
    shortName: 'Symbiosis Pune',
    c: 'Lavale, Pune',
    state: 'Maharashtra',
    r: '#32 NIRF',
    nirfYear: '2024',
    co: '26 Courses',
    s: 4.4,
    reviewsCount: 890,
    f: '₹6.50 L',
    reg: 'Pune',
    i: 'SIU',
    g: ['#991b1b', '#ef4444'],
    type: 'Deemed University (Category-1)',
    naac: 'NAAC A++ (3.58 CGPA)',
    popularCourses: ['MBA (SNAP)', 'BBA', 'B.Tech SIT', 'LLB'],
    avgPackage: '₹14.5 LPA Avg',
    highestPackage: '₹38.0 LPA',
    established: 'Est. 1971',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coep-pune',
    n: 'COEP Technological University (Est. 1854)',
    shortName: 'COEP Pune',
    c: 'Shivajinagar, Pune',
    state: 'Maharashtra',
    r: '#73 NIRF',
    nirfYear: '2024',
    co: '15 Courses',
    s: 4.5,
    reviewsCount: 540,
    f: '₹3.80 L',
    reg: 'Pune',
    i: 'COEP',
    g: ['#075985', '#0284c7'],
    type: 'State Unitary Public University',
    naac: 'NBA Tier-1 Accredited',
    popularCourses: ['B.Tech Mechanical', 'B.Tech Comp', 'M.Tech', 'MBA'],
    avgPackage: '₹9.8 LPA Avg',
    highestPackage: '₹50.5 LPA',
    established: 'Est. 1854',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iit-madras',
    n: 'IIT Madras – Indian Institute of Technology',
    shortName: 'IIT Madras',
    c: 'Adyar, Chennai',
    state: 'Tamil Nadu',
    r: '#1 NIRF Engineering',
    nirfYear: '2024',
    co: '25 Courses',
    s: 4.9,
    reviewsCount: 1250,
    f: '₹3.15 L',
    reg: 'Chennai',
    i: 'IITM',
    g: ['#854d0e', '#eab308'],
    type: 'Institute of National Importance',
    naac: 'IoE Govt. of India',
    popularCourses: ['BS Data Science', 'B.Tech', 'M.Tech', 'MBA'],
    avgPackage: '₹21.4 LPA Avg',
    highestPackage: '₹1.31 Cr',
    established: 'Est. 1959',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'srm-ist',
    n: 'SRM Institute of Science and Technology',
    shortName: 'SRM IST Chennai',
    c: 'Kattankulathur, Chennai',
    state: 'Tamil Nadu',
    r: '#28 NIRF',
    nirfYear: '2024',
    co: '45 Courses',
    s: 4.2,
    reviewsCount: 960,
    f: '₹7.00 L',
    reg: 'Chennai',
    i: 'SRM',
    g: ['#1e1b4b', '#4338ca'],
    type: 'Deemed-to-be University',
    naac: 'NAAC A++ Accredited',
    popularCourses: ['B.Tech CSE', 'MBA', 'B.Sc Data Science', 'MCA'],
    avgPackage: '₹7.7 LPA Avg',
    highestPackage: '₹42.5 LPA',
    established: 'Est. 1985',
    image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iit-bombay',
    n: 'IIT Bombay – Indian Institute of Technology',
    shortName: 'IIT Bombay',
    c: 'Powai, Mumbai',
    state: 'Maharashtra',
    r: '#3 NIRF Overall',
    nirfYear: '2024',
    co: '24 Courses',
    s: 4.9,
    reviewsCount: 1480,
    f: '₹4.20 L',
    reg: 'Mumbai (All)',
    i: 'IITB',
    g: ['#14532d', '#22c55e'],
    type: 'Institute of National Importance',
    naac: 'IoE Govt. of India',
    popularCourses: ['B.Tech', 'M.Tech AI', 'MBA (SJMSOM)', 'B.Des'],
    avgPackage: '₹23.5 LPA Avg',
    highestPackage: '₹1.68 Cr',
    established: 'Est. 1958',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nmims-mumbai',
    n: 'NMIMS Deemed-to-be-University (Mumbai)',
    shortName: 'NMIMS Mumbai',
    c: 'Vile Parle, Mumbai',
    state: 'Maharashtra',
    r: '#21 NIRF Mgmt',
    nirfYear: '2024',
    co: '32 Courses',
    s: 4.3,
    reviewsCount: 840,
    f: '₹8.25 L',
    reg: 'Mumbai (All)',
    i: 'NMIMS',
    g: ['#881337', '#f43f5e'],
    type: 'Category-1 Deemed University',
    naac: 'NAAC A+ Accredited',
    popularCourses: ['MBA (NMAT)', 'Online MBA', 'BBA', 'B.Tech MPSTME'],
    avgPackage: '₹19.4 LPA Avg',
    highestPackage: '₹67.8 LPA',
    established: 'Est. 1981',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    universityId: 'nmims-online',
  },
];

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenApply,
  onOpenHelpDesk,
}) => {
  const navigate = useNavigate();

  // Degree category tab in hero
  const [degreeCategory, setDegreeCategory] = useState<string>('All Degrees');

  // Search dropdown states
  const [selectedDegree, setSelectedDegree] = useState<string>('Online MBA (Management)');
  const [degreeDropdownOpen, setDegreeDropdownOpen] = useState(false);
  const [degreeSearchText, setDegreeSearchText] = useState('');

  const [selectedBudget, setSelectedBudget] = useState<string>('₹12K – ₹50K / semester');
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);

  const [selectedExamFormat, setSelectedExamFormat] = useState<string>('Remote Proctored');
  const [examDropdownOpen, setExamDropdownOpen] = useState(false);

  // Searchable & Filterable Program Directory State
  const [programSearchQuery, setProgramSearchQuery] = useState('');
  const [selectedProgramLevel, setSelectedProgramLevel] = useState<'all' | 'pg' | 'ug' | 'diploma'>('all');
  const [selectedBudgetFilter, setSelectedBudgetFilter] = useState<'all' | 'under120' | '120to160' | 'above160'>('all');

  // Hero University Search Input (matching user request)
  const [heroUniversitySearch, setHeroUniversitySearch] = useState('');

  // Best-Fit Match Hero Card State
  const [bfmStep, setBfmStep] = useState<number>(0);
  const [bfmDegree, setBfmDegree] = useState<string | null>(null);
  const [bfmBudget, setBfmBudget] = useState<'low' | 'mid' | 'high' | null>(null);
  const [bfmExam, setBfmExam] = useState<'remote' | 'centre' | 'any' | null>(null);
  const [bfmPhone, setBfmPhone] = useState<string>('');
  const [bfmError, setBfmError] = useState<string>('');
  const [bfmSubmitting, setBfmSubmitting] = useState<boolean>(false);

  const isBfmInBudget = (fee: number, budget: 'low' | 'mid' | 'high' | null) => {
    if (!budget) return true;
    if (budget === 'low') return fee < 25000;
    if (budget === 'mid') return fee >= 25000 && fee <= 50000;
    return fee > 50000;
  };

  const bfmMatches = useMemo(() => {
    if (!bfmDegree) return [];
    return BFM_UNIS.filter(u => u.deg.includes(bfmDegree) && (!bfmExam || bfmExam === 'any' || u.exam.includes(bfmExam)))
      .map(u => ({ ...u, f: u.fee[bfmDegree] || 30000 }))
      .sort((a, b) => {
        const aIn = isBfmInBudget(a.f, bfmBudget) ? 1 : 0;
        const bIn = isBfmInBudget(b.f, bfmBudget) ? 1 : 0;
        return bIn - aIn || a.f - b.f;
      });
  }, [bfmDegree, bfmBudget, bfmExam]);

  const bfmFitMatches = useMemo(() => {
    return bfmMatches.filter(u => isBfmInBudget(u.f, bfmBudget));
  }, [bfmMatches, bfmBudget]);

  const bfmDisplayList = useMemo(() => {
    return (bfmFitMatches.length > 0 ? bfmFitMatches : bfmMatches).slice(0, 3);
  }, [bfmFitMatches, bfmMatches]);

  const handleBfmLeadSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const phone = bfmPhone.trim();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setBfmError("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    setBfmError("");
    setBfmSubmitting(true);
    setTimeout(() => {
      setBfmSubmitting(false);
      setBfmStep(4);
      try {
        const stored = JSON.parse(localStorage.getItem('degreefyd_leads') || '[]');
        stored.push({
          phone: phone,
          degree: BFM_DEG_LABELS[bfmDegree || 'MBA'] || 'Online MBA',
          budget: BFM_BUD_LABELS[bfmBudget || 'mid'] || '₹25K–₹50K',
          exam: BFM_EXAM_LABELS[bfmExam || 'remote'] || 'Remote proctored',
          timestamp: new Date().toISOString(),
          source: 'Best-Fit Match Hero Card 2026',
        });
        localStorage.setItem('degreefyd_leads', JSON.stringify(stored));
      } catch {
        // Fallback
      }
    }, 600);
  };

  const handleBfmReset = () => {
    setBfmDegree(null);
    setBfmBudget(null);
    setBfmExam(null);
    setBfmPhone('');
    setBfmError('');
    setBfmStep(0);
  };

  // =========================================================================
  // MOVEABLE & DRAGGABLE ALWAYS-MOVING CAROUSEL LOGIC
  // =========================================================================
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);

  // Triple items for seamless infinite continuous scroll loop
  const displayCarouselUniversities = useMemo(() => {
    return [
      ...CAROUSEL_UNIVERSITIES,
      ...CAROUSEL_UNIVERSITIES,
      ...CAROUSEL_UNIVERSITIES,
    ];
  }, []);

  // Continuous auto-moving ticker (kept moving always, no auto button needed)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - lastTime;
      lastTime = now;

      // Keep it moving continuously unless user is actively hovering or dragging
      if (!isHovered && !isDragging) {
        const speed = 0.05; // smooth constant gliding velocity
        carousel.scrollLeft += elapsed * speed;

        // When scrolled through one full set of universities, loop back seamlessly
        const singleSetWidth = carousel.scrollWidth / 3;
        if (carousel.scrollLeft >= singleSetWidth) {
          carousel.scrollLeft -= singleSetWidth;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isDragging]);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setDraggedDistance(0);
    setDragStartX(e.pageX);
    setDragStartScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const distance = e.pageX - dragStartX;
    setDraggedDistance(Math.abs(distance));
    carouselRef.current.scrollLeft = dragStartScrollLeft - distance;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
    }
  };

  // Touch Drag handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setDraggedDistance(0);
    setDragStartX(e.touches[0].pageX);
    setDragStartScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const distance = e.touches[0].pageX - dragStartX;
    setDraggedDistance(Math.abs(distance));
    carouselRef.current.scrollLeft = dragStartScrollLeft - distance;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
    }
  };

  // Step scroll button navigation
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // =========================================================================
  // STUDENT SUCCESS & VIDEO TESTIMONIALS AUTO-SLIDING CAROUSEL STATE & LOGIC
  // =========================================================================
  const testimonialsCarouselRef = useRef<HTMLDivElement>(null);
  const [isTestimonialsDragging, setIsTestimonialsDragging] = useState(false);
  const [isTestimonialsHovered, setIsTestimonialsHovered] = useState(false);
  const [testimonialsDragStartX, setTestimonialsDragStartX] = useState(0);
  const [testimonialsDragStartScrollLeft, setTestimonialsDragStartScrollLeft] = useState(0);
  const [testimonialsDraggedDistance, setTestimonialsDraggedDistance] = useState(0);

  // Video story player modal state
  const [selectedVideoStory, setSelectedVideoStory] = useState<StudentStory | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(25);
  const [isMuted, setIsMuted] = useState(false);

  // Triple testimonials for infinite auto-sliding ticker
  const displayTestimonials = useMemo(() => {
    return [
      ...STUDENT_TESTIMONIALS,
      ...STUDENT_TESTIMONIALS,
      ...STUDENT_TESTIMONIALS,
    ];
  }, []);

  // Continuous auto-moving ticker for student testimonials
  useEffect(() => {
    const carousel = testimonialsCarouselRef.current;
    if (!carousel) return;

    let animId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - lastTime;
      lastTime = now;

      if (!isTestimonialsHovered && !isTestimonialsDragging) {
        const speed = 0.045; // smooth gliding velocity
        carousel.scrollLeft += elapsed * speed;

        const singleSetWidth = carousel.scrollWidth / 3;
        if (carousel.scrollLeft >= singleSetWidth) {
          carousel.scrollLeft -= singleSetWidth;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isTestimonialsHovered, isTestimonialsDragging]);

  // Video simulated progress playback effect
  useEffect(() => {
    if (!selectedVideoStory || !isVideoPlaying) return;

    const interval = setInterval(() => {
      setVideoProgress((prev) => (prev >= 100 ? 5 : prev + 1));
    }, 400);

    return () => clearInterval(interval);
  }, [selectedVideoStory, isVideoPlaying]);

  // Testimonials Mouse Drag handlers
  const handleTestimonialsMouseDown = (e: React.MouseEvent) => {
    if (!testimonialsCarouselRef.current) return;
    setIsTestimonialsDragging(true);
    setTestimonialsDraggedDistance(0);
    setTestimonialsDragStartX(e.pageX);
    setTestimonialsDragStartScrollLeft(testimonialsCarouselRef.current.scrollLeft);
    testimonialsCarouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleTestimonialsMouseMove = (e: React.MouseEvent) => {
    if (!isTestimonialsDragging || !testimonialsCarouselRef.current) return;
    e.preventDefault();
    const distance = e.pageX - testimonialsDragStartX;
    setTestimonialsDraggedDistance(Math.abs(distance));
    testimonialsCarouselRef.current.scrollLeft = testimonialsDragStartScrollLeft - distance;
  };

  const handleTestimonialsMouseUpOrLeave = () => {
    if (!isTestimonialsDragging) return;
    setIsTestimonialsDragging(false);
    if (testimonialsCarouselRef.current) {
      testimonialsCarouselRef.current.style.scrollBehavior = 'smooth';
    }
  };

  // Testimonials Touch Drag handlers
  const handleTestimonialsTouchStart = (e: React.TouchEvent) => {
    if (!testimonialsCarouselRef.current) return;
    setIsTestimonialsDragging(true);
    setTestimonialsDraggedDistance(0);
    setTestimonialsDragStartX(e.touches[0].pageX);
    setTestimonialsDragStartScrollLeft(testimonialsCarouselRef.current.scrollLeft);
    testimonialsCarouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleTestimonialsTouchMove = (e: React.TouchEvent) => {
    if (!isTestimonialsDragging || !testimonialsCarouselRef.current) return;
    const distance = e.touches[0].pageX - testimonialsDragStartX;
    setTestimonialsDraggedDistance(Math.abs(distance));
    testimonialsCarouselRef.current.scrollLeft = testimonialsDragStartScrollLeft - distance;
  };

  const handleTestimonialsTouchEnd = () => {
    if (!isTestimonialsDragging) return;
    setIsTestimonialsDragging(false);
    if (testimonialsCarouselRef.current) {
      testimonialsCarouselRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsCarouselRef.current) {
      testimonialsCarouselRef.current.style.scrollBehavior = 'smooth';
      const scrollAmount = direction === 'left' ? -340 : 340;
      testimonialsCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleGlobalClick = () => {
      setDegreeDropdownOpen(false);
      setBudgetDropdownOpen(false);
      setExamDropdownOpen(false);
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Filtered Programs for Directory
  const filteredPrograms = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesSearch =
        !programSearchQuery.trim() ||
        course.name.toLowerCase().includes(programSearchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(programSearchQuery.toLowerCase()) ||
        (course.specializations && course.specializations.some((s) => s.toLowerCase().includes(programSearchQuery.toLowerCase())));

      const matchesLevel =
        selectedProgramLevel === 'all' || course.category === selectedProgramLevel;

      let matchesBudget = true;
      if (selectedBudgetFilter === 'under120') {
        matchesBudget = course.totalFee <= 120000;
      } else if (selectedBudgetFilter === '120to160') {
        matchesBudget = course.totalFee > 120000 && course.totalFee <= 160000;
      } else if (selectedBudgetFilter === 'above160') {
        matchesBudget = course.totalFee > 160000;
      }

      return matchesSearch && matchesLevel && matchesBudget;
    });
  }, [programSearchQuery, selectedProgramLevel, selectedBudgetFilter]);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroUniversitySearch.trim()) {
      navigate(`/universities?search=${encodeURIComponent(heroUniversitySearch.trim())}`);
    } else {
      navigate('/universities');
    }
  };

  // =========================================================================
  // TOP COLLEGES BY LOCATION - INTERACTIVE STATE & FILTERS
  // =========================================================================
  const [selectedLocationCity, setSelectedLocationCity] = useState<string>('All India');
  const [showAllLocationColleges, setShowAllLocationColleges] = useState<boolean>(false);
  const [savedCollegeNames, setSavedCollegeNames] = useState<Set<string>>(new Set());
  const [locationPreference, setLocationPreference] = useState<string>('All India');
  const [locationToastMessage, setLocationToastMessage] = useState<string | null>(null);

  // Auto-dismiss toast notification
  useEffect(() => {
    if (!locationToastMessage) return;
    const timer = setTimeout(() => {
      setLocationToastMessage(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [locationToastMessage]);

  const handleToggleSaveCollege = (collegeName: string) => {
    setSavedCollegeNames((prev) => {
      const next = new Set(prev);
      if (next.has(collegeName)) {
        next.delete(collegeName);
        setLocationToastMessage(`Removed ${collegeName} from your saved shortlist.`);
      } else {
        next.add(collegeName);
        setLocationToastMessage(`Saved ${collegeName} to your shortlisted colleges!`);
      }
      return next;
    });
  };

  const handleDownloadBrochure = (collegeName: string) => {
    setLocationToastMessage(`Downloading brochure for ${collegeName}...`);
    try {
      const content = `OFFICIAL ADMISSIONS & PROGRAM BROCHURE 2026\n\nInstitution: ${collegeName}\nAccreditation: UGC-DEB Entitled & NAAC Accredited\nProvided via Online Siksha Admissions Portal (https://onlinesiksha.edu)\n\nKey Highlights:\n- 100% Online Curriculum with Weekend Interactive Sessions\n- Digital Examinations & Continuous Proctored Assessments\n- Approved for Government Jobs, Global Higher Studies & Work Visas\n\nCounselor Helpdesk: admissions@degreefyd.com | 1800-123-ONLINE\nGenerated: ${new Date().toLocaleDateString()}`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${collegeName.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure_2026.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      // Fallback
    }
  };

  const handleSaveLocationPreference = () => {
    setSelectedLocationCity(locationPreference);
    setLocationToastMessage(`Preference saved! Prioritizing top colleges in ${locationPreference}.`);
  };

  // Filtered colleges for Top Colleges by Location
  const filteredLocationColleges = useMemo(() => {
    if (selectedLocationCity === 'All India') {
      return COLLEGES_BY_LOCATION;
    }
    return COLLEGES_BY_LOCATION.filter((c) => c.reg === selectedLocationCity);
  }, [selectedLocationCity]);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>('all');

  const filteredFaqs = useMemo(() => {
    if (faqCategoryFilter === 'all') return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.category === faqCategoryFilter);
  }, [faqCategoryFilter]);

  return (
    <div className="w-full font-['Poppins',sans-serif]">
      {/* =========================================================================
          FULL-WIDTH HIGH-IMPACT HERO SECTION (FULL-WIDTH GRID LAYOUT, NO HARD-CODED BOX WRAPPERS)
          Fluid Professional Navy Gradient with CSS Transitions across all Viewports
          Full-Width Responsive 12-Column Grid Architecture
          ========================================================================= */}
      <section className="relative w-full overflow-hidden hero-fluid-navy-bg border-b border-slate-800 text-white transition-all duration-700 ease-in-out">
        
        {/* Subtle Atmospheric Campus Backdrop with Multi-stop Fluid Navy Gradient Scrim */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transition-opacity duration-1000 ease-in-out">
          <img
            src="/src/assets/images/campus_hero_panorama_1791611907596.jpg"
            alt="Premier Accredited University Campus Architecture"
            className="w-full h-full object-cover object-[center_30%] opacity-20 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Responsive Fluid Gradient Overlays with CSS Transitions */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030f21]/95 via-[#082142]/85 to-[#05162d] transition-colors duration-700 ease-in-out" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(14,116,144,0.32),transparent_75%)] transition-opacity duration-700 ease-out" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_100%,rgba(37,99,235,0.2),transparent_70%)] transition-opacity duration-700 ease-out" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(16,185,129,0.08),transparent_65%)] transition-opacity duration-700 ease-out" />
        </div>

        {/* Full-Width Fluid Grid Container (No Box Containers, 15px Top Spacing, 22.5px Bottom Spacing) */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24 pt-[15px] pb-[22.5px] transition-all duration-500 ease-in-out">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-8 lg:gap-x-10 items-stretch">
            
            {/* Top Row: Live Announcement Badge - 15px Spacing from Top */}
            <div className="lg:col-span-12 flex items-center transition-all duration-300">
              <div 
                onClick={() => onOpenApply()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/30 text-xs text-sky-200 cursor-pointer group select-none hover:bg-blue-900/60 hover:border-blue-400/50 transition-all duration-200 backdrop-blur-md shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold tracking-tight text-white">Online Siksha Verified</span>
                <span className="text-blue-400/60">·</span>
                <span className="text-sky-200 font-medium group-hover:text-white transition-colors">
                  UGC-DEB Entitled Admissions 2026 Batch
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Main Narrative & Trust Column (Left Column in Full-Width Grid - Stretched to align with card) */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between py-1 transition-all duration-500">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold font-[600] text-white tracking-tight leading-[1.12] mb-3.5 sm:mb-4 [text-wrap:balance] transition-all duration-300 font-poppins" style={{ fontWeight: 600 }}>
                  Compare India’s Top{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-teal-200 font-semibold font-[600]" style={{ fontWeight: 600 }}>
                    Online Universities
                  </span>{' '}
                  &amp; Find the Right Degree
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal mb-5 sm:mb-6 max-w-2xl transition-all duration-300">
                  Explore 100% UGC-DEB entitled online degrees, official semester fees, NAAC rankings, and zero-cost EMI approvals in one verified portal.
                </p>

                {/* Verified Trust Feature Highlights (Placed above CTA buttons) */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300 transition-all duration-300">
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-0.5">
                    <Laptop className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                    <span><strong className="text-white font-semibold">Flexible Online</strong> Proctored Exams</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-0.5">
                    <Sparkles className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <span><strong className="text-white font-semibold">0% EMI</strong> Instant Approval</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-0.5">
                    <ShieldCheck className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                    <span><strong className="text-white font-semibold">UGC-DEB Entitled</strong> · 100% Govt Valid</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-0.5">
                    <Award className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                    <span><strong className="text-white font-semibold">NAAC A++ / A+</strong> Top Accreditation</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Explore 120+ Universities & Get Free Counseling pushed down to eliminate dead space */}
              <div className="mt-8 sm:mt-10 lg:mt-auto pt-5 sm:pt-6 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-300">
                <button
                  type="button"
                  onClick={() => navigate('/universities')}
                  className="h-11 sm:h-12 px-6 sm:px-7 bg-gradient-to-r from-[#0b5cad] to-[#1d4ed8] hover:from-[#094c8e] hover:to-[#1a44bf] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-blue-950/50 flex items-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Explore 120+ Universities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenApply()}
                  className="h-11 sm:h-12 px-5 sm:px-6 bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white/40 text-xs sm:text-sm font-semibold rounded-xl backdrop-blur-sm flex items-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-sky-300" />
                  <span>Get Free Counseling</span>
                </button>
              </div>
            </div>

            {/* Right Column in Full-Width Grid: Interactive Best-Fit Match Hero Card */}
            <div className="lg:col-span-5 xl:col-span-5 w-full flex flex-col justify-center transition-all duration-500">
              <div className="w-full max-w-[480px] lg:max-w-none mx-auto bg-white rounded-2xl border border-[#cfe1f7] shadow-2xl shadow-blue-950/80 overflow-hidden font-['Poppins',sans-serif] transition-all duration-300">
                
                {/* Cover Header */}
                <div className="relative p-4 sm:p-5 bg-gradient-to-r from-[#071d37] via-[#093d77] to-[#0b5cad] text-white overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-sky-400/20 rounded-full blur-xl pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg tracking-tight text-white font-['Poppins']">
                        Get your best-fit match
                      </h3>
                      <p className="text-xs text-sky-200 mt-0.5 font-normal">
                        3 quick questions · no sign-up needed
                      </p>
                    </div>
                    <span className="shrink-0 bg-white/20 border border-white/25 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      ⚡ 30 sec
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 bg-white text-slate-800 flex flex-col justify-between min-h-[384px]">
                  
                  {/* Step Progress Bar (hidden on final success step 4) */}
                  {bfmStep < 4 && (
                    <div className="mb-3">
                      <div className="flex gap-1.5 mb-2">
                        {[0, 1, 2].map((idx) => (
                          <div
                            key={idx}
                            className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                              bfmStep > idx
                                ? 'bg-[#0b5cad]'
                                : bfmStep === idx
                                ? 'bg-[#0b5cad]'
                                : 'bg-slate-100 border border-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 min-h-[20px]">
                        <span className="font-medium text-slate-600">
                          {bfmStep < 3 ? `Step ${bfmStep + 1} of 3` : 'Your matches'}
                        </span>
                        {bfmStep > 0 && bfmStep < 4 && (
                          <button
                            type="button"
                            onClick={() => setBfmStep((prev) => prev - 1)}
                            className="text-xs font-semibold text-[#0b5cad] hover:text-[#083e75] hover:underline cursor-pointer flex items-center gap-1"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 0: Degree Selection */}
                  {bfmStep === 0 && (
                    <div className="flex-1 flex flex-col animate-in fade-in duration-200">
                      <div className="text-base sm:text-lg font-bold text-[#0b2540] font-['Poppins'] mb-0.5">
                        Which degree are you looking for?
                      </div>
                      <div className="text-xs text-slate-500 mb-3">
                        Tap one — we'll move to the next question.
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                        {BFM_DEG_OPTIONS.map((opt) => (
                          <button
                            key={opt.k}
                            type="button"
                            onClick={() => {
                              setBfmDegree(opt.k);
                              setTimeout(() => setBfmStep(1), 160);
                            }}
                            className={`p-2.5 sm:p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all duration-150 cursor-pointer active:scale-[0.98] ${
                              bfmDegree === opt.k
                                ? 'border-[#0b5cad] bg-[#eef5fd] shadow-sm'
                                : 'border-[#cfe1f7] hover:border-[#0b5cad] hover:bg-[#f0f6ff] bg-white'
                            }`}
                          >
                            <span className="w-8 h-8 rounded-lg bg-[#eef5fd] flex items-center justify-center text-sm shrink-0 border border-[#cfe1f7]/50">
                              {opt.icon}
                            </span>
                            <div className="min-w-0">
                              <b className="block text-xs sm:text-[13px] font-bold text-[#0b2540] leading-snug truncate">
                                {opt.label}
                              </b>
                              <small className="text-[11px] text-slate-500 leading-tight block truncate">
                                {opt.sub}
                              </small>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 1: Budget Selection */}
                  {bfmStep === 1 && (
                    <div className="flex-1 flex flex-col animate-in fade-in duration-200">
                      <div className="text-base sm:text-lg font-bold text-[#0b2540] font-['Poppins'] mb-0.5">
                        What's your budget per semester?
                      </div>
                      <div className="text-xs text-slate-500 mb-3">
                        Official fees — no hidden charges.
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {BFM_BUD_OPTIONS.map((opt) => (
                          <button
                            key={opt.k}
                            type="button"
                            onClick={() => {
                              setBfmBudget(opt.k as 'low' | 'mid' | 'high');
                              setTimeout(() => setBfmStep(2), 160);
                            }}
                            className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all duration-150 cursor-pointer active:scale-[0.98] ${
                              bfmBudget === opt.k
                                ? 'border-[#0b5cad] bg-[#eef5fd] shadow-sm'
                                : 'border-[#cfe1f7] hover:border-[#0b5cad] hover:bg-[#f0f6ff] bg-white'
                            }`}
                          >
                            <span className="w-9 h-9 rounded-xl bg-[#eef5fd] flex items-center justify-center text-base shrink-0 border border-[#cfe1f7]/50">
                              {opt.icon}
                            </span>
                            <div className="min-w-0">
                              <b className="block text-xs sm:text-sm font-bold text-[#0b2540] leading-snug">
                                {opt.label}
                              </b>
                              <small className="text-xs text-slate-500 leading-tight block">
                                {opt.sub}
                              </small>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Exam Format Selection */}
                  {bfmStep === 2 && (
                    <div className="flex-1 flex flex-col animate-in fade-in duration-200">
                      <div className="text-base sm:text-lg font-bold text-[#0b2540] font-['Poppins'] mb-0.5">
                        How would you like to take exams?
                      </div>
                      <div className="text-xs text-slate-500 mb-3">
                        You can change this later with a counsellor.
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {BFM_EXAM_OPTIONS.map((opt) => (
                          <button
                            key={opt.k}
                            type="button"
                            onClick={() => {
                              setBfmExam(opt.k as 'remote' | 'centre' | 'any');
                              setTimeout(() => setBfmStep(3), 160);
                            }}
                            className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all duration-150 cursor-pointer active:scale-[0.98] ${
                              bfmExam === opt.k
                                ? 'border-[#0b5cad] bg-[#eef5fd] shadow-sm'
                                : 'border-[#cfe1f7] hover:border-[#0b5cad] hover:bg-[#f0f6ff] bg-white'
                            }`}
                          >
                            <span className="w-9 h-9 rounded-xl bg-[#eef5fd] flex items-center justify-center text-base shrink-0 border border-[#cfe1f7]/50">
                              {opt.icon}
                            </span>
                            <div className="min-w-0">
                              <b className="block text-xs sm:text-sm font-bold text-[#0b2540] leading-snug">
                                {opt.label}
                              </b>
                              <small className="text-xs text-slate-500 leading-tight block">
                                {opt.sub}
                              </small>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Match Results & Quick Lead Form */}
                  {bfmStep === 3 && (
                    <div className="flex-1 flex flex-col animate-in fade-in duration-200">
                      
                      {/* Summary Filter Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                        {bfmDegree && (
                          <button
                            type="button"
                            onClick={() => setBfmStep(0)}
                            className="px-2.5 py-1 bg-[#eef5fd] hover:bg-[#dbeafe] text-[#0b5cad] text-[11px] font-semibold rounded-full border border-[#cfe1f7] transition-colors cursor-pointer"
                          >
                            {BFM_DEG_LABELS[bfmDegree]} ✎
                          </button>
                        )}
                        {bfmBudget && (
                          <button
                            type="button"
                            onClick={() => setBfmStep(1)}
                            className="px-2.5 py-1 bg-[#eef5fd] hover:bg-[#dbeafe] text-[#0b5cad] text-[11px] font-semibold rounded-full border border-[#cfe1f7] transition-colors cursor-pointer"
                          >
                            {BFM_BUD_LABELS[bfmBudget]} ✎
                          </button>
                        )}
                        {bfmExam && (
                          <button
                            type="button"
                            onClick={() => setBfmStep(2)}
                            className="px-2.5 py-1 bg-[#eef5fd] hover:bg-[#dbeafe] text-[#0b5cad] text-[11px] font-semibold rounded-full border border-[#cfe1f7] transition-colors cursor-pointer"
                          >
                            {BFM_EXAM_LABELS[bfmExam]} ✎
                          </button>
                        )}
                      </div>

                      {/* Matches Count Header */}
                      <div className="text-xs sm:text-sm font-bold text-[#0b2540] mb-2 font-['Poppins']">
                        {bfmFitMatches.length > 0 ? (
                          <>
                            <span className="text-[#0b5cad] font-bold">{bfmFitMatches.length}</span>{' '}
                            {bfmFitMatches.length === 1 ? 'university matches' : 'universities match'} your filters
                          </>
                        ) : (
                          'No exact match in budget — closest options:'
                        )}
                      </div>

                      {/* University Shortlist Cards */}
                      <div className="space-y-2 mb-3">
                        {bfmDisplayList.map((uni) => (
                          <div
                            key={uni.s}
                            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl border border-[#cfe1f7] bg-[#f9fbfe]"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-[11px] shrink-0 font-['Poppins'] shadow-xs"
                              style={{ backgroundColor: uni.c }}
                            >
                              {uni.s}
                            </div>
                            <div className="flex-1 min-w-0">
                              <b className="block text-xs sm:text-[13px] font-bold text-[#0b2540] truncate leading-tight">
                                {uni.n}
                              </b>
                              <small className="text-[10px] text-slate-500 leading-tight flex items-center gap-1 mt-0.5">
                                <span>NAAC</span>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded-full border border-emerald-200 text-[9px]">
                                  {uni.na}
                                </span>
                                <span>· {uni.exam.map((e) => BFM_EXAM_LABELS[e]).join(' / ')}</span>
                              </small>
                            </div>
                            <div className="text-right shrink-0">
                              <b className="block text-xs sm:text-sm font-bold text-[#0b5cad] leading-tight">
                                ₹{Math.round(uni.f / 1000)}K
                              </b>
                              <small className="text-[10px] text-slate-500 leading-tight block">
                                per semester
                              </small>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Lead Form */}
                      <form
                        onSubmit={handleBfmLeadSubmit}
                        className="bg-[#f0f6ff] border border-[#cfe1f7] rounded-xl p-2.5 sm:p-3"
                      >
                        <label className="text-xs font-bold text-[#0b2540] mb-1.5 block">
                          Get fee details &amp; a free counselling call
                        </label>
                        <div className="flex gap-2">
                          <div className="flex items-center justify-center px-2.5 rounded-xl border border-[#cfe1f7] bg-white text-xs font-bold text-[#0b2540] shrink-0">
                            +91
                          </div>
                          <input
                            type="tel"
                            maxLength={10}
                            placeholder="10-digit mobile number"
                            value={bfmPhone}
                            onChange={(e) => {
                              setBfmPhone(e.target.value.replace(/\D/g, ''));
                              setBfmError('');
                            }}
                            className="flex-1 min-w-0 h-10 px-3 rounded-xl border border-[#cfe1f7] focus:border-[#0b5cad] text-xs font-medium outline-none bg-white text-[#0b2540]"
                          />
                          <button
                            type="submit"
                            disabled={bfmSubmitting}
                            className="h-10 px-3.5 sm:px-4 bg-[#0b5cad] hover:bg-[#084a8c] text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap disabled:opacity-75"
                          >
                            {bfmSubmitting ? 'Submitting...' : 'Call me back'}
                          </button>
                        </div>
                        {bfmError && (
                          <div className="text-[11px] text-rose-500 font-medium mt-1">
                            {bfmError}
                          </div>
                        )}
                        <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                          <span>🔒 No spam. We only call about your shortlist.</span>
                        </div>
                      </form>

                    </div>
                  )}

                  {/* Step 4: Submission Confirmation Screen */}
                  {bfmStep === 4 && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center py-6 px-2 animate-in zoom-in-95 duration-200">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-bold text-[#0b2540] font-['Poppins'] mb-1">
                        You're all set!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                        A counselor will call{' '}
                        <strong className="text-[#0b2540] font-semibold">
                          +91 {bfmPhone.slice(0, 2)}••••••{bfmPhone.slice(-2)}
                        </strong>{' '}
                        shortly with fees &amp; admission details for{' '}
                        <strong className="text-[#0b5cad] font-semibold">
                          {BFM_DEG_LABELS[bfmDegree || 'MBA']}
                        </strong>.
                      </p>
                      <button
                        type="button"
                        onClick={handleBfmReset}
                        className="mt-4 px-5 py-2 rounded-xl border border-[#cfe1f7] hover:bg-[#f0f6ff] text-[#0b2540] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Start over
                      </button>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN PAGE CONTENT CONTAINER FOR SUBSEQUENT SECTIONS
          Consistent 22.5px spacing between sections, no redundant whitespace
          ========================================================================= */}
      <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-4 md:px-6 py-[22.5px] space-y-[22.5px]">

      {/* =========================================================================
          TRUSTED BY - HORIZONTAL SCROLLING MARQUEE OF UNIVERSITY LOGOS
          (Establishes credibility, authority, and official accreditation trust)
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-[#cfe1f7] shadow-2xs overflow-hidden py-3.5 sm:py-4 px-3 sm:px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 mb-3 border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#eef5fd] flex items-center justify-center text-[#0b5cad] shrink-0 font-bold border border-[#cfe1f7]">
              <ShieldCheck className="w-4.5 h-4.5 text-[#0b5cad]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0b2540] leading-tight mb-0.5">
                  Trusted by Top Universities
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  UGC-DEB Entitled
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-normal mb-0">
                Premier accredited institutions offering degrees recognized worldwide
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 shrink-0">
            <span className="flex items-center gap-1 text-[#0b5cad]">
              <Award className="w-3.5 h-3.5 text-[#0b5cad]" /> NAAC A++ / A+
            </span>
            <span className="text-slate-300">•</span>
            <span>NIRF Top 100</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold">WES Recognized</span>
          </div>
        </div>

        {/* Marquee Wrapper with soft edge fades */}
        <div className="relative overflow-hidden group">
          {/* Left edge shadow fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/85 to-transparent z-10" />
          
          {/* Right edge shadow fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/85 to-transparent z-10" />

          {/* Continuous infinite marquee */}
          <div className="animate-marquee flex items-center gap-3.5 py-1">
            {[...TRUSTED_UNIVERSITIES, ...TRUSTED_UNIVERSITIES].map((uni, idx) => (
              <div
                key={`${uni.name}-${idx}`}
                onClick={() => navigate('/universities')}
                className="flex items-center gap-3 bg-[#f8fbff] hover:bg-white border border-[#dce8f7] hover:border-[#0b5cad] px-3.5 py-2.5 rounded-xl shrink-0 cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-md group/card select-none"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs overflow-hidden p-1 border"
                  style={{ backgroundColor: uni.bgColor, borderColor: uni.borderColor }}
                >
                  {uni.logo}
                </div>
                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-[#0b2540] group-hover/card:text-[#0b5cad] transition-colors whitespace-nowrap">
                      {uni.name}
                    </span>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0b5cad] border border-blue-200/80 whitespace-nowrap">
                      {uni.accreditation}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium truncate flex items-center gap-1 mt-0.5">
                    <span>{uni.nirf}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-600 truncate">{uni.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR ONLINE UNIVERSITIES - MOVEABLE & DRAGGABLE ROW
          ========================================================================= */}
      <section className="space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 px-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0b2540] tracking-tight leading-snug sm:leading-tight mb-1.5">
              Popular Online Universities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-0">
              Explore India’s premier online universities trusted by thousands of learners.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/universities')}
            className="text-xs sm:text-sm font-bold text-[#0b5cad] hover:text-[#084a8c] hover:underline flex items-center gap-1 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>View All Universities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Container with Left < and Right > Arrow Buttons */}
        <div className="relative flex items-center gap-2">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 flex items-center justify-center cursor-pointer transition-all shadow-sm active:scale-95 shrink-0 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Moveable & Draggable Cards Row - Always moving continuously */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUpOrLeave();
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex items-center gap-3.5 overflow-x-auto py-2.5 flex-1 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {displayCarouselUniversities.map((uni, idx) => (
              <div
                key={`${uni.id}-${idx}`}
                onClick={() => {
                  if (draggedDistance < 6) {
                    navigate(`/universities/${uni.id}`);
                  }
                }}
                className={`w-[275px] sm:w-[295px] h-[255px] p-4 bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.99] shrink-0 select-none ${
                  isDragging ? 'pointer-events-none' : ''
                }`}
              >
                <div>
                  {/* Top Row: Logo, Name, Location & NAAC Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {uni.logo}
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0b5cad] transition-colors truncate leading-snug mb-0.5">
                          {uni.name}
                        </h3>
                        <p className="text-[10px] text-slate-500 flex items-center gap-1 truncate font-medium leading-normal mb-0">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{uni.location}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0b5cad] border border-blue-200/70 whitespace-nowrap shrink-0">
                      {uni.naac}
                    </span>
                  </div>

                  {/* Highlights Spec Box */}
                  <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-medium text-slate-500">NIRF Ranking:</span>
                      <span className="font-bold text-slate-800">{uni.rank}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-medium text-slate-500">Exam Mode:</span>
                      <span className="font-semibold text-slate-700">{uni.examMode}</span>
                    </div>
                  </div>

                  {/* Degree Track Tags */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {uni.tracks.map((track, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50/70 text-[#0b5cad]"
                      >
                        {track}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Fees & View Link */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Starting Fee</span>
                    <span className="text-xs font-bold text-slate-900">{uni.fee}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-600 font-semibold block">{uni.emi}</span>
                    <span className="text-[11px] font-bold text-[#0b5cad] group-hover:underline flex items-center gap-0.5 justify-end">
                      View details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 flex items-center justify-center cursor-pointer transition-all shadow-sm active:scale-95 shrink-0 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>


      {/* =========================================================================
          STUDENT SUCCESS & VIDEO TESTIMONIALS - HORIZONTAL AUTO-SLIDING CAROUSEL
          (Real alumni stories, verified career jumps & video interview popups)
          ========================================================================= */}
      <section className="space-y-4 bg-gradient-to-b from-[#f7faff] to-[#ffffff] p-4 sm:p-6 rounded-[26px] border border-[#d6e5f8] shadow-xs">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#cbe0f8] text-[#0b5cad] text-xs font-semibold shadow-2xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0b5cad]" />
              <span className="uppercase tracking-wider">Student Success &amp; Alumni Stories</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#059669] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                Verified Degree Outcomes
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0b2540] tracking-tight leading-snug sm:leading-tight mb-1.5">
              Real Alumni. Verified Career Growth.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-2xl mb-0">
              Watch video testimonials and interview breakdowns from working professionals who unlocked promotions, pay raises, and MNC transitions with UGC-entitled online degrees.
            </p>
          </div>

          {/* Controls & Metrics Header Right */}
          <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-amber-50/80 border border-amber-200/90 px-3 py-1.5 rounded-xl shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>4.9/5 from 12,500+ Alumni</span>
            </div>

            {/* Left & Right Step Buttons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollTestimonials('left')}
                className="w-9 h-9 rounded-full bg-white border border-[#d6e5f8] hover:border-[#0b5cad] hover:bg-[#f0f6ff] text-slate-700 hover:text-[#0b5cad] flex items-center justify-center cursor-pointer transition-all shadow-2xs active:scale-95"
                aria-label="Scroll left testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials('right')}
                className="w-9 h-9 rounded-full bg-white border border-[#d6e5f8] hover:border-[#0b5cad] hover:bg-[#f0f6ff] text-slate-700 hover:text-[#0b5cad] flex items-center justify-center cursor-pointer transition-all shadow-2xs active:scale-95"
                aria-label="Scroll right testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Auto-Sliding Carousel Row */}
        <div
          ref={testimonialsCarouselRef}
          onMouseEnter={() => setIsTestimonialsHovered(true)}
          onMouseDown={handleTestimonialsMouseDown}
          onMouseMove={handleTestimonialsMouseMove}
          onMouseUp={handleTestimonialsMouseUpOrLeave}
          onMouseLeave={() => {
            setIsTestimonialsHovered(false);
            handleTestimonialsMouseUpOrLeave();
          }}
          onTouchStart={handleTestimonialsTouchStart}
          onTouchMove={handleTestimonialsTouchMove}
          onTouchEnd={handleTestimonialsTouchEnd}
          className={`flex items-stretch gap-4 overflow-x-auto py-2.5 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isTestimonialsDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {displayTestimonials.map((story, sIdx) => (
            <div
              key={`${story.id}-${sIdx}`}
              onClick={() => {
                if (testimonialsDraggedDistance < 6) {
                  setSelectedVideoStory(story);
                  setIsVideoPlaying(true);
                  setVideoProgress(15);
                }
              }}
              className={`w-[310px] sm:w-[340px] shrink-0 bg-white rounded-2xl border border-[#dce8f7] hover:border-[#0b5cad]/60 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group cursor-pointer active:scale-[0.99] select-none ${
                isTestimonialsDragging ? 'pointer-events-none' : ''
              }`}
            >
              <div>
                {/* 16:9 Video Thumbnail Preview Screen */}
                <div className="relative aspect-video w-full bg-[#0b2540] overflow-hidden">
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={`${story.name} video testimonial`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0b2540] via-[#0b5cad] to-[#084a8c] flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <span className="text-white text-xs font-semibold mt-2">{story.universityShort} Alumni</span>
                    </div>
                  )}

                  {/* Dark Glass Overlay with Central Animated Play Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#0b5cad] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0b5cad] group-hover:text-white transition-all duration-200 backdrop-blur-xs">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0b2540]/85 text-white backdrop-blur-xs border border-white/20">
                      {story.universityShort}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/70 text-white backdrop-blur-xs flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 fill-white" />
                      {story.videoDuration}
                    </span>
                  </div>

                  {/* Bottom Career Hike Ribbon */}
                  <div className="absolute bottom-2 inset-x-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-emerald-950/90 text-emerald-300 text-[10.5px] font-bold px-2 py-0.5 rounded-lg border border-emerald-500/30 backdrop-blur-xs">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="truncate max-w-[200px]">{story.growth}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Student Information */}
                <div className="p-4 space-y-2.5">
                  {/* Student Name & Designation */}
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#0b2540] group-hover:text-[#0b5cad] transition-colors truncate">
                        {story.name}
                      </h3>
                      <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium mt-0.5 truncate">
                      <Briefcase className="w-3.5 h-3.5 text-[#0b5cad] shrink-0" />
                      <span className="font-semibold text-slate-800 truncate">{story.role}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500 truncate">{story.company}</span>
                    </div>

                    <div className="text-[11px] text-slate-500 font-normal mt-1 flex items-center justify-between">
                      <span className="truncate">{story.degree}</span>
                      <span className="text-[#0b5cad] font-semibold shrink-0 ml-1">{story.naac}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative pl-3 py-1 border-l-2 border-[#0b5cad]/40 text-xs text-slate-600 italic line-clamp-2 leading-relaxed">
                    <Quote className="w-3 h-3 text-[#0b5cad]/40 absolute -top-1 -left-1" />
                    "{story.quote}"
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-3 bg-[#f8fbff] border-t border-[#edf3fb] flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                  {story.verifiedTag}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideoStory(story);
                    setIsVideoPlaying(true);
                    setVideoProgress(15);
                  }}
                  className="text-xs font-bold text-[#0b5cad] group-hover:text-[#084a8c] flex items-center gap-1 cursor-pointer group-hover:underline"
                >
                  <span>Watch Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TOP COLLEGES BY LOCATION - INTERACTIVE NIRF & REGIONAL DISCOVERY
          (Figma-crafted, realistic product design with authentic campus photos,
           NIRF rank badges, verified fees & placement stats, and clean recommendation card)
          ========================================================================= */}
      <section className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-7 space-y-5 sm:space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#eef5fd] border border-[#cfe1f7] text-[#0b5cad] flex items-center justify-center shrink-0 shadow-2xs">
              <MapPin className="w-5 h-5 text-[#0b5cad]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0b2540] tracking-tight leading-snug sm:leading-tight mb-0">
                  Top Colleges by Location
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  NIRF 2024 Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-0">
                Compare premier universities, cutoffs, tuition fees, and placements across India's top education hubs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <div className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
              Showing <b className="text-[#0b2540]">{filteredLocationColleges.length}</b> institutions
            </div>
          </div>
        </div>

        {/* Location Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LOCATION_CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedLocationCity(city)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                selectedLocationCity === city
                  ? 'bg-[#0b5cad] text-white border border-[#0b5cad] shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Colleges Grid - 3 Rows (up to 8 college cards + 1 preference card = 9 items, exactly 3 rows on 3-col desktop layout; or all if showAllLocationColleges is true) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(showAllLocationColleges ? filteredLocationColleges : filteredLocationColleges.slice(0, 8)).map((college) => {
            const isSaved = savedCollegeNames.has(college.n);

            return (
              <article
                key={college.id}
                className="bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Compact Real Campus Photography Header */}
                  <div className="relative w-full h-[116px] overflow-hidden bg-slate-100">
                    <img
                      src={college.image}
                      alt={college.n}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-black/25 pointer-events-none" />

                    {/* Top Badges: NIRF Ranking & Bookmark */}
                    <div className="absolute top-2 inset-x-2 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-200">
                        <span className="text-amber-500 font-extrabold text-[11px]">★</span>
                        <span>{college.r}</span>
                        {college.nirfYear && (
                          <span className="text-[9.5px] text-slate-500 font-normal border-l border-slate-200 pl-1">
                            {college.nirfYear}
                          </span>
                        )}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleSaveCollege(college.n);
                        }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-xs border transition-all cursor-pointer active:scale-95 ${
                          isSaved
                            ? 'bg-[#0b5cad] border-[#0b5cad] text-white shadow-sm'
                            : 'bg-white/95 hover:bg-white border-slate-200 text-slate-700'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save to shortlist'}
                        aria-label="Save college"
                      >
                        <Bookmark className={`w-3 h-3 ${isSaved ? 'fill-white stroke-white' : 'stroke-current fill-none'}`} />
                      </button>
                    </div>

                    {/* Clean Monogram Crest Logo */}
                    <div
                      className="absolute -bottom-3 left-3 z-10 w-9 h-9 rounded-lg shadow-xs border border-white flex items-center justify-center font-bold text-[11px] text-white select-none ring-2 ring-slate-100"
                      style={{ background: college.g[0] }}
                    >
                      {college.i}
                    </div>

                    {/* Bottom-right Rating & Reviews Badge */}
                    <div className="absolute bottom-1.5 right-2 text-white text-[10px] font-bold bg-slate-900/90 px-1.5 py-0.5 rounded flex items-center gap-1 shadow-xs border border-white/10">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{college.s.toFixed(1)}</span>
                      <span className="text-slate-300 font-normal text-[9px]">({college.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="pt-4 px-3.5 pb-2.5 space-y-2 bg-white">
                    {/* Ownership & Established */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                      <span className="font-semibold text-slate-600 truncate">{college.type}</span>
                      <span className="text-slate-400 shrink-0">{college.established}</span>
                    </div>

                    {/* College Title */}
                    <h3
                      onClick={() => {
                        if (college.universityId) {
                          navigate(`/universities/${college.universityId}`);
                        } else {
                          navigate(`/universities?search=${encodeURIComponent(college.n)}`);
                        }
                      }}
                      className="text-[13.5px] font-bold text-slate-900 hover:text-[#0b5cad] leading-tight cursor-pointer transition-colors line-clamp-1"
                      title={college.n}
                    >
                      {college.n}
                    </h3>

                    {/* City Location & NAAC Accreditation */}
                    <div className="flex items-center gap-1 text-[11.5px] text-slate-600 font-medium truncate">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{college.c}, {college.state}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[#0b5cad] font-semibold shrink-0 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-100/80 text-[10px]">
                        {college.naac}
                      </span>
                    </div>

                    {/* Popular Courses Pills */}
                    <div className="flex flex-wrap items-center gap-1">
                      {college.popularCourses.slice(0, 3).map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                      <span className="text-[9.5px] font-medium text-slate-500 bg-slate-100 px-1 py-0.5 rounded">
                        +{college.co}
                      </span>
                    </div>

                    {/* Structured Placement & Fees Metrics */}
                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-200/80 grid grid-cols-2 gap-2 mt-1">
                      <div>
                        <div className="text-[9.5px] text-slate-500 font-semibold uppercase tracking-wider">Total Tuition</div>
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {college.f}
                        </div>
                      </div>
                      <div>
                        <div className="text-[9.5px] text-slate-500 font-semibold uppercase tracking-wider">Avg Placement</div>
                        <div className="text-xs font-bold text-emerald-700 truncate">
                          {college.avgPackage}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="px-3.5 pb-3 pt-2 border-t border-slate-100 bg-white flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadBrochure(college.n)}
                    className="flex-1 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[11.5px] flex items-center justify-center gap-1 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <Download className="w-3 h-3 text-slate-500" />
                    <span>Brochure</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (college.universityId) {
                        navigate(`/universities/${college.universityId}`);
                      } else {
                        navigate(`/universities?search=${encodeURIComponent(college.n)}`);
                      }
                    }}
                    className="flex-1 h-8 rounded-lg bg-[#0b5cad] hover:bg-[#084a8c] text-white font-semibold text-[11.5px] flex items-center justify-center gap-1 shadow-xs transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            );
          })}

          {/* Clean Compact Recommendation Card (Matching reduced height) */}
          <article className="bg-white rounded-xl border-2 border-dashed border-[#0b5cad]/40 p-4 flex flex-col justify-between gap-3 shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0b5cad] flex items-center justify-center shrink-0 shadow-2xs">
                  <Compass className="w-4 h-4 text-[#0b5cad]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight mb-0.5">
                    Location Preference
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal mb-0">
                    Target university recommendations
                  </p>
                </div>
              </div>

              <p className="text-[11.5px] text-slate-600 leading-relaxed mb-2.5">
                Select your preferred city to prioritize nearby NIRF colleges, course cutoffs, and placements.
              </p>
            </div>

            {/* City Selection Chips */}
            <div className="flex flex-wrap gap-1">
              {LOCATION_CITIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setLocationPreference(c)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    locationPreference === c
                      ? 'bg-[#0b5cad] text-white border-[#0b5cad] shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div>
              <div className="text-[11px] font-semibold text-emerald-700 min-h-[16px] text-center mb-1.5 truncate">
                {locationToastMessage || ''}
              </div>
              <button
                type="button"
                onClick={handleSaveLocationPreference}
                className="w-full h-8.5 rounded-lg bg-[#0b5cad] hover:bg-[#084a8c] text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-[0.98] shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Preference &amp; Filter</span>
              </button>
            </div>
          </article>
        </div>

        {/* View All & Expand / Directory Navigation at the bottom */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            Showing{' '}
            <b className="text-slate-800">
              {showAllLocationColleges
                ? filteredLocationColleges.length
                : Math.min(8, filteredLocationColleges.length)}
            </b>{' '}
            of <b className="text-slate-800">{filteredLocationColleges.length}</b> verified colleges in{' '}
            <span className="font-semibold text-[#0b5cad]">{selectedLocationCity}</span>
          </div>

          <div className="flex items-center gap-2.5">
            {filteredLocationColleges.length > 8 && (
              <button
                type="button"
                onClick={() => setShowAllLocationColleges(!showAllLocationColleges)}
                className="px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
              >
                {showAllLocationColleges ? 'Show Less (3 Rows)' : `View All in ${selectedLocationCity} (${filteredLocationColleges.length})`}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (selectedLocationCity !== 'All India') {
                  navigate(`/universities?location=${encodeURIComponent(selectedLocationCity)}`);
                } else {
                  navigate('/universities');
                }
              }}
              className="px-4 py-2 rounded-xl bg-[#0b5cad] hover:bg-[#084a8c] text-white text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <span>Explore All Universities Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Empty state fallback */}
        {filteredLocationColleges.length === 0 && (
          <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
            <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-800 leading-snug mb-1">No colleges found in this location.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedLocationCity('All India');
                setShowAllLocationColleges(false);
              }}
              className="mt-3 text-xs font-bold text-[#0b5cad] hover:underline cursor-pointer"
            >
              Reset to All India
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          SEARCHABLE & FILTERABLE DEGREE PROGRAMS DIRECTORY
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-3.5 border-b border-slate-100 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0b5cad] shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b2540] tracking-tight leading-snug sm:leading-tight mb-0">
                Explore UGC-Entitled Degree Programs &amp; Accreditations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-0">
              Filter by curriculum track, accreditation level (NAAC A++, NIRF), semester fees, and 0% interest EMI options.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Showing <strong className="text-[#0b2540]">{filteredPrograms.length}</strong> available programs
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#f8fbff] p-3.5 sm:p-4 rounded-2xl border border-[#cfe1f7] shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search input with clear button */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search programs by name, code, specialization (e.g. MBA, Cloud, AI)..."
                value={programSearchQuery}
                onChange={(e) => setProgramSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white border border-[#dce7f5] rounded-xl outline-none focus:border-[#0b5cad] focus:ring-2 focus:ring-[#0b5cad]/15 transition-all font-normal text-slate-900"
              />
              {programSearchQuery && (
                <button
                  type="button"
                  onClick={() => setProgramSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {[
                { id: 'all', label: 'All Degrees' },
                { id: 'pg', label: "Master's (PG)" },
                { id: 'ug', label: "Bachelor's (UG)" },
                { id: 'diploma', label: 'Diploma' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setSelectedProgramLevel(lvl.id as any)}
                  className={`px-3 py-2 text-xs rounded-xl font-semibold transition-all cursor-pointer ${
                    selectedProgramLevel === lvl.id
                      ? 'bg-[#0b5cad] text-white shadow-2xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Tuition Budget Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-blue-100/70 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-500 font-medium text-[11px] mr-1">Tuition Budget:</span>
              {[
                { id: 'all', label: 'All Budgets' },
                { id: 'under120', label: 'Under ₹1.2 Lakh' },
                { id: '120to160', label: '₹1.2L – ₹1.6L' },
                { id: 'above160', label: 'Above ₹1.6 Lakh' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBudgetFilter(b.id as any)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    selectedBudgetFilter === b.id
                      ? 'bg-[#0b2540] text-white shadow-2xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            {(programSearchQuery || selectedProgramLevel !== 'all' || selectedBudgetFilter !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setProgramSearchQuery('');
                  setSelectedProgramLevel('all');
                  setSelectedBudgetFilter('all');
                }}
                className="text-[11px] text-[#0b5cad] font-semibold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Programs Listing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrograms.map((course) => {
            const semFeeEst = `₹${course.perSemFee.toLocaleString('en-IN')}`;
            const emiEst = `₹${Math.round(course.totalFee / 24).toLocaleString('en-IN')}/mo`;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#0b5cad]/60 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0b5cad] border border-blue-200 uppercase tracking-wide">
                      {course.level}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0b5cad] transition-colors leading-snug mb-1">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 mb-0">
                      {course.shortDescription}
                    </p>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Accreditation:</span>
                      <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.2 rounded border border-amber-200 text-[11px]">
                        NAAC A++ • UGC-DEB Entitled
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Exams:</span>
                      <span className="text-slate-800 font-semibold text-[11px]">
                        100% Home AI-Proctored
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Placement:</span>
                      <span className="text-emerald-700 font-bold text-[11px]">
                        {course.careerProspects.highestPackage} Highest CTC
                      </span>
                    </div>
                  </div>

                  {course.specializations && course.specializations.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {course.specializations.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-blue-50/60 text-[#0b5cad] rounded text-[10px] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {course.specializations.length > 3 && (
                        <span className="text-[10px] text-slate-400 self-center">
                          +{course.specializations.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Semester Fee</span>
                      <span className="text-base font-bold text-slate-900">{semFeeEst}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block uppercase">0% Interest EMI</span>
                      <span className="text-xs font-bold text-emerald-700">{emiEst}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onOpenApply(course.id)}
                      className="py-2 bg-[#0b5cad] hover:bg-[#084a8c] text-white text-xs font-bold rounded-xl transition-all shadow-2xs text-center cursor-pointer active:scale-95"
                    >
                      Apply Now
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/courses')}
                      className="py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors text-center cursor-pointer"
                    >
                      View Syllabus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION COMPONENT
          Comprehensive answers on Admissions, Fees & 0% EMI, Eligibility, Exams & Degree Validity
          Exact 22.5px section gap maintained with parent space-y-[22.5px]
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-3.5 border-b border-slate-100 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0b5cad] shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b2540] tracking-tight leading-snug sm:leading-tight mb-0">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-0">
              Official guidance on UGC-DEB entitlements, fee structures, 0% EMI financing, and admissions eligibility.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {[
              { id: 'all', label: 'All Queries' },
              { id: 'admissions', label: 'Admissions & Eligibility' },
              { id: 'fees', label: 'Fees & 0% EMI' },
              { id: 'exams', label: 'Exams & Mode' },
              { id: 'validity', label: 'Degree Validity' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setFaqCategoryFilter(cat.id);
                  setOpenFaqIndex(0);
                }}
                className={`px-3 py-1.5 text-xs rounded-xl font-semibold transition-all cursor-pointer ${
                  faqCategoryFilter === cat.id
                    ? 'bg-[#0b5cad] text-white shadow-2xs'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Items List */}
        <div className="space-y-3">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#cfe1f7] bg-[#f8fbff] shadow-2xs'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                      isOpen
                        ? 'bg-[#0b5cad] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      Q{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0b2540] leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0b5cad]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-blue-100/60 text-xs sm:text-[13px] text-slate-600 leading-relaxed animate-in fade-in duration-150">
                    <p className="mb-2 font-normal">{item.a}</p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-[#0b5cad] font-medium">
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/80 text-[10px] font-semibold">
                        {item.categoryLabel}
                      </span>
                      <span>• Verified by Online Siksha Academic Advisory Desk</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#0b2540] to-[#0b5cad] text-white flex flex-col sm:flex-row items-center justify-between gap-3.5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold leading-tight">
                Have specific admission or eligibility questions?
              </div>
              <div className="text-[11px] text-sky-100/90 leading-tight mt-0.5 font-normal">
                Speak directly with an accredited university counselor for free personalized evaluation.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenApply()}
              className="flex-1 sm:flex-none px-4 py-2 bg-white text-[#0b2540] hover:bg-sky-50 text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer active:scale-95 text-center"
            >
              Get Free Counseling
            </button>
            <button
              type="button"
              onClick={onOpenHelpDesk}
              className="flex-1 sm:flex-none px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer text-center"
            >
              Help Desk
            </button>
          </div>
        </div>
      </section>
      </div>

      {/* =========================================================================
          INTERACTIVE STUDENT VIDEO TESTIMONIAL & SUCCESS STORY MODAL
          ========================================================================= */}
      {selectedVideoStory && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedVideoStory(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0b2540] flex items-center gap-2">
                    <span>{selectedVideoStory.name}’s Alumni Journey</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0b5cad] border border-blue-200 hidden sm:inline-block">
                      {selectedVideoStory.universityShort}
                    </span>
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {selectedVideoStory.degree} · Verified UGC Entitled Outcome
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVideoStory(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content: Video Player Left + Credentials Right */}
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              {/* Video Player Column */}
              <div className="lg:col-span-7 space-y-3">
                {/* Simulated Interactive Video Screen */}
                <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden shadow-inner group">
                  {selectedVideoStory.image ? (
                    <img
                      src={selectedVideoStory.image}
                      alt={selectedVideoStory.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0b2540] via-[#0b5cad] to-[#084a8c] flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto flex items-center justify-center text-2xl font-bold">
                          {selectedVideoStory.name.charAt(0)}
                        </div>
                        <div className="text-sm font-semibold mt-2">{selectedVideoStory.universityShort} Alumni Story</div>
                      </div>
                    </div>
                  )}

                  {/* Watermark in top-left */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 text-white text-[11px] font-semibold backdrop-blur-xs border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Online Siksha Verified</span>
                  </div>

                  {/* Play/Pause Center Indicator */}
                  <div
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/25 hover:bg-black/35 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/95 text-[#0b5cad] flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      {isVideoPlaying ? (
                        <Pause className="w-6 h-6 fill-current text-[#0b5cad]" />
                      ) : (
                        <Play className="w-6 h-6 ml-1 fill-current text-[#0b5cad]" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Video Controls Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent space-y-2">
                    {/* Interactive Scrubber Bar */}
                    <div
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = Math.round((clickX / rect.width) * 100);
                        setVideoProgress(Math.max(0, Math.min(100, pct)));
                      }}
                      className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative overflow-hidden"
                    >
                      <div
                        className="h-full bg-[#0b5cad] rounded-full transition-all duration-150"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                          className="hover:text-blue-300 transition-colors"
                        >
                          {isVideoPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsMuted(!isMuted)}
                          className="hover:text-blue-300 transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <span className="text-[11px] text-white/80 font-mono">
                          01:{String(Math.floor((videoProgress / 100) * 45)).padStart(2, '0')} / {selectedVideoStory.videoDuration}
                        </span>
                      </div>

                      <span className="text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                        1080p HD
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Chapters Breakdown */}
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                    Key Interview Timestamps:
                  </span>
                  <div className="space-y-1.5">
                    {selectedVideoStory.topics.map((t, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setVideoProgress(idx === 0 ? 15 : idx === 1 ? 50 : 85);
                          setIsVideoPlaying(true);
                        }}
                        className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer text-xs group"
                      >
                        <span className="font-mono text-[#0b5cad] font-bold text-[11px] bg-blue-50 px-1.5 py-0.5 rounded">
                          {t.time}
                        </span>
                        <span className="text-slate-700 group-hover:text-[#0b5cad] transition-colors flex-1 truncate">
                          {t.title}
                        </span>
                        <Play className="w-3 h-3 text-slate-400 group-hover:text-[#0b5cad] shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Credentials & Story Column Right */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Career Jump Highlight Box */}
                  <div className="p-3.5 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200/80 space-y-1.5">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Career Transformation
                    </span>
                    <div className="text-sm font-extrabold text-[#0b2540]">
                      {selectedVideoStory.growth}
                    </div>
                    <div className="text-xs text-slate-600 flex items-center gap-1.5 pt-1">
                      <span className="line-through text-slate-400">{selectedVideoStory.previousRole}</span>
                      <span>&rarr;</span>
                      <span className="font-bold text-slate-900">{selectedVideoStory.role}</span>
                    </div>
                  </div>

                  {/* University & Degree Badge */}
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200/90 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">University:</span>
                      <span className="font-bold text-[#0b2540]">{selectedVideoStory.university}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Degree:</span>
                      <span className="font-semibold text-slate-800">{selectedVideoStory.degree}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Accreditation:</span>
                      <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {selectedVideoStory.naac} • UGC-DEB Entitled
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Verification:</span>
                      <span className="font-bold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {selectedVideoStory.verifiedTag}
                      </span>
                    </div>
                  </div>

                  {/* Full Testimonial Quote */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 leading-relaxed italic relative">
                    <Quote className="w-4 h-4 text-[#0b5cad]/40 mb-1" />
                    "{selectedVideoStory.quote}"
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedVideoStory(null);
                      onOpenApply(selectedVideoStory.courseId);
                    }}
                    className="w-full py-2.5 bg-[#0b5cad] hover:bg-[#084a8c] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Apply for {selectedVideoStory.universityShort} Admissions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedVideoStory(null);
                        navigate('/universities');
                      }}
                      className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Compare Universities
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedVideoStory(null)}
                      className="py-2 bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium rounded-xl border border-slate-200 transition-colors cursor-pointer text-center"
                    >
                      Close Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
