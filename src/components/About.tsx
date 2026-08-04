const skills = [
  'Power BI',
  'DAX',
  'SQL',
  'Python',
  'SSIS',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Figma',
  'Git',
  'GitHub',
  'Machine Learning',
  'UX',
];

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section__inner about-layout">
        <div className="about-copy">
          <p className="eyebrow">Perfil profesional</p>
          <h2 id="about-title">¡Conóceme!</h2>
          <p>
            Me apasionan los datos, la tecnología y la oportunidad de crear experiencias digitales que realmente generen
            un impacto. A lo largo de mi carrera, he desarrollado habilidades que combinan análisis de datos, desarrollo
            frontend y diseño UX, lo que me permite construir soluciones intuitivas, funcionales y orientadas a
            resultados. Disfruto descubrir información valiosa a partir de los datos, automatizar procesos y convertir
            necesidades de negocio en productos innovadores que apoyen la toma de decisiones. Siempre busco ir un paso
            más allá explorando nuevas tecnologías y asegurándome de que cada proyecto en el que participo aporte valor
            real y deje una huella positiva en las organizaciones con las que trabajo.
          </p>
        </div>
        <div className="capability-panel" aria-label="Capacidades principales">
          <div className="capability-panel__top">
            <img src="img/illustration/Soft skills-bro_6096BA.webp" alt="Ilustración de habilidades" />
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
