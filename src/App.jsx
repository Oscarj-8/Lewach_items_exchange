import "./App.css";
import FullLandingPage from "./components/LandingPage/FullLandingPage";
import Home_page_header from "./components/HomePage/Home_page_header";
import Search_menu from "./components/HomePage/Search_menu";
import HomePage_section1 from "./components/HomePage/HomePage_section1";
import HomePage_section2 from "./components/HomePage/HomePage_section2";
import Footer from "./components/LandingPage/Footer";
function App() {
  return (
    <div className="root">
      {/* <FullLandingPage /> */}
      <Home_page_header />
      <Search_menu />
      <HomePage_section1 />
      <HomePage_section2 />
      <Footer />
    </div>
  );
}

export default App;
