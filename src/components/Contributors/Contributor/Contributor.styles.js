import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 20px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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