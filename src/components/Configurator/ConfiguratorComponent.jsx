import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Calculator from './Calculator'
import Card from './Card'

import { getConfigurator } from '../../redux/actions/configuratorActions'
import { selectCalculator } from '../../redux/selectors/configuratorSelector'

const Configurator = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfigurator())
  }, [dispatch])

  const calculator = useSelector(selectCalculator)

  if (!calculator) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="Configurator">
      <div className="testimonialMargins animate__animated animate__fadeIn">
        <div className="row">
          <div className="col">
            <Card title={calculator.title} description={calculator.description} />
          </div>
          <div className="col">
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configurator
