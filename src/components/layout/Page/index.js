import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import globalStyles from '../../../assets/styles/global'
import theme from '../../../assets/styles/theme'
import Header from '../Header'
import Footer from '../Footer'
// import './layout.css'

createGlobalStyle`${globalStyles(theme)}`

const StyledContainer = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.vars.bs};
  padding: 20px;
`

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
          <Header siteTitle={data.site.siteMetadata.title} />
          <StyledContainer>
            {children}
          </StyledContainer>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
