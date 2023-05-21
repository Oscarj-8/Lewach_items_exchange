import "./App.css";
import Logreg from "./components/LoginPage/Logreg";
import { Routes, Route } from "react-router-dom";
import index from "./components";
function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" Component={index}/>
        <Route path="/login" Component={Logreg} />
      </Routes>
    </div>
    
  );
}

export default App;

