import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

function UserInformationSection() {
  return (
    <div className="userInfo-sec">
      <div className="userProfile-header">
        <span>
          <FontAwesomeIcon icon={faLongArrowAltLeft} /> Go back to Home
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
  );
}

export default UserInformationSection;
