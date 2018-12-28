import styled from 'styled-components'

export const StyledNav = styled.nav`
  text-align: right;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const StyledNavList = styled.ul`
  list-style: none;
  margin: auto 0 0;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 0 0 20px;

    &:hover {
      a {
        &:before {
          max-width: 4px;

          @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            left: 0;
            max-width: 100%;
          }
        }
      }
    }
  }

  a {
    font-size: 16px;
    font-size: 1.6rem;
    padding: ${({ theme }) => theme.typography.space}px 0;
    color: ${({ theme }) => theme.colors.white};
    display: block;
    letter-spacing: 1px;
    position: relative;
    font-family: ${({ theme }) => theme.typography.fonts.primary};
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 20px;
      font-size: 2rem;
    }

    &:before {
      background: ${({ theme }) => theme.colors.secondary};
      content: '';
      left: 0;
      height: 100%;
      max-width: 0;
      position: absolute;
      top: 0;
      transition: all 0.2s;
      width: 100%;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        bottom: 0;
        left: 50%;
        height: 8px;
        top: auto;
      }
    }

    &:hover {
      text-decoration: none;				
    }
  }
`

export const StyledNavSocialIcons = styled.div`
  margin: 20px 0 -10px;
`
