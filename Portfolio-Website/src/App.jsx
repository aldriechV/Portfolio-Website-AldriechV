import React, { useState } from 'react'
import './index.css'
// Component Imports
import Navbar from './components/Navbar/Navbar'
import Card from './components/ProjectCards/Card'

const App = () => {

  const [theme, setTheme] = useState('light');


  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className='projects-grid'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>

  )
}

export default App