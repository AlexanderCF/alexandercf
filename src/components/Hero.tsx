import { ArrowDown, BarChart3, Database, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Data analyst + frontend developer</p>
          <h1>Alexander Jean Pierre Cubas Francia</h1>
          <p className="hero__lead">
            La capacidad de contar historias con datos radica en eliminar el ruido y enfocar la atención de las
            personas en los hallazgos clave.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Ver proyectos
              <ArrowDown size={18} />
            </a>
            <a className="button button--secondary" href="#contact">
              Contactar
            </a>
          </div>
          <dl className="hero__stats" aria-label="Especialidades">
            <div>
              <dt>
                <BarChart3 size={18} />
                BI
              </dt>
              <dd>Power BI, DAX y storytelling</dd>
            </div>
            <div>
              <dt>
                <Database size={18} />
                Datos
              </dt>
              <dd>SQL, Python y automatización</dd>
            </div>
            <div>
              <dt>
                <LineChart size={18} />
                Frontend
              </dt>
              <dd>React, TypeScript y UX</dd>
            </div>
          </dl>
        </div>
        <div className="hero__visual">
          <img src="img/illustration/Data report-pana_6096BA.webp" alt="Ilustración de análisis de datos" />
        </div>
      </div>
    </section>
  );
}
