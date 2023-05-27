import React from "react";
import Modal from "react-modal";
import "./modal.css";

const UploadModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upload Modal"
    >
      {children}
    </Modal>
  );
};

export default UploadModal;
