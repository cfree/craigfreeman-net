import React from 'react'

import { StyledSocialIcons } from './socialIcons.styles'
import {
  IconTwitter,
  IconGithub,
  IconLinkedIn,
  IconMeetup,
  IconEmail,
} from '../../../assets/styles/icons'

const SocialIcons = () => (
  <StyledSocialIcons>
    <li>
      <a href="/">
        <IconTwitter title="Twitter" />
      </a>
    </li>
    <li>
      <a href="/">
        <IconGithub title="Github" />
      </a>
    </li>
    <li>
      <a href="/">
        <IconLinkedIn title="LinkedIn" />
      </a>
    </li>
    <li>
      <a href="/">
        <IconMeetup title="Denver Code Club" />
      </a>
    </li>
    <li>
      <a href="/">
        <IconEmail title="Email" />
      </a>
    </li>
  </StyledSocialIcons>
)

export default SocialIcons
