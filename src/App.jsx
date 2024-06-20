import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'

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
      </main>
    </div>
  )
}

export default App
