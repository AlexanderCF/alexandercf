import { BarChart3, Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Perfil', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ir al inicio">
        <img src="/img/profile/foto_perfil.webp" alt="AlexanderCF" className="brand__avatar" />
        <span className="brand__text">AlexanderCF</span>
      </a>

      <button
        className="icon-button site-header__menu"
        type="button"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="site-nav__social" aria-label="Perfiles">
          <a href="https://github.com/AlexanderCF" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a href="https://www.linkedin.com/in/alexandercf/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <span className="site-nav__marker" aria-hidden="true">
            <BarChart3 size={19} />
          </span>
        </div>
      </nav>
    </header>
  );
}
