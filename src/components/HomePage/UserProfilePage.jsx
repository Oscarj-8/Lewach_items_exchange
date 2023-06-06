import "./UserProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

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
        <div className="userInfo-sec">
          <div className="userProfile-header">
            <span>
              <FontAwesomeIcon icon={faLongArrowAltLeft} /> Go back to home
            </span>
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
        </div>

        <div className="main-itemsList">
          <h2>Uploaded items</h2>
          <div className="userProfile-itemList">
            <div className="user-item1 user-items"></div>
            <div className="user-item2 user-items"></div>
            <div className="user-item3 user-items"></div>
            <div className="user-item4 user-items"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserProfilePage;
