import axios from 'axios'
import { useMyToken } from './composables/auth'

const service = axios.create({
  baseURL: '/api',
})

service.interceptors.request.use(
  function (config) {
    const { getToken } = useMyToken()
    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default service
