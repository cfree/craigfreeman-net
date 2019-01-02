import React from 'react'

import styles from './socialIcons.module.scss'
import { Icon } from '../../Common'

const SocialIcons = () => (
  <ul className={styles.socialIconsList}>
    <li className={styles.socialIconItem}>
      <a
        className={styles.socialIconLink}
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/craigfreeman"
      >
        <Icon char="t" title="Twitter" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a
        className={styles.socialIconLink}
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/cfree"
      >
        <Icon char="g" title="Github" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a
        className={styles.socialIconLink}
        rel="noopener noreferrer"
        target="_blank"
        href="https://linkedin.com/in/cfree"
      >
        <Icon char="l" title="LinkedIn" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a
        className={styles.socialIconLink}
        href="mailto:craigfreeman@gmail.com"
      >
        <Icon char="e" title="Email" />
      </a>
    </li>
  </ul>
)

export default SocialIcons
