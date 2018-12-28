import styled from 'styled-components'

const Icon = styled.span`
  position: relative;
  text-indent: -9999em;
  overflow: hidden;

  &:before {
    font-family: ${({ theme }) => theme.typography.fonts.icons} !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    speak: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const IconHamburger = styled(Icon)`
  &:before {
    content: 'h';
  }
`

export const IconAtSign = styled(Icon)`
  &:before {
    content: 'a';
  }
`

export const IconTwitter = styled(Icon)`
  &:before {
    content: 't';
  }
`

export const IconCode = styled(Icon)`
  &:before {
    content: 'm';
  }
`

export const IconCogs = styled(Icon)`
  &:before {
    content: 'c';
  }
`

export const IconLinkedIn = styled(Icon)`
  &:before {
    content: 'l';
  }
`

export const IconEmail = styled(Icon)`
  &:before {
    content: 'e';
  }
`

export const IconMountain = styled(Icon)`
  &:before {
    content: 's';
  }
`

export const IconCategories = styled(Icon)`
  &:before {
    content: 'b';
  }
`

export const IconTools = styled(Icon)`
  &:before {
    content: 'o';
  }
`

export const IconGithub = styled(Icon)`
  &:before {
    content: 'g';
  }
`

export const IconJs = styled(Icon)`
  &:before {
    content: 'j';
  }
`

export const IconArrowRight = styled(Icon)`
  &:before {
    content: '>';
  }
`

export const IconArrowLeft = styled(Icon)`
  &:before {
    content: '<';
  }
`

export const IconArrowUp = styled(Icon)`
  &:before {
    content: '^';
  }
`

export const IconArrowDown = styled(Icon)`
  &:before {
    content: 'v';
  }
`

export const IconCss = styled(Icon)`
  &:before {
    content: '3';
  }
`

export const IconHtml = styled(Icon)`
  &:before {
    content: '5';
  }
`

export const IconExit = styled(Icon)`
  &:before {
    content: 'x';
  }
`

export const IconSearch = styled(Icon)`
  &:before {
    content: 'f';
  }
`

export const IconData = styled(Icon)`
  &:before {
    content: 'q';
  }
`

export const IconPortfolio = styled(Icon)`
  &:before {
    content: 'u';
  }
`

export const IconTags = styled(Icon)`
  &:before {
    content: 'w';
  }
`

export const IconCalendar = styled(Icon)`
  &:before {
    content: 'y';
  }
`

export const IconComments = styled(Icon)`
  &:before {
    content: 'z';
  }
`

export const IconDownload = styled(Icon)`
  &:before {
    content: 'i';
  }
`

export const IconMeetup = styled(Icon)`
  &:before {
    content: 'k';
  }
`

export const IconDesign = styled(Icon)`
  &:before {
    content: 'd';
  }
`
