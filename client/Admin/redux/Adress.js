const initialState = {
  provinceList: [],
  province: '',
  cityList: [],
  city: '',
  districtList: [],
  district: '',
  streetList: [],
  street: ''
}

export const actionTypes = {
  UPDATE_ADDRESS: 'UPDATE_ADDRESS'
}

export const actions = {

  update_address: (params) => ({
    type: actionTypes.UPDATE_ADDRESS,
    params
  })

}

export function reducer (state = initialState, action) {

  switch (action.type) {

    case actionTypes.UPDATE_ADDRESS:

      return {
        ...state,
        ...action.params
      }

    default:
      return state

  }
}

