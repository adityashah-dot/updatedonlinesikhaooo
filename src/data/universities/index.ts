import { UniversityData } from '../../types/university';
import { LPU_UNIVERSITY_DATA } from './lpu';
import { AMITY_UNIVERSITY_DATA } from './amity';
import { CU_UNIVERSITY_DATA } from './cu';
import { MANIPAL_UNIVERSITY_DATA } from './manipal';
import { JAIN_UNIVERSITY_DATA } from './jain';
import { UPES_UNIVERSITY_DATA } from './upes';

export const ALL_UNIVERSITIES: UniversityData[] = [
  LPU_UNIVERSITY_DATA,
  AMITY_UNIVERSITY_DATA,
  CU_UNIVERSITY_DATA,
  MANIPAL_UNIVERSITY_DATA,
  JAIN_UNIVERSITY_DATA,
  UPES_UNIVERSITY_DATA,
];

const SLUG_MAP: Record<string, string> = {
  // LPU
  lpu: 'lpu-online',
  'lpu-online': 'lpu-online',
  'lovely-professional-university': 'lpu-online',
  'lovely-professional-university-online': 'lpu-online',
  // Amity
  amity: 'amity-online',
  'amity-online': 'amity-online',
  'amity-university-online': 'amity-online',
  'amity-university': 'amity-online',
  // Chandigarh University
  cu: 'cu-online',
  'cu-online': 'cu-online',
  'chandigarh-university': 'cu-online',
  'chandigarh-university-online': 'cu-online',
  // Manipal
  manipal: 'manipal-online',
  'manipal-online': 'manipal-online',
  'online-manipal': 'manipal-online',
  'manipal-university-jaipur': 'manipal-online',
  // Jain
  jain: 'jain-online',
  'jain-online': 'jain-online',
  'jain-university': 'jain-online',
  'jain-university-online': 'jain-online',
  // UPES
  upes: 'upes-online',
  'upes-online': 'upes-online',
  'university-of-petroleum-and-energy-studies': 'upes-online',
};

export function getUniversityBySlug(slug: string): UniversityData | undefined {
  const normalized = (slug || '').toLowerCase().trim();
  const canonicalId = SLUG_MAP[normalized] || normalized;
  return ALL_UNIVERSITIES.find((u) => u.id === canonicalId || u.slug === canonicalId);
}

export function getUniversityById(id: string): UniversityData | undefined {
  return ALL_UNIVERSITIES.find((u) => u.id === id);
}

export function getRelatedUniversities(currentId: string, limit = 3): UniversityData[] {
  const current = getUniversityById(currentId);
  if (!current) return ALL_UNIVERSITIES.slice(0, limit);
  const related = current.relatedUniversityIds
    .map((id) => getUniversityById(id))
    .filter((u): u is UniversityData => Boolean(u));
  if (related.length >= limit) return related.slice(0, limit);
  // Fallback to other universities
  const others = ALL_UNIVERSITIES.filter((u) => u.id !== currentId && !related.some((r) => r.id === u.id));
  return [...related, ...others].slice(0, limit);
}
