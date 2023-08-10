import Logo from "../Logo/Logo";
import * as css from "./NavMenu.styled";

const NavMenu = () => {
  return (
    <css.Nav>
      <css.NavDiv>
        <Logo />
        <css.LinksHeader to="/projects">Projects</css.LinksHeader>
        <css.ButtonHireDiv>
          <css.ButtonHire type="button">Hire Me</css.ButtonHire>
        </css.ButtonHireDiv>
      </css.NavDiv>
    </css.Nav>
  );
};

export default NavMenu;