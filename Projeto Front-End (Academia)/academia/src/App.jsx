import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainOne from './components/MainOne'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <MainOne />
   </div>
  )
}

export default App
