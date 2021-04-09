import { to, types } from '../reducers/constants'

//=====Async=======

export const getConfigurator = () => async (dispatch, getState) => {
  const currentState = getState().menu
  if (!!currentState) {
    try {
      const get = await fetch(to.configurator)
      const res = await get.json()

      dispatch(addConfigurator(res))
    } catch (error) {
      console.error(error)
    }
  } else {
    console.warn('menu already fetched! :D')
  }
}

//=====Sync=======

const addConfigurator = payload => ({
  type: types.CONFIGURATOR_ADD,
  payload,
})
