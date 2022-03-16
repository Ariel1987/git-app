import usersApi from '../services/usersApi'

const fetchAppDataByUsers = async () => {
  const payload = {
    data: null,
  }

  try {
    const githubApiResult = await usersApi()
    payload.data = githubApiResult.data

    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchAppDataByUsers
