// === CSRF: 跨站请求伪造(用户登录A网站，A网站确认身份，B网站带着用户身份请求A网站) === //
// === 1 攻击过程: 用户在网站A页面中登录后，网站A后端会将凭证放在cookie中，之后用户发请求时后端就去cookie中拿凭证来确认用户身份。即用户登录之后，只要是网站A中的所有url请求都可以发送成功，因为发送时浏览器会自动携带域的cookie。那么，攻击者就可以让用户去请求网站A的后端，比如直接发给用户一个请求网站A后端的url，比如诱导他打开一个自动提交表单数据到网站A后端的网站，比如往他的留言中发一个带有请求url的图片等 === //
// === 2 攻击特征及防御手段 === //
// === 2.1 B网站向A网站请求, 带A网站的cookie: samesite === //
// === 2.2 不访问A网站前端: 由于同源策略也拿不到A网站的节点内容和cookie, 在前端页面加入验证信息 - 验证码 / token === //
// === 2.3 referer为B网站: 验证referer === //
// === 3 防御手段: === //
// === 3.1 验证码: === //
// === 3.2 sameSite: === //
// === 3.3 token: === //
// === 3.4 referer: === //

// === 同源策略: === //
// === 1 同源: 协议、域名、端口相同 === //
// === 2 限制: Cookie、LocalStorage, IndexDB, DOM 无法获取, AJAX无法发送请求 === //
// === 3 避免: === //
// === 3.1 cookie: 对于两个页面一级域名同而二级域名不同的，可以通过将document.domain设置为一级域名，或者在document.cookie设domain, 或者服务器端设置Set-Cookie的domain来通信 === //
// === 3.2 DOM: 若打开不同源的iframe 或 通过window.open()打开, 无法获取到对方的DOM, 若只是域名级别不同可通过设docuemnt.domain; 若完全不同域, 则有以下3种方法: === //
// === 3.2.a location.hash: hash改变不会刷新页面, 父窗口把信息写入子窗口的hash，子窗口通过监听 hashchange事件 来获取 === //
// === 3.2.b window.name: === //
// === 3.2.c window.postMessage: === //
// === 3.3 AJAX: === //
// === 3.3.a jsonp: script标签中的src不受同源策略限制 === //
// === 3.3.b WebSocket: 服务器通过检查Origin字段是否在白名单中来决定是否通信 === //
// === 3.3.c CORS: === //

import config from '../../config'
import { getUrlParams } from '../lib/url'
import ssoMain from './sso'

import './index.css'
import './reset.css'

const searchObj = getUrlParams(location.href)

// sso 登录页面主要逻辑
if (!searchObj.noOwnIframe) {
  ssoMain()
}

// 来自哪个网站
const redirectUrl = searchObj.from || ''

// origin白名单
const whitelist = [
  config.INDEX_DOMAIN,
  config.CMS_DOMAIN
]

// 接收message, 准备跳转
window.addEventListener('message', e => {

  if (!whitelist.includes(e.origin)) {
    return
  }

  switch (e.data.type) {

    case 'getAccessToken':

      e.source.postMessage({
        type: 'responseAccessToken',
        access_token: window.localStorage.getItem('access_token')
      }, e.origin)

      break

    case 'logout':

      window.localStorage.removeItem('access_token')

      e.source.postMessage({
        type: 'logout',
        retCode: 1
      }, e.origin)

    case 'responseSendAccessToken':

      if (e.data.retCode !== 1) {
        return
      }

      location.assign(redirectUrl)

  }

}, false)




