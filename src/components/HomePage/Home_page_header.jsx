import "./homePage.css";
import logo from "../../assets/images/logoWhite.png";
import menu from "../../assets/images/phone-menu.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HomePage_sidebar from "./HomePage_sidebar";

function Home_page_header() {
  const [showNav, setShowNav] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowCloseIcon(!showCloseIcon);
  };

  const handler = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="home-page-header">
      <div>
        <img src={logo} />
      </div>

      <nav className={`nav ${showNav ? "show-nav" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link onClick={handler}>Home</Link>
          </li>
          <li>
            <Link onClick={handler}>Profile</Link>
          </li>

          <li>
            <Link onClick={handler}>Message</Link>
          </li>
          <li>
            <Link onClick={handler}>Notification</Link>
          </li>
        </ul>

        {showCloseIcon && (
          <div onClick={toggleNav}>
            <FaTimes className="close-icon2" />
          </div>
        )}
      </nav>
      <div onClick={toggleNav}>
        {showNav ? <FaTimes /> : <img src={menu} className="phone-menu" />}
      </div>
    </div>
  );
}

export default Home_page_header;
