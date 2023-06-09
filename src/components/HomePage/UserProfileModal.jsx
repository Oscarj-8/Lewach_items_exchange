import { Link } from "react-router-dom";
function UserProfileModal({ handler }) {
  return (
    <div className="HomeUserProfile-upload">
      <Link to="/profilepage" onClick={handler}>
        Go to Profile
      </Link>
      <Link to="/login" onClick={handler}>
        Log out
      </Link>
    </div>
  );
}

export default UserProfileModal;
