import "../../assets/css/home/home_features.css";
import FTCards from "../../components/FTCards/FTCards";
import { FiBarChart2 } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Features = () => {
  const cards = [
    {
      icon: <FiBarChart2 />,
      title: "Tableros Kanban",
      text: "Organiza tus tareas en tableros Kanban para tener una visión clara de tu flujo de trabajo.",
      clase: "card__icon-rotate",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Calendario",
      text: "Mantén un seguimiento de tus tareas y plazos con el calendario integrado",
      clase: "",
    },
    {
      icon: <FaCheck />,
      title: "Listas de Tareas",
      text: "Crea listas de tareas para mantener un control detallado de tus proyectos.",
      clase: "",
    },
  ];
  return (
    <div className='feature-container'>
      {cards.map((card, index) => (
        <FTCards key={index} card={card} />
      ))}
    </div>
  );
};

export default Features;
