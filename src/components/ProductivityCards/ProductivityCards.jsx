import "../../assets/css/home/home_productivity.css";

const ProductivityCards = ({ productivity }) => {
  const { icon, title, text } = productivity;
  return (
    <div className='productivity__container-card'>
      <i className='productivity__card-icon'>{icon}</i>
      <div className='productivity__card-container-text'>
        <h2 className='productivity__container-text-title textTitle'>
          {title}
        </h2>
        <p className='productivity__container-text-text textBody'>{text}</p>
      </div>
    </div>
  );
};

export default ProductivityCards;
