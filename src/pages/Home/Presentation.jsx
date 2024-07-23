import "../../assets/css/home/home__presentation.css";
import Button from "../../components/Button/Button";

const Presentation = () => {
  return (
    <div className='presentation'>
      <div className='presentation__wave'></div>
      <div className='presentation__text-container'>
        <h2 className='presentation__textTtile textTitle'>
          Easy<span className='text--Title'>Task</span>
        </h2>
        <p className='textBody presentation__textBody'>
          La aplicación de gestión de tareas que te ayuda a ser más productivo.
        </p>
      </div>
      <div className='presentation__container'>
        <div className='presentation__presentation-container'>
          <h1 className='presentation__presentation-title textTitle'>
            Organiza tus tareas de manera eficiente
          </h1>
          <p className='presentation__presentation-text textBody'>
            TaskMaster te ayuda a mantener tus proyectos y tareas bajo control.
            Crea tableros, listas y tarjetas para organizar tu trabajo de manera
            visual y sencilla.
          </p>
          <div className='presentation__btn'>
            <Button
              text='Empezar Ahora'
              textColor='#f1f9f9'
              bgColor='#1c6378'
              tipo='button'
              url=''
            />
            <Button
              text='Más información'
              textColor='#1e1e1e'
              bgColor='#82c4d7'
              tipo='button'
              url=''
            />
          </div>
        </div>
        <div className='presentation__img'></div>
      </div>
    </div>
  );
};

export default Presentation;
