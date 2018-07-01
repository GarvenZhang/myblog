const initialState = {

}

export const actionTypes = {
  GET_COMMENTS: Symbol(),
  RESPONSE_COMMENTS: Symbol()
}

export const actions = {
  get_comments: function (id, pageNum) {
    return {
      type: actionTypes.GET_COMMENTS,
      id,
      pageNum
    }
  }
}
