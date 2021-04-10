import Slider from '@material-ui/core/Slider'
import { selectConfigurator } from '../../redux/selectors/configuratorSelector'
import { useSelector } from 'react-redux'
import { InputAdornment, makeStyles, TextField } from '@material-ui/core'
import { useState } from 'react'
import { formatNumber } from '../../utils/numbers'

const useStyles = makeStyles(theme => ({
  textField: {
    width: 192,
    height: 52,
    border: '1px #d6dcff solid',
    justifyContent: 'center',
    textAlign: 'flex-end',
  },
  textField2: {
    width: 192,
    height: 52,
    border: '1px #d6dcff solid',
    justifyContent: 'center',
    paddingLeft: 10,
  },
}))

const Calculator = () => {
  const classes = useStyles()
  const { ingredientTxt, annualSavingsTxt, foodSavingsTxt, processTxt } = useSelector(
    selectConfigurator
  )
  const [monthlyIngredientSpending, setmonthlyIngredientSpending] = useState(45)
  const [fullTimeEmployees, setFullTimeEmployees] = useState(8)

  return (
    <div>
      <div className="row mb-5">
        <div className="col">
          <b>{ingredientTxt}</b>
        </div>
        <div className="col">
          <TextField
            className={classes.textField}
            InputProps={{
              style: { fontSize: 40, textAlign: 'flex-end' },
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <div style={{ fontSize: 25, color: 'grey' }}>&nbsp;&nbsp;$</div>
                </InputAdornment>
              ),
            }}
            value={formatNumber(monthlyIngredientSpending * 0.3)}
          />
        </div>
        <Slider
          valueLabelDisplay="auto"
          style={{ color: '#071eb3' }}
          min={10}
          max={100}
          value={monthlyIngredientSpending}
          onChange={(_, val) => setmonthlyIngredientSpending(val)}
        />
      </div>
      <div className="row mb-5">
        <div className="col">
          <b>{processTxt}</b>
        </div>
        <div className="col">
          <TextField
            className={classes.textField2}
            InputProps={{
              style: { fontSize: 35 },
              disableUnderline: true,
            }}
            value={formatNumber(fullTimeEmployees * 1337 + monthlyIngredientSpending * 0.3)}
          />
        </div>
        <Slider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          style={{ color: '#071eb3' }}
          min={1}
          max={10}
          value={fullTimeEmployees}
          onChange={(_, val) => setFullTimeEmployees(val)}
        />
      </div>
      <div className="row">
        <div className="col">
          <h3 className="titleEstimates">
            <span className="symbol"> $ </span>
            <span className="estimates">{formatNumber(monthlyIngredientSpending * 0.3)}</span>
          </h3>
          <b>{foodSavingsTxt}</b>
        </div>
        <div className="col">
          <h3 className="titleEstimates">
            <span className="symbol"> $ </span>
            <span className="estimates">
              {formatNumber(fullTimeEmployees * 1337 + monthlyIngredientSpending * 0.3)}
            </span>
          </h3>
          <b>{annualSavingsTxt}</b>
        </div>
      </div>
    </div>
  )
}

export default Calculator
