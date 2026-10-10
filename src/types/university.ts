export interface UniversityHighlight {
  label: string;
  value: string;
  category?: 'Institution' | 'Academic' | 'Accreditations' | 'Technology' | 'Evaluation' | 'Info';
}

export interface UniversityCourseItem {
  id: string;
  name: string;
  code?: string;
  level: 'UG' | 'PG' | 'Diploma' | 'Certificate';
  duration: string;
  feePerSemester?: string;
  totalFee: string;
  specializationsCount?: number;
  specializations: string[];
  eligibility: string;
  description?: string;
  careerProspects?: {
    avgPackage?: string;
    highestPackage?: string;
    roles?: string[];
  };
  syllabus?: {
    semester: number;
    subjects: { name: string; code?: string; type?: string }[];
  }[];
}

export interface UniversityAdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface UniversityEligibilityRow {
  course: string;
  eligibility: string;
  duration: string;
  feeSem?: string;
  totalFee: string;
  selection?: string;
}

export interface UniversityScholarship {
  title: string;
  benefit: string;
  description: string;
  tag?: string;
}

export interface UniversityPlacementMetric {
  label: string;
  value: string;
  note?: string;
}

export interface UniversityRecruiter {
  name: string;
  logoUrl?: string;
}

export interface UniversityRankingRow {
  authority: string;
  status: string;
  description?: string;
}

export interface UniversityImportantDate {
  event: string;
  date: string;
  status: 'Active' | 'Open' | 'Upcoming' | 'Rolling' | 'Mandatory';
  mode?: string;
}

export interface UniversityFaq {
  question: string;
  answer: string;
  category?: string;
}

export interface UniversityData {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  established: string;
  location: string;
  type?: string;
  officialWebsite?: string;
  rating?: string;
  reviewsCount?: number;
  nirfRanking?: string;
  naacGrade?: string;
  approvals: string[];
  verifiedYear?: string;
  logoImage?: string;
  backgroundImage?: string;
  brochureUrl?: string;
  sampleDegreeImage?: string;
  quickStats: {
    feeRange: string;
    duration: string;
    mode: string;
    placementRate: string;
    highestPackage?: string;
    avgPackage?: string;
    emiStarting?: string;
  };
  overview: {
    introParagraphs: string[];
    highlightsTable: UniversityHighlight[];
    highlightsSummary?: string;
    latestNews?: {
      title: string;
      description: string;
      date: string;
    };
  };
  courses: UniversityCourseItem[];
  admissions: {
    intro: string;
    steps: UniversityAdmissionStep[];
    eligibilityMatrix: UniversityEligibilityRow[];
    requiredDocuments?: string[];
    selectionProcess?: string;
  };
  feesAndFinancing: {
    intro: string;
    emiOptionsDescription?: string;
    scholarships: UniversityScholarship[];
    scholarshipsNote?: string;
  };
  placements: {
    intro: string;
    note?: string;
    metrics: UniversityPlacementMetric[];
    supportServices: string[];
    recruiters: UniversityRecruiter[];
  };
  rankingsAndAccreditations: {
    intro: string;
    table: UniversityRankingRow[];
  };
  campusAndLms: {
    intro: string;
    lmsName: string;
    lmsFeatures: string[];
    examPattern: {
      title: string;
      description: string;
    }[];
    campusDetails?: {
      location: string;
      connectivity: { mode: string; detail: string }[];
    };
    sampleDegree?: {
      title: string;
      description: string;
      imageUrl: string;
    };
  };
  importantDates: {
    note?: string;
    items: UniversityImportantDate[];
  };
  faqs: UniversityFaq[];
  relatedUniversityIds: string[];
}
