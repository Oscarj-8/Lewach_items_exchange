import phoneMenu from "../../assets/images/phone-sidebar.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import HomePage_sidebar from "./HomePage_sidebar";
import Upload from "./Upload";

function Search_menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handler() {
    setIsOpen(!isOpen);
    document.body.classList.add("no-scroll");
  }

  function handleClose() {
    setIsOpen(!isOpen);
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="search-menu">
      <div>
        <div className="search-menu-img">
          <img src={phoneMenu} onClick={handler} />
        </div>
        {isOpen && (
          <div className="home-overlay">
            <div>
              <HomePage_sidebar handleClose={handleClose} />
            </div>
          </div>
        )}
      </div>
      <div className="search-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          name="search"
        />
        <button className="search-btn">
          <FaSearch /> Search
        </button>
      </div>
      <Upload />
    </div>
  );
}

export default Search_menu;
