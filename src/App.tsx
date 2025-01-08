import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Rum from './Rum'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        My glass of rum!
        <Rum />
      </div>
    </>
  )
}

export default App
