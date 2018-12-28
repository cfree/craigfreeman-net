import styled from 'styled-components'

export const StyledMain = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.vars.bs};
  padding: 20px;
`
