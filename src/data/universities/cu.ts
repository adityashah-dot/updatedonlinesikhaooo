import { UniversityData } from '../../types/university';

export const CU_UNIVERSITY_DATA: UniversityData = {
  id: 'cu-online',
  slug: 'cu-online',
  name: 'Chandigarh University (CU Online)',
  shortName: 'CU Online',
  tagline: 'QS World Ranked - NAAC A+ Accredited Flexible Online Degrees',
  established: '2012',
  location: 'Mohali, Punjab',
  type: 'Private UGC-DEB Entitled',
  officialWebsite: 'onlinecu.in',
  rating: '4.5',
  reviewsCount: 1180,
  nirfRanking: '32',
  naacGrade: 'NAAC A+ Accredited',
  approvals: ['UGC-DEB', 'AICTE', 'NIRF #32', 'QS World Ranked', 'AIU', 'WES'],
  verifiedYear: '2026',
  logoImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_logo.webp',
  backgroundImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_image.webp',
  brochureUrl: 'https://images.degreefyd.com//cu-online-brochure.pdf',
  quickStats: {
    feeRange: '90,000 - 1,50,000',
    duration: '2 - 3 Years',
    mode: '100% Home Proctored Online',
    placementRate: '88%',
    highestPackage: '28 LPA',
    avgPackage: '4.8 LPA',
    emiStarting: '3,750/mo'
  },
  overview: {
    introParagraphs: [
      'Chandigarh University (CU Online) is recognized among India s youngest and fastest-growing institutions to achieve NAAC A+ accreditation and premier positions in the QS World University Rankings. CU Online provides flexible, industry-oriented undergraduate and postgraduate programs.',
      'The university leverages the world-renowned Blackboard LMS and Harvard ManageMentor content to deliver experiential learning, live weekend sessions, and industry capstone projects.',
      'All online degrees are fully entitled by UGC-DEB, AICTE approved, and valid across all central/state government examinations and international credential evaluators.'
    ],
    highlightsTable: [
      { label: 'University Name', value: 'Chandigarh University', category: 'Institution' },
      { label: 'Online Division', value: 'CU Online / Center for Distance and Online Learning', category: 'Institution' },
      { label: 'Establishment Year', value: '2012', category: 'Institution' },
      { label: 'Location', value: 'NH-95, Chandigarh-Ludhiana Highway, Mohali, Punjab', category: 'Institution' },
      { label: 'Accreditation', value: 'NAAC A+ Grade', category: 'Accreditations' },
      { label: 'NIRF Ranking', value: 'Ranked #32 Overall in India', category: 'Accreditations' },
      { label: 'Global Standing', value: 'QS World University Ranked', category: 'Accreditations' },
      { label: 'LMS Platform', value: 'Blackboard Ultra & CU Learn Mobile App', category: 'Technology' },
      { label: 'Examination Mode', value: 'AI-Proctored Web Examinations', category: 'Evaluation' },
      { label: 'Official Website', value: 'onlinecu.in', category: 'Info' }
    ],
    highlightsSummary: 'CU Online is entitled by the UGC to provide online degree courses in Management, Information Technology, Commerce, and Humanities.',
    latestNews: {
      title: 'CU Online Admissions 2026 Active with Early Bird Grants',
      description: 'Admissions open for MBA, MCA, BCA, BBA, and M.Com with up to 30% scholarship grants for eligible students.',
      date: 'Updated for 2026 Intake'
    }
  },
  courses: [
    {
      id: 'cu-mba',
      name: 'Online Master of Business Administration (MBA)',
      code: 'MBA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '37,500',
      totalFee: '1,50,000',
      specializationsCount: 6,
      specializations: ['FinTech', 'Business Analytics', 'Digital Marketing', 'HR Management', 'Banking & Financial Markets', 'Logistics & Supply Chain'],
      eligibility: 'Bachelor s degree in any discipline with min 50% marks (45% for reserved category).',
      description: 'Industry-integrated program featuring Harvard Business case studies, Bloomberg data analysis modules, and practical business simulations.',
      careerProspects: {
        avgPackage: '5.5 - 7.2 LPA',
        highestPackage: '28 LPA',
        roles: ['Financial Analyst', 'Marketing Strategist', 'Operations Manager', 'Business Consultant']
      }
    },
    {
      id: 'cu-mca',
      name: 'Online Master of Computer Applications (MCA)',
      code: 'MCA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '33,750',
      totalFee: '1,35,000',
      specializationsCount: 4,
      specializations: ['Cloud Computing', 'Data Science', 'Artificial Intelligence', 'Full-Stack Web Development'],
      eligibility: 'BCA / B.Sc Computer Science / B.Tech or Bachelor degree with Mathematics at 10+2 level.',
      description: 'Hands-on practical curriculum designed with top cloud partners and IT tech giants for high-demand software engineering careers.',
      careerProspects: {
        avgPackage: '5.0 - 6.8 LPA',
        highestPackage: '24 LPA',
        roles: ['Cloud Architect', 'Data Scientist', 'Senior Software Engineer']
      }
    },
    {
      id: 'cu-bba',
      name: 'Online Bachelor of Business Administration (BBA)',
      code: 'BBA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '21,000',
      totalFee: '1,26,000',
      specializationsCount: 4,
      specializations: ['Digital Marketing', 'Banking & Insurance', 'Human Resources', 'General Management'],
      eligibility: 'Class 10+2 from a recognized educational board in any stream with minimum 50% marks.',
      description: 'Undergraduate business program covering leadership, quantitative analysis, finance, and marketing foundations.',
      careerProspects: {
        avgPackage: '3.6 - 4.5 LPA',
        highestPackage: '9 LPA',
        roles: ['Associate Consultant', 'Marketing Executive', 'Operations Analyst']
      }
    },
    {
      id: 'cu-bca',
      name: 'Online Bachelor of Computer Applications (BCA)',
      code: 'BCA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '22,500',
      totalFee: '1,35,000',
      specializationsCount: 3,
      specializations: ['Software Engineering', 'Data Analytics', 'Web Technologies'],
      eligibility: 'Pass 10+2 with Mathematics/Computer Science/Information Practice with min 50% aggregate.',
      description: 'Industry-driven software application program with practical programming exercises, database labs, and full-stack projects.',
      careerProspects: {
        avgPackage: '3.8 - 4.8 LPA',
        highestPackage: '11 LPA',
        roles: ['Junior Developer', 'Frontend Engineer', 'Database Administrator']
      }
    }
  ],
  admissions: {
    intro: 'CU Online facilitates an effortless 4-step digital admission process with live guidance from dedicated admissions advisors.',
    steps: [
      { stepNumber: 1, title: 'Student Profile Registration', description: 'Enter basic contact and academic profile details on the CU Online admission portal.' },
      { stepNumber: 2, title: 'Document Verification', description: 'Upload digitized mark sheets, identity verification documents, and photographs.' },
      { stepNumber: 3, title: 'Fee Payment & Grant Application', description: 'Pay semester fees with zero-cost EMI or apply for merit scholarships.' },
      { stepNumber: 4, title: 'LMS Access & Onboarding', description: 'Receive Blackboard LMS login credentials and welcome pack.' }
    ],
    eligibilityMatrix: [
      { course: 'Online MBA', eligibility: 'Graduation in any stream with min 50% marks', duration: '2 Years (4 Sems)', feeSem: '37,500', totalFee: '1,50,000' },
      { course: 'Online MCA', eligibility: 'BCA/B.Sc CS or Grad with 10+2 Maths', duration: '2 Years (4 Sems)', feeSem: '33,750', totalFee: '1,35,000' },
      { course: 'Online BBA', eligibility: '10+2 in any stream with min 50% marks', duration: '3 Years (6 Sems)', feeSem: '21,000', totalFee: '1,26,000' },
      { course: 'Online BCA', eligibility: '10+2 with Maths or Computer Science', duration: '3 Years (6 Sems)', feeSem: '22,500', totalFee: '1,35,000' }
    ],
    requiredDocuments: [
      '10th and 12th Standard Mark Sheets and Passing Certificates',
      'Undergraduate Degree Certificate (for PG Applicants)',
      'Government Photo ID (Aadhaar Card, Passport, or Voter ID)',
      'Passport Size Photographs',
      'DEB ID for UGC-DEB Registration'
    ]
  },
  feesAndFinancing: {
    intro: 'Chandigarh University Online offers low-cost semester tuition with interest-free EMI plans starting at 3,750 per month.',
    emiOptionsDescription: 'Zero-cost EMI is available through leading NBFCs with 0% interest and easy documentation.',
    scholarships: [
      { title: 'Early Bird Scholarship', benefit: 'Up to 25% Tuition Waiver', description: 'Granted to candidates enrolling during early intake windows.', tag: 'Early Bird' },
      { title: 'Armed Forces Concession', benefit: '20% Fee Concession', description: 'Honoring active defense personnel and veterans.', tag: 'Defense' },
      { title: 'Merit Academic Grant', benefit: 'Up to 30% Waiver', description: 'For students scoring above 85% in previous qualifying examinations.', tag: 'Academic Merit' }
    ]
  },
  placements: {
    intro: 'CU Online students receive full corporate placement assistance with access to more than 300+ recruiters visiting Chandigarh University placement drives.',
    metrics: [
      { label: 'Highest Package', value: '28 LPA', note: 'Offered to online PG student' },
      { label: 'Placement Rate', value: '88%', note: 'Across registered batch' },
      { label: 'Hiring Corporates', value: '300+', note: 'National and global enterprises' },
      { label: 'Average Package', value: '4.8 LPA', note: 'Consistent median compensation' }
    ],
    supportServices: [
      'Dedicated Corporate Resource Center (CRC) career guidance',
      'Technical interview workshops and mock coding rounds',
      'Virtual placement job drives with top MNCs',
      'Alumni networking masterclasses'
    ],
    recruiters: [
      { name: 'Amazon' },
      { name: 'TCS' },
      { name: 'Cognizant' },
      { name: 'Wipro' },
      { name: 'Infosys' },
      { name: 'Deloitte' }
    ]
  },
  rankingsAndAccreditations: {
    intro: 'Chandigarh University is among India s top recognized private universities with prestigious international rankings.',
    table: [
      { authority: 'University Grants Commission (UGC-DEB)', status: 'Entitled Online University' },
      { authority: 'NAAC Accreditation', status: 'A+ Grade (3.28 CGPA)' },
      { authority: 'QS World University Rankings', status: 'Asia Top Ranked University' },
      { authority: 'NIRF Ranking', status: 'Ranked #32 Overall in India' },
      { authority: 'AICTE Approval', status: 'Approved for Technical & Management Degrees' }
    ]
  },
  campusAndLms: {
    intro: 'Blackboard Learn LMS delivers a high-speed, interactive digital learning experience with live faculty discussions and digital assessments.',
    lmsName: 'Blackboard Ultra Learning Suite',
    lmsFeatures: [
      'Live Weekend Faculty Lectures & Interactive Whiteboard Tools',
      'AI-Proctored Secure Online Examinations from Home',
      'Comprehensive E-Library with International Publications',
      'Real-time Progress Tracker & Mobile App Push Notifications'
    ],
    examPattern: [
      { title: 'Internal Continuous Assessment (30%)', description: 'Quizzes, assignments, and discussion contributions.' },
      { title: 'End-Semester Online Proctored Exam (70%)', description: 'Two-hour online exams conducted securely from home.' }
    ]
  },
  importantDates: {
    items: [
      { event: 'Online Application Window', date: 'Active Intake 2026', status: 'Active', mode: 'Digital Form' },
      { event: 'Document Verification', date: 'Rolling within 48 Hours', status: 'Rolling', mode: 'Online Desk' },
      { event: 'Batch Induction', date: 'Upcoming Semester Start', status: 'Upcoming', mode: 'Online LMS' }
    ]
  },
  faqs: [
    { question: 'Is CU Online degree equivalent to regular degrees?', answer: 'Yes, as per UGC-DEB regulations, online degrees from entitled universities carry identical legal validity to on-campus degrees.', category: 'Validity' },
    { question: 'Can I pay fees in monthly EMI?', answer: 'Yes, CU Online has partnerships with leading financial partners to provide 0% interest monthly EMI plans.', category: 'Fees' },
    { question: 'How are examinations conducted?', answer: 'Examinations are 100% online through AI proctoring with web cameras and screen monitoring from home.', category: 'Exams' }
  ],
  relatedUniversityIds: ['lpu-online', 'amity-online', 'manipal-online', 'jain-online', 'upes-online']
};
