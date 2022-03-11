import api from '../config/axios/axios'

const githubApi = async () => {
  const url = `https://api.github.com/`
  return await api.get(url)
}

export default githubApi
