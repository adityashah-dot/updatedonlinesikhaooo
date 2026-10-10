export type TabType =
  | 'home'
  | 'courses'
  | 'overview'
  | 'admission'
  | 'scholarships'
  | 'universities'
  | 'degrees'
  | 'compare'
  | 'nirf'
  | 'lms';

export type CourseCategory = 'all' | 'ug' | 'pg' | 'diploma';

export interface Course {
  id: string;
  code: string;
  name: string;
  shortDescription: string;
  category: 'ug' | 'pg' | 'diploma';
  level: string; // 'UG Degree' | 'PG Degree' | 'Diploma'
  duration: string; // '3 Years (6 Sems)'
  semestersCount: number;
  perSemFee: number;
  totalFee: number;
  originalTotalFee?: number;
  highlightBadge?: string;
  credits: number;
  eligibility: string;
  careerProspects: {
    avgPackage: string;
    highestPackage: string;
    roles: string[];
  };
  syllabus: {
    semester: number;
    credits: number;
    subjects: { name: string; code?: string; type?: string }[];
  }[];
  specializations?: string[];
  brochurePdfName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  avatarText: string;
  quote: string;
  rating: number;
  verifiedStatus?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
