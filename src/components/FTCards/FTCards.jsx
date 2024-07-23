import "../../assets/css/home/home_features.css";

const FTCards = ({ card }) => {
  const { icon, title, text, clase } = card;
  return (
    <div className='card-container'>
      <i className={`card__icon ${clase}`}>{icon}</i>
      <h2 className='textTitle card__title'>{title}</h2>
      <p className='textBody card__text'>{text}</p>
    </div>
  );
};

export default FTCards;
