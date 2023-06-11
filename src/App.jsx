import "./App.css";
import "./components/LandingPage/FullLandingPage.css";
import Logreg from "./components/LoginPage/Logreg";
import { Routes, Route } from "react-router-dom";
import index from "./components";
import FullHomepage from "./components/HomePage/FullHomepage";
import "./components/HomePage/FullHomepage";
import Modal from "react-modal";
import AdminPage from "./components/AdminPage/AdminPage";
import UserProfilePage from "./components/HomePage/UserProfilePage";
import TestPage from "./components/HomePage/TestPage";
import UserNotificationPage from "./components/HomePage/UserNotificationPage";
import UserMessagePage from "./components/HomePage/UserMessagePage";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="root">
      {/* {
        <Routes>
          <Route path="/" Component={index} />
          <Route path="/login" Component={Logreg} />
          <Route path="/fullhomepage" Component={FullHomepage} />
          <Route path="/profilepage" Component={UserProfilePage} />
        </Routes>
      } */}
      {/* <UserMessagePage /> */}
      <AdminPage />
    </div>
  );
}

export default App;
