import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sildebar from './components/Slidebar/index'
import AdminAccount from './containers/AdminAccount/index'
import AdminArticlePost from './containers/AdminArticlePost/index'
import AdminArticleTag from './containers/AdminArticleTag/index'
import AdminChatroom from './containers/AdminChatroom/index'
import AdminComment from './containers/AdminComment/index'
import AdminWorks from './containers/AdminWorks/index'

import './index.css'

class Admin extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="admin-page">
        <div className="sildebar-wrap">
          <Sildebar />
        </div>
        <div className="admin-wrap">
          <Route exact path='/admin' component={AdminArticlePost}/>
          <Route path='/admin/account' component={AdminAccount}/>
          <Route path='/admin/article-tag' component={AdminArticleTag}/>
          <Route path='/admin/chatroom' component={AdminChatroom}/>
          <Route path='/admin/comment' component={AdminComment}/>
          <Route path='/admin/works' component={AdminWorks}/>
        </div>
      </div>
    )
  }
}

export default Admin
