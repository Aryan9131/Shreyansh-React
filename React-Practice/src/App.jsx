import { useState } from 'react'
import './App.css'
import { Homepage } from './Components/HomePage'
import { Provider } from 'react-redux'
import { store } from './redux/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Homepage/>
    </Provider>
  )
}

export default App
