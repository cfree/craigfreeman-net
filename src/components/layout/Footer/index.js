import React, { Component } from 'react'

import styles from './footer.module.scss'
import { Section } from '../'
import { Icon, Button } from '../../Common'

class Footer extends Component {
  state = {
    modalOpen: false,
  }

  handleEmailClick = () => {
    console.log('Open modal');
    this.setState({ modalOpen: true })
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return <>
      <Section dark={true}>
        <Button
          handleClick={this.handleEmailClick}
          secondary={true}
          ghostOnHover={true}
          large={true}
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
