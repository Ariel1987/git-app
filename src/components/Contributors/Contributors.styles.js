import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: white;
    grid-area: Contributors;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);
    padding-right: 20px;
    padding-left: 20px;
    overflow-y: auto;

    h1 {
      font-size: 18px;
      padding-top: 40px;
    }
  `}
`
