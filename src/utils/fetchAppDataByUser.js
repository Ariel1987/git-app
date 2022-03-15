import userApi from '../services/userApi'
import userRepositoriesApi from '../services/userRepositoriesApi'

const fetchAppDataByUser = async (username) => {
  try {
    const githubReposApiResult = await userRepositoriesApi(username)
    const githubApiResult = await userApi(username)
    const { avatar_url, login, followers, following, public_repos, html_url } = githubApiResult.data
    const payload = {
      avatar: avatar_url,
      username: login,
      followers: followers,
      following: following,
      repositories: public_repos,
      profileUrl: html_url,
      reposData: githubReposApiResult.data,
    }
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchAppDataByUser
