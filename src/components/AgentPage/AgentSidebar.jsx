import logoWhite from "../../assets/images/logoWhite.png";
import {
  faBars,
  faTruck,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function AgentSidebar() {
  return (
    <div className="agentSidebar-root">
      <div className="agentPage-logo">
        <img src={logoWhite} alt="Logo of lewach" />
      </div>
      <div>
        <nav className="agentPage-links">
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faTruck} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AgentSidebar;
