import React from 'react'

import styles from './main.module.scss'
import { Container } from '../../Layout'

const Main = ({ children }) => (
  <main className={styles.main}>
    <Container small={true}>
      {children}
    </Container>
  </main>
)

export default Main
