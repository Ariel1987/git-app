import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: #eee;
    grid-area: Repositories;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 80px;
    height: 100%;
    overflow-y: auto;

    
    h1 {
      font-size: 18px;
      padding-top: 40px;
    }

    ul {
    }
  `}
`
