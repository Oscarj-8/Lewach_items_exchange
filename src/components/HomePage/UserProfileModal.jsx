function UserProfileModal({ handler }) {
  return (
    <div className="HomeUserProfile-upload">
      <a href="/profilepage" onClick={handler}>
        Go to Profile
      </a>
      <a href="/login" onClick={handler}>
        Log out
      </a>
    </div>
  );
}

export default UserProfileModal;
