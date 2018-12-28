import styled from 'styled-components'
import { clearFix, transitions } from 'polished'

export const StyledSocialIcons = styled.ul`
  ${clearFix()}
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;

  li {
    display: inline-block;
		margin: 0 0 0 10px;
		padding: 0;

		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin: 0 0 0 ${({ theme }) => theme.typography.space}px;
		}

		&:first-child {
			margin-left: 0;
		}
  }

  a {
    color: white;
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    ${transitions('color 0.2s')};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  span {
    font-size: 30px;
    line-height: 30px;
  }
`
