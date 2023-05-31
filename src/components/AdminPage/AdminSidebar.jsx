import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faTruck,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logoWhite.png";

function AdminSidebar() {
  return (
    <div className="adminPage-side">
      <div className="adminPage-logo">
        <img src={logo} alt="lewach-logo" />
        <p>Lewach</p>
      </div>
      <div className="sidebar-pages">
        <div className=" sidebar-page1">
          <Link to="/" className="sidebar-link">
            <FontAwesomeIcon icon={faChartLine} />
            <span>Dashboard</span>
          </Link>
        </div>
        <div className=" sidebar-page2">
          <Link to="/" className="sidebar-link">
            <FontAwesomeIcon icon={faTruck} />
            <span>Delivery requests</span>
          </Link>
        </div>
        <div className=" sidebar-page3">
          <Link to="/admin/manageAccount" className="sidebar-link">
            <FontAwesomeIcon icon={faUserCog} />
            <span>Manage account </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
