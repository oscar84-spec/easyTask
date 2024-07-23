import "../../assets/css/home/home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Features from "./Features";
import Plans from "./Plans";
import Presentation from "./Presentation";
import Productivity from "./Productivity";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section className='home'>
      <Header pathLogo='/easyTask.svg' />
      <Presentation />
      <Features />
      <Productivity />
      <Plans />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default Home;
