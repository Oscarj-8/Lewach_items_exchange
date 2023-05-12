import "./App.css";
import FullLandingPage from "./components/LandingPage/FullLandingPage";
import Home_page_header from "./components/HomePage/Home_page_header";
import Search_menu from "./components/HomePage/Search_menu";
import HomePage_section1 from "./components/HomePage/HomePage_section1";
import HomePage_section2 from "./components/HomePage/HomePage_section2";
function App() {
  return (
    <div className="root">
      {/* <FullLandingPage /> */}
      <Home_page_header />
      <Search_menu />
      <HomePage_section1 />
      <HomePage_section2 />
    </div>
  );
}

export default App;
