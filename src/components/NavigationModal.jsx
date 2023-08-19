import React from "react";
import Modal from "./Modal";

const NavigationModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default NavigationModal;
