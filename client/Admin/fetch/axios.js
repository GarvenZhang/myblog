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
export default axios

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

// 是否已设置响应拦截器, 只能设置一次, 不然会叠加
let isSetInterceptors = false
export function setResponseInterceptorsInfo () {
  isSetInterceptors = true
}
export function getRespnseInterceptorsInfo () {
  return isSetInterceptors
}

// http 方法
export const get = url => axios.get(url, config)
export const post = (url, data) => axios.post(url, data, config)
export const del = url => axios.delete(url, config)
export const patch = (url, data) => axios.patch(url, data, config)

// api 配置

let domainIndex = ''

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
  delete_category: id => del(`${domainIndex}/api/category?id=${id}`),
  update_category: data => patch(`${domainIndex}/api/category`, data),
  add_category: data => post(`${domainIndex}/api/category`, data),

  // works
  get_works: () => get(`${commonConfig.FILE_SERVER_DOMAIN}/api/works`),

  // user
  get_user: access_token => get(`${domainIndex}/api/user?access_token=${access_token}`),

  get_searchlist: (title, pageNum, perPage) => get(`${domainIndex}/api/get_search_list?title=${title}&pageNum=${pageNum}&perPage=${perPage}`),
  getAddressApi: () => get(`${commonConfig.FILE_SERVER_DOMAIN}/address?cb=jp_address.getAddress`),
  getDictionary: () => get(`${commonConfig.FILE_SERVER_DOMAIN}/dictionary.js?cb=jp_dictionary.getDictionary`),
  getStreetApi: id => get(`${commonConfig.FILE_SERVER_DOMAIN}/street?id=${id}&&cb=jp_address.getStreet`),
  uploadImgApi: () => get(`${commonConfig.FILE_SERVER_DOMAIN}/img`),

  // other
  getIp: () => get(`${domainIndex}/api/ip`),
  getIndexStorage: () => get(`${domainIndex}/api/ndex/storage`),
}
