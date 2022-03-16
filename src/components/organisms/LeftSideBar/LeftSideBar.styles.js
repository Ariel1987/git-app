import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: white;
    grid-area: Users;
    padding-right: 15%;
    padding-left: 15%;
    z-index: 10;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);
    height: 100%;
    overflow-y: auto;


    h1 {
      font-size: 18px;
    }

    h2 {
    }

    h3 {
      padding-bottom: 4px;
    }

    h4 {
      text-align: center;
      padding-top: 16px;
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

export const MessageWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  `}
`