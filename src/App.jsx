import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Header from './components/Header'
import Pernts from './components/Pernts'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Navbar/>
     <Hero/>
     <Card/>
      <Header/>
      <Pernts/>
      <Footer/>
    </>
  )
}

export default App
