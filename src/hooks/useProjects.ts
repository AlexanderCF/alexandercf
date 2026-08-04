import { useMemo } from 'react';
import projectsData from '../data/projects.json';
import type { Project } from '../types/project';

export type CategoryFilterValue = 'Todos' | string;

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const isHttpUrl = (value: unknown): value is string => {
  if (typeof value !== 'string') return false;

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export function parseProjects(value: unknown): Project[] {
  if (!Array.isArray(value)) {
    throw new Error('El catálogo de proyectos debe ser un arreglo.');
  }

  const ids = new Set<number>();

  return value.map((item, index) => {
    if (typeof item !== 'object' || item === null) {
      throw new Error(`El proyecto en la posición ${index + 1} no es un objeto válido.`);
    }

    const candidate = item as Record<string, unknown>;
    const id = candidate.id;

    if (!Number.isInteger(id) || (id as number) <= 0) {
      throw new Error(`El proyecto en la posición ${index + 1} tiene un id inválido.`);
    }
    if (ids.has(id as number)) {
      throw new Error(`El id de proyecto ${id as number} está duplicado.`);
    }
    ids.add(id as number);

    if (!isNonEmptyString(candidate.title)) throw new Error(`El proyecto ${id as number} no tiene título.`);
    if (!isNonEmptyString(candidate.category)) {
      throw new Error(`El proyecto ${id as number} tiene una categoría inválida.`);
    }
    if (!isNonEmptyString(candidate.description)) {
      throw new Error(`El proyecto ${id as number} no tiene descripción.`);
    }
    if (!isHttpUrl(candidate.url)) throw new Error(`El proyecto ${id as number} no tiene una URL válida.`);
    if (
      !Array.isArray(candidate.tags) ||
      candidate.tags.length === 0 ||
      !candidate.tags.every(isNonEmptyString)
    ) {
      throw new Error(`El proyecto ${id as number} debe incluir tags válidos.`);
    }

    return {
      id: id as number,
      title: candidate.title,
      category: candidate.category,
      description: candidate.description,
      url: candidate.url,
      tags: candidate.tags,
    };
  });
}

const catalogProjects = parseProjects(projectsData);
const projectCategories = Array.from(new Set(catalogProjects.map((project) => project.category)));

export const categories: CategoryFilterValue[] = ['Todos', ...projectCategories];

export function filterProjects(projectList: readonly Project[], selectedCategory: CategoryFilterValue) {
  return projectList.filter((project) => selectedCategory === 'Todos' || project.category === selectedCategory);
}

export function useProjects(selectedCategory: CategoryFilterValue) {
  return useMemo(() => filterProjects(catalogProjects, selectedCategory), [selectedCategory]);
}

export function getProjectCount(category: CategoryFilterValue) {
  if (category === 'Todos') return catalogProjects.length;
  return catalogProjects.filter((project) => project.category === category).length;
}
