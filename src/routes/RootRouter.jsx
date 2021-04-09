import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import NavbarComponent from '../components/Navbar'
import Testimonial from '../components/Testimonials'
import Configurator from '../components/Configurator'

import { getNavBarItems } from '../redux/actions/menuActions'
import { selectMenuItems } from '../redux/selectors/navbarSelector'
import { getTestimonialsItems } from '../redux/actions/testimonialsActions'

const RootRouter = () => {
  const dispatch = useDispatch()
  const menuItems = useSelector(selectMenuItems)
  useEffect(() => {
    dispatch(getNavBarItems())
    dispatch(getTestimonialsItems())
  }, [dispatch])
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-5">
        <Switch>
          {menuItems.map(({ route, text }) => (
            <Route
              key={text}
              exact
              path={`/${route}`}
              component={text === 'Testimonial' ? Testimonial : Configurator}
            />
          ))}

          <Redirect to="page-1" />
        </Switch>
      </div>
    </Router>
  )
}

export default RootRouter
