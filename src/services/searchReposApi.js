import { api, gitApi } from '../config/axios/axios'

const searchReposApi = async () => {
  try {
    return await api.get(
      `${gitApi.baseUrl}search/repositories?client_id=${gitApi.client_id}?client_secret=${gitApi.client_secret}`,
    )
  } catch (error) {
    throw new Error(error)
  }
}

export default searchReposApi
