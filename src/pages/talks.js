import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/layout/page'
import SEO from '../components/layout/seo'

const TalksPage = () => (
  <Page>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
)

export default TalksPage
