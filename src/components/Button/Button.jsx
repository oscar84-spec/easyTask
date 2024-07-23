import "../../assets/css/button/button.css";
import { Link } from "react-router-dom";

const Button = ({ text, textColor, bgColor, url, tipo }) => {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <Link to={url}>
      <button type={tipo} className='btn textBody' style={styles}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
