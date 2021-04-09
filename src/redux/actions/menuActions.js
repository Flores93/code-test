import { to, types } from '../reducers/constants'

//=====Async=======

export const getNavBarItems = () => async (dispatch, getState) => {
  const currentState = getState().menu
  if (!!currentState) {
    try {
      const get = await fetch(to.navBar)
      const res = await get.json()

      dispatch(addNavBarItems(res.menu.items))
    } catch (error) {
      console.error(error)
    }
  } else {
    console.warn('menu already fetched! :D')
  }
}

const addNavBarItems = payload => ({
  type: types.NAVBAR_ITEMS_ADD,
  payload,
})
