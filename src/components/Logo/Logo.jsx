import React from 'react'
import * as css from "./Logo.styled";

const Logo = () => {
  return (
      <css.LogoBlok>
          <css.LogoLink to="/">
              <css.LogoIcon />
              <css.Span>CipherSeeker</css.Span>
          </css.LogoLink>
      </css.LogoBlok>
  )
}

export default Logo