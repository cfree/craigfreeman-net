import styled from 'styled-components'
import { clearFix } from 'polished'
// Reusable styles to be composed
// Custom utility classes (a la Polished)
export const StyledError = styled.div``

export const StyledContainer = styled.div`
  ${clearFix()}
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
  padding: 0 ${({ theme }) => theme.typography.space * 0.5}px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 ${({ theme }) => theme.typography.space * 0.75}px;
	}
`

