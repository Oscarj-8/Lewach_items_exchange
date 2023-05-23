import React from "react";
import Modal from "react-modal";

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
