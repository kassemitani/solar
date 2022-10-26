import axios, { AxiosRequestConfig } from 'axios'
import { BASE_URL } from './endpoints'

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
  })
  
  api.interceptors.request.use(function(config: AxiosRequestConfig) {
    if (config.headers) {
      config.headers.Accept = 'application/json'
    }
    return config
  })


export default api