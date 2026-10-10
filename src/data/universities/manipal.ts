import { UniversityData } from '../../types/university';

export const MANIPAL_UNIVERSITY_DATA: UniversityData = {
  id: 'manipal-online',
  slug: 'manipal-online',
  name: 'Manipal University Jaipur (Online Manipal)',
  shortName: 'Online Manipal',
  tagline: '70+ Years of Academic Legacy - NAAC A++ (3.59 CGPA) Online Degrees',
  established: '2011',
  location: 'Jaipur, Rajasthan',
  type: 'Private UGC-DEB Entitled',
  officialWebsite: 'onlinemanipal.com',
  rating: '4.8',
  reviewsCount: 1890,
  nirfRanking: '64',
  naacGrade: 'NAAC A++ (3.59 CGPA)',
  approvals: ['UGC-DEB', 'AICTE', 'NAAC A++', 'NIRF #64', 'AIU', 'WES', 'Coursera Access Free'],
  verifiedYear: '2026',
  logoImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_logo.webp',
  backgroundImage: 'https://images.DegreeFYD.com/colleges/7190/lovely_professional_university_online_course_image.webp',
  brochureUrl: 'https://images.degreefyd.com//manipal-online-brochure.pdf',
  sampleDegreeImage: 'https://images.DegreeFYD.com/colleges/7190/sampleDegree/lovely_professional_university_online_course_sampledegree.webp',
  quickStats: {
    feeRange: '1,30,000 - 1,75,000',
    duration: '2 - 3 Years',
    mode: '100% Home Proctored Online',
    placementRate: '92%',
    highestPackage: '24 LPA',
    avgPackage: '7.5 LPA',
    emiStarting: '7,290/mo'
  },
  overview: {
    introParagraphs: [
      'Manipal University Jaipur (MUJ), carrying the illustrious 70-year educational legacy of the Manipal Group, delivers world-class online undergraduate and postgraduate degree programs through its digital platform, Online Manipal.',
      'Accredited with the prestigious NAAC A++ grade (3.59 CGPA), MUJ Online integrates complimentary access to 10,000+ Coursera courses, Google certification tracks, and mentorship by premier faculty and Fortune 500 executives.',
      'Online Manipal degrees are recognized globally by WES, UGC-DEB, and AICTE, enabling graduates to accelerate corporate careers or pursue higher education worldwide.'
    ],
    highlightsTable: [
      { label: 'Parent Group', value: 'Manipal Education & Medical Group (MEMG)', category: 'Institution' },
      { label: 'Campus Headquarters', value: 'Jaipur-Ajmer Express Highway, Dehmi Kalan, Jaipur', category: 'Institution' },
      { label: 'Accreditation', value: 'NAAC A++ (3.59 CGPA)', category: 'Accreditations' },
      { label: 'NIRF Ranking', value: 'Ranked #64 by NIRF 2024', category: 'Accreditations' },
      { label: 'Industry Certifications', value: 'Complimentary Coursera & Google Credentials', category: 'Technology' },
      { label: 'Examination Mode', value: 'AI-Proctored Home Remote Examinations', category: 'Evaluation' },
      { label: 'Official Portal', value: 'onlinemanipal.com', category: 'Info' }
    ],
    highlightsSummary: 'Online Manipal is entitled by the UGC to deliver career-aligned degrees with flexible weekend schedules and zero-cost EMI financing.',
    latestNews: {
      title: 'Online Manipal 2026 Admissions Open with Free Coursera Access',
      description: 'Enrolled students receive complimentary access to 10,000+ Coursera courses and Google professional certificates.',
      date: 'Updated for 2026 Academic Batch'
    }
  },
  courses: [
    {
      id: 'manipal-mba',
      name: 'Online Master of Business Administration (MBA)',
      code: 'MBA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '43,750',
      totalFee: '1,75,000',
      specializationsCount: 10,
      specializations: ['BFSI', 'Analytics & Data Science', 'Information Technology', 'Human Resource Management', 'Marketing', 'Finance', 'Operations Management', 'International Business'],
      eligibility: 'Graduation in any discipline with minimum 50% aggregate (45% for reserved category) from a recognized university.',
      description: 'Premier online MBA designed for working executives, featuring Harvard Business case studies and advanced analytics tracks.',
      careerProspects: {
        avgPackage: '7.5 - 9.5 LPA',
        highestPackage: '24 LPA',
        roles: ['Senior Business Analyst', 'Corporate Finance Manager', 'Chief Growth Officer', 'Operations Lead']
      }
    },
    {
      id: 'manipal-mca',
      name: 'Online Master of Computer Applications (MCA)',
      code: 'MCA',
      level: 'PG',
      duration: '2 Years (4 Sems)',
      feePerSemester: '37,500',
      totalFee: '1,50,000',
      specializationsCount: 4,
      specializations: ['Cloud Computing', 'Data Analytics', 'Full-Stack Development', 'AI & Machine Learning'],
      eligibility: 'BCA / B.Sc (IT/CS) or Bachelor degree with Mathematics at 10+2 level or graduation.',
      description: 'Industry-integrated computer applications curriculum with modern development labs and cloud architecture training.',
      careerProspects: {
        avgPackage: '6.5 - 8.2 LPA',
        highestPackage: '20 LPA',
        roles: ['Cloud Architect', 'Full-Stack Lead', 'AI Research Engineer']
      }
    },
    {
      id: 'manipal-bba',
      name: 'Online Bachelor of Business Administration (BBA)',
      code: 'BBA',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '22,500',
      totalFee: '1,35,000',
      specializationsCount: 3,
      specializations: ['Marketing', 'Finance', 'Human Resources'],
      eligibility: 'Pass Class 10+2 / Intermediate in any stream with minimum 45% aggregate.',
      description: 'Foundational business administration program focusing on enterprise management, marketing, and leadership.',
      careerProspects: {
        avgPackage: '4.2 - 5.0 LPA',
        highestPackage: '10 LPA',
        roles: ['Business Analyst', 'Client Relationship Manager', 'Marketing Specialist']
      }
    },
    {
      id: 'manipal-bcom',
      name: 'Online Bachelor of Commerce (B.Com)',
      code: 'B.Com',
      level: 'UG',
      duration: '3 Years (6 Sems)',
      feePerSemester: '21,666',
      totalFee: '1,30,000',
      specializationsCount: 2,
      specializations: ['Financial Accounting', 'Corporate Banking'],
      eligibility: 'Pass 10+2 in Commerce or relevant stream with min 45% marks.',
      description: 'Comprehensive commerce and banking curriculum aligned with modern accounting and auditing practices.',
      careerProspects: {
        avgPackage: '4.0 - 4.8 LPA',
        highestPackage: '8.5 LPA',
        roles: ['Accountant', 'Tax Consultant', 'Financial Associate']
      }
    }
  ],
  admissions: {
    intro: 'Simple and streamlined 4-step digital admission process guided by Online Manipal academic advisors.',
    steps: [
      { stepNumber: 1, title: 'Application Submission', description: 'Complete the online application form on the Online Manipal official portal.' },
      { stepNumber: 2, title: 'Upload Credentials', description: 'Upload verified digital copies of graduation/school marks sheets and ID proof.' },
      { stepNumber: 3, title: 'Fee Payment & Grants', description: 'Submit the semester fee online or set up 0% interest monthly EMI installments.' },
      { stepNumber: 4, title: 'LMS Access & Coursera Activation', description: 'Get student credentials and access to Coursera and Manipal digital library.' }
    ],
    eligibilityMatrix: [
      { course: 'Online MBA', eligibility: 'Graduation in any discipline with min 50% marks', duration: '2 Years (4 Sems)', feeSem: '43,750', totalFee: '1,75,000' },
      { course: 'Online MCA', eligibility: 'BCA / B.Sc CS or Graduation with 10+2 Mathematics', duration: '2 Years (4 Sems)', feeSem: '37,500', totalFee: '1,50,000' },
      { course: 'Online BBA', eligibility: '10+2 in any stream from a recognized board', duration: '3 Years (6 Sems)', feeSem: '22,500', totalFee: '1,35,000' },
      { course: 'Online B.Com', eligibility: '10+2 in any stream with min 45% marks', duration: '3 Years (6 Sems)', feeSem: '21,666', totalFee: '1,30,000' }
    ],
    requiredDocuments: [
      'Class 10th and 12th Marksheets and Passing Certificates',
      'Graduation Marksheets and Degree Certificate for PG',
      'Aadhaar Card, Passport, or Govt ID',
      'Recent Passport Photograph',
      'DEB ID for UGC Validation'
    ]
  },
  feesAndFinancing: {
    intro: 'Online Manipal provides flexible semester payment structures with zero-cost EMI plans starting from 7,290 per month.',
    scholarships: [
      { title: 'Defense Personnel Scholarship', benefit: '20% Fee Concession', description: 'Dedicated grant for Indian Armed Forces personnel, paramilitary, and veterans.', tag: 'Defense' },
      { title: 'Merit Academic Concession', benefit: 'Up to 30% Waiver', description: 'For students with exceptional academic track records in qualifying exams.', tag: 'Merit' },
      { title: 'Divyang Scholarship', benefit: '20% Tuition Grant', description: 'Special financial assistance for differently-abled students.', tag: 'Inclusion' }
    ]
  },
  placements: {
    intro: 'Online Manipal conducts pan-India virtual placement drives and career acceleration mentorship for all enrolled students.',
    metrics: [
      { label: 'Highest Package', value: '24 LPA', note: 'Top MNC offer' },
      { label: 'Average Package', value: '7.5 LPA', note: 'Across MBA graduates' },
      { label: 'Placement Rate', value: '92%', note: 'For active placement candidates' },
      { label: 'Recruiting Companies', value: '400+', note: 'Fortune 500 corporate network' }
    ],
    supportServices: [
      'Comprehensive 1-on-1 career counselling with corporate mentors',
      'AI Resume Builder and personal portfolio enhancement',
      'Exclusive access to Manipal Virtual Placement Drives',
      'Industry mock interviews with corporate HR panels'
    ],
    recruiters: [
      { name: 'Amazon' },
      { name: 'Deloitte' },
      { name: 'Cognizant' },
      { name: 'TCS' },
      { name: 'Infosys' },
      { name: 'Wipro' }
    ]
  },
  rankingsAndAccreditations: {
    intro: 'Manipal University Jaipur is accredited with NAAC A++ (Score 3.59), reflecting outstanding academic excellence.',
    table: [
      { authority: 'University Grants Commission (UGC-DEB)', status: 'Entitled to offer Online Degrees' },
      { authority: 'NAAC Accreditation', status: 'A++ Grade (3.59 CGPA)' },
      { authority: 'NIRF Ranking', status: 'Ranked #64 Overall in India' },
      { authority: 'AICTE Approval', status: 'Approved for Technical & Management Degrees' },
      { authority: 'WES Recognition', status: 'Recognized for USA & Canada Immigration' }
    ]
  },
  campusAndLms: {
    intro: 'The Online Manipal LMS provides high-definition video lessons, discussion forums, interactive quizzes, and seamless integration with Coursera.',
    lmsName: 'Online Manipal Virtual Learning Hub',
    lmsFeatures: [
      'Free Access to 10,000+ Coursera Courses with Professional Certificates',
      'Live Weekend Masterclasses by Esteemed University Faculty & Industry Leaders',
      'Self-Paced HD Recorded Video Lectures with Multilingual Subtitles',
      'AI-Proctored Secure Online Examinations from the Comfort of Home'
    ],
    examPattern: [
      { title: 'Continuous Internal Assessment (30%)', description: 'Periodic quizzes, assignments, and case presentations.' },
      { title: 'End-Semester Online Proctored Exam (70%)', description: 'Secure remote exams proctored via web camera and microphone.' }
    ]
  },
  importantDates: {
    items: [
      { event: 'Online Application Start', date: 'Ongoing 2026 Intake', status: 'Active', mode: 'Digital Portal' },
      { event: 'Document Verification', date: 'Within 48 Hours', status: 'Rolling', mode: 'Admissions Desk' },
      { event: 'Batch Induction', date: 'Upcoming Academic Cycle', status: 'Upcoming', mode: 'Virtual Classroom' }
    ]
  },
  faqs: [
    { question: 'Is the Online Manipal degree valid in India and abroad?', answer: 'Yes, Online Manipal degrees are entitled by UGC-DEB, approved by AICTE, and evaluated by WES for USA and Canada.', category: 'Validity' },
    { question: 'Do students get access to Coursera for free?', answer: 'Yes! Enrolled students get complimentary access to over 10,000+ Coursera courses and Google credentials at no additional cost.', category: 'Academics' },
    { question: 'What is the highest package in placements?', answer: 'The highest recorded package for online graduates is 24 LPA, with an average package of 7.5 LPA across MBA cohorts.', category: 'Placements' }
  ],
  relatedUniversityIds: ['lpu-online', 'amity-online', 'cu-online', 'jain-online', 'upes-online']
};
