import "./App.css";
import "./components/LandingPage/FullLandingPage.css";
import Logreg from "./components/LoginPage/Logreg";
import { Routes, Route } from "react-router-dom";
import index from "./components";
import FullHomepage from "./components/HomePage/FullHomepage";
function App() {
  return (
    <div className="root">
      {/* <Routes>
        <Route path="/" Component={index} />
        <Route path="/login" Component={Logreg} />
      </Routes> */}
      <FullHomepage />
    </div>
  );
}

export default App;
