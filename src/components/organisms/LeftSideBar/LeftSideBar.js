import SearchBar from '../../molecules/SearchBar/SearchBar'
import User from './components/User/User'
import { MessageWrapper, SearchBarWrapper, Wrapper } from './LeftSideBar.styles'
import Card from '../../molecules/Card/Card'
import { useState } from 'react'
import fetchAppDataByUser from '../../../utils/fetchAppDataByUser'
import {
  FETCHING_DATA_ERROR,
  FETCHING_DATA_SUCCESS,
  useGithubData,
} from '../../../context/githubData'
import Star from '../../atoms/Star/Star'

const LeftSideBar = () => {
  const [username, setUsername] = useState('')
  const { dispatch: dispatchGithubData, state: github } = useGithubData()

  const handleSearchUser = async (event) => {
    event.preventDefault()

    try {
      const response = await fetchAppDataByUser(username)

      dispatchGithubData({ type: FETCHING_DATA_SUCCESS, payload: response })
    } catch (error) {
      dispatchGithubData({ type: FETCHING_DATA_ERROR })
    }
    setUsername('')
  }

  const n = 5
  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar
          text="user"
          onChange={(event) => setUsername(event.target.value)}
          onSubmit={handleSearchUser}
          value={username}
        />
      </SearchBarWrapper>
      {github.data ? (
        <>
          <User userData={github} />
          <h2>Top 5 repositories</h2>
          <ul>
            {github?.data?.reposData.slice(0, 5).map((data) => (
              <Card
                key={data.id}
                right={
                  <>
                    <p>{data.watchers_count}</p>
                    <img
                      src="/icons/view.png"
                      alt="views"
                      height="18px"
                      style={{ paddingLeft: '5px' }}
                    />
                  </>
                }
              >
                <h3>
                  <a href={data.html_url}>{data.name}</a>
                </h3>
                <div style={{ display: 'flex' }}>
                  {[...Array(n)].map((e, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </Card>
            ))}
          </ul>
        </>
      ) : (
        <MessageWrapper>
          <img src='/icons/github.png' alt='github' height='80px' width='80px' />
          <h4>Search for a Github User</h4>
        </MessageWrapper>
      )}
    </Wrapper>
  )
}

export default LeftSideBar
