import { Calendar, CheckCircle2, Clock, Github, Linkedin } from 'lucide-react';

const services = [
  'Dashboards interactivos',
  'Automatizaciones',
  'Desarrollo web para negocios',
  'Análisis de datos para decisiones',
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section__inner contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">¿Necesitas convertir tus datos en decisiones?</h2>
          <p>
            Ayudo a empresas y profesionales a transformar datos complejos en información clara y accionable. Diseño
            dashboards, automatizo procesos y desarrollo soluciones web para negocios que facilitan el análisis, la
            comunicación y la toma de decisiones.
          </p>

          <ul className="contact-services" aria-label="Servicios principales">
            {services.map((service) => (
              <li key={service}>
                <CheckCircle2 size={22} />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-panel">
          <h3>Cuéntame qué necesitas resolver</h3>
          <p>
            Cuéntame sobre tu proyecto o desafío y te responderé a la brevedad para agendar una reunión sin compromiso.
          </p>

          <div className="contact-actions">
            <a className="button button--primary contact-actions__main" href="mailto:alexanderfranciac@gmail.com">
              <Calendar size={20} />
              Solicitar una reunión
            </a>
            <a className="button button--secondary" href="https://www.linkedin.com/in/alexandercf/" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="button button--secondary" href="https://github.com/AlexanderCF" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>

          <p className="contact-availability">
            <Clock size={18} />
            Disponible para proyectos freelance y consultoría
          </p>
        </div>
      </div>
    </section>
  );
}
