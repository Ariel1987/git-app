import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 20px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 2px 6px -1px rgb(0 0 0 / 35%);

    img {
      width: 15px;
      height: auto;
    }
  `}
`

export const Avatar = styled.section`
  background-image: url('/imgs/avatar.jpg');
  background-size: 50px 50px;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 9px;
`