import axios from 'axios'

const gitApi = {
  baseUrl: 'https://api.github.com/',
  client_id: 'Iv1.9dce002b4b40a875',
  client_secret: '4122963d3f8f493dff656dec0fccabe286afca8f',
}

const api = axios.create()

export { api, gitApi }
