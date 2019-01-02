import React from 'react'

import styles from './intro.module.scss'
import { Container } from '../../Layout'

const Intro = props => {
  return (
    <div className={styles.intro}>
      <Container small={true}>
        {props.children}
      </Container>
    </div>
  )
}

export default Intro
