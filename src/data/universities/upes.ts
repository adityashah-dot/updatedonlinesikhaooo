import { UniversityData } from '../../types/university';

export const UPES_UNIVERSITY_DATA: UniversityData = {
  id: 'upes-online',
  slug: 'upes-online',
  name: 'UPES Online (University of Petroleum & Energy Studies)',
  shortName: 'UPES Online',
  tagline: 'QS 5-Star Rated for Employability - Domain-Specialized Online Degrees',
  established: '2003',
  location: 'Dehradun, Uttarakhand',
  type: 'Private UGC-DEB Entitled',
  officialWebsite: 'upesonline.ac.in',
  rating: '4.5',
  reviewsCount: 840,
  nirfRanking: '55',
  naacGrade: 'NAAC A Grade',
  approvals: ['UGC-DEB', 'AICTE', 'NIRF #55', 'QS 5-Star Rated', 'AIU', 'WES'],
  verifiedYear: '2026',
  logoImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_logo.webp',
  backgroundImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_image.webp',
  brochureUrl: 'https://images.degreefyd.com//upes-online-brochure.pdf',
  quickStats: {
    feeRange: '1,20,000 - 1,55,000',
    duration: '2 - 3 Years',
    mode: '100% Home Proctored Online',
    placementRate: '89%',
    highestPackage: '20 LPA',
    avgPackage: '6.5 LPA',
    emiStarting: '6,458/mo'
  },
  overview: {
    introParagraphs: [
      'UPES Online is the digital learning wing of the University of Petroleum and Energy Studies, Dehradun - internationally acclaimed for specialized leadership education in Energy, Oil & Gas, Logistics, Supply Chain, and Digital Business.',
      'Holding a QS 5-Star rating for Employability and NAAC A Grade accreditation, UPES Online delivers domain-focused curricula co-designed with global industry leaders and corporate practitioners.',
      'Degrees awarded are fully entitled by UGC-DEB, AICTE approved, and treated with equal academic and corporate standing to regular full-time UPES on-campus degrees.'
    ],
    highlightsTable: [
      { label: 'University Name', value: 'University of Petroleum & Energy Studies (UPES)', category: 'Institution' },
      { label: 'Campus Location', value: 'Energy Acres, Bidholi, Dehradun, Uttarakhand', category: 'Institution' },
      { label: 'Accreditation', value: 'NAAC A Grade Accredited', category: 'Accreditations' },
      { label: 'NIRF Ranking', value: 'Ranked Top 55 in India', category: 'Accreditations' },
      { label: 'Specialized Domains', value: 'Oil & Gas, Power, Supply Chain, Aviation', category: 'Academic' },
      { label: 'LMS Platform', value: 'UPES Canvas & Virtual Classroom Suite', category: 'Technology' },
      { label: 'Examination Mode', value: 'Online AI-Proctored from Home', category: 'Evaluation' },
      { label: 'Official Portal', value: 'upesonline.ac.in', category: 'Info' }
    ],
    highlightsSummary: 'UPES Online is entitled by UGC-DEB to offer domain-specialized bachelor s and master s degrees with weekend live sessions.',
    latestNews: {
      title: 'UPES Online 2026 Admissions Open for Industry-Specialized Degrees',
      description: 'Admissions open for MBA in Oil & Gas, Logistics & Supply Chain, and Digital Business with flexible EMI financing.',
      date: 'Updated for 2026 Academic Batch'
    }
  },
  courses: [
    {
      id: 'upes-mba-oil-gas',
      name: 'Online MBA in Oil & Gas Management',
      code: 'MBA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '38,750',
      totalFee: '1,55,000',
      specializationsCount: 3,
      specializations: ['Upstream Operations', 'Downstream Supply & Trading', 'Petroleum Economics'],
      eligibility: 'Bachelor s degree in any discipline with min 50% aggregate from a recognized university.',
      description: 'Asia s premier energy-focused MBA providing in-depth strategic insights into the global petroleum, natural gas, and renewables sectors.',
      careerProspects: {
        avgPackage: '7.0 - 9.0 LPA',
        highestPackage: '20 LPA',
        roles: ['Energy Consultant', 'Petroleum Commercial Analyst', 'Supply Chain Director']
      }
    },
    {
      id: 'upes-mba-logistics',
      name: 'Online MBA in Logistics & Supply Chain Management',
      code: 'MBA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '38,750',
      totalFee: '1,55,000',
      specializationsCount: 2,
      specializations: ['Global Supply Chain', 'Procurement & Warehouse Operations'],
      eligibility: 'Graduation in any discipline with min 50% marks from a recognized university.',
      description: 'Comprehensive management curriculum focusing on global maritime freight, inventory planning, E-commerce fulfillment, and logistics analytics.',
      careerProspects: {
        avgPackage: '6.5 - 8.5 LPA',
        highestPackage: '18 LPA',
        roles: ['Supply Chain Strategist', 'Logistics Operations Lead', 'Procurement Specialist']
      }
    },
    {
      id: 'upes-bba',
      name: 'Online Bachelor of Business Administration (BBA)',
      code: 'BBA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '20,000',
      totalFee: '1,20,000',
      specializationsCount: 3,
      specializations: ['Marketing Management', 'Operations Management', 'Finance'],
      eligibility: 'Pass 10+2 from a recognized educational board in any stream.',
      description: 'Undergraduate business administration program with practical business cases and enterprise project assignments.',
      careerProspects: {
        avgPackage: '4.0 - 5.0 LPA',
        highestPackage: '9.5 LPA',
        roles: ['Operations Associate', 'Marketing Executive', 'Business Analyst']
      }
    },
    {
      id: 'upes-bca',
      name: 'Online Bachelor of Computer Applications (BCA)',
      code: 'BCA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '21,666',
      totalFee: '1,30,000',
      specializationsCount: 2,
      specializations: ['Cloud Infrastructure', 'Cyber Security Foundations'],
      eligibility: 'Pass 10+2 with Mathematics/Computer Applications from a recognized board.',
      description: 'Foundational computer applications program focusing on programming languages, databases, web tools, and cloud basics.',
      careerProspects: {
        avgPackage: '4.2 - 5.2 LPA',
        highestPackage: '10 LPA',
        roles: ['Software Developer', 'System Administrator', 'Junior DevOps Engineer']
      }
    }
  ],
  admissions: {
    intro: 'UPES Online provides a swift digital admission process with guidance from domain career experts.',
    steps: [
      { stepNumber: 1, title: 'Online Registration', description: 'Fill the online application form on UPES Online portal.' },
      { stepNumber: 2, title: 'Document Upload', description: 'Upload marksheets and identification proof for online verification.' },
      { stepNumber: 3, title: 'Fee Payment', description: 'Pay semester fees online or opt for monthly EMI financing.' },
      { stepNumber: 4, title: 'LMS Activation', description: 'Receive Canvas LMS login and attend virtual student orientation.' }
    ],
    eligibilityMatrix: [
      { course: 'Online MBA (Oil & Gas)', eligibility: 'Graduation in any discipline with min 50% marks', duration: '2 Years (4 Sems)', feeSem: '38,750', totalFee: '1,55,000' },
      { course: 'Online MBA (Supply Chain)', eligibility: 'Graduation in any discipline with min 50% marks', duration: '2 Years (4 Sems)', feeSem: '38,750', totalFee: '1,55,000' },
      { course: 'Online BBA', eligibility: '10+2 in any stream from a recognized board', duration: '3 Years (6 Sems)', feeSem: '20,000', totalFee: '1,20,000' },
      { course: 'Online BCA', eligibility: '10+2 with Mathematics / Computer Applications', duration: '3 Years (6 Sems)', feeSem: '21,666', totalFee: '1,30,000' }
    ],
    requiredDocuments: [
      'Class 10th and 12th Marksheets and Passing Certificates',
      'Undergraduate Degree Certificate (for PG Applicants)',
      'Government Issued Photo Identity Proof',
      'Recent Passport Size Color Photographs',
      'UGC-DEB Registration ID'
    ]
  },
  feesAndFinancing: {
    intro: 'UPES Online offers clear semester installment plans and zero-interest monthly EMI options starting from 6,458 per month.',
    scholarships: [
      { title: 'Industry Sponsored Scholarship', benefit: 'Up to 20% Tuition Waiver', description: 'For working executives currently employed in the energy, logistics, or infrastructure sectors.', tag: 'Corporate' },
      { title: 'Defense & Paramilitary Concession', benefit: '20% Fee Concession', description: 'Dedicated fee support for serving and retired defense personnel.', tag: 'Defense' },
      { title: 'Women in Leadership Grant', benefit: '15% Fee Concession', description: 'Empowering women applicants pursuing energy and supply chain leadership careers.', tag: 'Diversity' }
    ]
  },
  placements: {
    intro: 'UPES Online students benefit from UPES s deep relationships with leading oil, energy, aviation, and logistics corporations across India and the Middle East.',
    metrics: [
      { label: 'Highest Package', value: '20 LPA', note: 'Energy consulting firm' },
      { label: 'Average Package', value: '6.5 LPA', note: 'Across specialized MBA programs' },
      { label: 'Placement Rate', value: '89%', note: 'Students taking placement support' },
      { label: 'Corporate Partners', value: '350+', note: 'Core energy and logistics employers' }
    ],
    supportServices: [
      'Domain-specific resume building and energy industry case studies',
      '1-on-1 career counselling with former Fortune 500 energy executives',
      'Exclusive participation in virtual placement drives and industry conclaves',
      'Networking with UPES s vast global alumni base in over 30 countries'
    ],
    recruiters: [
      { name: 'Amazon' },
      { name: 'Deloitte' },
      { name: 'TCS' },
      { name: 'Infosys' },
      { name: 'Tech Mahindra' },
      { name: 'Wipro' }
    ]
  },
  rankingsAndAccreditations: {
    intro: 'UPES is recognized as a leader in higher education with prestigious national and international rankings.',
    table: [
      { authority: 'University Grants Commission (UGC-DEB)', status: 'Entitled Online University' },
      { authority: 'NAAC Accreditation', status: 'A Grade Accredited University' },
      { authority: 'QS Rating', status: '5 Stars for Employability & Academic Development' },
      { authority: 'NIRF Ranking', status: 'Ranked Top 55 Universities in India' },
      { authority: 'AICTE Approval', status: 'Approved for Technical & Management Programs' }
    ]
  },
  campusAndLms: {
    intro: 'The modern Canvas LMS platform brings interactive lecture delivery, live weekend masterclasses, and digital assessment tools right to your fingertips.',
    lmsName: 'UPES Canvas Learning Platform',
    lmsFeatures: [
      'Live Weekend Interactive Masterclasses with Industry Leaders',
      'HD Recorded Video Lectures with 24/7 Digital Library Access',
      'Integrated Simulation Labs for Supply Chain and Petroleum Modeling',
      '100% Home Proctored AI-Supervised Online Examination Facility'
    ],
    examPattern: [
      { title: 'Continuous Internal Evaluation (30%)', description: 'Weekly assignments, case studies, and quizzes.' },
      { title: 'End-Term Online Exam (70%)', description: 'Home proctored online examinations with remote camera monitoring.' }
    ]
  },
  importantDates: {
    items: [
      { event: 'Application Cycle Start', date: 'Active 2026 Batch', status: 'Active', mode: 'Digital Form' },
      { event: 'Document Verification', date: 'Rolling within 48 Hours', status: 'Rolling', mode: 'Online Registrar' },
      { event: 'Semester Induction', date: 'Upcoming Academic Cycle', status: 'Upcoming', mode: 'Canvas LMS' }
    ]
  },
  faqs: [
    { question: 'Is UPES Online degree valid for government jobs?', answer: 'Yes, UPES is entitled by UGC-DEB and degrees carry full legal equivalence for all government, public sector, and private job applications.', category: 'Validity' },
    { question: 'What makes UPES Online MBA programs unique?', answer: 'UPES offers domain-specialized MBA degrees in Oil & Gas, Energy, Logistics, and Supply Chain with high industry demand and specialized career pathways.', category: 'Academics' },
    { question: 'How are exams conducted in UPES Online?', answer: 'Exams are 100% remote online proctored from home with webcam and screen monitoring.', category: 'Exams' }
  ],
  relatedUniversityIds: ['lpu-online', 'amity-online', 'cu-online', 'manipal-online', 'jain-online']
};
