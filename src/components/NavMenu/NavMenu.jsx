import { useState } from "react";
import Logo from "../Logo/Logo";
import * as css from "./NavMenu.styled";
import Modal from "../Modal/Modal";

const NavMenu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <css.Nav>
      <css.NavDiv>
        <Logo />
        <css.LinksHeader to="/projects">Projects</css.LinksHeader>
        <css.ButtonHireDiv>
          <css.ButtonHire type="button" type="button" onClick={openModal}>Hire Me</css.ButtonHire>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </Modal>
        </css.ButtonHireDiv>
      </css.NavDiv>
    </css.Nav>
  );
};

export default NavMenu;