import { types } from './constants'

const initState = {
  ingredientTxt: 'Monthly ingredient spending',
  processTxt: 'Full-time employees that process invoices',
  foodSavingsTxt: 'Estimated cost food savings',
  annualSavingsTxt: 'Your estimated annual savings',
}

export const configuratorReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CONFIGURATOR_ADD:
      return {
        ...state,
        description: action.payload,
      }

    default:
      return state
  }
}
