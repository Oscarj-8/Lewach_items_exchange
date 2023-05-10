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
import Home_page_header from "./components/HomePage/Home_page_header";
import Search_menu from "./components/HomePage/Search_menu";
import HomePage_section1 from "./components/HomePage/HomePage_section1";
import HomePage_section2 from "./components/HomePage/HomePage_section2";
function App() {
  return (
    <div className="root">
      {/* <BackToTop />
      <Landing_Page />
      <Section1 />
      <Section2 />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <LastSec />
      <Footer /> */}
      <Home_page_header />
      <Search_menu />
      <HomePage_section1 />
      <HomePage_section2 />
    </div>
  );
}

export default App;
