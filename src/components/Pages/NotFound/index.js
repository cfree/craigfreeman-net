import React from 'react'

import styles from './notFound.module.scss'
import { Container, SEO } from '../../Layout'
import logoSrc from '../../../assets/images/logo.svg'

const NotFound = () => (
  <div className={styles.notFound}>
    <SEO title="404: Not found" htmlClasses="notFoundPage" />
    <Container>
      <h1 className={styles.heading}>Uh oh</h1>
      <h4 className={styles.subheading}>
        That page can't be found. Care to try again?
      </h4>
    </Container>

    <div className={styles.notice}>
      <a href="/">
        <img src={logoSrc} alt="404" />
      </a>
    </div>
  </div>
)

export default NotFound
