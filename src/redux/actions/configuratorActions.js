import { to, types } from '../reducers/constants'

//=====Async=======

export const getConfigurator = () => async (dispatch, getState) => {
  const currentState = getState().configurator.description
  if (currentState) {
    console.warn('Configurator already fetched!')
  } else {
    try {
      const get = await fetch(to.configurator)
      const res = await get.json()

      dispatch(addConfigurator(res))
    } catch (error) {
      console.error(error)
    }
  }
}

//=====Sync=======

const addConfigurator = payload => ({
  type: types.CONFIGURATOR_ADD,
  payload,
})
