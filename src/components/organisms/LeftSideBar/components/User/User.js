import { Wrapper } from './User.styles'
import Avatar from '../../../../atoms/Avatar/Avatar'

const User = (props) => {

  console.log(props.userData)
  return (
    <Wrapper>
      <div>
        <Avatar src={props.userData.avatar} alt="avatar" dimensions={75} />
        <h1>{props.userData.username}</h1>
      </div>
      <div>
        <span>Followers: {props.userData.followers}</span>
        <span>Following: {props.userData.following}</span>
      </div>
      <h3>Repositories: {props.userData.repositories}</h3>
    </Wrapper>
  )
}

export default User
