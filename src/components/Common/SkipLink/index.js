import React from 'react'

import { StyledSkipLink } from './skipLink.styles'

const SkipLink = ({ children }) => (
  <StyledSkipLink class="skip-link" href="#content">
    Skip to content
  </StyledSkipLink>
)

export default SkipLink
