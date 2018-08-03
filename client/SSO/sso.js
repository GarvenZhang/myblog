import md5 from 'js-md5'
import $ from '../lib/$'
import ajax from '../lib/ajax'
import { getUrlParams } from '../lib/url'
import config from '../../config'

// 若只作为 iframe 则不存在 很多dom节点, 会执行 catch, 从而只进行 message 事件的监听
const $loginForm = $('.login-form')
const $tips = $('.tips')
const $captcha = $('.img--captcha')
const $account = $('.inp-account')
const $password = $('.inp-password')
const $captchaText = $('.inp-captcah')
const $btnSubmit = $('.btn-submit')
const $linkGithubLogin = $('.link--github')
const $iframe = $('.iframe')

export default () => {

  // 来自哪个网站
  const searchObj = getUrlParams(location.href)
  const redirectUrl = searchObj.from || ''

  // 设置游客登录跳转的url
  $linkGithubLogin.href = `https://github.com/login/oauth/authorize/?client_id=f3af6057b71e9fbd6951&redirect_uri=${config.SSO_DOMAIN}/github/authorization?from=${location.href}`

  // 更新验证码
  const updateCaptcha = () => $captcha.src = `/api/captcha?id=${new Date().getTime()}`
  updateCaptcha()
  $captcha.addEventListener('click', updateCaptcha, false)

  // 更新提示
  const updateTips = text => $tips.textContent = text

  // 若是在cookie中有了access_token, 则直接跨域传递它
  const access_token = searchObj.access_token
  if (access_token) {

    // 发送access_token
    $iframe.contentWindow.postMessage({access_token}, $iframe.src)

    // 放到localStorage
    window.localStorage.setItem('access_token', access_token)

    // 重定向
    location.assign(redirectUrl)
  }

  // 提交表单
  const submitHandle = () => {

    const data = {
      account: $account.value,
      password: config.cryptoPwd(md5, $account.value, $password.value),
      captchaTxt: $captchaText.value,
      role: 1
    }

    ajax({
      method: 'post',
      url: '/api/login',
      headers: {
        'Accept': 'application/hellojm.cn.v1+json',
        'Content-Type': 'application/json',
      },
      data,
    })
      .then(res => {

        // 发送access_token
        $iframe.contentWindow.postMessage({
          type: 'sendAccessToken',
          access_token: res.access_token
        }, $iframe.src)

        // 保存
        window.localStorage.setItem('access_token', res.access_token)

        // 重置提示
        updateTips('')

      })
      .catch(err => {
        updateTips(err.message)
      })

    updateCaptcha()
    $loginForm.reset()

  }

  $btnSubmit.addEventListener('click', submitHandle, false)

}