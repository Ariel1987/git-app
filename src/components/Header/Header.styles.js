import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: #778da9;
    grid-area: Header;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10vh;
    align-items: center;

    img {
      width: 50px;
      height: auto;
      margin-left: 40px;
    }
  `}
`

export const SearchBarWrapper = styled.section`
  ${({ theme }) => css`
    input {
      width: 100%;
      padding: 8px 8px;
      border: none;
      border-radius: 4px;
      background: url(/icons/search.png) no-repeat scroll right;
      background-size: 24px;
      background-color: white;

      ::placeholder {
        color: #939393;
        font-size: 16px;
      }
    }
  `}
`
