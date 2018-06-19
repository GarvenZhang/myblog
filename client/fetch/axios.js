import axios from 'axios'
import commonConfig from '../../config'

// 请求配置

const config = {
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

// 拦截器

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('access_token')}`
  return config
})

axios.interceptors.response.use(function (res) {
  return res.data
})

// http 方法

export function get (url) {
  return axios.get(url, config)
}

export function post (url, data) {
  return axios.post(url, data, config)
}

// api 配置

let domainIndex = ''
let domainFileServer = ''

if (process.env.NODE_ENV === 'production') {
  domainFileServer = commonConfig.prod.fileServerDomain
} else {
  domainFileServer = commonConfig.dev.fileServerIP
}

export const api = {
  getLatestListApi: (pageNum, perPage) => `${domainIndex}/api/get_latest_article?pageNum=${pageNum}&perPage=${perPage}`,
  saveArticleApi: () => `${domainIndex}/api/add_article`,
  uploadImgApi: () => `${domainFileServer}upload`,
  getCategoryListApi: () => `${domainIndex}/api/get_article_category`,
  getBestListApi: (pageNum, perPage) => `${domainIndex}/api/get_best_article?pageNum=${pageNum}&perPage=${perPage}`,
  getWorksListApi: () => `${domainFileServer}/api/get_works_list`,
  getArticleLinkListApi: () => `${domainIndex}/api/get_article_link_list`,
  getArticleApi: id => `${domainIndex}/api/get_article?id=${id}`,
  getSearchListApi: (title, pageNum, perPage) => `${domainIndex}/api/get_search_list?title=${title}&pageNum=${pageNum}&perPage=${perPage}`,
  loginApi: data => `${domainIndex}/api/login`,
  getAddressApi: () => `${domainFileServer}address?cb=jp.getAddress`,
  getDictionary: () => `${domainFileServer}dictionary.js?cb=jp.getDictionary`,
  getStreetApi: id => `${domainFileServer}/street?id=${id}&&cb=jp.getStreet`,
  getAllList: () => `${domainIndex}/api/get_all_list`
}
