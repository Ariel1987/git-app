import SearchBar from '../../molecules/SearchBar/SearchBar'
import User from './components/User/User'
import { SearchBarWrapper, Wrapper } from './LeftSideBar.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'
import { useState } from 'react'
import fetchAppDataByUser from '../../../utils/fetchAppDataByUser'

const LeftSideBar = () => {
  const [username, setUsername] = useState('')
  const userData = ''
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = username === '' ? '' : fetchAppDataByUser(username)
    console.log(userData)
  }

  const n = 5

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar
          text="user"
          onChange={(event) => setUsername(event.target.value)}
          onSubmit={handleSubmit}
        />
      </SearchBarWrapper>
      {userData && (
        <>
          <User userData={userData} />
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
        </>
      )}
    </Wrapper>
  )
}

export default LeftSideBar
