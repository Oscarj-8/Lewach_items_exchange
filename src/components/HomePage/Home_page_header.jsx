import "./homePage.css";
import logo from "../../assets/images/logoWhite.png";
import menu from "../../assets/images/phone-menu.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
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

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-page-header">
      <div>
        <img src={logo} />
      </div>

      <nav className={`nav ${showNav ? "show-nav" : ""}`}>
        {windowSize >= 500 && windowSize <= 992 ? (
          <ul className="icon-links nav-links">
            <li>
              <Link onClick={handler}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li>
              <Link onClick={handler}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link onClick={handler}>
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
            <li>
              <Link onClick={handler}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
          </ul>
        ) : (
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
        )}

        {showCloseIcon && (
          <div onClick={toggleNav}>
            <FaTimes className="close-icon2" />
          </div>
        )}
      </nav>
      <div onClick={toggleNav} className="header-toggle">
        {showNav ? <FaTimes /> : <img src={menu} className="phone-menu" />}
      </div>
    </div>
  );
}

export default Home_page_header;
