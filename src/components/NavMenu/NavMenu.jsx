import * as css from "./NavMenu.styled";

const NavMenu = () => {
  return (
    <css.NavDiv>
      <css.LogoBlok>
        <css.LogoLink to="/">
          <css.Logo />
          <css.Span>CipherSeeker</css.Span>
        </css.LogoLink>
      </css.LogoBlok>
      <css.LinksHeader to="/projects">Projects</css.LinksHeader>
      <css.ButtonHireDiv>
        <css.ButtonHire type="button">Hire Me</css.ButtonHire>
      </css.ButtonHireDiv>
    </css.NavDiv>
  );
};

export default NavMenu;