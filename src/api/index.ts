import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api'
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

// config some logics

// instance.interceptors.request.use(
//   (config) => {
//     const session = getCookie('token') ? getCookie('token') : ''
//     if (session) {
//       setCookie('token', session, 45)
//     }
//     config.headers['Authorization'] = `Token ${session}`
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
// // handle 401 errors
// instance.interceptors.response.use(
//   (res) => {
//     res.ok = true
//     return res
//   },
//   async (err) => {
//     const originalConfig = err.config
//     if (originalConfig.url !== '/user/login' && err.response) {
//       // Access Token was expired
//       if (err.response.status === 403) {
//         localStorage.removeItem('sessionData')
//         window.location.reload()
//         err.response.data = []
//         return err.response
//       }
//     }
//     return Promise.reject(err)
//   }
// )
const api = instance
export async function getRequest(url: string, params?: any) {
  return api.get(url, {
    params: params,
  })
}
export async function postRequest(url: string, body: any) {
  return api.post(url, body)
}
export async function patchRequest(url: string, body: any) {
  return api.patch(url, body)
}
export async function putRequest(url: string, params = null) {
  return api.put(url, params)
}
export async function deleteRequest(url: string) {
  return api.delete(url)
}
