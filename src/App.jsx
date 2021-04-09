import RootRouter from './routes/RootRouter'

import TheOnlySourceOfTruth from './redux/store/TheOnlySourceOfTruth'

import './assets/styles/App.css'

function App() {
  return (
    <TheOnlySourceOfTruth>
      <RootRouter />
    </TheOnlySourceOfTruth>
  )
}

export default App
