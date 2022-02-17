import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: #c4c4c4;   
    grid-area: Header; 
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10vh;
    align-items: center;

    img {
      width: 50px;
      height: auto;
      margin-left: 20px;
    }
  `}
`