import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import UploadModal from "./UploadModal";
import { useState } from "react";

function UserInformationSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };

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
            <button onClick={() => setModalIsOpen(true)}>Edit</button>
            <UploadModal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <div className="persomal-info-edit">
                <div className="personal-info-edit">
                  <div>
                    <span>First name : </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Last name : </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Email : </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Password: </span>
                    <input type="text" />
                  </div>
                </div>
                <div className="address-info-edit">
                  <div>
                    <span>City : </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Subcity : </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Woreda : </span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>SSN : </span>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </UploadModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformationSection;
