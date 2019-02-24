import reg from '../../../lib/reg'

/**
 * 将任意长数字变成逗号分隔
 * 通过前缀 $: 激活
 * @return {Boolean}
 */
export default function () {
  let str = this.state.key

  if (str.indexOf('$:') !== 0) {
    return false
  }

  str = str.slice(2)
    .trim()
    .replace(reg.num2money, ',')

  this.setState({
    key: str
  })

  return str
}