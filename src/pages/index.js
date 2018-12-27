import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/layout/page'
import Image from '../components/image'
import SEO from '../components/layout/seo'

const Heading = styled.h1`
  background: tomato;
  font-style: italic;
`

const IndexPage = () => (
  <Page>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading>Hi people</Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image path="logo.svg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Page>
)

export default IndexPage
