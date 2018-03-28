import axios from 'axios'

let config = {
  baseURI: '/api',
  transformRequest: [
    function (data) {
      let ret = ''
      for (let item in data) {
        ret += `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}&`
      }
      return ret
    }
  ],
  transformResponse: [
    function (data) {
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  timeout: 10000,
  responseType: 'json'
}

axios.interceptors.response.use(function (res) {
  return res.data
})

export function get (url) {
  return axios.get(url, config)
}

export function post (url, data) {
  return axios.post(url, data, config)
}
