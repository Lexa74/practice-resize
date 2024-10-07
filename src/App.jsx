import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import resizeWindow from "./components/WindowSize";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
            <resizeWindow />
        </div>
    </>
  )
}

export default App
