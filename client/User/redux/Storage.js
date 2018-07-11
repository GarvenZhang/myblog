import { get, api } from '../fetch/axios'


const initialState = {
  data: {}
}

export const actionTypes = {
  GET_STORAGE: Symbol()
}

export const actions = {

  get_storage () {

    return dispatch => {



    }

  }

}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.GET_STORAGE:
    default:
      return state
  }

}
