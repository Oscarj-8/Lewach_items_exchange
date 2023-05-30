import "./FullAdminPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import manageacc from "../../assets/images/group.png";
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
          <div className=" sidebar-page1">
            <Link to="/admin/dashboard" className="sidebar-link">
              <FontAwesomeIcon icon={faChartLine} />
              <span>Dashboard</span>
            </Link>
          </div>
          <div className=" sidebar-page2">
            <Link to="/admin/deliveryRequest" className="sidebar-link">
              <FontAwesomeIcon icon={faTruck} />
              <span>Delivery requests</span>
            </Link>
          </div>
          <div className=" sidebar-page3">
            <Link to="/admin/manageAccount" className="sidebar-link">
              <img src={manageacc} alt="manage account icon" />
              <span>Manage account </span>
            </Link>
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
