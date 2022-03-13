import { Wrapper } from './User.styles'
import Avatar from '../../../../atoms/Avatar/Avatar'

const User = (props) => {
  return (
    <Wrapper>
      <div>
        <Avatar src={props.userData.data?.avatar} alt="avatar" dimensions={75} />
        <h1>{props.userData.data?.username}</h1>
      </div>
      <div>
        <span>Followers: {props.userData.data?.followers}</span>
        <span>Following: {props.userData.data?.following}</span>
      </div>
      <h3>Repositories: {props.userData.data?.repositories}</h3>
    </Wrapper>
  )
}

export default User
