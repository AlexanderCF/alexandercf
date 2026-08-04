import { useEffect, useRef, useState } from 'react';
import type { MouseEvent, PointerEvent } from 'react';
import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

const REPEAT_COUNT = 6;
const isInteractiveElement = (target: EventTarget | null) =>
  target instanceof Element && Boolean(target.closest('a, button'));

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0, moved: 0, suppressNextClick: false });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || projects.length === 0) return;

    const segmentWidth = carousel.scrollWidth / REPEAT_COUNT;
    carousel.scrollLeft = segmentWidth * 2;
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No hay proyectos con ese filtro</h3>
        <p>Prueba con Power BI, React, SQL, frontend o data analytics.</p>
      </div>
    );
  }

  const carouselProjects = Array.from({ length: REPEAT_COUNT }, () => projects).flat();

  const wrapCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const segmentWidth = carousel.scrollWidth / REPEAT_COUNT;
    const minScroll = segmentWidth;
    const maxScroll = segmentWidth * (REPEAT_COUNT - 2);

    if (carousel.scrollLeft < minScroll) {
      carousel.scrollLeft += segmentWidth * 2;
      dragState.current.scrollLeft += segmentWidth * 2;
    }

    if (carousel.scrollLeft > maxScroll) {
      carousel.scrollLeft -= segmentWidth * 2;
      dragState.current.scrollLeft -= segmentWidth * 2;
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel || isInteractiveElement(event.target)) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
      moved: 0,
      suppressNextClick: false,
    };
    carousel.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel || !dragState.current.isDragging) return;

    const delta = event.clientX - dragState.current.startX;
    dragState.current.moved = Math.max(dragState.current.moved, Math.abs(delta));
    carousel.scrollLeft = dragState.current.scrollLeft - delta;
    wrapCarouselScroll();
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel || !dragState.current.isDragging) return;

    dragState.current.isDragging = false;
    dragState.current.suppressNextClick = dragState.current.moved > 6;
    carousel.releasePointerCapture(event.pointerId);
    setIsDragging(false);
  };

  const preventClickAfterDrag = (event: MouseEvent<HTMLDivElement>) => {
    if (dragState.current.suppressNextClick) {
      event.preventDefault();
      event.stopPropagation();
      dragState.current.moved = 0;
      dragState.current.suppressNextClick = false;
    }
  };

  return (
    <div
      ref={carouselRef}
      className={isDragging ? 'project-carousel project-carousel--dragging' : 'project-carousel'}
      aria-label="Carrusel de proyectos"
      onClickCapture={preventClickAfterDrag}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={stopDragging}
      onScroll={wrapCarouselScroll}
    >
      <div className="project-grid">
        {carouselProjects.map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
}
