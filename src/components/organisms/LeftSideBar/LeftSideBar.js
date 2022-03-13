import SearchBar from '../../molecules/SearchBar/SearchBar'
import User from './components/User/User'
import { SearchBarWrapper, Wrapper } from './LeftSideBar.styles'
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
  const { dispatch: dispatchGithubData, state: data } = useGithubData()

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
  console.log(data)
  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar
          text="user"
          onChange={(event) => setUsername(event.target.value)}
          onSubmit={handleSearchUser}
        />
      </SearchBarWrapper>
      <User userData={data} />
      <h2>Top 5 repositories</h2>
      <ul>
        {data.data?.reposData.data.slice(0, 5).map((data, i) => (
          <Card
            key={i}
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
            <h3>{data.name}</h3>
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

export default LeftSideBar
