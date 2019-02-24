/**
 * 判断回文
 * // === 回文：正着倒着都一样 === //
 * // === 改变字符最容易的思路：转成数组操作后再转回 === //
 * @param {String} key - 字符
 * @return {Boolean}
 */
export default function (key) {

  if (key !== key.split('').reverse().join('')) {
    return false
  }

  this.props.update_popup({
    isOpen: 1,
    header: 'Warning:',
    content: '回文是吧？不行不行~~'
  })

  return true

}
