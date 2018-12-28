import React from 'react'

import { SEO } from '../components/Layout'
import { NotFound } from '../components/Common'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" htmlClasses="notFoundPage" />
    <NotFound />
  </>
)

export default NotFoundPage
