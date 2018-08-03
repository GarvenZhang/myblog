import Axios from 'axios'
import { connect } from 'react-redux'

import commonConfig from '../../../config'

// === 状态码分类: === //
/*

1xx: 信息，服务器收到请求，需要请求者继续执行操作
2xx: 成功，操作被成功接收并处理
3xx: 重定向，需要进一步的操作以完成请求
4xx: 客户端错误，请求包含语法错误或无法完成请求
5xx: 服务器错误，服务器在处理请求的过程中发生了错误

*/

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
let domainFileServer = commonConfig.FILE_SERVER_DOMAIN

export const api = {

  // article
  get_article_latestlist: (page_num, per_page) => get(`${domainIndex}/api/article/latestlist?page_num=${page_num}&per_page=${per_page}`),
  get_article_bestlist: (page_num, per_page) => get(`${domainIndex}/api/article/bestlist?page_num=${page_num}&per_page=${per_page}`),
  post_article: data => post(`${domainIndex}/api/article`, data),
  get_article: id => get(`${domainIndex}/api/article?id=${id}`),
  get_article_linkList: () => get(`${domainIndex}/api/article/linklist`),
  get_article_alllist: () => get(`${domainIndex}/api/article/alllist`),
  get_searchlist: (title, page_num, per_page) => get(`${domainIndex}/api/get_search_list?title=${title}&page_num=${page_num}&per_page=${per_page}`),

  // category
  get_category: () => get(`${domainIndex}/api/category`),

  // works
  get_works: () => get(`${domainFileServer}/api/works`),

  // user
  get_user: () => get(`${domainIndex}/api/user`),
  logout: () => patch(`${domainIndex}/api/logout`),

  // comment
  get_comment: (article_id, page_num, per_page) => get(`${domainIndex}/api/comment?article_id=${article_id}&per_page=${per_page}&page_num=${page_num}`),
  add_comment: (data) => post(`${domainIndex}/api/comment`, data),

  // 获取点赞数
  get_liked: (name, value, page_num, per_page) => get(`${domainIndex}/api/liked?${name}=${value}&per_page=${per_page}&page_num=${page_num}`),
  add_liked: (data) => post(`${domainIndex}/api/liked`, data),
  update_liked: (data) => patch(`${domainIndex}/api/liked`, data),

  // other
  getIndexStorage: () => get(`${domainIndex}/api/index/storage`),

}
