import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='menu'>
          <Menu/>
        </div>
        <div id="about">
          <About/>
        </div>
      </main>
    </div>
  )
}

export default App
