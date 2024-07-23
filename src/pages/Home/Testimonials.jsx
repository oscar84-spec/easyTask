import "../../assets/css/home/home_testimonials.css";
import TestimonialsCards from "../../components/TestimonialsCards/TestimonialsCards";
import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      icon: <FaUser />,
      nombre: "Juan Díaz",
      proffesion: "Gerente de Proyecto",
      testi:
        '"EasyTask ha sido una herramienta invaluable para mi equipo. Nos ha ayudado a mantener un control efectivo de nuestras tareas y a mejorar nuestra productividad."',
    },
    {
      icon: <FaUser />,
      nombre: "Sara Martínez",
      proffesion: "Diseñadora UX",
      testi:
        '"Me encanta la interfaz intuitiva y la facilidad de uso de EasyTask. Ahora puedo organizar mis proyectos de manera más eficiente y mantener un seguimiento de mis tareas."',
    },
    {
      icon: <FaUser />,
      nombre: "Luis Gómez",
      proffesion: "Desarrollador de Software",
      testi:
        '"EasyTask ha sido una herramienta clave para mi equipo. Nos ha ayudado a mejorar la comunicación y a mantener un seguimiento efectivo de nuestros proyectos."',
    },
  ];
  return (
    <div className='testimonials'>
      <div className='testimonials-container-text'>
        <h2 className='testimonials__text-title textTitle'>
          Lo que dicen nustros usuarios
        </h2>
        <span className='testimonials__text-text textBody'>
          Escucha lo que piensan los usuarios de EasyTask
        </span>
      </div>
      <div className='testimonials-card-container'>
        {testimonials.map((testimonio, index) => (
          <TestimonialsCards key={index} testimonio={testimonio} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
