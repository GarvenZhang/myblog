import type from './type'

let datetime = {}

const handleZero = function (num) {
  return num < 10 ? `0${num}` : num
}

datetime.toRegular = function (dateObj) {
  if (!type.isDate(dateObj)) {
    throw new Error('非Date对象！')
  }

  return `${dateObj.getFullYear()}-${handleZero(dateObj.getMonth())}-${handleZero(dateObj.getDate())} ${handleZero(dateObj.getHours())}:${handleZero(dateObj.getMinutes())}:${handleZero(dateObj.getSeconds())}`
}

export default datetime
