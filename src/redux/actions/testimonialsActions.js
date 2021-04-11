import { to, types } from '../reducers/constants'

//=====Async=======

export const getTestimonialsItems = () => async (dispatch, getState) => {
  const currentState = getState().testimonials.slider
  if (currentState) {
    console.warn('Testimonials already fetched!')
  } else {
    try {
      const get = await fetch(to.testimonials)
      const res = await get.json()

      dispatch(addTestimonials(res))
    } catch (error) {
      console.error(error)
    }
  }
}

//=====Sync=======

const addTestimonials = payload => ({
  type: types.TESTIMONIALS_ADD,
  payload,
})
