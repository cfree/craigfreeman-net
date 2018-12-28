import React from 'react'

import styles from './icon.module.scss'

const Icon = props => {
  return (
    <span
      className={styles.icon}
      data-char={props.char}
      aria-label={props.title}
    ></span>
  )
}

export default Icon
