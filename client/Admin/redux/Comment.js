const initialState = {

}

export const actionTypes = {
  GET_COMMENTS: 'GET_COMMENTS',
  RESPONSE_COMMENTS: 'RESPONSE_COMMENTS'
}

export const actions = {
  get_comments: function (id, page_num) {
    return {
      type: actionTypes.GET_COMMENTS,
      id,
      page_num
    }
  }
}
