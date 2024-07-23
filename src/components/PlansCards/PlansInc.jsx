import "../../assets/css/home/home_plans.css";

const PlansInc = ({ cont }) => {
  const { icon, text, clase } = cont;
  return (
    <div className='plan-inc'>
      <i className={`plan-inc__icon ${clase}`}>{icon}</i>
      <span className='plan-inc__text textBody'>{text}</span>
    </div>
  );
};

export default PlansInc;
