import axios from 'axios'

const gitApi = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
}

const api = axios.create()

export { api, gitApi }
