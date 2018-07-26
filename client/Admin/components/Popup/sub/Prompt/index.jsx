import React, { Component } from 'react'

import style from './index.css'

class Prompt extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={style['prompt-wrap']}>
        <input type="text" className={style['text']}/>
        <input type="button" className={style['btn-submit']} value='确定'/>
      </div>
    )
  }
}

export default Prompt
