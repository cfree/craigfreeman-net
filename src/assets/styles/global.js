import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import cfNetEOT from '../fonts/cf-net.eot';
import cfNetSVG from '../fonts/cf-net.svg';
import cfNetTTF from '../fonts/cf-net.ttf';
import cfNetWOFF from '../fonts/cf-net.woff';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${theme.typography.fonts.serif};
    /* Root for rems
      62.5% takes 16px (browser default size for medium text) down to 10px
      ref: http://clagnut.com/blog/348/ */
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${theme.colors.grayDark};
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
  }

  /* Typography */
  body,
  button,
  input,
  select,
  textarea {
    color: ${theme.colors.grayDark};
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.2;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 20px;
      font-size: 2rem;
    }
  }

  /* Fonts - Icons */
  @font-face {
    font-family: ${theme.typography.fonts.icons};
    src: local('cf-net');
    src: url(${cfNetEOT});
    src: url(${cfNetEOT}?#iefix) format('embedded-opentype'),
      url(${cfNetWOFF}) format('woff'),
      url(${cfNetTTF}) format('truetype'),
      url(${cfNetSVG}#cf-net) format('svg');
    font-weight: normal;
    font-style: normal;
  }
`
