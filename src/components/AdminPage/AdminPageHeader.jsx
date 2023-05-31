import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function AdminPageHeader() {
  return (
    <div className="adminPage-main">
      <div className="mainTop-sec">
        <div className="mainTop-search-sec">
          <form>
            <input type="text" className="main-search" placeholder="Search" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="mainTop-profile-sec">
          <FontAwesomeIcon icon={faBell} className="profile-sec-icon" />
          <FontAwesomeIcon icon={faUserCircle} className="profile-sec-icon" />
        </div>
      </div>
    </div>
  );
}

export default AdminPageHeader;
