import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import history from '../../router/history'

import store from '../../redux/store'
import { actionTypes as USER_ACTIONTYPES } from '../../redux/User'
import { actions as otherActions } from '../../redux/Other'

const { update_tipstype } = otherActions

import style from './index.css'

class TipsBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tipsType: 0
    }

    this.changeHandle = ::this.changeHandle
    this.reLoginHandle = ::this.reLoginHandle

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
   * 重新登录处理
   */
  reLoginHandle () {

    // 路由
    history.push('/')

    // 重置
    window.localStorage.setItem('access_token', '')

    // 改变验证码
    store.dispatch({
      type: USER_ACTIONTYPES.UPDATE_CAPTCHA,
      captchaId: new Date().getTime()
    })

  }

  /**
   * 提示信息渲染处理
   */
  infoHandle () {

    switch (this.props.tipsType) {

      case 0:
        return (
          <p className={`${style['tips']} ${style['tips--0']}`}>欢迎回到 <span className={style['theme']}>博客cms</span> !</p>
        )
      case 1:
        return (
          <p className={`${style['tips']} ${style['tips--1']}`}>您目前属于普通用户，只有 <span className={'theme'}>参阅权限</span> ！</p>
        )
      case 2:
        return (
          <p className={`${style['tips']} ${style['tips--2']}`}>由于您登录太长时间，为确保您的安全，需 <span className={'theme'}>重新登录</span> ！<span onClick={this.reLoginHandle} className={style['link']}>点此重新登录</span> </p>
        )
    }

  }

  render () {

    return (
      <div className={style['tipsbar-wrap']}>
        {
          this.infoHandle()
        }
      </div>
    )
  }

  componentDidMount () {

  }
}

function mapStateToProps (state) {
  return {
    tipsType: state.tipsType
  }
}

function mapDispatchToProps (dispatch) {
  return {
    update_tipstype: bindActionCreators(update_tipstype, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TipsBar)
