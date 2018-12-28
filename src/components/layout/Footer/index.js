import React from 'react'

import styles from './footer.module.scss'
import { Container } from '../../Layout'
import { Section } from '../'
import { Icon } from '../../Content'

const Footer = () => {
  return (
    <>
      <Section dark={true}>
        <Container>
          Meow
        </Container>
      </Section>
      <footer className={styles.footer}>
        <p>
          &copy; 2010-{new Date().getFullYear()} ___. All rights reserved.<br/>
          Made in <Icon char="s" title="Mountain" /> Colorado
        </p>
      </footer>
    </>
  )
}

export default Footer
