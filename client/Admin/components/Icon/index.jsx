import React, { PureComponent } from 'react'

import style from './index.css'

export class SortIcon extends PureComponent {
  constructor (props) {
    super(props)
    
    this.clickHandle = ::this.clickHandle
  }

  clickHandle (e) {

    const direction = e.currentTarget.getAttribute('data-sort-direction')

    switch (direction) {

      case 'up':
        this.props.sort(true)
        break

      case 'down':
        this.props.sort(false)
        break

    }
  }

  render () {
    return (
      <div className={style['icon-wrap']}>
        <i className={style['icon-up']} data-sort-direction='up' onClick={this.clickHandle} />
        <i className={style['icon-down']} data-sort-direction='down' onClick={this.clickHandle} />
      </div>
    )
  }
}
