import { describe, expect, it } from 'vitest';
import { filterProjects, parseProjects } from './useProjects';
import type { Project } from '../types/project';

const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'Dashboard BI',
    category: 'Business Intelligence',
    description: 'Seguimiento de indicadores.',
    url: 'https://example.com/dashboard',
    tags: ['power bi', 'sql'],
  },
  {
    id: 2,
    title: 'Portal React',
    category: 'Frontend',
    description: 'Aplicación con catálogo JSON.',
    url: 'https://example.com/portal',
    tags: ['react', 'typescript'],
  },
];

describe('project catalog', () => {
  it('filters by category tag', () => {
    const result = filterProjects(sampleProjects, 'Frontend');

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it('rejects duplicated project ids', () => {
    expect(() => parseProjects([sampleProjects[0], sampleProjects[0]])).toThrow(/duplicado/);
  });
});
