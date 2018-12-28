import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../../assets/styles/global'
import theme from '../../../assets/styles/theme'
import { Header, Footer } from '../'
import { StyledPage } from './page.styles'

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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <StyledPage>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div id="content">
              {children}
            </div>
            <Footer />
          </StyledPage>
        </>
      </ThemeProvider>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
