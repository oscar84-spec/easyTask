import "../../assets/css/home/home_plans.css";

const PlansBtn = ({ boton }) => {
  const { text } = boton;
  return (
    <button type='button' className='plans__btn textBody'>
      {text}
    </button>
  );
};

export default PlansBtn;
