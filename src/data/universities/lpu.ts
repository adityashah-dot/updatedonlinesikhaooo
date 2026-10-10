import { UniversityData } from '../../types/university';
import { DEGREEFYD_LPU_API } from '../apiData';
import { COURSES_DATA } from '../coursesData';

export const LPU_UNIVERSITY_DATA: UniversityData = {
  id: 'lpu-online',
  slug: 'lpu-online',
  name: 'Lovely Professional University (LPU Online)',
  shortName: 'LPU Online',
  tagline: 'UGC-Entitled & NAAC A++ Accredited Premier Online Degree Programs',
  established: '2005',
  location: 'Phagwara, Punjab',
  type: 'Private UGC-DEB Entitled',
  officialWebsite: 'lpuonline.com',
  rating: '4.3',
  reviewsCount: 1420,
  nirfRanking: '31',
  naacGrade: 'NAAC A++ (Score 3.68/4)',
  approvals: ['UGC-DEB', 'AICTE', 'NAAC A++', 'NIRF #31', 'AIU', 'WES (USA/Canada)'],
  verifiedYear: '2026',
  logoImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_logo.webp',
  backgroundImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_image.webp',
  brochureUrl: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
  sampleDegreeImage: 'https://images.DegreeFYD.com/colleges/7190/sampleDegree/lovely_professional_university_online_course_sampledegree.webp',
  quickStats: {
    feeRange: '46,000 - 1,86,000',
    duration: '1 - 3 Years',
    mode: '100% Online - Semester-Based',
    placementRate: '90%',
    highestPackage: '54.75 LPA',
    avgPackage: '4.5 LPA',
    emiStarting: '3,833/mo'
  },
  overview: {
    introParagraphs: [
      DEGREEFYD_LPU_API.hero.description,
      DEGREEFYD_LPU_API.hero.heroSub,
      'LPU Online provides equal status to its online degree credentials as compared with traditional full-time degrees. The curriculum is continuously revised in alignment with National Education Policy (NEP 2020) frameworks.'
    ],
    highlightsTable: DEGREEFYD_LPU_API.highlightsTable.map(h => ({
      label: h.label,
      value: h.value,
      category: h.category as any
    })),
    highlightsSummary: DEGREEFYD_LPU_API.highlightsIntro,
    latestNews: {
      title: DEGREEFYD_LPU_API.latestNews.title,
      description: DEGREEFYD_LPU_API.latestNews.description,
      date: DEGREEFYD_LPU_API.latestNews.date
    }
  },
  courses: COURSES_DATA.map(c => ({
    id: c.id,
    name: c.name,
    code: c.code,
    level: c.category === 'ug' ? 'UG' : c.category === 'pg' ? 'PG' : 'Diploma',
    duration: c.duration,
    feePerSemester: `${c.perSemFee.toLocaleString('en-IN')}`,
    totalFee: `${c.totalFee.toLocaleString('en-IN')}`,
    specializationsCount: c.specializations?.length || 1,
    specializations: c.specializations || ['General Track'],
    eligibility: c.eligibility,
    description: c.shortDescription,
    careerProspects: {
      avgPackage: c.careerProspects.avgPackage,
      highestPackage: c.careerProspects.highestPackage,
      roles: c.careerProspects.roles
    },
    syllabus: c.syllabus?.map(s => ({
      semester: s.semester,
      subjects: s.subjects
    }))
  })),
  admissions: {
    intro: DEGREEFYD_LPU_API.admissionProcess.intro,
    steps: DEGREEFYD_LPU_API.admissionProcess.steps.map(s => ({
      stepNumber: s.stepNum,
      title: s.title,
      description: s.description
    })),
    eligibilityMatrix: DEGREEFYD_LPU_API.eligibilityMatrix.map(e => ({
      course: e.course,
      eligibility: e.eligibility,
      duration: e.duration,
      feeSem: e.feeSem,
      totalFee: e.totalFee,
      selection: e.selection
    })),
    requiredDocuments: [
      'Govt Photo ID Proof (Aadhaar Card, Passport, or Voter ID)',
      'Class 10th Marksheet and Passing Certificate (Date of Birth proof)',
      'Class 12th Marksheet and Certificate for UG & PG applications',
      'Graduation Marksheets & Degree/Provisional Certificate for PG programs',
      'Recent passport-size colored photographs',
      'DEB ID generated via UGC Distance Education Bureau portal'
    ],
    selectionProcess: 'Admissions are conducted on rolling merit basis upon digital document verification through the university admission portal.'
  },
  feesAndFinancing: {
    intro: 'Lovely Professional University Online maintains transparent, standardized semester fee structures. Students can opt for semester-wise payments or zero-cost monthly installments with partner financial institutions.',
    emiOptionsDescription: 'No-cost EMI financing is available across 6, 9, and 12-month tenure options with 0% processing fee via select banking partners.',
    scholarships: DEGREEFYD_LPU_API.scholarships.items.map(s => ({
      title: s.title,
      benefit: s.tag,
      description: s.details,
      tag: s.tag
    })),
    scholarshipsNote: DEGREEFYD_LPU_API.scholarships.note
  },
  placements: {
    intro: DEGREEFYD_LPU_API.placements.intro,
    note: DEGREEFYD_LPU_API.placements.note,
    metrics: [
      { label: 'Highest Package', value: DEGREEFYD_LPU_API.placements.stats.highestPackage, note: 'Offered by global tech firm' },
      { label: 'Placement Assistance', value: DEGREEFYD_LPU_API.placements.stats.placementRate, note: 'Comprehensive career services' },
      { label: 'Average Salary', value: DEGREEFYD_LPU_API.placements.stats.avgPackage, note: 'Across UG & PG programs' },
      { label: 'Hiring Corporates', value: DEGREEFYD_LPU_API.placements.stats.hiringPartners, note: 'Top national & MNC employers' }
    ],
    supportServices: [
      'One-on-one Career Mentorship & Profile Evaluation',
      'AI Resume Analyzer & Professional Portfolio Building',
      'Live Mock Interviews & Soft-Skills Masterclasses',
      'Exclusive Access to LPU Virtual Placement Job Fairs',
      'Networking with Alumni Working Across Fortune 500 Companies'
    ],
    recruiters: [
      { name: 'Amazon' },
      { name: 'TCS' },
      { name: 'Deloitte' },
      { name: 'Cognizant' },
      { name: 'Infosys' },
      { name: 'Wipro' },
      { name: 'Capgemini' },
      { name: 'Tech Mahindra' },
      { name: 'Times Internet' }
    ]
  },
  rankingsAndAccreditations: {
    intro: DEGREEFYD_LPU_API.rankingsAndAccreditations.intro,
    table: DEGREEFYD_LPU_API.rankingsAndAccreditations.table.map(r => ({
      authority: r.authority,
      status: r.status
    }))
  },
  campusAndLms: {
    intro: 'LPU e-Connect is an intuitive learning management system offering seamless access to high-definition video lectures, e-books, self-assessment modules, and interactive doubt sessions.',
    lmsName: 'LPU e-Connect LMS',
    lmsFeatures: [
      'Live Weekend Interactive Masterclasses with Faculty & Industry Leaders',
      '24/7 Access to Recorded Video Lectures and E-Library Resources',
      'Integrated Discussion Forums & Automated Assignment Submissions',
      'Proctored Examination Mock Runs & Performance Analytics Dashboard',
      'Android & iOS Mobile Application with Offline Download Facility'
    ],
    examPattern: DEGREEFYD_LPU_API.examinationPattern.steps.map(s => ({
      title: s.title,
      description: s.description
    })),
    campusDetails: {
      location: DEGREEFYD_LPU_API.campus.description,
      connectivity: DEGREEFYD_LPU_API.campus.travelTable.map(t => ({
        mode: t.mode,
        detail: t.detail
      }))
    },
    sampleDegree: {
      title: DEGREEFYD_LPU_API.sampleDegree.title,
      description: DEGREEFYD_LPU_API.sampleDegree.description,
      imageUrl: DEGREEFYD_LPU_API.sampleDegree.imageUrl
    }
  },
  importantDates: {
    note: DEGREEFYD_LPU_API.importantDatesNote,
    items: DEGREEFYD_LPU_API.importantDates.map(d => ({
      event: d.event,
      date: d.date,
      status: d.status as any,
      mode: d.mode
    }))
  },
  faqs: DEGREEFYD_LPU_API.faqs.map(f => ({
    question: f.question,
    answer: f.answer,
    category: 'General'
  })),
  relatedUniversityIds: ['amity-online', 'cu-online', 'manipal-online', 'jain-online', 'upes-online']
};
