import React from "react";
import Modal from "react-modal";
import "./modal.css";

const UploadModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upload Modal"
      // className="modal-modal"
    >
      {children}
    </Modal>
  );
};

export default UploadModal;
