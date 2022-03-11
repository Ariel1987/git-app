import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;

    div {
      display: flex;
      align-items: center;

      h1 {
        font-size: 24px;
      }

      h3 {
        font-size: 18px;
      }

      img {
        width: 50px;
        height: auto;
        border-radius: 50%;
        margin-right: 8px;
      }
    }

    div: last-of-type {
      justify-content: space-between;
      padding-top: 24px;
      padding-bottom: 4px;
      font-size: 12px;
      font-weight: bold;
    }
  `}
`
