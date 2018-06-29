import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Side from '../../components/Slidebar/index'
import { SecondaryPasswordLogin } from '../../components/Form/index'
import jsonp from '../../../fetch/jsonp'
import trieTree from './trieTree'
import { api } from '../../../fetch/axios'

import style from './index.css'

class AdminAccount extends Component {
  constructor (props) {
    super(props)

    this.state = {
      provinceList: [],
      province: '',
      cityList: [],
      city: '',
      districtList: [],
      district: '',
      streetList: [],
      street: ''
    }

    this.selectHandle = ::this.selectHandle
  }

  static defaultProps = {
    avator: '',
    name: '',
    province: '',
    city: '',
    district: '',
    contact: '',
    wechat: '',
    blog: '',
    github: '',
    account: '',
    access_token: ''
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
        this.setState({
          province: value,
          cityList: ret,
          districtList: [],
          streetList: []
        })
        break

      case 'city':
        this.setState({
          city: value,
          districtList: ret,
          streetList: []
        })
        break

      case 'district':
        this.setState({
          district: value
        })
        jsonp.get(api.getStreetApi(value), 'street')
        jsonp.delete('street')
        break

      case 'street':
        this.setState({
          street: value
        })
        break
    }

  }

  render () {

    const {
      provinceList, cityList, districtList, streetList, province, city, district, street
    } = this.state

    return (
      <div className="admin-info-page admin-inner">
        <div className="sildebar-wrap">
          <Side />
        </div>
        <div className="admin-wrap">
          <section className={style['section--avator']}>
            <span className={style['title']}>头像:</span>
            <img className={style['img']} src="#" alt="头像"/>
          </section>
          <section className={style['section--info']}>
            <form className={style['form']}>
              <div className={style['field']}>
                <span className={style['title']}>昵称:</span>
                <input name='name' className={style['input']} type="text"/>
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
                <input name='contact' className={style['input']} type="number"/>
              </div>
              <div className={style['field']}>
                <span className="title">微信:</span>
                <input name='wechat' className={style['input']} type="text"/>
              </div>
              <div className={style['field']}>
                <span className="title">博客:</span>
                <input name='blog' className={style['input']} type="text"/>
              </div>
              <div className={style['field']}>
                <span className="title">github:</span>
                <input name='github' className={style['input']} type="text"/>
              </div>
              <div className={style['field']}>
                <input type="submit" className="btn-submit" value='确定'/>
                <input type="reset" className="btn-reset" value='重置'/>
              </div>
            </form>
          </section>
          <section className={style['section--account']}>
            <form className={style['form']}>
              <div className={style['field']}>
                <span className={style['title']}>账号:</span>
                <input type="text" className={style['input']} readOnly/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>密码:</span>
                <input type="password" className={style['input']}/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>新密码:</span>
                <input type="password" className={style['input']}/>
              </div>
              <div className={style['field']}>
                <span className={style['title']}>二级密码:</span>
                <input type="password" className={style['input']}/>
              </div>
              <div className={style['field']}>
                <input type="submit" className={style['btn-submit']} value='提交'/>
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

    window.jp = {

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

        this.setState({
          provinceList: data.province,
          cityList: ret
        })
      },

      getStreet: function (data) {
        self.setState({
          streetList: data
        })
      }
    }

    jsonp.get(api.getAddressApi(), 'address')
    jsonp.delete('address')

  }

  componentWillUnmount () {

    window.jp = null

  }
}

if (process.env.NODE_ENV === 'development') {
  AdminAccount.propTypes = {
    avator: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    wechat: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    access_token: PropTypes.string.isRequired
  }
}

export default AdminAccount
