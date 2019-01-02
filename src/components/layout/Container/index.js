import React from 'react'
import classnames from 'classnames'

import styles from './container.module.scss'

const Container = ({ small = false, children }) => {
  const classes = classnames(
    small ? styles.containerSmall : styles.container
  )

  return <div className={classes}>{children}</div>
}

export default Container
