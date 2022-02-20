import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: #caf0f8;
    grid-area: Repositories;
    padding-right: 20px;
    padding-left: 20px;

    
    h1 {
      font-size: 18px;
      padding-top: 40px;
    }

    ul {
    }
  `}
`
