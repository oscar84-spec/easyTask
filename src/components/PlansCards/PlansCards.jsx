import React from "react";
import PlansInc from "./PlansInc";
import Button from "../Button/Button";
import PlansBtn from "./PlansBtn";

const PlansCards = ({ plan }) => {
  const { typePlan, typeDesc, price, content, btn } = plan;
  return (
    <div className='card-plans-container'>
      <div className='card-plans__text-container'>
        <h2 className='card-plans__text-title textTitle'>{typePlan}</h2>
        <span className='card-plans__text-text textBody'>{typeDesc}</span>
      </div>
      <div className='card-plans__price-container'>
        <span className='card-plans__price-price textTitle'>${price}</span>
        {content.map((cont, index) => (
          <PlansInc key={index} cont={cont} />
        ))}
        {btn.map((boton, index) => (
          <PlansBtn key={index} boton={boton} />
        ))}
      </div>
    </div>
  );
};

export default PlansCards;
