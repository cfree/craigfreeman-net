import React from 'react'

import { StyledNav, StyledNavSocialIcons, StyledNavList } from './nav.styles'
import { SocialIcons } from '../../Common'

const Nav = () => (
  <StyledNav>
    <StyledNavSocialIcons>
      <SocialIcons />
    </StyledNavSocialIcons>

    <StyledNavList>
      <li><a href="/">Home</a></li>
      <li><a href="/">Talks</a></li>
      <li><a href="/">Kitchen</a></li>
      <li><a href="/">About</a></li>
    </StyledNavList>
  </StyledNav>
)

export default Nav
