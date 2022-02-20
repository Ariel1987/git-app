import SearchBar from '../SearchBar/SearchBar'
import User from './User/User'
import { RepositoryWrapper, SearchBarWrapper, Wrapper } from './Users.styles'
import Repository from '../Repositories/Repository/Repository'

const Users = () => {
  const n = 5

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar type="user" />
      </SearchBarWrapper>
      <User />
      <h2>Top 5 repositories</h2>
      <RepositoryWrapper>
        {[...Array(n)].map((e, i) => (
          <Repository key={i} />
        ))}
      </RepositoryWrapper>
    </Wrapper>
  )
}

export default Users
