import { types } from './constants'

const initState = {}

export const testimonialsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.TESTIMONIALS_ADD:
      return action.payload

    default:
      return state
  }
}
