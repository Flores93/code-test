import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const Calculator = () => {
  const BelloteroSlider = withStyles({
    root: {
      color: '#071eb3',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider)
  return (
    <div>
      <BelloteroSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={10} />
      <br />
      <BelloteroSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={35} />
    </div>
  )
}

export default Calculator
