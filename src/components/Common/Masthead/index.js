import React from 'react'
import classnames from 'classnames'

import styles from './masthead.module.scss'
import { Container } from '../../Layout'

const Masthead = ({ title, subtitle = '', background = 'default' }) => {
  const mastheadClasses = classnames(
    styles.masthead,
    { [styles[background]]: background.length > 0 },
  )

  const titleClasses = classnames(
    styles.title,
    { [styles.hasSubtitle]: subtitle.length > 0 },
  )

  return (
    <section className={mastheadClasses}>
      <Container>
        <h1 className={titleClasses}>{title}</h1>
        {subtitle.length > 0 && <h2 className={styles.subtitle}>{subtitle}</h2>}
      </Container>
    </section>
  )
}

export default Masthead
