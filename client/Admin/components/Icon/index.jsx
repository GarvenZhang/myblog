import React, { Component } from 'react'

import './index.css'

export function SortIcon (props) {
  return (
    <div className='icon-wrap'>
      <i className='icon-up' onClick={() => props.sort()(true)} />
      <i className='icon-down' onClick={() => props.sort()(false)} />
    </div>
  )
}
