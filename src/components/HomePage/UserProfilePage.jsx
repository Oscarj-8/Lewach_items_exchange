import "./UserProfilePage.css";

function UserProfilePage() {
  return (
    <div className="userProfile-root">
      <section className="useProfile-section">
        <div className="userProfile-pic"></div>
        <div className="userProfile-nameEmail">
          <h2>Gelila Sisay</h2>
          <span>LilaSis23@gmail.com</span>
          <span>__LilaSis</span>
        </div>
        <button>Edit</button>
      </section>
      <main className="userProfile-main">
        <div className="userProfile-header">
          <span>Go back to home</span>
        </div>
        <div className="userProfile-mainSection">
          <div className="userProfile-infoSection">
            <div className="userInfo-1">
              <h2>Personal information</h2>
              <span>First name : Gelila</span>
              <hr />
              <span>Last name : Sisay</span>
              <hr />
              <span>Email : LilaSis23@gmail.com</span>
              <hr />
              <span>Password : ************</span>
            </div>
            <div className="userInfo-2">
              <h2>Address information</h2>
              <span>City : Addis Ababa</span>
              <hr />
              <span>Subcity : Lideta</span>
              <hr />
              <span>Woreda : Dunno</span>
              <hr />

              <span>SSN : 329569-3455</span>
            </div>
            <div className="userProfile-editBtn">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserProfilePage;
