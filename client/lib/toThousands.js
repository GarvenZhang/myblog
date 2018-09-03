// === 价格格式啊: 整数部分千分位, 小数部分指定保留位数 === //

// === 1 先parseInt()获取到整数部分, toFix()获取到指定小数位, 再对整数部分用模运算隔3加上逗号(第一个数字除外), 最后连接字符串 === //
// === 加逗号的思路: 把整数部分的字符串拆解成数组, 在遍历的时候对数组进行unshift操作 === //
function byNumToArr (num, reservedNums) {

  const int = parseInt(num || 0).toString()
  const float = num.toFixed(reservedNums).toString().split('.')[1]

  const ret = []
  let count = 0

  // 整数
  for (let l = int.length; l--; ) {

    ret.unshift(int[l])
    ++count

    if (count % 3 === 0 && count !== int.length) {
      ret.unshift(',')
    }

  }

  // 小数
  reservedNums && ret.push('.' + float)

  return ret.join('')

}

// === 2 先parseInt()获取到整数部分, toFix()获取到指定小数位, 再对整数部分用模运算隔3加上逗号(第一个数字除外), 最后连接字符串 === //
// === 加逗号的思路: 遍历时用chatAt直接取字符进行字符拼接, 把已拼接的字符串放到当前要拼接的字符的后面 === //
function byBumToStr (num, reservedNums) {

  const int = parseInt(num || 0).toString()
  const float = num.toFixed(reservedNums).toString().split('.')[1]

  let ret = ''
  let count = 0

  // 整数
  for (let l = int.length; l--; ) {

    ret = int.charAt(l) + ret
    ++count

    if (count % 3 === 0 && count !== int.length) {
      ret = ',' + ret
    }

  }

  // 小数
  reservedNums && (ret = ret + '.' + float)

  return ret
}

// === 3 先parseInt()获取到整数部分, toFix()获取到指定小数位, 再对整数部分用模运算隔3加上逗号(第一个数字除外), 最后连接字符串 === //
// === 加逗号的思路: 当整数部分长度大于3时用slice(-3)截取倒数3位字符, 并重写整数部分字符串为截取后剩余部分, 以此类推, 最后把 不够3位字符的开头部分 加上 已用逗号整合的部分 再加上 小数部分 === //
function byRemoveNum (num, reservedNums) {

  let int = parseInt(num || 0).toString()
  let float = num.toFixed(reservedNums).toString().split('.')[1]

  let ret = ''

  while (int.length > 3) {

    ret = ',' + int.slice(-3) + ret
    int = int.slice(0, int.length - 3)

  }

  ret = int + ret

  reservedNums && (ret = ret + '.' + float)

  return ret

}

// === 4 先parseInt()获取到整数部分, toFix()获取到指定小数位, 再对整数部分用模运算隔3加上逗号(第一个数字除外), 最后连接字符串 === //
// === 加逗号的思路: === //
// 1 通过 \B: 先匹配每个除了\b外的边界
// 2 通过 \B(?=(\d{3}): 边界后面紧跟着3个数字
// 3 通过 \B(?=(\d{3})(?!\d)): 3个数字后面不能再为数字
// 4 通过 + : 这样的边界在全局匹配多份
export default function byReg (num, reservedNums) {

  let int = parseInt(num || 0).toString()
  let float = num.toFixed(reservedNums).toString().split('.')[1]

  let ret = ''

  ret = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  reservedNums && (ret = ret + '.' + float)

  return ret

}













