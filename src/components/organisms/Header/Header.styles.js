import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: #0077b6;
    grid-area: Header;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10vh;
    align-items: center;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);

    img {
      width: 50px;
      height: auto;
      margin-left: 40px;
    }
  `}
`

