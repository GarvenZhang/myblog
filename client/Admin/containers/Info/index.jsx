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

    this.selectHandle = this.selectHandle.bind(this)
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

    // === 1.箭头函数没有this，预定义 === //
    // === 2.传统，用self保存 === //

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
