import { Provider } from 'react-redux'
import { store } from './store'

const TheOnlySourceOfTruth = ({ children }) => <Provider store={store}>{children}</Provider>

export default TheOnlySourceOfTruth
