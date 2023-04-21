import "./App.css";
import AboutUs from "./components/AboutUs";
import Landing_Page from "./components/Landing_Page";
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
    </>
  );
}

export default App;
