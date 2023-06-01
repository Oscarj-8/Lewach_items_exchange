import "./AdminPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faTruck,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../assets/images/logoWhite.png";
import { Button } from "react-scroll";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="adminPage-sidebar">
      <button onClick={ToggleSidebar} className="fab">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <nav className={`admin-sideBar ${isOpen ? "open" : ""}`}>
        <div className="adminPage-logo">
          <img src={logoWhite} />
        </div>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faChartLine} />
              Dashbaord
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faTruck} />
              Delivery request
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faUserCog} />
              Manage account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleSidebar() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <button className="fab" onClick={toggleSidebar}>
//         <FontAwesomeIcon icon={faBars} />
//       </button>
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/delivery-requests">Delivery Requests</Link>
//           </li>
//           <li>
//             <Link to="/manage-account">Manage Account</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
