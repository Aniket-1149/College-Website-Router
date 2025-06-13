import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Colleges from './components/Colleges'
import Programmes from './components/Programmes'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutVisionSlider from './components/AboutVisionSlider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <AboutVisionSlider/>
      <Colleges/>
      <Programmes/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
