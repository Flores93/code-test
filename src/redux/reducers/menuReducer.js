import { types } from './constants'

const initState = {
  items: [],
}

export const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case types.NAVBAR_ITEMS_ADD:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}
