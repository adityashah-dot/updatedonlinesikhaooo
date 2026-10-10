import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'mba',
    code: 'MBA',
    name: 'Online Master of Business Administration (MBA)',
    shortDescription: 'A 2-year UGC-entitled MBA for working executives and fresh graduates. Choose from 6 in-demand specializations including Marketing, Finance, HR, Data Science, and Operations with live weekend classes and flexible semester exams.',
    category: 'pg',
    level: 'PG Degree',
    duration: '2 Years (4 Sems)',
    semestersCount: 4,
    perSemFee: 50000,
    totalFee: 200000,
    originalTotalFee: 220000,
    highlightBadge: 'Top Pick & Industry Leader',
    credits: 104,
    eligibility: 'Bachelor s degree in any discipline. Admission is based on merit and document verification.',
    careerProspects: {
      avgPackage: 'Around 4.5 - 6.5 LPA',
      highestPackage: 'Up to 8 - 10 LPA',
      roles: ['Business Development Manager', 'Marketing Strategist', 'Financial Analyst', 'HR Business Partner', 'Operations Consultant']
    },
    specializations: [
      'Marketing Management',
      'Finance Management',
      'Human Resource Management',
      'Data Science & Business Analytics',
      'Operations & Supply Chain Management',
      'International Business'
    ],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 26,
        subjects: [
          { name: 'Managerial Economics & Strategy', code: 'MBA101', type: 'Core' },
          { name: 'Accounting for Decision Makers', code: 'MBA102', type: 'Core' },
          { name: 'Marketing Management in Digital Age', code: 'MBA103', type: 'Core' },
          { name: 'Organizational Behavior & Leadership', code: 'MBA104', type: 'Core' },
          { name: 'Quantitative Methods & Analytics', code: 'MBA105', type: 'Core' }
        ]
      },
      {
        semester: 2,
        credits: 26,
        subjects: [
          { name: 'Corporate Financial Management', code: 'MBA201', type: 'Core' },
          { name: 'Operations & Supply Chain Strategy', code: 'MBA202', type: 'Core' },
          { name: 'Business Research Methodologies', code: 'MBA203', type: 'Core' },
          { name: 'Human Resource Systems & Analytics', code: 'MBA204', type: 'Core' },
          { name: 'Specialization Foundation Elective', code: 'MBAS205', type: 'Specialization' }
        ]
      },
      {
        semester: 3,
        credits: 26,
        subjects: [
          { name: 'Strategic Management & Business Policy', code: 'MBA301', type: 'Core' },
          { name: 'Specialization Track Subject I', code: 'SP301', type: 'Specialization' },
          { name: 'Specialization Track Subject II', code: 'SP302', type: 'Specialization' },
          { name: 'Specialization Track Subject III', code: 'SP303', type: 'Specialization' },
          { name: 'Industry Immersion & Live Consulting Project', code: 'PRJ301', type: 'Practical' }
        ]
      },
      {
        semester: 4,
        credits: 26,
        subjects: [
          { name: 'Corporate Governance & Business Ethics', code: 'MBA401', type: 'Core' },
          { name: 'Specialization Track Subject IV', code: 'SP401', type: 'Specialization' },
          { name: 'Specialization Track Subject V', code: 'SP402', type: 'Specialization' },
          { name: 'Master s Thesis / Capstone Dissertation', code: 'DIS401', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'mca',
    code: 'MCA',
    name: 'Online Master of Computer Applications (MCA)',
    shortDescription: 'A 2-year AICTE-approved MCA program covering full-stack software development, cloud computing, and AI/machine learning. Built for computer graduates seeking senior software engineering and technical lead positions.',
    category: 'pg',
    level: 'PG Degree',
    duration: '2 Years (4 Sems)',
    semestersCount: 4,
    perSemFee: 37000,
    totalFee: 148000,
    originalTotalFee: 160000,
    credits: 98,
    eligibility: 'Bachelor s degree with Mathematics at Class 10 and Class 12 or graduation level. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 4.5 - 6.5 LPA',
      highestPackage: 'Up to 8 - 10 LPA',
      roles: ['Senior Software Engineer', 'AI/ML Pipeline Developer', 'Cloud Architect', 'DevOps Specialist', 'System Analyst']
    },
    specializations: ['Artificial Intelligence & Machine Learning', 'Cloud Computing & Microservices', 'Cybersecurity', 'Data Engineering'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 24,
        subjects: [
          { name: 'Advanced Data Structures & Algorithms in Java', code: 'MCA101', type: 'Core' },
          { name: 'Advanced Operating Systems & Virtualization', code: 'MCA102', type: 'Core' },
          { name: 'Database Architecture & NoSQL Systems', code: 'MCA103', type: 'Core' },
          { name: 'Software Design Patterns & Clean Architecture', code: 'MCA104', type: 'Core' }
        ]
      },
      {
        semester: 2,
        credits: 26,
        subjects: [
          { name: 'Web Services & Microservices Architecture', code: 'MCA201', type: 'Core' },
          { name: 'Machine Learning & Statistical Modeling', code: 'MCA202', type: 'Core' },
          { name: 'Cloud Native DevOps (Docker & Kubernetes)', code: 'MCA203', type: 'Core' },
          { name: 'Specialization Core Elective I', code: 'MCAS204', type: 'Specialization' }
        ]
      },
      {
        semester: 3,
        credits: 24,
        subjects: [
          { name: 'Deep Learning & Neural Networks', code: 'MCA301', type: 'Core' },
          { name: 'Enterprise Cybersecurity & Threat Mitigation', code: 'MCA302', type: 'Core' },
          { name: 'Specialization Core Elective II', code: 'MCAS303', type: 'Specialization' },
          { name: 'Industry Research Project', code: 'PRJ302', type: 'Practical' }
        ]
      },
      {
        semester: 4,
        credits: 24,
        subjects: [
          { name: 'Specialization Core Elective III', code: 'MCAS401', type: 'Specialization' },
          { name: 'Enterprise Capstone Project', code: 'CAP402', type: 'Capstone' },
          { name: 'Master s Viva Voce', code: 'VIV402', type: 'Viva' }
        ]
      }
    ]
  },
  {
    id: 'bba',
    code: 'BBA',
    name: 'Online Bachelor of Business Administration (BBA)',
    shortDescription: 'A practical 3-year undergraduate business degree covering digital marketing, financial accounting, human resources, and business analytics. Direct foundation for corporate management and startup careers.',
    category: 'ug',
    level: 'UG Degree',
    duration: '3 Years (6 Sems)',
    semestersCount: 6,
    perSemFee: 25000,
    totalFee: 150000,
    originalTotalFee: 165000,
    credits: 130,
    eligibility: 'Class 10 and Class 12 from a recognized board. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.2 - 4.5 LPA',
      highestPackage: 'Up to 7.25 LPA',
      roles: ['Business Development Associate', 'Digital Marketing Analyst', 'Operations Executive', 'Financial Trainee', 'Product Coordinator']
    },
    specializations: ['Digital Marketing', 'Finance & Banking', 'Human Resource Management', 'Business Analytics'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Principles & Practice of Management', code: 'MGT101', type: 'Core' },
          { name: 'Financial Accounting for Managers', code: 'ACC101', type: 'Core' },
          { name: 'Microeconomics for Business', code: 'ECO103', type: 'Core' },
          { name: 'Business Communication & Presentation', code: 'COM101', type: 'Skill' }
        ]
      },
      {
        semester: 2,
        credits: 22,
        subjects: [
          { name: 'Organizational Behavior', code: 'MGT102', type: 'Core' },
          { name: 'Business Mathematics & Statistics', code: 'MTH104', type: 'Core' },
          { name: 'Marketing Management Essentials', code: 'MKT101', type: 'Core' },
          { name: 'Corporate Legal Framework', code: 'LAW102', type: 'Core' }
        ]
      },
      {
        semester: 3,
        credits: 22,
        subjects: [
          { name: 'Corporate Financial Management', code: 'FIN201', type: 'Core' },
          { name: 'Human Resource Management', code: 'HRM201', type: 'Core' },
          { name: 'Operations & Supply Chain Basics', code: 'OPS201', type: 'Core' },
          { name: 'Business Analytics using Excel & PowerBI', code: 'ANA201', type: 'Lab' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Consumer Behavior & Research', code: 'MKT202', type: 'Core' },
          { name: 'Digital Commerce & CRM Systems', code: 'DCM201', type: 'Core' },
          { name: 'Cost & Management Accounting', code: 'ACC202', type: 'Core' },
          { name: 'Elective Specialization I', code: 'ELE201', type: 'Elective' }
        ]
      },
      {
        semester: 5,
        credits: 22,
        subjects: [
          { name: 'Strategic Business Planning', code: 'STR301', type: 'Core' },
          { name: 'Entrepreneurship & Startup Incubation', code: 'ENT301', type: 'Core' },
          { name: 'Elective Specialization II', code: 'ELE301', type: 'Elective' },
          { name: 'Corporate Internship Project', code: 'INT301', type: 'Practical' }
        ]
      },
      {
        semester: 6,
        credits: 20,
        subjects: [
          { name: 'International Business Strategy', code: 'IBN302', type: 'Core' },
          { name: 'Business Ethics & Corporate Governance', code: 'ETH302', type: 'Core' },
          { name: 'Elective Specialization III', code: 'ELE302', type: 'Elective' },
          { name: 'Grand Capstone Project & Viva', code: 'CAP302', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'bca',
    code: 'BCA',
    name: 'Online Bachelor of Computer Applications (BCA)',
    shortDescription: 'A 3-year foundational IT degree covering programming (Java, Python, C++), database systems, web development, and cloud computing with practical virtual coding labs.',
    category: 'ug',
    level: 'UG Degree',
    duration: '3 Years (6 Sems)',
    semestersCount: 6,
    perSemFee: 25000,
    totalFee: 150000,
    originalTotalFee: 165000,
    credits: 134,
    eligibility: 'Class 10 and Class 12 from a recognized board. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.5 - 5.0 LPA',
      highestPackage: 'Up to 7.25 LPA',
      roles: ['Full-Stack Developer', 'Cloud Associate', 'Database Administrator', 'QA Automation Engineer', 'Technical Support Specialist']
    },
    specializations: ['Full Stack Web Development', 'Cloud Computing & DevOps', 'Data Analytics'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Problem Solving & Programming in C', code: 'CS101', type: 'Core' },
          { name: 'Computer Architecture & Digital Logic', code: 'CS102', type: 'Core' },
          { name: 'Mathematical Foundations for IT', code: 'MTH101', type: 'Core' },
          { name: 'Web Technologies Lab (HTML5/CSS3/JS)', code: 'WEB101', type: 'Lab' }
        ]
      },
      {
        semester: 2,
        credits: 22,
        subjects: [
          { name: 'Object-Oriented Programming with C++', code: 'CS103', type: 'Core' },
          { name: 'Data Structures & Algorithms', code: 'CS104', type: 'Core' },
          { name: 'Discrete Mathematics & Graph Theory', code: 'MTH102', type: 'Core' },
          { name: 'DSA Coding Lab in C++', code: 'LAB102', type: 'Lab' }
        ]
      },
      {
        semester: 3,
        credits: 24,
        subjects: [
          { name: 'Database Management Systems (RDBMS & SQL)', code: 'DB201', type: 'Core' },
          { name: 'Java Programming & Application Frameworks', code: 'JAV201', type: 'Core' },
          { name: 'Operating Systems & Linux Shell Scripting', code: 'OS201', type: 'Core' },
          { name: 'DBMS & Java Hands-on Lab', code: 'LAB201', type: 'Lab' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Computer Networks & Network Security', code: 'NET202', type: 'Core' },
          { name: 'Python for Software Engineering', code: 'PY202', type: 'Core' },
          { name: 'Software Engineering & Agile Methodologies', code: 'SE202', type: 'Core' },
          { name: 'Full Stack MERN Lab', code: 'LAB202', type: 'Lab' }
        ]
      },
      {
        semester: 5,
        credits: 22,
        subjects: [
          { name: 'Cloud Computing Infrastructure (AWS / Azure)', code: 'CLD301', type: 'Core' },
          { name: 'Information Security & Cryptography', code: 'SEC301', type: 'Core' },
          { name: 'Elective Track I (DevOps / Machine Learning)', code: 'ELE301', type: 'Elective' },
          { name: 'Mini Project & Industry Case Study', code: 'PRJ301', type: 'Practical' }
        ]
      },
      {
        semester: 6,
        credits: 22,
        subjects: [
          { name: 'Mobile App Development (React Native / Flutter)', code: 'MOB302', type: 'Core' },
          { name: 'Elective Track II (Big Data Analytics)', code: 'ELE302', type: 'Elective' },
          { name: 'Major Capstone Enterprise Software Project', code: 'CAP302', type: 'Capstone' },
          { name: 'Comprehensive Technical Viva', code: 'VIV302', type: 'Viva' }
        ]
      }
    ]
  },
  {
    id: 'bcom',
    code: 'B.Com',
    name: 'Online Bachelor of Commerce (B.Com)',
    shortDescription: 'A 3-year commerce program covering financial accounting, corporate taxation, GST compliance, auditing, and company law. Ideal for careers in corporate finance, banking, or alongside CA/CS preparation.',
    category: 'ug',
    level: 'UG Degree',
    duration: '3 Years (6 Sems)',
    semestersCount: 6,
    perSemFee: 20000,
    totalFee: 120000,
    originalTotalFee: 130000,
    credits: 126,
    eligibility: 'Class 10 and Class 12 from a recognized board in any stream. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.0 - 4.2 LPA',
      highestPackage: 'Up to 6.5 LPA',
      roles: ['Accountant', 'Tax Associate', 'Financial Analyst', 'Auditing Trainee', 'Banking Associate']
    },
    specializations: ['Corporate Accounting', 'Banking & Insurance', 'Financial Auditing'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 20,
        subjects: [
          { name: 'Financial Accounting I', code: 'BCM101', type: 'Core' },
          { name: 'Business Organization & Management', code: 'BCM102', type: 'Core' },
          { name: 'Business Economics', code: 'ECO101', type: 'Core' },
          { name: 'Commercial Communication', code: 'ENG101', type: 'Skill' }
        ]
      },
      {
        semester: 2,
        credits: 20,
        subjects: [
          { name: 'Advanced Financial Accounting', code: 'BCM103', type: 'Core' },
          { name: 'Business Regulatory Framework & Company Law', code: 'LAW101', type: 'Core' },
          { name: 'Business Statistics', code: 'MTH103', type: 'Core' },
          { name: 'Environmental Studies', code: 'EVS101', type: 'Ability' }
        ]
      },
      {
        semester: 3,
        credits: 22,
        subjects: [
          { name: 'Corporate Accounting Practices', code: 'BCM201', type: 'Core' },
          { name: 'Income Tax Law & Practice', code: 'TAX201', type: 'Core' },
          { name: 'Principles of Marketing', code: 'MKT201', type: 'Core' },
          { name: 'Computer Applications in Business', code: 'CAP201', type: 'Lab' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Cost Accounting & Management', code: 'BCM202', type: 'Core' },
          { name: 'Corporate Auditing Standards', code: 'AUD201', type: 'Core' },
          { name: 'Financial Institutions & Markets', code: 'FIN202', type: 'Core' },
          { name: 'E-Commerce Concepts', code: 'ECM201', type: 'Skill' }
        ]
      },
      {
        semester: 5,
        credits: 22,
        subjects: [
          { name: 'Goods & Services Tax (GST) & Customs', code: 'TAX301', type: 'Core' },
          { name: 'Management Accounting & Control', code: 'BCM301', type: 'Core' },
          { name: 'Financial Management', code: 'FIN301', type: 'Core' },
          { name: 'Elective Specialization I', code: 'ELE301', type: 'Elective' }
        ]
      },
      {
        semester: 6,
        credits: 20,
        subjects: [
          { name: 'International Business & Trade Finance', code: 'IBN301', type: 'Core' },
          { name: 'Investment Analysis & Portfolio Management', code: 'FIN302', type: 'Core' },
          { name: 'Comprehensive Project & Viva', code: 'PRJ301', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'ba',
    code: 'BA',
    name: 'Online Bachelor of Arts (BA)',
    shortDescription: 'A flexible 3-year humanities degree with core study in English, Political Science, History, and Sociology. Widely preferred by civil service and government examination aspirants.',
    category: 'ug',
    level: 'UG Degree',
    duration: '3 Years (6 Sems)',
    semestersCount: 6,
    perSemFee: 19000,
    totalFee: 114000,
    originalTotalFee: 120000,
    credits: 124,
    eligibility: 'Class 10 and Class 12 from a recognized board. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.0 - 4.5 LPA',
      highestPackage: 'Up to 6.0 LPA',
      roles: ['Civil Services Aspirant', 'Content Strategist', 'PR Associate', 'Editorial Assistant', 'Public Policy Analyst']
    },
    specializations: ['General Core', 'English Literature', 'History', 'Sociology', 'Political Science', 'Economics'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 20,
        subjects: [
          { name: 'Core Discipline I (Microeconomics / History of India)', code: 'ECO101', type: 'Core' },
          { name: 'Core Discipline II (Political Theory / English Lit)', code: 'POL101', type: 'Core' },
          { name: 'Environmental Sciences', code: 'ECHE110', type: 'Ability' },
          { name: 'Intro to English Communication', code: 'EENG139', type: 'Skill' }
        ]
      },
      {
        semester: 2,
        credits: 20,
        subjects: [
          { name: 'Core Discipline I (Intermediate Theoretical Frameworks)', code: 'ECO102', type: 'Core' },
          { name: 'Core Discipline II (Applied Sociological Concepts)', code: 'SOC102', type: 'Core' },
          { name: 'Advanced English Communication', code: 'EENG140', type: 'Skill' },
          { name: 'Generic Elective I (Modern Computing & Logic)', code: 'CAP101', type: 'Elective' }
        ]
      },
      {
        semester: 3,
        credits: 20,
        subjects: [
          { name: 'Core Discipline I (Macroeconomics / Indian Constitution)', code: 'POL201', type: 'Core' },
          { name: 'Core Discipline II (World Literature / Social Movements)', code: 'ENG201', type: 'Core' },
          { name: 'Community Development Project', code: 'ESSC102', type: 'Practical' },
          { name: 'Ethics, Values & Digital Awareness', code: 'ETH201', type: 'Value' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Core Discipline I (Public Administration & Policy)', code: 'PAD202', type: 'Core' },
          { name: 'Core Discipline II (Contemporary Global History)', code: 'HIS202', type: 'Core' },
          { name: 'SEC-I: Content Writing & Digital Journalism', code: 'SEC201', type: 'Skill' },
          { name: 'SEC-II: Digital Media & Culture', code: 'SEC202', type: 'Skill' }
        ]
      },
      {
        semester: 5,
        credits: 22,
        subjects: [
          { name: 'Core Discipline I (Advanced Development Economics)', code: 'ECO301', type: 'Core' },
          { name: 'Core Discipline II (International Relations & Geopolitics)', code: 'POL301', type: 'Core' },
          { name: 'SEC-III: Statistical Analysis in Social Sciences', code: 'SEC301', type: 'Skill' },
          { name: 'Term Paper Research Work', code: 'ESSC303', type: 'Research' }
        ]
      },
      {
        semester: 6,
        credits: 20,
        subjects: [
          { name: 'Core Discipline I (Applied Indian Political Thought)', code: 'POL302', type: 'Core' },
          { name: 'Core Discipline II (Comparative Cultural Studies)', code: 'SOC302', type: 'Core' },
          { name: 'SEC-IV: Public Relations & Media Ethics', code: 'SEC302', type: 'Skill' },
          { name: 'Capstone Major Project', code: 'ESSC304', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'mcom',
    code: 'M.Com',
    name: 'Online Master of Commerce (M.Com)',
    shortDescription: 'A 2-year postgraduate commerce degree covering corporate financial reporting, investment analysis, taxation, and international trade for careers in banking, audit, and higher education.',
    category: 'pg',
    level: 'PG Degree',
    duration: '2 Years (4 Sems)',
    semestersCount: 4,
    perSemFee: 25000,
    totalFee: 100000,
    originalTotalFee: 110000,
    credits: 92,
    eligibility: 'Bachelor s degree in Commerce or related field. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.5 - 5.2 LPA',
      highestPackage: 'Up to 7.5 LPA',
      roles: ['Tax Consultant', 'Senior Financial Analyst', 'Audit Associate', 'Treasury Manager', 'Account Specialist']
    },
    specializations: ['Corporate Accounting & Auditing', 'International Finance & Taxation', 'Banking & Insurance Services'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Advanced Financial Accounting & Reporting', code: 'COM101', type: 'Core' },
          { name: 'Managerial Economics & Policy', code: 'COM102', type: 'Core' },
          { name: 'Statistical Analysis for Business Decision', code: 'COM103', type: 'Core' },
          { name: 'Business Environment & Corporate Law', code: 'COM104', type: 'Core' }
        ]
      },
      {
        semester: 2,
        credits: 24,
        subjects: [
          { name: 'Advanced Corporate Accounting', code: 'COM201', type: 'Core' },
          { name: 'Financial Management & Investment Banking', code: 'COM202', type: 'Core' },
          { name: 'Corporate Tax Planning & Management', code: 'COM203', type: 'Core' },
          { name: 'Research Methodology in Commerce', code: 'COM204', type: 'Core' }
        ]
      },
      {
        semester: 3,
        credits: 24,
        subjects: [
          { name: 'Security Analysis & Portfolio Management', code: 'COM301', type: 'Core' },
          { name: 'International Accounting Standards (IFRS)', code: 'COM302', type: 'Core' },
          { name: 'Specialization Elective I', code: 'COMS303', type: 'Specialization' },
          { name: 'Financial Modeling Project', code: 'PRJ303', type: 'Practical' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Auditing Policies & Forensics', code: 'COM401', type: 'Core' },
          { name: 'Specialization Elective II', code: 'COMS402', type: 'Specialization' },
          { name: 'Dissertation & Comprehensive Viva', code: 'DIS402', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'msc-math',
    code: 'M.Sc Math',
    name: 'Online Master of Science (M.Sc Mathematics)',
    shortDescription: 'A rigorous 2-year master s program in advanced calculus, real analysis, differential equations, and computational math for roles in data analytics, actuarial science, and lectureship.',
    category: 'pg',
    level: 'PG Degree',
    duration: '2 Years (4 Sems)',
    semestersCount: 4,
    perSemFee: 18666,
    totalFee: 74666,
    originalTotalFee: 80000,
    credits: 90,
    eligibility: 'Bachelor s degree with Mathematics. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.8 - 5.5 LPA',
      highestPackage: 'Up to 8.0 LPA',
      roles: ['Quantitative Analyst', 'Data Scientist', 'Statistical Researcher', 'Mathematics Professor/Lecturer', 'Actuarial Associate']
    },
    specializations: ['Applied Mathematics', 'Computational Algorithms', 'Pure Mathematics & Algebra'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Advanced Abstract Algebra', code: 'MTH501', type: 'Core' },
          { name: 'Real Analysis & Metric Spaces', code: 'MTH502', type: 'Core' },
          { name: 'Ordinary Differential Equations', code: 'MTH503', type: 'Core' },
          { name: 'Numerical Analysis & Programming', code: 'MTH504', type: 'Core' }
        ]
      },
      {
        semester: 2,
        credits: 22,
        subjects: [
          { name: 'Complex Analysis', code: 'MTH505', type: 'Core' },
          { name: 'Topology & Functional Analysis', code: 'MTH506', type: 'Core' },
          { name: 'Partial Differential Equations', code: 'MTH507', type: 'Core' },
          { name: 'Mathematical Statistics & Probability', code: 'MTH508', type: 'Core' }
        ]
      },
      {
        semester: 3,
        credits: 24,
        subjects: [
          { name: 'Fluid Dynamics & Continuum Mechanics', code: 'MTH601', type: 'Core' },
          { name: 'Operations Research & Optimization', code: 'MTH602', type: 'Core' },
          { name: 'Computational Mathematics with Python', code: 'MTH603', type: 'Lab' },
          { name: 'Elective Track I', code: 'MTHS604', type: 'Specialization' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Differential Geometry & Tensor Calculus', code: 'MTH605', type: 'Core' },
          { name: 'Elective Track II', code: 'MTHS606', type: 'Specialization' },
          { name: 'Master s Dissertation in Applied Math', code: 'DIS601', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'msc-eco',
    code: 'M.Sc Eco',
    name: 'Online Master of Science (M.Sc Economics)',
    shortDescription: 'A 2-year postgraduate program covering econometric modeling, financial systems, public policy, and market analysis for economic analyst and consulting roles.',
    category: 'pg',
    level: 'PG Degree',
    duration: '2 Years (4 Sems)',
    semestersCount: 4,
    perSemFee: 19000,
    totalFee: 76000,
    originalTotalFee: 80000,
    credits: 90,
    eligibility: 'Bachelor s degree in Economics or related field. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 4.0 - 6.0 LPA',
      highestPackage: 'Up to 8.5 LPA',
      roles: ['Economic Research Analyst', 'Policy Consultant', 'Risk Analyst', 'Banking Strategist']
    },
    specializations: ['Applied Econometrics', 'Financial Economics', 'Development & Public Policy'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Advanced Microeconomics', code: 'ECO501', type: 'Core' },
          { name: 'Mathematical Methods for Economics', code: 'ECO502', type: 'Core' },
          { name: 'Statistical Foundations', code: 'ECO503', type: 'Core' },
          { name: 'Indian Economic Development', code: 'ECO504', type: 'Core' }
        ]
      },
      {
        semester: 2,
        credits: 22,
        subjects: [
          { name: 'Advanced Macroeconomics', code: 'ECO505', type: 'Core' },
          { name: 'Econometric Methods & Python', code: 'ECO506', type: 'Lab' },
          { name: 'Public Finance & Fiscal Policy', code: 'ECO507', type: 'Core' },
          { name: 'International Trade Theory', code: 'ECO508', type: 'Core' }
        ]
      },
      {
        semester: 3,
        credits: 24,
        subjects: [
          { name: 'Applied Time Series Econometrics', code: 'ECO601', type: 'Core' },
          { name: 'Financial Economics & Banking', code: 'ECO602', type: 'Core' },
          { name: 'Elective Track I', code: 'ECOS603', type: 'Specialization' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Environmental & Resource Economics', code: 'ECO604', type: 'Core' },
          { name: 'Dissertation in Economic Modeling', code: 'DIS602', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'ma',
    code: 'MA',
    name: 'Online Master of Arts (MA)',
    shortDescription: 'A 2-year master s degree in English Literature, Political Science, History, or Sociology. Designed for aspiring educators, researchers, content strategists, and government exam candidates.',
    category: 'pg',
    level: 'PG Degree',
    duration: '2 Years (4 Sems)',
    semestersCount: 4,
    perSemFee: 19000,
    totalFee: 76000,
    originalTotalFee: 80000,
    credits: 88,
    eligibility: 'Bachelor s degree in relevant discipline. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 3.2 - 4.8 LPA',
      highestPackage: 'Up to 6.5 LPA',
      roles: ['Research Associate', 'Higher Secondary Educator', 'Content Editor', 'Policy Think Tank Analyst', 'Publishing Manager']
    },
    specializations: ['English Literature', 'Political Science', 'History', 'Sociology'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Literary Criticism & Theory / Advanced Political Thought', code: 'MA101', type: 'Core' },
          { name: 'Classical Foundations & Historical Methodology', code: 'MA102', type: 'Core' },
          { name: 'Research Methodologies in Humanities', code: 'MA103', type: 'Core' },
          { name: 'Elective Discipline I', code: 'MAS104', type: 'Elective' }
        ]
      },
      {
        semester: 2,
        credits: 22,
        subjects: [
          { name: 'Modern & Post-Modern Thought', code: 'MA201', type: 'Core' },
          { name: 'Comparative World Literature / Macroeconomic Policy', code: 'MA202', type: 'Core' },
          { name: 'Cultural Studies & Gender Perspectives', code: 'MA203', type: 'Core' },
          { name: 'Elective Discipline II', code: 'MAS204', type: 'Elective' }
        ]
      },
      {
        semester: 3,
        credits: 22,
        subjects: [
          { name: 'Indian Literature in Translation / Public Administration', code: 'MA301', type: 'Core' },
          { name: 'Post-Colonial Discourses & Subaltern Studies', code: 'MA302', type: 'Core' },
          { name: 'Term Paper Research Project', code: 'PRJ303', type: 'Practical' }
        ]
      },
      {
        semester: 4,
        credits: 22,
        subjects: [
          { name: 'Contemporary Critical Trends & Media Studies', code: 'MA401', type: 'Core' },
          { name: 'Master s Thesis & Defense', code: 'DIS404', type: 'Capstone' }
        ]
      }
    ]
  },
  {
    id: 'diploma',
    code: 'Diploma',
    name: 'Online Diploma (Business Administration / CA)',
    shortDescription: 'A fast-track 1-year university diploma in Computer Applications or Business Administration. Complete in just 2 semesters with affordable semester installment fees.',
    category: 'diploma',
    level: 'Diploma',
    duration: '1 Year (2 Sems)',
    semestersCount: 2,
    perSemFee: 23000,
    totalFee: 46000,
    originalTotalFee: 50000,
    credits: 44,
    eligibility: 'Class 10 and Class 12 from a recognized board or equivalent. Selection is merit-based.',
    careerProspects: {
      avgPackage: 'Around 2.8 - 4.0 LPA',
      highestPackage: 'Up to 5.5 LPA',
      roles: ['Operations Executive', 'Customer Relationship Associate', 'Store Manager', 'Administrative Assistant']
    },
    specializations: ['Business Administration', 'Computer Applications', 'Retail Operations'],
    brochurePdfName: 'https://images.degreefyd.com//lpu-online-brochure.pdf',
    syllabus: [
      {
        semester: 1,
        credits: 22,
        subjects: [
          { name: 'Fundamentals of Management', code: 'DIP101', type: 'Core' },
          { name: 'Basic Business Accounting & Invoicing', code: 'DIP102', type: 'Core' },
          { name: 'Office Automation & Spreadsheet Skills', code: 'DIP103', type: 'Practical' },
          { name: 'Business Communication Essentials', code: 'DIP104', type: 'Skill' }
        ]
      },
      {
        semester: 2,
        credits: 22,
        subjects: [
          { name: 'Sales & Customer Relationship Operations', code: 'DIP201', type: 'Core' },
          { name: 'Retail & Inventory Management Basics', code: 'DIP202', type: 'Core' },
          { name: 'Practical Capstone Project & Viva', code: 'DIP203', type: 'Capstone' }
        ]
      }
    ]
  }
];
