import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroComponent from "../../components/hero";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <Testimonial />
      Home
      <Footer />
    </div>
  );
}

export default Home;
