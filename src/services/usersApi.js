import { api, gitApi } from '../config/axios/axios'

const usersApi = async () => {
  try {
    return await api.get(
      `${gitApi.baseUrl}users`,
    )
  } catch (error) {
    throw new Error(error)
  }
}

export default usersApi
