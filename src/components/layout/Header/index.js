import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './header.module.scss'
import { Nav } from '../'
import { SkipLink } from '../../Common'
import { Container } from '../'
import logoSrc from '../../../assets/images/logo.svg'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <SkipLink />
    
    <Container>
      <div className={styles.headerContent}>
        <h1 className={styles.headerLogo}>
          <Link to="/">
            <img src={logoSrc} alt={siteTitle} />
          </Link>
        </h1>

        <div className={styles.headerNav}>
          <Nav />
        </div>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
