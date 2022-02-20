import { Wrapper } from './User.styles'

const User = () => {
  return (
    <Wrapper>
      <div>
        <img src="/imgs/avatar.jpg" alt="avatar" />
        <h1>Ariel1987</h1>
      </div>
      <div>
        <span>Followers: 70</span>
        <span>Following: 70</span>
      </div>
      <h3>Repositories: 70</h3>
    </Wrapper>
  )
}

export default User
