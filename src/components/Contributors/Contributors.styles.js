import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: white;
    grid-area: Contributors;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-right: 20px;
    padding-left: 20px;

    h1 {
      font-size: 18px;
      padding-top: 40px;
    }
  `}
`
