import "./FullAdminPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import manageacc from "../../assets/images/group.png";
import delivery from "../../assets/images/delivery.png";
import logo from "../../assets/images/logoWhite.png";
import platform from "../../assets/images/platform.png";

function AdminDashboard() {
  return (
    <div className="adminPage-root">
      <div className="adminPage-sidebar">
        <div className="adminPage-logo">
          <img src={logo} alt="lewach-logo" />
          <p>Lewach</p>
        </div>
        <div className="sidebar-pages">
          <div className="sidebar-link sidebar-page1">
            <img src={platform} alt="dashbaord icon" />
            <span>Dashbaord</span>
          </div>
          <div className="sidebar-link sidebar-page2">
            <img src={delivery} alt="delivery icon" />
            <span>Delivery requests</span>
          </div>
          <div className="sidebar-link sidebar-page3">
            <img src={manageacc} alt="manage account icon" />
            <span>Manage account </span>
          </div>
        </div>
      </div>
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
            <img src={platform} alt="dashbaord icon" />
            <img src={manageacc} alt="manage account icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
