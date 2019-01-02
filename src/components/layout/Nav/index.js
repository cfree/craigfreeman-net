import React from 'react'
import { Link } from 'gatsby'

import styles from './nav.module.scss'
import { SocialIcons } from '../../Common'

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.navSocialIcons}>
      <SocialIcons />
    </div>

    <ul className={styles.navList}>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/talks" activeClassName="active">
          Talks
        </Link>
      </li>
      <li>
        <Link to="/resume" activeClassName="active">
          Resume
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
