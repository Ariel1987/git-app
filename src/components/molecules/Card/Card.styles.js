import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 20px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);
    position: relative;
  `}
`

export const Section = styled.section`
  &:last-of-type {
    margin-left: auto;
    position: absolute;
    top: 10px;
    right: 16px;
    display: flex;
    align-items: center;
  }
`
