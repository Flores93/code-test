import { combineReducers } from 'redux'

import { configuratorReducer } from './configuratorReducer'
import { menuReducer } from './menuReducer'
import { testimonialsReducer } from './testimonialsReducer'

export const rootReducer = combineReducers({
  configurator: configuratorReducer,
  testimonials: testimonialsReducer,
  menu: menuReducer,
})
