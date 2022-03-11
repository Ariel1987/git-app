import githubApi from '../services/githubApi'

const fetchGithubData = async () => {
  try {
    const githubApiResult = await githubApi()
    console.log(githubApiResult)
  } catch (error) {
    throw new Error(error)
  }

}

export default fetchGithubData