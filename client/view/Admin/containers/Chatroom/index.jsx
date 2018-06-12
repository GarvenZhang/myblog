import React, { Component } from 'react'

import { ChatroomLogin } from '../../components/Form'

import './index.css'

class AdminChatroom extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='admin-chatroom-wrap admin-inner'>
        <ChatroomLogin />
      </div>
    )
  }
}

export default AdminChatroom
