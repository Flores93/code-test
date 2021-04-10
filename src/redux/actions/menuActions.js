import { to, types } from '../reducers/constants'

//=====Async=======

export const getNavBarItems = () => async dispatch => {
  try {
    const get = await fetch(to.navBar)
    const res = await get.json()

    dispatch(addNavBarItems(res.menu.items))
  } catch (error) {
    console.error(error)
  }
}

const addNavBarItems = payload => ({
  type: types.NAVBAR_ITEMS_ADD,
  payload,
})
