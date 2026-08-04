import { useMemo, useState } from 'react';
import About from './components/About';
import CategoryFilter from './components/CategoryFilter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import { type CategoryFilterValue, useProjects } from './hooks/useProjects';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterValue>('Todos');
  const projects = useProjects(selectedCategory);

  const summary = useMemo(() => {
    const projectText = projects.length === 1 ? 'proyecto visible' : 'proyectos visibles';
    return `${projects.length} ${projectText}`;
  }, [projects.length]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section__inner">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Casos de éxitos</p>
                <h2 id="projects-title">Mis Proyectos</h2>
              </div>
              <p className="section-heading__summary" aria-live="polite">
                {summary}
              </p>
            </div>
            <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
            <ProjectGrid projects={projects} />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
