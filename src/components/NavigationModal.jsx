import React from "react";
import styled from "styled-components";

import { FaWindowClose } from "react-icons/fa";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.navBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  overflow: auto;
  backdrop-filter: blur(25px);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 45px;
`;

const CloseButton = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 5px;
  width: 100%;
  heigth: 60px;
  border: none;
  text-shadow: 1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const NavigationModal = ({ isOpen, onClose, children, theme }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>
          <FaWindowClose />
        </CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default NavigationModal;
