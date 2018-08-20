import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './index.css'

import type from '../../../lib/type'
import { api } from '../../fetch/axios'
import { actions as PopupActions } from '../../redux/Popup'

const ImgItem = function (props) {
  return (
    <li className={style['upload-img-item']}>
      <i className={style['btn-delete']} data-id={props.id}>X</i>
      <span className={`${style['upload-progress']} ${props.uploaded !== 0 ? '' : style['hide']}`}>{props.uploaded * 100 + '%'}</span>
      <img className={style['upload-img']} src={props.src} alt={props.name} width='40' height='40' />
    </li>
  )
}

// === 上传漏洞: 用户上传文件后可通过url访问, 上传的文件在后端被当做程序解析, 攻击者的逻辑在服务器端被执行 === //
// === 1 场景: php/asp中尤其严重, 文件可直接通过url访问, 若上传的是php文件会执行, 而nodejs中可设置路由防止真实路径暴露, 不会去主动执行js文件 === //
// === 2 防御: === //
// === 2.1 限制上传后缀: 因后端语言而异后缀处理不一致, 且可欺骗, 不能彻底防御 === //
// === 2.2 文件类型检查: type 是浏览器给的, 但可通过非浏览器发送请求, 达到欺骗效果 === //
// === 2.3 文件内容检查: 不同类型的文件的开头有一定的特征 === //
// === 2.4 程序输出: 不让用户直接访问文件, 而是通过程序读取, 然后返回给用户, 不给文件任何执行的机会, 但对性能有所影响 === //
// === 2.5 权限控制 - 可写可执行互斥, 如可写的文件放一个目录, 可执行的文件放一个目录, 拥有一定权限值得用户可写或可执行 === //

// === 上传拖放： === //
// === 1.目标元素：被拖放元素，dragstart[按下鼠标并开始移动鼠标时触发] - drag[被拖动期间持续触发] - dragend[释放鼠标停止拖动时触发] === //
// === 2.释放区域：dragenter[拖动到其身上时触发] - dragover[在其范围持续拖动时持续触发】 - drop[在其范围释放时触发] - dragleave[离开其范围时触发] === //
// === 3.dragenter 和 dragover 一定要包含event.preventdefault()以阻止默认操作 === //
// === 4.transferData对象：事件对象中有个dataTransfer属性，用于把目标元素处的信息传达到释放区域 === //
// === 5.传递信息：在dragstart中通过 e.transferData.setData() ，在drop中getData() === //
// === 6.从操作系统拖放图片到页面：把图片drop到 释放区域后，图片信息存到了 e.transferData.files, 然后遍历，通过FileReader实例的readAdDataURL()来获取信息，获取完毕后通过实例的 load 事件的e.target.result获取的base64，再赋值给img节点的src属性 === //

// === state如何管理复杂的数据结构？ === //
// === 1. === //

@connect(state => ({
  role: state.UserReducer.role
}))
@connect(state => (null, {...PopupActions}))
export default class Upload extends Component {
  constructor (props) {
    super(props)

    this.state = {  // file存储集合
    // [id]: {
    //   name: '',
    //  src: '',
    //  file: null,
    //  uploaded: 0,
    //  isUploading: false
    // }
    }

    this.dragenterHandle = this.dragenterHandle.bind(this)
    this.dragoverHandle = this.dragoverHandle.bind(this)
    this.dropHandle = this.dropHandle.bind(this)
    this.uploadHandle = this.uploadHandle.bind(this)
    this.deleteHandle = this.deleteHandle.bind(this)
    this.resetHandle = this.resetHandle.bind(this)
    this.preview = this.preview.bind(this)
    this.readFile = this.readFile.bind(this)
    this.ajax = this.ajax.bind(this)
    this.mapHandle = this.mapHandle.bind(this)
  }

  /**
   * 读取出src
   * @param item {Object} item
   * @return {Object} Promise
   */
  readFile (item) {
    let self = this

    return new Promise((resolve, reject) => {
      let reader = new FileReader()

      reader.onload = e => {
        // 找到对应id并更新src
        // 这里用lastModified作为id巧妙地避免了重复图片上传
        for (let id in this.state) {
          let file = this.state[id]
          if (type.isObject(file) && id == (item.file.lastModified + item.file.size)) {
            self.setState({
              [id]: Object.assign({}, item, {
                src: e.target.result
              })
            })

            break
          }
        }

        resolve()
      }

      reader.readAsDataURL(item.file)
    })
  }

  /**
   * 预览图片
   */
  async preview () {
    // 更新imgs
    // 根据files读取出供预览的src
    for (let id in this.state) {
      type.isObject(this.state[id]) && await this.readFile(this.state[id])
    }
  }

  /**
   * ajax请求
   * @param {Object} file 上传文件
   * @param {Number} id
   */
  ajax (item) {

    if (this.props.role !== 1) {
      return this.props.update_popup({
        isOpen: 1,
        header: '提示:',
        content: '您当前只有参阅权限!'
      })
    }

    let xhr = new XMLHttpRequest()

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        this.setState({
          [item.file.lastModified + item.file.size]: Object.assign({}, item, {
            uploaded: e.loaded / e.total
          })
        })
      }
    }

    xhr.open('post', api.uploadImgApi(), true)

    let data = new FormData()
    data.append('file', item.file)
    xhr.send(data)
  }

  /**
   * 上传操作
   */
  uploadHandle () {
    for (let id in this.state) {
      let item = this.state[id]

      if (!type.isObject(item)) {
        continue
      }

      // 展示出进度数据
      this.setState({
        uploadedId: id
      })

      // ajax请求
      this.ajax(item)
    }
  }

  /**
   * 阻止默认事件
   */
  dragenterHandle (e) {
    e.preventDefault()
  }

  /**
   * 阻止默认事件
   */
  dragoverHandle (e) {
    e.preventDefault()
  }

  /**
   * 释放处理
   * @param {Object} e 事件对象
   */
  async dropHandle (e) {
    // 禁止 打开图片 的默认行为
    e.preventDefault()

    // 放进files集合
    for (let item of e.dataTransfer.files) {  // async条件？？
      // 将非图片的文件过滤掉
      if (item.type.indexOf('image/') === -1) {
        return
      }

      // 上限10个图片
      let total_count = this.state.length
      if (total_count >= 11) {
        break
      }

      // 放进数组
      this.setState({
        [item.lastModified + item.size]: {
          name: item.name,
          src: '',
          file: item,
          uploaded: 0
        }
      })
    }

    // 预览
    await this.preview()
  }

  /**
   * 删除处理
   */
  deleteHandle (e) {
    const target = e.target

    if (target.className.indexOf('btn-delete') > -1) {
      this.setState({
        [target.getAttribute('data-id')]: null
      })

      e.stopPropagation()
    }
  }

  /**
   * 重置处理
   */
  resetHandle () {
    // 重置数据
    for (let id in this.state) {
      type.isObject(this.state[id]) && this.setState({
        [id]: null
      })
    }
  }

  /**
   * 转化为数组来遍历
   */
  mapHandle () {
    let arr = []
    for (let key in this.state) {
      type.isObject(this.state[key]) && arr.push(Object.assign({}, this.state[key], {
        id: key
      }))
    }

    return arr
  }

  render () {
    const files = this.mapHandle()

    return (
      <div className={style['upload-wrap']}>
        <ul ref={$area => this.$area = $area} className={style['upload-img-list']}>
          {
            files.map((item, i) => (
              <ImgItem
                key={i}
                id={item.id}
                src={item.src}
                name={item.name}
                uploaded={item.uploaded}
              />
            ))
          }
        </ul>
        <span className={style['upload-tips']}>Upload File: png/jpg/jpeg/webp/gif </span>
        <div className={style['upload-inp-wrap']}>
          <input type='file' className={style['upload-inp']} />
        </div>
        <div className={`${style['upload-btn-wrap']} ${files.length > 0 ? '' : style['hide']}`}>
          <button ref={$uploadBtn => this.$uploadBtn = $uploadBtn} className={style['btn-upload']} type='button'>上传</button>
          <button ref={$resetBtn => this.$resetBtn = $resetBtn} className={style['btn-reset']} type='button'>清空</button>
          {/* <button className="btn-retry hide" type="button">重试</button> */}
        </div>
      </div>
    )
  }

  componentDidMount () {
    // 拖入
    this.$area.addEventListener('dragenter', this.dragenterHandle, false)
    // 在区域上拖动
    this.$area.addEventListener('dragover', this.dragoverHandle, false)
    // 释放
    this.$area.addEventListener('drop', this.dropHandle, false)
    // 删除
    this.$area.addEventListener('click', this.deleteHandle, false)
    // 上传
    this.$uploadBtn.addEventListener('click', this.uploadHandle, false)
    // 重置
    this.$resetBtn.addEventListener('click', this.resetHandle, false)
  }
}
