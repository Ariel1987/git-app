import reposApi from "../services/reposApi"

const fetchAppDataByRepos = async () => {
  const payload = {
    data: null,
  }

  try {
    const githubApiResult = await reposApi()
    payload.data = githubApiResult.data
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchAppDataByRepos
