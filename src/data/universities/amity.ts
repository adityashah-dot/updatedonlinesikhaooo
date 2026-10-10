import { UniversityData } from '../../types/university';

export const AMITY_UNIVERSITY_DATA: UniversityData = {
  id: 'amity-online',
  slug: 'amity-online',
  name: 'Amity University Online',
  shortName: 'Amity Online',
  tagline: "India's First UGC-Recognized Online University - QS Asia-Pacific Ranked",
  established: '2005',
  location: 'Noida, Uttar Pradesh',
  type: 'Private UGC-DEB Entitled',
  officialWebsite: 'amityonline.com',
  rating: '4.7',
  reviewsCount: 2350,
  nirfRanking: '32',
  naacGrade: 'NAAC A+ Grade',
  approvals: ['UGC-DEB', 'AICTE', 'WES (USA & Canada)', 'QS Ranked #1 in India', 'AIU', 'QAA (UK)'],
  verifiedYear: '2026',
  logoImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBogd-HH3wbYS_BEwn8GjcylpXajy4iKY2EsFruzyPSEQadgg2jLTMxzX8FC_-q6YRfTG8vTdxbBwb4SeQ4MgWR1gcPRgdF3MeHjQJkcNZi8_TDrMmWf70ocsjMbILMnzz_7qMQpR737IVk6K_-_pA9HvHBPf6VubWZD9-QigSOFnN2v4GzQ7Vc4oGSZnyQ5EiQDKuYolAo7WanMn7FyVUv_ChFrU35pvoVRytRfKobmTax-bdDlW_0HLGCxAXROBPaxxI',
  backgroundImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_image.webp',
  brochureUrl: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
  sampleDegreeImage: 'https://images.DegreeFYD.com/colleges/7190/sampleDegree/lovely_professional_university_online_course_sampledegree.webp',
  quickStats: {
    feeRange: '50,000 - 2,50,000',
    duration: '2 - 3 Years',
    mode: '100% Home Proctored Online',
    placementRate: '90%',
    highestPackage: '20 LPA',
    avgPackage: '6.2 LPA',
    emiStarting: '4,583/mo'
  },
  overview: {
    introParagraphs: [
      'Amity University Online is the dedicated digital education arm of Amity Education Group, holding the distinction of being India s first UGC-recognized online university. Ranked Asia s #1 online MBA provider by QS rankings, Amity Online serves more than 1,60,000 students across 135 countries.',
      'The programs combine rigorous global curricula with interactive digital pedagogy, live weekend classes by international faculty, and industry-endorsed career acceleration tracks.',
      'All degree programs are entitled by the UGC-DEB, approved by AICTE, accredited by NAAC with an A+ Grade, and recognized internationally by WES (USA & Canada) for direct immigration and higher study pathways.'
    ],
    highlightsTable: [
      { label: 'University Name', value: 'Amity University Online (Amity Education Group)', category: 'Institution' },
      { label: 'Establishment Year', value: '2005 (Amity Education Group)', category: 'Institution' },
      { label: 'Institution Type', value: 'Private UGC-DEB Entitled', category: 'Institution' },
      { label: 'Campus Headquarters', value: 'Sector 125, Noida, Uttar Pradesh', category: 'Institution' },
      { label: 'Accreditation', value: 'NAAC A+ Grade (High CGPA)', category: 'Accreditations' },
      { label: 'Global Ranking', value: 'QS Online MBA Top 10 Asia-Pacific | NIRF #32', category: 'Accreditations' },
      { label: 'Global Recognition', value: 'WES (USA & Canada), QAA (UK)', category: 'Accreditations' },
      { label: 'Examination Format', value: '100% Home Online Proctored', category: 'Evaluation' },
      { label: 'Active Learners', value: '1,60,000+ Students Worldwide', category: 'Academic' },
      { label: 'Industry Partners', value: 'KPMG, TCS iON, HCLTech, Paytm, AWS', category: 'Technology' },
      { label: 'Official Portal', value: 'amityonline.com', category: 'Info' }
    ],
    highlightsSummary: 'Amity University Online is recognized by national statutory councils (UGC, AICTE, AIU) and international evaluation bodies (WES, QS, ASIC UK).',
    latestNews: {
      title: 'Amity Online Admission 2026 Open for Spring & Summer Batches',
      description: 'Applications are live for UGC-entitled Online MBA, MCA, BCA, BBA, and Commerce degrees with flexible zero-cost EMI plans.',
      date: 'Updated for 2026 Academic Cycle'
    }
  },
  courses: [
    {
      id: 'amity-mba',
      name: 'Online Master of Business Administration (MBA)',
      code: 'MBA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '45,000 - 62,500',
      totalFee: '1,80,000 - 2,50,000',
      specializationsCount: 14,
      specializations: [
        'Digital Marketing', 'Data Science & Business Analytics', 'Banking & Finance',
        'Human Resource Management', 'International Business', 'Operations & Supply Chain',
        'FinTech', 'Hospital & Healthcare Management', 'Information Technology'
      ],
      eligibility: 'Bachelor s degree in any discipline with minimum 40% aggregate marks from a recognized university.',
      description: 'QS #1 Online MBA in India with 14 in-demand specializations, global case studies, Harvard Business Publishing simulations, and masterclasses from industry CEOs.',
      careerProspects: {
        avgPackage: '6.5 - 8 LPA',
        highestPackage: '20 LPA',
        roles: ['Senior Business Strategist', 'Product Marketing Manager', 'Financial Risk Analyst', 'HR Director', 'Management Consultant']
      }
    },
    {
      id: 'amity-mca',
      name: 'Online Master of Computer Applications (MCA)',
      code: 'MCA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '35,000 - 52,500',
      totalFee: '1,40,000 - 2,10,000',
      specializationsCount: 6,
      specializations: ['Cloud Computing', 'Artificial Intelligence & Machine Learning', 'Data Analytics', 'Full-Stack Software Development', 'Cyber Security'],
      eligibility: 'BCA / B.Sc (Computer Science/IT) or Bachelor s degree in any stream with Mathematics at 10+2 level or graduation.',
      description: 'Advanced curriculum covering modern software architectures, DevOps, cloud deployment, and algorithmic engineering.',
      careerProspects: {
        avgPackage: '5.5 - 7 LPA',
        highestPackage: '18 LPA',
        roles: ['Full-Stack Architect', 'Cloud DevOps Engineer', 'AI/ML Specialist', 'Systems Software Engineer']
      }
    },
    {
      id: 'amity-bba',
      name: 'Online Bachelor of Business Administration (BBA)',
      code: 'BBA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '20,000 - 30,000',
      totalFee: '1,20,000 - 1,80,000',
      specializationsCount: 5,
      specializations: ['Digital Marketing', 'Finance & Accounts', 'Human Resource Management', 'Retail & Sales', 'General Management'],
      eligibility: 'Higher Secondary Certificate (Class 12 / 10+2) in any stream from a recognized board.',
      description: 'Foundation program developing fundamental business management acumen, entrepreneurial mindset, and modern market strategies.',
      careerProspects: {
        avgPackage: '3.8 - 4.5 LPA',
        highestPackage: '8.5 LPA',
        roles: ['Business Development Associate', 'Digital Marketing Specialist', 'HR Operations Analyst']
      }
    },
    {
      id: 'amity-bca',
      name: 'Online Bachelor of Computer Applications (BCA)',
      code: 'BCA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '21,000 - 31,000',
      totalFee: '1,25,000 - 1,85,000',
      specializationsCount: 5,
      specializations: ['Cloud & Security', 'Data Engineering', 'Web & Mobile Application Development', 'Software Quality Assurance'],
      eligibility: 'Class 10+2 / HSC from a recognized board with Mathematics/Computer Applications preferred.',
      description: 'Technical undergraduate program offering hands-on coding labs in JavaScript, Python, Java, SQL, and modern frameworks.',
      careerProspects: {
        avgPackage: '4.0 - 5.0 LPA',
        highestPackage: '10 LPA',
        roles: ['Software Developer', 'Junior DevOps Engineer', 'QA Automation Engineer', 'Frontend Developer']
      }
    },
    {
      id: 'amity-bcom',
      name: 'Online Bachelor of Commerce (B.Com)',
      code: 'B.Com',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '15,000 - 22,000',
      totalFee: '90,000 - 1,30,000',
      specializationsCount: 3,
      specializations: ['Accounting & Finance', 'Corporate Banking', 'Taxation & Auditing'],
      eligibility: 'Class 10+2 / Intermediate in Commerce or relevant stream from a recognized board.',
      description: 'Comprehensive financial accounting, corporate laws, GST, and audit management aligned with modern corporate practices.',
      careerProspects: {
        avgPackage: '3.5 - 4.2 LPA',
        highestPackage: '7 LPA',
        roles: ['Accountant', 'Tax Associate', 'Credit Analyst', 'Audit Assistant']
      }
    }
  ],
  admissions: {
    intro: 'Amity University Online offers a 100% digital admission process with instant document verification and guidance from assigned academic advisors.',
    steps: [
      { stepNumber: 1, title: 'Online Registration', description: 'Fill profile with contact and academic details on the official online admissions portal.' },
      { stepNumber: 2, title: 'Upload Academic Documents', description: 'Upload scanned copies of 10th/12th/Graduation mark sheets, Photo ID, and passport photograph.' },
      { stepNumber: 3, title: 'Pay Application Fee & Verify', description: 'Submit the application fee and complete eligibility verification conducted within 48-72 hours.' },
      { stepNumber: 4, title: 'LMS Activation & Induction', description: 'Receive student enrollment number, Amity LMS credentials, and access to orientation webinars.' }
    ],
    eligibilityMatrix: [
      { course: 'Online MBA', eligibility: "Bachelor's degree in any discipline with min 40% aggregate", duration: '2 Years (4 Sems)', feeSem: '45,000', totalFee: '1,80,000', selection: 'Academic Merit & Profile Review' },
      { course: 'Online MCA', eligibility: 'BCA / B.Sc CS or Graduation with 10+2 Mathematics', duration: '2 Years (4 Sems)', feeSem: '35,000', totalFee: '1,40,000', selection: 'Academic Merit' },
      { course: 'Online BBA', eligibility: '10+2 / Intermediate in any stream from recognized board', duration: '3 Years (6 Sems)', feeSem: '20,000', totalFee: '1,20,000', selection: 'Direct Merit' },
      { course: 'Online BCA', eligibility: '10+2 / Intermediate in any stream from recognized board', duration: '3 Years (6 Sems)', feeSem: '21,000', totalFee: '1,25,000', selection: 'Direct Merit' },
      { course: 'Online B.Com', eligibility: '10+2 / Intermediate in Commerce or relevant stream', duration: '3 Years (6 Sems)', feeSem: '15,000', totalFee: '90,000', selection: 'Direct Merit' }
    ],
    requiredDocuments: [
      'Class 10th Mark Sheet & Passing Certificate (Proof of Age)',
      'Class 12th Mark Sheet & Certificate',
      'Graduation Degree / Mark Sheets for all semesters (for PG applicants)',
      'Government Photo Identity Card (Aadhaar / PAN / Passport)',
      'Passport size colored photograph',
      'Distance Education Bureau (DEB) student ID'
    ],
    selectionProcess: 'Direct merit-based evaluation based on candidate academic performance in qualifying examinations.'
  },
  feesAndFinancing: {
    intro: 'Amity Online provides affordable semester installment plans and tie-ups with leading Indian banks and NBFCs for zero-interest monthly EMI support.',
    emiOptionsDescription: 'Zero-cost EMI starts as low as 4,583 per month with zero processing charge and zero collateral requirement.',
    scholarships: [
      { title: 'Merit-Based Scholarship', benefit: 'Up to 25% Fee Concession', description: 'Granted to candidates securing above 85% in qualifying undergraduate or Class 12 examinations.', tag: 'Academic Merit' },
      { title: 'Defence & Para-Military Personnel', benefit: '20% Fee Concession', description: 'Dedicated fee support for serving and retired Indian Armed Forces personnel and their families.', tag: 'Defence Welfare' },
      { title: 'Divyang / Differently Abled Concession', benefit: '20% Fee Waiver', description: 'Special scholarship grant supporting differently-abled students across all degree programs.', tag: 'Social Welfare' },
      { title: 'Amity Alumni Concession', benefit: '10% Additional Waiver', description: 'Applicable to former Amity graduates pursuing higher degrees through Amity Online.', tag: 'Alumni' }
    ],
    scholarshipsNote: 'Scholarship waivers are applied against program tuition fees following document verification during the enrollment stage.'
  },
  placements: {
    intro: 'Amity University Online runs an active Virtual Job Fair and placement acceleration cell with over 500+ corporate recruiting partners across IT, BFSI, Consulting, and FMCG.',
    note: 'Salary packages and placement participation depend on student specialization, past experience, and corporate recruitment criteria.',
    metrics: [
      { label: 'Highest Package', value: '20 LPA', note: 'Offered by multinational consulting firm' },
      { label: 'Placement Rate', value: '90%', note: 'Students opting for placement support' },
      { label: 'Recruiting Partners', value: '500+', note: 'Fortune 500 & Indian tech giants' },
      { label: 'Job Opportunities', value: '3,000+', note: 'Annual job openings posted' }
    ],
    supportServices: [
      'Resume optimization and AI LinkedIn profile building sessions',
      'Exclusive access to the Amity Corporate Job Portal with live job openings',
      'Virtual mock interviews with industry HR leaders and feedback reports',
      'Industry immersion masterclasses with Fortune 500 business leaders',
      'Placement readiness bootcamps covering case studies and aptitude tests'
    ],
    recruiters: [
      { name: 'Amazon' },
      { name: 'TCS' },
      { name: 'Deloitte' },
      { name: 'Cognizant' },
      { name: 'Infosys' },
      { name: 'Wipro' },
      { name: 'Capgemini' },
      { name: 'Tech Mahindra' }
    ]
  },
  rankingsAndAccreditations: {
    intro: 'Amity University Online maintains premier national accreditations and top global rankings reflecting world-class digital education standards.',
    table: [
      { authority: 'University Grants Commission (UGC-DEB)', status: 'Entitled to offer Full Online Degree Programs', description: 'Complete equivalence to regular degrees under UGC norms' },
      { authority: 'NAAC Accreditation', status: 'A+ Grade Accredited University', description: 'High CGPA benchmark recognizing quality higher education' },
      { authority: 'QS World University Rankings', status: 'Ranked #1 Online MBA in India, Top 10 Asia-Pacific', description: 'Premier global ranking authority for university standards' },
      { authority: 'World Education Services (WES)', status: 'Recognized for USA & Canada Evaluation', description: 'Direct acceptance for overseas employment and higher education' },
      { authority: 'All India Council for Technical Education (AICTE)', status: 'Approved for Technical & Management Programs', description: 'Recognized for MCA and MBA professional disciplines' },
      { authority: 'Association of Indian Universities (AIU)', status: 'Full Member University', description: 'Equivalence across all central and state universities in India' }
    ]
  },
  campusAndLms: {
    intro: 'Amity Online delivers its programs through "Amigo", a state-of-the-art Learning Management System accessible on web browsers and mobile apps.',
    lmsName: 'Amigo Learning Platform',
    lmsFeatures: [
      'Live Weekend Interactive Classes with Eminent Faculty and Guest Speakers',
      'Pre-recorded HD Video Lectures with Searchable Transcripts and Bookmarks',
      'Digital E-Library containing 20,000+ Academic Journals and Business Cases',
      'Collaborative Discussion Boards and Direct Faculty Mentorship Channels',
      '100% Home Proctored AI-Assisted Remote Examination Infrastructure'
    ],
    examPattern: [
      { title: 'Continuous Internal Assessment (30%)', description: 'Weekly quizzes, module assignments, case studies, and participation submitted via Amigo LMS.' },
      { title: 'End-Term Online Examination (70%)', description: '100% remote-proctored examination conducted from home using AI anti-cheating and web camera monitoring.' },
      { title: 'Examination Slots & Flexibility', description: 'Convenient weekend exam slots allowing working executives to balance professional schedules.' },
      { title: 'Provisional & Final Transcripts', description: 'Digital verified marksheets and degree certificates delivered upon semester clearance.' }
    ],
    campusDetails: {
      location: 'While courses are 100% online, students are welcome to visit Amity s premier 60-acre flagship campus at Sector 125, Noida, Uttar Pradesh.',
      connectivity: [
        { mode: 'By Metro', detail: 'Nearest station is Botanical Garden / Okhla Bird Sanctuary on the Delhi Metro Magenta Line.' },
        { mode: 'By Air', detail: 'Indira Gandhi International Airport (DEL), New Delhi is approximately 32 km away.' },
        { mode: 'By Road', detail: 'Strategically located on the Noida-Greater Noida Expressway with extensive cab and bus transit.' }
      ]
    },
    sampleDegree: {
      title: 'UGC-Approved Online Degree Certificate',
      description: 'The degree awarded by Amity University Online carries the same legal standing and privileges as a regular on-campus degree, with no mention of "online" or "distance" on the main certificate per UGC regulations.',
      imageUrl: 'https://images.DegreeFYD.com/colleges/7190/sampleDegree/lovely_professional_university_online_course_sampledegree.webp'
    }
  },
  importantDates: {
    note: 'Amity Online operates on rolling admission cycles with January (Winter) and July (Summer) batch enrollments.',
    items: [
      { event: 'Application Cycle Start Date', date: 'Ongoing (Active)', status: 'Active', mode: 'Digital Online Form' },
      { event: 'Last Date for Document Submission', date: 'As per current admission intake', status: 'Open', mode: 'Student Document Portal' },
      { event: 'Document Verification & Provisional Offer', date: 'Within 48 to 72 hours of submission', status: 'Rolling', mode: 'Online Registrar Verification' },
      { event: 'Batch Orientation & LMS Login Issue', date: 'Prior to semester commencement', status: 'Upcoming', mode: 'Live Virtual Induction' },
      { event: 'Commencement of Live Classes', date: 'Weekend class schedules', status: 'Upcoming', mode: 'Amigo Virtual Classroom' }
    ]
  },
  faqs: [
    { question: 'Is Amity University Online degree valid for government jobs and UPSC?', answer: 'Yes, absolutely. Amity University Online degrees are fully entitled by the UGC-DEB and recognized by AICTE and AIU. They hold complete equivalence to regular on-campus degrees and are valid for all central/state government exams including UPSC, SSC, and banking jobs.', category: 'Validity' },
    { question: 'Is the degree accepted for jobs or immigration abroad?', answer: 'Yes. Amity Online is evaluated and recognized by World Education Services (WES) for the USA and Canada, making it valid for Express Entry permanent residency points and overseas master s/doctoral admissions.', category: 'Global Recognition' },
    { question: 'Are examinations conducted online from home or at examination centers?', answer: 'Examinations are 100% online and proctored from your home or office. You only need a laptop/desktop with a working webcam, microphone, and stable internet connection.', category: 'Examinations' },
    { question: 'What is the fee structure for Amity Online MBA?', answer: 'The Online MBA fee ranges between 1,80,000 and 2,50,000 depending on specialization and payment frequency. Semester installment options (approx. 45,000/sem) and zero-cost EMI plans (approx. 4,583/month) are available.', category: 'Fees & Payment' },
    { question: 'Does Amity Online provide placement assistance to students?', answer: 'Yes. Amity Online offers career readiness bootcamps, resume review, mock interviews, and access to virtual job fairs with over 500+ recruiting partners including Amazon, TCS, Deloitte, and Cognizant.', category: 'Placements' },
    { question: 'Can working professionals manage the course workload?', answer: 'Yes. The curriculum is specifically structured for working adults with live classes held on weekends and all lecture recordings, e-books, and assignments accessible 24/7 on the mobile app.', category: 'Learning Mode' }
  ],
  relatedUniversityIds: ['lpu-online', 'cu-online', 'manipal-online', 'jain-online', 'upes-online']
};
