import './App.css'
import { Homepage } from './Components/HomePage'
import {CounterProvider} from './context/CounterContext'
function App() {
  
  return (
    <CounterProvider >
      <Homepage/>
    </CounterProvider>
  )
}

export default App
