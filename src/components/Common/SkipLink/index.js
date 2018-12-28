import React from 'react'

import styles from './skipLink.module.scss'

const SkipLink = ({ children }) => (
  <a className={styles.skipLink} href="#content">
    Skip to content
  </a>
)

export default SkipLink
