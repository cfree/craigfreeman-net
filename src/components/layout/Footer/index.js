import React, { Component } from 'react'

import styles from './footer.module.scss'
import { Section } from '../'
import { Icon, Button } from '../../Common'

class Footer extends Component {
  render() {
    return <>
      <Section dark={true}>
        <Button
          href="mailto:craigfreeman@gmail.com"
          secondary={true}
          ghostOnHover={true}
          large={true}
          sameWindow={true}
        >
          craigfreeman <Icon char="a" title="at" /> gmail
        </Button>
      </Section>
      <footer className={styles.footer}>
        <p>
          &copy; 2010-{new Date().getFullYear()} Craig Freeman. All rights reserved.
          <br />
          Made in <Icon char="s" title="Mountain" /> Colorado
        </p>
      </footer>
    </>
  }
}

export default Footer
