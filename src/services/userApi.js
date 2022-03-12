import { api, gitApi } from '../config/axios/axios'

const userApi = async (username) => {
  return await api.get(
    `${gitApi.baseUrl}users/${username}?client_id=${gitApi.client_id}?client_secret=${gitApi.client_secret}`,
  )
}

export default userApi
