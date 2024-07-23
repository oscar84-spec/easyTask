import React from "react";

const TestimonialsCards = ({ testimonio }) => {
  const { icon, nombre, proffesion, testi } = testimonio;
  return (
    <div className='testimonials-container-card'>
      <div className='testimonials-card__name-container'>
        <div className='testimonials-card__icon'>{icon}</div>
        <div className='testimonials-card__name-name'>
          <h2 className='testimonials__name textTitle'>{nombre}</h2>
          <span className='testimonials__proffesion textBody'>
            {proffesion}
          </span>
        </div>
      </div>
      <p className='testimonials__testimonials textBody'>{testi}</p>
    </div>
  );
};

export default TestimonialsCards;
