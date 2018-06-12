let _data = {}
let root = {
  id: 0,
  text: ''
}

function Node (id, text) {
  this.id = id
  this.text = text
}

let trieTree = {

  createTree: function () {
    const initProvince = _data.province
    const initCity = _data.city
    const initDistrict = _data.district

    // 遍历省
    // 将对应的市放进去
    // 将对应的区放进去
    const recursiveInsert = function (children, parent) {
      children.forEach(item => {
        const id = item.id
        let prefixId
        let ret

        // 城
        if (id.slice(2) === '0000') {
          prefixId = id.substr(0, 2)
          ret = initCity.filter(_item => _item.id.substr(0, 2) === prefixId)

        // 市
        } else if (id.slice(4) === '00') {
          prefixId = id.slice(2, 4)
          ret = initDistrict.filter(_item => _item.id.substr(0, 4) === `${id.substr(0, 2)}${prefixId}`)

        // 区
        } else {
          prefixId = id.slice(4, 6)
        }

        parent[prefixId] = new Node(item.id, item.text)

        ret && recursiveInsert(ret, parent[prefixId])
      })
    }

    // 入口
    recursiveInsert(initProvince, root)
  },

  getChild: function (id) {
    id += ''

    let i = 0
    let curId
    let curItem

    do {
      curId = id.substr(i, 2)
      curItem = i === 0 ? root[curId] : curItem[curId]
      i += 2
    } while (id.substr(i, 2) !== '00' && i < id.length)

    // 容错
    return curItem || {}
  },

  init: function (data) {
    _data = data
    this.createTree()
  }

}

export default trieTree
