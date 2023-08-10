import Logo from "../Logo/Logo";
import * as css from "./Footer.styled";
import React from 'react'

const Footer = () => {
  return (
      <css.DivContainer>
          <Logo />
          <css.Copi>© 2023 - CipherSeeker</css.Copi>
    </css.DivContainer>
  )
}

export default Footer