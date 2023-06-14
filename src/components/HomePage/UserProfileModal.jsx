import { Link } from "react-router-dom";


function UserProfileModal({ handler }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      handler();
    } catch (error) {
      console.error(error);
    }
  };

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