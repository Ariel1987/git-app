import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: white;
    grid-area: Users;
    padding-right: 15%;
    padding-left: 15%;
    z-index: 10;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);

    h1 {
      font-size: 18px;
    }

    h2 {
      padding-top: 40px;
    }

    h3 {
      padding-bottom: 4px;
    }
  `}
`

export const SearchBarWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 24px;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);
    border-radius: 4px;
  `}
`