import React from 'react'

import styles from './socialIcons.module.scss'
import { Icon } from '../../Content'

const SocialIcons = () => (
  <ul className={styles.socialIconsList}>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="/">
        <Icon char="t" title="Twitter" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="/">
        <Icon char="g" title="Github" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="/">
        <Icon char="l" title="LinkedIn" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="/">
        <Icon char="k" title="Denver Code Club" />
      </a>
    </li>
    <li className={styles.socialIconItem}>
      <a className={styles.socialIconLink} href="/">
        <Icon char="e" title="Email" />
      </a>
    </li>
  </ul>
)

export default SocialIcons
