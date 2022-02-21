import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10vh 90vh;
    grid-template-areas:
      'Header Header Header'
      'Users Repositories Contributors';
    height: 100vh;
  `}
`
