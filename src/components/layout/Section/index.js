import React from 'react'
import classNames from 'classnames'

import styles from './section.module.scss'

const Section = ({ dark = false, children }) => {
  const classes = classNames(
    styles.section,
    { [styles.dark]: dark },
  )

  return <div className={classes}>
    {children}
  </div>
}

export default Section
