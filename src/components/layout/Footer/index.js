import React from 'react'

import styles from './footer.module.scss'
import { Container } from '../../Layout'
// import { Section } from '../'
import { Icon } from '../../Content'

const Footer = () => {
  return (
    <>
      <section
        margin="0"
        padding="80px 0"
        dark="true"
        style={{color: '#FFF'}}
      >
        <Container>
          Meow
        </Container>
      </section>
      <footer className={styles.footer}>
        <p>
          &copy; 2018. All rights reserved.<br/>
          Made in <Icon char="s" title="Mountain" /> Colorado
        </p>
      </footer>
    </>
  )
}

export default Footer
