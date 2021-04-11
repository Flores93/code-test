import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BelloteroButton from '../BelloteroButton'
import Slider from './Slider'

import { selectSlider } from '../../redux/selectors/testimonialsSelectors'
import { getTestimonialsItems } from '../../redux/actions/testimonialsActions'

const TestimonialComponent = () => {
  const dispatch = useDispatch()
  const slider = useSelector(selectSlider)
  const [counter, setCounter] = useState(0)
  const [sliderState, setSliderState] = useState([])

  useEffect(() => {
    dispatch(getTestimonialsItems())
  }, [dispatch])

  useEffect(() => {
    slider && setSliderState(slider.reviews.filter((review, index) => index === counter))
  }, [slider, counter, dispatch])

  if (!slider) {
    return <h3>Loading...</h3>
  }

  const prev = () => {
    setCounter(counter === 0 ? 0 : counter - 1)
    const prevItem = slider.reviews.filter((review, index) => index === counter)
    setSliderState(prevItem)
  }
  const next = () => {
    setCounter(counter === slider.reviews.length - 1 ? slider.reviews.length - 1 : counter + 1)
    const nextItem = slider.reviews.filter((review, index) => index === counter)
    setSliderState(nextItem)
  }

  return (
    <div className="Testimonials">
      <div className="testimonialMargins animate__animated animate__fadeIn">
        <div className="title">
          <h2>
            <b>{slider.title}</b>
          </h2>
        </div>
        {sliderState.map((review, index) => {
          return (
            <Slider
              key={index}
              name={review.name}
              position={review.position}
              comment={review.comment}
            />
          )
        })}
        <div className="BelloteroBtn testimonialsButtons">
          <BelloteroButton
            style={{
              paddingLeft: '30px',
              paddingRight: '30px',
              marginRight: '1px',
            }}
            label={
              <em>
                {counter + 1}/{slider.reviews.length}
              </em>
            }
            disabled
          />
          <BelloteroButton label={<i className="fas fa-arrow-left" />} onClick={prev} />
          <BelloteroButton label={<i className="fas fa-arrow-right" />} onClick={next} />
        </div>
      </div>
    </div>
  )
}

export default TestimonialComponent
