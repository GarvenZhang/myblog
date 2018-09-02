/**
 * 事件委托
 * // === 思路: 主要是从target往上找, 不断的parentNode, 其中通过matches(element)判读是否是目标节点, 然后执行回调 === //
 * @param {String} parentSelector - 父选择器
 * @param {String} targetSelector - 目标选择器
 * @param {String|Array} eventName - 事件名称
 * @param {Function} cb - 事件处理程序
 */
export function delegate (parentSelector, targetSelector, eventName, cb) {
  
  if (typeof eventName === 'string') {
    eventName = [eventName]
  }
  
  eventName.forEach(item => {
    document.querySelector(parentSelector).addEventListener(item, _cb, false)
  })

  function _cb (e) {

    e = e || window.event
    let target = e.target || e.srcElement
    const currentTarget = e.currentTarget

    while (target !== currentTarget) {

      target.matches(targetSelector) && cb.call(target)
      target = target.parentNode

    }

  }
}

