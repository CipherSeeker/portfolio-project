import { StyledBtnClose, StyledDivContent, StyledDivOverlay } from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDivOverlay>
      <StyledDivContent>
        <StyledBtnClose onClick={onClose}>
          &times;
        </StyledBtnClose>
        {children}
      </StyledDivContent>
    </StyledDivOverlay>
  );
};

export default Modal;
