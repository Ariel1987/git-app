import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
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
