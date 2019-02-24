import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Slidebar from '../../components/Slidebar/index'
import { SecondaryPasswordLogin } from '../../components/Iframe/index'
import Img from '../../components/Img'
import { actions as UserActions } from '../../redux/User'
import { actions as AddressActions } from '../../redux/Adress'
import jsonp from '../../fetch/jsonp'
import trieTree from './trieTree'
import { api } from '../../fetch/axios'
import config from '../../../../config'

import style from './index.css'
import avatar from './github-default-avatar.png'

@connect(state => state.UserReducer, {...UserActions})
@connect(state => state.AddressReducer, {...AddressActions})
export default class AdminAccount extends Component {
  constructor (props) {
    super(props)

    this.selectHandle = ::this.selectHandle
    this.submithHandle = ::this.submithHandle
    this.changeHandle = ::this.changeHandle
  }

  static defaultProps = {
    avatar: '',
    name: '',
    province: '',
    city: '',
    district: '',
    contact: '',
    wechat: '',
    blog: '',
    github: '',
    account: '',
  }

  selectHandle (e) {

    const value = e.target.value
    const name = e.target.name

    // 将对象转化为数组
    let ret
    let nextData

    if (name === 'province' || name === 'city') {
      ret = []
      nextData = trieTree.getChild(value)

      for (var id in nextData) {
        if (typeof nextData[id] === 'object') {
          ret.push(nextData[id])
        }
      }

    }

    // 联动
    switch (name) {

      case 'province':
        this.props.update_address({
          province: value,
          cityList: ret,
          districtList: [],
          streetList: []
        })
        break

      case 'city':
        this.props.update_address({
          city: value,
          districtList: ret,
          streetList: []
        })
        break

      case 'district':
        this.props.update_address({
          district: value
        })
        jsonp.get(api.getStreetApi(value), 'street')
        jsonp.delete('street')
        break

      case 'street':
        this.props.update_address({
          street: value
        })
        break
    }

  }

  changeHandle (e) {

    const target = e.target
    this.props.change_info({
      [target.name]: target.value
    })

  }

  submithHandle (e) {

    // 过滤

    // 普遍
    const whiteList = [
      'password', 'secondary_password', 'name', 'wechat', 'github_url', 'phone', 'avatar_url', 'resume_url'
    ]
    let filteredParams = {}
    for (let key in this.props) {
      whiteList.includes(key) && this.props[key] && (filteredParams[key] = this.props[key])
    }

    // 地址
    const address = this.props.street || this.props.district || this.props.city || this.props.province
    if (address) {
      filteredParams.address = address
    }

    this.props.update_user(filteredParams)

  }

  render () {

    const {
      provinceList, cityList, districtList, streetList, province, city, district, street
    } = this.props

    return (
      <div className="admin-info-page admin-inner">
        <div className="sildebar-wrap">
          <Slidebar />
        </div>
        <div className="admin-wrap">
          <section className={style['section--avatar']}>
            <span className={style['title']}>头像:</span>
            <Img className={style['img']} src={this.props.avatar_url} defaultSrc={avatar} alt="头像"/>
          </section>
          <section className={style['section--info']}>
            <form className={style['form']}>
              <div className={style['field']}>
                <span className={style['title']}>昵称:</span>
                <input name='name' className={style['input']} type="text" value={this.props.name}/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>地址:</span>
                <select
                  className={style['select']}
                  onChange={this.selectHandle}
                  name='province'
                  value={province}
                >
                  {
                    provinceList.map((item, index) => {
                      return <option key={index} value={item.id}>{item.text}</option>
                    })
                  }
                </select>
                <select
                  className={style['select']}
                  name='city'
                  onChange={this.selectHandle}
                  value={city}
                >
                  {
                    cityList.map((item, index) => {
                      return <option key={index} value={item.id}>{item.text}</option>
                    })
                  }
                </select>
                <select
                  className={style['select']}
                  name='district'
                  value={district}
                  onChange={this.selectHandle}
                >
                  {
                    districtList.map((item, index) => {
                      return <option key={index} value={item.id}>{item.text}</option>
                    })
                  }
                </select>
                <select
                  className={style['select']}
                  name='street'
                  onChange={this.selectHandle}
                  value={street}
                >
                  {
                    streetList.map((item, index) => {
                      return <option key={index} value={item.id}>{item.text}</option>
                    })
                  }
                </select>
              </div>
              <div className={style['field']}>
                <span className="title">联系方式:</span>
                <input name='phone' className={style['input']} type="number" value={this.props.phone} onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <span className="title">微信:</span>
                <input name='wechat' className={style['input']} type="text" value={this.props.wechat}  onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <span className="title">微信:</span>
                <input name='email' className={style['input']} type="text" value={this.props.email}  onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <span className="title">github:</span>
                <input name='github_url' className={style['input']} type="text" value={this.props.github_url}  onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <input type="button" className="btn-submit" value='确定' onClick={this.submithHandle}/>
              </div>
            </form>
          </section>
          <section className={style['section--account']}>
            <form className={style['form']}>
              <div className={style['field']}>
                <span className={style['title']}>账号:</span>
                <input type="text" className={style['input']} readOnly value={this.props.account || this.props.github_url}/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>密码:</span>
                <input type="password" name='password' className={style['input']} value={this.props.password} onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>新密码:</span>
                <input type="password" name='new_password' className={style['input']} value={this.props.newPassword} onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>二级密码:</span>
                <input type="password" name='secondary_password' className={style['input']} value={this.props.secondary_password} onChange={this.changeHandle}/>
              </div>
              <div className={style['field']}>
                <input type="button" className={style['btn-submit']} value='提交' onClick={this.submithHandle}/>
              </div>
            </form>
          </section>
          <section className={style['section--spwd']}>
            <SecondaryPasswordLogin account={this.props.account} access_token={this.props.access_token}/>
          </section>
        </div>
      </div>
    )
  }

  componentDidMount () {

    this.props.get_user(true)

    // === this: 指向执行上下文 === //

    // === 1 call/apply/bind: 改变函数执行时的上下文, 即this指向 === //
    // === 1.1 区别: === //
    // === 1.1.a call: (执行上下文, 参数1, 参数2, ...) === //
    // === 1.1.b apply: (执行上下文, [参数1, 参数2, ...]) === //
    // === 1.1.c bind: 函数.bind(执行上下文) === //
    // === 1.2 应用: === //
    // === 1.2.a 求数组中的最值: Math.max.apply(Math, [1, 3, 5, 2]) === //
    // === 1.2.b 将伪数组转化为数组: [].slice.call({0: 'eee', 1: 'fee'}) === //
    // === > 伪数组: 数据结构为以数字为下标, 且有length属性 === //

    // === 2 箭头函数: 使用 => 定义函数 === //
    // === 2.1 特点: === //
    // === 2.1.a 参数加括号，一个参数可不加 === //
    // === 2.1.b 返回值为对象要加括号, 不许返回值加voie === //
    // === 2.1.c 没有this, 所以this为外层代码块的this, 没有this则不可用作构造函数, 关于this的特点都没用 === //
    // === 2.1.d 没有arguments, super, new.target, 函数体内需用rest参数代替arguments === //
    // === 2.1.e 不能用作Generator函数 === //
    // === 2.2 用处: === //
    // === 2.2.a this指向固定化 === //
    // === 2.2.b 简化回调: [1, 2, 3].map(x => x * x) === //
    // === 2.2.c 多重箭头函数:  === //

    // === 3 双冒号运算符: 箭头函数可绑定this对象, 大大减少了显示地绑定(call, apply, bind), 但并非使用所有场景, 而es7中的function bind syntax可以用来取代 === //
    // === 3.1 语法: 函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面 === //
    // === 3.2 特性: === //
    // === 3.2.a 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面 === //
    // === 3.2.b 如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法 === //

    // === jsonp: 通过script标签引入的js是不受同源策略的限制的, 可以通过script标签引入一个js或者是一个其他后缀形式（如php，jsp等）的文件，此文件返回一个js函数的调用 === //
    // === 1 限制: get请求，非敏感信息 === //
    // === 2 具体实现: 在全局挂一个对象存callback，然后创建script节点，等内容获取到后会自动执行callback，然后将script节点和全局对象清除 === //

    let self = this

    window.jp_address = {

      getAddress: (data) => {

        trieTree.init(data)

        // 获取到北京市
        let beijingCity = trieTree.getChild('110000')
        let ret = []
        for (var i in beijingCity) {
          if (typeof beijingCity[i] === 'object') {
            ret.push(beijingCity[i])
          }
        }

        this.props.update_address({
          provinceList: data.province,
          cityList: ret
        })
      },

      getStreet: function (data) {
        self.props.update_address({
          streetList: data
        })
      }
    }

    jsonp.get(api.getAddressApi(), 'address')
    jsonp.delete('address')

  }

  componentWillUnmount () {

    window.jp_address = null

  }
}

if (config.ISDEV) {
  AdminAccount.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    wechat: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  }
}
