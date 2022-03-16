import searchReposApi from "../services/searchReposApi"

const fetchAppDataByReposSearch = async () => {
  const payload = {
    data: null,
  }

  try {
    const githubApiResult = await searchReposApi()
    payload.data = githubApiResult.data
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchAppDataByReposSearch
