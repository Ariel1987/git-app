import { Wrapper } from './User.styles'
import Avatar from '../../../../atoms/Avatar/Avatar'

const User = ({ userData }) => {
  return (
    <Wrapper>
      <div>
        <Avatar src={userData.data?.avatar} alt="avatar" dimensions={75} />
        <h2><a href={userData.data?.profileUrl}>{userData.data?.username}</a></h2>
      </div>
      <div>
        <span>Followers: {userData.data?.followers}</span>
        <span>Following: {userData.data?.following}</span>
      </div>
      <h3>Repositories: {userData.data?.repositories}</h3>
    </Wrapper>
  )
}

export default User
