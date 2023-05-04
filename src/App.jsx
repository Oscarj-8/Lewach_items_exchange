import "./App.css";
import AboutUs from "./components/LandingPage/AboutUs";
import ContactUs from "./components/LandingPage/ContactUs";
import Footer from "./components/LandingPage/Footer";
import Landing_Page from "./components/LandingPage/Landing_Page";
import LastSec from "./components/LandingPage/LastSec";
import Section1 from "./components/LandingPage/Section1";
import Section2 from "./components/LandingPage/Section2";
import Testimonial from "./components/LandingPage/Testimonial";
import BackToTop from "./components/LandingPage/BackToTop";

function App() {
  return (
    <div className="root">
      <BackToTop />
      <Landing_Page />
      <Section1 />
      <Section2 />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <LastSec />
      <Footer />
    </div>
  );
}

export default App;
