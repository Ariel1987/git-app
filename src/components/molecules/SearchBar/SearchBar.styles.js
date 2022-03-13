import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    padding: 8px 8px;
    border-radius: 4px;
    background-size: 24px;
    background-color: white;
    display: flex;

    ::placeholder {
      color: #939393;
      font-size: 16px;
    }

    input {
      border: none;
      width: 90%;
    }

    button {
      border: none;
      background-color: transparent;
    }

    img {
      height: 20px;
      width: auto;
    }
  `}
`
