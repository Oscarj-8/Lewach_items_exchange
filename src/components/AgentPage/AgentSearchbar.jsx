import { useState } from "react";
import {
  faSearch,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminNotificationModalOne from "../AdminPage/AdminNotificationModalOne";
import UserProfileModal from "../HomePage/UserProfileModal";

function AgentSearchbar() {
  const [notificationModal, setNotificationModal] = useState(false);
  const [userProfile, setUserProfile] = useState(false);

  const openIt = () => setNotificationModal(!notificationModal);
  const openUserProfile = () => setUserProfile(!userProfile);

  return (
    <div className="agentSeachbar">
      <input
        type="text"
        className="admin-searchbar-input"
        placeholder="Search..."
      />
      <button className="agentSearch-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className="agentPage-header">
        <div className="admin-notification-profile">
          <button className="notification-profile" onClick={openIt}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="notification-profile" onClick={openUserProfile}>
            <FontAwesomeIcon icon={faUserCircle} />
          </button>
        </div>
        {notificationModal && <AdminNotificationModalOne />}
        {userProfile && <UserProfileModal />}
      </div>
    </div>
  );
}

export default AgentSearchbar;
