import userApi from '../services/userApi'

const fetchAppDataByUser = async (username) => {
  const payload = {
    avatar: null,
    username: null,
    followers: null,
    following: null,
    repositories: null,
  }

  try {
    const githubApiResult = await userApi(username)
    payload.avatar = githubApiResult.data.avatar_url
    payload.username = githubApiResult.data.login
    payload.followers = githubApiResult.data.followers
    payload.following = githubApiResult.data.following
    payload.repositories = githubApiResult.data.public_repos

    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchAppDataByUser
