import React from 'react'
import { Link } from 'gatsby'

import { Page, SEO, Main } from '../components/Layout'
import { Image } from '../components/Common'

const IndexPage = () => (
  <Page>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Main>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image path="logo.svg" />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Main>
  </Page>
)

export default IndexPage
