import { Link } from "react-router-dom";
import useAuth from "../LoginPage/useAuth";


function UserProfileModal({ handler }) {
  const { logout } = useAuth();

  function handleLogout() {
    try {
      logout(); // Call the logout function from the useAuth hook
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="HomeUserProfile-upload">
      <Link to="/profilepage" onClick={handler}>
        Go to Profile
      </Link>
      <Link to="/" onClick={handleLogout}>
        Log out
      </Link>
    </div>
  );
}

export default UserProfileModal;