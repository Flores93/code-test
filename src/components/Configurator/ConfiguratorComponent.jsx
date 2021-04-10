import { useSelector } from 'react-redux'
import { selectCalculator } from '../../redux/selectors/configuratorSelector'
import Calculator from './Calculator'
import Card from './Card'

const Configurator = () => {
  const calculator = useSelector(selectCalculator)
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
