import { useState } from "react";
import UploadModal from "./UploadModal";

function UserProfileSide() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);
  return (
    <section className="useProfile-section">
      <div className="userProfile-pic"></div>
      <div className="userProfile-nameEmail">
        <h2>Gelila Sisay</h2>
        <span>LilaSis23@gmail.com</span>
        <span>__LilaSis</span>
      </div>
      <button onClick={() => setModalIsOpen(true)}>Edit</button>
      <UploadModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      ></UploadModal>
    </section>
  );
}

export default UserProfileSide;
