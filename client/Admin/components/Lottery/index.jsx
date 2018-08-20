// === 抽奖: === //

// === 重放攻击: === //
// === 1 流程: 请求被窃听或记录, 在某个时间段再次发起相同请求, 以致产生意外的结果 === //
// === 2 场景: === //
// === 2.1 下单多次: 用户被多次消费 === //
// === 2.2 再次登录: 用户登录态被盗取 === //
// === 2.3 多次抽奖/投票 === //
// === 3 防御: === //
// === 3.1 加密(HTTPS): 防止请求被窃听 === //
// === 3.2 加时间戳: 即使请求泄露也让它之后的失效, 如多少时间后再次发会无效 === //
// === 3.3 token(session): 每次发请求会要求带上一个token, token是由后端授权的 === //
// === 3.4 nonce: number once, 即只用一次的数字, 可由前端生产, 发给后端后记录, 之后看到相同的就无效 === //
// === 3.5 签名: 配合token/nonce, 防止被篡改 === //

import React, { Component } from 'react'

import './index.css'

class Lottery extends Component {
  constructor (props) {
    super(props)
    
  }
  
  render () {
   
    return (
      <div className="lottery-wrap">
      
      </div>
    )
  }
}

export default Lottery
