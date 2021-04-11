import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import NavbarComponent from '../components/Navbar'
import Testimonial from '../components/Testimonials'
import Configurator from '../components/Configurator'

const RootRouter = () => {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/page-1" component={Testimonial} />
          <Route exact path="/page-2" component={Configurator} />

          <Redirect to="page-1" />
        </Switch>
      </div>
    </Router>
  )
}

export default RootRouter
