import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Nav } from '../'
import { SkipLink } from '../../Common'
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderContent,
  StyledHeaderNav
} from './header.styles'
import { StyledContainer } from '../../../assets/styles/utilities'
import logoSrc from '../../../assets/images/logo.svg'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <SkipLink />
    <StyledContainer>
      <StyledHeaderContent>
        <StyledHeaderLogo>
          <Link to="/">
            <img src={logoSrc} alt={siteTitle} />
          </Link>
        </StyledHeaderLogo>

        <StyledHeaderNav>
          <Nav />
        </StyledHeaderNav>
      </StyledHeaderContent>
    </StyledContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
