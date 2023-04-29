import logo from "../assets/images/logoWhite.png";

// function Header() {
//   return (
//     <div>
//       <header>
//         <div className="logo-section">
//           <img src={logo} />
//           <h2> LEWACH</h2>
//         </div>
//         <nav className="inline-nav">
//           <ul>
//             <li>
//               <a href="/">HOME</a>
//             </li>
//             <li>
//               <a href="/">TESTIMONIAL</a>
//             </li>
//             <li>
//               <a href="/">ABOUT US</a>
//             </li>
//             <li>
//               <a href="/">CONTACT</a>
//             </li>
//           </ul>
//         </nav>
//         <div className="login-section">
//           <a href="/" className="login-link">
//             LOGIN/ SIGNUP
//           </a>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Header;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowCloseIcon(!showCloseIcon);
  };

  return (
    <header className="header">
      <div className="logo logo-section">
        <img src={logo} />
        <h2> LEWACH</h2>
      </div>
      <nav className={`nav ${showNav ? "show-nav" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {showCloseIcon && (
          <div className="close-icon" onClick={toggleNav}>
            <FaTimes />
          </div>
        )}
      </nav>
      <div className="login-section">
        <a href="/" className="login-link">
          LOGIN
        </a>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        {showNav ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
