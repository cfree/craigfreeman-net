import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styles from './page.module.scss'
import { Header, Footer } from '../'

const Page = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.page}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="content">
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
