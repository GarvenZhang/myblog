import axios from 'axios'
import commonConfig from '../../config'

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

const NODE_ENV = process.env.NODE_ENV
let domain = ''
if (NODE_ENV === 'development' && typeof window !== 'undefined') {  // 开发环境，typeof 是为了兼容nodejs
  if (window.location.port === commonConfig.dev.indexPort) {
    domain = `http://localhost:${commonConfig.dev.indexServerPort}`
  } else if (window.location.port === commonConfig.dev.cmsPort) {
    domain = `http://localhost:${commonConfig.dev.cmsServerPort}`
  }
}

export const api = {
  getLatestListApi: (pageNum, perPage) => `${domain}/api/get_latest_article?pageNum=${pageNum}&perPage=${perPage}`,
  saveArticleApi: () => `${domain}/api/add_article`,
  getCategoryListApi: () => `${domain}/api/get_article_category`,
  getBestListApi: (pageNum, perPage) => `${domain}/api/get_best_article?pageNum=${pageNum}&perPage=${perPage}`,
  getArticleLinkListApi: () => `${domain}/api/get_article_link_list`,
  getArticleApi: id => `${domain}/api/get_article?id=${id}`,
  getSearchListApi: (title, pageNum, perPage) => `${domain}/api/get_search_list?title=${title}&pageNum=${pageNum}&perPage=${perPage}`
}
