import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Landing_Page from "./components/Landing_Page";
import LastSec from "./components/LastSec";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Landing_Page />
      <Section1 />
      <Section2 />
      <Testimonial />
      <AboutUs />
      <ContactUs />
      <LastSec />
      <Footer />
    </>
  );
}

export default App;
