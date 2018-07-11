import Axios from 'axios'
import { connect } from 'react-redux'

import commonConfig from '../../../config'
// import store from '../redux/store'
import { actionTypes as OTHER_ACTIONTYPES } from '../redux/Other'

// === 状态码分类: === //
/*

1xx: 信息，服务器收到请求，需要请求者继续执行操作
2xx: 成功，操作被成功接收并处理
3xx: 重定向，需要进一步的操作以完成请求
4xx: 客户端错误，请求包含语法错误或无法完成请求
5xx: 服务器错误，服务器在处理请求的过程中发生了错误

*/

// 必须要用实例，因为存在 index 和 cms 项目，开发环境下 拦截器处 挂载在 axios 静态属性上 会冲突
const axios = Axios.create()

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

  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/hellojm.cn.v1+json'
  },

  // 5xx不显示给用户看
  validateStatus: function (status) {
    return status < 500
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
  
  // blacklist
  const notToCheckList = [
    '/api/login',
  ]

  // token过期
  if (res.status === 401 && !notToCheckList.some(item => item === res.config.url)) {

    window.localStorage.setItem('access_token', '')

    // 跟新用户状态
    store.dispatch({
      type: OTHER_ACTIONTYPES.UPDATE_TIPSTYPE,
      tipsType: 1
    })

  }

  // 若响应的状态码为4xx，则给予用户提示
  if (res.status >= 400 && res.status < 500) {
    return Promise.reject(res.data)
  }

  return res.data
}, function (err) {

})

// http 方法
export const get = url => axios.get(url, config)
export const post = (url, data) => axios.post(url, data, config)
export const del = url => axios.delete(url, config)
export const patch = (url, data) => axios.patch(url, data, config)

// api 配置

let domainIndex = ''
let domainFileServer = process.env.NODE_ENV === 'production' ? commonConfig.PROD.FILE_SERVER_DOMAIN : commonConfig.DEV.FILE_SERVER_DOMAIN

export const api = {

  // article
  get_article_latestlist: (pageNum, perPage) => get(`${domainIndex}/api/article/latestlist?pageNum=${pageNum}&perPage=${perPage}`),
  get_article_bestlist: (pageNum, perPage) => get(`${domainIndex}/api/article/bestlist?pageNum=${pageNum}&perPage=${perPage}`),
  post_article: data => post(`${domainIndex}/api/article`, data),
  get_article: id => get(`${domainIndex}/api/article?id=${id}`),
  get_article_linkList: () => get(`${domainIndex}/api/article/linklist`),
  get_article_alllist: () => get(`${domainIndex}/api/article/alllist`),

  // category
  get_category: () => get(`${domainIndex}/api/category`),

  // works
  get_works: () => get(`${domainFileServer}/api/works`),

  // user
  post_login: data => post(`${domainIndex}/api/login`, data),

  get_searchlist: (title, pageNum, perPage) => get(`${domainIndex}/api/get_search_list?title=${title}&pageNum=${pageNum}&perPage=${perPage}`),
  getAddressApi: () => get(`${domainFileServer}/address?cb=jp.getAddress`),
  getDictionary: () => get(`${domainFileServer}/dictionary.js?cb=jp.getDictionary`),
  getStreetApi: id => get(`${domainFileServer}/street?id=${id}&&cb=jp.getStreet`),
  getIndexStorage: () => get(`${domainIndex}/api/get_index_storage`),
  uploadImgApi: () => get(`${domainFileServer}/img`),
}
