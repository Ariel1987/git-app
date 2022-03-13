import { api, gitApi } from '../config/axios/axios'

const userRepositoriesApi = async (username) => {
  return await api.get(
    `${gitApi.baseUrl}users/${username}/repos?client_id=${gitApi.client_id}?client_secret=${gitApi.client_secret}`,
  )
}

export default userRepositoriesApi
