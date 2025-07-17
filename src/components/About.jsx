import React, { useState } from 'react';
import '../styles/Aboutt.css';

const About = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: 'Nuestra Misión',
      content: 'Somos una empresa comprometida con la excelencia, enfocados en brindar soluciones innovadoras que generen un impacto positivo en nuestros clientes y en la comunidad.'
    },
    {
      title: 'Nuestra Visión',
      content: 'Ser reconocidos como líderes en nuestro sector, distinguidos por nuestra capacidad de innovación y por las relaciones duraderas que construimos con nuestros clientes.'
    },
    {
      title: 'Nuestros Valores',
      content: 'Integridad, pasión por lo que hacemos, trabajo en equipo y mejora continua son los principios que guían cada una de nuestras acciones.'
    },
    {
      title: 'Qué Nos Diferencia',
      content: 'Nuestro enfoque personalizado, la calidad de nuestros servicios y nuestro compromiso con resultados medibles nos distingue en el mercado.'
    }
  ];

  const toggleMainAccordion = () => {
    setIsMainOpen(!isMainOpen);
    if (!isMainOpen) {
      setActiveIndex(null); // Reset sub items when closing main
    }
  };

  const toggleSubAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="main-accordion-item">
        <button
          className={`main-accordion-button ${isMainOpen ? 'active' : ''}`}
          onClick={toggleMainAccordion}
          aria-expanded={isMainOpen}
        >
          ¿Querés saber más de nosotros?
        </button>
        
        {isMainOpen && (
          <div className="sub-accordion">
            {accordionData.map((item, index) => (
              <div key={index} className="sub-accordion-item ">
                <button
                  className={`sub-accordion-button ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleSubAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  {item.title}
                  <span className="sub-accordion-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="sub-accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
