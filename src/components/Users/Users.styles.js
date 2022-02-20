import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: white;
    grid-area: Users;
    padding-right: 15%;
    padding-left: 15%;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h1 {
      font-size: 18px;
    }

    h2 {
      padding-top: 40px;
    }

    h3 {
      padding-bottom: 4px;
    }

    p {
      display: none;
    }
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
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      ::placeholder {
        color: #939393;
        font-size: 16px;
      }
    }
  `}
`

export const RepositoryWrapper = styled.ul`
  margin: 0;
`
