import styled from 'styled-components'

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.grayDark};
`

export const StyledHeaderLogo = styled.h1`
  margin: 15px 0;
  padding: 0;

  img {
    max-height: 80px;
    transition: max-height .3s;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }
`

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: stretch;
`

export const StyledHeaderNav = styled.div`
  margin-left: auto;
`
