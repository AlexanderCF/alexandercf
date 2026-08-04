import { categories, getProjectCount, type CategoryFilterValue } from '../hooks/useProjects';

interface CategoryFilterProps {
  selected: CategoryFilterValue;
  onChange: (category: CategoryFilterValue) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="category-filter" aria-label="Filtrar proyectos por categoría">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={selected === category ? 'category-filter__item category-filter__item--active' : 'category-filter__item'}
          onClick={() => onChange(category)}
        >
          <span>{category}</span>
          <strong>{getProjectCount(category)}</strong>
        </button>
      ))}
    </div>
  );
}
