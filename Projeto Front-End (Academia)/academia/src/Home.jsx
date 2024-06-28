import './App.css'
import MainOne from './components/MainOne'
import MainTwo from './components/MainTwo'
import MainThree from './components/MainThree'
import Plans from './components/Plans'
import Footer from './components/Footer'
import HeaderPrincipal from './components/HeaderPrincipal'

function Home() {

  return (
   <div>
    <HeaderPrincipal />
    <MainOne />
    <MainTwo />
    <MainThree />
    <Plans />
    <Footer />
   </div>
  )
}

export default Home
