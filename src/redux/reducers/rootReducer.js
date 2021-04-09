import { combineReducers } from 'redux'

import { menuReducer } from './menuReducer'
import { testimonialsReducer } from './testimonialsReducer'

export const rootReducer = combineReducers({
  testimonials: testimonialsReducer,
  menu: menuReducer,
})
