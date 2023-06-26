import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import userProfile from "../../assets/images/userProfile.jpg";
import UploadModal from "./UploadModal";

function UserProfileSide() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);
  return (
    <section className="useProfile-section">
      <div className="userProfile-pic">
        <img src={userProfile} alt="user profile picture" />
      </div>
      <div className="userProfile-nameEmail">
        <h2>Gelila Sisay</h2>
        <span>LilaSis23@gmail.com</span>
        <span>__LilaSis</span>
      </div>
      <button
        className="accountInfo-editBtn"
        onClick={() => setModalIsOpen(true)}
      >
        Edit
      </button>
      {modalIsOpen && (
        <div className="personalInfo-modal">
          <div className="accountInfoModal-header">
            <h2>Account Information</h2>
            <button className="accountInfoModal-closeBtn" onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} size="2x" />
            </button>
          </div>
          <form className="accountEdit-form">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <div className="accountInfo-editBtns">
              <button>Save</button>
              <button>Cancle</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default UserProfileSide;
