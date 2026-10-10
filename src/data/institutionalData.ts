import { Testimonial, FAQItem } from '../types';
import { DEGREEFYD_LPU_API } from './apiData';

export const INSTITUTION_HIGHLIGHTS = {
  universityName: DEGREEFYD_LPU_API.title,
  division: DEGREEFYD_LPU_API.subtitle,
  establishmentYear: DEGREEFYD_LPU_API.established,
  campusLocation: DEGREEFYD_LPU_API.location,
  learningMode: '100% Fully Online with Live & Recorded Sessions (LPU e-Connect)',
  recognitions: 'UGC-DEB Entitled, AICTE Approved, NAAC A++ (Score 3.68), AIU, WES Verified',
  nirfRank: `Ranked #${DEGREEFYD_LPU_API.nirfRanking} Overall in India`,
  lmsPlatform: 'LPU e-Connect (Web & Mobile App)',
  helpline: '+91 1800-889-4422 / +91 94849 58355',
  email: 'helpdesk@onlinesiksha.com',
  address: 'Jalandhar Delhi G.T. Road (NH-44), Phagwara, Punjab 144411'
};

export const PLACEMENT_STATS = {
  supportRate: DEGREEFYD_LPU_API.placements.stats.placementRate,
  highestPackage: DEGREEFYD_LPU_API.placements.stats.highestPackage,
  avgPackage: DEGREEFYD_LPU_API.placements.stats.avgPackage,
  top10Avg: '5.1 LPA',
  partnersCount: DEGREEFYD_LPU_API.placements.stats.hiringPartners,
  internshipsCount: DEGREEFYD_LPU_API.placements.stats.internshipsCount,
  exampleOffers: DEGREEFYD_LPU_API.placements.stats.exampleOffers,
  partners: DEGREEFYD_LPU_API.placements.topRecruiters.map(name => ({
    name,
    domain: 'Hiring Partner'
  }))
};

export const TESTIMONIALS_DATA: Testimonial[] = DEGREEFYD_LPU_API.testimonials.map((t, idx) => ({
  id: String(idx + 1),
  name: t.studentName,
  role: t.profession || 'Enrolled Student',
  batch: 'Online Batch 2024-26',
  avatarText: t.avatar,
  quote: `"${t.text}"`,
  rating: t.rating,
  verifiedStatus: 'Verified Student'
}));

export const FAQS_DATA: FAQItem[] = DEGREEFYD_LPU_API.faqs.map((f, idx) => ({
  id: `faq-${idx + 1}`,
  question: f.question,
  answer: f.answer
}));

export const ADMISSION_TIMELINE_DATA = DEGREEFYD_LPU_API.importantDates.map((item) => ({
  event: item.event,
  timelines: item.date,
  mode: item.mode,
  status: item.status,
  statusClass: item.status === 'Active' ? 'bg-[#d5e3ff] text-[#004689]' : item.status === 'Open' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-[#e7eeff] text-[#115eaf]'
}));
