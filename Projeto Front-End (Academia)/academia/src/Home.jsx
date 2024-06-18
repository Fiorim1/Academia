import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainOne from './components/MainOne'
import MainTwo from './components/MainTwo'
import MainThree from './components/MainThree'
import Plans from './components/Plans'
import Footer from './components/Footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <MainOne />
    <MainTwo />
    <MainThree />
    <Plans />
    <Footer />
   </div>
  )
}

export default Home
