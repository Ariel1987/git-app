import SearchBar from '../SearchBar/SearchBar'
import User from './User/User'
import { SearchBarWrapper, Wrapper } from './Users.styles'
import Card from '../Card/Card'
import Avatar from '../Avatar/Avatar'

const Users = () => {
  const n = 5

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar type="user" />
      </SearchBarWrapper>
      <User />
      <h2>Top 5 repositories</h2>
      <ul>
        {[...Array(n)].map((e, i) => (
          <Card
            key={i}
            left={
              <Avatar src="/imgs/avatar.jpg" alt="avatar" dimensions={50} />
            }
            right={
              <>
                <p>17k</p>
                <img
                  src="/icons/view.png"
                  alt="views"
                  height="18px"
                  style={{ paddingLeft: '5px' }}
                />
              </>
            }
          >
            <h3>Repository name</h3>
            <div style={{ display: 'flex' }}>
              {[...Array(n)].map((e, i) => (
                <img src="/icons/star.png" alt="star" key={i} height="15px" />
              ))}
            </div>
          </Card>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Users
