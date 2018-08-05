import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import history from '../../router/history'
import store from '../../redux/store'
import config from '../../../../config'
import datetime from '../../../lib/datetime'
import jsonp from '../../fetch/jsonp'
import { actions as UserActions } from '../../redux/User'
import { actions as IframeActions } from '../../redux/Iframe'

import style from './index.css'

const { get_user, logout } = UserActions
const { send_message } = IframeActions

@connect(state => state.UserReducer, {get_user, logout})
@connect(state => state.IframeReducer, {send_message})
export default class TipsBar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      time: datetime.toRegular(new Date()).slice(0, -3),
      city: '',
      weather: '',
    }

    this.timer = null

    this.changeHandle = ::this.changeHandle
    this.timeHandle = ::this.timeHandle
    this.tipsHandle = ::this.tipsHandle

  }

  /**
   * tipsType更新处理
   */
  changeHandle (tipsType) {
    this.setState({
      tipsType
    })
  }

  /**
   * 时间显示处理
   */
  timeHandle () {

    this.timer = setInterval(() => {
      this.setState({
        time: datetime.toRegular(new Date()).slice(0, -3)
      })
    }, 1000 * 60)

  }

  /**
   * 地理位置及天气处理
   */
  locationHandle () {

    const appkey = 35247
    const sign = '6e29d801d1d7ca266ad9192108fb0b74'
    let city = ''

    window.jp_location = {

      /**
       * 获取ip及城市
       */
      getIp: res => {

        const result = res.result
        const cityArr = result.att.split(',')
        city = cityArr[cityArr.length - 1]

        jsonp.get(`//api.k780.com/?app=weather.today&weaid=${result.ip}&appkey=${appkey}&sign=${sign}&format=json&jsoncallback=jp_location.getWeather`, 'weather')
          .then(res => {
            jsonp.delete('weather')
          })
          .catch(err => {
            console.error(err)
          })
      },

      /**
       * 获取天气
       */
      getWeather: res => {

        const result = res.result

        if (!result) {
          this.setState({
            city,
            weather: '无法获取天气',
          })
          return
        }

        const weather = result.weather

        this.setState({
          city,
          weather,
        })
      }
    }

    // jsonp.get('https://api.ipify.org?format=jsonp&callback=jp.getIp', 'ip')
    jsonp.get(`//api.k780.com/?app=ip.local&appkey=${appkey}&sign=${sign}&format=json&jsoncallback=jp_location.getIp`, 'ip')
    jsonp.delete('ip')

  }

  tipsHandle () {

    switch (this.props.role) {

      case 0:
        return (
          <div className={`${style['tips-wrap']} ${style['tips--1']}`}>&nbsp;
            <p className={style['tips']}>您目前属于普通用户，只有 <span className={'theme'}>参阅权限</span> ！</p>
          </div>
        )

      case 1:
        return (
          <div className={`${style['tips-wrap']} ${style['tips--0']}`}>&nbsp;
            <p className={style['tips']}>欢迎回到 <span className={style['theme']}>博客cms</span> !</p>
          </div>
        )

      case 2:
        return (
          <div className={`${style['tips-wrap']} ${style['tips--2']}`}>&nbsp;
            <p className={style['tips']}>由于您登录太长时间，为确保您的安全，需 <span className={'theme'}>重新登录</span> ! </p>
          </div>
        )
    }
  }

  componentWillMount () {

    // 定时器
    this.timeHandle()

  }


  // === 组件内性能优化: === //
  // === 1 render会每次更新数据时都会执行, 而在diff比较的时候, 由于 {a: 1} != {a: 1}, 即引用类型都会新建内存地址从而不同, 所以jsx中不要直接以对象字面量的形式的形式传值, 如 style={{color: 'red'}} === //
  // === 2 绑定this 要放到constructor 中去, 在jsx中 onClick={this.clickHandle.bind(this)} 会在每次执行render时都会执行bind函数, onClick={() => this.clickHandle()} 会在每次 render 时都声明新的函数 === //
  // === 3 在传给子组件值时 做到 需要什么传什么, {...this.state} 这样的写法 会传很多 额外的值 === //
  render () {
    // const linkInfoStyle = {
    //   background: `url(${this.props.avatar_url}) 0 0 no-repeat`
    // }

    return (
      <div className={style['tipsbar-wrap']}>
        <div className={style['life-info-wrap']}>
          <span className={style['date']}>{this.state.time}</span>|
          <span className={style['location']}>{this.state.city}</span>|
          <span className={style['weather']}>{this.state.weather}</span>
        </div>
        {this.tipsHandle()}
        <ul className={style['link-list']}>
          <li className={style['link-item']}>
            {
              this.props.role === 2 ?
                <span onClick={this.props.logout} className={style['link']}>点此重新登录</span> :
                <Link className={style['link']} to='/info'>个人信息</Link>
                // <Link className={style['link']} style={linkInfoStyle} to='/info'>个人信息</Link>
            }
          </li>
          <li className={style['link-item']}>
            <a className={style['link']} to={config.INDEX_DOMAIN}>回到博客</a>
          </li>
          {
            this.props.role === 2 ? '' : (
              <li className={style['link-item']}>
                <a href="javascript: void (0);" onClick={this.props.logout} className={style['link']}>登出</a>
              </li>
            )
          }
        </ul>
      </div>
    )
  }

  componentDidMount () {

    // 获取位置信息
    this.locationHandle()


  }

  componentWillUnmount () {

    this.timer = null
    window.jp_location = null

  }

}
