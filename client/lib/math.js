let math = {}

/**
 * @example
 *
 * {1: 10, 2: 0}, 100
 *
 *
 */
function handleNum (special, set) {
  // 浅拷贝
  special = Object.assign({}, special)

  // 补全并放进数组
  let arr = []
  for (let len = set; len--;) {
    arr.push(
      special[len] === undefined
        ? {[len]: 1}
        : {[len]: special[len]}
    )
  }

  // 降序
  arr.sort(function (prev, next) {
    const prevKey = Object.keys(prev)[0]
    const nextKey = Object.keys(next)[0]

    if (prevKey > nextKey) {
      return 1
    } else if (prevKey < nextKey) {
      return -1
    } else {
      return 0
    }
  })

  // 转化格式
  let txtArr = []
  let weightArr = []

  arr.forEach(item => {
    const key = Object.keys(item)[0]

    txtArr.push(key)
    weightArr.push(item[key])
  })

  return {
    txtArr,
    weightArr
  }
}

function handleArrOrStr (special, set) {

}

function handleCustomize (special, set) {

}

/**
 * // === 1.转化成如下格式： === //
 * // === ['一等奖：宝马X6', '二等奖：苹果三件套', '三等奖：威戈背包', '继续努力！'] === //
 * // === [100, 200, 300, 400] === //
 * // === 2.利用 发生概率 = 发生次数 / 总次数 ；=== //
 */
math.random = function (special, set, customize) {
  // 过滤类型
  let type = typeof set
  if (!(type === 'number' || type === 'string' || Array.isArray(set))) {
    return false
  }

  let txtArr
  let weightArr
  let ret

  // 转化格式
  if (customize) {
    ret = handleCustomize(special, set)
  } else if (typeof set === 'number') {
    ret = handleNum(special, set)
  } else {
    ret = handleArrOrStr(special, set)
  }

  txtArr = ret.txtArr
  weightArr = ret.weightArr

  let sum = 0
  let factor = 0
  let random = Math.random()

  for (let l = weightArr.length; l--;) {
    sum += weightArr[l]
  }

  random *= sum

  for (let l = weightArr.length; l--;) {
    factor += weightArr[l]

    if (random <= factor) {
      return txtArr[l]
    }
  }

  return null
}

export default math
