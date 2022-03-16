import { Wrapper } from './Header.styles'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import { useState } from 'react'
import {
  FETCHING_DATA_ERROR,
  FETCHING_DATA_SUCCESS,
  useGithubData,
} from '../../../context/githubData'
import fetchAppDataByReposSearch from '../../../utils/fetchAppDataByRepos'

const Header = () => {
  const [repository, setRepository] = useState()
  const { dispatch: dispatchGithubData, state: github } = useGithubData()

  const handleSearchRepository = async (event) => {
    // event.preventDefault()

    // try {
    //   const response = await fetchAppDataByReposSearch()
    //   dispatchGithubData({ type: FETCHING_DATA_SUCCESS, payload: response })
    // } catch (error) {
    //   dispatchGithubData({ type: FETCHING_DATA_ERROR })
    // }
    // setRepository('')
  }
  console.log(github)
  return (
    <Wrapper>
      <img src="/icons/logo.png" alt="logo" />
      <SearchBar
        text={'repository'}
        onChange={(event) => setRepository(event.target.value)}
        onSubmit={handleSearchRepository}
        value={repository}
      />
    </Wrapper>
  )
}

export default Header
