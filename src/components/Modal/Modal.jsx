import { useEffect, useRef } from "react";
import { StyledBtnClose, StyledCloseIcon, StyledDivContent, StyledDivOverlay } from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {

  const modalRef = useRef();

  const handleDocumentClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    } else {
      document.removeEventListener('mousedown', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isOpen, onClose]);
  
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);



  if (!isOpen) {
    return null;
  }

  return (
    <StyledDivOverlay>
      <StyledDivContent ref={modalRef}>
        <StyledBtnClose onClick={onClose}>
          <StyledCloseIcon />
        </StyledBtnClose>
        {children}
      </StyledDivContent>
    </StyledDivOverlay>
  );
};

export default Modal;
