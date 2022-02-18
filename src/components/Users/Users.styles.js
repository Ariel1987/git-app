import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: white;
    grid-area: Users;
    padding-right: 10%;
    padding-left: 10%;
  `}
`

export const SearchBarWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding-top: 24px;

    input {
      width: 100%;
      padding: 8px 8px;
      border: none;
      border-radius: 4px;
      background: url(/icons/search.png) no-repeat scroll right;
      background-size: 24px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;

      ::placeholder {
        color: #939393;
        font-size: 16px;
      }
    }
  `}
`
