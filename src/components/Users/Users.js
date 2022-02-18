import SearchBar from '../SearchBar/SearchBar'
import User from './User/User'
import Repositories from '../Repositories/Repositories'
import { SearchBarWrapper, Wrapper } from './Users.styles'

const Users = () => {
  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar type='user' />
      </SearchBarWrapper>
      <User />
      <Repositories />
    </Wrapper>
  )
}

export default Users
