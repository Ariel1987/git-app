import { api, gitApi } from '../config/axios/axios'

const reposApi = async () => {
  return await api.get(
    `${gitApi.baseUrl}repositories?client_id=${gitApi.client_id}?client_secret=${gitApi.client_secret}`,
  )
}

export default reposApi
