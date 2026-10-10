import { UniversityData } from '../../types/university';

export const JAIN_UNIVERSITY_DATA: UniversityData = {
  id: 'jain-online',
  slug: 'jain-online',
  name: 'Jain (Deemed-to-be) University Online',
  shortName: 'Jain Online',
  tagline: 'Silicon Valley Hub Faculty - NAAC A++ (3.71 CGPA) - 60+ Modern Electives',
  established: '1990',
  location: 'Bangalore, Karnataka',
  type: 'Deemed-to-be University UGC-DEB Entitled',
  officialWebsite: 'onlinejain.com',
  rating: '4.6',
  reviewsCount: 960,
  nirfRanking: '68',
  naacGrade: 'NAAC A++ (3.71 CGPA)',
  approvals: ['UGC-DEB', 'AICTE', 'NAAC A++', 'NIRF #68', 'AIU', 'LinkedIn Learning Bundled'],
  verifiedYear: '2026',
  logoImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_logo.webp',
  backgroundImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_image.webp',
  brochureUrl: 'https://images.degreefyd.com//jain-online-brochure.pdf',
  quickStats: {
    feeRange: '1,00,000 - 1,60,000',
    duration: '2 - 3 Years',
    mode: '100% Home Proctored Online',
    placementRate: '91%',
    highestPackage: '22 LPA',
    avgPackage: '6.8 LPA',
    emiStarting: '6,250/mo'
  },
  overview: {
    introParagraphs: [
      'Jain (Deemed-to-be) University, situated in Bangalore - India s Silicon Valley - delivers cutting-edge online degree programs designed in consultation with tech titans and multinational enterprises.',
      'Accredited with an exceptional NAAC A++ grade (3.71 CGPA), Jain Online offers over 60+ future-ready specializations in Artificial Intelligence, FinTech, Digital Business, Cloud Computing, and Cyber Security.',
      'All programs include bundled LinkedIn Learning certifications, personalized career mentorship, and live weekend sessions led by industry practitioners and global academicians.'
    ],
    highlightsTable: [
      { label: 'University Name', value: 'Jain (Deemed-to-be) University', category: 'Institution' },
      { label: 'Campus Location', value: 'Bangalore, Karnataka', category: 'Institution' },
      { label: 'Accreditation', value: 'NAAC A++ (3.71 CGPA)', category: 'Accreditations' },
      { label: 'NIRF Ranking', value: 'Ranked Top 70 in India', category: 'Accreditations' },
      { label: 'Corporate Tie-Ups', value: '2,000+ Hiring Partners', category: 'Technology' },
      { label: 'LMS Platform', value: 'Jain Virtual Learning Environment (VLE)', category: 'Technology' },
      { label: 'Examination Mode', value: 'Remotely AI-Proctored', category: 'Evaluation' },
      { label: 'Official Portal', value: 'onlinejain.com', category: 'Info' }
    ],
    highlightsSummary: 'Jain Online is fully entitled by UGC-DEB to award online degrees with identical legal standing to regular full-time degrees.',
    latestNews: {
      title: 'Jain Online 2026 Admission Live with Free LinkedIn Learning',
      description: 'Enrolled students receive complimentary unlimited access to LinkedIn Learning with verified badges.',
      date: 'Updated for 2026 Academic Batch'
    }
  },
  courses: [
    {
      id: 'jain-mba',
      name: 'Online Master of Business Administration (MBA)',
      code: 'MBA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '37,500 - 40,000',
      totalFee: '1,50,000 - 1,60,000',
      specializationsCount: 15,
      specializations: ['Digital Business', 'FinTech', 'Data Science & Analytics', 'Strategic HRM', 'Logistics & Supply Chain', 'Banking & Finance'],
      eligibility: 'Bachelor s degree in any discipline with min 50% aggregate marks from a recognized university.',
      description: 'Modern executive MBA covering digital transformation, startup economics, analytics, and global corporate strategies.',
      careerProspects: {
        avgPackage: '6.8 - 8.5 LPA',
        highestPackage: '22 LPA',
        roles: ['Product Strategist', 'FinTech Specialist', 'Operations Manager', 'Business Consultant']
      }
    },
    {
      id: 'jain-mca',
      name: 'Online Master of Computer Applications (MCA)',
      code: 'MCA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '35,000',
      totalFee: '1,40,000',
      specializationsCount: 5,
      specializations: ['Cyber Security', 'Cloud Computing', 'AI & Machine Learning', 'Data Analytics'],
      eligibility: 'BCA / B.Sc (CS/IT) or Graduation with 10+2 Mathematics.',
      description: 'Hands-on software architecture, cloud platforms, and algorithmic problem solving designed for Bangalore tech companies.',
      careerProspects: {
        avgPackage: '6.0 - 7.8 LPA',
        highestPackage: '19 LPA',
        roles: ['Cyber Security Analyst', 'Cloud Engineer', 'Full-Stack Developer']
      }
    },
    {
      id: 'jain-bba',
      name: 'Online Bachelor of Business Administration (BBA)',
      code: 'BBA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '20,000',
      totalFee: '1,20,000',
      specializationsCount: 4,
      specializations: ['Digital Business', 'Entrepreneurship', 'Marketing', 'Finance'],
      eligibility: 'Pass 10+2 in any stream from a recognized educational board.',
      description: 'Hands-on undergraduate business degree with practical projects and Bangalore startup immersion cases.',
      careerProspects: {
        avgPackage: '4.0 - 4.8 LPA',
        highestPackage: '9 LPA',
        roles: ['Junior Strategist', 'Marketing Associate', 'Business Development Executive']
      }
    },
    {
      id: 'jain-bcom',
      name: 'Online Bachelor of Commerce (B.Com)',
      code: 'B.Com',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '18,333',
      totalFee: '1,10,000',
      specializationsCount: 3,
      specializations: ['Corporate Accounting', 'Investment Banking', 'Taxation'],
      eligibility: 'Pass 10+2 from a recognized board in Commerce or relevant stream.',
      description: 'Rigorous foundation in accounting, international trade, tax systems, and corporate compliance.',
      careerProspects: {
        avgPackage: '3.8 - 4.5 LPA',
        highestPackage: '8 LPA',
        roles: ['Financial Analyst', 'Accountant', 'Audit Assistant']
      }
    }
  ],
  admissions: {
    intro: 'Jain Online follows a quick, transparent digital application and screening process.',
    steps: [
      { stepNumber: 1, title: 'Online Form Filling', description: 'Register with academic and personal details on the Jain Online admissions portal.' },
      { stepNumber: 2, title: 'Document Upload & Verification', description: 'Upload digitized marksheets and identification proof.' },
      { stepNumber: 3, title: 'Admission Fee Payment', description: 'Pay semester tuition fee online or opt for monthly EMI assistance.' },
      { stepNumber: 4, title: 'Enrollment & LMS Access', description: 'Receive enrollment credentials, VLE login, and LinkedIn Learning invite.' }
    ],
    eligibilityMatrix: [
      { course: 'Online MBA', eligibility: 'Graduation in any stream with min 50% marks', duration: '2 Years (4 Sems)', feeSem: '37,500', totalFee: '1,50,000' },
      { course: 'Online MCA', eligibility: 'BCA/B.Sc CS or Graduation with 10+2 Mathematics', duration: '2 Years (4 Sems)', feeSem: '35,000', totalFee: '1,40,000' },
      { course: 'Online BBA', eligibility: '10+2 from a recognized board in any stream', duration: '3 Years (6 Sems)', feeSem: '20,000', totalFee: '1,20,000' },
      { course: 'Online B.Com', eligibility: '10+2 in Commerce or relevant stream', duration: '3 Years (6 Sems)', feeSem: '18,333', totalFee: '1,10,000' }
    ],
    requiredDocuments: [
      'Class 10th and 12th Marksheets and Certificates',
      'Undergraduate Degree Certificate (for PG Applicants)',
      'Government Issued Photo Identification Proof',
      'Passport Size Color Photographs',
      'UGC-DEB Distance Education Bureau Student ID'
    ]
  },
  feesAndFinancing: {
    intro: 'Jain Online maintains economical fees with zero-cost EMI plans starting from 6,250 per month with zero interest.',
    scholarships: [
      { title: 'Academic Excellence Concession', benefit: 'Up to 25% Fee Concession', description: 'Awarded to students with high qualifying exam percentage.', tag: 'Merit' },
      { title: 'Armed Forces Welfare Concession', benefit: '20% Fee Waiver', description: 'Dedicated fee support for Indian defense and police personnel.', tag: 'Defense' },
      { title: 'Alumni Fee Grant', benefit: '10% Additional Waiver', description: 'Available for former students of Jain Group of Institutions.', tag: 'Alumni' }
    ]
  },
  placements: {
    intro: 'Jain Online offers dedicated corporate placement services backed by Bangalore s extensive corporate tech network with 2,000+ hiring partners.',
    metrics: [
      { label: 'Highest Package', value: '22 LPA', note: 'Top IT offer' },
      { label: 'Average Package', value: '6.8 LPA', note: 'For MBA graduates' },
      { label: 'Placement Rate', value: '91%', note: 'Across registered cohorts' },
      { label: 'Hiring Partners', value: '2,000+', note: 'National and global tech network' }
    ],
    supportServices: [
      '1-on-1 Career Mentorship with Bangalore startup and MNC leaders',
      'AI-Powered Resume Optimization and LinkedIn Branding',
      'Interactive Mock Interviews and Case Study Preparation',
      'Direct invitations to virtual hiring drives and corporate hackathons'
    ],
    recruiters: [
      { name: 'Amazon' },
      { name: 'Deloitte' },
      { name: 'Infosys' },
      { name: 'Capgemini' },
      { name: 'TCS' },
      { name: 'Cognizant' }
    ]
  },
  rankingsAndAccreditations: {
    intro: 'Jain (Deemed-to-be) University is accredited with the highest NAAC A++ (Score 3.71), demonstrating exceptional academic quality.',
    table: [
      { authority: 'University Grants Commission (UGC-DEB)', status: 'Entitled to offer Online Degrees' },
      { authority: 'NAAC Accreditation', status: 'A++ Grade (3.71 CGPA)' },
      { authority: 'NIRF Ranking', status: 'Ranked Top 70 Universities in India' },
      { authority: 'AICTE Approval', status: 'Approved for Technical & Management Programs' },
      { authority: 'AIU Membership', status: 'Member, Association of Indian Universities' }
    ]
  },
  campusAndLms: {
    intro: 'Jain Virtual Learning Environment (VLE) provides interactive video content, live discussion boards, and bundled LinkedIn Learning access.',
    lmsName: 'Jain Virtual Learning Environment (VLE)',
    lmsFeatures: [
      'Bundled Access to 16,000+ LinkedIn Learning Video Courses',
      'Live Weekend Webinars with Bangalore Industry Mentors',
      'Recorded Video Lectures with Downloadable Reference Guides',
      '100% Home Proctored AI-Supervised Online Examination Facility'
    ],
    examPattern: [
      { title: 'Continuous Internal Evaluation (30%)', description: 'Periodic assessments, assignments, and case studies.' },
      { title: 'End-Semester Online Exam (70%)', description: 'Remotely proctored online exams with audio and video surveillance.' }
    ]
  },
  importantDates: {
    items: [
      { event: 'Online Application Window', date: 'Active 2026 Intake', status: 'Active', mode: 'Digital Form' },
      { event: 'Document Verification', date: 'Rolling within 48 Hours', status: 'Rolling', mode: 'Online Registrar' },
      { event: 'Induction & LMS Access', date: 'Upcoming Semester Start', status: 'Upcoming', mode: 'Online VLE' }
    ]
  },
  faqs: [
    { question: 'Is Jain Online degree recognized by UGC?', answer: 'Yes, Jain University is entitled by UGC-DEB to offer online degree programs with full equivalence to regular on-campus degrees.', category: 'Validity' },
    { question: 'Do students get LinkedIn Learning access?', answer: 'Yes, all enrolled students receive complimentary access to LinkedIn Learning with certificates.', category: 'Academics' },
    { question: 'What is the examination pattern?', answer: 'Examinations are 100% online from home with AI and human web proctoring.', category: 'Exams' }
  ],
  relatedUniversityIds: ['lpu-online', 'amity-online', 'cu-online', 'manipal-online', 'upes-online']
};
