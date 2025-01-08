import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Glass from './Glass'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        My glass of rum!
        <Glass />
      </div>
    </>
  )
}

export default App
