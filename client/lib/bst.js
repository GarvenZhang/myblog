// === 二叉查找树： === //
// === 优点：O(logn)的查找效率和插入效率 === //
// === 使用场景：1.数据量大且随机分布; 2.频繁地查找和插入 === //
// === 缺点：若数据有序，会造成只有左子树或右子树，从而退化为链表，查找变成O(n) === //

import inheritPrototype from './inheritPrototype'

/**
 * 二叉树节点
 * @constructs Node
 * @param {*} data - 数据
 * @param {Object} left - 左子树
 * @param {Object} right - 右子树
 */
function Node (data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

/**
 * 获取数据
 * @return {*}
 */
var show = function () {
  return this.data
}

/**
 * @constructs BST
 * // === 只初始化根节点为null === //
 */
function BST () {
  this.root = null
}

BST.prototype = {

  constructor: BST,

  /**
   * 插入
   * // === 思路： === //
   * // === 1.若没有根节点则新节点为根节点 === //
   * // === 2.否则，循环中，设置一个当前节点变量，从根节点开始，数据比cur小的，cur更新为其左子树，若为null，则将新节点的引用给它，退出循环；右子树的判断同理 === //
   * @param {*} data - 数据
   */
  insert: function (data) {
    var n = new Node(data, null, null)

    if (this.root === null) {
      this.root = n
    } else {
      let cur = this.root
      let parent

      while (true) {
        parent = cur

        if (data < cur.data) {
          cur = cur.left

          if (cur === null) {
            parent.left = n
            break
          }
        } else {
          cur = cur.right

          if (cur === null) {
            parent.right = n
            break
          }
        }
      }
    }
  },

  /**
   * 中序遍历
   * // === 利用递归，顺序为：左子树 - 显示当前节点 - 右子树 === //
   * @param {Object} node - 节点
   * @param {Function} fn - 回调
   */
  inOrder: function inner (node, fn) {
    if (!(node === null)) {
      inner(node.left, fn)
      fn(node.show())
      inner(node.right, fn)
    }
  },

  /**
   * 先序遍历
   * // === 函数表达式中，name为函数内部属性，只在函数内部有效；省略则为匿名函数，如inner === //
   * // === arguments.callee在es5中的严格模式下被禁用，由于性能问题最好递归时不要用匿名函数 === //
   * // === 利用递归，顺序为：显示当前节点 - 左子树 - 右子树 === //
   * @param {Object} node - 节点
   * @param {Function} fn - 回调
   */
  preOrder: function inner (node, fn) {
    if (!(node === null)) {
      fn(node.show())
      inner(node.left, fn)
      inner(node.right, fn)
    }
  },

  /**
   * 后序遍历
   * // === 利用递归，顺序为：左子树 - 右子树 - 显示当前节点 === //
   * @param {Object} node - 节点
   * @param {Function} fn - 回调
   */
  postOrder: function inner (node, fn) {
    if (!(node === null)) {
      inner(node.left, fn)
      inner(node.right, fn)
      fn(node.show())
    }
  },

  /**
   * 获取最小值
   * // === 左子树的顶端永远最小，实质上是链表的查找 === //
   * @param {Object} node - 起点
   * @return {*}
   */
  getMin: function (node) {
    let cur = node || this.root

    while (!(cur.left === null)) {
      cur = cur.left
    }

    return cur.data
  },

  /**
   * 获取最大值
   * // === 右子树的顶端永远最大，实质上是链表的查找 === //
   * @param {Object} node - 起点
   * @return {*}
   */
  getMax: function (node) {
    let cur = node || this.root

    while (!(cur.right === null)) {
      cur = cur.right
    }

    return cur.data
  },

  /**
   * 查找节点
   * // === 只要不为null就继续，若与当前节点的数据相等则返回，否则，小往左，大往右 === //
   * @param {*} data - 数据
   * @return {Null|Object}
   */
  find: function (data) {
    let cur = this.root

    while (cur !== null) {
      if (data === cur.data) {
        return cur
      } else if (data < cur.data) {
        cur = cur.left
      } else {
        cur = cur.right
      }
    }

    return null
  },

  /**
   * 移除节点
   * // === 思路：从根节点开始递归查找，查到目标后，一层层返回 === //
   * // === 4种情况：null, 等于, 小于， 大于 === //
   * // === 等于的时候考虑：无子节点(置为null)，无左子节点(返右子节点)，无右子节点(返左子节点)，都有(替换为找到右子节点的最小值，因为比左后代都大比右后代都小) === //
   * // === 小于的时候，往左子树找；大于的时候往右子节点找 === //
   * @param {Object} node - 节点
   * @param {*} data - 数据
   * @private
   */
  removeNode: function inner (node, data) {
    if (node === null) {
      return null
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null
      }

      if (node.left === null) {
        return node.right
      }

      if (node.right === null) {
        return node.left
      }

      let tmpNode = this.getMin(node.right)
      node.data = tmpNode.data
      node.right = inner(node.right, tmpNode.data)

      return node
    } else if (data < node.data) {
      node.left = inner(node.left, data)
      return node
    } else {
      node.right = inner(node.right, data)
      return node
    }
  },

  /**
   * 移除节点
   * // === 递归到的节点都重新赋值1次 === //
   * @param {*} data - 数据
   */
  remove: function (data) {
    this.root = this.removeNode(this.root, data)
  }

}

// for count:
function Node4C (data, left, right) {
  Node.apply(this, arguments)
  this.count = 1
}

function BST4C () {
  BST.call(this)
}

inheritPrototype(BST4C, BST)

BST4C.prototype.update = function (data) {
  var d = this.find(data)
  ++d.count
  return d
}

export default BST
