import phoneMenu from "../../assets/images/phone-sidebar.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import HomePage_sidebar from "./HomePage_sidebar";
import Upload from "./Upload";

function Search_menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handler() {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  }

  function handleClose() {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="search-menu">
      <div onClick={handleClose}>
        <img src={phoneMenu} onClick={handler} />
        {isOpen && (
          <div className="home-overlay">
            <div className=" active">
              <HomePage_sidebar />
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
