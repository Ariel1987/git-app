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

  const sortRepositories = (a, b) => {
    if (a.watchers_count > b.watchers_count) {
      return -1;
    }
    if (a.watchers_count < b.watchers_count) {
      return 1;
    }
    return 0;
  }

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
            {github?.data?.reposData.sort(sortRepositories).slice(0, 5).map((data) => (
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
                <p>Description: {data.description}</p>
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

//const n = github?.data?.reposData.watchers_count > 5 ? 5 : github?.data?.reposData.watchers_count 
