import "../../assets/css/page404/page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className='notFound'>
      <span className='notFound__title textTitle'>
        Ops... parece que la página que intentas acceder no existe
      </span>
      <div className='notFound__img'></div>
      <Link className='notFound__btn textBody' to='/'>
        Inicio
      </Link>
    </section>
  );
};

export default Page404;
