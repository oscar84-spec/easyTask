import "../../assets/css/home/home_productivity.css";
import ProductivityCards from "../../components/ProductivityCards/ProductivityCards";
import { FaCheck } from "react-icons/fa6";
import { LuWorkflow } from "react-icons/lu";
import { GiNetworkBars } from "react-icons/gi";

const Productivity = () => {
  const cardProductivity = [
    {
      icon: <FaCheck />,
      title: "Seguimiento de Tareas",
      text: "Mantén un control detallado de tus tareas y plazos.",
    },
    {
      icon: <LuWorkflow />,
      title: "Colaboración en Equipo",
      text: "Trabaja de manera eficiente con tus compañeros.",
    },
    {
      icon: <GiNetworkBars />,
      title: "Notificaciones Inteligentes",
      text: "Recibe alertas sobre tus tareas y plazos.",
    },
  ];
  return (
    <div className='productivity-container'>
      <div className='productivity__img'></div>
      <div className='productivity__container'>
        <div className='productivity__text-container'>
          <h2 className='productivity__text-title textTitle'>
            Mejora tu productividad con EasyTask
          </h2>
          <p className='productivity__text-text textBody'>
            EasyTask te ayuda a organizar tus tareas, establecer prioridades y
            mantener un seguimiento de tus proyectos. Aumenta tu eficiencia y
            logra tus objetivos de manera más efectiva.
          </p>
        </div>
        <div className='productivity__card-container'>
          {cardProductivity.map((productivity, index) => (
            <ProductivityCards key={index} productivity={productivity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productivity;
