import "../../assets/css/home/home_plans.css";
import PlansCards from "../../components/PlansCards/PlansCards";
import { FaCheck } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

const Plans = () => {
  const planes = [
    {
      typePlan: "Gratis",
      typeDesc: "Para equipos pequeños que comienzan",
      price: 0,
      content: [
        {
          icon: <FaCheck />,
          text: "Tablero de tareas",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Calendario",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Hasta 5 usuarios",
          clase: "plan-in__icon-correct",
        },
        { icon: <FiX />, text: "Integraciones", clase: "plan-in__icon-error" },
        {
          icon: <FiX />,
          text: "Soporte prioritario",
          clase: "plan-in__icon-error",
        },
      ],
      btn: [{ text: "Empezar gratis" }],
    },
    {
      typePlan: "Pro",
      typeDesc: "Para equipos que necesitan mas funcionalidades",
      price: 9,
      content: [
        {
          icon: <FaCheck />,
          text: "Tablero de tareas",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Calendario",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Usuarios ilimitados",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Integraciones",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Soporte prioritario",
          clase: "plan-in__icon-correct",
        },
      ],
      btn: [{ text: "Empezar ahora" }],
    },
    {
      typePlan: "Empresa",
      typeDesc: "Para grandes equipos con necesidades avanzadas",
      price: 19,
      content: [
        {
          icon: <FaCheck />,
          text: "Tablero de tareas",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Calendario",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Hasta 5 usuarios",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Integraciones avanzadas",
          clase: "plan-in__icon-correct",
        },
        {
          icon: <FaCheck />,
          text: "Soporte prioritario 24/7",
          clase: "plan-in__icon-correct",
        },
      ],
      btn: [{ text: "Contactar ventas" }],
    },
  ];
  return (
    <div className='plans'>
      <div className='plans__container-text'>
        <h2 className='plans__container-text-title textTitle'>
          Planes y Precios
        </h2>
        <span className='plans__container-text-text textBody'>
          Elige el plan que mejor se adapte a tus necesidades
        </span>
      </div>
      <div className='plans__container-cards'>
        {planes.map((plan, index) => (
          <PlansCards key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
