import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { AllRoutes } from './components/AllRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <AllRoutes/>
    </div>
  )
}

export default App
