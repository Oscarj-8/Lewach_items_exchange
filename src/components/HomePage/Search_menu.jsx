import phoneMenu from "../../assets/images/phone-sidebar.png";
import { FaSearch } from "react-icons/fa";

function Search_menu() {
  return (
    <div className="search-menu">
      <img src={phoneMenu} />
      <div className="search-section">
        <input type="text" className="search-bar" placeholder="Search" />
        <button className="search-btn">
          <FaSearch /> Search
        </button>
      </div>
    </div>
  );
}

export default Search_menu;
